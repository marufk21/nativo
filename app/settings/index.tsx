import { Header } from "@/components/Header";
import React, { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      <Header title="Settings" />

      <ScrollView className="flex-1 p-4">
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-6">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                Dark Mode
              </Text>
              <Text className="text-gray-600 dark:text-gray-300">
                Enable dark theme
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
              thumbColor={darkMode ? "#ffffff" : "#f9fafb"}
            />
          </View>
        </View>

        <View className="bg-white dark:bg-gray-800 rounded-xl p-4">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            App Information
          </Text>

          <View className="mb-3">
            <Text className="text-gray-600 dark:text-gray-300">Version</Text>
            <Text className="text-gray-900 dark:text-white font-medium">
              1.0.0
            </Text>
          </View>

          <View className="mb-3">
            <Text className="text-gray-600 dark:text-gray-300">Developer</Text>
            <Text className="text-gray-900 dark:text-white font-medium">
              TaskMate Team
            </Text>
          </View>

          <View>
            <Text className="text-gray-600 dark:text-gray-300">Build</Text>
            <Text className="text-gray-900 dark:text-white font-medium">
              100
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}