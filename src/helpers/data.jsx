import { BsBoxSeam, BsCreditCard, BsCart3 } from "react-icons/bs";
import leolin from "../assets/leo_lin_dress.avif";
import leolin2 from "../assets/leo_lin_dress_2.webp";
import zimmermantop from "../assets/zimmerman_top.avif";
import zimmermantop2 from "../assets/zimmerman_top_2.avif";
import zimmermannmidi from "../assets/zimmermann_midi.avif";
import zimmermannmidi2 from "../assets/zimmermann_midi_2.webp";
import floralmidi from "../assets/floral_midi.avif";
import floralmidi2 from "../assets/floral_midi_2.avif";
import silkblouse from "../assets/silk_blouse.avif";
import silkblouse2 from "../assets/silk_blouse_2.avif";
import gauzetop from "../assets/gauze_top.avif";
import gauzeto2 from "../assets/gauze_top_2.avif";
import canvasshorts from "../assets/canvas_shorts.avif";
import canvasshorts2 from "../assets/canvas_shorts_2.avif";
import cottontop from "../assets/cotton_top.avif";
import cottontop2 from "../assets/cotton_top_2.avif";
import belt from "../assets/belt.avif";
import belt2 from "../assets/belt_2.avif";
import earings from "../assets/earings.avif";
import earings2 from "../assets/earings_2.avif";
import silkgown from "../assets/silkgown.avif";
import silkgown2 from "../assets/silkgown_2.avif";
import slbag from "../assets/slbag.avif";
import slbag2 from "../assets/slbag_2.avif";
import sandal from "../assets/sandal.avif";
import sandal2 from "../assets/sandal_2.avif";
import mididress from "../assets/mididress.avif";
import mididress2 from "../assets/mididress_2.avif";
import exclusive2 from "../assets/exclusive2.avif";
import exclusive3 from "../assets/exclusive3.avif";
import exclusive from "../assets/exclusive.avif";
import loewecharm from "../assets/loewe-charm-1.avif";
import loewecharm2 from "../assets/loewe-charm-2.avif";
import gianvitoshoe from "../assets/gianvito-shoe-1.avif";
import gianvitoshoe2 from "../assets/gianvito-shoe-2.avif";
import magdashoe from "../assets/magda-shoe-1.avif";
import magdashoe2 from "../assets/magda-shoe-2.avif";
import loewebag from "../assets/loewe-bag-1.avif";
import loewebag2 from "../assets/loewe-bag-2.avif";
import staudbag from "../assets/staud-bag-1.avif";
import staudbag2 from "../assets/staud-bag-2.avif";
import todsbag from "../assets/tods-bag-1.avif";
import todsbag2 from "../assets/tods-bag-2.avif";

