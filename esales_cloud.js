function fetch()
{
  var clusterId = $('#cluster-id').val();
  var password = $('#password').val();
  $.get({
    url: `https://${clusterId}:${password}@cirrus.esales.apptus.com:35000/accounts/${clusterId}/cluster/https`
    success: (data) =>
    {
      console.log(data);
    }
  })
}

$(document).ready(function() {
    console.log( "ready!" );
    $('#generate-links').click(function() {
      console.log("Handler for .click() called.");
      fetch();
    });
});
