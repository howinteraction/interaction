import { describe, it, expect, vi, beforeEach } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import Cylinder from "../../../components/models/StageOne/Cylinder";
import Box from "../../../components/models/StageOne/Box";
import Capsule from "../../../components/models/StageOne/Capsule";
import Cone from "../../../components/models/StageOne/Cone";
import Galaxy from "../../../components/models/StageOne/Galaxy";
import HallowCube from "../../../components/models/StageOne/HallowCube";
import StageOneTimeScreen from "../../../components/models/StageOne/StageOneTimeScreen";
import Torus from "../../../components/models/StageOne/Torus";
import HexSphere from "../../../components/models/StageOne/HexSphere";
import StageOnePortal from "../../../components/models/StageOne/StageOnePortal";

function changeColorNameToHex(colorName) {
  const colors = {
    red: "ff0000",
    green: "00ff00",
    blue: "0000ff",
  };

  return colors[colorName.toLowerCase()] || null;
}

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

    vi.mock("@react-three/rapier", () => ({
      RigidBody: vi.fn(),
    }));
  });

  it("Capsule 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<Capsule />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/capsule.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/capsule.glb");
  });

  it("Cone 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<Cone />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/cone.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/cone.glb");
  });

  it("Galaxy 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<Galaxy />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/galaxy.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/galaxy.glb");
  });

  it("HallowCube 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<HallowCube />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/hallow-cube.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/hallow-cube.glb");
  });

  it("HallowCube 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<HallowCube />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/hallow-cube.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/hallow-cube.glb");
  });

  it("StageOneTimeScreen 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<StageOneTimeScreen />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage1-time-screen.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/stage1-time-screen.glb",
    );
  });

  it("Torus 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<Torus />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/torus.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/torus.glb");
  });

  it("HexSphere 컴포넌트가 useGLTF를 통해 scene을 로드하고 렌더링해야 함", async () => {
    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(<HexSphere />);
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/hex-sphere.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith("/assets/glb/hex-sphere.glb");
  });

  it("StageOnePortal 컴포넌트가 useGLTF를 통해 scene을 로드하고 RigidBody 컴포넌트를 포함한다", async () => {
    await ReactThreeTestRenderer.act(async () => {
      const renderer = await ReactThreeTestRenderer.create(<StageOnePortal />);

      expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);

      const RigidBody = renderer.scene.findAllByType("RigidBody");

      expect(RigidBody).not.toBeNull();
    });

    expect(useGLTF).toHaveBeenCalledWith("/assets/glb/stage1-portal.glb");
    expect(useGLTF.preload).toHaveBeenCalledWith(
      "/assets/glb/stage1-portal.glb",
    );
  });
});

describe("Cylinder 모델 컴포넌트", () => {
  it("주어진 props 대로 컴포넌트가 정상적으로 렌더링 되어야 함", async () => {
    const args = [5, 5, 20, 32];
    const color = "red";
    const renderer = await ReactThreeTestRenderer.create(
      <Cylinder args={args} color={color} />,
    );
    const CylinderGeometry = renderer.scene.children[0].allChildren.find(
      (child) => child._fiber.type === "CylinderGeometry",
    );
    const meshStandardMaterial = renderer.scene.children[0].allChildren.find(
      (child) => child._fiber.type === "MeshStandardMaterial",
    );
    const hexCodeColor = changeColorNameToHex(color);

    expect(CylinderGeometry).not.toBeUndefined();
    expect(meshStandardMaterial).not.toBeUndefined();

    expect(CylinderGeometry._fiber.parameters.radiusTop).toEqual(args[0]);
    expect(CylinderGeometry._fiber.parameters.radiusBottom).toEqual(args[1]);
    expect(CylinderGeometry._fiber.parameters.height).toEqual(args[2]);
    expect(CylinderGeometry._fiber.parameters.radialSegments).toEqual(args[3]);

    expect(meshStandardMaterial._fiber.color.getHexString()).toEqual(
      hexCodeColor,
    );
  });
});

describe("Box 모델 컴포넌트", () => {
  it("주어진 props 대로 컴포넌트가 정상적으로 렌더링 되어야 함", async () => {
    const args = [10, 10, 10];
    const color = "red";
    const renderer = await ReactThreeTestRenderer.create(
      <Box args={args} color={color} />,
    );
    const boxGeometry = renderer.scene.children[0].allChildren.find(
      (child) => child._fiber.type === "BoxGeometry",
    );
    const meshStandardMaterial = renderer.scene.children[0].allChildren.find(
      (child) => child._fiber.type === "MeshStandardMaterial",
    );
    const hexCodeColor = changeColorNameToHex(color);

    expect(boxGeometry).not.toBeUndefined();
    expect(meshStandardMaterial).not.toBeUndefined();

    expect(boxGeometry._fiber.parameters.width).toEqual(args[0]);
    expect(boxGeometry._fiber.parameters.height).toEqual(args[1]);
    expect(boxGeometry._fiber.parameters.depth).toEqual(args[2]);

    expect(meshStandardMaterial._fiber.color.getHexString()).toEqual(
      hexCodeColor,
    );
  });
});
