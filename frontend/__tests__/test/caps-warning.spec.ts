import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";

import * as CapsWarning from "../../src/ts/test/caps-warning";

describe("capsWarning", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="capsWarning" data-testid="capsWarning" class="hidden">Caps Lock</div>`;
    //make sure file gets loaded
    if (!CapsWarning) throw new Error("CapsWarning is undefined");
  });

  it("should show and hide the caps lock warning", async () => {
    //GIVEN
    let warningEl = screen.getByTestId("capsWarning");

    expect(warningEl).toBeInTheDocument();
    expect(warningEl).toHaveClass("hidden");

    //capslock enabled when pressed
    await userEvent.keyboard("[CapsLock]");
    expect(warningEl).not.toHaveClass("hidden");

    //disabled when typing lower case a
    await userEvent.keyboard("a");
    expect(warningEl).toHaveClass("hidden");
  });
});
