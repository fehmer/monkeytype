import { activateAnalytics } from "../controllers/analytics-controller";
import { focusWords } from "../test/test-ui";
import * as Notifications from "../elements/notifications";
import * as AdController from "../controllers/ad-controller";
import Popup from "./popup";

type Accepted = {
  security: boolean;
  analytics: boolean;
};

const cookiePopup = new (class extends Popup {
  private visible = false;
  override animationTime = 0;

  override async show(): Promise<void> {
    await super.show();
    this.visible = true;
    this.verifyVisible();
    if (!this.visible) {
      super.hide();
    }
  }

  override hide(): void {
    console.log("cookie hide");
    super.hide();
    focusWords();
    this.visible = false;
  }

  getAcceptedObject(): Accepted | null {
    const acceptedCookies = localStorage.getItem("acceptedCookies") ?? "";
    if (acceptedCookies) {
      return JSON.parse(acceptedCookies);
    } else {
      return null;
    }
  }

  setAcceptedObject(obj: Accepted): void {
    localStorage.setItem("acceptedCookies", JSON.stringify(obj));
  }
  async check(): Promise<void> {
    const accepted = this.getAcceptedObject();
    if (accepted === null) {
      await this.show();
    }
  }
  isVisible(): boolean {
    return this.visible;
  }

  showSettings(): void {
    $("#cookiePopup .main").addClass("hidden");
    $("#cookiePopup .settings").removeClass("hidden");
  }

  verifyVisible(): void {
    if (!this.visible) return;
    if (
      $(`#${this.wrapperId}`)[0] === undefined ||
      !$(`#${this.wrapperId}`).is(":visible") ||
      $(`#${this.wrapperId}`).outerHeight(true) === 0
    ) {
      //removed by cookie popup blocking extension
      this.visible = false;
    }
  }
  override postShow(): void {
    $("#cookiePopup .acceptAll").on("click", () => {
      const accepted = {
        security: true,
        analytics: true,
      };
      cookiePopup.setAcceptedObject(accepted);
      activateAnalytics();
      cookiePopup.hide();
    });

    $("#cookiePopup .rejectAll").on("click", () => {
      const accepted = {
        security: true,
        analytics: false,
      };
      cookiePopup.setAcceptedObject(accepted);
      cookiePopup.hide();
    });

    $("#cookiePopup .acceptSelected").on("click", () => {
      console.log("cookie hide");
      const analytics = $("#cookiePopup .cookie.analytics input").prop(
        "checked"
      );
      const accepted = {
        security: true,
        analytics,
      };
      cookiePopup.setAcceptedObject(accepted);
      cookiePopup.hide();

      if (analytics === true) {
        activateAnalytics();
      }
    });

    $("#cookiePopup .openSettings").on("click", () => {
      cookiePopup.showSettings();
    });

    $("#cookiePopup .cookie.ads .textButton").on("click", () => {
      try {
        AdController.showConsentPopup();
      } catch (e) {
        console.error("Failed to open ad consent UI");
        Notifications.add(
          "Failed to open Ad consent popup. Do you have an ad or cookie popup blocker enabled?",
          -1
        );
      }
    });
  }
})("cookiePopupWrapper");

$(document).on("keypress", (e) => {
  cookiePopup.verifyVisible();
  if (cookiePopup.isVisible()) {
    e.preventDefault();
  }
});

export default cookiePopup;
