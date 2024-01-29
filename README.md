# Cut All Right

Cut rest of line. Like `Delete All Right` but cut it and store to clipboard.

## Features

This extension cuts from the position of the cursor to the end of the line, like Emacs's `C-k` or Cocoa's `ctrl+k`.

There is already a `Delete All Right` command in VS Code, but this extension does `Cut`, not `Delete`.

Implementation of this extension is very simple, so I think that the delay is small even if you execute the command consecutively.

This extension is a single function. If you want to use more Emacs keybinds, consider using the following extensions.

- [hiro\-sun/vscode\-emacs](https://github.com/hiro-sun/vscode-emacs)
- [youngderekm/vscode\-emacs\-extras: A small collection of Emacs commands for Visual Studio Code\.](https://github.com/youngderekm/vscode-emacs-extras)

## Commands and keybindings

- `extension.cutAllRight`
    - Cut to the end of the line.
- `ctrl+k`
    - Default keybind to `cutAllRight` command.
