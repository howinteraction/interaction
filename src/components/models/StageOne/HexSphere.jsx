import { useGLTF } from "@react-three/drei";

export default function HexSphere() {
  const { scene } = useGLTF("/assets/glb/hex-sphere.glb");

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

useGLTF.preload("/assets/glb/hex-sphere.glb");
