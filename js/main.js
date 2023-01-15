// var agentList = document.querySelector('#agent-list');
// function getAgentData(agent) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://valorant-api.com/v1/agents');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr.response);
//     var agents = xhr.response;
//   });
//   xhr.send();
// }

// getAgentData(agentList);

// function renderAgentList(entry) {
//   var divAgentContainer = document.createElement('div');
//   divAgentContainer.setAttribute('class', 'agent-container container-background');

//   var divRow = document.createElement('div');
//   divRow.setAttribute('class', 'row wrap');
//   divAgentContainer.appendChild(divRow);

//   var divColumnHalf = document.createElement('column-half');
//   divColumnHalf.setAttribute('class', 'column-half');
//   divRow.appendChild(divColumnHalf);

//   var agentImage = document.createElement('img');
//   agentImage.setAttribute('src', 'images/astra-dummy-data.jpeg');
//   divColumnHalf.appendChild(agentImage);

//   var divAgentName = document.createElement('div');
//   divAgentName.setAttribute('class', 'column-half row wrap space-between');
//   divColumnHalf.appendChild(divAgentName);

//   var headAgentName = document.createElement('h1');
//   headAgentName.setAttribute('class', 'content-margin agents-list-margin');
//   headAgentName.textContent = 'Astra';
//   divAgentName.appendChild(headAgentName);

//   var headAgentRole = document.createElement('h1');
//   headAgentRole.setAttribute('class', 'content-margin');
//   headAgentRole.textContent = '//Role: Controller';
//   divAgentName.appendChild(headAgentRole);

//   var divBiography = document.createElement('div');
//   divBiography.setAttribute('class', 'row wrap');
//   headAgentRole.appendChild(divBiography);

//   var headBiography = document.createElement('h2');
//   headBiography.setAttribute('class', 'no-margin agents-list-margin');
//   divBiography.appendChild(headBiography);

//   var paraBiography = document.createElement('p');
//   paraBiography.setAttribute('class', 'no-margin agents-list-margin');
//   divBiography.appendChild(paraBiography);

//   var divFirstAbility = document.createElement('div');
//   divFirstAbility.setAttribute('class', 'column-half content-margin');
//   divRow.appendChild(divFirstAbility);

//   var rowFirstAbility = document.createElement('div');
//   divFirstAbility.setAttibute('class', 'row');
//   divFirstAbility.appendChild(rowFirstAbility);

//   var colThirdFirst = document.createElement('div');
//   colThirdFirst.setAttribute('class', 'col-third');
//   rowFirstAbility.appendChild(colThirdFirst);

//   var imageFirstAbility = document.createElement('img');
//   imageFirstAbility.setAttribute('src', 'images/valorant-logo-ajax-project.png');
//   imageFirstAbility.setAttribute('class', 'nav-bar-logo');
//   colThirdFirst.appendChild(imageFirstAbility);

//   // eslint-disable-next-line no-unused-vars
//   var colTwoThirdsFirst = document.createElement('div');

// }
