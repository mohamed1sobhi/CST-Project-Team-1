$(document).ready(function () {
  // Offer text animation
  var offerTexts = [
    "Limited Time Offer",
    "Get 20% Off Today",
    "Shop Now and Save Big",
    "Exclusive Deal for You",
    "Hurry, Offer Ends Soon",
  ];
  var currentTextIndex = 0;
  var speed = 50;
  function typeWriter(elementId, text, index) {
    if (index < text.length) {
      $(elementId).append(text.charAt(index));
      index++;
      setTimeout(function () {
        typeWriter(elementId, text, index);
      }, speed);
    } else {
      setTimeout(function () {
        $(elementId).text("");
        currentTextIndex = (currentTextIndex + 1) % offerTexts.length;
        typeWriter(elementId, offerTexts[currentTextIndex], 0);
      }, 1500);
    }
  }
  typeWriter("#offerText", offerTexts[currentTextIndex], 0);
  // End of Offer text animation

  // Product slider functions
  const sliderContainer = $(".slider-container");
  const productCardWidth = $(".product-card").outerWidth(true);
  let scrollPosition = 0;
  $(".arrow-right").click(function () {
    if (scrollPosition > -(sliderContainer.width() - productCardWidth * 3)) {
      scrollPosition -= productCardWidth;
      sliderContainer.css("transform", `translateX(${scrollPosition}px)`);
    }
  });
  $(".arrow-left").click(function () {
    if (scrollPosition < 0) {
      scrollPosition += productCardWidth;
      sliderContainer.css("transform", `translateX(${scrollPosition}px)`);
    }
  });
  // End of Product slider functions
}); //End of load
