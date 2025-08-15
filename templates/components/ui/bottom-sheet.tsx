import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React, { useEffect } from 'react';
import {
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from "react-native-safe-area-context";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type BottomSheetContentProps = {
  children: React.ReactNode;
  title?: string;
  style?: ViewStyle;
  rBottomSheetStyle: any;
  cardColor: string;
  mutedColor: string;
  onHandlePress?: () => void;
  onContentLayout?: (height: number) => void;
  autoHeight?: boolean;
};

// Component for the bottom sheet content
const BottomSheetContent = ({
  children,
  title,
  style,
  rBottomSheetStyle,
  cardColor,
  mutedColor,
  onHandlePress,
  onContentLayout,
  autoHeight = false,
}: BottomSheetContentProps) => {
  return (
    <Animated.View
      style={[
        {
          height: autoHeight ? undefined : SCREEN_HEIGHT,
          width: '100%',
          position: 'absolute',
          top: SCREEN_HEIGHT,
          backgroundColor: cardColor,
          borderTopLeftRadius: BORDER_RADIUS,
          borderTopRightRadius: BORDER_RADIUS,
        },
        rBottomSheetStyle,
        style,
      ]}
      onLayout={autoHeight ? (event) => {
        const {height} = event.nativeEvent.layout;
        onContentLayout?.(height);
      } : undefined}
    >
      {/* Handle - Touchable to allow snapping when pan is disabled */}
      <TouchableWithoutFeedback onPress={onHandlePress}>
        <View
          style={{
            width: '100%',
            paddingVertical: 12,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 64,
              height: 6,
              backgroundColor: mutedColor,
              borderRadius: 999,
            }}
          />
        </View>
      </TouchableWithoutFeedback>

      {/* Title */}
      {title && (
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 16,
            paddingBottom: 8,
          }}
        >
          <Text variant='title' style={{ textAlign: 'center' }}>
            {title}
          </Text>
        </View>
      )}

      {/* Content */}
      <View style={{ flex: autoHeight ? 0 : 1, padding: 16 }}>{children}</View>
    </Animated.View>
  );
};

type BottomSheetProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  snapPoints?: number[];
  enableBackdropDismiss?: boolean;
  title?: string;
  style?: ViewStyle;
  disablePanGesture?: boolean;
  autoHeight?: boolean;
};

