function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy', err);
    });
}
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
var test = 5
console.log("j1tet ch20 essentials loaded");
console.log("https://github.com/Jihoo125/vscode-download/blob/main/ch20/js/essentials.js");
console.log("(c)j1tet 2024 ~ 2025");
