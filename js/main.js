var divAgentsList = document.querySelector('.agents-list');
var divMapsList = document.querySelector('.maps-list');
var loader = document.querySelector('.loader');

function getAgentData(agent) {
  loader.getElementsByClassName.display = 'block';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/agents');
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      loader.style.display = 'none';
      for (var i = 0; i < xhr.response.data.length; i++) {
        if (xhr.response.data[i].isPlayableCharacter === true) {
          renderAgentDetails(xhr.response.data[i]);
        }
      }
    } else {
      divAgentsList.innerHTML = '<h2>Failed to load data from the APi</h2>';
    }
  });
  xhr.send();
}

function getMapData(map) {
  loader.style.display = 'block';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/maps');
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      loader.style.display = 'none';
      for (var i = 0; i < xhr.response.data.length; i++) {
        if (xhr.response.data[i].displayName !== 'The Range') {
          renderMapDetails(xhr.response.data[i]);
        }
      }
    } else {
      divMapsList.innerHTML = '<h2>Failed to load data from API</h2>';
    }
  });
  xhr.send();
}

getAgentData();
getMapData();

function renderAgentDetails(agentData) {
  var divAgentContainer = document.createElement('div');
  divAgentContainer.setAttribute('class', 'agent-container container-background');

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row wrap');
  divAgentContainer.appendChild(divRow);

  var divColumnHalf = document.createElement('div');
  divColumnHalf.setAttribute('class', 'column-half');
  divRow.appendChild(divColumnHalf);

  var agentImage = document.createElement('img');
  agentImage.setAttribute('src', agentData.bustPortrait);
  divColumnHalf.appendChild(agentImage);

  var divAgentName = document.createElement('div');
  divAgentName.setAttribute('class', 'column-half');
  divRow.appendChild(divAgentName);

  var headAgentName = document.createElement('h1');
  headAgentName.setAttribute('class', 'content-margin agents-list-margin');
  headAgentName.textContent = 'Agent Name: ' + agentData.displayName;
  divAgentName.appendChild(headAgentName);

  var divAgentRole = document.createElement('div');
  divAgentName.appendChild(divAgentRole);

  var headAgentRole = document.createElement('h1');
  headAgentRole.setAttribute('class', 'content-margin agents-list-margin');
  headAgentRole.textContent = '//Role: ' + agentData.role.displayName;
  divAgentName.appendChild(headAgentRole);

  var paraAgentRole = document.createElement('p');
  paraAgentRole.setAttribute('class', 'agents-list-margin font-size-agent-info');
  paraAgentRole.textContent = agentData.role.description;
  divAgentName.appendChild(paraAgentRole);

  var divBiography = document.createElement('div');
  divAgentName.appendChild(divBiography);

  var headBiography = document.createElement('h1');
  headBiography.setAttribute('class', ' agents-list-margin');
  headBiography.textContent = '//Biography';
  divBiography.appendChild(headBiography);

  var paraBiography = document.createElement('p');
  paraBiography.setAttribute('class', 'no-margin agents-list-margin font-size-agent-info');
  paraBiography.textContent = agentData.description;
  divBiography.appendChild(paraBiography);

  var divFirstAbility = document.createElement('div');
  divFirstAbility.setAttribute('class', 'column-half content-margin ability-column-padding');
  divRow.appendChild(divFirstAbility);

  var rowFirstAbility = document.createElement('div');
  rowFirstAbility.setAttribute('class', 'row');
  divFirstAbility.appendChild(rowFirstAbility);

  var colThirdFirst = document.createElement('div');
  colThirdFirst.setAttribute('class', 'col-third');
  rowFirstAbility.appendChild(colThirdFirst);

  var imageFirstAbility = document.createElement('img');
  imageFirstAbility.setAttribute('src', agentData.abilities[0].displayIcon);
  imageFirstAbility.setAttribute('class', 'nav-bar-logo ability-image-background');
  colThirdFirst.appendChild(imageFirstAbility);

  var colTwoThirdsFirst = document.createElement('div');
  colTwoThirdsFirst.setAttribute('class', 'col-two-thirds');
  rowFirstAbility.appendChild(colTwoThirdsFirst);

  var abilityQ = document.createElement('h2');
  abilityQ.setAttribute('class', 'agents-list-margin');
  abilityQ.textContent = 'Q - ' + agentData.abilities[0].displayName;
  colTwoThirdsFirst.appendChild(abilityQ);

  var abilityParagraphQ = document.createElement('p');
  abilityParagraphQ.setAttribute('class', 'agents-list-margin font-size-agent-ability');
  abilityParagraphQ.textContent = agentData.abilities[0].description;
  colTwoThirdsFirst.appendChild(abilityParagraphQ);

  var divSecondAbility = document.createElement('div');
  divSecondAbility.setAttribute('class', 'column-half content-margin ability-column-padding');
  divRow.appendChild(divSecondAbility);

  var rowSecondAbility = document.createElement('div');
  rowSecondAbility.setAttribute('class', 'row');
  divSecondAbility.appendChild(rowSecondAbility);

  var colThirdSecond = document.createElement('div');
  colThirdSecond.setAttribute('class', 'col-third');
  rowSecondAbility.appendChild(colThirdSecond);

  var imageSecondAbility = document.createElement('img');
  imageSecondAbility.setAttribute('src', agentData.abilities[1].displayIcon);
  imageSecondAbility.setAttribute('class', 'nav-bar-logo ability-image-background');
  colThirdSecond.appendChild(imageSecondAbility);

  var colTwoThirdsSecond = document.createElement('div');
  colTwoThirdsSecond.setAttribute('class', 'col-two-thirds');
  rowSecondAbility.appendChild(colTwoThirdsSecond);

  var abilityE = document.createElement('h2');
  abilityE.setAttribute('class', 'agents-list-margin');
  abilityE.textContent = 'E - ' + agentData.abilities[1].displayName;
  colTwoThirdsSecond.appendChild(abilityE);

  var abilityParagraphE = document.createElement('p');
  abilityParagraphE.setAttribute('class', 'agents-list-margin font-size-agent-ability');
  abilityParagraphE.textContent = agentData.abilities[1].description;
  colTwoThirdsSecond.appendChild(abilityParagraphE);

  var divThirdAbility = document.createElement('div');
  divThirdAbility.setAttribute('class', 'column-half ability-column-padding');
  divRow.appendChild(divThirdAbility);

  var rowThirdAbility = document.createElement('div');
  rowThirdAbility.setAttribute('class', 'row');
  divThirdAbility.appendChild(rowThirdAbility);

  var colThirdThird = document.createElement('div');
  colThirdThird.setAttribute('class', 'col-third');
  rowThirdAbility.appendChild(colThirdThird);

  var imageThirdAbility = document.createElement('img');
  imageThirdAbility.setAttribute('src', agentData.abilities[2].displayIcon);
  imageThirdAbility.setAttribute('class', 'nav-bar-logo ability-image-background');
  colThirdThird.appendChild(imageThirdAbility);

  var colTwoThirdsThird = document.createElement('div');
  colTwoThirdsThird.setAttribute('class', 'col-two-thirds');
  rowThirdAbility.appendChild(colTwoThirdsThird);

  var abilityC = document.createElement('h2');
  abilityC.setAttribute('class', 'agents-list-margin');
  abilityC.textContent = 'C - ' + agentData.abilities[2].displayName;
  colTwoThirdsThird.appendChild(abilityC);

  var abilityParagraphC = document.createElement('p');
  abilityParagraphC.setAttribute('class', 'agents-list-margin font-size-agent-ability');
  abilityParagraphC.textContent = agentData.abilities[2].description;
  colTwoThirdsThird.appendChild(abilityParagraphC);

  var divFourthAbility = document.createElement('div');
  divFourthAbility.setAttribute('class', 'column-half ability-column-padding');
  divRow.appendChild(divFourthAbility);

  var rowFourthAbility = document.createElement('div');
  rowFourthAbility.setAttribute('class', 'row');
  divFourthAbility.appendChild(rowFourthAbility);

  var colThirdFourth = document.createElement('div');
  colThirdFourth.setAttribute('class', 'col-third');
  rowFourthAbility.appendChild(colThirdFourth);

  var imageFourthAbility = document.createElement('img');
  imageFourthAbility.setAttribute('src', agentData.abilities[3].displayIcon);
  imageFourthAbility.setAttribute('class', 'nav-bar-logo ability-image-background');
  colThirdFourth.appendChild(imageFourthAbility);

  var colTwoThirdsFourth = document.createElement('div');
  colTwoThirdsFourth.setAttribute('class', 'col-two-thirds');
  rowFourthAbility.appendChild(colTwoThirdsFourth);

  var abilityX = document.createElement('h2');
  abilityX.setAttribute('class', 'agents-list-margin');
  abilityX.textContent = 'X - ' + agentData.abilities[3].displayName;
  colTwoThirdsFourth.appendChild(abilityX);

  var abilityParagraphX = document.createElement('p');
  abilityParagraphX.setAttribute('class', 'agents-list-margin font-size-agent-ability');
  abilityParagraphX.textContent = agentData.abilities[3].description;
  colTwoThirdsFourth.appendChild(abilityParagraphX);

  divAgentsList.appendChild(divAgentContainer);

  return divAgentsList;
}

