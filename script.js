/* app.js - AllMarket
   Replace WHATSAPP_NUMBER with your digits only (example: 26771234567)
   Place the three files (index.html, styles.css, app.js) in the same folder.
*/

const WHATSAPP_NUMBER = "REPLACE_WITH_YOUR_NUMBER"; // <-- change this to your number (digits only, e.g. 26771234567)
const WHATSAPP_PREFILL = "Hi, I'm interested in a listing on AllMarket. Please share details.";

/* Sample data (you can update or load from a backend later) */
const marketplaceData = [
  { id: 1, type: 'market', title: 'iPhone XR', price: 'P2,500', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop', desc: 'Good condition', location: 'Gaborone', phone: '26771234567' },
  { id: 2, type: 'market', title: 'Fridge - 200L', price: 'P1,200', img: 'https://images.unsplash.com/photo-1580910051074-77e6b4c9a4a8?q=80&w=1200&auto=format&fit=crop', desc: 'Works well', location: 'Tlokweng', phone: '26776900123' },
  { id: 3, type: 'market', title: 'Clothes Bundle', price: 'P350', img: 'https://images.unsplash.com/photo-1520975911481-9e7f1f6c9df1?q=80&w=1200&auto=format&fit=crop', desc: 'Mixed sizes', location: 'Gaborone', phone: '26778122334' },
  { id: 4, type: 'market', title: 'Used Laptop', price: 'P3,100', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop', desc: '8GB RAM', location: 'Phakalane', phone: '26771233122' }
];

const realestateData = [
  { id: 1, type: 'realestate', title: '2-Bed House', price: 'P4,500 / month', img: 'https://images.unsplash.com/photo-1560185127-6ed9a6f60f96?q=80&w=1200&auto=format&fit=crop', location: 'Gaborone', beds: 2, phone: '26771234567' },
  { id: 2, type: 'realestate', title: 'Plot for Sale', price: 'P35,000', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', location: 'Molepolole', beds: 0, phone: '26776900011' }
