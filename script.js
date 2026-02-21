
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
        handleNavbarScroll(); // run once on load
    }

    // ── Mobile menu toggle ────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
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

    // Call initially
    resizeAllMasonryItems();

    // Call on window resize
    window.addEventListener('resize', resizeAllMasonryItems);

    // ── Form submission ───────────────────────────
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // In a real scenario, you would send this to a server
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});