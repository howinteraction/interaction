import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

import Galaxy from "../StageOne/Galaxy";

export default function TutorialBackground() {
  const { scene } = useGLTF("/assets/glb/tutorial-background.glb");

  scene.traverse((child) => {
    child.receiveShadow = true;
  });

  return (
    <>
      <Galaxy />
      <primitive object={scene} />
      <CuboidCollider args={[50, 1, 50]} position={[0, -1, 0]} />
      <CuboidCollider args={[50, 1, 50]} position={[0, 29, 0]} />
      <CuboidCollider args={[1, 50, 50]} position={[-48, 10, 0]} />
      <CuboidCollider args={[1, 50, 50]} position={[48, 10, 0]} />
      <CuboidCollider args={[50, 50, 1]} position={[0, 10, -23.9]} />
      <CuboidCollider args={[50, 50, 1]} position={[0, 10, 23.9]} />
    </>
  );
}

useGLTF.preload("/assets/glb/tutorial-background.glb");
