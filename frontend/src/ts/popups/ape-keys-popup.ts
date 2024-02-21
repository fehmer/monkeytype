import Ape from "../ape";
import * as Loader from "../elements/loader";
import * as Notifications from "../elements/notifications";
import format from "date-fns/format";
import * as ConnectionState from "../states/connection";
import Popup from "./popup";

const apeKeysPopup = new (class extends Popup {
  private apeKeys: Ape.ApeKeys.GetApeKeys | null = {};

  async getData(): Promise<void> {
    Loader.show();
    const response = await Ape.apeKeys.get();
    Loader.hide();

    if (response.status !== 200) {
      Notifications.add("Error getting ape keys: " + response.message, -1);
      return undefined;
    }

    this.apeKeys = response.data;
  }

  refreshList(): void {
    const data = this.apeKeys;
    if (data === undefined || data === null) return;
    const table = $("#apeKeysPopupWrapper table tbody");
    table.empty();
    const apeKeyIds = Object.keys(data);
    if (apeKeyIds.length === 0) {
      table.append(
        "<tr><td colspan='6' style='text-align: center;'>No keys found</td></tr>"
      );
      return;
    }
    apeKeyIds.forEach((apeKeyId) => {
      const key = data[apeKeyId] as SharedTypes.ApeKey;
      table.append(`
      <tr keyId="${apeKeyId}">
        <td>
          <div class="textButton">
            ${
              key.enabled
                ? `<i class="fas fa-fw fa-check-square"></i>`
                : `<i class="far fa-fw fa-square"></i>`
            }
          </div>
        </td>
        <td>${key.name}</td>
        <td>${format(new Date(key.createdOn), "dd MMM yyyy HH:mm")}</td>
        <td>${format(new Date(key.modifiedOn), "dd MMM yyyy HH:mm")}</td>
        <td>${
          key.lastUsedOn === -1
            ? "-"
            : format(new Date(key.lastUsedOn), "dd MMM yyyy HH:mm")
        }</td>
        <td>
          <div class="keyButtons">
            <div class="button edit">
              <i class="fas fa-fw fa-pen"></i>
            </div>
            <div class="button delete">
              <i class="fas fa-fw fa-trash-alt"></i>
            </div>
          </div>
        </td>
      </tr>
    `);
    });
  }
  override async preShow(): Promise<boolean> {
    if (!ConnectionState.get()) {
      Notifications.add("You are offline", 0, {
        duration: 2,
      });
      return false;
    }

    await this.getData();
    this.refreshList();
    return true;
  }

  async toggleKeyEnabled(keyId: string): Promise<void> {
    const key = this.apeKeys?.[keyId];
    if (!key || this.apeKeys === undefined) return;
    Loader.show();
    const response = await Ape.apeKeys.update(keyId, { enabled: !key.enabled });
    Loader.hide();
    if (response.status !== 200) {
      return Notifications.add("Failed to update key: " + response.message, -1);
    }
    key.enabled = !key.enabled;
    this.refreshList();
    if (key.enabled) {
      Notifications.add("Key active", 1);
    } else {
      Notifications.add("Key inactive", 1);
    }
  }

  override postShow(): void {
    $("#apeKeysPopup .generateApeKey").on("click", () => {
      apeKeysPopup.hide();
    });

    $("#popups").on("click", "#apeKeysPopup table .keyButtons .button", () => {
      apeKeysPopup.hide();
    });

    $("#popups").on("click", "#apeKeysPopup table .textButton", async (e) => {
      const keyId = $(e.target).closest("tr").attr("keyId") as string;
      await apeKeysPopup.toggleKeyEnabled(keyId);
    });
  }
})("apeKeysPopupWrapper");

export default apeKeysPopup;
