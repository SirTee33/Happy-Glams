import p1_img from "../Videos & Images/foundation (Avour).jpg"
import p2_img from "../Videos & Images/foundation (super stay).jpg"
import p3_img from "../Videos & Images/foundation (vee Beauty).jpg"
import p4_img from "../Videos & Images/foundation 4.jpeg"
import p5_img from "../Videos & Images/foundation 5.jpg"
import p6_img from "../Videos & Images/lipstick 1.jpeg"
import p7_img from "../Videos & Images/lipstick 2.png"
import p8_img from "../Videos & Images/lipstick3.jpg"
import p9_img from "../Videos & Images/lildstick4.jpeg"
import p10_img from "../Videos & Images/lipstick 5.jpeg"
import p11_img from "../Videos & Images/brush1.jpeg"
import p12_img from "../Videos & Images/brush2.jpg"
import p13_img from "../Videos & Images/brush3.jpg"
import p14_img from "../Videos & Images/brush4.jpeg"
import p15_img from "../Videos & Images/brush5.jpeg"
import p16_img from "../Videos & Images/eyelashes1.jpeg"
import p17_img from "../Videos & Images/eyelashes 2.jpeg"
import p18_img from "../Videos & Images/eyelashes 3.jpeg"
import p19_img from "../Videos & Images/eyelashes 4.jpeg"
import p20_img from "../Videos & Images/eyelashes 5.jpeg"
import p21_img from "../Videos & Images/eyepallet1.jpeg"
import p22_img from "../Videos & Images/eyepallet2.jpeg"
import p23_img from "../Videos & Images/eyepallet3.jpeg"
import p24_img from "../Videos & Images/makeup pallet 5.jpeg"
import p25_img from "../Videos & Images/eyepallet5.jpg"
import p26_img from "../Videos & Images/cleanser1.jpeg"
import p27_img from "../Videos & Images/cleanser 2.jpeg"
import p28_img from "../Videos & Images/cleanser 3.jpeg"
import p29_img from "../Videos & Images/cleanser 4.jpeg"
import p30_img from "../Videos & Images/cleanser5.jpeg"
import p31_img from "../Videos & Images/pallete (ceendies Beauty line).jpg"
import p32_img from "../Videos & Images/pallete (vee Beauty powder pallete).jpg"
import p33_img from "../Videos & Images/pallete (Syvimak powder pallete).jpg"
import p34_img from "../Videos & Images/Moisturizer (Snail).jpg"
import p35_img from "../Videos & Images/Lipstick (ceendies Beauty lines).jpg"
import p36_img from "../Videos & Images/Zaron BrownSkin Foundation 12,800.jpg"




