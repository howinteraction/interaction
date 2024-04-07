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
import BlackColumn from "../../../components/models/StageTwo/BlackColumn";

describe("StageTwo의 useGLTF로 로드 및 렌더링 하는 컴포넌트", () => {
  beforeEach(() => {
    vi.mock("@react-three/drei", () => {
      const mockUseGLTF = vi.fn(() => ({
        scene: new THREE.Scene(),
      }));

      mockUseGLTF.preload = vi.fn();

      const mockClone = vi.fn(({ object }) => <primitive object={object} />);

      return {
        useGLTF: mockUseGLTF,
        Clone: mockClone,
      };
    });
  });

  vi.mock("@react-three/rapier", () => ({
    CuboidCollider: vi.fn(),
  }));

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

  it("BlackColumn 컴포넌트가 useGLTF를 통해 scene을 로드하고 Clone 및 CuboidCollider 컴포넌트를 포함한다", async () => {
    await ReactThreeTestRenderer.act(async () => {
      const renderer = await ReactThreeTestRenderer.create(<BlackColumn />);

      expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);

      const clone = renderer.scene.findAllByType("primitive");

      expect(clone).not.toBeNull();

      const collider = renderer.scene.findAllByType("CuboidCollider");

      expect(collider).not.toBeNull();
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/black-column-02.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/black-column-02.glb",
    );
  });
});
