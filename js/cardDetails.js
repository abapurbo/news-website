const newsDetailsData = async () => {
    try {
        const res = await fetch('./data/newsData.json');
        const data = await res.json();
        renderNewsDetails(data);
    } catch (error) {
        console.error("Error fetching news data:", error);
    }
};

const renderNewsDetails = (newsData) => {
    const params = new URLSearchParams(window.location.search);
    const newsId = parseInt(params.get("id"));

    const newsItem = newsData.find(item => item.id === newsId);
    const detailsContainer = document.getElementById('news-details-container');

    if (newsItem) {
        detailsContainer.innerHTML = `
            <div class="most-popular-news">
                <div class="sports-img">
                    <img src="${newsItem.cover_image}" alt="${newsItem.title}">
                </div>
                <div>
                    <h1 class="playfair-display-font">${newsItem.title}</h1>
                    <p id="popular-news-description" class="playfair-display-font">
                        ${newsItem.content}
                    </p>
                    <p class="category-and-date">
                        <span style="color:red">Category: ${newsItem.category}</span>
                        <span>Publish Date: ${newsItem.publish_date}</span>
                    </p>
                </div>
            </div>
        `;
    } else {
        detailsContainer.innerHTML = "<h2>News not found</h2>";
    }
};

newsDetailsData();
