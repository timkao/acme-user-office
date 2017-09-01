// make it reusable to other projects
function usersList(config) {
  var container = config.id

  var officesHtml = config.offices.reduce(function(memo, office){
    var temp = `
      <option value=${office.id}>${office.name}</option>
    `
    memo = memo + temp
    return memo
  },'<option value>--none--</option>')

  var html = config.users.reduce(function(memo, user){
    var temp = `
      <li class="list-group-item">${user.name}
      <select class="form-control" data-user-id=${user.id}>${officesHtml}</select>
      <div class="form-group">
        <button class="btn btn-warning" data-id=${user.id}>Remove</button>
      </div>
      </li>
    `
    memo = memo + temp;
    return memo
  }, '')

  $(container + ' ul').append(html)
  config.users.forEach(function(user){
    if (user.office) {
      $(`select[data-user-id=${user.id}] option[value=${user.office.id}]`).attr('selected', true)
    }
  })
}

