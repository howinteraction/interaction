import { describe, it, expect, vi, beforeEach } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import TutorialPortal from "../../../components/models/Tutorial/TutorialPortal";

describe("StageOne의 useGLTF로 로드 및 렌더링 하는 컴포넌트", () => {
  beforeEach(() => {
    vi.mock("@react-three/drei", () => {
      const mockUseGLTF = vi.fn(() => ({
        scene: new THREE.Scene(),
      }));

      mockUseGLTF.preload = vi.fn();

      return {
        useGLTF: mockUseGLTF,
      };
    });
  });

  it("TutorialPortal 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<TutorialPortal />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/tutorial-portal.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/tutorial-portal.glb",
    );
  });
});
