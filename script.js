var convertBtnMP4 = document.querySelector(".convert-button-mp4");
var URLinput = document.querySelector(".URL-input");

convertBtnMP4.addEventListener("click", () => {
  console.log(`URL: ${URLinput.value}`);
  sendURLMP4(URLinput.value);
});

function sendURLMP4(URL) {
  window.location.href = `https://youtube-downloader--tal0s.repl.co/download?URL=${URL}?TYPE=mp4`;
}
