import { useGLTF } from "@react-three/drei";

export default function Cone() {
  const { scene } = useGLTF("/assets/glb/cone.glb");

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

useGLTF.preload("/assets/glb/cone.glb");
