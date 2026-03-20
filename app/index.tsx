import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
    {/* Profile Image (Optional) */}
      <Image
       source={require("../assets/profile.jpg")}
       style={{ width: 180, height: 180, borderRadius: 999 }}

      />
      {/* Name and Role */}
      <Text className="text-3xl font-bold mb-1">Trisha Mantes</Text>
      <Text className="text-lg text-gray-600 mb-8">Frontend Developer | UI Designer</Text>

      {/* Navigation Buttons */}
      <TouchableOpacity
        className="bg-purple-500 px-8 py-3 rounded-lg mb-4"
        onPress={() => router.push("/projects")}
      >
        <Text className="text-white font-semibold">View My Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-pink-500 px-8 py-3 rounded-lg"
        onPress={() => router.push("/skills")}
      >
        <Text className="text-white font-semibold">My Skills</Text>
      </TouchableOpacity>
    </View>
  );
}