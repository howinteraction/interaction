import { render, act } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { useSelector } from "react-redux";

import Loading from "../../../../components/Loading";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

vi.useFakeTimers();

describe("Loading 컴포넌트", () => {
  const stageTexts = ["Tutorial", "Stage1", "Stage2", "Stage3"];

  stageTexts.forEach((text, index) => {
    it(`각 스테이지에 맞는 stageLevel이 표시되어야 함`, () => {
      vi.mocked(useSelector).mockImplementation((selector) =>
        selector({
          stages: { stageLevel: index },
        }),
      );

      const { getByText } = render(<Loading />);

      expect(getByText(text)).toBeInTheDocument();
    });
  });

  it("500ms마다 점이 추가되는 로딩 애니메이션이 올바르게 동작함", async () => {
    vi.mocked(useSelector).mockImplementation((selector) =>
      selector({
        stages: { stageLevel: 0 },
      }),
    );

    const { getByText } = render(<Loading />);

    vi.useFakeTimers();

    expect(getByText(/Loading/)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(getByText(/Loading ./)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(getByText(/Loading ..../)).toBeInTheDocument();
  }, 5000);
});
