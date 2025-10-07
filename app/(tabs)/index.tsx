import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello from Android</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a3e53ff",
    alignItems: "center",
    justifyContent: "center",
  }
});
