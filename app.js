const newsContainer = document.getElementById("news-container");

async function loadSpaceNews() {
  try {
    const res = await fetch(
      "https://api.spaceflightnewsapi.net/v4/articles/?limit=12"
    );
    const data = await res.json();

    newsContainer.innerHTML = "";

    data.results.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";

      card.innerHTML = `
        <img src="${article.image_url}" alt="Space News">
        <div class="news-content">
          <h3>${article.title}</h3>
          <p>${article.summary.substring(0, 120)}...</p>
          <a href="${article.url}" target="_blank">Read More →</a>
        </div>
      `;

      newsContainer.appendChild(card);
    });

  } catch (error) {
    newsContainer.innerHTML = "<p>Failed to load space news.</p>";
    console.error(error);
  }
}

loadSpaceNews();
