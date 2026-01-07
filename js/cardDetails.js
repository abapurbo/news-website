const params = new URLSearchParams(window.location.search);
const newsId = parseInt(params.get("id"));

const newsItem = newsData.find(item => item.id === newsId);

if (newsItem) {
  document.getElementById("detailsImage").src = newsItem.cover_image;
  document.getElementById("detailsTitle").innerText = newsItem.title;
  document.getElementById("detailsCategory").innerText =
    `Category: ${newsItem.category}`;
  document.getElementById("detailsDate").innerText =
    `Published: ${newsItem.publish_date}`;
  document.getElementById("detailsContent").innerText =
    newsItem.content;
} else {
  document.body.innerHTML = "<h2>News not found</h2>";
}

