# epscript-lsp &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![Download](https://img.shields.io/visual-studio-marketplace/i/zuhanit.eps-server?style=plastic) ![Community](https://img.shields.io/badge/Community-%20EDAC-yellow?link=https://cafe.naver.com/edac)

epScript language support via Language Server Protocol.

- Visual Studio Code
- _Neovim (In progress)_

## Limited Update
I'll have to perform korea military service start from 2023.01.17 to 2024.07. Update can be difficult but I will do my best to maintain this. If anyone interested in epscript-lsp(or eps-server), please contact by github issue.

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

## Installation

You can use eps-server easily by npm. Just install it!

- `yarn add @eps-server/server` for server package.

## Questions, issues, contributions

- If you have a question about this extension, please [open an issue on GitHub](https://github.com/zuhanit/epscript-language-server/issues) with question label.
- If any problem is happend, please open an issue with Log. You can check logs at _Output - epScript Language Client_ _(in vscode)_.
- Any kind of contributions are always welcome!
