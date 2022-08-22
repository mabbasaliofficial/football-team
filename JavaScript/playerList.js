document.getElementById("select-messi").addEventListener("click", function () {
  const playerId = document.getElementById("messi");
  document.getElementById("select-messi").disabled = true;
  document.getElementById("select-messi").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
  } else {
    alert("There is no limit");
  }
});

/* ---------------------------------------------------------
------------------------------------------------------------ */
document.getElementById("select-neymar").addEventListener("click", function () {
  const playerId = document.getElementById("neymar");
  document.getElementById("select-neymar").disabled = true;
  document.getElementById("select-neymar").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
  } else {
    alert("There is no limit");
  }
});
/* ---------------------------------------------------------
------------------------------------------------------------ */
document.getElementById("select-mbappe").addEventListener("click", function () {
  const playerId = document.getElementById("mbappe");
  document.getElementById("select-mbappe").disabled = true;
  document.getElementById("select-mbappe").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
  } else {
    alert("There is no limit");
  }
});
/* -----------------------------------------------------------
-------------------------------------------------------------- */
document.getElementById("select-machado").addEventListener("click", function () {
  const playerId = document.getElementById("machado");
  document.getElementById("select-machado").disabled = true;
  document.getElementById("select-machado").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
  } else {
    alert("There is no limit");
  }
});
/* -------------------------------------------------------------
---------------------------------------------------------------- */
document.getElementById("select-ramos").addEventListener("click", function () {
  const playerId = document.getElementById("ramos");
  document.getElementById("select-ramos").disabled = true;
  document.getElementById("select-ramos").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
  } else {
    alert("There is no limit");
  }
});
/* ---------------------------------------------------------
------------------------------------------------------------ */
document.getElementById("select-sanches").addEventListener("click", function () {
  const playerId = document.getElementById("sanches");
  document.getElementById("select-sanches").disabled = true;
  document.getElementById("select-sanches").style.backgroundColor = "gray";

  const li = document.createElement("li");
  li.innerText = playerId.innerText;
  const ol = document.getElementById("player-list");

  const playerList = document.querySelector("#player-list").childNodes.length;
  if (playerList < 5) {
    ol.appendChild(li);
  } else {
    alert("There is no limit");
  }
});
/*
---------------------------------------------------
---------------------------------------------------
 */

// const playerNumber = parseInt(addedPlayer);
// document.getElementById("player-cost").addEventListener("click", function () {
//   const addedPlayer = document.querySelector("#player-list").childNodes.length;

//   const playerFee = document.getElementById("player-fee");
//   const tolalFeeString = playerFee.value;
//   const totalFeeNumber = parseInt(tolalFeeString);
//   const totalFee = totalFeeNumber * addedPlayer;

//   const playerExpensesElement = document.getElementById("player-expenses");
//   // const playerExpensesText = playerExpensesElement.innerText;
//   // playerExpensesElement.innerText = totalFee;
//   playerExpensesElement.innerText = totalFee;
// });

// document.getElementById('btn-total').addEventListener('click', function(){
//     const playerExpensesElement = document.getElementById("player-expenses");
//     const playerFeeString = playerExpensesElement.innerText;
//     const playerFee = parseInt(playerFeeString);

//     const managerFeeElement = document.getElementById("manager-fee");
//     const managerFeeString = managerFeeElement.value;
//     const managerFee = parseInt(managerFeeString);

//     const coachFeeElement = document.getElementById('coach-fee');
//     const coachFeeString = coachFeeElement.value;
//     const coachFee = parseInt(coachFeeString);

//     const totalFeeElement = document.getElementById("total");
//     const total = playerFee + managerFee + coachFee;
//     totalFeeElement.innerText = total;
// })
