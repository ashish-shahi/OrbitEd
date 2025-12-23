import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// NEW: Added Firestore imports here
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnXnFlshtQujZhQrZYhKId-1aBldN-VDM",
  authDomain: "orbited---ai-space-project.firebaseapp.com",
  projectId: "orbited---ai-space-project",
  storageBucket: "orbited---ai-space-project.firebasestorage.app",
  messagingSenderId: "394860098894",
  appId: "1:394860098894:web:aea617620db7e2c0151a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // NEW: Initialize Database

// --- Existing UI Helper Functions ---
window.openNav = function () {
  document.querySelector(".side-nav").classList.add("active");
};

window.closeNav = function () {
  document.querySelector(".side-nav").classList.remove("active");
};

// --- DOM Elements ---
const navProfileBtn = document.getElementById("navProfileBtn");
const loginBtn = document.querySelector(".login-btn");
const sideLogin = document.querySelector(".side-login");
const sideRegister = document.querySelector(".side-register");
const weatherCardBtn = document.getElementById("weatherCardBtn");

// --- Main Auth Listener (Handles Login/Logout UI) ---
onAuthStateChanged(auth, (user) => {

  if (user) {
    console.log("User Logged In:", user.email);

    // --- NEW: SHOW PROFILE BUTTON ---
    // We check 'if (navProfileBtn)' first to prevent crashing if the button isn't found
    if (navProfileBtn) {
        navProfileBtn.style.display = "inline-block";
    }

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

    // Profile Page Logic
    if (window.location.pathname.includes("profile.html")) {
      loadUserProfile(user);
    }

  } else {
    console.log("No user logged in");

    // --- NEW: HIDE PROFILE BUTTON ---
    if (navProfileBtn) {
        navProfileBtn.style.display = "none";
    }

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

    // Redirect if on profile page and logged out
    if (window.location.pathname.includes("profile.html")) {
        window.location.href = "login.html";
    }
  }
});

// --- Weather Button Logic ---
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

// --- Logout Function ---
function logoutUser(e) {
  e.preventDefault();
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}

// --- Service Worker ---
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("✅ Service Worker Registered:", reg))
      .catch(err => console.log("❌ Service Worker Registration Failed:", err));
  });
}

// ==========================================
// 🚀 NEW SECTION: PROFILE PAGE LOGIC
// ==========================================

// We define the inputs here so we can use them in the functions below
const nameInput = document.getElementById('nameInput');
const branchInput = document.getElementById('branchInput');
const yearInput = document.getElementById('yearInput');
const githubInput = document.getElementById('githubInput');
const saveBtn = document.getElementById('saveBtn');

// Function 1: Load Data from Database
async function loadUserProfile(user) {
  // Only run if the inputs actually exist on this page
  if (!nameInput) return; 

  try {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      nameInput.value = data.displayName || "";
      branchInput.value = data.branch || "";
      yearInput.value = data.year || "";
      githubInput.value = data.github || "";
    }
  } catch (error) {
    console.error("Error loading profile:", error);
  }
}

// Function 2: Save Data to Database
if (saveBtn) {
  saveBtn.addEventListener('click', async () => {
    const user = auth.currentUser;
    
    if (user) {
      // Visual feedback
      const originalText = saveBtn.innerText;
      saveBtn.innerText = "Saving...";
      saveBtn.disabled = true;

      try {
        await setDoc(doc(db, "users", user.uid), {
          displayName: nameInput.value,
          branch: branchInput.value,
          year: yearInput.value,
          github: githubInput.value
        }, { merge: true });

        alert("Profile Updated Successfully!");

      } catch (error) {
        console.error("Error saving profile:", error);
        alert("Failed to save: " + error.message);
      } finally {
        saveBtn.innerText = originalText;
        saveBtn.disabled = false;
      }
    }
  });
}