const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/air jordan green2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  
  
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //changer le slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change le sneakers choisi 
    choosenProduct = products[index];

    //change texts of currentProduct // manneha yekhoo nafs el content juste yekho e soum eli hatito f awel el Js
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent =  choosenProduct.price + "DT";
    currentProductImg.src = choosenProduct.colors[0].img;

    //change colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => { // tbadel el louun mta sbadriyet el mawjouda
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.payment');
  const submitButton = form.querySelector('.payButton');

  submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      const inputs = form.querySelectorAll('.payInput');

      let isFormValid = true;

      inputs.forEach(function(input) {
          if (input.value.trim() === '' && input.hasAttribute('required')) {
              isFormValid = false;
              input.classList.add('error');
          } else {
              input.classList.remove('error');
          }
      });

      if (isFormValid) {
          // Si le formulaire est valide, vous pouvez soumettre les données ici
          alert("Formulaire soumis avec succès ");
      } else {
          const errorMessage = document.createElement('p');
        alert ( 'Veuillez remplir tous les champs obligatoires.');

          const existingErrorMessage = form.querySelector('.error-message');
          if (!existingErrorMessage) {
              form.insertBefore(errorMessage, submitButton);
          }
      }
  });

});