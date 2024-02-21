import Popup from "./popup";

const contactPopup = new Popup("contactPopupWrapper");

$(document.body).on(
  "click",
  "#contactPopupButton, #contactPopupButton2",
  async () => {
    await contactPopup.show();
  }
);
