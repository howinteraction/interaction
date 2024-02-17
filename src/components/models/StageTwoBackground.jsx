import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

export default function StageTwoBackground() {
  const gltf = useGLTF("/assets/glb/stage2-background.glb");

  gltf.scene.traverse((child) => {
    child.receiveShadow = true;
  });

  return (
    <>
      <primitive object={gltf.scene} />
      <CuboidCollider args={[100, 1, 100]} position={[0, -1, 0]} />
      <CuboidCollider args={[100, 1, 100]} position={[0, 30, 0]} />
      <CuboidCollider args={[1, 50, 50]} position={[-36, 10, 0]} />
      <CuboidCollider args={[1, 50, 50]} position={[35, 10, 0]} />
      <CuboidCollider args={[70, 60, 1]} position={[-36, 10, -3.5]} />
      <CuboidCollider args={[70, 60, 1]} position={[-36, 10, 4]} />
    </>
  );
}

useGLTF.preload("/assets/glb/stage2-background.glb");
