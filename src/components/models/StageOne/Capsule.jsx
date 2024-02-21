import { useGLTF } from "@react-three/drei";

export default function Capsule() {
  const gltf = useGLTF("/assets/glb/capsule.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/capsule.glb");
