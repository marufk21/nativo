import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { NoteCard } from "@/components/NoteCard";
import { PageTransition } from "@/components/PageTransition";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function ListScreen() {
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
      description:
        "Research new technologies and frameworks for upcoming project",
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

  const handleViewNote = (id: string) => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <PageTransition type="fade">
      <View className="flex-1 bg-white dark:bg-gray-900">
        <Header title="My Notes" />

        <ScrollView className="flex-1 px-4 pb-20">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-gray-900 dark:text-white"></Text>
            <Button title="Add Note" onPress={handleAddNote} />
          </View>

          {notes.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500 dark:text-gray-400 mb-4">
                No notes yet
              </Text>
              <Button title="Create your first note" onPress={handleAddNote} />
            </View>
          ) : (
            <View className="space-y-4">
              {notes.map((note, index) => (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  description={note.description}
                  index={index}
                  onPress={() => handleViewNote(note.id)}
                  onEdit={() => handleEditNote(note.id)}
                  onDelete={() => handleDeleteNote(note.id)}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </PageTransition>
  );
}
