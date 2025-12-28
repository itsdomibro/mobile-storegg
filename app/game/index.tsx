import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useStore } from "../../storage/useStore";

export default function EggGame() {
  const [rewards, setRewards] = useState<number[]>(generateRewards());
  const [selectedReward, setSelectedReward] = useState<number | null>(null);
  const [gameState, setGameState] = useState<"idle" | "cracked">("idle");
  const { addBalance } = useStore();

  function handleCrackEgg() {
    if (gameState === "idle") {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
      setSelectedReward(randomReward);
      addBalance(randomReward);
      setGameState("cracked");
    } else {
      setRewards(generateRewards());
      setSelectedReward(null);
      setGameState("idle");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Egg Cracking Game</Text>

      {gameState === "idle" ? (
        <View>
          <Text>Possible rewards:</Text>
          <Text>{rewards.join(" | ")}</Text>
        </View>
      ) : (
        <View>
          <Text>You cracked the egg!</Text>
          <Text>Reward: {selectedReward}</Text>
        </View>
      )}

      <Pressable style={styles.button} onPress={handleCrackEgg}>
        <Text style={styles.buttonText}>
          {gameState === "idle" ? "Crack Egg" : "Play Again"}
        </Text>
      </Pressable>
    </View>
  );
}

function generateRewards() {
  const possibleValues = Array.from({ length: 21 }, (_, i) => i * 5); // 0–100 multiples of 5
  const rewards: number[] = [];
  while (rewards.length < 3) {
    const rand =
      possibleValues[Math.floor(Math.random() * possibleValues.length)];
    if (!rewards.includes(rand)) rewards.push(rand);
  }
  return rewards;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  button: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
