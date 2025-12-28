import { Image, StyleSheet } from "react-native";

export default function ProductImage({ image }: { image: string }) {
  return <Image source={{ uri: image }} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
