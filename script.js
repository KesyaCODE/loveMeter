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

  const resultCard = document.createElement("div");

  resultCard.innerHTML = `

  <div id="capture" style="
    width:800px;
    height:1000px;
    background:linear-gradient(135deg,#ff6ba0,#ffb6d9);
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:Arial,sans-serif;
    padding:40px;
  ">

    <div style="
      width:100%;
      background:white;
      border-radius:35px;
      padding:50px;
      text-align:center;
      box-shadow:0 10px 40px rgba(0,0,0,0.25);
      position:relative;
    ">

      <div style="
        position:absolute;
        top:20px;
        left:30px;
        font-size:35px;
        opacity:0.15;
      ">💖</div>

      <div style="
        position:absolute;
        top:30px;
        right:40px;
        font-size:35px;
        opacity:0.15;
      ">💕</div>

      <div style="
        position:absolute;
        bottom:30px;
        left:50px;
        font-size:35px;
        opacity:0.15;
      ">💘</div>

      <div style="
        position:absolute;
        bottom:25px;
        right:45px;
        font-size:35px;
        opacity:0.15;
      ">❤️</div>

      <h1 style="
        color:#ff2d73;
        font-size:60px;
        margin-bottom:20px;
      ">
        LOVE RESULT
      </h1>

      <div style="
        font-size:40px;
        font-weight:bold;
        color:#444;
        margin-bottom:30px;
      ">
        ${name1} ❤️ ${name2}
      </div>

      <div style="
        font-size:120px;
        font-weight:bold;
        color:#ff2d73;
        text-shadow:0 0 20px rgba(255,45,115,0.5);
        margin:20px 0;
      ">
        ${percent}
      </div>

      <div style="
        font-size:28px;
        color:#666;
        margin-bottom:30px;
      ">
        ${zodiac}
      </div>

      <div style="
        background:#fff0f6;
        border:3px solid #ffd0e2;
        border-radius:25px;
        padding:30px;
        font-size:28px;
        color:#444;
        font-weight:bold;
      ">
        ${desc}
      </div>

      <div style="
        margin-top:40px;
        color:#999;
        font-size:20px;
      ">
        Generated by Love meter KSYA.ID ✨
      </div>

    </div>

  </div>
  `;

  document.body.appendChild(resultCard);

  html2canvas(document.querySelector("#capture"))
  .then(canvas => {

    const link =
      document.createElement("a");

    link.download =
      "love-result.jpg";

    link.href =
      canvas.toDataURL("image/jpeg");

    link.click();

    resultCard.remove();

  });

}