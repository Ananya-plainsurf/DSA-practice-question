function prettifyHTML(html) {
  let indentLevel = 0;
  const indentSize = 2;

  // Regular expression to split the HTML into tags and content
  return html
    .split(/(<[^>]+>)/g) // Split by tags
    .map((part) => {
      // If it's an opening tag, increase indent level
      if (part.match(/^<[^/][^>]*>$/)) {
        const indent = " ".repeat(indentLevel * indentSize);
        indentLevel++;
        return `${indent}${part}\n`;
      }

      // If it's a closing tag, decrease indent level
      if (part.match(/^<\/[^>]+>$/)) {
        indentLevel--;
        const indent = " ".repeat(indentLevel * indentSize);
        return `${indent}${part}\n`;
      }

      // For text between tags, remove unnecessary whitespace and trim
      return part.trim()
        ? `\n${" ".repeat(indentLevel * indentSize)}${part.trim()}`
        : "";
    })
    .join("")
    .trim();
}

// Example HTML input
const rawHtml =
  "<html><head><title>Test Page</title></head><body><div><p>Hello, world!</p></div></body></html>";

const prettifiedHtml = prettifyHTML(rawHtml);
console.log(prettifiedHtml);
