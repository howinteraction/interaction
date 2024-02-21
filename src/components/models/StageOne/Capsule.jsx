import { useGLTF } from "@react-three/drei";

export default function Capsule() {
  const { scene } = useGLTF("/assets/glb/capsule.glb");

  scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/capsule.glb");
