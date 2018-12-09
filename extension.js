const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.cutAllRight', function () {
        vscode.commands.executeCommand("cursorEndSelect").then(function () {
            vscode.commands.executeCommand("editor.action.clipboardCutAction");
        });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;
