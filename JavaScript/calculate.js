document.getElementById("player-cost").addEventListener("click", function () {
  const addedPlayer = document.querySelector("#player-list").childNodes.length;

  const playerFee = document.getElementById("player-fee");
  const tolalFeeString = playerFee.value;
  const totalFeeNumber = parseInt(tolalFeeString);
  const totalFee = totalFeeNumber * addedPlayer;

  const playerExpensesElement = document.getElementById("player-expenses");
  // const playerExpensesText = playerExpensesElement.innerText;
  // playerExpensesElement.innerText = totalFee;
  playerExpensesElement.innerText = totalFee;
});

document.getElementById("btn-total").addEventListener("click", function () {
  const playerExpensesElement = document.getElementById("player-expenses");
  const playerFeeString = playerExpensesElement.innerText;
  const playerFee = parseInt(playerFeeString);

  const managerFeeElement = document.getElementById("manager-fee");
  const managerFeeString = managerFeeElement.value;
  const managerFee = parseInt(managerFeeString);

  const coachFeeElement = document.getElementById("coach-fee");
  const coachFeeString = coachFeeElement.value;
  const coachFee = parseInt(coachFeeString);

  const totalFeeElement = document.getElementById("total");
  const total = playerFee + managerFee + coachFee;
  totalFeeElement.innerText = total;
});
