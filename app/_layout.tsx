import { Stack } from "expo-router";
import "../globals.css";

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        animation: "slide_from_right",
        animationDuration: 300
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/signup" />
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false,
          animation: "slide_from_bottom"
        }} 
      />
      <Stack.Screen 
        name="dashboard/add" 
        options={{
          animation: "slide_from_right",
          animationDuration: 300
        }}
      />
      <Stack.Screen 
        name="dashboard/[id]" 
        options={{
          animation: "slide_from_right",
          animationDuration: 300
        }}
      />
    </Stack>
  );
}