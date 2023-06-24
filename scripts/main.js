// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});


// Remove focus from the clicked button

  let buttons = document.querySelectorAll('.btn');

  buttons.forEach(function(button){
    button.addEventListener('click', function() {
      this.blur(); // Remove focus from the clicked button
    });
  });

  
// Add your javascript here
