// var agentList = document.querySelector('#agent-list');
// function getAgentData(agent) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://valorant-api.com/v1/agents');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr.response);
//     console.log(data.displayName);
//   });
//   xhr.send();
// }

// getAgentData(agentList);

var divAgentsList = document.querySelector('.agents-list');

function renderAgentList(entry) {
  var divAgentContainer = document.createElement('div');
  divAgentContainer.setAttribute('class', 'agent-container container-background');

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row wrap');
  divAgentContainer.appendChild(divRow);

  var divColumnHalf = document.createElement('div');
  divColumnHalf.setAttribute('class', 'column-half');
  divRow.appendChild(divColumnHalf);

  var agentImage = document.createElement('img');
  agentImage.setAttribute('src', 'images/astra-dummy-data.jpeg');
  divColumnHalf.appendChild(agentImage);

  var divAgentName = document.createElement('div');
  divAgentName.setAttribute('class', 'column-half row wrap space-between');
  divRow.appendChild(divAgentName);

  var headAgentName = document.createElement('h1');
  headAgentName.setAttribute('class', 'content-margin agents-list-margin');
  headAgentName.textContent = 'Astra';
  divAgentName.appendChild(headAgentName);

  var headAgentRole = document.createElement('h1');
  headAgentRole.setAttribute('class', 'content-margin');
  headAgentRole.textContent = '//Role: Controller';
  divAgentName.appendChild(headAgentRole);

  var divBiography = document.createElement('div');
  divBiography.setAttribute('class', 'row wrap');
  divAgentName.appendChild(divBiography);

  var headBiography = document.createElement('h2');
  headBiography.setAttribute('class', 'no-margin agents-list-margin');
  headBiography.textContent = '//Biography';
  divBiography.appendChild(headBiography);

  var paraBiography = document.createElement('p');
  paraBiography.setAttribute('class', 'no-margin agents-list-margin');
  paraBiography.textContent = "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.";
  divBiography.appendChild(paraBiography);

  var divFirstAbility = document.createElement('div');
  divFirstAbility.setAttribute('class', 'column-half content-margin');
  divRow.appendChild(divFirstAbility);

  var rowFirstAbility = document.createElement('div');
  rowFirstAbility.setAttribute('class', 'row');
  divFirstAbility.appendChild(rowFirstAbility);

  var colThirdFirst = document.createElement('div');
  colThirdFirst.setAttribute('class', 'col-third');
  rowFirstAbility.appendChild(colThirdFirst);

  var imageFirstAbility = document.createElement('img');
  imageFirstAbility.setAttribute('src', 'images/valorant-logo-ajax-project.png');
  imageFirstAbility.setAttribute('class', 'nav-bar-logo');
  colThirdFirst.appendChild(imageFirstAbility);

  var colTwoThirdsFirst = document.createElement('div');
  colTwoThirdsFirst.setAttribute('class', 'col-two-thirds');
  rowFirstAbility.appendChild(colTwoThirdsFirst);

  var abilityQ = document.createElement('h4');
  abilityQ.setAttribute('class', 'agents-list-margin');
  abilityQ.textContent = 'Q - NOVA PULSE';
  colTwoThirdsFirst.appendChild(abilityQ);

  var abilityParagraphQ = document.createElement('p');
  abilityParagraphQ.setAttribute('class', 'agents-list-margin');
  abilityParagraphQ.textContent = 'Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.';
  colTwoThirdsFirst.appendChild(abilityParagraphQ);

  var divSecondAbility = document.createElement('div');
  divSecondAbility.setAttribute('class', 'column-half');
  divRow.appendChild(divSecondAbility);

  var rowSecondAbility = document.createElement('div');
  rowSecondAbility.setAttribute('class', 'row');
  divSecondAbility.appendChild(rowSecondAbility);

  var colThirdSecond = document.createElement('div');
  colThirdSecond.setAttribute('class', 'col-third');
  rowSecondAbility.appendChild(colThirdSecond);

  var imageSecondAbility = document.createElement('img');
  imageSecondAbility.setAttribute('src', 'images/valorant-logo-ajax-project.png');
  imageSecondAbility.setAttribute('class', 'nav-bar-logo');
  colThirdSecond.appendChild(imageSecondAbility);

  var colTwoThirdsSecond = document.createElement('div');
  colTwoThirdsSecond.setAttribute('class', 'col-two-thirds');
  rowSecondAbility.appendChild(colTwoThirdsSecond);

  var abilityE = document.createElement('h4');
  abilityE.setAttribute('class', 'agents-list-margin');
  abilityE.textContent = 'E - NEBULA';
  colTwoThirdsSecond.appendChild(abilityE);

  var abilityParagraphE = document.createElement('p');
  abilityParagraphE.setAttribute('class', 'agents-list-margin');
  abilityParagraphE.textContent = 'Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning.';
  colTwoThirdsSecond.appendChild(abilityParagraphE);

  var divThirdAbility = document.createElement('div');
  divThirdAbility.setAttribute('class', 'column-half');
  divRow.appendChild(divThirdAbility);

  var rowThirdAbility = document.createElement('div');
  rowThirdAbility.setAttribute('class', 'row');
  divThirdAbility.appendChild(rowThirdAbility);

  var colThirdThird = document.createElement('div');
  colThirdThird.setAttribute('class', 'col-third');
  rowThirdAbility.appendChild(colThirdThird);

  var imageThirdAbility = document.createElement('img');
  imageThirdAbility.setAttribute('src', 'images/valorant-logo-ajax-project.png');
  imageThirdAbility.setAttribute('class', 'nav-bar-logo');
  colThirdThird.appendChild(imageThirdAbility);

  var colTwoThirdsThird = document.createElement('div');
  colTwoThirdsThird.setAttribute('class', 'col-two-thirds');
  rowThirdAbility.appendChild(colTwoThirdsThird);

  var abilityC = document.createElement('h4');
  abilityC.setAttribute('class', 'agents-list-margin');
  abilityC.textContent = 'C - GRAVITY WELL';
  colTwoThirdsThird.appendChild(abilityC);

  var abilityParagraphC = document.createElement('p');
  abilityParagraphC.setAttribute('class', 'agents-list-margin');
  abilityParagraphC.textContent = 'Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.';
  colTwoThirdsThird.appendChild(abilityParagraphC);

  var divFourthAbility = document.createElement('div');
  divFourthAbility.setAttribute('class', 'column-half');
  divRow.appendChild(divFourthAbility);

  var rowFourthAbility = document.createElement('div');
  rowFourthAbility.setAttribute('class', 'row');
  divFourthAbility.appendChild(rowFourthAbility);

  var colThirdFourth = document.createElement('div');
  colThirdFourth.setAttribute('class', 'col-third');
  rowFourthAbility.appendChild(colThirdFourth);

  var imageFourthAbility = document.createElement('img');
  imageFourthAbility.setAttribute('src', 'images/valorant-logo-ajax-project.png');
  imageFourthAbility.setAttribute('class', 'nav-bar-logo');
  colThirdFourth.appendChild(imageFourthAbility);

  var colTwoThirdsFourth = document.createElement('div');
  colTwoThirdsFourth.setAttribute('class', 'col-two-thirds');
  rowFourthAbility.appendChild(colTwoThirdsFourth);

  var abilityX = document.createElement('h4');
  abilityX.setAttribute('class', 'agents-list-margin');
  abilityX.textContent = 'X - ASTRAL FORM / COSMIC DIVIDE';
  colTwoThirdsFourth.appendChild(abilityX);

  var abilityParagraphX = document.createElement('p');
  abilityParagraphX.setAttribute('class', 'agents-list-margin');
  abilityParagraphX.textContent = 'ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.';
  colTwoThirdsFourth.appendChild(abilityParagraphX);

  divAgentsList.appendChild(divAgentContainer);

  return divAgentsList;
}

renderAgentList();
