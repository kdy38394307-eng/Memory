const advices = [
  "노력한다고 다 성공하는 건 아니다. 운도 중요하다.",
  "어른이 되어도 인생이 명확해지지 않는다. 그냥 책임만 늘어난다.",
  "대부분의 사람들은 당신에게 관심이 없다. 그들도 자기 일로 바쁘다.",
  "완벽한 직장은 없다. 어디든 스트레스는 있다.",
  "돈이 전부는 아니지만, 돈 없으면 대부분의 문제가 해결되지 않는다.",
  "좋아하는 일을 직업으로 만들면 좋아하지 않게 될 수도 있다.",
  "인생은 공평하지 않다. 그냥 받아들이고 최선을 다하라.",
  "다른 사람의 SNS를 보며 비교하지 마라. 그건 하이라이트만 보는 거다.",
  "어릴 때 꿈꾸던 일을 못 하고 있어도 괜찮다. 현실적인 선택이다.",
  "열심히 일해도 승진이 안 될 수 있다. 정치도 중요하다.",
  "친구들이 결혼하고 아이를 가지면 만날 시간이 줄어든다.",
  "새해 계획의 90%는 2월에 포기된다. 그래도 세우는 게 낫다.",
  "직장에서 인정받으려면 실력보다 인간관계가 더 중요하다.",
  "운동을 시작하면 처음 한 달이 가장 힘들다. 그 다음도 힘들다.",
  "좋은 사람이라고 좋은 일만 생기는 건 아니다. 세상은 복잡하다.",
  "다이어트는 내일부터 시작하겠다고 말하는 순간 실패한다.",
  "어른이 되면 시간이 빨리 간다. 이건 착각이 아니다.",
  "완벽한 타이밍은 없다. 그냥 지금 하든지 나중에 하든지 둘 중 하나다.",
  "사람들은 변하지 않는다. 그냥 받아들이거나 떠나라.",
  "일과 삶의 균형은 이상이다. 현실은 일이 삶을 집어삼킨다.",
  "스마트폰을 보는 시간을 줄이려고 해도 잘 안 된다. 중독이다.",
  "다른 사람의 성공을 보며 질투하는 시간에 자기 일을 하라.",
  "건강이 없으면 아무것도 소용없다. 그래도 밤새워 일한다.",
  "인생에 정답은 없다. 그냥 선택과 그 결과가 있을 뿐이다.",
  "나이가 들수록 새로운 도전이 두려워진다. 이건 정상이다."
];

function showAdvice() {
  const randomAdvice = advices[Math.floor(Math.random() * advices.length)];
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `<strong>😑 현실적인 조언</strong><br><br>${randomAdvice}`;
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
  resultBox.innerHTML = '버튼을 클릭해서 현실적인 조언을 확인해보세요!';
  resultBox.className = 'result-box empty';
  
  updateVisitorCount();
});