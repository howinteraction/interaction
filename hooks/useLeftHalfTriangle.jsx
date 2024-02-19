import { useTexture } from "@react-three/drei";

export default function useLeftHalfTriangle() {
  const texture = useTexture(
    "assets/images/stage2-picture/left-half-triangle.png",
  );

  return texture;
}
