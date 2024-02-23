import PropTypes from "prop-types";
import { Aim } from "../Styles";
import StageClearModal from "../StageClearModal";

export default function RenderingContents({ isStageCleared, nextStage }) {
  if (isStageCleared) {
    return <StageClearModal nextStage={nextStage} />;
  }
  return <Aim />;
}

RenderingContents.propTypes = {
  isStageCleared: PropTypes.bool.isRequired,
  nextStage: PropTypes.number.isRequired,
};
