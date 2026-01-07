// news cards data
const getNewsData = async () => {
  const res = await fetch('./data/newsData.json');
  const data = await res.json();
  newsCard(data)

};

//news cards style
function newsCard(news) {
  console.log(news)
  const newsCardContainer = document.getElementById('news-card-container');
  news.slice(0, 8).forEach(item => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('news-card');
    cardDiv.innerHTML = `
          <div class="news-image-wrapper">
             <img src='${item?.thumbnail}' alt="City lights in New York">
          </div>

           <div class="news-body">
             <h2 class="newsTitle">${item?.title}</h2>
             <h3 class="news-subtitle">Category:${item?.category}</h3>

             <p class="news-description">
               ${item.description}
             </p>

             <div class="news-action">
                <span>Date: ${item?.publish_date}</span>
                <button class="read-more-btn">Read More</button>
             </div>
          </div>


        `;
    cardDiv.querySelector('.read-more-btn')
      .addEventListener('click', () => {
        window.location.href = `newsDetails.html?id=${item.id}`;
      });
    newsCardContainer.appendChild(cardDiv);
  });

}

getNewsData()