export const menu = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/products" },
  { title: "Contact", path: "/contact" },
  { title: "About", path: "/about" },
  { title: "Track Your Order", path: "/track" },
];
export const products = [
  {
    id: 1,
    brand: "ZIMMERMANN",
    name: "Midi Dress",
    price: 885,
    category: "dress",
    image1: floralmidi,
    image2: floralmidi2,
    details: [
      " Material: 100% linen",
      "Care instructions: dry clean",
      "Made in China",
      "Designer color name: White Hydrangea",
      "Item color: white",
    ],
  },
  {
    id: 2,
    brand: "LA DOUBLEJ",
    name: "Cotton Top",
    price: 415,
    category: "top",
    image1: cottontop,
    image2: cottontop2,
    details: [
      "Material: 98% cotton, 2% elastane",
      "Care instructions: dry clean",
      "Made in Italy",
      "Designer color name: Mini Palazzo",
      "Item color: multicolor",
    ],
  },
  {
    id: 3,
    brand: "STAUD",
    name: "FLORAL BEADED BAG",
    price: 290,
    category: "bags",
    image1: staudbag,
    image2: staudbag2,
    details: [
      "Material: fabric",
      "Lining: fabric",
      "Made in India",
      "Designer color name: WIildflowers",
      "Closure: snap-buttoned fastening",
      "Top handle",
      "Includes: dust bag",
      "Internal details: internal zipped pocket",
      "Back pocket",
    ],
  },
  {
    id: 4,
    brand: "LEO LIN",
    name: "Maxi Dress",
    price: 780,
    category: "dress",
    image1: leolin,
    image2: leolin2,
    details: [
      "Material: 94% polyester, 6% elastane",
      "Care instructions: dry clean",
      "Made in China",
      "Designer color name: Vanilla",
      "Item color: ivory",
      "Lining: 100% polyester",
    ],
  },
  {
    id: 5,
    brand: "LOEWE",
    name: "PAULA'S IBIZA BAG",
    price: 1515,
    category: "bags",
    image1: loewebag,
    image2: loewebag2,
    details: [
      "Material: raffia",
      "Lining: unlined",
      "Made in Spain",
      "Designer color name: Honey Gold",
      "Item color: brown",
      "Hardware color: gold",
      "Top handle, Detachable shoulder strap",
      "Internal details: internal slot pocket",
      "Trim: leather",
    ],
  },
  {
    id: 6,
    brand: "VERSACE",
    name: "DROP EARINGS",
    price: 715,
    category: "accessories",
    image1: earings,
    image2: earings2,
    details: [
      "Material: brass, crystals",
      "Made in Italy",
      "Item color: gold",
      "Closure: butterfly-back fastening",
    ],
  },

  {
    id: 7,
    brand: "THE ATTICO",
    name: "Canvas Shorts",
    price: 340,
    category: "shorts",
    image1: canvasshorts,
    image2: canvasshorts2,
    details: [
      "Material: 100% cotton",
      "Care instructions: hand wash",
      "Made in Italy",
      "Designer color name: Off White",
      "Item color: white",
      "Lining: 100% cotton",
      "Elasticated waistband",
    ],
  },
  {
    id: 8,
    brand: "GIANVITO ROSSI",
    name: "ORGANZA SLINGBACK FLATS",
    price: 664,
    category: "shoes",
    image1: gianvitoshoe,
    image2: gianvitoshoe2,
    details: [
      "Upper: fabric",
      "Lining: fabric",
      "Sole: leather insole and sole",
      "Toe shape: round toe",
      "Made in Italy",
      "Includes: shoe box",
      "Designer color name: Praline + Praline",
      "Item color: beige",
      "Hardware color: silver",
      "Trim: leather",
      "Closure: buckle fastening",
    ],
  },
  {
    id: 9,
    brand: "FARM RIO",
    name: "Midi Dress",
    price: 245,
    category: "dress",
    image1: mididress,
    image2: mididress2,
    details: [
      " Material: 53% cotton, 47% viscose",
      "Care instructions: machine wash cold",
      "Made in China",
      "Designer color name: Botanical Beauty Pink",
      "Item color: pink",
    ],
  },
  {
    id: 10,
    brand: "MAGDA BUTRYM",
    name: "CROCHET BALLET FLATS",
    price: 650,
    category: "shoes",
    image1: magdashoe,
    image2: magdashoe2,
    details: [
      "Upper: fabric",
      "Lining: fabric",
      "Sole: leather insole and sole",
      "Toe shape: square toe",
      "Made in Italy",
      "Includes: shoe box, dust bag",
      "Designer color name: Brown",
      "Item color: brown",
    ],
  },
  
  {
    id: 11,
    brand: "THE ATTICO",
    name: "Gauze Top",
    price: 395,
    category: "top",
    image1: gauzetop,
    image2: gauzeto2,
    details: [
      "Material: 100% cotton",
      "Care instructions: hand wash",
      "Made in Italy",
      "Designer color name: Terracotta",
      "Item color: pink",
      "Self-tie shoulder straps",
    ],
  },
  {
    id: 12,
    brand: "TOD'S",
    name: "RAFFIA BASKET BAG",
    price: 925,
    category: "bags",
    image1: todsbag,
    image2: todsbag2,
    details: [
      "Material: raffia",
      "Lining: unlined",
      "Made in Italy",
      "Designer color name: Azzuro Medio Persian Blue",
      "Item color: blue",
      "Top handles",
    ],
  },
  
  
  {
    id: 13,
    brand: "AQUAZZURA",
    name: "Raffia Sandals",
    price: 835,
    category: "shoes",
    image1: sandal,
    image2: sandal2,
    details: [
      " Upper: fabric",
      "Lining: fabric",
      "Sole: leather insole, leather and rubber sole",
      "Toe shape: almond open toe",
      "Made in Italy",
      "Includes: shoe box, dust bag",
      "Designer color name: Orange",
      "Item color: orange",
      "Trim: leather",
      "Hardware color: gold",
      "Closure: drawstring",
    ],
  },
  {
    id: 14,
    brand: "ZIMMERMANN",
    name: "Silk Blouse",
    price: 735,
    category: "top",
    image1: silkblouse,
    image2: silkblouse2,
    details: [
      " Material: 52% linen, 48% silk",
      "Care instructions: dry clean",
      "Made in China",
      "Designer color name: Ivory Tropical",
      "Item color: multicolor",
      "Closure: buttoned front, self-ties",
      "Elasticated cuffs",
    ],
  },
  {
        id: 15,
        brand: "SAINT LAURENT",
        name: "Mini shoulder bag",
        price: 1050,
        category: "bags",
        image1: slbag,
        image2: slbag2,
        details: [
          " Material: raffia",
          "Lining: fabric",
          "Made in Madagascar",
          "Designer color name: Pale Brown/Brick",
          "Item color: beige",
          "Trim: leather",
          "Closure: magnetic-tab fastening",
          "Chain and leather shoulder strap",
          "Hardware color: gold",
        ],
      },
  {
    id: 16,
    brand: "LOEWE",
    name: "OLIVE BAG CHARM",
    price: 380,
    category: "accessories",
    image1: loewecharm,
    image2: loewecharm2,
    details: [
      "Material: 100% brass",
      "Care instructions: do not wash",
      "Made in Spain",
      "Designer color name: Green / Gold",
      "Includes: box, dust bag",
      "Material II: 100% leather",
    ],
  },
  {
    id: 17,
    brand: "VALENTINO GARAVANI",
    name: "Leather Belt",
    price: 355,
    category: "accessories",
    image1: belt,
    image2: belt2,
    details: [
      "Material: calf leather",
      "Lining: leather",
      "Made in Italy",
      "Designer color name: Nero",
      "Item color: black",
      "Closure: buckle fastening",
      "Hardware color: gold",
    ],
  },

  
    
  {
    id: 18,
    brand: "THE SEI",
    name: "Silk Satin Gown",
    price: 925,
    category: "dress",
    image1: silkgown,
    image2: silkgown2,
    details: [
      "Material: 100% silk",
      "Care instructions: dry clean",
      "Made in the USA",
      "Designer color name: Antique Gold",
      "Item color: gold",
      "Fully lined",
      "Lining: 100% silk",
      "Contains non-textile parts of animal origin",
    ],
  },
  {
    id: 19,
    brand: "ZIMMERMANN",
    name: "Crop Top",
    price: 650,
    category: "top",
    image1: zimmermantop,
    image2: zimmermantop2,
    details: [
      "Material: 52% linen, 48% silk",
      "Care instructions: machine wash cold",
      "Made in China",
      "Designer color name: Coral",
      "Item color: orange",
      "Closure: zipped back",
    ],
  },
  {
    id: 20,
    brand: "ZIMMERMANN",
    name: "Midi Dress",
    price: 630,
    category: "dress",
    image1: zimmermannmidi,
    image2: zimmermannmidi2,
    details: [
      "Material: 100% linen",
      "Care instructions: dry clean",
      "Made in China",
      "Designer color name: Lemon Hydrangea",
      "Item color: yellow, multicolor",
    ],
  },
  
];

