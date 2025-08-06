const wordList = [
  { english: "apple", japanese: "りんご", choices: ["りんご", "バナナ", "ぶどう", "みかん"] },
  { english: "run", japanese: "走る", choices: ["走る", "飛ぶ", "泳ぐ", "歩く"] },
  { english: "dog", japanese: "犬", choices: ["猫", "犬", "鳥", "魚"] },
  { english: "book", japanese: "本", choices: ["本", "机", "鉛筆", "紙"] }
];

let current = 0;

const questionDiv = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const feedbackDiv = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  const word = wordList[current];
  questionDiv.textContent = `「${word.english}」の意味は？`;
  choicesDiv.innerHTML = "";
  feedbackDiv.textContent = "";

  word.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      if (choice === word.japanese) {
        feedbackDiv.textContent = "✅ 正解！";
        feedbackDiv.style.color = "green";
      } else {
        feedbackDiv.textContent = "❌ 不正解...";
        feedbackDiv.style.color = "red";
      }
    };
    choicesDiv.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  current++;
  if (current >= wordList.length) {
    current = 0;
    alert("お疲れさまでした！最初からやり直します。");
  }
  showQuestion();
};

showQuestion();
