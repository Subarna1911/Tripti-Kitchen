
 const menuToggle = document.getElementById('menuToggle');
        const menuOverlay = document.getElementById('menuOverlay');
        const closeMenu = document.getElementById('closeMenu');
        const menuItems = document.querySelectorAll('.menu-item');

         function toggleMenu() {
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            if (menuOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }


        menuToggle.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);

  
        menuItems.forEach(item => {
            item.addEventListener('click', toggleMenu);
        });

 
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                toggleMenu();
            }
        });

  
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });


    window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navSection');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

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

// custom pop-up modal

window.addEventListener("load", function(){

  if(!localStorage.getItem("modalShown")){
     setTimeout(() => {
        document.getElementById("customModal").style.display = "flex";

        localStorage.setItem("modalShown", "true");
      }, 5000);
  }

document.getElementById("closeBtn").addEventListener("click", function(){
  document.getElementById("customModal").style.display="none";
});
});

  
    






