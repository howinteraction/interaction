import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

export default function TutorialBackground() {
  const gltf = useGLTF("/assets/glb/tutorialBackground.glb");

  return (
    <>
      <primitive object={gltf.scene} />
      <CuboidCollider args={[50, 0, 50]} position={[0, 0, 0]} />
      <CuboidCollider args={[0, 20, 50]} position={[-20, 10, 0]} />
      <CuboidCollider args={[0, 20, 50]} position={[20, 10, 0]} />
      <CuboidCollider args={[50, 20, 0]} position={[0, 10, -20]} />
      <CuboidCollider args={[50, 20, 0]} position={[0, 10, 20]} />
    </>
  );
}