export function BottomSheet({
  isVisible,
  onClose,
  children,
  snapPoints = [0.3, 0.6, 0.9],
  enableBackdropDismiss = true,
  title,
  style,
  disablePanGesture = false,
  autoHeight = false,
}: BottomSheetProps) {
  if (autoHeight) disablePanGesture = true;
  const cardColor = useThemeColor({}, 'card');
  const mutedColor = useThemeColor({}, 'muted');

  const translateY = useSharedValue(SCREEN_HEIGHT);
  const context = useSharedValue({ y: 0 });
  const opacity = useSharedValue(0);
  const currentSnapIndex = useSharedValue(0);

  const insets = useSafeAreaInsets();
  const verticalInset = insets.top - insets.bottom;
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + verticalInset;

  // State for auto height functionality
  const contentReadyRef = React.useRef(!autoHeight);
  const firstRenderRef = React.useRef(true);
  const [contentHeight, setContentHeight] = React.useState(0);
  const [snapPointsHeights, setSnapPointsHeights] = React.useState<number[]>(
    autoHeight ? [verticalInset] : snapPoints.map((point) => -SCREEN_HEIGHT * point)
  );

  // Delayed modal close to allow animation to complete
  const [modalVisible, setModalVisible] = React.useState(false);

  // Handle content height measurement and update snap points
  useEffect(() => {
    if (autoHeight && contentHeight > 0) {
      const newSnapPointsHeights = [-contentHeight + verticalInset]; // Add some padding for handle and title
      setSnapPointsHeights(newSnapPointsHeights);
      contentReadyRef.current = true;
    }
  }, [autoHeight, contentHeight]);

  // Handle animations when visibility changes or content is ready
  useEffect(() => {
    if (isVisible) {
      // Set initial position to bottom of screen before showing modal
      if ((autoHeight && firstRenderRef.current) || !autoHeight) {
        translateY.value = SCREEN_HEIGHT;
        firstRenderRef.current = false;
      }
      setModalVisible(true);
      // Wait for content to be ready before starting animations
      if (contentReadyRef.current) {
        const defaultHeight = snapPointsHeights[0];
        translateY.value = withSpring(defaultHeight, {
          damping: 50,
          stiffness: 400,
        });
        opacity.value = withTiming(1, {duration: 300});
        // Reset to first snap point when opening
        currentSnapIndex.value = 0;
      }
    } else {
      // Animate slide down before closing modal
      translateY.value = withSpring(0, {
        damping: 50,
        stiffness: 400,
      });
      opacity.value = withTiming(0, { duration: 300 }, (finished) => {
        if (finished) {
          runOnJS(setModalVisible)(false);
        }
      });
      if (autoHeight) {
        // Reset state when closing
        firstRenderRef.current = true;
        setContentHeight(0);
        contentReadyRef.current = false;
      }
    }
  }, [isVisible, snapPointsHeights, contentReadyRef.current]);

  const scrollTo = (destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, {
      damping: 50,
      stiffness: 400,
    });
  };

  const findClosestSnapPoint = (currentY: number) => {
    'worklet';
    let closest = snapPointsHeights[0];
    let minDistance = Math.abs(currentY - closest);
    let closestIndex = 0;

    for (let i = 0; i < snapPointsHeights.length; i++) {
      const snapPoint = snapPointsHeights[i];
      const distance = Math.abs(currentY - snapPoint);
      if (distance < minDistance) {
        minDistance = distance;
        closest = snapPoint;
        closestIndex = i;
      }
    }

    // Update the current snap index
    currentSnapIndex.value = closestIndex;
    return closest;
  };

  // Function to cycle through snap points when handle is pressed
  const handlePress = () => {
    if (autoHeight) {
      // In auto height mode, handle press closes the sheet
      animateClose();
    } else {
      // Move to the next snap point (cycle back to first if at the end)
      const nextIndex = (currentSnapIndex.value + 1) % snapPointsHeights.length;
      currentSnapIndex.value = nextIndex;
      scrollTo(snapPointsHeights[nextIndex]);
    }
  };

  const animateClose = () => {
    'worklet';
    // Animate to slide down position
    translateY.value = withSpring(SCREEN_HEIGHT, {
      damping: 50,
      stiffness: 400,
    });
    opacity.value = withTiming(0, { duration: 300 }, (finished) => {
      if (finished) {
        runOnJS(onClose)();
      }
    });
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      const newY = context.value.y + event.translationY;
      // Limit the dragging range
      if (newY <= 0 && newY >= MAX_TRANSLATE_Y) {
        translateY.value = newY;
      }
    })
    .onEnd((event) => {
      const currentY = translateY.value;
      const velocity = event.velocityY;

      // If dragging down with significant velocity, close the sheet
      if (velocity > 500 && currentY > -SCREEN_HEIGHT * 0.2) {
        animateClose();
        return;
      }

      if (autoHeight) {
        // In auto height mode, only snap back to content height or close
        const defaultHeight = snapPointsHeights[0];
        if (currentY > defaultHeight / 2) {
          animateClose();
        } else {
          scrollTo(defaultHeight);
        }
      } else {
        // Find the closest snap point
        const closestSnapPoint = findClosestSnapPoint(currentY);
        scrollTo(closestSnapPoint);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const rBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handleBackdropPress = () => {
    if (enableBackdropDismiss) {
      // Use animated close instead of direct onClose
      animateClose();
    }
  };

  const handleContentLayout = (height: number) => {
    setContentHeight(height);
  };

  return (
    <Modal
      visible={modalVisible}
      transparent
      statusBarTranslucent
      animationType='none'
      style={{ backgroundColor: cardColor }}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Animated.View
          style={[
            {
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
            rBackdropStyle,
          ]}
        >
          <TouchableWithoutFeedback onPress={handleBackdropPress}>
            <Animated.View style={{ flex: 1 }}/>
          </TouchableWithoutFeedback>

          {disablePanGesture ? (
            <BottomSheetContent
              children={children}
              title={title}
              style={style}
              rBottomSheetStyle={rBottomSheetStyle}
              cardColor={cardColor}
              mutedColor={mutedColor}
              onHandlePress={() => runOnJS(handlePress)()}
              autoHeight={autoHeight}
              onContentLayout={handleContentLayout}
            />
          ) : (
            <GestureDetector gesture={gesture}>
              <BottomSheetContent
                children={children}
                title={title}
                style={style}
                rBottomSheetStyle={rBottomSheetStyle}
                cardColor={cardColor}
                mutedColor={mutedColor}
                onHandlePress={() => runOnJS(handlePress)()}
                autoHeight={autoHeight}
                onContentLayout={handleContentLayout}
              />
            </GestureDetector>
          )}
        </Animated.View>
      </GestureHandlerRootView>
    </Modal>
  );
}

// Hook for managing bottom sheet state
export function useBottomSheet() {
  const [isVisible, setIsVisible] = React.useState(false);

  const open = React.useCallback(() => {
    setIsVisible(true);
  }, []);

  const close = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const toggle = React.useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return {
    isVisible,
    open,
    close,
    toggle,
  };
}
