import { useSelector } from "react-redux";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

export default function BlackPillar2() {
  const texture = useTexture(
    "/assets/images/stage2-picture/right-half-triangle.png",
  );
  const { nodes, materials } = useGLTF("/assets/glb/blackpillar-image.glb");
  const isCombined = useSelector((state) => state.twoIllusion.isCombined);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_2.geometry}
      material={materials.initialShadingGroup}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {!isCombined && (
        <Decal
          position={[-2, -0.77, 12]}
          rotation={[1.56, -Math.PI / 2, 0]}
          scale={[3, 5, 2]}
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      )}
    </mesh>
  );
}

useGLTF.preload("assets/glb/blackpillar-image.glb");
