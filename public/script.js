document.addEventListener("DOMContentLoaded", () => {
  // 1) Kakao SDK 초기화
 if (!Kakao.isInitialized()) {
  Kakao.init("069c998a3ffec6b163249d03a52f2b51");
}
  console.log("Kakao SDK initialized:", Kakao.isInitialized());

  // 2) 버튼 이벤트
  const kakaoBtn = document.getElementById("kakaoLoginBtn");
  kakaoBtn.addEventListener("click", () => {
    Kakao.Auth.authorize({
      redirectUri: "https://memory-21fb7.web.app/auth/kakao/callback",
      scope: "profile_nickname",
      state: Math.random().toString(36).substring(2)
    });
  });
});