const ProductData = [
  { id: 1, 
    name: "Avou Foundation",
    category: "Foundation",
    image: p1_img, 
    new_price: 11000,
    old_price: 15000.00,
    rating: 3.0,
    reviews: 22
  },
  { id: 2, 
    name: "Super Stay Foundation",
    category: "Foundation",
    image: p2_img,     
    new_price: 25000.00,
    old_price: 30000.00,
    rating: 4.5,
    reviews: 102
  },
  { id: 3, 
    name: "vee Beauty Foundation",
    category: "Foundation",
    image: p3_img, 
    new_price: 8000.00,
    old_price: 10000.00,
    rating: 3.5,
    reviews: 21
  },
  { id: 4, 
    name: "Waterproof Foundation",
    category: "Foundation",
    image: p4_img, 
    new_price: 12000.00,
    old_price: 1500.00,
    rating: 2.5,
    reviews: 10
  },
  { id: 5, 
    name: "Matte Foundation ",
    category: "Foundation",
    image: p5_img, 
    new_price: 7500.00,
    old_price: 8500.00,
    rating: 3.5,
    reviews: 26
  },
  { id: 6, 
    name: "O FACE Satin Lipstick",
    category: "Lipstick",
    image: p6_img, 
    new_price: 2000.00,
    old_price: 4000.00,
    rating: 4.0,
    reviews: 58
  },
  { id: 7, 
    name: "Caviar Hydra-Creme Lipstick",
    category: "Lipstick",
    image: p7_img, 
    new_price: 1500.00,
    old_price: 2500.00,
    rating: 1.5,
    reviews: 8
  },
  { id: 8, 
    name: "Bella Keen Liquid Lipstick",
    category: "Lipstick",
    image: p8_img, 
    new_price: 1900.00,
    old_price: 2500.00,
    rating: 3.5,
    reviews: 28
  },
  { id: 9, 
    name: "Matte Lipstick",
    category: "Lipstick",
    image: p9_img, 
    new_price: 2500.00,
    old_price: 4000.00,
    rating: 4.5,
    reviews: 128
  },
  { id: 10, 
    name: "Moisturizing Liquid Lipstick",
    category: "Lipstick",
    image: p10_img, 
    new_price: 4000.00,
    old_price: 6000.00,
    rating: 4.0,
    reviews: 100
  },
  { id: 11, 
    name: "Blossome Makeup Brush Set",
    category: "Brush",
    image: p11_img, 
    new_price: 13000.00,
    old_price: 15000.00,
    rating: 2.5,
    reviews: 36
  },
  { id: 12, 
    name: "GENUINE AVON Makeup Brush Set",
    category: "Brush",
    image: p12_img, 
    new_price: 25000.00,
    old_price: 26500.00,
    rating: 1.0,
    reviews: 2
  },
  { id: 13, 
    name: "MAGEFY Makeup Brush Set",
    category: "Brush",
    image: p13_img, 
    new_price: 12600.00,
    old_price: 13800.00,
    rating: 4.5,
    reviews: 128
  },
  { id: 14, 
    name: "Beautykink Classic Makeup Brush",
    category: "Brush",
    image: p14_img, 
    new_price: 21000.00,
    old_price: 24000.00,
    rating: 3.5,
    reviews: 102
  },
  { id: 15, 
    name: "BS-MALL Makeup Brush Set",
    category: "Brush",
    image: p15_img, 
    new_price: 35000.00,
    old_price: 40000.00,
    rating: 2.0,
    reviews: 40
  },
  { id: 16, 
    name: "Wispy Lashes",
    category: "Eyelashes",
    image: p16_img, 
    new_price: 5500.00,
    old_price: 7000.00,
    rating: 3.5,
    reviews: 108
  },
  { id: 17, 
    name: "Catchy Eyelash",
    category: "Eyelashes",
    image: p17_img, 
    new_price: 4000.00,
    old_price: 5000.00,
    rating: 4.0,
    reviews: 111
  },
  { id: 18, 
    name: "3D Silk Lashes",
    category: "Eyelashes",
    image: p18_img, 
    new_price: 3500.00,
    old_price: 4500.00,
    rating: 1.5,
    reviews: 38
  },
  { id: 19, 
    name: "3D Faux Mink Lashes",
    category: "Eyelashes",
    image: p19_img, 
    new_price: 3800.00,
    old_price: 5000.00,
    rating: 4.5,
    reviews: 125
  },
  { id: 20, 
    name: "Strip Lashes",
    category: "Eyelashes",
    image: p20_img, 
    new_price: 4200.00,
    old_price: 5800.00,
    rating: 4.5,
    reviews: 95
  },
  { id: 21, 
    name: "The Signature Eyeshadow",
    category: "Palette",
    image: p21_img, 
    new_price: 10800.00,
    old_price: 12000.00,
    rating: 2.0,
    reviews: 38
  },
  { id: 22, 
    name: "Classic Makeup Eyeshadow",
    category: "Palette",
    image: p22_img, 
    new_price: 12500.00,
    old_price: 14000.00,
    rating: 3.0,
    reviews: 68
  },
  { id: 23, 
    name: "Zikel Rios Eyeshadow palette",
    category: "Palette",
    image: p23_img, 
    new_price: 7800.00,
    old_price: 8500.00,
    rating: 4.0,
    reviews: 103
  },
  { id: 24, 
    name: "18W Natural Wonder Artistry",
    category: "Palette",
    image: p24_img, 
    new_price: 15000.00,
    old_price: 17000.00,
    rating: 3.5,
    reviews: 82
  },
  { id: 25, 
    name: "Generic 120 Color Eyeshadow",
    category: "Palette",
    image: p25_img, 
    new_price: 35000.00,
    old_price: 37000.00,
    rating: 2.0,
    reviews: 40
  },
  { id: 26, 
    name: "Micellar Cleansing Water",
    category: "Cleanser",
    image: p26_img, 
    new_price: 15000.00,
    old_price: 20000.00,
    rating: 1.0,
    reviews: 9  },
  { id: 27, 
    name: "Lemon Oil Cleanser",
    category: "Cleanser",
    image: p27_img, 
    new_price: 12000.00,
    old_price: 15000.00,
    rating: 4.0,
    reviews: 100
  },
  { id: 28, 
    name: "Gentle Eye Makeup Remover",
    category: "Cleanser",
    image: p28_img, 
    new_price: 14000.00,
    old_price: 18000.00,
    rating: 2.5,
    reviews: 39
  },
  { id: 29, 
    name: "Glow Natural Micellar Water",
    category: "Cleanser",
    image: p29_img, 
    new_price: 11000.00,
    old_price: 15000.00,
    rating: 1.5,
    reviews: 30
  },
  { id: 30, 
    name: "Moisturizing Makeup Remover & Cleanser",
    category: "Cleanser",
    image: p30_img, 
    new_price: 12000.00,
    old_price: 15000.00,
    rating: 1.0,
    reviews: 8
  },
  
  { id: 31, 
    name: "ceendies Beauty line",
    category: "Palette",
    image: p31_img, 
    new_price: 8230.00,
    old_price: 10000.00,
    rating: 4.0,
    reviews: 122
  },
  { id: 32, 
    name: "vee Beauty powder pallete",
    category: "Palette",
    image: p32_img, 
    new_price: 15650.00,
    old_price: 17000.00,
    rating: 2.5,
    reviews: 55
  },
  { id: 33, 
    name: "Syvimak powder pallete",
    category: "Palette",
    image: p33_img, 
    new_price: 34000.00,
    old_price: 37600.00,
    rating: 2.,
    reviews: 40
  },
  { id: 34, 
    name: "Snail Moisturizer",
    category: "Moisturizer",
    image: p34_img, 
    new_price: 21200.00,
    old_price: 23000.00,
    rating: 1.5,
    reviews: 28
  },
  { id: 35, 
    name: "ceendies Beauty lines Lipstick",
    category: "Lipstick",
    image: p35_img, 
    new_price: 10300.00,
    old_price: 12000.00,
    rating: 3.5,
    reviews: 88
  },
  { id: 36, 
    name: "Zaron BrownSkin Foundation",
    category: "Foundation",
    image: p36_img, 
    new_price: 12900.00,
    old_price: 14000.00,
    rating: 4.0,
    reviews: 118
  },
];

export default ProductData;