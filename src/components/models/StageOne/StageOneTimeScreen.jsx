import { useGLTF } from "@react-three/drei";

export default function StageOneTimeScreen() {
  const gltf = useGLTF("/assets/glb/stage1-time-screen.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
  });

  return <primitive object={gltf.scene} />;
}

useGLTF.preload("/assets/glb/stage1-time-screen.glb");