export const campaigns = [
  {
    id: 1,
    title: "ÉLANÉA x Haute Couture",
    subtitle: "THE EXCLUSIVE COLLECTION",
    image: exclusive,
    size: "large",
  },
  {
    id: 2,
    title: "ÉLANÉA Luxe Dresses",
    subtitle: "ELEVATE YOUR STYLE WITH EXCLUSIVE PIECES",
    image: exclusive2,
    size: "small",
  },
  {
    id: 3,
    title: "ÉLANÉA Spring/Summer Collection",
    subtitle: "THE EXCLUSIVE NEW SEASON DROPS",
    image: exclusive3,
    size: "small",
  },
];

export const testimonials = [
  "From the moment I unboxed my ÉLANÉA dress, I felt like I had stepped into a world of refined elegance. The craftsmanship is simply unmatched.",
  "Shopping with ÉLANÉA felt like a private boutique experience — attentive service, exquisite packaging, and timeless designs that turn heads.",
  "Every piece I've purchased from ÉLANÉA drapes beautifully and makes me feel confident, empowered, and feminine. It's luxury redefined.",
  "The silk blouse I ordered was not just clothing — it was wearable art. The details, texture, and fit were beyond what I imagined.",
  "I wore my ÉLANÉA ensemble to a gala and received endless compliments. The brand truly understands modern sophistication.",
  "Customer support was warm, quick, and incredibly professional — a rare find these days. I felt genuinely valued as a client.",
  "ÉLANÉA delivers not only on style but also on feeling. Each piece feels personal, as if it was designed with me in mind.",
  "I’ve never experienced such consistency in quality and fit. I now consider ÉLANÉA my go-to for elevated everyday elegance.",
  "It’s not just fashion — it’s an identity. Wearing ÉLANÉA reminds me to carry myself with grace and purpose.",
  "The packaging alone was a work of art — every detail whispered luxury. It made receiving my order feel like opening a gift.",
];

export const infoData = [
  {
    id: 1,
    icon: <BsBoxSeam size={26}/>,
    title: "Free Global Shipping",
  },
  {
    id: 2,
    icon: <BsCart3 size={26}/>,
    title: "14 Days Return Policy",
  },
  {
    id: 3,
    icon: <BsCreditCard size={26}/>,
    title: "100% Secure Payments",
  },
];