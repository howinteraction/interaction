import { describe, it, expect, vi, beforeEach } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import { Provider } from "react-redux";
import store from "../../../redux/store";

import StageThreeBackGround from "../../../components/models/StageThree/StageThreeBackGround";
import StageThreeSky from "../../../components/models/StageThree/StageThreeSky";
import StageThreeCloud from "../../../components/models/StageThree/StageThreeCloud";
import StageThreeShip from "../../../components/models/StageThree/StageThreeShip";
import StageThreeHayStack from "../../../components/models/StageThree/StageThreeHayStack";
import StageThreeStone from "../../../components/models/StageThree/StageThreeStone";

describe("StageThree의 useGLTF로 로드 및 렌더링 하는 컴포넌트", () => {
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
    RigidBody: vi.fn(),
  }));

  it("StageThreeBackGround 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<StageThreeBackGround />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage3-background.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/stage3-background.glb",
    );
  });

  it("StageThreeSky 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<StageThreeSky />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage3-sky.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/stage3-sky.glb");
  });

  it("StageThreeCloud 컴포넌트가 GLTF 모델을 로드하고 Clone 을 포함한다", async () => {
    await ReactThreeTestRenderer.act(async () => {
      const renderer = await ReactThreeTestRenderer.create(<StageThreeCloud />);

      expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);

      const clone = renderer.scene.findAllByType("primitive");

      expect(clone).not.toBeNull();
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage3-cloud.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/stage3-cloud.glb",
    );
  });

  it("StageThreeShip 컴포넌트가 useGLTF를 통해 scene을 로드하고 RigidBody 컴포넌트를 포함한다", async () => {
    await ReactThreeTestRenderer.act(async () => {
      const renderer = await ReactThreeTestRenderer.create(<StageThreeShip />);

      expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);

      const RigidBody = renderer.scene.findAllByType("RigidBody");

      expect(RigidBody).not.toBeNull();
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage3-ship.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/stage3-ship.glb");
  });

  it("StageThreeHayStack 컴포넌트가 useGLTF를 통해 scene을 로드하고 RigidBody 컴포넌트를 포함한다", async () => {
    await ReactThreeTestRenderer.act(async () => {
      const renderer = await ReactThreeTestRenderer.create(
        <Provider store={store}>
          <StageThreeHayStack />,
        </Provider>,
      );

      expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);

      const RigidBody = renderer.scene.findAllByType("RigidBody");

      expect(RigidBody).not.toBeNull();
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/haystack.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/haystack.glb");
  });

  it("StageThreeStone 컴포넌트가 GLTF 모델을 로드하고 Clone 을 포함한다", async () => {
    await ReactThreeTestRenderer.act(async () => {
      const renderer = await ReactThreeTestRenderer.create(<StageThreeStone />);

      expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);

      const clone = renderer.scene.findAllByType("primitive");

      expect(clone).not.toBeNull();
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage3-cloud.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/stage3-cloud.glb",
    );
  });
});
