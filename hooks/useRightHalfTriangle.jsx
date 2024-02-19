import { useTexture } from "@react-three/drei";

export default function useRightHalfTriangle() {
  const texture = useTexture(
    "assets/images/stage2-picture/right-half-triangle.png",
  );

  return texture;
}
