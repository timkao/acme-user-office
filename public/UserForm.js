// make it reusable for other projects
function userForm(config) {
  var container = config.id
  var html = `
  <h4>Users</h4>
  <div class="form-group">
    <label>Name</label>
    <input class="form-control" name="name">
  </div>
  <div class="form-group">
    <button class="btn btn-primary">Save</button>
  </div>
  `
  var $container = $(container)

  $container.on('click', 'button', function(){
    console.log('save is working')
    config.addUser({
      name: $(container + ' input').val()
    })
  })

  $container.append(html)

}
