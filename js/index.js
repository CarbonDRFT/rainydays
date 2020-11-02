let popup = document.getElementById("Contact-popup");
let contactFooter = document.getElementById("Contact-popup-footer");
let popupup = document.getElementById("Policy");

popup.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "block";
});

contactFooter.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "block";
});

let close = document.getElementById("close");

let contactSubmit = document.getElementById("contact-submit");

close.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "none";
});

contactSubmit.addEventListener("click", () => {
  document.getElementById("contact_popup_page").style.display = "none";
});
