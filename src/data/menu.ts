// Auto-generated comprehensive menu data for Bharath Canteen
export type MenuItem = {
  id: number; name: string; desc: string; price: number; rating: number;
  kcal: string; category: string; veg: boolean; img: string;
  prepTime?: string; spiceLevel?: string; allergens?: string[];
};

const IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCuGHY-foRPUSNyVUQ0KlXG0HK1GJjYGnI7Ps9c4vtBu1uR4WxMU0moy3KqAUJa-mCnuXnQSCe5xJrVOqUz6W_xsfIkl5onJTRSxBHs9jLUjsyQLXePxovdaf3yynu1emNhdwnyPwsAUhEW0jFJA677xktFn0_Gd0GarAPkY9QfeXwvsUQ2brba8_dT7Oy6cbg80aXCgR_BhWtO1OkRUCQtg2hSg4B0lv9p9EIONQHN5u29rkGyyH8VlOfPjQ1XZbBW_Hxb-At_tPtC',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD31ZHhUSC5b4X7mpsr5N5vnW3g6CqwEkAHSZ-nRt_k_PHjlmlGEfMmX5DIKK5bQq0gNS84xicC5EDqGjH9DP1ky5-UAflLQMR1J6-yLWEKF3m02iLeu_s5FrY56jWzUUQb-yAljTtFNaf1RjAjMDjNFOMBsJL1WHLcmukVqdueLZPGthjmjTLMLHOEKxIBgHeWfZuteLI2j4mZNpB6dvLQqHybh2vhHVq8wOnxnuvhX0ukn_HrpjDYPySfqtb3G-8pFXwns2TPzupR',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAkI65f8KHPAOz_ylDLWECl_VWA3pvlCg7yT-tUE4h7WmJjxIonu-AgMMJHvLQ_SfbmVk6ZW1xOIYl1vmsN_DZnxNAdTwSEe6NljAn7j_j7u1i9Nw_hBNcFahGciGQGC00MXB8kWipgz1cqkuDDJF8ziyBjXoyz3_G6x6sq05G2Ip05vqwrrV589UcDdskpYE0XXbCgImk7A__nkW9kjPz2ubchb6mx18P96RvA-pBa63Uf5UJ-FgU5qjb7_Zy4kV7GDBcTCeoSfzgl',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBPM6WYLLSDyrRmr44YgOBDOZ5XjpyF6m1Bwd_RnOIxIINWFtELikPBEla44dYgQFuOROqWy8voJiKkm7WMm3-9T0oEpuqlJXLIHCzi7BW8N5BkLzRyOsNKvGoLW6afgljvUoXSYtA5dxUk6r1P_Twq3xrMCJLl68qbyBGBWNwYt3kh8MGdA4KwxToBmaG2OJWJfjmfJGFYWf41bYW3iVL7fc3Y8rfiYSIt7-b8wbzvDkQrN_4cMv9QoDQFF45BCqF2LJe4KPArS2iU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD0uQ62xoexQN2Ja2nZ5d_GDCuSoz5MoZZhEgAZowNer5lur85p7ALKkcSXXcfehF00DdGd-nOxT2DIrXpPJcvcuoTvsi5eZxXpnSCZUqQ-8eO4joKbr6-DmnRj0AailgAk5VxZdpFZB8nJYHx9YOPYrUHybZz1DOHs6Od1weE4TTiJo_vWyYdboHRb3EFfeRfizExpUaMznzESyRQhlZ8-U-X1HyAlOS-QlKRoUvZMtVbwrZDg7iKhm2YPJoQU6bRFoYIKJL5IAUS2',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDEMo2t07mOQ5olSh7N0rrOrOH2e-j99C1WZfpWa2JOTMZvmWhwrwS0HuXiRQzc1XFoqCx79zBecuhgZ7zUu4QAxgjTaAA1Xo068-w_GacNP12RqkYnAAPaN-_LvAA9wQpyk1UvDSRpzvGQy_WG8MOJV7rQdnHijln7lfZD6FWMOyqfph0meXC7i3DV6uaUXZo8AL72Bo-C3Ou8jJmoKBdGJfeChRCrYh-YRPYtVlW9Jm3yitr_Vf33yO_U3mne4Y3u3dBxKDRhnkfn',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuASRuhVGSzbst_pQ-B817HUg-6fThB4Jd8UXuzfs1zPHKGSLNc9ujLbv_POi1NTPjbNxxb8xsY8TVIyvoKoZEbo0dAuGcE-T7tKOTM5Ye80-bn8tsUp9IkwXggxLI6OQYPnrO3hdRJG_xq-JKecNVI06a-OMegpFPM8Ux-4MBxuKKO2EH5ValP6WanQLm8cVU_N4Qnk4OX7Sz_emCYx7KmgEsO5nj3YeGe5jphGhIYSBzNBE4HFIM_EwKpVKv5iWd2tChnkHbVUmypk',
];

