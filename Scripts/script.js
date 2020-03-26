$(document).ready(function() {
  $("#pass").val(password(4));
  $("#button").click(function() {
     $("#pass").val(password(4));
  });
});

function password(length, special) {
  var iteration = 0;
  var password = "";
  var randomNumber;
  var oldRandomNumber;
  var num = Math.floor(Math.random()*90000) + 10000;
  var snum = num.toString();

  if(special == undefined){
      var special = false;
  }
  while(iteration < length){
    randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;

    if(!special){
      if ((randomNumber >=0) && (randomNumber <=96)) { continue; }
      if ((randomNumber >=123) && (randomNumber <=126)) { continue; }
      if (randomNumber === oldRandomNumber) { continue; }
    }
    iteration++;
    password += String.fromCharCode(randomNumber);
    oldRandomNumber = randomNumber;
  }
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  var password = password.toLowerCase();
  return password.capitalize()+snum;
}
