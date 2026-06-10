const markdownInput = document.getElementById("markdown-input");
const rawHtml = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

// Convert markdown to HTML.
// Rule order matters:
//   - longer heading prefixes first (### before ## before #)
//   - images before links (image syntax is a superset of link syntax)
//   - bold before italic (** would otherwise be eaten by the * rule)
function convertMarkdown(input) {
    return input
        // headings
        .replace(/^### (.*)$/gm, "<h3>$1</h3>")
        .replace(/^## (.*)$/gm, "<h2>$1</h2>")
        .replace(/^# (.*)$/gm, "<h1>$1</h1>")
        // images and links
        .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        // bold / italic — non-greedy so inline matches work
        .replace(/(\*\*|__)(.+?)\1/g, "<strong>$2</strong>")
        .replace(/(\*|_)(.+?)\1/g, "<em>$2</em>")
        // blockquote
        .replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>");
}

markdownInput.addEventListener("input", () => {
    const result = convertMarkdown(markdownInput.value);
    rawHtml.innerText = result;
    htmlPreview.innerHTML = result;
});
