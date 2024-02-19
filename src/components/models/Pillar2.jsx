import { useSelector } from "react-redux";
import { Decal } from "@react-three/drei";
import PropTypes from "prop-types";

import useRightHalfTriangle from "../../../hooks/useRightHalfTriangle";

export default function Pillar2({ args, color }) {
  const texture = useRightHalfTriangle();
  const isCombined = useSelector((state) => state.imageCombination.isCombined);

  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
      {!isCombined && (
        <Decal
          position={[-3, 22, -0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[4, 7.5, 2]}
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

Pillar2.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
