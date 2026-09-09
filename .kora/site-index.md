# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Tawa Indian Cuisine — Authentic Indian Flavors in Farmington Hills, MI
purpose: The home page of Tawa Indian Cuisine featuring a hero slider, featured dishes, story, menu categories preview, and online ordering options in Farmington Hills, MI.
sections:
- `#heroSection` — hero slider with promotional slides and call to action buttons: Order Online, View Menu
- featured dishes image scroll: Chicken Masala, Chicken Curry, Vegetable Samosas, Chicken Tikka, Palak Paneer
- "Tawa Indian Cuisine" — about and story information with key features: Authentic Recipes, Fresh Ingredients, Vegetarian Friendly, Learn More About Us
- business service stats bar
- "A Taste of India" — menu category tabs with preview dishes and prices: Veg, Non Veg, Tandoori Bread, Dosa, Desserts, Beverages, Paneer Butter Masala, Veg Pulao, Veg Biryani, Gobi Manchurian, Apollo Fish, Chicken Dum Biryani, Chicken Pulao, Pomfret Tandoori Fish, Paneer Kulcha, Parota (2), Plain Naan, Onion Kulcha, Mysore Masala Dosa, Karampodi Dosa, Ghee Dosa, Uttapam, Rasmalai, Gajjar Ka Halwa (Carrot), Gulab Jamun, Mango Lassi, Sugarcane Juice, Limca, Coke, View Full Menu PDF
- "Get Tawa Delivered to You" — online delivery platform links: DoorDash, UberEats, Toast, Grubhub
- "Reserve Your Table Today" — table reservation banner
also: The business name Tawa Indian Cuisine and description appear in the head meta tags and again in the JSON-LD restaurant schema block.
also: The address appears in the JSON-LD restaurant schema block.

## about.html → /about
title: About Us — Tawa Indian Cuisine
purpose: Provide background information, core values, and the story behind the restaurant.
sections:
- "About Us" — Hero banner
- "Tawa Indian Cuisine" — Story and introduction text with call-to-action buttons: View Our Menu, Contact Us
- "Our Core Values" — Grid of core value cards: Authentic Flavors, Fresh Ingredients, Warm Hospitality, Vegetarian Variety, Catering Excellence, Convenient Delivery
- "The Tawa Difference" — Numbered list of reasons to choose the restaurant: Handcrafted with Passion, Regional Specialties, Spice Levels Tailored to You, Convenient Location
- "Come Dine With Us" — Call-to-action banner with contact and direction links: Get Directions
also: The business name appears in the title tag, Open Graph metadata, JSON-LD structured data block, and heading text.
also: The business description appears in the meta description, Open Graph metadata, and JSON-LD structured data block.
also: The image URL appears in the Open Graph image tag, preload link, and JSON-LD structured data block.
also: The page URL appears in the canonical link and JSON-LD structured data block.

## catering.html → /catering
title: Catering — Tawa Indian Cuisine
purpose: Offer catering services and collect inquiries via a request form.
sections:
- "Catering" — page hero title
- "Authentic Indian Catering for Every Occasion" — catering service information and event highlights: Weddings & Celebrations, Corporate Events, Outdoor Catering, Veg & Non-Veg Options, Personalised Consultation
- "Request Catering" — catering inquiry form: Wedding, Corporate Event, Birthday Party, Religious Ceremony, Outdoor Event, Other
- "Need Immediate Assistance?" — contact prompt and phone number

## contact.html → /contact
title: Contact Us — Tawa Indian Cuisine
purpose: Provide contact details, a contact form, and a map location for Tawa Indian Cuisine.
sections:
- "Contact Us" — page hero banner
- "Contact Information" — address, email, phone number, and social media links
- "Get In Touch" — contact form
- map frame

## menu.html → /menu
title: Menu — Tawa Indian Cuisine
purpose: Display the restaurant's menu with categorized dishes, prices, and a downloadable PDF link.
sections:
- `#all-veg` "🌿 Veg" — vegetarian dishes, appetizers, and rices: Bhindi Masala, Channa Masala, Aloo Samosa, Aloo Bajji, Chole Bhature, Dal Makhni, Dal Tadka, Gobi Manchurian, Gobi 65, Jeera Rice, Malai Kofta, Mutter Paneer, Paneer Butter Masala, Paneer Tikka Kebab, Paneer Tikka Masala, Palak Paneer, Veg Pulao, Veg Biryani, Chilli Baby Corn
- `#all-nonveg` "🍗 Non Veg" — non-vegetarian dishes, biryanis, and curries: Apollo Fish, Chicken Dum Biryani, Chicken Pulao, Pomfret Tandoori Fish, Chicken Tikka Masala, Chicken Curry, Chicken Tikka, Tandoori Chicken
- `#all-bread` "🫓 Tandoori Bread" — indian breads and kulchas: Paneer Kulcha, Parota (2), Plain Naan, Onion Kulcha
- `#all-dosa` "🥞 Dosa" — dosas and south indian specialties: Mysore Masala Dosa, Karampodi Dosa, Ghee Dosa, Uttapam, South Indian Dosa Special
- `#all-desserts` "🍮 Desserts" — sweets and desserts: Rasmalai, Gajjar Ka Halwa (Carrot), Gulab Jamun
- `#all-beverages` "🥤 Beverages" — drinks and sodas: Mango Lassi, Sugarcane Juice, Limca, Coke

## services.html → /services
title: Our Services — Tawa Indian Cuisine
purpose: To present the dining, catering, outdoor catering, and banquet services offered by the restaurant, along with the event planning process.
sections:
- hero banner
- "Serving Every Occasion" — services list: Dine In, Catering, Outdoor Catering, Banquet
- "How It Works" — process steps: Get in Touch, Choose Your Menu, We Prepare, Enjoy & Celebrate
- "Plan Your Event With Us" — call to action and links: Request Catering, Contact Us
also: The business description appears in the meta description tag and in the JSON-LD structured data block.
also: The business name appears in the title tag, open graph title tag, and JSON-LD structured data block.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `animations.js` — scroll animations, counters, parallax effect, menu tab switching and hero slider functionality
- `components.js` — Site navigation header, footer, opening hours, business address, phone number, email, and delivery service links: Tawa Indian Cuisine, Home, About Us, Menu, Our Services, Catering, Contact Us, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, 38245, 38249 W 10 Mile Rd, Farmington Hills, MI 48335, UberEats, Toast, DoorDash, Grubhub  [content]
- `robots.txt` — 104 bytes — too small to hold content
- `script.js` — Form handler and mobile menu toggle script
- `sitemap.xml` — List of website URLs for search engine indexers
- `style.css` — Global CSS styles, variables, typography, and layout rules for the site

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
