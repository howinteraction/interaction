import { useGLTF, Clone } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

export default function BlackColumn() {
  const gltf = useGLTF("/assets/glb/black-column-02.glb");

  return (
    <>
      <Clone object={gltf.scene} />
      <CuboidCollider args={[3, 41, 2.5]} />
    </>
  );
}

useGLTF.preload("/assets/glb/black-column-02.glb");
