const fortunes = [
  "오늘 치킨 먹으면 대박남 🍗",
  "폰 배터리 100%로 시작하는 날 ⚡",
  "오늘은 와이파이가 빵빵할 예정 📶",
  "택배 오늘 올 확률 99% 📦",
  "버스 딱 맞춰 올 운세 🚌",
  "오늘 셀카 잘 나옴 주의 🤳",
  "아이스크림 공짜로 하나 더 받을 운 🍦",
  "엘베 바로 와서 기분 좋은 날 🛗",
  "오늘은 신호등이 다 초록불 🚦",
  "카페에서 자리 바로 잡는 날 ☕",
  "오늘 점심메뉴 고민 1초컷 🍽️",
  "폰 떨어뜨려도 안 깨지는 운세 📱",
  "오늘은 머리가 말을 잘 들음 💇",
  "지하철 앉아서 갈 확률 업 🚇",
  "오늘 만보 저절로 채워짐 👟",
  "편의점 1+1 행사 발견할 운 🏪",
  "오늘은 모든 앱이 빨리 켜짐 📲",
  "엄마가 용돈 줄 가능성 있음 💰",
  "오늘 웃긴 밈 3개 이상 볼 예정 😂",
  "에어컨 바람 독차지하는 날 ❄️",
  "오늘은 모든 문이 자동문 🚪",
  "길에서 강아지 3마리 이상 만남 🐕",
  "오늘 배달 30분 안에 옴 🛵",
  "화장실 휴지 떨어지지 않는 날 🧻",
  "오늘은 모든 비밀번호 한 번에 맞춤 🔐",
  "친구가 먼저 연락할 확률 높음 📞",
  "오늘 좋아하는 노래 라디오에서 나옴 🎵",
  "마트에서 시식 많이 하는 날 🛒",
  "오늘은 모든 신발끈이 안 풀림 👟",
  "엘리베이터에서 혼자 타는 운세 🛗",
  "오늘 좋아하는 유튜버 영상 업로드 📺",
  "길에서 돈 주울 가능성 0.1% 💸",
  "오늘은 모든 USB 한 번에 꽂힘 💾",
  "카페 와이파이 비번 123456 확률 업 📶",
  "오늘 좋아하는 과자 할인하는 날 🍪",
  "지하철에서 핸드폰 충전 성공 🔋",
  "오늘은 모든 자판기가 거스름돈 줌 🏧",
  "친구가 밥 사준다고 할 운세 🍚",
  "오늘 좋아하는 아이돌 인스타 업뎃 📸",
  "편의점에서 따뜻한 도시락 발견 🍱",
  "오늘은 모든 앱 업데이트 안 해도 됨 📱",
  "길에서 고양이가 먼저 다가옴 🐱",
  "오늘 좋아하는 드라마 재방송 나옴 📺",
  "마스크 끈 안 끊어지는 날 😷",
  "오늘은 모든 계산이 딱 떨어짐 🧮",
  "친구가 먼저 사과할 확률 높음 🍎",
  "오늘 좋아하는 음식 배달비 무료 🚚",
  "길에서 아는 사람 안 만나는 운세 👻",
  "오늘은 모든 문자가 바로 읽힘 💬",
  "잠깐 누워있다가 12시간 잘 운세 😴"
];

function showFortune() {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `<strong>🔮 오늘의 운세</strong><br><br><div style="font-size: 1.2rem; line-height: 1.5;">${randomFortune}</div>`;
  resultBox.className = 'result-box';
}

function showLotto() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  numbers.sort((a, b) => a - b);
  
  const bonus = Math.floor(Math.random() * 45) + 1;
  
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `<strong>🎰 로또번호 추첨</strong><br><br>
    <div style="font-size: 1.3rem; margin: 10px 0;">
      ${numbers.map(num => `<span style="background: #667eea; color: white; padding: 5px 10px; margin: 2px; border-radius: 50%; display: inline-block; width: 35px; height: 35px; line-height: 25px;">${num}</span>`).join('')}
    </div>
    <div style="margin-top: 15px; font-size: 1rem;">보너스: <span style="background: #ff6b6b; color: white; padding: 5px 10px; border-radius: 50%; display: inline-block; width: 35px; height: 35px; line-height: 25px;">${bonus}</span></div>`;
  resultBox.className = 'result-box';
}

// 방문자 수 관리
function updateVisitorCount() {
  const today = new Date().toDateString();
  const lastVisit = localStorage.getItem('lastVisit');
  let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;
  
  if (lastVisit !== today) {
    visitorCount = 1;
    localStorage.setItem('lastVisit', today);
  } else {
    visitorCount++;
  }
  
  localStorage.setItem('visitorCount', visitorCount);
  document.getElementById('visitorCount').textContent = visitorCount;
}

// 페이지 로드 시 초기 메시지
document.addEventListener('DOMContentLoaded', function() {
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = '원하는 메뉴를 선택해주세요!';
  resultBox.className = 'result-box empty';
  
  updateVisitorCount();
});