

 const menuToggle = document.getElementById('menuToggle');
        const menuOverlay = document.getElementById('menuOverlay');
        const closeMenu = document.getElementById('closeMenu');
        const menuItems = document.querySelectorAll('.menu-item');


         function toggleMenu() {
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (menuOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        // Event listeners
        menuToggle.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);

        // Close menu when clicking on menu items
        menuItems.forEach(item => {
            item.addEventListener('click', toggleMenu);
        });

        // Close menu when clicking outside (on overlay background)
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                toggleMenu();
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });

// scroll
    window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navSection');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


//   swiper slider


 const swiper = new Swiper('.food-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });



  
    






