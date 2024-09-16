
(function () {

      const link = document.querySelectorAll('.hover');
      const cursorHtml = document.createElement("span");
      cursorHtml.classList = "cursor";
      const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
                  { offsetWidth: width, offsetHeight: height } = this,

                  move = 25,
                  xMove = x / width * (move * 2) - move,
                  yMove = y / height * (move * 2) - move;

            // span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            // if (e.type === 'mouseleave') span.style.transform = '';
      };

      const appendSpan = function (e) {
            this.append(cursorHtml)
      }
      const removeSpan = function (e) {
            this.removeChild(cursorHtml)
      }

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursorHtml.style.left = x + 'px';
            cursorHtml.style.top = y + 'px';
      };

      if(window.innerWidth > 991){
      link.forEach(b => b.addEventListener('mouseenter', appendSpan));
      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit, removeSpan));
            window.addEventListener('mousemove', editCursor);
      }

})();
$(document).ready(function () {
      setTimeout(() => {
            $('body').addClass("remove-loading")
      }, 2000);
      setTimeout(() => {
            $('body').removeClass("loading remove-loading")
      }, 3000);
      $(".nav_toggle").click(function () {
            $('body').addClass("show_nav");
      })
      $(".close_nav, .main_navigation ul li a").click(function () {
            $('body').removeClass("show_nav");
      })
})

$(".work_filters button").click(function (e) {
      $(".work_slider .item").removeClass("show")
      if (e.target.value === 'all') {
            $(".work_slider .item").addClass("show")
      } else {
            $(".work_slider .item").each(function (_val, key) {
                  if (key.dataset.type === e.target.value) {
                        $(this).addClass("show")
                  }
            })
      }
})

$(function () {
      $(document).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                  $("body").addClass("fixed");
            } else {
                  $("body").removeClass("fixed");
            }
      });
});

