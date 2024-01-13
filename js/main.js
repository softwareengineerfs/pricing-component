/*GETTING ELEMENTS*/
const elToggleAnnually = document.querySelector(".toggle-anually");
const elToggleMonthly = document.querySelector(".toggle-monthly");

// GETTING CLASSES
const elToggleMasksPriceBasic = document.querySelector(" .masks-price-basic");
const elToggleMasksPriceProfessional = document.querySelector(" .masks-price-professional");
const elToggleMasksPriceMaster = document.querySelector(" .masks-price-master");

// CHANGING VALUES FOR ANNUALLY
elToggleAnnually.addEventListener("click", function (){
  elToggleMasksPriceBasic.textContent = "199.99";
});

elToggleAnnually.addEventListener("click", function (){
  elToggleMasksPriceProfessional.textContent = "249.99";
});

elToggleAnnually.addEventListener("click", function (){
  elToggleMasksPriceMaster.textContent = "399.99";
});


// CHANGING VALUES FOR MONTHLY
elToggleMonthly.addEventListener("click", function (){
  elToggleMasksPriceBasic.textContent = "19.99";
});

elToggleMonthly.addEventListener("click", function (){
  elToggleMasksPriceProfessional.textContent = "24.99";
});

elToggleMonthly.addEventListener("click", function (){
  elToggleMasksPriceMaster.textContent = "39.99";
});