// make it reusable for other projects
function officeForm(config) {
  var container = config.id
  var html = `
  <h4>Offices</h4>
  <div class="form-group">
    <label>Name</label>
    <input id="pac-input" type="text" placeholder="Enter a location" class="form-control" autocomplete="off" name="name">
  </div>
  `
  var $container = $(container)

  $container.on('change', 'input', function(){
    console.log($(this).val())
  })

  $container.append(html)

}

