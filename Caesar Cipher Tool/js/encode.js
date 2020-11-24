$('#formEndode').submit(function(event) {
  var $messages = $( "textarea#messages" ).val();
  var $key = $( "input#key" ).val();
  console.log($messages);
  // console.log($key);
  // console.log(charCodeAt($key));
  
  return false;
});