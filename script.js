const container = document.getElementById("video-container");

function addVideo() {
  const video = document.createElement("video");
  video.src = "rickroll.mp4";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true; // For iPhones
  container.appendChild(video);
}

setInterval(addVideo, 1000);
