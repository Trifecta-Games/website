class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-link {
          position: relative;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #9f7aea;
          transition: width 0.3s ease;
        }
        .nav-link:hover:after {
          width: 100%;
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .mobile-menu.open {
          max-height: 500px;
        }
      </style>
      <nav class="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <a href="/" class="flex items-center">
              <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Trifecta
              </span>
            </a>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="#games" class="nav-link text-white hover:text-purple-300">Games</a>
              <a href="#ar-vr" class="nav-link text-white hover:text-purple-300">AR/VR</a>
              <a href="#about" class="nav-link text-white hover:text-purple-300">About</a>
              <a href="/careers" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                Careers
              </a>
            </div>
            
            <!-- Mobile menu button -->
            <button class="md:hidden focus:outline-none" id="mobile-menu-button">
              <i data-feather="menu" class="w-6 h-6 text-white"></i>
            </button>
          </div>
          
          <!-- Mobile Navigation -->
          <div class="mobile-menu md:hidden mt-4" id="mobile-menu">
            <div class="flex flex-col space-y-4 pb-4">
              <a href="#games" class="nav-link text-white hover:text-purple-300">Games</a>
              <a href="#ar-vr" class="nav-link text-white hover:text-purple-300">AR/VR</a>
              <a href="#about" class="nav-link text-white hover:text-purple-300">About</a>
              <a href="/careers" class="px-4 py-2 bg-gradient-to-r