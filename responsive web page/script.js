  function showMessage() {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  }

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  