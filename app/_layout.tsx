import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
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
              <Pressable onPress={() => router.push("/game")}>
                <Text
                  style={{
                    marginRight: 12,
                    fontWeight: "600",
                    color: "#007AFF",
                  }}
                >
                  {balance}
                </Text>
              </Pressable>
            ),
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
