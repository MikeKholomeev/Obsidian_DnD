<%*
const folder = "5. Known Characters";
const tfolder = app.vault.getMarkdownFiles()
					.filter(x => x.path.includes(folder))[0]
					.parent;

const new_char_name = `{{new character}}`;

const template = tp.file.find_tfile("noteTemplate");
await tp.file.create_new(template, new_char_name, true, tfolder);
debugger;
const template2 = tp.file.find_tfile("Сессии с этим файлом");
tR += await tp.file.include(template2);
%>

