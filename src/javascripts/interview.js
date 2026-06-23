import Plyr from "plyr";

// Video controls

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".Q_ArticleVideo");
  if (video)
    new Plyr(video, {
      controls: ["play-large", "play", "progress", "mute", "fullscreen"],
    });
});
