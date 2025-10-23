import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

export default function AddNoteScreen() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1000);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <Header title="Add Note" showBackButton onBackPress={handleCancel} />

      <ScrollView className="flex-1 p-4">
        <Input
          label="Title"
          placeholder="Note title"
          value={title}
          onChangeText={setTitle}
        />

        <Input
          label="Description"
          placeholder="Note description"
          value={description}
          onChangeText={setDescription}
          className="flex-1"
        />

        <View className="flex-row mt-6">
          <Button
            title="Cancel"
            variant="secondary"
            onPress={handleCancel}
            className="flex-1 mr-2"
          />
          <Button
            title="Save Note"
            onPress={handleSave}
            loading={loading}
            disabled={!title.trim()}
            className="flex-1 ml-2"
          />
        </View>
      </ScrollView>
    </View>
  );
}
