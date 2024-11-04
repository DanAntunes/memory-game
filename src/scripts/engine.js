const emojis = [
  "💀",
  "💀",
  "👽",
  "👽",
  "👾",
  "👾",
  "🤖",
  "🤖",
  "⚽",
  "⚽",
  "🎮",
  "🎮",
  "🕹️",
  "🕹️",
  "🔫",
  "🔫",
];
// biome-ignore lint/style/useConst: <explanation>
let openCards = [];

// biome-ignore lint/style/useConst: <explanation>
let shwffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i=0; i < emojis.length; i++){
  // biome-ignore lint/style/useConst: <explanation>
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shwffleEmojis[i];
  document.querySelector(".game").appendChild(box);
}