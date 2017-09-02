$(function(){

  function initMap(){
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      var lat = place.geometry.location.lat()
      var lng = place.geometry.location.lng()
      var name = place.formatted_address

      $.post('/offices', {
        name,
        lat,
        lng
      })
      .then(result => {
        $('#user-list ul').empty()
        $('#office-list ul').empty()
        $('#user-list').unbind()
        $('#office-list').unbind()
        renderLists()
      })
    });
  }

  function renderUserForm(){
    userForm({
      id: '#user-form',
      addUser: function(obj){
        $.post('/users', obj)
        .then( result => {
          $('#user-list ul').empty()
          $('#user-list').unbind()
          renderUserList()
        })
      }
    })
  }

  function renderOfficeForm(){
    officeForm({
      id: '#office-form'
    })
  }

  function renderUserFormAndOfficeForm() {
    renderOfficeForm()
    renderUserForm()
  }

  function renderLists() {
    renderUserList()
    renderOfficeList()
  }

  function renderUserList() {
    $.get('/users')
    .then( ({users, offices}) => {
      usersList({
        id: '#user-list',
        users: users,
        offices: offices,
        removeUser: function(obj) {
          $.ajax({
            type: 'DELETE',
            url: `/users/${obj.id}`
          })
          .then( result => {
            $('#user-list ul').empty()
            $('#office-list ul').empty()
            $('#user-list').unbind()
            $('#office-list').unbind()
            renderLists()
          })
        },
        updateUser: function(obj){
          $.ajax({
            type: 'PUT',
            url: `/users/${obj.id}`,
            data: {name: obj.name}
          })
          .then( result => {
            $('#office-list ul').empty()
            $('#office-list').unbind()
            renderOfficeList()
          })
        }
      })
    })
  }


  function renderOfficeList() {
    $.get('/offices')
    .then( offices => {
      officeList({
        id: '#office-list',
        offices,
        removeOffice: function(obj){
          $.ajax({
            type: 'DELETE',
            url: `/offices/${obj.id}`
          })
          .then( result => {
            $('#user-list ul').empty()
            $('#office-list ul').empty()
            $('#user-list').unbind()
            $('#office-list').unbind()
            renderLists()
          })
        }
      })
    })
  }

  renderUserFormAndOfficeForm()
  renderLists()
  initMap()

})
