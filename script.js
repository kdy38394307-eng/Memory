console.log('Script loading...');

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
  "카페에서 자리 바로 잡는 날 ☕"
];

let selectedNumbers = [];
let isAutoMode = true;
let myNumbers = [];
let countdownInterval;

function hideMainMenu() {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('backBtn').style.display = 'block';
}

function showMainMenu() {
  document.getElementById('mainMenu').style.display = 'block';
  document.getElementById('backBtn').style.display = 'none';
}

function goBack() {
  showMainMenu();
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = '원하는 메뉴를 선택해주세요!';
  resultBox.className = 'result-box empty';
}

function showFortune() {
  console.log('showFortune called');
  hideMainMenu();
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h2 style="color: #667eea; margin-bottom: 30px;">🔮 오늘의 운세</h2>
      <div style="font-size: 1.4rem; line-height: 1.8; color: #333; font-weight: bold;">
        ${randomFortune}
      </div>
    </div>
  `;
  resultBox.className = 'result-box';
}

function showLotto() {
  console.log('showLotto called');
  hideMainMenu();
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `
    <div style="padding: 20px;">
      <h2 style="color: #ff6b6b; margin-bottom: 20px; text-align: center;">🎰 로또 구매하기</h2>
      <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 25px;">
        <button onclick="setAutoMode()" id="autoBtn" style="background: #ff6b6b; color: white; border: none; padding: 12px 24px; border-radius: 20px; cursor: pointer;">자동</button>
        <button onclick="setManualMode()" id="manualBtn" style="background: #ccc; color: #666; border: none; padding: 12px 24px; border-radius: 20px; cursor: pointer;">수동</button>
      </div>
      <div id="numberSelection" style="margin-bottom: 25px;"></div>
      <div style="text-align: center; margin-bottom: 25px;">
        <button onclick="buyLotto()" style="background: #28a745; color: white; border: none; padding: 15px 35px; border-radius: 25px; cursor: pointer; font-size: 1.2rem;">로또 구매하기</button>
      </div>
      <div id="myLotto"></div>
      <div id="checkResult"></div>
    </div>
  `;
  resultBox.className = 'result-box';
  setAutoMode();
}

function setAutoMode() {
  console.log('setAutoMode called');
  isAutoMode = true;
  selectedNumbers = [];
  document.getElementById('autoBtn').style.background = '#ff6b6b';
  document.getElementById('autoBtn').style.color = 'white';
  document.getElementById('manualBtn').style.background = '#ccc';
  document.getElementById('manualBtn').style.color = '#666';
  
  document.getElementById('numberSelection').innerHTML = `
    <div style="padding: 25px; background: #fff3cd; border-radius: 15px; text-align: center;">
      <p style="font-size: 1.1rem; margin-bottom: 10px;">🎲 자동 선택 모드</p>
      <p style="color: #666;">번호가 자동으로 선택됩니다</p>
    </div>
  `;
}

function setManualMode() {
  console.log('setManualMode called');
  isAutoMode = false;
  selectedNumbers = [];
  document.getElementById('autoBtn').style.background = '#ccc';
  document.getElementById('autoBtn').style.color = '#666';
  document.getElementById('manualBtn').style.background = '#ff6b6b';
  document.getElementById('manualBtn').style.color = 'white';
  
  let numbersHtml = `
    <div style="padding: 30px; background: #fff3cd; border-radius: 15px;">
      <p style="text-align: center; font-size: 1.1rem; margin-bottom: 25px;">✋ 번호를 선택해주세요 (6개)</p>
      <div style="display: grid; grid-template-columns: repeat(9, 1fr); gap: 10px; max-width: 600px; margin: 0 auto;">
  `;
  
  for (let i = 1; i <= 45; i++) {
    numbersHtml += `<button onclick="selectNumber(${i})" id="num${i}" style="width: 50px; height: 50px; border: 2px solid #ddd; background: white; border-radius: 50%; cursor: pointer; font-size: 1rem; font-weight: bold;">${i}</button>`;
  }
  
  numbersHtml += `
      </div>
      <div id="selectedCount" style="text-align: center; margin-top: 25px; font-size: 1.2rem; color: #ff6b6b; font-weight: bold;">선택된 번호: 0/6</div>
    </div>
  `;
  
  document.getElementById('numberSelection').innerHTML = numbersHtml;
}

function selectNumber(num) {
  console.log('selectNumber called:', num);
  if (isAutoMode) return;
  
  const button = document.getElementById(`num${num}`);
  
  if (selectedNumbers.includes(num)) {
    selectedNumbers = selectedNumbers.filter(n => n !== num);
    button.style.background = 'white';
    button.style.color = 'black';
    button.style.borderColor = '#ddd';
  } else if (selectedNumbers.length < 6) {
    selectedNumbers.push(num);
    button.style.background = '#ff6b6b';
    button.style.color = 'white';
    button.style.borderColor = '#ff6b6b';
  }
  
  document.getElementById('selectedCount').textContent = `선택된 번호: ${selectedNumbers.length}/6`;
}

function buyLotto() {
  console.log('buyLotto called');
  
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
    <div style="padding: 20px; background: #d4edda; border-radius: 15px; border-left: 5px solid #28a745; margin-bottom: 20px;">
      <h3 style="color: #28a745; margin-bottom: 15px; text-align: center;">🎫 구매한 로또</h3>
      <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
        ${myNumbers.map(num => `<span style="background: #28a745; color: white; padding: 10px; margin: 3px; border-radius: 50%; display: inline-block; width: 45px; height: 45px; line-height: 25px; font-size: 1.1rem; font-weight: bold; text-align: center;">${num}</span>`).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('checkResult').innerHTML = `
    <div style="text-align: center;">
      <button onclick="checkWinning()" style="background: #dc3545; color: white; border: none; padding: 15px 30px; border-radius: 25px; cursor: pointer; font-size: 1.1rem;">🎯 당첨번호 확인하기</button>
    </div>
  `;
}

function checkWinning() {
  console.log('checkWinning called');
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
    prize = '낙첨 😢';
    prizeColor = '#999';
  }
  
  document.getElementById('checkResult').innerHTML = `
    <div style="padding: 25px; background: #fff3cd; border-radius: 15px; border-left: 5px solid #ffc107; margin-top: 20px;">
      <h3 style="color: #ffc107; margin-bottom: 15px; text-align: center;">🎯 당첨번호 발표</h3>
      <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
        ${winningNumbers.map(num => `<span style="background: #ffc107; color: black; padding: 10px; border-radius: 50%; display: inline-block; width: 45px; height: 45px; line-height: 25px; font-size: 1.1rem; font-weight: bold; text-align: center;">${num}</span>`).join('')}
        <span style="font-size: 1.5rem; margin: 0 10px;">+</span>
        <span style="background: #dc3545; color: white; padding: 10px; border-radius: 50%; display: inline-block; width: 45px; height: 45px; line-height: 25px; font-size: 1.1rem; font-weight: bold; text-align: center;">${bonusNumber}</span>
      </div>
      <div style="text-align: center; font-size: 1rem; color: #666; margin-bottom: 15px;">맞은 번호: ${matchCount}개 ${bonusMatch ? '+ 보너스' : ''}</div>
      <div style="text-align: center; font-size: 1.5rem; font-weight: bold; color: ${prizeColor};">${prize}</div>
    </div>
  `;
}

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
  const countElement = document.getElementById('visitorCount');
  if (countElement) {
    countElement.textContent = visitorCount;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = '원하는 메뉴를 선택해주세요!';
  resultBox.className = 'result-box empty';
  
  updateVisitorCount();
});

console.log('Script loaded successfully');