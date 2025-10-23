import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageTransition } from "@/components/PageTransition";
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
      router.push("/(tabs)/home");
    }, 1000);
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  return (
    <PageTransition type="slide-up">
      <ScrollView className="flex-1 bg-white dark:bg-gray-900 p-6">
        <View className="flex-1 justify-center">
          <View className="items-center pt-36 pb-8">
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
            placeholder="Enter your full name"
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
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button
            title="Sign Up"
            onPress={handleSignup}
            loading={loading}
            disabled={!name || !email || !password}
            className="mt-6"
          />

          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text className="text-blue-500 font-medium">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </PageTransition>
  );
}