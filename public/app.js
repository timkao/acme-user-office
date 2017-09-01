$(function(){

  function renderUserForm(){
    userForm({
      id: '#user-form'
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

  $.get('/users')
  .then( ({users, offices}) => {
    renderUserFormAndOfficeForm()
    console.log(offices)
    usersList({
      id: '#user-list',
      users,
      offices
    })
    officeList({
      id: '#office-list',
      offices
    })
  })
})
