import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import PropTypes from "prop-types";

import * as THREE from "three";

export default function BlackHole({ position, rotation }) {
  const { scene, animations } = useGLTF("/assets/glb/black-hole.glb");
  const mixerRef = useRef();
  const blackHolelRef = useRef();

  useEffect(() => {
    mixerRef.current = new THREE.AnimationMixer(scene);

    const animationClip = animations.find(
      (clip) => clip.name === "CINEMA_4D_Main",
    );

    if (animationClip) {
      const action = mixerRef.current.clipAction(animationClip);

      action.setEffectiveTimeScale(2);
      action.play();
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
  });

  return (
    <RigidBody
      type="fixed"
      scale={3}
      position={position}
      rotation={rotation}
      colliders={false}
    >
      <primitive object={scene} ref={blackHolelRef} />
    </RigidBody>
  );
}

BlackHole.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
};

useGLTF.preload("/assets/glb/black-hole.glb");
