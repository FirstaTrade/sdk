const alphaData = [
  {
    title: "Hidden Airdrop: LayerZero Partner",
    author: "0xResearcher",
    tags: ["Airdrop", "Layer2", "Early"],
    summary: "Early interaction path that may qualify for upcoming snapshot."
  },
  {
    title: "DeFi Yield Loop Strategy",
    author: "YieldMaster",
    tags: ["DeFi", "Yield", "Strategy"],
    summary: "Low-risk looping strategy for stable yields."
  },
  {
    title: "Early Narrative: AI x DePIN",
    author: "NarrativeDAO",
    tags: ["Narrative", "AI", "DePIN"],
    summary: "Emerging sector showing early on-chain activity."
  }
];

const container = document.getElementById("alphaContainer");

alphaData.forEach(alpha => {
  const card = document.createElement("div");
  card.className = "alpha-card";

  card.innerHTML = `
    <h3>${alpha.title}</h3>
    <p><strong>By:</strong> ${alpha.author}</p>
    <p>${alpha.summary}</p>
    <div>
      ${alpha.tags.map(tag => `<span class="alpha-tag">${tag}</span>`).join("")}
    </div>
  `;

  container.appendChild(card);
});

document.getElementById("connectBtn").addEventListener("click", () => {
  alert("Firsta coming soon 🚀 Join the waitlist!");
});
