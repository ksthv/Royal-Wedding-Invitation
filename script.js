const params = new URLSearchParams(window.location.search);
const guest = params.get("guest") || "Esteemed Guest";
const lang = params.get("lang") || "en";

document.getElementById("guestName").innerText =
  lang === "hi" ? `आदरणीय ${guest} जी` : `Welcome ${guest}`;

const bridePoem = {
  en: `Like the first rays of the morning sun,
Kirti brings warmth wherever she goes.
A heart full of love,
a soul rooted in devotion,
and a smile that carries quiet strength.
Grace in her manners,
wisdom in her thoughts,
beauty that shines brighter through kindness —
She is where tradition meets modern grace,
where intelligence walks hand in hand with humility.`,
  hi: `सूर्य की कोमल किरणों सी उजास लिए,
किरती अपने साथ स्नेह और शांति लाती हैं।
भक्ति से परिपूर्ण हृदय,
संस्कारों से सजी आत्मा,
और मुस्कान में बसती सरल गरिमा।
सौंदर्य, बुद्धि और शालीनता —
तीनों का सुंदर संगम,
किरती — जहाँ प्रेम स्वभाव बन जाता है।`
};

const groomPoem = {
  en: `Rooted in tradition, guided by wisdom,
Aditya stands with quiet confidence.
A man of values,
a mind shaped by thoughtfulness,
and a presence that inspires trust.
He is strength without arrogance,
leadership without loudness,
and respect earned through character.
Someone you look up to —
not just by stature,
but by the way he walks the path of righteousness.`,
  hi: `परंपरा में रचा-बसा,
विवेक से प्रकाशित व्यक्तित्व —
आदित्य।
जिनके विचार स्थिर हैं,
जिनका आचरण प्रेरणादायक है,
और जिनकी उपस्थिति विश्वास जगाती है।
वे ऐसे व्यक्तित्व हैं
जिनकी ओर देखा जाए
केवल सम्मान के साथ।`
};

document.getElementById("bridePoem").innerText = bridePoem[lang];
document.getElementById("groomPoem").innerText = groomPoem[lang];

document.getElementById("events").innerHTML = `
<h2>${lang === "hi" ? "विवाह कार्यक्रम" : "Wedding Celebrations"}</h2>

<div class="event-card">
<h3>20 April 2026</h3>
<p>🌼 Haldi Hai – 11:30 AM Onwards</p>
<p>💃 Twirls of Togetherness – 6:00 PM Onwards</p>
</div>

<div class="event-card">
<h3>21 April 2026</h3>
<p>🕉 Shivshakti Gath Bandhan – 11:30 AM Onwards</p>
<p>✨ Grandeur Fiesta – 6:30 PM Onwards</p>
</div>
`;

const weddingDate = new Date("April 21, 2026 18:30:00").getTime();
setInterval(() => {
  const diff = weddingDate - new Date().getTime();
  const d = Math.floor(diff / (1000*60*60*24));
  document.getElementById("countdown").innerText =
    `${d} Days to Go`;
}, 1000);

document.getElementById("rsvp-form").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("rsvp-msg").innerText =
    lang === "hi" ? "धन्यवाद 🙏" : "Thank you for your blessings 🙏";
});
