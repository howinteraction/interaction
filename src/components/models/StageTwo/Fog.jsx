import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

import * as THREE from "three";

export default function Fog() {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2("blueviolet", 0.01);
  }, [scene]);

  return null;
}
