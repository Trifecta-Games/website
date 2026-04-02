document.addEventListener('DOMContentLoaded', function () {
    // ── Navbar scroll effect ──────────────────────
    const navbar = document.getElementById('navbar');
    if (navbar) {
        function handleNavbarScroll() {
            if (window.scrollY > 40) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
        window.addEventListener('scroll', handleNavbarScroll, { passive: true });
        handleNavbarScroll();
    }

    // ── Mobile menu toggle ────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.classList.toggle('active');
        });

        const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // ── Careers toggle functionality ──────────────
    const careersToggle = document.getElementById('careers-toggle');
    const careersList = document.getElementById('careers-list');

    if (careersToggle && careersList) {
        careersToggle.addEventListener('click', function () {
            careersList.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (careersList.classList.contains('hidden')) {
                icon.setAttribute('data-feather', 'chevron-down');
            } else {
                icon.setAttribute('data-feather', 'chevron-up');
            }
            feather.replace();
        });
    }

    // ── Masonry grid adjustments ──────────────────
    function resizeMasonryItem(item) {
        const grid = document.querySelector('.masonry-grid');
        if (!grid) return;

        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const contentHeight = item.querySelector('div').getBoundingClientRect().height;
        const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = 'span ' + rowSpan;
    }

    function resizeAllMasonryItems() {
        if (window.innerWidth < 768) return;

        const allItems = document.querySelectorAll('.masonry-item');
        allItems.forEach(function (item) {
            resizeMasonryItem(item);
        });
    }

    resizeAllMasonryItems();
    window.addEventListener('resize', resizeAllMasonryItems);

    // ── Web3Forms Integration (FINAL) ──────────────
  const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "af3bd3f2-c03e-4bac-aa7a-d88cc9906613");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
    }
});