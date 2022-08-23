// <---------------Player List Common Function---------------> //

function playerList(playerName, selectButton) {
  const addedPlayer = document.getElementById(playerName);
  const button = document.getElementById(selectButton);

  const li = document.createElement("li");
  li.innerText = addedPlayer.innerText;
  const ol = document.getElementById("player-list");
  const playerList = document.querySelector("#player-list").childNodes.length;

  if (playerList < 5) {
    ol.appendChild(li);
    button.setAttribute("disabled", true);
    button.style.backgroundColor = "gray";
  } else {
    alert("You cannot select more than five players.");
  }
}

// <---------------Player List Common Function---------------> //
