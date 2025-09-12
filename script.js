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

let selectedNumbers = [];
let isAutoMode = true;
let myNumbers = [];

function showLotto() {
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `
    <strong>🎰 로또 구매하기</strong><br><br>
    <div style="margin-bottom: 20px;">
      <button onclick="setAutoMode()" id="autoBtn" style="background: #667eea; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 20px; cursor: pointer;">자동</button>
      <button onclick="setManualMode()" id="manualBtn" style="background: #ccc; color: #666; border: none; padding: 10px 20px; margin: 5px; border-radius: 20px; cursor: pointer;">수동</button>
    </div>
    <div id="numberSelection"></div>
    <div style="margin-top: 20px;">
      <button onclick="buyLotto()" style="background: #28a745; color: white; border: none; padding: 15px 30px; border-radius: 25px; cursor: pointer; font-size: 1.1rem;">로또 구매하기</button>
    </div>
    <div id="myLotto" style="margin-top: 20px;"></div>
    <div id="checkResult" style="margin-top: 20px;"></div>
  `;
  resultBox.className = 'result-box';
  setAutoMode();
}

function setAutoMode() {
  isAutoMode = true;
  selectedNumbers = [];
  document.getElementById('autoBtn').style.background = '#667eea';
  document.getElementById('autoBtn').style.color = 'white';
  document.getElementById('manualBtn').style.background = '#ccc';
  document.getElementById('manualBtn').style.color = '#666';
  
  document.getElementById('numberSelection').innerHTML = '
    <div style="padding: 20px; background: #f8f9fa; border-radius: 10px; margin: 10px 0;">
      <p>자동 선택 모드입니다.</p>
      <p>번호가 자동으로 선택됩니다.</p>
    </div>
  ';
}

function setManualMode() {
  isAutoMode = false;
  selectedNumbers = [];
  document.getElementById('autoBtn').style.background = '#ccc';
  document.getElementById('autoBtn').style.color = '#666';
  document.getElementById('manualBtn').style.background = '#667eea';
  document.getElementById('manualBtn').style.color = 'white';
  
  let numbersHtml = '<div style="padding: 20px; background: #f8f9fa; border-radius: 10px; margin: 10px 0;"><p>번호를 선택해주세요 (6개)</p><div style="display: grid; grid-template-columns: repeat(9, 1fr); gap: 5px; margin-top: 10px;">';
  
  for (let i = 1; i <= 45; i++) {
    numbersHtml += `<button onclick="selectNumber(${i})" id="num${i}" style="width: 35px; height: 35px; border: 1px solid #ddd; background: white; border-radius: 50%; cursor: pointer; font-size: 0.9rem;">${i}</button>`;
  }
  
  numbersHtml += '</div><div id="selectedCount" style="margin-top: 10px; font-size: 0.9rem; color: #666;">선택된 번호: 0/6</div></div>';
  
  document.getElementById('numberSelection').innerHTML = numbersHtml;
}

function selectNumber(num) {
  if (isAutoMode) return;
  
  const button = document.getElementById(`num${num}`);
  
  if (selectedNumbers.includes(num)) {
    selectedNumbers = selectedNumbers.filter(n => n !== num);
    button.style.background = 'white';
    button.style.color = 'black';
  } else if (selectedNumbers.length < 6) {
    selectedNumbers.push(num);
    button.style.background = '#667eea';
    button.style.color = 'white';
  }
  
  document.getElementById('selectedCount').textContent = `선택된 번호: ${selectedNumbers.length}/6`;
}

function buyLotto() {
  if (isAutoMode) {
    selectedNumbers = [];
    while (selectedNumbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!selectedNumbers.includes(num)) {
        selectedNumbers.push(num);
      }
    }
  } else if (selectedNumbers.length !== 6) {
    alert('번호를 6개 선택해주세요!');
    return;
  }
  
  myNumbers = [...selectedNumbers].sort((a, b) => a - b);
  
  document.getElementById('myLotto').innerHTML = `
    <div style="padding: 15px; background: #e8f5e8; border-radius: 10px; border-left: 4px solid #28a745;">
      <strong>🎫 구매한 로또</strong><br>
      <div style="margin: 10px 0; font-size: 1.2rem;">
        ${myNumbers.map(num => `<span style="background: #28a745; color: white; padding: 5px 10px; margin: 2px; border-radius: 50%; display: inline-block; width: 30px; height: 30px; line-height: 20px; font-size: 0.9rem;">${num}</span>`).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('checkResult').innerHTML = `
    <button onclick="checkWinning()" style="background: #dc3545; color: white; border: none; padding: 12px 25px; border-radius: 20px; cursor: pointer; font-size: 1rem;">당첨번호 확인하기</button>
  `;
}

function checkWinning() {
  if (myNumbers.length === 0) {
    alert('먼저 로또를 구매해주세요!');
    return;
  }
  
  // 당첨번호 생성
  const winningNumbers = [];
  while (winningNumbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!winningNumbers.includes(num)) {
      winningNumbers.push(num);
    }
  }
  winningNumbers.sort((a, b) => a - b);
  
  let bonusNumber;
  do {
    bonusNumber = Math.floor(Math.random() * 45) + 1;
  } while (winningNumbers.includes(bonusNumber));
  
  // 당첨 확인
  const matchCount = myNumbers.filter(num => winningNumbers.includes(num)).length;
  const bonusMatch = myNumbers.includes(bonusNumber);
  
  let prize = '';
  let prizeColor = '#666';
  
  if (matchCount === 6) {
    prize = '1등 당첨! 🎉';
    prizeColor = '#ff6b6b';
  } else if (matchCount === 5 && bonusMatch) {
    prize = '2등 당첨! 🎆';
    prizeColor = '#ff8c00';
  } else if (matchCount === 5) {
    prize = '3등 당첨! 🎅';
    prizeColor = '#ffd700';
  } else if (matchCount === 4) {
    prize = '4등 당첨! 🎁';
    prizeColor = '#32cd32';
  } else if (matchCount === 3) {
    prize = '5등 당첨! 🎀';
    prizeColor = '#1e90ff';
  } else {
    prize = '당첨되지 않았습니다 😢';
    prizeColor = '#999';
  }
  
  document.getElementById('checkResult').innerHTML = `
    <div style="padding: 20px; background: #fff3cd; border-radius: 10px; border-left: 4px solid #ffc107; margin-top: 15px;">
      <strong>🎯 당첨번호 발표</strong><br>
      <div style="margin: 15px 0; font-size: 1.2rem;">
        ${winningNumbers.map(num => `<span style="background: #ffc107; color: black; padding: 5px 10px; margin: 2px; border-radius: 50%; display: inline-block; width: 30px; height: 30px; line-height: 20px; font-size: 0.9rem; font-weight: bold;">${num}</span>`).join('')}
        <span style="margin: 0 10px; font-size: 1rem;">+</span>
        <span style="background: #dc3545; color: white; padding: 5px 10px; border-radius: 50%; display: inline-block; width: 30px; height: 30px; line-height: 20px; font-size: 0.9rem;">${bonusNumber}</span>
      </div>
      <div style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">맞은 번호: ${matchCount}개 ${bonusMatch ? '+ 보너스' : ''}</div>
      <div style="font-size: 1.3rem; font-weight: bold; color: ${prizeColor};">${prize}</div>
    </div>
  `;
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