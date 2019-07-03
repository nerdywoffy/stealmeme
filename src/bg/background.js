// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

const STEAL_MEME_ID = "stealmeme"


chrome.contextMenus.create({
  id: STEAL_MEME_ID,
  title: "Steal Meme",
  contexts: ["image"],
  visible: true
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if(info.menuItemId === STEAL_MEME_ID) {
    chrome.downloads.download({
      url: info.srcUrl,
      conflictAction: 'uniquify',
      saveAs: (localStorage['store.settings.askPlaceBeforeSteal'] === "true"),
      method: 'GET'
    }, (id) => {
      console.log('Downloading memes with DownloadID', id)
    })
  }
})