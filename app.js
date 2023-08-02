const foodImage = document.querySelector("#food-image");
// console.log(foodImage);

const images = [
  "./Images/poisson.jpg",
  "./Images/Pates.jpg",
  "./Images/parmesan.jpg",
  "./Images/lasagnes.jpg",
];

setInterval(() => {
  const random = getRandomInt(images.length);
  foodImage.src = images[random];
}, 4000);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Data to display

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// locating the elements we're going to use
const allMenu = document.querySelector(".menu");
// console.log(allMenu);
const toAddButtons = document.querySelector(".buttons");
// console.log(toAddButtons);

// when the page is loaded
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  displayBtns(menu);
});

// function used to display
const displayMenu = (arrayMenu) => {
  let display = arrayMenu.map((elem) => {
    return `            <div class="elem-menu1">
    <div class="elem-img">
        <img class="img" src=${elem.img} alt="" width="100px" height="100px">
    </div>
    <div class="name-price-desc">
        <div class="name-price">
            <div class="elem-name">${elem.title}</div>
            <div class="elem-price">$${elem.price}</div>
        </div>
        <div class="elem-description">${elem.desc}</div>
    </div>
</div>`;
  });
  display = display.join("");
  allMenu.innerHTML = display;
};

const displayBtns = (arrayMenu) => {
  // iterates through each element of the arrayMenu array and accumulates the unique categories in the accum variable, which is initialized with ["all"]
  const getCategor = arrayMenu.reduce(
    (accum, item) => {
       if (!accum.includes(item.category)) {
         accum.push(item.category);
       }
      return accum;
    },
    ["all"]
  );
  console.log(getCategor);

  let addbtns = getCategor
    .map((elem) => {
      const capitalizedElem = elem.charAt(0).toUpperCase() + elem.slice(1);
      return `<button class="${elem} btns" data-set="${elem}">${capitalizedElem}</button>`;
    });

    addbtns =  addbtns.join("");

  // console.log(addbtns);

  toAddButtons.innerHTML = addbtns;

  const buttons = document.querySelectorAll(".btns");
  // console.log(buttons);

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const categ = e.currentTarget.dataset.set; // button with data-set used to filter

      const menuCateg = menu.filter((elem) => {
        if (elem.category === categ) {
          return elem;
        }
      });

      if (categ === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCateg);
      }
    });
  });
};
