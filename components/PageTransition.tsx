import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  FadeInRight,
  FadeInLeft,
  FadeInUp,
  FadeInDown,
  FadeOut,
  FadeOutRight,
  FadeOutLeft,
  FadeOutUp,
  FadeOutDown,
} from "react-native-reanimated";

interface PageTransitionProps {
  children: React.ReactNode;
  type?: "fade" | "slide-right" | "slide-left" | "slide-up" | "slide-down";
  duration?: number;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  type = "fade",
  duration = 300,
}) => {
  const renderAnimatedView = () => {
    switch (type) {
      case "slide-right":
        return (
          <Animated.View
            entering={FadeInRight.duration(duration)}
            exiting={FadeOutLeft.duration(duration)}
            style={StyleSheet.absoluteFill}
          >
            {children}
          </Animated.View>
        );
      case "slide-left":
        return (
          <Animated.View
            entering={FadeInLeft.duration(duration)}
            exiting={FadeOutRight.duration(duration)}
            style={StyleSheet.absoluteFill}
          >
            {children}
          </Animated.View>
        );
      case "slide-up":
        return (
          <Animated.View
            entering={FadeInUp.duration(duration)}
            exiting={FadeOutDown.duration(duration)}
            style={StyleSheet.absoluteFill}
          >
            {children}
          </Animated.View>
        );
      case "slide-down":
        return (
          <Animated.View
            entering={FadeInDown.duration(duration)}
            exiting={FadeOutUp.duration(duration)}
            style={StyleSheet.absoluteFill}
          >
            {children}
          </Animated.View>
        );
      default:
        return (
          <Animated.View
            entering={FadeIn.duration(duration)}
            exiting={FadeOut.duration(duration)}
            style={StyleSheet.absoluteFill}
          >
            {children}
          </Animated.View>
        );
    }
  };

  return <View style={styles.container}>{renderAnimatedView()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});