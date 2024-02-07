import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import anton from "../../assets/fonts/Anton/Anton_Regular.json";

export default function TutorialTitle() {
  const font = new FontLoader().parse(anton);
  extend({ TextGeometry });

  return (
    <mesh position={[-15, 20, -20]}>
      <textGeometry
        args={["Drop Red On Green", { font, size: 3, height: 0.5 }]}
      />
      <meshStandardMaterial attach="material" color="#000000" />
    </mesh>
  );
}
