import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Projects() {
  const router = useRouter();
  const projects = ["BottleBot – Smart Recycling System", "Portfolio Website", "Task Manager App"];

  return (
    <View className="flex-1 bg-white p-6">
      {/* Back Button */}
      <TouchableOpacity
        className="mb-4"
        onPress={() => router.back()}
      >
        <Text className="text-blue-500">← Back</Text>
      </TouchableOpacity>

      <Text className="text-2xl font-bold mb-6">My Projects</Text>

      <ScrollView>
        {projects.map((project, idx) => (
          <View
            key={idx}
            className="bg-purple-200 p-4 rounded-lg mb-4 shadow"
          >
            <Text className="text-lg font-semibold">{project}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}