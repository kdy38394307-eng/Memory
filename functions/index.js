const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const axios = require("axios");
const qs = require("qs");

admin.initializeApp();
const db = admin.firestore();

const app = express();

// 카카오 로그인 콜백
app.get("/auth/kakao/callback", async (req, res) => {
  const {code} = req.query;

  try {
    // 1) 토큰 요청
    const tokenRes = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        qs.stringify({
          grant_type: "authorization_code",
          client_id: "15b401d23c57ac2b92d30f3ea81d1ecb",
          redirect_uri: "https://memory-21fb7.web.app/auth/kakao/callback",
          code,
        }),
        {headers: {"Content-Type": "application/x-www-form-urlencoded"}},
    );

    const accessToken = tokenRes.data.access_token;

    // 2) 유저 정보 가져오기
    const userRes = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {Authorization: `Bearer ${accessToken}`},
    });

    const kakaoId = String(userRes.data.id);
    const nickname =
      (userRes.data.kakao_account &&
        userRes.data.kakao_account.profile &&
        userRes.data.kakao_account.profile.nickname) ||
      (userRes.data.properties && userRes.data.properties.nickname) ||
      "새사용자";

    // 3) Firestore에 저장
    await db.collection("users").doc(kakaoId).set(
        {nickname, createdAt: new Date()},
        {merge: true},
    );

    res.send(`로그인 성공! 환영합니다, ${nickname} 님`);
  } catch (err) {
    console.error((err.response && err.response.data) || err.message);
    res.status(500).send("카카오 로그인 실패");
  }
});

// Firebase Function export
exports.api = functions.https.onRequest(app);


