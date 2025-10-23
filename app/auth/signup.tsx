import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/index");
    }, 1000);
  };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900 p-6">
      <View className="flex-1 justify-center">
        <View className="items-center my-28">
          <View className="bg-blue-500 w-16 h-16 rounded-full items-center justify-center mb-4">
            <Feather name="user-plus" size={32} color="white" />
          </View>
          <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            TaskMate
          </Text>
          <Text className="text-gray-600 dark:text-gray-400">
            Create a new account
          </Text>
        </View>

        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Password"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Sign Up"
          onPress={handleSignup}
          loading={loading}
          disabled={!name || !email || !password}
          className="mt-4"
        />

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text className="text-blue-500 font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
