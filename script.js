const groups = [
  {
    name: "Crypto Tools",
    urls: [
      "https://etherscan.io",
      "https://coinmarketcap.com",
      "https://uniswap.org"
    ]
  },
  {
    name: "News",
    urls: [
      "https://decrypt.co",
      "https://cointelegraph.com"
    ]
  }
];

function renderGroups() {
  const groupList = document.getElementById("groupList");
  groupList.innerHTML = "";
  groups.forEach(group => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${group.name}</strong>
      <ul>${group.urls.map(url => `<li><a href="${url}" target="_blank">${url}</a></li>`).join("")}</ul>
    `;
    groupList.appendChild(li);
  });
}

document.getElementById("openUrls").addEventListener("click", () => {
  groups.flatMap(g => g.urls).forEach(url => window.open(url, "_blank"));
});

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

renderGroups();
