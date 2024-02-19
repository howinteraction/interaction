import { useGLTF, Clone } from "@react-three/drei";

function BlackColumn() {
  const gltf = useGLTF("/assets/glb/black-column-02.glb");

  return <Clone object={gltf.scene} />;
}

export default BlackColumn;
