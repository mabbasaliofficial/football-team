document.getElementById("player-cost").addEventListener("click", function () {
  const addedPlayer = document.querySelector("#player-list").childNodes.length;
  const numberOfPlayer = parseFloat(addedPlayer);

  const playerFee = document.getElementById("player-fee");
  const tolalFeeString = playerFee.value;
  const totalFeeNumber = parseFloat(tolalFeeString);
  const totalFee = totalFeeNumber * numberOfPlayer;

  const playerExpensesElement = document.getElementById("player-expenses");
  playerExpensesElement.innerText = totalFee;
});

document.getElementById("btn-total").addEventListener("click", function () {
  const playerExpensesElement = document.getElementById("player-expenses");
  const playerFeeString = playerExpensesElement.innerText;
  const playerFee = parseFloat(playerFeeString);

  const managerFeeElement = document.getElementById("manager-fee");
  const managerFeeString = managerFeeElement.value;
  const managerFee = parseFloat(managerFeeString);

  const coachFeeElement = document.getElementById("coach-fee");
  const coachFeeString = coachFeeElement.value;
  const coachFee = parseFloat(coachFeeString);

  const totalFeeElement = document.getElementById("total");
  const total = playerFee + managerFee + coachFee;
  totalFeeElement.innerText = total;
});
