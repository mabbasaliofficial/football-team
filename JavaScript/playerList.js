document.getElementById("select-messi").addEventListener("click", function () {
  const playerId = document.getElementById("messi");

  const button = document.getElementById("select-messi");

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
    button.disabled = true;
    button.style.backgroundColor = "gray";
  } else {
    alert("There is no limit");
    button.removeAttribute("disabled");
    button.style.backgroundColor = "blue";
  }
});

/* ---------------------------------------------------------
------------------------------------------------------------ */
document.getElementById("select-neymar").addEventListener("click", function () {
  const playerId = document.getElementById("neymar");

const button = document.getElementById("select-neymar");

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
    button.disabled = true;
    button.style.backgroundColor = "gray";
  } else {
    alert("There is no limit");
    button.removeAttribute("disabled");
    button.style.backgroundColor = "blue";
  }
});
/* ---------------------------------------------------------
------------------------------------------------------------ */
document.getElementById("select-mbappe").addEventListener("click", function () {
  const playerId = document.getElementById("mbappe");

const button = document.getElementById("select-mbappe");

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
    button.disabled = true;
    button.style.backgroundColor = "gray";
  } else {
    alert("There is no limit");
    button.removeAttribute("disabled");
    button.style.backgroundColor = "blue";
  }
});
/* -----------------------------------------------------------
-------------------------------------------------------------- */
document.getElementById("select-machado").addEventListener("click", function () {
  const playerId = document.getElementById("machado");

const button = document.getElementById("select-machado");

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
    button.disabled = true;
    button.style.backgroundColor = "gray";
  } else {
    alert("There is no limit");
    button.removeAttribute("disabled");
    button.style.backgroundColor = "blue";
  }
});
/* -------------------------------------------------------------
---------------------------------------------------------------- */
document.getElementById("select-ramos").addEventListener("click", function () {
  const playerId = document.getElementById("ramos");


const button = document.getElementById("select-ramos");

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
    button.disabled = true;
    button.style.backgroundColor = "gray";
  } else {
    alert("There is no limit");
    button.removeAttribute("disabled");
    button.style.backgroundColor = "blue";
  }
});
/* ---------------------------------------------------------
------------------------------------------------------------ */
document.getElementById("select-sanches").addEventListener("click", function () {
  const playerId = document.getElementById("sanches");

const button = document.getElementById("select-sanches");

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
    button.disabled = true;
    button.style.backgroundColor = "gray";
  } else {
    alert("There is no limit");
    button.removeAttribute("disabled");
    button.style.backgroundColor = "blue";
  }
});
/*
---------------------------------------------------
---------------------------------------------------
 */
