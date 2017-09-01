// make it reusable for other projects
function officeForm(config) {
  var container = config.id
  var html = `
  <h4>Offices</h4>
  <div class="form-group">
    <label>Name</label>
    <input class="form-control" name="name">
  </div>
  `
  var $container = $(container)

  $container.append(html)
}

