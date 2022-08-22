document.getElementById("select-messi").addEventListener("click", function () {
  const playerId = document.getElementById("messi");
  document.getElementById("select-messi").disabled = true;
  document.getElementById("select-messi").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");
  ol.appendChild(li);
});
document.getElementById("select-neymar").addEventListener("click", function () {
  const playerId = document.getElementById("neymar");
  document.getElementById("select-neymar").disabled = true;
  document.getElementById("select-neymar").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");
  ol.appendChild(li);
});
document.getElementById("select-mbappe").addEventListener("click", function () {
  const playerId = document.getElementById("mbappe");
  document.getElementById("select-mbappe").disabled = true;
  document.getElementById("select-mbappe").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");
  ol.appendChild(li);
});
document.getElementById("select-machado").addEventListener("click", function () {
  const playerId = document.getElementById("machado");
  document.getElementById("select-machado").disabled = true;
  document.getElementById("select-machado").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");
  ol.appendChild(li);
});
document.getElementById("select-ramos").addEventListener("click", function () {
  const playerId = document.getElementById("ramos");
  document.getElementById("select-ramos").disabled = true;
  document.getElementById("select-ramos").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");
  ol.appendChild(li);
});
document.getElementById("select-sanches").addEventListener("click", function () {
  const playerId = document.getElementById("sanches");
  document.getElementById("select-sanches").disabled = true;
  document.getElementById("select-sanches").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");
  ol.appendChild(li);
});
