import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import anton from "../../assets/fonts/Anton/Anton_Regular.json";

function TutorialSign() {
  const font = new FontLoader().parse(anton);
  extend({ TextGeometry });

  return (
    <mesh position={[-15, 20, -20]} castShadow>
      <textGeometry
        args={["Drop Red On Green", { font, size: 3, height: 0.1 }]}
      />
      <meshPhysicalMaterial attach="material" color="#000000" />
    </mesh>
  );
}

export default TutorialSign;
