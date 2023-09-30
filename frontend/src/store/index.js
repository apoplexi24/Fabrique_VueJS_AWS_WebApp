import { createStore } from "vuex";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    women: [
      {
        title: "Black Snake Dress",
        src: require("@/assets/img/women/1.jpeg"),
        price: 1849.99,
        description:
          "The black snake dress, from the luxury brand Gucci, is a stunning addition to any wardrobe. Made with high-quality materials and featuring a striking snake motif, it's the perfect statement piece for any fashion-forward individual.b Shop now on Fabrique.",
        type: "Top",
        color: "Black",
        brand: "Gucci",
        gender: "women",
        id: 1,
      },

      {
        title: "Tattered Silk Coat",
        src: require("@/assets/img/women/2.jpeg"),
        price: 1379.99,
        description:
          "Introducing the Maison Margiela Tattered Silk Coat for women in a beautiful shade of grey. This statement piece features unique distressed detailing, providing a chic and edgy touch to any outfit.",
        type: "Top",
        color: "Grey",
        brand: "Maison Margiela",
        gender: "women",
        id: 2,
      },
      {
        title: "Royal Gold Gown",
        src: require("@/assets/img/women/3.jpeg"),
        price: 859.99,
        description:
          "Make a grand entrance with the Royal Gold Gown by Luisa Beccaria. This stunning blue gown features a regal gold design and is perfect for formal events. Made for women who want to feel like royalty.",
        type: "Top",
        color: "Blue",
        brand: "Luisa Beccaria",
        gender: "women",
        id: 3,
      },
      {
        title: "Fine Ripped Shirt",
        src: require("@/assets/img/women/4.jpeg"),
        price: 1319.99,
        description:
          "The Fine Ripped Shirt by Maison Margiela is a stylish black shirt with subtle distressing for a edgy touch. It's designed for women who want a unique and modern look.",
        type: "Top",
        color: "Black",
        brand: "Maison Margiela",
        gender: "women",
        id: 4,
      },
      {
        title: "Renaissance Dress",
        src: require("@/assets/img/women/5.jpeg"),
        price: 2899.99,
        description:
          "The Simone Rocha Renaissance Dress for women is a stunning piece that features a beautiful white color, perfect for formal occasions. Made from high-quality materials, this dress is designed to provide a comfortable and stylish fit. With its intricate design and attention to detail, it is sure to make a statement at any event.",
        type: "Top",
        color: "White",
        brand: "Simone Rocha",
        gender: "women",
        id: 5,
      },
      {
        title: "Black Buttoned Overcoat",
        src: require("@/assets/img/women/6.jpeg"),
        price: 659.99,
        description:
          "The Black Buttoned Overcoat by Yohji Yamamoto is a sleek and sophisticated outerwear piece for women. With its classic black color and buttoned design, it is both stylish and functional for any occasion.",
        type: "Top",
        color: "Black",
        brand: "Yohji Yamamoto",
        gender: "women",
        id: 6,
      },
      {
        title: "Black Layered Top",
        src: require("@/assets/img/women/7.jpeg"),
        price: 779.99,
        description:
          "The Anne Sofie Madsen Black Layered Top for women is a stylish and versatile piece, perfect for any occasion. The top features a layered design and is made from high-quality materials, ensuring both comfort and durability. The black color gives it a sleek and sophisticated look, making it a must-have for any fashion-forward wardrobe.",
        type: "Top",
        color: "Black",
        brand: "Anne Sofie Madsen",
        gender: "women",
        id: 7,
      },
      {
        title: "White Bracelet Sneakers",
        src: require("@/assets/img/women/8.jpeg"),
        price: 579.99,
        description:
          " The White Bracelet Sneakers by Comme De Garcons are a stylish and comfortable choice for women. With their crisp white color and unique bracelet design, they are a versatile and fashionable addition to any wardrobe. Perfect for a casual or sporty look.",
        type: "Shoes",
        color: "White",
        brand: "Comme De Garcons",
        gender: "women",
        id: 8,
      },
      {
        title: "Gold and Black Heels",
        src: require("@/assets/img/women/9.jpeg"),
        price: 739.99,
        description:
          " The Gold and Black Heels from Dolce & Gabbana are the perfect choice for adding a touch of luxury to any outfit. Featuring a stunning gold and black color combination and a classic heel design, these shoes are sure to turn heads.",
        type: "Shoes",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 9,
      },

      {
        title: "Gold and Pink Floral Heels",
        src: require("@/assets/img/women/10.jpeg"),
        price: 1239.99,
        description:
          " The Gold and Pink Floral Heels by Dolce & Gabbana are the perfect statement shoes for women. With a stunning gold and pink floral design, these heels are sure to add a touch of glamour to any outfit.",
        type: "Shoes",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 10,
      },
      {
        title: "Stitched Mouse Top",
        src: require("@/assets/img/women/11.jpeg"),
        price: 669.99,
        description:
          " The Dolce & Gabbana Stitched Mouse Top for women is a stylish and unique white top featuring a cute mouse design on the front, perfect for adding a touch of whimsy to any outfit.",
        type: "Top",
        color: "White",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 11,
      },
      {
        title: "Black Emblem Bag",
        src: require("@/assets/img/women/12.jpeg"),
        price: 279.99,
        description:
          " The Black Emblem Bag by Jean Paul Gaultier is a stylish and chic accessory for women. With its black color and unique emblem design, it is perfect for adding a touch of sophistication to any outfit.",
        type: "Accessories",
        color: "Black",
        brand: "Jean Paul Gaultier",
        gender: "women",
        id: 12,
      },
      {
        title: "Glitter Skull Bag",
        src: require("@/assets/img/women/13.jpeg"),
        price: 339.99,
        description:
          " The Glitter Skull Bag by Manish Arora is a unique and stylish accessory for women. Featuring a vibrant blue color and adorned with shimmering glitter and a bold skull design, this bag is perfect for adding a touch of edgy glam to any outfit.",
        type: "Accessories",
        color: "Blue",
        brand: "Manish Arora",
        gender: "women",
        id: 13,
      },
      {
        title: "Portrait Bag",
        src: require("@/assets/img/women/14.jpeg"),
        price: 489.99,
        description:
          " The Portrait Bag by Moschino is a luxurious gold accessory for women. Featuring a unique portrait-inspired design, it is perfect for adding a touch of glamour to any outfit.",
        type: "Accessories",
        color: "Gold",
        brand: "Moschino",
        gender: "women",
        id: 14,
      },
      {
        title: "Gold Bow Heels",
        src: require("@/assets/img/women/15.jpeg"),
        price: 1239.99,
        description:
          " These elegant Gold Bow Heels by Versace are the perfect addition to any formal attire. The metallic gold color adds a touch of glamour, while the delicate bow detail on the front adds a feminine touch to these timeless shoes.",
        type: "Shoes",
        color: "Gold",
        brand: "Versace",
        gender: "women",
        id: 15,
      },
      {
        title: "Black Lace Dress",
        src: require("@/assets/img/women/16.jpeg"),
        price: 2579.99,
        description:
          " A black lace dress from Valentino, perfect for formal occasions. The elegant dress features intricate lace detailing and a classic black color, making it a timeless addition to any wardrobe.",
        type: "Top",
        color: "Black",
        brand: "Valentino",
        gender: "women",
        id: 16,
      },
      {
        title: "Aged Snake Bag",
        src: require("@/assets/img/women/17.jpeg"),
        price: 899.99,
        description:
          " This luxurious gold bag from Valentino features a unique aged snake texture that adds a touch of exotic elegance. The versatile design and spacious interior make it perfect for both casual and formal occasions.",
        type: "Accessories",
        color: "Gold",
        brand: "Valentino",
        gender: "women",
        id: 17,
      },
      {
        title: "Transparent Stitched Dress",
        src: require("@/assets/img/women/18.jpeg"),
        price: 1529.99,
        description:
          " The Transparent Stitched Dress is a see-through top designed by Valentino for women. The dress features intricate stitching details and is meant to be worn with a slip or undergarment. The dress has a modern and unique style that is perfect for a fashion-forward look.",
        type: "Top",
        color: "Gold",
        brand: "Valentino",
        gender: "women",
        id: 18,
      },
    ],
    men: [
      {
        title: "Butterfly Suit",
        src: require("@/assets/img/men/1.jpeg"),
        price: 979.99,
        description:
          " A striking and bold black butterfly suit by Alexander McQueen, perfect for making a statement at any formal event. The suit is impeccably tailored with exquisite attention to detail, and features a unique butterfly design that adds a touch of whimsy to the classic black suit.",
        type: "Top",
        color: "Black",
        brand: "Alexander McQueen",
        gender: "men",
        id: 19,
      },
      {
        title: "Balenciaga Boots",
        src: require("@/assets/img/men/2.jpeg"),
        price: 779.99,
        description:
          " The Balenciaga Boots for men are a sleek and stylish addition to any wardrobe. These black boots are made with high-quality materials and feature a durable sole for comfortable and long-lasting wear. Perfect for both casual and formal occasions, they're a must-have for any fashion-forward man.",
        type: "Shoes",
        color: "Black",
        brand: "Balenciaga",
        gender: "men",
        id: 20,
      },
      {
        title: "Burberry Jacket",
        src: require("@/assets/img/men/3.jpeg"),
        price: 779.99,
        description:
          " The Burberry Jacket for men is a stylish and versatile piece, featuring a classic brown color that complements any outfit. Made from high-quality materials, this jacket is durable and perfect for layering. The iconic Burberry pattern lining adds a touch of sophistication to the overall design.",
        type: "Top",
        color: "Brown",
        brand: "Burberry",
        gender: "men",
        id: 21,
      },
      {
        title: "Gold Leaf Jacket",
        src: require("@/assets/img/men/4.jpeg"),
        price: 3779.99,
        description:
          " Make a bold statement in this eye-catching Gold Leaf Jacket from Dolce & Gabbana. Crafted with intricate details, this gold-toned jacket features a unique leaf pattern, adding a touch of luxury to any outfit. Perfect for formal occasions or dressing up a casual look, this jacket is sure to turn heads.",
        type: "Top",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "men",
        id: 22,
      },
      {
        title: "Snake Coat",
        src: require("@/assets/img/men/5.jpeg"),
        price: 3779.99,
        description:
          " The Dries Van Noten Snake Coat for men is a striking piece with its blue color and textured snake print pattern. It is designed with a relaxed fit, a classic collar, and button front closure. The coat is made of high-quality materials and is perfect for adding a touch of edginess to any outfit.",
        type: "Top",
        color: "Blue",
        brand: "Dries Van Noten",
        gender: "men",
        id: 23,
      },
      {
        title: "Bee Pin",
        src: require("@/assets/img/men/6.jpeg"),
        price: 279.99,
        description:
          " The Gucci Bee Pin is a gold-toned accessory featuring the iconic bee motif of the brand. The intricately designed pin is a perfect embellishment to add a touch of sophistication to any outfit.",
        type: "Accessories",
        color: "Gold",
        brand: "Gucci",
        gender: "men",
        id: 24,
      },
      {
        title: "React Shoes",
        src: require("@/assets/img/men/7.jpeg"),
        price: 349.99,
        description:
          " The Nike React Shoes for men are a stylish and comfortable choice for any active lifestyle. The vibrant red color adds a bold touch to any outfit, while the React technology provides superior cushioning and support. These shoes are perfect for running, training, or casual wear.",
        type: "Shoes",
        color: "Red",
        brand: "Nike",
        gender: "men",
        id: 25,
      },
      {
        title: "Brown OverCoat",
        src: require("@/assets/img/men/8.jpeg"),
        price: 234.99,
        description:
          " A classic brown overcoat for men, perfect for colder weather. Made with high-quality materials, it features a buttoned front, wide lapels, and side pockets. The neutral brown color makes it a versatile piece that can be dressed up or down.",
        type: "Top",
        color: "Brown",
        brand: "Nordstorm",
        gender: "men",
        id: 26,
      },
      {
        title: "Archive Redux",
        src: require("@/assets/img/men/9.jpeg"),
        price: 93.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Brown",
        brand: "Raf Simons",
        gender: "men",
        id: 27,
      },
      {
        title: "Red Girl Shirt",
        src: require("@/assets/img/men/10.jpeg"),
        price: 1349.99,
        description:
          " This stylish brown jacket by Raf Simons is the perfect addition to any fashion-forward man's wardrobe. Made from high-quality materials, this jacket features a sleek design with a brown color that will pair well with any outfit. The jacket is perfect for both casual and formal occasions and is sure to become a staple in your wardrobe.",
        type: "Top",
        color: "Red",
        brand: "Raf Simons",
        gender: "men",
        id: 28,
      },
      {
        title: "RS Pink Jacket",
        src: require("@/assets/img/men/11.jpeg"),
        price: 1149.99,
        description:
          " This bold RS Pink Jacket by Raf Simons features a vibrant red color and a sleek, modern design. Made with high-quality materials, this top-quality jacket is both stylish and comfortable. It has a unique design with a striking silhouette that is perfect for making a statement. Whether dressed up or down, this jacket is a must-have for any fashion-forward wardrobe.",
        type: "Top",
        color: "Red",
        brand: "Raf Simons",
        gender: "men",
        id: 29,
      },
      {
        title: "Playing Card Pants",
        src: require("@/assets/img/men/12.jpeg"),
        price: 949.99,
        description:
          " The Playing Card Pants from Undercover are a stylish and unique addition to any wardrobe. Featuring a black color and a playful card-inspired design, these pants are perfect for making a statement. The bottom type is a pant and the brand is Undercover.",
        type: "Bottom",
        color: "Black",
        brand: "Undercover",
        gender: "men",
        id: 30,
      },
      {
        title: "Castle Backpack",
        src: require("@/assets/img/men/13.jpeg"),
        price: 699.99,
        description:
          " The Castle Backpack by Undercover is a stylish and practical accessory for men. Its sleek grey color and unique design featuring a castle graphic make it stand out from other backpacks. Perfect for carrying everyday essentials with ease and in style.",
        type: "Accessories",
        color: "Grey",
        brand: "Undercover",
        gender: "men",
        id: 31,
      },
      {
        title: "Black Portrait Jacket",
        src: require("@/assets/img/men/14.jpeg"),
        price: 1299.99,
        description:
          " The black portrait jacket by Undercover for men is a stylish and edgy piece with a unique design. The jacket is made from high-quality materials and features a black base color with a portrait print on the front and back, adding a bold statement to any outfit. It is a versatile piece that can be dressed up or down, making it a great addition to any wardrobe.",
        type: "Top",
        color: "Black",
        brand: "Undercover",
        gender: "men",
        id: 32,
      },
      {
        title: "Red Portrait Girl",
        src: require("@/assets/img/men/15.jpeg"),
        price: 699.99,
        description:
          " The Yohji Yamamoto red overcoat is a statement piece that exudes sophistication and luxury. The bold red color adds a pop of vibrancy to any outfit, while the structured silhouette creates a powerful and confident look. The high-quality materials used in its construction ensure durability and comfort. The coat's minimalist design is accented with subtle details, such as the textured fabric and unique collar, adding depth and complexity to its overall aesthetic. It is a perfect addition to any modern man's wardrobe looking to make a bold fashion statement.",
        type: "Top",
        color: "Red",
        brand: "Yohji Yamamoto",
        gender: "men",
        id: 33,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 5,
    shipping: 15,

    //auth state
    token: false,
    user: {},
    status: '',
    error: null
  },
  getters: {
    allProducts: (state) => state.women.concat(state.men),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },

    //auth getters
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.women
          .concat(state.men)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },

    //auth mutations
    auth_login(state){
      state.token = true;
    },
    auth_logout(state){
      state.token = false;
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
    // Login Action
    authLogin({ commit }) {
      commit("auth_login");
    },
    authLogout({commit}) {
      commit("auth_logout");
    }
  },
  modules: {},
});
