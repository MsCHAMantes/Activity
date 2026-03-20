import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Skills() {
  const router = useRouter();
  const skills = ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"];

  return (
    <View className="flex-1 bg-white p-6">
      {/* Back Button */}
      <TouchableOpacity
        className="mb-4"
        onPress={() => router.back()}
      >
        <Text className="text-blue-500">← Back</Text>
      </TouchableOpacity>

      <Text className="text-2xl font-bold mb-6">My Skills</Text>

      <ScrollView contentContainerStyle={{ gap: 12 }}>
        {skills.map((skill, idx) => (
          <View
            key={idx}
            className="bg-pink-200 p-4 rounded-lg shadow"
          >
            <Text className="text-lg font-semibold">{skill}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
