import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";

import Tutorial from "./Tutorial";
import StageOne from "./StageOne";

export default function Stages() {
  const currentStage = useSelector((state) => state.stage.stage);

  const renderStageComponent = () => {
    switch (currentStage) {
      case 0:
        return (
          <Canvas
            camera={{ near: 0.1, far: 1000, position: [0, 7, 23], fov: 80 }}
          >
            <Tutorial />
          </Canvas>
        );
      case 1:
        return <StageOne />;
      default:
        return null;
    }
  };

  return <>{renderStageComponent()}</>;
}
