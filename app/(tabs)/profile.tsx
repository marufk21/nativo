import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

export default function ProfileTabScreen() {
  const router = useRouter();
  const [userName] = useState("John Doe");
  const [userEmail] = useState("john.doe@example.com");

  const handleEditProfile = () => {
    Alert.alert(
      "Edit Profile",
      "This feature will be implemented in the full version."
    );
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => router.replace("/auth/login"),
      },
    ]);
  };

  return (
    <PageTransition type="fade">
      <View className="flex-1 bg-gray-50 dark:bg-gray-900">
        <Header title="Profile" />

        <ScrollView className="flex-1 p-4 pb-20">
          <View className="items-center mb-8">
            <View className="w-24 h-24 rounded-full bg-blue-500 items-center justify-center mb-4">
              <Text className="text-3xl font-bold text-white">
                {userName.charAt(0)}
              </Text>
            </View>
            <Text className="text-2xl font-bold text-gray-900 dark:text-white">
              {userName}
            </Text>
            <Text className="text-gray-600 dark:text-gray-400">
              {userEmail}
            </Text>
          </View>

          <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Account Settings
            </Text>
            <Button
              title="Edit Profile"
              variant="secondary"
              onPress={handleEditProfile}
              className="mb-2"
            />
            <Button
              title="Logout"
              variant="secondary"
              onPress={handleLogout}
            />
          </View>

          <View className="bg-white dark:bg-gray-800 rounded-xl p-4">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              App Information
            </Text>
            <Text className="text-gray-600 dark:text-gray-400 mb-1">
              Version 1.0.0
            </Text>
            <Text className="text-gray-600 dark:text-gray-400">
              Notes App
            </Text>
          </View>
        </ScrollView>
      </View>
    </PageTransition>
  );
}