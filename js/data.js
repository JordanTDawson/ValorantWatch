/* exported data */
window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  this.localStorage.setItem('agent-local-storage', dataJSON);
});

var data = {
  view: 'agents'
};

var previousDataJSON = localStorage.getItem('agent-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
