const gallery = document.getElementById("gallery");
const buttons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");

const NASA_IMAGE_API = "https://images-api.nasa.gov/search";

async function loadImages(query) {
  gallery.innerHTML = "Loading images...";
  
  const res = await fetch(`${NASA_IMAGE_API}?q=${query}&media_type=image&page_size=120`);
  const data = await res.json();

  gallery.innerHTML = "";

  data.collection.items.forEach(item => {
    const imgSrc = item.links?.[0]?.href;
    const title = item.data[0].title;

    if (!imgSrc) return;

    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
      <img src="${imgSrc}" loading="lazy">
      <p>${title}</p>
    `;

    div.onclick = () => {
      modal.style.display = "block";
      modalImg.src = imgSrc;
      modalTitle.textContent = title;
    };

    gallery.appendChild(div);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadImages(btn.dataset.query);
  });
});

closeBtn.onclick = () => modal.style.display = "none";

// Initial load
loadImages("space earth satellite");
