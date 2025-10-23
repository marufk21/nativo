import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <Header title="Dashboard" />

      <ScrollView className="flex-1 px-4 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Dashboard
        </Text>
        <Text className="text-gray-600 dark:text-gray-400 mb-8 text-center">
          This screen is deprecated. Please use the bottom navigation tabs.
        </Text>
        <Button
          title="Go to Home Tab"
          onPress={() => router.push("/(tabs)/home")}
          className="px-4 py-2"
        />
      </ScrollView>
    </View>
  );
}
