import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { useStore } from "../storage/useStore";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: any }) {
  const { balance } = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "📚 Storegg",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { fontWeight: "bold", fontSize: 18 },
            headerRight: () => (
              <Pressable
                style={styles.balanceButton}
                onPress={() => router.push("/game")}
              >
                <Text style={styles.balanceIcon}>💰</Text>
                <Text style={styles.balanceText}>{balance.toFixed(2)}</Text>
              </Pressable>
            ),
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  balanceButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  balanceIcon: {
    marginRight: 6,
    fontSize: 16,
  },
  balanceText: {
    fontWeight: "600",
    color: "#007AFF",
    fontSize: 16,
  },
});
