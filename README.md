# Wiz.Auto.Editor

**Wiz.Auto.Editor** 是一个支持自动选择编辑器的为知笔记功能增强插件。

#### 主要特性

- 根据是否是 Markdown 笔记，来分别选择不同的编辑器进行编辑。

#### 下载和安装

- 通过 [Github下载安装](https://github.com/akof1314/Wiz.Auto.Editor/releases)。

#### 使用方法

- 单次使用：编辑笔记时，下拉选择`自动选择编辑器`选项；
- 一劳永逸：`选项`→`编辑`→`默认编辑器`，选择`自动选择编辑器`选项；

#### 配置方法

打开`auto_choice_editor.js`文件，修改以下配置项：
```
var editorScriptFile = {
    normal  :"baidu_editor.js",
    markdown:"md_editor.js"
}
```
