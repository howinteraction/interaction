import { useGLTF } from "@react-three/drei";

export default function StageOneTimeScreen() {
  const { scene } = useGLTF("/assets/glb/stage1-time-screen.glb");

  scene.traverse((child) => {
    child.castShadow = true;
  });

  return <primitive object={scene} />;
}

useGLTF.preload("/assets/glb/stage1-time-screen.glb");
