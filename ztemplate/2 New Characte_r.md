<%*
const folder = "5. Known Characters";
const tfolder = app.vault.getMarkdownFiles()
					.filter(x => x.path.includes(folder))[0]
					.parent;

const selected_name = await tp.file.selection().trim();
debugger;
if (selected_name != "") {
	app.workspace.activeLeaf.view.editor.replaceSelection(`[[${selected_name}]]`);
}

const new_char_name = (selected_name == null) ? `{{new character}}` : selected_name;

const template = tp.file.find_tfile("noteTemplate");
await tp.file.create_new(template, new_char_name, true, tfolder);

const template2 = tp.file.find_tfile("Сессии с этим файлом");
tR += await tp.file.include(template2);
%>
