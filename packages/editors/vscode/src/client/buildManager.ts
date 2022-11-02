import {
  Event,
  EventEmitter,
  ProviderResult,
  ShellExecution,
  Task,
  tasks,
  TaskScope,
  TreeDataProvider,
  TreeItem,
  window,
  workspace,
  WorkspaceFolder,
} from "vscode";

import * as glob from "glob";
import { join } from "path";
interface Script {
  fileName: string;
  filePath: string;
  workspaceFolder: WorkspaceFolder;
}
export class BuildManager implements TreeDataProvider<BuildScript> {
  private workspaces: undefined | WorkspaceFolder[];
  private _onDidChangeTreeData: EventEmitter<
    BuildScript | undefined | null | void
  > = new EventEmitter<BuildScript | undefined>();
  readonly onDidChangeTreeData: Event<BuildScript | undefined | null | void> =
    this._onDidChangeTreeData.event;

  constructor() {
    const workspaceFolder = workspace.workspaceFolders;

    if (workspaceFolder) {
      this.workspaces = workspaceFolder.map((folder) => {
        return {
          name: folder.name,
          uri: folder.uri,
          index: folder.index,
        };
      });
    }
  }

  public refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getChildren(element?: BuildScript): ProviderResult<BuildScript[]> {
    const scripts: Script[] = this.workspaces.flatMap((folder) =>
      this.getDraftFiles(folder)
    );

    if (element) {
      return scripts.map<BuildScript>(
        (script) => new BuildScript(script, script.workspaceFolder)
      );
    } else {
      return scripts.map<BuildScript>(
        (script) => new BuildScript(script, script.workspaceFolder)
      );
    }
  }

  getTreeItem(element: BuildScript): TreeItem | Thenable<TreeItem> {
    return element;
  }

  public edit(element: BuildScript): void {
    workspace.openTextDocument(element.script.filePath).then((doc) => {
      window.showTextDocument(doc);
    });
  }

  public async build(element: BuildScript): Promise<void> {
    tasks.executeTask(this.buildTask(element));
  }

  private buildTask(element: BuildScript): Task {
    const draftTask: Task = new Task(
      {
        type: "build",
      },
      TaskScope.Workspace,
      element.script.fileName,
      "euddraft",
      new ShellExecution(`call ${element.script.filePath}`)
    );

    return draftTask;
  }

  private getDraftFiles(workspaceFolder: WorkspaceFolder): Script[] {
    return glob
      .sync("**/*.{edd,eds}", { cwd: workspaceFolder.uri.fsPath })
      .map((file) => {
        return {
          fileName: file,
          filePath: workspaceFolder.uri.fsPath + "\\" + file,
          workspaceFolder: workspaceFolder,
        };
      });
  }
}

export class BuildScript extends TreeItem {
  constructor(
    public script: Script,
    readonly workspaceFolder: WorkspaceFolder
  ) {
    super(script.fileName);

    (this.tooltip = script.filePath), (this.description = script.filePath);
  }

  iconPath = join(__filename, "..", "..", "resources", "edd.svg");
}
