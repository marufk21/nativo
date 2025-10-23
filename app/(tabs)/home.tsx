import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleAddNote = () => {
    router.push("/dashboard/add");
  };

  return (
    <PageTransition type="fade">
      <View className="flex-1 bg-white dark:bg-gray-900">
        <Header title="Home"/>

        <ScrollView className="flex-1 px-4  pt-36 pb-8">
          <View className="items-center justify-center flex-1">
            <View className="bg-blue-100 dark:bg-blue-900 w-32 h-32 rounded-full items-center justify-center mb-8">
              <Feather name="edit" size={64} color="#3b82f6" />
            </View>

            <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Welcome to Notes App
            </Text>

            <Text className="text-gray-600 dark:text-gray-400 mb-8 text-center">
              Create and manage your notes easily
            </Text>

            <Button
              title="Create New Note"
              onPress={handleAddNote}
              className="w-full max-w-xs"
            />
          </View>
        </ScrollView>
      </View>
    </PageTransition>
  );
}