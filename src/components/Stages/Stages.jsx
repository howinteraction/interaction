import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";

import Tutorial from "./Tutorial";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";

export default function Stages() {
  const currentStage = useSelector((state) => state.stages.stageLevel);

  const renderStageComponent = () => {
    switch (currentStage) {
      // case 0:
      //   return (
      //     <Canvas
      //       camera={{ near: 0.1, far: 1000, position: [0, 7, 23], fov: 80 }}
      //     >
      //       <Tutorial />
      //     </Canvas>
      //   );
      // case 1:
      //   return <StageOne />;
      // case 2:
      //   return <StageTwo />;
      // case 3:
      //   return <StageThree />;
      default:
        return <StageThree />;
    }
  };

  return <>{renderStageComponent()}</>;
}
