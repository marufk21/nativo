import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-200 dark:bg-gray-700";
      case "outline":
        return "bg-transparent border border-blue-500";
      default:
        return "bg-blue-500";
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "outline":
        return "text-blue-500";
      case "secondary":
        return "text-gray-800 dark:text-gray-200";
      default:
        return "text-white";
    }
  };

  return (
    <TouchableOpacity
      className={`py-3 px-4 rounded-lg items-center justify-center ${getButtonStyle()} ${disabled || loading ? "opacity-50" : ""} ${className}`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "outline" ? "#3b82f6" : "white"}
        />
      ) : (
        <Text className={`font-semibold ${getTextStyle()}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
