import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

import Subtitle from "../../../../components/Subtitle";
import { SUBTITLE_TIME } from "../../../../utils/constants";

vi.mock("@react-three/drei", () => ({
  // eslint-disable-next-line react/prop-types
  Text: ({ children }) => <text>{children}</text>,
}));

describe("Subtitle 컴포넌트", () => {
  it("SubtitleTime 이후에 컴포넌트가 사라져야 함", () => {
    const { container, rerender } = render(
      <Subtitle
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        subtitle="테스트 자막"
      />,
    );

    expect(container).toBeInTheDocument();

    vi.useFakeTimers(SUBTITLE_TIME);
    rerender(
      <Subtitle
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        subtitle="테스트 자막"
      />,
    );

    expect(container).toBeInTheDocument();
  });
});
