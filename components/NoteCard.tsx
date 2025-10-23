import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface NoteCardProps {
  id: string;
  title: string;
  description: string;
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
  index: number;
}

export const NoteCard: React.FC<NoteCardProps> = ({
  id,
  title,
  description,
  onPress,
  onEdit,
  onDelete,
  index,
}) => {
  return (
    <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <TouchableOpacity onPress={onPress} className="flex-1">
        <View className="flex-row justify-between items-start">
          <View className="flex-1">
            <Text
              className="text-lg font-bold text-gray-900 dark:text-white mb-1"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-gray-600 dark:text-gray-300 mb-3"
              numberOfLines={2}
            >
              {description}
            </Text>
          </View>
          <View className="flex-row">
            <TouchableOpacity
              onPress={onEdit}
              className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-2"
            >
              <Feather name="edit" size={18} color="#3b82f6" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onDelete}
              className="p-2 bg-red-100 dark:bg-red-900 rounded-lg"
            >
              <Feather name="trash-2" size={18} color="#ef4444" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
