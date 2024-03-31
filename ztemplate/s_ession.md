---
Created: <% tp.file.creation_date('YYYY-MM-DD') %>
---
<%*
const folder = "4. Sessions";
const next_number = app.vault.getMarkdownFiles()
					.filter(x => x.path.includes(folder))
					.map(x=> x.basename.split(" ")[0])
					.sort((a, b)=> a > b)[0];
-%>

<% tp.file.rename("session"); %>

next_number = 1 + next_number;