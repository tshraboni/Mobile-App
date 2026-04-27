import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ width: 200, height: 200, backgroundColor: "green", padding: 50 }}>
        <Text>Tanha</Text>
      </View>
      <View style={{ width: 200, height: 200, backgroundColor: "red", padding: 50 }}>
        <Text>Shraboni</Text>
      </View>
      <Text>
        <Text style={{ color: "white"}}>Helloo</Text>
      </Text>
    </View>
  );
}

