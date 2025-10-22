import React, {Component, forwardRef, useImperativeHandle} from 'react';
import {polyfill} from 'react-lifecycles-compat';
import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {ArrowUpFromDot, BookmarkPlus, X} from 'lucide-react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {BORDER_RADIUS} from "@/theme/globals";

const { height, width } = Dimensions.get('window');

export interface CardStackRef {
  // Swipe methods for external control
  swipeLeft: (duration?: number | null) => void;
  swipeRight: (duration?: number | null) => void;
  swipeTop: (duration?: number | null) => void;
  swipeBottom: (duration?: number | null) => void;

  // Go back methods
  goBackFromLeft: () => void;
  goBackFromRight: () => void;
  goBackFromTop: () => void;
  goBackFromBottom: () => void;

  // State access methods
  getCurrentIndex: () => number;
  getCurrentCard: () => React.ReactElement | null;
  getTotalCards: () => number;

  // Utility methods
  initDeck: () => void;
}

export interface CardStackProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  cardContainerStyle?: StyleProp<ViewStyle>;
  secondCardZoom?: number;
  loop?: boolean;
  initialIndex?: number;
  renderNoMoreCards?: () => React.ReactNode;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
  onSwiped?: (index: number) => void;
  onSwipedLeft?: (index: number) => void;
  onSwipedRight?: (index: number) => void;
  onSwipedTop?: (index: number) => void;
  onSwipedBottom?: (index: number) => void;
  onSwipedAll?: () => void;
  onSwipe?: (x: number, y: number) => void;
  disableBottomSwipe?: boolean;
  disableLeftSwipe?: boolean;
  disableRightSwipe?: boolean;
  disableTopSwipe?: boolean;
  // New: Disable vertical dismiss while still firing callbacks and bouncing back
  disableVerticalSwipe?: boolean;
  verticalSwipe?: boolean;
  verticalThreshold?: number;
  horizontalSwipe?: boolean;
  horizontalThreshold?: number;
  outputRotationRange?: string[];
  duration?: number;
  useNativeDriver?: boolean;
}

interface CardStackState {
  drag: Animated.ValueXY;
  dragDistance: Animated.Value;
  sindex: number;
  cardA: React.ReactElement | null;
  cardB: React.ReactElement | null;
  topCard: 'cardA' | 'cardB';
  cards: React.ReactElement[];
  touchStart: number;
  cardADimensions: { width: number; height: number; borderRadius: number } | null;
  cardBDimensions: { width: number; height: number; borderRadius: number } | null;
}

type SwipeDirection = 'left' | 'right' | 'top' | 'bottom';

class CardStack extends Component<CardStackProps, CardStackState> {
  private _panResponder: PanResponderInstance;
  private distance: (x: number, y: number) => number;
  private isCardSwitching: boolean = false;

  static distance(x: number, y: number): number {
    return Math.hypot(x, y);
  }

  static defaultProps: Partial<CardStackProps> = {
    style: {},
    cardContainerStyle: {},
    secondCardZoom: 0.95,
    loop: false,
    initialIndex: 0,
    renderNoMoreCards: () => <Text>No More Cards</Text>,
    onSwipeStart: () => null,
    onSwipeEnd: () => null,
    onSwiped: () => {},
    onSwipedLeft: () => {},
    onSwipedRight: () => {},
    onSwipedTop: () => {},
    onSwipedBottom: () => {},
    onSwipedAll: async () => {},
    onSwipe: () => {},
    disableBottomSwipe: false,
    disableLeftSwipe: false,
    disableRightSwipe: false,
    disableTopSwipe: false,
    disableVerticalSwipe: false,
    verticalSwipe: true,
    verticalThreshold: height / 4,
    horizontalSwipe: true,
    horizontalThreshold: width / 2,
    outputRotationRange: ['-15deg', '0deg', '15deg'],
    duration: 300,
    useNativeDriver: false,
  };

