import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

export default function TutorialBackground() {
  const gltf = useGLTF("/assets/glb/tutorial-background.glb");

  gltf.scene.traverse((child) => {
    child.receiveShadow = true;
  });

  return (
    <>
      <primitive object={gltf.scene} />
      <CuboidCollider args={[50, 1, 50]} position={[0, -1, 0]} />
      <CuboidCollider args={[50, 1, 50]} position={[0, 29, 0]} />
      <CuboidCollider args={[1, 50, 50]} position={[-21, 10, 0]} />
      <CuboidCollider args={[1, 50, 50]} position={[21, 10, 0]} />
      <CuboidCollider args={[50, 50, 1]} position={[0, 10, -21]} />
      <CuboidCollider args={[50, 50, 1]} position={[0, 10, 21]} />
    </>
  );
}

useGLTF.preload("/assets/glb/tutorial-background.glb");
