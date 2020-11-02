let popup = document.getElementById("Contact-popup");
let contactFooter = document.getElementById("Contact-popup-footer");
let purchaseComplete = document.getElementById("purchase__completed--btn");

popup.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "block";
});

contactFooter.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "block";
});

purchaseComplete.addEventListener("click", () => {
  document.getElementById("purchase__complete").style.display = "block";
});

let close = document.getElementById("close");

let contactSubmit = document.getElementById("contact-submit");

let closePurchase = document.getElementById("close__purchase--popup");

close.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "none";
});

contactSubmit.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "none";
});

closePurchase.addEventListener("click", () => {
  document.getElementById("purchase__complete").style.display = "none";
});
