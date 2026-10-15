const button = document.getElementById("toggle");
const status = document.getElementById("status");

function updateButton(enabled) {
  if (enabled) {
    button.textContent = "Study Mode: ON";
    button.className = "on";
    status.textContent = "Distractions are reduced.";
  } else {
    button.textContent = "Study Mode: OFF";
    button.className = "off";
    status.textContent = "Normal YouTube experience.";
  }
}

chrome.storage.local.get(["studyMode"], (result) => {
  updateButton(result.studyMode === true);
});

button.addEventListener("click", async () => {

  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  const tab = tabs[0];

  if (!tab || !tab.url || !tab.url.includes("youtube.com")) {
    button.textContent = "Open YouTube first";
    button.className = "off";
    return;
  }

  chrome.storage.local.get(["studyMode"], async (result) => {

    const newState = result.studyMode !== true;

    await chrome.storage.local.set({
      studyMode: newState
    });

    updateButton(newState);

    await chrome.tabs.reload(tab.id);
  });
});