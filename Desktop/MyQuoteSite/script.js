const quotes = [
  "성공은 작은 노력을 반복한 결과이다.",
  "행복은 습관이다. 그것을 몸에 지니라.",
  "실패는 성공으로 가는 첫걸음이다.",
  "오늘 할 수 있는 일을 내일로 미루지 말라."
];

const fortunes = [
  "오늘은 행운이 따르는 하루입니다 🍀",
  "조심성이 필요한 하루입니다 ⚠️",
  "기회가 다가올 예정입니다 ✨",
  "뜻밖의 좋은 소식을 듣게 됩니다 📩",
  "주변 사람과 협력이 중요한 날입니다 🤝"
];

function showQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("result").innerText = "💡 명언: " + randomQuote;
}

function showFortune() {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("result").innerText = "🔮 운세: " + randomFortune;
}