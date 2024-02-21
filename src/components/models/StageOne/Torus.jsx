import { useGLTF } from "@react-three/drei";

export default function Torus() {
  const gltf = useGLTF("/assets/glb/torus.glb");

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

useGLTF.preload("/assets/glb/torus.glb");
