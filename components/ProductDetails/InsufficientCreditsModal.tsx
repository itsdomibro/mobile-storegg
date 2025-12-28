import { useRouter } from "expo-router";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function InsufficientCreditsModal({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: any;
}) {
  const router = useRouter();

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Info */}
          <Text style={styles.modalText}>
            Not enough credits. Do you want to play a game to gain credits?
          </Text>

          {/* Actions */}
          <View style={styles.modalButtons}>
            <Pressable
              style={styles.playButton}
              onPress={() => {
                setModalVisible(false);
                router.push("/game");
              }}
            >
              <Text style={styles.buttonText}>Play</Text>
            </Pressable>

            <Pressable
              style={styles.backButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  playButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
