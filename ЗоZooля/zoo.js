document.addEventListener("DOMContentLoaded", function() {
var buttonContainer = document.querySelector(".cart-lines-botton-block");
buttonContainer.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "BUTTON") {
      // Удаляем активный класс у всех кнопок
      var buttons = buttonContainer.querySelectorAll(".cart-lines-botton");
      buttons.forEach(function(button) {
        button.classList.remove("active");
      });
      
      // Добавляем активный класс только нажатой кнопке
      ev.target.classList.add("active");
    }
  },
  false
);
});


document.addEventListener('DOMContentLoaded', function(){   
    window.addEventListener('scroll', function () {
        if (this.scrollY > 600) {
            document.getElementById('toUp').style.opacity = '1';
        } else {
            document.getElementById('toUp').style.opacity = '0';
        }
    });
 
    document.getElementById('toUp').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return false;
    });
});