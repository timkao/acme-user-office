// make it reusable to other projects
function officeList(config) {
  var container = config.id
  var html = config.offices.reduce(function(memo, office){
    var temp = `
      <li class="list-group-item">${office.name}<br>
        <em>lat:</em>${office.lat}<br>
        <em>lat:</em>${office.lng}<br>
        <p><label class="label label-default">${office.users.length} User</label></p>
        <button class="btn btn-warning pull-right" data-id=${office.id}>Delete</button>
        <br clear="all">
      </li>
    `
    memo = memo + temp;
    return memo
  }, '')

  $(container + ' ul').append(html)

}
