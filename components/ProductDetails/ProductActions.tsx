import { View, Text, Pressable, StyleSheet } from "react-native";
import InsufficientCreditsModal from "./InsufficientCreditsModal";
import { useState } from "react";

export default function ProductActions({
  balance,
  owned,
  price,
  buy,
  sell,
}: {
  balance: number;
  owned: boolean;
  price: number;
  buy: () => boolean;
  sell: () => void;
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleBuy = () => {
    const success = buy();
    if (!success) setModalVisible(true);
  };

  return (
    <View style={styles.lowerContainer}>
      {/* Balance Info */}
      <View style={styles.balanceRow}>
        <Text style={styles.balanceLabel}>Your Balance:</Text>
        <Text style={styles.balanceValue}>${balance}</Text>
      </View>

      {owned ? (
        <View style={styles.ownedContainer}>
          <Text style={styles.ownedText}>You own this product</Text>
          <Pressable style={styles.sellButton} onPress={sell}>
            <Text style={styles.buttonText}>Sell for ${price}</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable style={styles.buyButton} onPress={handleBuy}>
          <Text style={styles.buttonText}>Buy for ${price}</Text>
        </Pressable>
      )}

      {/* Modal */}
      <InsufficientCreditsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lowerContainer: { marginTop: 20 },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  balanceValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
  ownedContainer: {
    alignItems: "center",
    marginTop: 12,
  },
  ownedText: {
    marginBottom: 8,
    color: "green",
    fontWeight: "500",
  },
  sellButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buyButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
