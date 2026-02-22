document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const yearEl = document.getElementById("year");

  // --- 1. Update tahun otomatis di footer ---
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- 2. Toggle menu navigasi di mobile ---
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // --- 3. Smooth scroll & tutup menu setelah klik link ---
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Tutup menu setelah klik (mobile)
      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
      }
    });
  });

  // --- 4. Animasi fade-in saat scroll ---
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeEls.forEach((el) => observer.observe(el));

  // --- 4b. Animasi untuk kategori menu ---
  const categoryEls = document.querySelectorAll(".menu-category");
  categoryEls.forEach((el) => observer.observe(el));

  // --- 5. Efek navbar saat scroll ---
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- 6. Smooth scroll untuk semua anchor ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

//  7. Kirim Pesan ke WhatsApp

function sendToWhatsApp(e) {
  e.preventDefault(); // mencegah reload halaman

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const phone = "6287701112844"; // Nomor tujuan WA

  // Validasi sederhana
  if (!name || !email || !message) {
    alert("Harap isi semua kolom sebelum mengirim pesan.");
    return;
  }

  // Format pesan
  const text =
    `Halo, saya *${name}* 👋%0A` +
    `Email: ${email}%0A%0A` +
    `Pesan:%0A${message}%0A%0A` +
    `Dikirim dari website *Luxury Plate* `;

  // Buka WhatsApp
  const url = `https://wa.me/6287701112844?text=Halo,selamat datang di Restoran LuxuryPlate`;
  window.open(url, "_blank");
}
