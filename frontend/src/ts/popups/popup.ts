import * as Skeleton from "./skeleton";

export default class Popup {
  protected animationTime = 125;
  constructor(protected readonly wrapperId: string) {
    Skeleton.save(wrapperId);

    $(document.body).on("click", `#${this.wrapperId}`, (e) => {
      if (e.target.id === wrapperId) {
        this.hide();
      }
    });

    $(document).on("keydown", (e) => {
      if (e.key === "Escape" && this.isPopupVisible()) {
        this.hide();
        e.preventDefault();
      }
    });
    $(`#${this.wrapperId}`).on("mousedown", (e) => {
      if (e.target.id === wrapperId) {
        this.hide();
      }
    });
  }

  isPopupVisible(): boolean {
    const el = document.querySelector(`#popups #${this.wrapperId}`);
    if (!el) {
      return false;
    }
    return !!el.getClientRects().length;
  }

  async show(): Promise<void> {
    console.log("show", this.wrapperId);
    Skeleton.append(this.wrapperId);
    if (!this.isPopupVisible() && (await this.preShow())) {
      const wrapper = $(`#${this.wrapperId}`);

      wrapper.on("scroll touchmove mousewheel", (e) => {
        console.log("##### scroll", e.originalEvent?.currentTarget);
        if (e.currentTarget.id == this.wrapperId) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        return true;
      });
      wrapper
        .stop(true, true)
        .css("opacity", 0)
        .removeClass("hidden")
        .animate({ opacity: 1 }, this.animationTime, () => this.postShow());
    }
  }

  async preShow(): Promise<boolean> {
    return true;
  }

  postShow(): void {
    //
  }

  hide(): void {
    const isVisible = this.isPopupVisible();
    console.log({ close: this.wrapperId, isVisible });
    if (this.isPopupVisible()) {
      $(`#${this.wrapperId}`)
        .stop(true, true)
        .css("opacity", 1)
        .animate(
          {
            opacity: 0,
          },
          this.animationTime,
          () => {
            $(`#${this.wrapperId}`).addClass("hidden");
            Skeleton.remove(this.wrapperId);
          }
        );
    }
  }
}
