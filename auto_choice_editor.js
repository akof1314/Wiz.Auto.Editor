/**
 * 第三方编辑器脚本文件名
 *
 * normal    普通笔记
 * markdown  Markdown笔记
 */
var editorScriptFile = {
    normal  :"baidu_editor.js",
    markdown:"md_editor.js"
}

function autoRunScriptFile () {
    var objApp = WizExplorerApp;
    var objWindow = objApp.Window;
    var objDocument = objWindow.CurrentDocument;
    var objCommon = null;

    if (objDocument == null) {
        return;
    };

    if (isMarkdown()) {
        runScriptFile(editorScriptFile.markdown);
    } else{
        runScriptFile(editorScriptFile.normal);
    };

    function isMarkdown() {
        var title = objDocument.Title;

        if (!title)
            return false;
        if (-1 != title.indexOf(".md "))
            return true;
        if (-1 != title.indexOf(".md@"))
            return true;
        if (title.match(/\.md$/i))
            return true;
        return false;
    };

    function runScriptFile (file) {
        if (file == "") {
            getObjCommon().EditDocument(objApp, null, objDocument, 0);
        } else{
            objApp.RunScriptFile(objApp.GetPluginPathByScriptFileName(file) + file, "js");
        };
    };

    function getObjCommon() {
        if (objCommon == null) {
            try {
                objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
            }
            catch (err) {
            }
        };
        return objCommon;
    };
};

autoRunScriptFile();