import { useGLTF } from "@react-three/drei";

export default function Screen2() {
  const gltf = useGLTF("/assets/glb/screen2.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
  });

  return <primitive object={gltf.scene} />;
}

useGLTF.preload("/assets/glb/screen2.glb");
