// Memory 사이트 JavaScript
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

const dinnerMenus = [
  "치킨 🍗",
  "피자 🍕",
  "짜장면 🍜",
  "배달음식 🍲",
  "한식 🍱",
  "일식 🍣",
  "중식 🥢",
  "양식 🍝",
  "분식 🌮",
  "도시락 🍱",
  "삼겹살 🥩",
  "라면 🍜",
  "버거 🍔",
  "샐러드 🥗",
  "스테이크 🥩"
];

let selectedNumbers = [];
let isAutoMode = true;
let myNumbers = [];
let countdownInterval;

function hideMainMenu() {
  document.getElementById('mainMenu').classList.add('hidden');
  document.getElementById('backBtn').classList.remove('hidden');
}

function showMainMenu() {
  document.getElementById('mainMenu').classList.remove('hidden');
  document.getElementById('backBtn').classList.add('hidden');
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

function getTodaysFortune() {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem('fortuneDate');
  
  if (savedDate !== today) {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    localStorage.setItem('todaysFortune', randomFortune);
    localStorage.setItem('fortuneDate', today);
    return randomFortune;
  } else {
    return localStorage.getItem('todaysFortune') || fortunes[0];
  }
}

function showFortune() {
  console.log('showFortune called');
  hideMainMenu();
  const todaysFortune = getTodaysFortune();
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h2 style="color: #667eea; margin-bottom: 30px;">🔮 오늘의 운세</h2>
      <div style="font-size: 1.4rem; line-height: 1.8; color: #333; font-weight: bold; margin-bottom: 30px;">
        ${todaysFortune}
      </div>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
        <p style="color: #666; font-size: 0.9rem; margin: 0;">📅 오늘의 운세는 하루에 한 번만 새로 생성됩니다.</p>
      </div>
    </div>
  `;
  resultBox.className = 'result-box';
}

function getTodaysDinner() {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem('dinnerDate');
  
  if (savedDate !== today) {
    const randomDinner = dinnerMenus[Math.floor(Math.random() * dinnerMenus.length)];
    localStorage.setItem('todaysDinner', randomDinner);
    localStorage.setItem('dinnerDate', today);
    return randomDinner;
  } else {
    return localStorage.getItem('todaysDinner') || dinnerMenus[0];
  }
}

function showDinner() {
  console.log('showDinner called');
  hideMainMenu();
  const todaysDinner = getTodaysDinner();
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h2 style="color: #28a745; margin-bottom: 30px;">🍽️ 오늘의 저녁메뉴</h2>
      <div style="font-size: 1.4rem; line-height: 1.8; color: #333; font-weight: bold; margin-bottom: 30px;">
        ${todaysDinner}
      </div>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
        <p style="color: #666; font-size: 0.9rem; margin: 0;">🍽️ 오늘의 저녁메뉴는 하루에 한 번만 새로 생성됩니다.</p>
      </div>
    </div>
  `;
  resultBox.className = 'result-box';
}

function showLotto() {
  console.log('showLotto called');
  hideMainMenu();
  const resultBox = document.getElementById('result');
  
  // 구매 여부 확인
  const now = new Date();
  const currentHour = now.getHours();
  const lottoKey = `${now.toDateString()}-${currentHour}`;
  const hasPurchased = localStorage.getItem(`hasPurchased-${lottoKey}`) === 'true';
  const purchasedNumbers = localStorage.getItem(`purchasedLotto-${lottoKey}`);
  
  if (hasPurchased && purchasedNumbers) {
    // 이미 구매한 경우
    const numbers = JSON.parse(purchasedNumbers);
    resultBox.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h2 style="color: #ff6b6b; margin-bottom: 20px;">🎰 로또 구매 완료</h2>
        <div style="padding: 20px; background: #d4edda; border-radius: 15px; margin-bottom: 25px;">
          <h3 style="color: #28a745; margin-bottom: 15px;">🎫 구매한 로또</h3>
          <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
            ${numbers.map(num => `<span style="background: #28a745; color: white; padding: 10px; margin: 3px; border-radius: 50%; display: inline-block; width: 45px; height: 45px; line-height: 25px; font-size: 1.1rem; font-weight: bold; text-align: center;">${num}</span>`).join('')}
          </div>
        </div>
        <div style="background: #fff3cd; padding: 20px; border-radius: 15px;">
          <p style="color: #666; margin-bottom: 15px;">이번 시간대에 이미 로또를 구매하셨습니다.</p>
          <p id="lottoCountdown" style="color: #ff6b6b; font-size: 1.2rem; font-weight: bold; margin-bottom: 15px;">다음 추첨까지: 계산 중...</p>
          <button onclick="checkWinning()" style="background: #dc3545; color: white; border: none; padding: 15px 30px; border-radius: 25px; cursor: pointer;">🎯 당첨번호 확인</button>
        </div>
      </div>
    `;
    startCountdown();
  } else {
    // 아직 구매하지 않은 경우
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
    setAutoMode();
  }
  
  resultBox.className = 'result-box';
}

function setAutoMode() {
  console.log('setAutoMode called');
  
  // 구매 여부 확인
  const now = new Date();
  const currentHour = now.getHours();
  const lottoKey = `${now.toDateString()}-${currentHour}`;
  const hasPurchased = localStorage.getItem(`hasPurchased-${lottoKey}`) === 'true';
  
  if (hasPurchased) {
    alert('이번 시간대에 이미 로또를 구매하셨습니다!');
    return;
  }
  
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
  
  // 구매 여부 확인
  const now = new Date();
  const currentHour = now.getHours();
  const lottoKey = `${now.toDateString()}-${currentHour}`;
  const hasPurchased = localStorage.getItem(`hasPurchased-${lottoKey}`) === 'true';
  
  if (hasPurchased) {
    alert('이번 시간대에 이미 로또를 구매하셨습니다!');
    return;
  }
  
  isAutoMode = false;
  selectedNumbers = [];
  document.getElementById('autoBtn').style.background = '#ccc';
  document.getElementById('autoBtn').style.color = '#666';
  document.getElementById('manualBtn').style.background = '#ff6b6b';
  document.getElementById('manualBtn').style.color = 'white';
  
  let numbersHtml = `
    <div style="padding: 30px; background: #cdffe0ff; border-radius: 15px;">
      <p style="text-align: center; font-size: 1rem; margin-bottom: 40px;">✋ 번호를 선택해주세요 (6개)</p>
      <div style="display: grid; grid-template-columns: repeat(9, 1fr); gap: 10px; max-width: 1000px; margin: 0; auto;">
  `;
  
  for (let i = 1; i <= 45; i++) {
    numbersHtml += `<button onclick="selectNumber(${i})" id="num${i}" style="width: 50px; height: 50px; border: 2px solid #ddd; background: white; border-radius: 50%; cursor: pointer; font-size: 1rem; font-weight: bold;">${i}</button>`;
  }
  
  numbersHtml += `
      </div>
      <div id="selectedCount" style="text-align: center; margin-top: 25px; font-size: 1.2rem; color: #ff6b6bff; font-weight: bold;">선택된 번호: 0/6</div>
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
  
  // 구매 여부 재확인
  const now = new Date();
  const currentHour = now.getHours();
  const lottoKey = `${now.toDateString()}-${currentHour}`;
  const hasPurchased = localStorage.getItem(`hasPurchased-${lottoKey}`) === 'true';
  
  if (hasPurchased) {
    alert('이번 시간대에 이미 로또를 구매하셨습니다!');
    return;
  }
  
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
  
  // 구매 정보 저장
  localStorage.setItem(`purchasedLotto-${lottoKey}`, JSON.stringify(myNumbers));
  localStorage.setItem(`hasPurchased-${lottoKey}`, 'true');
  
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
  
  // 모든 버튼 비활성화
  const buyButton = document.querySelector('button[onclick="buyLotto()"]');
  const autoBtn = document.getElementById('autoBtn');
  const manualBtn = document.getElementById('manualBtn');
  const numberButtons = document.querySelectorAll('button[onclick^="selectNumber"]');
  
  if (buyButton) buyButton.disabled = true;
  if (autoBtn) autoBtn.disabled = true;
  if (manualBtn) manualBtn.disabled = true;
  numberButtons.forEach(btn => btn.disabled = true);
}

function checkWinning() {
  console.log('checkWinning called');
  if (myNumbers.length === 0) {
    alert('먼저 로또를 구매해주세요!');
    return;
  }
  
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
      <div style="text-align: center; font-size: 1.5rem; font-weight: bold; color: ${prizeColor}; margin-bottom: 15px;">${prize}</div>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
        <p style="color: #666; font-size: 0.9rem; margin: 0; text-align: center;">⏰ 당첨번호는 1시간마다 새로 결정됩니다.</p>
        <p id="lottoCountdown" style="color: #ff6b6b; font-size: 1rem; margin: 10px 0; text-align: center; font-weight: bold;">다음 추첨까지: 계산 중...</p>
      </div>
    </div>
  `;
  
  // 버튼 비활성화 및 카운트다운 시작
  const checkButton = document.querySelector('button[onclick="checkWinning()"]');
  if (checkButton) checkButton.disabled = true;
  startCountdown();
}

function getTimeUntilNextLotto() {
  const now = new Date();
  const nextHour = new Date(now);
  nextHour.setHours(now.getHours() + 1, 0, 0, 0);
  
  const diff = nextHour.getTime() - now.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { minutes, seconds };
}

function updateCountdown() {
  const countdownElement = document.getElementById('lottoCountdown');
  if (countdownElement) {
    const { minutes, seconds } = getTimeUntilNextLotto();
    countdownElement.textContent = `다음 추첨까지: ${minutes}분 ${seconds}초`;
  }
}

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
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
  updateLoginUI();
  updateVisitorCount();
  
  // 버튼 이벤트 리스너 추가
  document.getElementById("fortuneBtn").addEventListener("click", showFortune);
  document.getElementById("lottoBtn").addEventListener("click", showLotto);
  document.getElementById("dinnerBtn").addEventListener("click", showDinner);
  document.getElementById("backBtnInner").addEventListener("click", goBack);
  document.getElementById("sendCodeBtn").addEventListener("click", sendVerificationCode);
  document.getElementById("cancelRegisterBtn").addEventListener("click", closeRegisterModal);
  document.getElementById("processLoginBtn").addEventListener("click", processLogin);
  document.getElementById("cancelLoginBtn").addEventListener("click", closeLoginModal);
  document.getElementById("verifyBtn").addEventListener("click", verifyCode);
  document.getElementById("cancelVerifyBtn").addEventListener("click", closeVerificationModal);
  document.getElementById("alertOkBtn").addEventListener("click", closeAlert);
  
  // 도메인 선택 이벤트 리스너
  const emailDomain = document.getElementById('emailDomain');
  const customDomain = document.getElementById('customDomain');
  const loginEmailDomain = document.getElementById('loginEmailDomain');
  const loginCustomDomain = document.getElementById('loginCustomDomain');
  
  if (emailDomain) {
    emailDomain.addEventListener('change', function() {
      if (this.value === 'custom') {
        customDomain.classList.remove('hidden');
      } else {
        customDomain.classList.add('hidden');
      }
    });
  }
  
  if (loginEmailDomain) {
    loginEmailDomain.addEventListener('change', function() {
      if (this.value === 'custom') {
        loginCustomDomain.classList.remove('hidden');
      } else {
        loginCustomDomain.classList.add('hidden');
      }
    });
  }
});

// 로그인 UI 업데이트
function updateLoginUI() {
  const loginBox = document.querySelector('.login-box');
  const mainMenu = document.getElementById('mainMenu');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const userEmail = localStorage.getItem('userEmail');
  const userNickname = localStorage.getItem('userNickname');
  
  // 메인 메뉴는 항상 보이게 설정
  if (mainMenu) mainMenu.style.display = 'block';
  if (welcomeMessage) welcomeMessage.style.display = 'none';
  
  if (userEmail && userNickname) {
    // 로그인 상태 (닉네임 표시)
    loginBox.innerHTML = `
      <p>🎉 ${userNickname}님 로그인 중</p>
      <button id="logoutBtn">로그아웃</button>
    `;
    document.getElementById('logoutBtn').addEventListener('click', logout);
  } else {
    // 비로그인 상태
    loginBox.innerHTML = `
      <button id="registerBtn">회원가입</button>
      <button id="loginBtn">로그인</button>
    `;
    document.getElementById('registerBtn').addEventListener('click', showRegisterModal);
    document.getElementById('loginBtn').addEventListener('click', showLoginModal);
  }
}

function logout() {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userNickname');
  showAlert('로그아웃 완료!', 'success');
  updateLoginUI();
}

// 회원가입 모달 관련 함수들
function showRegisterModal() {
  document.getElementById('registerModal').classList.remove('hidden');
}

function closeRegisterModal() {
  document.getElementById('registerModal').classList.add('hidden');
  // 입력 필드 초기화
  document.getElementById('emailLocal').value = '';
  document.getElementById('emailDomain').value = 'gmail.com';
  document.getElementById('customDomain').value = '';
  document.getElementById('customDomain').classList.add('hidden');
}

function showLoginModal() {
  document.getElementById('loginModal').classList.remove('hidden');
}

function closeLoginModal() {
  document.getElementById('loginModal').classList.add('hidden');
  // 입력 필드 초기화
  document.getElementById('loginEmailLocal').value = '';
  document.getElementById('loginEmailDomain').value = 'gmail.com';
  document.getElementById('loginCustomDomain').value = '';
  document.getElementById('loginCustomDomain').classList.add('hidden');
  document.getElementById('loginPassword').value = '';
}

function sendVerificationCode() {
  const emailLocal = document.getElementById('emailLocal').value.trim();
  const emailDomain = document.getElementById('emailDomain').value;
  const customDomain = document.getElementById('customDomain').value.trim();
  
  if (!emailLocal) {
    showAlert('이메일을 입력해주세요.', 'error');
    return;
  }
  
  const domain = emailDomain === 'custom' ? customDomain : emailDomain;
  if (!domain) {
    showAlert('도메인을 입력해주세요.', 'error');
    return;
  }
  
  const fullEmail = `${emailLocal}@${domain}`;
  
  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fullEmail)) {
    showAlert('올바른 이메일 형식이 아닙니다.', 'error');
    return;
  }
  
  // 인증번호 생성 및 저장
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  localStorage.setItem('verificationCode', verificationCode);
  localStorage.setItem('registerEmail', fullEmail);
  
  closeRegisterModal();
  showVerificationModal();
  showAlert(`${fullEmail}로 인증번호가 발송되었습니다.\n인증번호: ${verificationCode}`, 'success');
}

function showVerificationModal() {
  document.getElementById('verificationModal').classList.remove('hidden');
}

function closeVerificationModal() {
  document.getElementById('verificationModal').classList.add('hidden');
  document.getElementById('verificationInput').value = '';
}

function verifyCode() {
  const inputCode = document.getElementById('verificationInput').value.trim();
  const savedCode = localStorage.getItem('verificationCode');
  
  if (!inputCode) {
    showAlert('인증번호를 입력해주세요.', 'error');
    return;
  }
  
  if (inputCode === savedCode) {
    const email = localStorage.getItem('registerEmail');
    closeVerificationModal();
    
    // 닉네임 입력 받기
    const nickname = prompt('닉네임을 입력해주세요:');
    if (!nickname) {
      showAlert('닉네임을 입력해주세요.', 'error');
      return;
    }
    
    // 회원가입 완료 처리
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userNickname', nickname);
    localStorage.removeItem('verificationCode');
    localStorage.removeItem('registerEmail');
    
    showAlert(`${nickname}님, 회원가입이 완료되었습니다!`, 'success');
    updateLoginUI();
  } else {
    showAlert('인증번호가 일치하지 않습니다.', 'error');
  }
}

function processLogin() {
  const emailLocal = document.getElementById('loginEmailLocal').value.trim();
  const emailDomain = document.getElementById('loginEmailDomain').value;
  const customDomain = document.getElementById('loginCustomDomain').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  
  if (!emailLocal || !password) {
    showAlert('이메일과 비밀번호를 입력해주세요.', 'error');
    return;
  }
  
  const domain = emailDomain === 'custom' ? customDomain : emailDomain;
  if (!domain) {
    showAlert('도메인을 입력해주세요.', 'error');
    return;
  }
  
  const fullEmail = `${emailLocal}@${domain}`;
  
  // 간단한 로그인 처리 (실제로는 서버에서 검증)
  if (password.length === 4) {
    closeLoginModal();

// app.js

const express = require("express");
const axios = require("axios");
const qs = require("qs");
require("dotenv").config();

const app = express();

app.get("/auth/kakao/callback", async (req, res) => {
  const { code } = req.query;

  try {
    // 1) 코드 → 토큰 교환
    const tokenRes = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify({
        grant_type: "authorization_code",
        client_id: "15b401d23c57ac2b92d30f3ea81d1ecb",
        redirect_uri: "http://localhost:3000/auth/kakao/callback",
        code,
        client_secret: "iGG2CfXb7gFBu7MOc2K4F649qNzDA6l9", // 선택
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const accessToken = tokenRes.data.access_token;

    // 2) 사용자 정보 요청
    const userRes = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const kakaoId = userRes.data.id;
    const nickname =
      userRes.data.kakao_account?.profile?.nickname ||
      userRes.data.properties?.nickname ||
      null;

    // 3) DB에 kakaoId 확인
    // - 없으면 신규 가입 (닉네임 입력 받기 or 기본 닉네임 저장)
    // - 있으면 바로 로그인 처리
    // 여기서는 테스트용으로 그냥 출력
    res.json({ kakaoId, nickname });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("카카오 로그인 실패");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000/auth/kakao/callback"));

const handleKakaoLogin = async () => {
  const res = await axios.get("/auth/kakao/callback?code=..."); // 실제 코드 사용
  const { kakaoId, nickname } = res.data;

  if (!nickname) {
    // 신규 사용자 → 닉네임 입력 화면 보여주기
    setShowNicknameForm(true);
    setNewUserId(kakaoId);
  } else {
    // 기존 사용자 → 로그인 처리
    loginUser(kakaoId, nickname);
  }
};

const submitNickname = async (nickname) => {
  await axios.post("/auth/save-nickname", { kakaoId: newUserId, nickname });
  loginUser(newUserId, nickname);
};
    
    // 닉네임 입력 받기
    const nickname = prompt('닉네임을 입력해주세요:');
    if (!nickname) {
      showAlert('닉네임을 입력해주세요.', 'error');
      return;
    }
    
    localStorage.setItem('userEmail', fullEmail);
    localStorage.setItem('userNickname', nickname);
    showAlert(`${nickname}님, 로그인되었습니다!`, 'success');
    updateLoginUI();
  } else {
    showAlert('비밀번호는 4자리여야 합니다.', 'error');
  }
}

function showAlert(message, type = 'info') {
  const alertModal = document.getElementById('alertModal');
  const alertIcon = document.getElementById('alertIcon');
  const alertMessage = document.getElementById('alertMessage');
  
  // 아이콘 설정
  switch(type) {
    case 'success':
      alertIcon.textContent = '✅';
      break;
    case 'error':
      alertIcon.textContent = '❌';
      break;
    default:
      alertIcon.textContent = 'ℹ️';
  }
  
  alertMessage.textContent = message;
  alertModal.classList.remove('hidden');
}

function closeAlert() {
  document.getElementById('alertModal').classList.add('hidden');
}



console.log('Script loaded successfully');