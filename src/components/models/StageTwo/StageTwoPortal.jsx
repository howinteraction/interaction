import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";

import * as THREE from "three";

export default function StageTwoPortal({ isCollided }) {
  const { scene, animations } = useGLTF("/assets/glb/stage2-portal.glb");
  const mixerRef = useRef();
  const portalRef = useRef();

  scene.traverse((child) => {
    child.castShadow = true;
  });

  useEffect(() => {
    mixerRef.current = new THREE.AnimationMixer(scene);

    const animationClip = animations.find(
      (clip) => clip.name === "PortalAction",
    );

    if (animationClip) {
      const action = mixerRef.current.clipAction(animationClip);

      action.play();
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
    portalRef.current.rotation.y += 0.005;
    portalRef.current.rotation.y += 0.01;

    if (isCollided && portalRef.current.position.z > -2.5) {
      portalRef.current.position.z -= 0.012;
      portalRef.current.position.x += 0.02;
      portalRef.current.rotation.y -= 0.005;
      portalRef.current.rotation.y -= 0.01;
    }
  });

  return <primitive object={scene} ref={portalRef} />;
}

useGLTF.preload("/assets/glb/StageTwoPortal.glb");

StageTwoPortal.propTypes = {
  isCollided: PropTypes.bool.isRequired,
};
