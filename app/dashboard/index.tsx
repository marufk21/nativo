import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { NoteCard } from "@/components/NoteCard";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View, Text } from "react-native";

export default function DashboardScreen() {
  const router = useRouter();

  const notes = [
    {
      id: "1",
      title: "Meeting Notes",
      description: "Discussed project requirements and timeline with the team.",
    },
    {
      id: "2",
      title: "Shopping List",
      description: "Milk, Eggs, Bread, Fruits, Vegetables",
    },
    {
      id: "3",
      title: "Ideas for Project",
      description: "Research new technologies and frameworks for upcoming project",
    },
  ];

  const handleAddNote = () => {
    router.push("/dashboard/add");
  };

  const handleEditNote = (id: string) => {
    router.push(`/dashboard/${id}`);
  };

  const handleDeleteNote = (id: string) => {
    console.log("Delete note", id);
    // In a real app, this would delete the note
  };

  const handleNavigateToProfile = () => {
    router.push("/profile");
  };

  const handleNavigateToSettings = () => {
    router.push("/settings");
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <Header title="Dashboard" />
      
      <ScrollView className="flex-1 px-4 pb-20">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">
            My Notes
          </Text>
          <Button 
            title="Add Note" 
            onPress={handleAddNote}
            className="px-4 py-2"
          />
        </View>
        
        <View className="space-y-4">
          {notes.map((note, index) => (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              index={index}
              onPress={() => handleEditNote(note.id)}
              onEdit={() => handleEditNote(note.id)}
              onDelete={() => handleDeleteNote(note.id)}
            />
          ))}
        </View>
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <View className="flex-row justify-around py-3">
          <Button 
            title="Home" 
            variant="secondary"
            className="px-4 py-2"
            onPress={() => {}}
          />
          <Button 
            title="Profile" 
            variant="secondary"
            className="px-4 py-2"
            onPress={handleNavigateToProfile}
          />
          <Button 
            title="Settings" 
            variant="secondary"
            className="px-4 py-2"
            onPress={handleNavigateToSettings}
          />
        </View>
      </View>
    </View>
  );
}