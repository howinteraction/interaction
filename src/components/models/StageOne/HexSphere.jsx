import { useGLTF } from "@react-three/drei";

export default function HexSphere({ ...dragProps }) {
  const gltf = useGLTF("/assets/glb/hex-sphere.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <mesh {...dragProps}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/hex-sphere.glb");
