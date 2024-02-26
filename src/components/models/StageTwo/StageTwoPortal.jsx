import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import { useSelector } from "react-redux";

export default function StageTwoPortal() {
  const { scene, animations } = useGLTF("/assets/glb/stage2-portal.glb");
  const mixerRef = useRef();
  const portalRef = useRef();
  const isAttached = useSelector((state) => state.twoIllusion.isAttached);

  scene.traverse((child) => {
    child.castShadow = true;
  });

  useEffect(() => {
    portalRef.current.position.z = 0;
    portalRef.current.position.x = 0;
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
    portalRef.current.rotation.y += 0.015;

    if (isAttached && portalRef.current.position.z > -2.5) {
      portalRef.current.position.z -= 0.012;
      portalRef.current.position.x += 0.02;
      portalRef.current.rotation.y -= 0.015;
    }
  });

  return <primitive object={scene} ref={portalRef} />;
}

useGLTF.preload("/assets/glb/StageTwoPortal.glb");