// Base items per category — these get expanded with variations
const BASE: Record<string, { names: string[]; descs: string[]; priceRange: [number,number]; kcalRange: [number,number]; spice: string[] }> = {
  Breakfast: {
    names: ['Masala Dosa','Plain Dosa','Rava Dosa','Onion Dosa','Mysore Dosa','Set Dosa','Neer Dosa','Pesarattu','Idli','Mini Idli','Rava Idli','Kanchipuram Idli','Medu Vada','Dahi Vada','Masala Vada','Upma','Rava Upma','Vermicelli Upma','Poha','Aval Upma','Pongal','Ven Pongal','Sakkarai Pongal','Uttapam','Onion Uttapam','Tomato Uttapam','Mixed Uttapam','Paneer Uttapam','Appam','Egg Appam','Puttu','Kadala Curry','Paratha','Aloo Paratha','Gobi Paratha','Paneer Paratha','Methi Paratha','Laccha Paratha','Chapati','Poori','Poori Bhaji','Bread Omelette','Egg Bhurji','French Toast','Cornflakes Bowl','Muesli Bowl','Fruit Bowl','Sandwich','Cheese Toast','Masala Toast'],
    descs: ['Traditional recipe with fresh ingredients','Served with sambar and chutney','Crispy golden-brown perfection','South Indian breakfast staple','Made with premium quality ingredients','Authentic campus kitchen recipe','Fresh daily preparation','Nutritious and filling','Light and healthy option','Classic university favourite'],
    priceRange: [20, 90], kcalRange: [120, 450], spice: ['Mild','Medium','Spicy'],
  },
  'North Indian': {
    names: ['Paneer Butter Masala','Shahi Paneer','Palak Paneer','Kadai Paneer','Paneer Tikka','Paneer Do Pyaza','Matar Paneer','Paneer Bhurji','Chana Masala','Rajma Masala','Dal Tadka','Dal Makhani','Dal Fry','Yellow Dal','Mixed Dal','Aloo Gobi','Aloo Matar','Aloo Jeera','Bhindi Masala','Baingan Bharta','Mixed Veg','Veg Kolhapuri','Veg Jalfrezi','Mushroom Masala','Kadhai Mushroom','Malai Kofta','Dum Aloo','Veg Korma','Navratan Korma','Jeera Rice','Pulao','Veg Biryani','Paneer Biryani','Mushroom Biryani','Curd Rice','Lemon Rice','Tamarind Rice','Naan','Butter Naan','Garlic Naan','Cheese Naan','Kulcha','Roti','Tandoori Roti','Missi Roti','Rumali Roti','Bhatura','Raita','Papad','Pickle'],
    descs: ['Rich creamy gravy with aromatic spices','Slow-cooked for authentic flavour','Traditional North Indian preparation','Made with fresh herbs and spices','Served with choice of bread','Restaurant-style preparation','Premium quality ingredients','Authentic Mughlai recipe','Home-style comfort food','Garnished with fresh coriander'],
    priceRange: [40, 180], kcalRange: [200, 650], spice: ['Mild','Medium','Spicy','Extra Spicy'],
  },
  'South Indian': {
    names: ['Sambar Rice','Rasam Rice','Bisi Bele Bath','Puliyodarai','Veg Meals','Mini Meals','Special Meals','Thali','Chettinad Curry','Avial','Kootu','Poriyal','Thoran','Sambar','Rasam','Mor Kulambu','Vathal Kulambu','Kara Kulambu','Kootu Curry','Olan','Erissery','Pachadi','Theeyal','Meen Kulambu Style Veg','Egg Curry','Pepper Curry','Coconut Curry','Tomato Curry','Drumstick Sambar','Paruppu Curry','Vendakkai Poriyal','Beans Poriyal','Cabbage Poriyal','Carrot Poriyal','Beetroot Poriyal','Potato Poriyal','Brinjal Poriyal','Snake Gourd Poriyal','Chow Chow Poriyal','Bitter Gourd Poriyal','Kootu Payasam','Semiya Payasam','Pal Payasam','Ada Pradhaman','Paruppu Payasam','Carrot Halwa','Kesari','Badam Halwa','Paal Paniyaram','Sweet Paniyaram'],
    descs: ['Authentic Tamil Nadu recipe','Kerala-style preparation','Andhra special recipe','Traditional home cooking','Made with coconut and curry leaves','Temple-style preparation','Festival special','Rich in traditional spices','Comfort food from South India','Made fresh every morning'],
    priceRange: [30, 150], kcalRange: [180, 550], spice: ['Mild','Medium','Spicy'],
  },
  Snacks: {
    names: ['Samosa','Paneer Samosa','Veg Puff','Egg Puff','Masala Puff','Spring Roll','Veg Cutlet','Bread Pakora','Onion Pakora','Bajji','Bonda','Mysore Bonda','Aloo Bonda','Mirchi Bajji','Gobi Manchurian','Paneer 65','Gobi 65','Mushroom 65','Baby Corn Fry','Crispy Corn','Veg Manchurian','Chilli Paneer','Chilli Mushroom','Chilli Potato','Honey Chilli Potato','Veg Nuggets','Cheese Balls','Potato Wedges','French Fries','Masala Fries','Pani Puri','Bhel Puri','Sev Puri','Dahi Puri','Ragda Pattice','Pav Bhaji','Vada Pav','Dabeli','Kachori','Aloo Tikki','Chole Tikki','Dahi Aloo Tikki','Papdi Chaat','Aloo Chaat','Fruit Chaat','Corn Chaat','Momos Veg','Momos Fried','Momos Steamed','Momos Tandoori'],
    descs: ['Crispy and golden-brown','Freshly fried to order','Street food favourite','Perfect tea-time snack','Spiced to perfection','Crunchy outside, soft inside','Indo-Chinese fusion','Mumbai street style','Popular campus snack','Served with special chutney'],
    priceRange: [15, 80], kcalRange: [100, 400], spice: ['Mild','Medium','Spicy','Extra Spicy'],
  },
  Juices: {
    names: ['Orange Juice','Sweet Lime Juice','Watermelon Juice','Pineapple Juice','Pomegranate Juice','Mango Juice','Mixed Fruit Juice','Apple Juice','Grape Juice','Carrot Juice','Beetroot Juice','ABC Juice','Green Juice','Sugarcane Juice','Coconut Water','Tender Coconut','Lime Soda','Masala Soda','Jaljeera','Aam Panna','Buttermilk','Masala Chaas','Lassi Sweet','Lassi Mango','Lassi Rose','Lassi Salted','Badam Milk','Turmeric Latte','Hot Chocolate','Cold Coffee','Iced Tea','Green Tea','Masala Chai','Filter Coffee','Cappuccino','Espresso','Americano','Latte','Mocha','Frappe','Milkshake Vanilla','Milkshake Chocolate','Milkshake Strawberry','Milkshake Oreo','Milkshake Butterscotch','Thick Shake Mango','Smoothie Berry','Smoothie Banana','Smoothie Tropical','Protein Shake'],
    descs: ['Freshly squeezed to order','No added sugar or preservatives','Refreshing and energizing','Made with real fruit','Campus favourite beverage','Hydrating and delicious','Rich in vitamins','Natural and healthy','Ice-cold perfection','Premium quality beans'],
    priceRange: [20, 120], kcalRange: [40, 350], spice: ['None'],
  },
  Bakery: {
    names: ['Veg Sandwich','Grilled Sandwich','Club Sandwich','Paneer Sandwich','Cheese Sandwich','Bombay Sandwich','Coleslaw Sandwich','Corn Sandwich','Mushroom Sandwich','Spinach Sandwich','Veg Burger','Paneer Burger','Aloo Tikki Burger','Mushroom Burger','Cheese Burger','Veggie Wrap','Paneer Wrap','Falafel Wrap','Mexican Wrap','Kathi Roll','Paneer Roll','Egg Roll','Pizza Margherita','Pizza Veggie','Pizza Paneer Tikka','Pizza Corn','Pizza Mushroom','Pizza Four Cheese','Garlic Bread','Cheese Garlic Bread','Bruschetta','Pasta Arrabiata','Pasta Alfredo','Pasta Penne','Pasta Fusilli','Mac and Cheese','Veg Lasagna','Croissant','Danish Pastry','Muffin Blueberry','Muffin Chocolate','Cupcake Vanilla','Cupcake Red Velvet','Brownie','Cookie Choco Chip','Cookie Oatmeal','Donut Glazed','Donut Chocolate','Bread Roll','Pav'],
    descs: ['Freshly baked in-house','Made with premium ingredients','Toasted to golden perfection','Loaded with fresh veggies','Artisan bakery quality','Served warm and fresh','European-style preparation','Multi-grain healthy option','Cheesy and delicious','Perfect grab-and-go option'],
    priceRange: [25, 180], kcalRange: [150, 550], spice: ['None','Mild','Medium'],
  },
  Desserts: {
    names: ['Gulab Jamun','Rasgulla','Rasmalai','Sandesh','Cham Cham','Kaju Katli','Barfi','Peda','Mysore Pak','Boondi Ladoo','Motichoor Ladoo','Besan Ladoo','Jalebi','Imarti','Malpua','Rabri','Kheer','Phirni','Shrikhand','Basundi','Kulfi Malai','Kulfi Pista','Kulfi Mango','Ice Cream Vanilla','Ice Cream Chocolate','Ice Cream Butterscotch','Ice Cream Strawberry','Sundae Chocolate','Sundae Caramel','Banana Split','Falooda','Fruit Salad','Fruit Cream','Gajar Halwa','Moong Dal Halwa','Sooji Halwa','Bread Halwa','Double Ka Meetha','Shahi Tukda','Ras Malai Cake','Tres Leches','Tiramisu','Cheesecake','Chocolate Mousse','Panna Cotta','Creme Brulee','Chocolate Lava Cake','Brownie Sundae','Waffle','Pancake'],
    descs: ['Traditional Indian sweet','Made with pure ghee','Rich and indulgent','Festival favourite dessert','Authentic recipe passed down generations','Perfectly sweetened','Premium quality ingredients','Served chilled','Garnished with dry fruits','Heavenly sweet treat'],
    priceRange: [25, 150], kcalRange: [150, 500], spice: ['None'],
  },
};

function generateItems(): MenuItem[] {
  const items: MenuItem[] = [];
  let id = 1;
  for (const [category, data] of Object.entries(BASE)) {
    for (let i = 0; i < data.names.length; i++) {
      const price = data.priceRange[0] + Math.round(Math.random() * (data.priceRange[1] - data.priceRange[0]) / 5) * 5;
      const kcal = data.kcalRange[0] + Math.round(Math.random() * (data.kcalRange[1] - data.kcalRange[0]) / 10) * 10;
      const rating = +(3.8 + Math.random() * 1.2).toFixed(1);
      items.push({
        id: id++,
        name: data.names[i],
        desc: data.descs[i % data.descs.length],
        price,
        rating: Math.min(rating, 5.0),
        kcal: `${kcal} kcal`,
        category,
        veg: category !== 'Non Veg',
        img: IMAGES[i % IMAGES.length],
        prepTime: `${5 + Math.floor(Math.random() * 20)} min`,
        spiceLevel: data.spice[Math.floor(Math.random() * data.spice.length)],
      });
    }
  }
  return items;
}

export const MENU_ITEMS = generateItems();
export const CATEGORIES = ['All', ...Object.keys(BASE)];
