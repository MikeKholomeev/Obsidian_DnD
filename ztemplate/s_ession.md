---
Created: <% tp.file.creation_date('YYYY-MM-DD') %>
---
<%*
const folder = "4. Sessions";
const last_number = app.vault.getMarkdownFiles()
					.filter(x => x.path.includes(folder))
					.length;
const next_number = last_number + 1;
await tp.file.rename(`${next_number} session`);

debugger;
const next_session_file = tp.file.find_tfile(`${next_number} session`);
const last_session_file =  tp.file.find_tfile(`${last_number} session`);
await app.vault.process(last_session_file, (data) => {
  // Append content (use \n for line break)
  return data + `\n\n[далее :: [[${next_session_file.basename}]]]`;
});
-%>

await app.vault.process(last_session_file, (data) => {
  // Append content (use \n for line break)
  return data + `\n\n[далее :: [[${next_session_file.path()}]]`;
});

next_number = 1 + next_number;