function renderMapDetails(mapData) {
  var divMapContainer = document.createElement('div');
  divMapContainer.setAttribute('class', 'maps-container container-background');

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row wrap');
  divMapContainer.appendChild(divRow);

  var columnHalfOne = document.createElement('div');
  columnHalfOne.setAttribute('class', 'column-half');
  divRow.appendChild(columnHalfOne);

  var mapImage = document.createElement('img');
  mapImage.setAttribute('src', mapData.splash);
  columnHalfOne.appendChild(mapImage);

  var columnHalfTwo = document.createElement('div');
  columnHalfTwo.setAttribute('class', 'column-half');
  divRow.appendChild(columnHalfTwo);

  var favoriteAgentsRow = document.createElement('div');
  favoriteAgentsRow.setAttribute('class', 'row');
  columnHalfTwo.appendChild(favoriteAgentsRow);

  var calloutsColumn = document.createElement('div');
  calloutsColumn.setAttribute('class', 'column-full');
  divRow.appendChild(calloutsColumn);

  var mapName = document.createElement('h1');
  mapName.setAttribute('class', 'agents-list-margin');
  mapName.textContent = 'Map Name: ' + mapData.displayName;
  calloutsColumn.appendChild(mapName);

  var calloutsHead = document.createElement('h1');
  calloutsHead.setAttribute('class', 'agents-list-margin');
  calloutsHead.textContent = 'All Map Callouts: ';
  calloutsColumn.appendChild(calloutsHead);

  var calloutsPara = document.createElement('p');
  calloutsPara.setAttribute('class', 'agents-list-margin');
  var calloutsArray = [];
  for (var i = 0; i < mapData.callouts.length; i++) {
    calloutsArray.push(mapData.callouts[i].regionName);
  }
  var allCallouts = calloutsArray.join(', ');
  calloutsPara.textContent = allCallouts;
  calloutsColumn.appendChild(calloutsPara);

  divMapsList.appendChild(divMapContainer);

  return divMapContainer;
}

document.addEventListener('DOMContentLoaded', function (event) {
  viewSwap(data.view);
});

function viewSwap(viewName) {
  var divMapsList = document.querySelector('.maps-list');
  if (viewName === 'maps-list') {
    divAgentsList.classList.add('hidden');
    divMapsList.classList.remove('hidden');
    data.view = viewName;
  }
  if (viewName === 'agents-list') {
    divAgentsList.classList.remove('hidden');
    divMapsList.classList.add('hidden');
    data.view = viewName;
  }
}

var agentsAnchor = document.querySelector('#agents-nav-bar');
agentsAnchor.addEventListener('click', handleAgentsAnchorClick);
function handleAgentsAnchorClick(event) {
  viewSwap('agents-list');
}

var mapsAnchor = document.querySelector('#maps-nav-bar');
mapsAnchor.addEventListener('click', handleMapsAnchorClick);
function handleMapsAnchorClick(event) {
  viewSwap('maps-list');
}
