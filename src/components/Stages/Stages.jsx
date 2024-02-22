import { useSelector } from "react-redux";

import Tutorial from "./Tutorial";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";

export default function Stages() {
  const currentStage = useSelector((state) => state.stages.stageLevel);

  const renderStageComponent = () => {
    switch (currentStage) {
      case 0:
        return <Tutorial />;
      case 1:
        return <StageOne />;
      case 2:
        return <StageTwo />;
      case 3:
        return <StageThree />;
      default:
        return null;
    }
  };

  return <>{renderStageComponent()}</>;
}
