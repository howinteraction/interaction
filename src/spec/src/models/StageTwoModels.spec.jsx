import { describe, it, expect, vi, beforeEach } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import HelperScreen from "../../../components/models/StageTwo/HelperScreen";
import Screen1 from "../../../components/models/StageTwo/Screen1";
import Screen2 from "../../../components/models/StageTwo/Screen2";
import StageTwoSky from "../../../components/models/StageTwo/StageTwoSky";
import TetrahedronCube from "../../../components/models/StageTwo/TetrahedronCube";
import TimeScreen from "../../../components/models/StageTwo/TimeScreen";
import TriangleLight from "../../../components/models/StageTwo/TriangleLight";

describe("StageTwo의 useGLTF로 로드 및 렌더링 하는 컴포넌트", () => {
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

  it("HelperScreen 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<HelperScreen />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/helper-screen.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/helper-screen.glb",
    );
  });

  it("Screen1 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<Screen1 />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/screen1.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/screen1.glb");
  });

  it("Screen2 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<Screen2 />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/screen2.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/screen2.glb");
  });

  it("StageTwoSky 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<StageTwoSky />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage2-sky.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/stage2-sky.glb");
  });

  it("TetrahedronCube 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<TetrahedronCube />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/tetrahedron.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/tetrahedron.glb");
  });

  it("TimeScreen 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<TimeScreen />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/time-screen.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/time-screen.glb");
  });

  it("TriangleLight 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<TriangleLight />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/triangle-light.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/triangle-light.glb",
    );
  });
});
