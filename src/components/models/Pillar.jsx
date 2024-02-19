import { useSelector } from "react-redux";
import { Decal } from "@react-three/drei";
import PropTypes from "prop-types";

import useLeftHalfTriangle from "../../../hooks/useLeftHalfTriangle";

export default function Pillar({ args, color }) {
  const texture = useLeftHalfTriangle();
  const isCombined = useSelector((state) => state.imageCombination.isCombined);

  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
      {!isCombined && (
        <Decal
          position={[-3, 10, 1.5]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[2, 3, 2]}
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

Pillar.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
