import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.cutAllRight', async () => {
        const editor = vscode.window.activeTextEditor
        if (!editor) { return }

        const currentPos = editor.selection.active
        const lineEndPos = editor.document.lineAt(currentPos.line).range.end
        if (!currentPos.isEqual(lineEndPos)) {
            await vscode.commands.executeCommand("cursorLineEndSelect")
            await vscode.commands.executeCommand("editor.action.clipboardCutAction")
            return
        }

        const isLastLine = editor.selection.active.line == editor.document.lineCount - 1
        const headOfNextLine = currentPos.translate(isLastLine ? 0 : 1, -currentPos.character)
        const range = new vscode.Range(currentPos, headOfNextLine)
        const text = editor.document.getText(range)
        await vscode.env.clipboard.writeText(text)
        await editor.edit(editBuilder => editBuilder.delete(range))
    });

    context.subscriptions.push(disposable)
}
