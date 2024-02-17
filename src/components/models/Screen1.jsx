import { useGLTF } from "@react-three/drei";

export default function Screen1() {
  const gltf = useGLTF("/assets/glb/screen1.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
  });

  return <primitive object={gltf.scene} />;
}

useGLTF.preload("/assets/glb/screen1.glb");
