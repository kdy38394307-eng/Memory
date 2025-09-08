const quotes = [
      "성공은 작은 노력이 반복될 때 이루어진다.",
      "오늘 걷지 않으면 내일은 뛰어야 한다.",
      "실패는 성공으로 가는 첫걸음이다.",
      "천 리 길도 한 걸음부터.",
      "행복은 습관이다. 그것을 몸에 지녀라."
    ];

    function newQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").innerText = quotes[randomIndex];
    }