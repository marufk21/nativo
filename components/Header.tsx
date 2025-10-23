import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightIcon?: string;
  onRightIconPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightIcon,
  onRightIconPress,
}) => {
  return (
    <View className="flex-row items-center justify-between pb-4 pt-12 ml-5 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <View className="flex-row items-center">
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} className="mr-3">
            <Feather name="arrow-left" size={24} color="#3b82f6" />
          </TouchableOpacity>
        )}
        <Text className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </Text>
      </View>

      {rightIcon && onRightIconPress && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Feather name={rightIcon as any} size={24} color="#3b82f6" />
        </TouchableOpacity>
      )}
    </View>
  );
};
