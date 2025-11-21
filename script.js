import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnXnFlshtQujZhQrZYhKId-1aBldN-VDM",
  authDomain: "orbited---ai-space-project.firebaseapp.com",
  projectId: "orbited---ai-space-project",
  storageBucket: "orbited---ai-space-project.firebasestorage.app",
  messagingSenderId: "394860098894",
  appId: "1:394860098894:web:aea617620db7e2c0151a1f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.openNav = function () {
  document.querySelector(".side-nav").classList.add("active");
};

window.closeNav = function () {
  document.querySelector(".side-nav").classList.remove("active");
};

const loginBtn = document.querySelector(".login-btn");
const sideLogin = document.querySelector(".side-login");
const sideRegister = document.querySelector(".side-register");
const weatherCardBtn = document.getElementById("weatherCardBtn");

onAuthStateChanged(auth, (user) => {

  if (user) {
    console.log("User Logged In:", user.email);

    if (loginBtn) {
      loginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
      loginBtn.onclick = logoutUser;
    }

    if (sideLogin) {
      sideLogin.innerText = "Logout";
      sideLogin.href = "#";
      sideLogin.onclick = logoutUser;
    }

    if (sideRegister) {
      sideRegister.style.display = "none";
    }

  } else {
    console.log("No user logged in");

    if (loginBtn) {
      loginBtn.innerHTML = '<i class="fas fa-user"></i>';
      loginBtn.onclick = () => window.location.href = "login.html";
    }

    if (sideLogin) {
      sideLogin.innerText = "Login";
      sideLogin.href = "login.html";
    }

    if (sideRegister) {
      sideRegister.style.display = "block";
    }
  }
});

if (weatherCardBtn) {
  weatherCardBtn.addEventListener("click", (e) => {
    e.preventDefault();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = "weather.html";
      } else {
        window.location.href = "login.html";
      }
    });
  });
}

function logoutUser(e) {
  e.preventDefault();
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("✅ Service Worker Registered:", reg))
      .catch(err => console.log("❌ Service Worker Registration Failed:", err));
  });
}