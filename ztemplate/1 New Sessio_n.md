<%*
const folder = "4. Sessions";
const tfolder = app.vault.getMarkdownFiles()
					.filter(x => x.path.includes(folder))[0]
					.parent;
const last_number = tfolder.children.length; 
const next_number = last_number + 1;

const next_session_name = `${next_number} session`;
const last_session_name = `${last_number} session`;

const template = tp.file.find_tfile("DateTemplate");
await tp.file.create_new(template, next_session_name, true, tfolder);

const last_session_file =  tp.file.find_tfile(last_session_name);

await app.vault.process(last_session_file, (data) => {
  // Append content (use \n for line break)
  return data + `\n\n[далее :: [[${next_session_name}]]]`;
});
-%>
