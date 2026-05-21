function getZodiac(dateString){
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";

  return "Capricorn";
}

const compatibility = {
  Aries: {
    Leo: 95,
    Sagittarius: 92,
    Gemini: 85
  },
  Taurus: {
    Virgo: 94,
    Capricorn: 91,
    Cancer: 87
  },
  Gemini: {
    Libra: 93,
    Aquarius: 90,
    Aries: 85
  },
  Cancer: {
    Scorpio: 96,
    Pisces: 92,
    Taurus: 87
  },
  Leo: {
    Aries: 95,
    Sagittarius: 93,
    Libra: 88
  },
  Virgo: {
    Taurus: 94,
    Capricorn: 90,
    Cancer: 84
  },
  Libra: {
    Gemini: 93,
    Aquarius: 91,
    Leo: 88
  },
  Scorpio: {
    Cancer: 96,
    Pisces: 90,
    Virgo: 82
  },
  Sagittarius: {
    Aries: 92,
    Leo: 93,
    Aquarius: 86
  },
  Capricorn: {
    Taurus: 91,
    Virgo: 90,
    Scorpio: 85
  },
  Aquarius: {
    Gemini: 90,
    Libra: 91,
    Sagittarius: 86
  },
  Pisces: {
    Cancer: 92,
    Scorpio: 90,
    Taurus: 84
  }
};

let finalResult = "";

const sweetWords = {
  high: [
    "Kalian tuh cocok banget 😳💖",
    "Aura soulmate nya kuat banget 🔥",
    "Hubungan ini kayak ditakdirkan ✨",
    "Serasi level bikin iri 😭"
  ],

  mid: [
    "Lumayan cocok nih 👀",
    "Masih bisa jadi pasangan manis 😌",
    "Ada chemistry tipis-tipis 😭",
    "Tinggal saling ngerti aja 💫"
  ],

  low: [
    "Hmm... butuh perjuangan 😭",
    "Kadang cocok kadang war 😔",
    "Hubungan ini penuh plot twist 💀",
    "Cinta memang tidak semudah itu 😔"
  ]
};

function getRandomText(percent){

  if(percent >= 85){

    return sweetWords.high[
      Math.floor(Math.random() * sweetWords.high.length)
    ];

  }

  if(percent >= 65){

    return sweetWords.mid[
      Math.floor(Math.random() * sweetWords.mid.length)
    ];

  }

  return sweetWords.low[
    Math.floor(Math.random() * sweetWords.low.length)
  ];
}

function checkLove(){

  const name1 =
    document.getElementById("name1").value.trim();

  const name2 =
    document.getElementById("name2").value.trim();

  const birth1 =
    document.getElementById("birth1").value;

  const birth2 =
    document.getElementById("birth2").value;

  if(!name1 || !name2 || !birth1 || !birth2){

    alert("Isi semua data dulu 😭");

    return;
  }

  const zodiac1 = getZodiac(birth1);
  const zodiac2 = getZodiac(birth2);

  let percent;

  if(
    compatibility[zodiac1] &&
    compatibility[zodiac1][zodiac2]
  ){

    percent = compatibility[zodiac1][zodiac2];

  } else {

    percent = Math.floor(Math.random() * 41) + 50;

  }

  const desc = getRandomText(percent);

  document.getElementById("result").style.display =
    "block";

  document.getElementById("couple").innerText =
    `${name1} ❤️ ${name2}`;

  document.getElementById("percent").innerText =
    `${percent}%`;

  document.getElementById("desc").innerText =
    desc;

  document.getElementById("zodiac").innerText =
    `${zodiac1} ♡ ${zodiac2}`;

  document.getElementById("downloadBtn").style.display =
    "block";

  finalResult = `
${name1} ❤️ ${name2}

Kecocokan: ${percent}%

Zodiac:
${zodiac1} ♡ ${zodiac2}

Pesan:
${desc}
`;
}

function downloadResult(){

  const name1 =
    document.getElementById("name1").value;

  const name2 =
    document.getElementById("name2").value;

  const percent =
    document.getElementById("percent").innerText;

  const zodiac =
    document.getElementById("zodiac").innerText;

  const desc =
    document.getElementById("desc").innerText;

  const htmlContent = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Love Result</title>

<style>

body{
  margin:0;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(135deg,#ff6ba0,#ffb6d9);
  font-family:Arial,sans-serif;
  overflow:hidden;
}

.card{
  width:90%;
  max-width:500px;
  background:white;
  border-radius:30px;
  padding:40px;
  text-align:center;
  box-shadow:0 10px 40px rgba(0,0,0,0.25);
  position:relative;
}

h1{
  color:#ff2d73;
  font-size:40px;
  margin-bottom:10px;
}

.love{
  font-size:30px;
  margin-bottom:20px;
  color:#444;
  font-weight:bold;
}

.percent{
  font-size:90px;
  font-weight:bold;
  color:#ff2d73;
  text-shadow:0 0 20px rgba(255,45,115,0.5);
  margin:20px 0;
}

.zodiac{
  font-size:20px;
  color:#666;
  margin-bottom:20px;
}

.message{
  background:#fff0f6;
  padding:20px;
  border-radius:20px;
  font-size:18px;
  color:#444;
  font-weight:bold;
  border:2px solid #ffd0e2;
}

.footer{
  margin-top:25px;
  color:#999;
  font-size:14px;
}

.heart{
  position:absolute;
  font-size:25px;
  opacity:0.15;
  animation:float 6s infinite ease-in-out;
}

.heart:nth-child(1){
  top:20px;
  left:30px;
}

.heart:nth-child(2){
  top:40px;
  right:40px;
}

.heart:nth-child(3){
  bottom:30px;
  left:60px;
}

.heart:nth-child(4){
  bottom:20px;
  right:50px;
}

@keyframes float{

  0%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-10px);
  }

  100%{
    transform:translateY(0px);
  }

}

</style>
</head>

<body>

<div class="card">

  <div class="heart">💖</div>
  <div class="heart">💕</div>
  <div class="heart">💘</div>
  <div class="heart">❤️</div>

  <h1>LOVE RESULT</h1>

  <div class="love">
    ${name1} ❤️ ${name2}
  </div>

  <div class="percent">
    ${percent}
  </div>

  <div class="zodiac">
    ${zodiac}
  </div>

  <div class="message">
    ${desc}
  </div>

  <div class="footer">
    Generated by Love meter KSYA.ID ✨
  </div>

</div>

</body>
</html>
`;

  const blob = new Blob([htmlContent], {
    type:"text/html"
  });

  const a = document.createElement("a");

  a.href = URL.createObjectURL(blob);

  a.download = "love-result.html";

  a.click();
}