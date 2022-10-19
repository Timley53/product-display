"strict mode";

////////////product object
const menuBar = document.querySelector(".menu");
const closeMobileNav = document.querySelector(".close-mobile-nav");
const navCart = document.querySelector(".nav-cart");
const btnRIght = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const append__ = document.querySelector(".append");
let removeCart = document.querySelectorAll(".x");
const cartLists = document.querySelector(".cart-lists");
const overlay = document.querySelector(".overlay");
const product_details = document.querySelector(".product-details");
const product__name = document.querySelector(".product--name");
const cart_list_btn = document.querySelector(".cart-list-btn");
const cart_success = document.querySelector(".cart-success");

const product__description = document.querySelector(".product-description");

const price = document.querySelector(".price");
const buy_now = document.querySelector(".buy-now");
const thank_you = document.querySelector(".thank-you");
const completedBTN = document.querySelector(".completed");
const closeModal = document.querySelector(".closeModal");
const clear_cart = document.querySelector(".clear-cart");
const slide = document.querySelectorAll(".slide");
const addCart = document.querySelectorAll(".addCart");
const MoreDetails = document.querySelectorAll(".More-details");

//////////cart
let cart_List = [];

//////////////fxn
const cancel_orderFxn = function () {
  removeCart = document.querySelectorAll(".x");
  removeCart?.forEach((x) => {
    x.addEventListener("click", function (e) {
      let pr = e.target.closest(".x").getAttribute("data-Xname");
      console.log(pr);
      x.closest(".p-list").classList.add("none");
      const index_of = cart_List.findIndex((el) => {
        return pr === el.productData;
      });
      console.log(index_of);

      console.log(cart_List);
      cart_List.splice(index_of, 1);
      console.log(cart_List);
    });
  });

  //
};

////////////
cartLists.textContent = "";
/////// menus
menuBar.addEventListener("click", function () {
  navCart.classList.toggle("mobile-nav");
  navCart.classList.toggle("translate");
});
closeMobileNav.addEventListener("click", function () {
  navCart.classList.toggle("mobile-nav");
  navCart.classList.toggle("translate");
});
///////////

///////slide
slide.forEach((sl, i) => {
  sl.style.transform = `translateX(${i}00%)`;
  // sl.style.marginLeft = `${i}rem`;
});

//////
let nextz = 0;
// next and prev btn
const Sliding = function () {
  slide.forEach((sl, i) => {
    sl.style.transition = "all 1s";
    sl.style.transform = `translateX(${i - nextz}00%)`;
  });
};

btnRIght.addEventListener("click", function () {
  if (nextz < slide.length - 1) {
    nextz++;
  } else {
    nextz = 0;
  }
  console.log(nextz);

  Sliding();
});

btnLeft.addEventListener("click", function () {
  if (nextz > 0) {
    nextz--;
  } else {
    nextz = 0;
  }
  Sliding();
});
/////////////////
//////////

//////////////// procduct object

const product__1 = {
  productData: "product__1",
  productname: "Nike Air max 350",
  productDescription:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facilis ipsum voluptatem illum facere ad quos, sequi accusantium. Expedita explicabo natus debitis exercitationem omnis eveniet voluptate, doloremque at ipsa cupiditate.",
  price: 139.99,
};
const product__2 = {
  productData: "product__2",
  productname: "Beats by Dre Headset",
  productDescription:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facilis ipsum voluptatem illum facere ad quos, sequi accusantium. Expedita explicabo natus debitis exercitationem omnis eveniet voluptate, doloremque at ipsa cupiditate.",
  price: 399.99,
};
const product__3 = {
  productData: "product__3",
  productname: "Sony Noise Cancelling Headphones",
  productDescription:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facilis ipsum voluptatem illum facere ad quos, sequi accusantium. Expedita explicabo natus debitis exercitationem omnis eveniet voluptate, doloremque at ipsa cupiditate.",
  price: 159.99,
};

const product__4 = {
  productData: "product__4",
  productname: "CHCH Camera Natural lenses and focus",
  productDescription:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facilis ipsum voluptatem illum facere ad quos, sequi accusantium. Expedita explicabo natus debitis exercitationem omnis eveniet voluptate, doloremque at ipsa cupiditate.",
  price: 339.99,
};

