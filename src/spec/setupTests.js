import "@testing-library/jest-dom";

import { vi } from "vitest";

HTMLCanvasElement.prototype.getContext = () => ({
  fillStyle: "",
  fillRect: vi.fn(),
});
