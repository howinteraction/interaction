import { useGLTF } from "@react-three/drei";

export default function Torus() {
  const { scene } = useGLTF("/assets/glb/torus.glb");

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

useGLTF.preload("/assets/glb/torus.glb");
