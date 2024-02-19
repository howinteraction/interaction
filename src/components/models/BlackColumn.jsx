import { useGLTF, Clone } from "@react-three/drei";

export default function BlackColumn() {
  const gltf = useGLTF("/assets/glb/black-column-02.glb");

  return <Clone object={gltf.scene} />;
}

useGLTF.preload("/assets/glb/black-column-02.glb");
