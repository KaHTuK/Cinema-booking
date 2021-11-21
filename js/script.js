$(function () {
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 0,
      showinfo: 0,
    },
  });
});

$(function () {
  $(".menu-btn").on("click", function () {
    $(".header_navbar-list").toggleClass("active");
  });
});

const schemeSvg = document.querySelector(".scheme_svg");
const totalPriceTag = document.querySelector(".price_total");
let cost = 400;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});
