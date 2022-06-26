import { QuickPickItem, TextEditor, window } from "vscode";
import * as offsets from "./offsets/offset.json";

export class OffsetManager {
  public async main(editor: TextEditor) {
    window
      .showQuickPick(this.getOffsetItems(), {
        canPickMany: true,
      })
      .then((picks) => {
        if (picks) {
          editor.edit((builder) => {
            const picksString = picks.map((pick) => pick.address).join(", ");
            builder.insert(editor.selection.start, picksString);
          });
        }
      });
  }

  private getOffsetItems(): Offset[] {
    return offsets.map((offset) => {
      const hexAddress = offset.address.replace("00", "0x");
      return new Offset(
        offset.name,
        hexAddress,
        [
          "Size: " + offset.size,
          "Length: " + offset.length,
          offset.scr ? "SCR: " + offset.scr : "",
          offset.description ? "\n" + offset.description : "",
        ].join(" ")
      );
    });
  }
}

class Offset implements QuickPickItem {
  constructor(
    readonly label: string,
    readonly address: string,
    readonly detail?: string
  ) {}

  description = this.address;
}