const product__5 = {
  productData: "product__5",
  productname: "Sport trainers running shoes",
  productDescription:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facilis ipsum voluptatem illum facere ad quos, sequi accusantium. Expedita explicabo natus debitis exercitationem omnis eveniet voluptate, doloremque at ipsa cupiditate.",
  price: 89.99,
};

const product__6 = {
  productData: "product__6",
  productname: "Diesel Low-top Leather and Suade Mens Shoes",
  productDescription:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facilis ipsum voluptatem illum facere ad quos, sequi accusantium. Expedita explicabo natus debitis exercitationem omnis eveniet voluptate, doloremque at ipsa cupiditate.",
  price: 149.99,
};
const product__7 = {
  productData: "product__7",
  productname: "Guerella Hiking shoes",
  productDescription:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita facilis ipsum voluptatem illum facere ad quos, sequi accusantium. Expedita explicabo natus debitis exercitationem omnis eveniet voluptate, doloremque at ipsa cupiditate.",
  price: 79.99,
};

const products = [
  product__1,
  product__2,
  product__3,
  product__4,
  product__5,
  product__6,
  product__7,
];

////////////////
///////////////////////////////

//////////////////
addCart.forEach((addCartBtn, i) => {
  addCartBtn.addEventListener("click", function (e) {
    const productObj = products.find((obj) => {
      if (
        obj.productData == e.target.closest(".slide").getAttribute("data-name")
      ) {
        return obj;
      }
    });

    ///////////
    console.log(productObj);

    let some = cart_List.some((el) => {
      return (
        el.productData == e.target.closest(".slide").getAttribute("data-name")
      );
    });
    if (some) {
      return;
    } else {
      cart_List.push(productObj);
      const cart__p = document.createElement("div");
      cart__p.classList.add("p-list");
      cart__p.classList.add(`${productObj?.productData}`);

      cart__p.innerHTML = `<span class="p-name">${productObj.productname}</span><button class="x" data-Xname = '${productObj?.productData}'><i class="fa-solid fa-xmark"></i></button>`;
      cartLists.append(cart__p);

      cart_success.classList.remove("none");

      setTimeout(() => {
        cart_success.classList.add("none");
      }, 2000);
    }
    /////////////
    // const cart__p = document.createElement("div");
    // cart__p.classList.add("p-list");
    // cart__p.classList.add(`${productObj?.productData}`);

    // cart__p.innerHTML = `<span class="p-name">${productObj.productname}</span><button class="x" data-Xname = '${productObj?.productData}'><i class="fa-solid fa-xmark"></i></button>`;
    // cartLists.append(cart__p);

    ////////////////

    ////////////////

    console.log(cart_List);
    cancel_orderFxn();
    //////////

    ///
  });
});

clear_cart.addEventListener("click", function () {
  cart_List.splice(0);
  console.log(cart_List);
  cartLists.textContent = "";
});
//////////

////////////
///////////
MoreDetails.forEach((el) => {
  el.addEventListener("click", function (e) {
    const product_obj = products.find((obj) => {
      if (
        obj.productData == e.target.closest(".slide").getAttribute("data-name")
      ) {
        return obj;
      }
    });
    //////////
    console.log(product_obj);
    overlay.classList.remove("none");
    product__name.textContent = `${product_obj.productname}`;
    product__description.textContent = `${product_obj.productDescription}`;
    price.textContent = `$${product_obj.price}`;
  });
});

////////
closeModal.addEventListener("click", function () {
  overlay.classList.add("none");
});
buy_now.addEventListener("click", function () {
  product_details.classList.add("none");
  thank_you.classList.toggle("none");
});

completedBTN.addEventListener("click", function () {
  product_details.classList.remove("none");

  thank_you.classList.add("none");

  overlay.classList.add("none");
});
//////
//////////////
cart_list_btn.addEventListener("click", function () {
  cartLists.style.opacity = "1";
});

/////////
////
// removeCart = document.querySelector(".x");
// removeCart.forEach((x) => {
//   x.addEventListener("click", function () {
//     console.log("tttt");
//     cart__p.remove();
//   });
// });
// const cart__p = document.createElement("div");

/////creating cart list alt
// const html = ` <div class="p-list" data-cart = '${productObj.productData}'>
// <span class="p-name"
//   >${productObj.productname}
//  </span
// >
// <button class="x"><i class="fa-solid fa-xmark"></i></button>
//         </div>`;
// /////insert html
// cartLists.insertAdjacentHTML("afterbegin", html);
