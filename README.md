# epscript-lsp

![Download](https://img.shields.io/visual-studio-marketplace/i/zuhanit.eps-server?style=plastic) ![Community](https://img.shields.io/badge/Community-%20EDAC-yellow?link=https://cafe.naver.com/edac)

Provides epScript language support via epScript Language Server, for VSCode.

## Quick Start

1. [Install the eps-server Extension for Visual Studio Code.](https://code.visualstudio.com/docs/editor/extension-marketplace)
2. Extension is activated when you access a .eps file

## Features

- Code Completion
- Hover
- Highlights
- Signature Help
- Jump to declaration
- Code Diagnostic _incomplete_
- euddraft Build Manager
  - eps-server automatically search euddraft files(\*.(edd, eds)) and show them on Build Manager. You can run those files easily by task.
    ![Build](https://github.com/zuhanit/epscript-language-server/blob/master/images/build.gif?raw=true)
- Quick offset select
  - Select offsets from [euddb](https://euddb.website/), by Command`(CTRL+P -> Offset)` or click `CTRL+O`.
    ![Offset](https://github.com/zuhanit/epscript-language-server/blob/master/images/offset.gif?raw=true)
- Semantic Highlight

## Settings and Customization

Users can customize eps-server via settings.json in your workspace or Settings Editor UI.

- `epscript.diagnostics`
  - Used to extension creates diagnostics or not.
  - Default: `true`
  - Available values:
    - `true`
    - `false`
- `epscript.language`
  - Used to set locale.
  - `Default`: English
  - Available values:
    - `English`
    - `한국어`

## Questions, issues, contributions

- If you have a question about this extension, please [open an issue on GitHub](https://github.com/zuhanit/epscript-language-server/issues) with question label.
- If any problem is happend, please open an issue with Log. You can check logs at _Output - epScript Language Client_.
- Any kind of contributions are always welcome!
