function showPromoCodeForm() {
  var promoCodeForm = document.querySelector(".promo-code-form");
  promoCodeForm.style.display = "block";
}

function hideCouponCodeButton() {
  var couponCodeButton = document.querySelector(".couponCodeFormShow");
  couponCodeButton.style.display = "none";
}


function handleCouponCodeClick() {
  showPromoCodeForm();
  hideCouponCodeButton();
}


var promoCodeForm = document.querySelector(".promo-code-form");
promoCodeForm.style.display = "none";


var couponCodeButton = document.querySelector(".couponCodeFormShow");
couponCodeButton.addEventListener("click", handleCouponCodeClick);
