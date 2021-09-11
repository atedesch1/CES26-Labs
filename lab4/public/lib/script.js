$(document).ready(() => {
  $('#button').click(() => {
    $.ajax({
      url: '/users.json',
      method: 'GET',
    }).done(function (data) {
      $('#display').text(JSON.stringify(data))
    })
  })
})
