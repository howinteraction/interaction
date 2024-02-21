import { useGLTF } from "@react-three/drei";

export default function Cone() {
  const gltf = useGLTF("/assets/glb/cone.glb");

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

useGLTF.preload("/assets/glb/hallow-cube.glb");
