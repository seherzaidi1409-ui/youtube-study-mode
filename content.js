function applyStudyMode(enabled) {
  const oldStyle = document.getElementById("study-mode-style");

  if (oldStyle) {
    oldStyle.remove();
  }

  if (!enabled) {
    return;
  }

  const style = document.createElement("style");
  style.id = "study-mode-style";

  style.textContent = `
    ytd-rich-section-renderer:has(a[href^="/shorts/"]),
    ytd-reel-shelf-renderer,
    ytd-rich-shelf-renderer {
      display: none !important;
    }
  `;

  document.head.appendChild(style);
}

chrome.storage.local.get(["studyMode"], (result) => {
  applyStudyMode(result.studyMode === true);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.studyMode) {
    applyStudyMode(changes.studyMode.newValue === true);
  }
});

console.log("YouTube Study Mode loaded!");