  constructor(props: CardStackProps) {
    super(props);
    this.state = {
      drag: new Animated.ValueXY({ x: 0, y: 0 }),
      dragDistance: new Animated.Value(0),
      sindex: 0,
      cardA: null,
      cardB: null,
      topCard: 'cardA',
      cards: [],
      touchStart: 0,
      cardADimensions: null,
      cardBDimensions: null,
    };
    this.distance = CardStack.distance;
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => false,
      onStartShouldSetPanResponderCapture: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => false,
      onMoveShouldSetPanResponder: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        return Math.sqrt(Math.pow(gestureState.dx, 2) + Math.pow(gestureState.dy, 2)) > 10
      },
      onMoveShouldSetPanResponderCapture: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        return Math.sqrt(Math.pow(gestureState.dx, 2) + Math.pow(gestureState.dy, 2)) > 10
      },
      onPanResponderGrant: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        this.props.onSwipeStart?.();
        this.setState({ touchStart: new Date().getTime() });
      },
      onPanResponderMove: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        const movedX = gestureState.moveX - gestureState.x0;
        const movedY = gestureState.moveY - gestureState.y0;
        this.props.onSwipe?.(movedX, movedY);
        const { verticalSwipe, horizontalSwipe } = this.props;
        const dragDistance = this.distance((horizontalSwipe) ? gestureState.dx : 0, (verticalSwipe) ? gestureState.dy : 0);
        this.state.dragDistance.setValue(dragDistance);
        this.state.drag.setValue({x: (horizontalSwipe) ? gestureState.dx : 0, y: gestureState.dy});
      },
      onPanResponderTerminationRequest: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => true,
      onPanResponderRelease: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        this.props.onSwipeEnd?.();
        const currentTime = new Date().getTime();
        const swipeDuration = currentTime - this.state.touchStart;
        const {
          verticalThreshold,
          horizontalThreshold,
          disableTopSwipe,
          disableLeftSwipe,
          disableRightSwipe,
          disableBottomSwipe,
        } = this.props;

        if (((Math.abs(gestureState.dx) > horizontalThreshold!) ||
          (Math.abs(gestureState.dx) > horizontalThreshold! * 0.6 &&
            swipeDuration < 150)
        ) && this.props.horizontalSwipe) {

          const swipeDirection = (gestureState.dx < 0) ? width * -1.5 : width * 1.5;
          if (swipeDirection < 0 && !disableLeftSwipe) {
            this._nextCard('left', swipeDirection, gestureState.dy, this.props.duration!);
          }
          else if (swipeDirection > 0 && !disableRightSwipe) {
            this._nextCard('right', swipeDirection, gestureState.dy, this.props.duration!);
          }
          else {
            this._resetCard();
          }
        } else if (((Math.abs(gestureState.dy) > verticalThreshold!) ||
          (Math.abs(gestureState.dy) > verticalThreshold! * 0.8 &&
            swipeDuration < 150)
        )) {

          const verticalEnabled = this.props.verticalSwipe && !this.props.disableVerticalSwipe;
          const swipeDirection = (gestureState.dy < 0) ? height * -1 : height;
          if (swipeDirection < 0) {
            if (verticalEnabled && !disableTopSwipe) {
              this._nextCard('top', gestureState.dx, swipeDirection, this.props.duration!);
            } else {
              // Fire vertical handlers even when vertical swipe is disabled
              const index = this.getCurrentIndex();
              this.props.onSwipedTop?.(index);
              if (this.state.cards[index] && (this.state.cards[index].props as any).onSwipedTop)
                (this.state.cards[index].props as any).onSwipedTop();
              this._resetCard();
            }
          } else if (swipeDirection > 0) {
            if (verticalEnabled && !disableBottomSwipe) {
              this._nextCard('bottom', gestureState.dx, swipeDirection, this.props.duration!);
            } else {
              // Fire vertical handlers even when vertical swipe is disabled
              const index = this.getCurrentIndex();
              this.props.onSwipedBottom?.(index);
              if (this.state.cards[index] && (this.state.cards[index].props as any).onSwipedBottom)
                (this.state.cards[index].props as any).onSwipedBottom();
              this._resetCard();
            }
          }
        }
        else {
          this._resetCard();
        }
      },
      onPanResponderTerminate: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
      },
      onShouldBlockNativeResponder: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        return true;
      },
    });
  }

  componentDidUpdate(prevProps: CardStackProps): void {
    if (typeof this.props.children === 'undefined') return;
    if (!this._isSameChildren(this.props.children, prevProps.children)) {
      const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
      let aIndex = (this.state.topCard == 'cardA') ?
        this._getIndex(this.state.sindex - 2, children.length) :
        this._getIndex(this.state.sindex - 1, children.length);
      let bIndex = (this.state.topCard == 'cardB') ?
        this._getIndex(this.state.sindex - 2, children.length) :
        this._getIndex(this.state.sindex - 1, children.length);
      this.setState({
        cards: children as React.ReactElement[],
        cardA: children[aIndex] as React.ReactElement || null,
        cardB: children[bIndex] as React.ReactElement || null
      });
    }
  }

  render(): React.ReactElement {
    const {secondCardZoom, renderNoMoreCards} = this.props;
    const {
      drag,
      dragDistance,
      cardA,
      cardB,
      topCard,
      sindex,
      cardADimensions,
      cardBDimensions
    } = this.state;

    const scale = dragDistance.interpolate({
      inputRange: [0, 10, 220],
      outputRange: [secondCardZoom!, secondCardZoom!, 1],
      extrapolate: 'clamp',
    });
    const opacity = dragDistance.interpolate({
      inputRange: [0, 10, 220],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    const rotate = drag.x.interpolate({
      inputRange: [width * -1.5, 0, width * 1.5],
      outputRange: this.props.outputRotationRange!,
      extrapolate: 'clamp',
    });

    // Overlay animations for swipe feedback
    const rightSwipeOpacity = drag.x.interpolate({
      inputRange: [0, 65, 150],
      outputRange: [0, 0.8, 1.0],
      extrapolate: 'clamp',
    });

    const leftSwipeOpacity = drag.x.interpolate({
      inputRange: [-150, -65, 0],
      outputRange: [1.0, 0.8, 0],
      extrapolate: 'clamp',
    });

    const topSwipeOpacity = drag.y.interpolate({
      inputRange: [-150, -65, 0],
      outputRange: [1.0, 0.8, 0],
      extrapolate: 'clamp',
    });

    return (
      <View {...this._panResponder.panHandlers} style={[{position: 'relative'}, this.props.style]}>

        {renderNoMoreCards?.()}

        <Animated.View
          {...this._setPointerEvents(topCard, 'cardB')}
          style={[{
            position: 'absolute',
            zIndex: (topCard === 'cardB') ? 3 : 2,
            opacity: (topCard === 'cardB') ? 1 : (this.isCardSwitching ? 0 : opacity),
            transform: [
              {rotate: (topCard === 'cardB') ? rotate : '0deg'},
              {translateX: (topCard === 'cardB') ? drag.x : 0},
              {translateY: (topCard === 'cardB') ? drag.y : 0},
              {scale: (topCard === 'cardB') ? 1 : scale},
            ]
          }, this.props.cardContainerStyle]}
          onLayout={this.handleCardBLayout}>
          {cardB}
        </Animated.View>
        <Animated.View
          {...this._setPointerEvents(topCard, 'cardA')}
          style={[{
            position: 'absolute',
            zIndex: (topCard === 'cardA') ? 3 : 2,
            opacity: (topCard === 'cardA') ? 1 : (this.isCardSwitching ? 0 : opacity),
            transform: [
              {rotate: (topCard === 'cardA') ? rotate : '0deg'},
              {translateX: (topCard === 'cardA') ? drag.x : 0},
              {translateY: (topCard === 'cardA') ? drag.y : 0},
              {scale: (topCard === 'cardA') ? 1 : scale},
            ]
          }, this.props.cardContainerStyle]}
          onLayout={this.handleCardALayout}>
          {cardA}
        </Animated.View>

        {/* CardA の右スワイプオーバーレイ - 動的サイズ */}
        {cardADimensions && (topCard === 'cardA') && (
          <Animated.View
            pointerEvents="none"
            style={[{
              position: 'absolute',
              width: cardADimensions.width,
              height: cardADimensions.height,
              borderRadius: cardADimensions.borderRadius,
              zIndex: 4,
              opacity: rightSwipeOpacity,
              transform: [
                {rotate: rotate},
                {translateX: drag.x},
                {translateY: drag.y},
              ]
            }, this.props.cardContainerStyle]}>
            <LinearGradient
              key={`cardA-right-${sindex}`}
              colors={['rgb(0,62,112)', 'rgba(0, 62, 112, 0.4)']}
              style={{
                flex: 1,
                borderRadius: cardADimensions.borderRadius,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 20,
              }}
            >
              <View style={{alignItems: 'center'}}>
                <BookmarkPlus color="white" size={41}/>
                <Text style={{color: 'white', marginTop: 6, fontWeight: "bold", fontSize: 20}}>保存</Text>
              </View>
            </LinearGradient>
          </Animated.View>
        )}

        {/* CardA の左スワイプオーバーレイ - 動的サイズ */}
        {cardADimensions && (topCard === 'cardA') && (
          <Animated.View
            pointerEvents="none"
            style={[{
              position: 'absolute',
              width: cardADimensions.width,
              height: cardADimensions.height,
              borderRadius: cardADimensions.borderRadius,
              zIndex: 4,
              opacity: leftSwipeOpacity,
              transform: [
                {rotate: rotate},
                {translateX: drag.x},
                {translateY: drag.y},
              ]
            }, this.props.cardContainerStyle]}>
            <LinearGradient
              key={`cardA-left-${sindex}`}
              colors={['rgb(0,62,112)', 'rgba(0, 62, 112, 0.4)']}
              style={{
                flex: 1,
                borderRadius: cardADimensions.borderRadius,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                padding: 20,
              }}
            >
              <View style={{alignItems: 'center'}}>
                <X color="white" size={41}/>
                <Text style={{color: 'white', marginTop: 6, fontWeight: "bold", fontSize: 20}}>非表示</Text>
              </View>
            </LinearGradient>
          </Animated.View>
        )}

        {/* CardA の上スワイプオーバーレイ - 動的サイズ */}
        {cardADimensions && (topCard === 'cardA') && (
          <Animated.View
            pointerEvents="none"
            style={[{
              position: 'absolute',
              width: cardADimensions.width,
              height: cardADimensions.height,
              borderRadius: cardADimensions.borderRadius,
              zIndex: 4,
              opacity: topSwipeOpacity,
              transform: [
                {rotate: rotate},
                {translateX: drag.x},
                {translateY: drag.y},
              ]
            }, this.props.cardContainerStyle]}>
            <LinearGradient
              key={`cardA-top-${sindex}`}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              locations={[0, 0.5, 1]}
              colors={['rgba(0, 62, 112, 0.4)', 'rgb(0,62,112)', 'rgba(0, 62, 112, 0.4)']}
              style={{
                flex: 1,
                borderRadius: cardADimensions.borderRadius,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <View style={{alignItems: 'center'}}>
                <ArrowUpFromDot color="white" size={41}/>
                <Text style={{color: 'white', marginTop: 6, fontWeight: "bold", fontSize: 20}}>記事を読む</Text>
              </View>
            </LinearGradient>
          </Animated.View>
        )}

        {/* CardB の右スワイプオーバーレイ - 動的サイズ */}
        {cardBDimensions && (topCard === 'cardB') && (
          <Animated.View
            pointerEvents="none"
            style={[{
              position: 'absolute',
              width: cardBDimensions.width,
              height: cardBDimensions.height,
              borderRadius: cardBDimensions.borderRadius,
              zIndex: 4,
              opacity: rightSwipeOpacity,
              transform: [
                {rotate: rotate},
                {translateX: drag.x},
                {translateY: drag.y},
              ]
            }, this.props.cardContainerStyle]}>
            <LinearGradient
              key={`cardB-right-${sindex}`}
              colors={['rgb(0,62,112)', 'rgba(0, 62, 112, 0.4)']}
              style={{
                flex: 1,
                borderRadius: cardBDimensions.borderRadius,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 20,
              }}
            >
              <View style={{alignItems: 'center'}}>
                <BookmarkPlus color="white" size={41}/>
                <Text style={{color: 'white', marginTop: 6, fontWeight: "bold", fontSize: 20}}>保存</Text>
              </View>
            </LinearGradient>
          </Animated.View>
        )}

        {/* CardB の左スワイプオーバーレイ - 動的サイズ */}
        {cardBDimensions && (topCard === 'cardB') && (
          <Animated.View
            pointerEvents="none"
            style={[{
              position: 'absolute',
              width: cardBDimensions.width,
              height: cardBDimensions.height,
              borderRadius: cardBDimensions.borderRadius,
              zIndex: 4,
              opacity: leftSwipeOpacity,
              transform: [
                {rotate: rotate},
                {translateX: drag.x},
                {translateY: drag.y},
              ]
            }, this.props.cardContainerStyle]}>
            <LinearGradient
              key={`cardB-left-${sindex}`}
              colors={['rgb(0,62,112)', 'rgba(0, 62, 112, 0.4)']}
              style={{
                flex: 1,
                borderRadius: cardBDimensions.borderRadius,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                padding: 20,
              }}
            >
              <View style={{alignItems: 'center'}}>
                <X color="white" size={41}/>
                <Text style={{color: 'white', marginTop: 6, fontWeight: "bold", fontSize: 20}}>非表示</Text>
              </View>
            </LinearGradient>
          </Animated.View>
        )}

        {/* CardB の上スワイプオーバーレイ - 動的サイズ */}
        {cardBDimensions && (topCard === 'cardB') && (
          <Animated.View
            pointerEvents="none"
            style={[{
              position: 'absolute',
              width: cardBDimensions.width,
              height: cardBDimensions.height,
              borderRadius: cardBDimensions.borderRadius,
              zIndex: 4,
              opacity: topSwipeOpacity,
              transform: [
                {rotate: rotate},
                {translateX: drag.x},
                {translateY: drag.y},
              ]
            }, this.props.cardContainerStyle]}>
            <LinearGradient
              key={`cardB-top-${sindex}`}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              locations={[0, 0.5, 1]}
              colors={['rgba(0, 62, 112, 0.4)', 'rgb(0,62,112)', 'rgba(0, 62, 112, 0.4)']}
              style={{
                flex: 1,
                borderRadius: cardBDimensions.borderRadius,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <View style={{alignItems: 'center'}}>
                <ArrowUpFromDot color="white" size={41}/>
                <Text style={{color: 'white', marginTop: 6, fontWeight: "bold", fontSize: 20}}>記事を読む</Text>
              </View>
            </LinearGradient>
          </Animated.View>
        )}

      </View>
    );
  }

  componentDidMount(): void {
    this.initDeck();
  }

  private _isSameChildren(a: React.ReactNode, b: React.ReactNode): boolean {
    if (typeof a != typeof b) return false;
    if (typeof a === 'undefined') return false;
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length != b.length) return false;
      for (let i in a) {
        const aElement = a[i] as React.ReactElement;
        const bElement = b[i] as React.ReactElement;
        if (aElement.key != bElement.key) { return false }
      }
      return true;
    }
    const aElement = a as React.ReactElement;
    const bElement = b as React.ReactElement;
    return aElement.key === bElement.key;
  }

  initDeck(): void {
    if (typeof this.props.children === 'undefined') return;
    const { children, loop } = this.props;
    const cards = Array.isArray(children) ? children : [children];
    const initialIndexA = this.props.initialIndex! < cards.length ? this.props.initialIndex! : 0;
    const initialIndexB = loop ? this.mod(initialIndexA + 1, cards.length) : initialIndexA + 1;
    const cardA = cards[initialIndexA] as React.ReactElement || null;
    const cardB = cards[initialIndexB] as React.ReactElement || null;
    this.setState({
      cards: cards as React.ReactElement[],
      cardA,
      cardB,
      sindex: initialIndexB + 1,
    });
  }

  private _resetCard(): void {
    Animated.timing(
      this.state.dragDistance,
      {
        toValue: 0,
        duration: this.props.duration!,
        useNativeDriver: this.props.useNativeDriver || false,
      }
    ).start();
    Animated.spring(
      this.state.drag,
      {
        toValue: { x: 0, y: 0 },
        useNativeDriver: this.props.useNativeDriver || false,
      }
    ).start();
  }

  goBackFromTop(): void {
    this._goBack('top');
  }

  goBackFromRight(): void {
    this._goBack('right');
  }

  goBackFromLeft(): void {
    this._goBack('left');
  }

  goBackFromBottom(): void {
    this._goBack('bottom');
  }

  mod(n: number, m: number): number {
    return ((n % m) + m) % m;
  }

  private _getIndex(index: number, cards: number): number {
    return this.props.loop ?
      this.mod(index, cards) :
      index;
  }

  private handleCardALayout = (event: any) => {
    const {width, height} = event.nativeEvent.layout;
    this.setState({
      cardADimensions: {
        width,
        height,
        borderRadius: BORDER_RADIUS // ArticleCard の BORDER_RADIUS に合わせる
      }
    });
  };

  private _goBack(direction: SwipeDirection): void {
    const { cards, sindex, topCard } = this.state;

    if ((sindex - 3) < 0 && !this.props.loop) return;

    const previusCardIndex = this.mod(sindex - 3, cards.length)
    let update: Partial<CardStackState> = {};
    if (topCard === 'cardA') {
      update = {
        ...update,
        cardB: cards[previusCardIndex]
      }
    } else {
      update = {
        ...update,
        cardA: cards[previusCardIndex],
      }
    }

    this.setState({
      ...update,
      topCard: (topCard === 'cardA') ? 'cardB' : 'cardA',
      sindex: sindex - 1
    } as CardStackState, () => {

      switch (direction) {
        case 'top':
          this.state.drag.setValue({ x: 0, y: -height });
          this.state.dragDistance.setValue(height);
          break;
        case 'left':
          this.state.drag.setValue({ x: -width, y: 0 });
          this.state.dragDistance.setValue(width);
          break;
        case 'right':
          this.state.drag.setValue({ x: width, y: 0 });
          this.state.dragDistance.setValue(width);
          break;
        case 'bottom':
          this.state.drag.setValue({ x: 0, y: height });
          this.state.dragDistance.setValue(width);
          break;
        default:
      }

      Animated.spring(
        this.state.dragDistance,
        {
          toValue: 0,
          useNativeDriver: this.props.useNativeDriver || false,
        }
      ).start();

      Animated.spring(
        this.state.drag,
        {
          toValue: { x: 0, y: 0 },
          useNativeDriver: this.props.useNativeDriver || false,
        }
      ).start();
    })
  }

  swipeTop(d: number | null = null): void {
    this._nextCard('top', 0, -height, d || this.props.duration!);
  }

  swipeBottom(d: number | null = null): void {
    this._nextCard('bottom', 0, height, d || this.props.duration!);
  }

  swipeRight(d: number | null = null): void {
    this._nextCard('right', width * 1.5, 0, d || this.props.duration!);
  }

  swipeLeft(d: number | null = null): void {
    this._nextCard('left', -width * 1.5, 0, d || this.props.duration!);
  }

  // State access methods for external control
  getCurrentIndex(): number {
    const {sindex, cards} = this.state;
    const {loop} = this.props;
    return loop ? this.mod(sindex - 2, cards.length) : Math.max(0, sindex - 2);
  }

  getCurrentCard(): React.ReactElement | null {
    const {topCard, cardA, cardB} = this.state;
    return topCard === 'cardA' ? cardA : cardB;
  }

  getTotalCards(): number {
    return this.state.cards.length;
  }

  private handleCardBLayout = (event: any) => {
    const {width, height} = event.nativeEvent.layout;
    this.setState({
      cardBDimensions: {
        width,
        height,
        borderRadius: BORDER_RADIUS // ArticleCard の BORDER_RADIUS に合わせる
      }
    });
  };

  /**
   * @description CardB's click feature is trigger the CardA on the card stack. (Solved on Android)
   * @see https://facebook.github.io/react-native/docs/view#pointerevents
   */
  private _setPointerEvents(topCard: 'cardA' | 'cardB', topCardName: 'cardA' | 'cardB'): {
    pointerEvents: 'auto' | 'none'
  } {
    return {pointerEvents: topCard === topCardName ? "auto" : "none"}
  }

  private _nextCard(direction: SwipeDirection, x: number, y: number, duration: number = 400): void {
    const { verticalSwipe, horizontalSwipe, loop } = this.props;
    const { sindex, cards, topCard } = this.state;

    // Set card switching flag at the start of animation
    this.isCardSwitching = true;

    // index for the next card to be renderd
    const nextCard = (loop) ? (Math.abs(sindex) % cards.length) : sindex;

    // index of the swiped card
    const index = (loop) ? this.mod(nextCard - 2, cards.length) : nextCard - 2;

    if (index === cards.length - 1) {
      this.props.onSwipedAll?.();
    }

    if ((sindex - 2 < cards.length) || (loop)) {
      Animated.spring(
        this.state.dragDistance,
        {
          toValue: 220,
          useNativeDriver: this.props.useNativeDriver || false,
        }
      ).start();

      Animated.timing(
        this.state.drag,
        {
          toValue: { x: (horizontalSwipe) ? x : 0, y: (verticalSwipe) ? y : 0 },
          duration,
          useNativeDriver: this.props.useNativeDriver || false,
        }
      ).start(() => {

        const newTopCard: 'cardA' | 'cardB' = (topCard === 'cardA') ? 'cardB' : 'cardA';

        let update: Partial<CardStackState> = {};
        if (newTopCard === 'cardA') {
          update = {
            ...update,
            cardB: cards[nextCard]
          };
        }
        if (newTopCard === 'cardB') {
          update = {
            ...update,
            cardA: cards[nextCard],
          };
        }
        this.isCardSwitching = false;
        this.setState({
          ...update,
          topCard: newTopCard,
          sindex: nextCard + 1
        } as CardStackState, () => {
          this.state.drag.setValue({ x: 0, y: 0 });
          this.state.dragDistance.setValue(0);
        });

        this.props.onSwiped?.(index);
        switch (direction) {
          case 'left':
            this.props.onSwipedLeft?.(index);
            if (this.state.cards[index] && (this.state.cards[index].props as any).onSwipedLeft)
              (this.state.cards[index].props as any).onSwipedLeft();
            break;
          case 'right':
            this.props.onSwipedRight?.(index);
            if (this.state.cards[index] && (this.state.cards[index].props as any).onSwipedRight)
              (this.state.cards[index].props as any).onSwipedRight();
            break;
          case 'top':
            this.props.onSwipedTop?.(index);
            if (this.state.cards[index] && (this.state.cards[index].props as any).onSwipedTop)
              (this.state.cards[index].props as any).onSwipedTop();
            break;
          case 'bottom':
            this.props.onSwipedBottom?.(index);
            if (this.state.cards[index] && (this.state.cards[index].props as any).onSwipedBottom)
              (this.state.cards[index].props as any).onSwipedBottom();
            break;
          default:
        }
      });

    }
  }
}

polyfill(CardStack);

// Forward ref wrapper to enable external control
const CardStackWithRef = forwardRef<CardStackRef, CardStackProps>((props, ref) => {
  const cardStackRef = React.useRef<CardStack>(null);

  useImperativeHandle(ref, () => ({
    // Swipe methods for external control
    swipeLeft: (duration?: number | null) => cardStackRef.current?.swipeLeft(duration),
    swipeRight: (duration?: number | null) => cardStackRef.current?.swipeRight(duration),
    swipeTop: (duration?: number | null) => cardStackRef.current?.swipeTop(duration),
    swipeBottom: (duration?: number | null) => cardStackRef.current?.swipeBottom(duration),

    // Go back methods
    goBackFromLeft: () => cardStackRef.current?.goBackFromLeft(),
    goBackFromRight: () => cardStackRef.current?.goBackFromRight(),
    goBackFromTop: () => cardStackRef.current?.goBackFromTop(),
    goBackFromBottom: () => cardStackRef.current?.goBackFromBottom(),

    // State access methods
    getCurrentIndex: () => cardStackRef.current?.getCurrentIndex() ?? 0,
    getCurrentCard: () => cardStackRef.current?.getCurrentCard() ?? null,
    getTotalCards: () => cardStackRef.current?.getTotalCards() ?? 0,

    // Utility methods
    initDeck: () => cardStackRef.current?.initDeck(),
  }), []);

  return <CardStack ref={cardStackRef} {...props} />;
});

CardStackWithRef.displayName = 'CardStack';

export default CardStackWithRef;