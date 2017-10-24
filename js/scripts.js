$(function(){
  $('.factorial').submit(function(event){
    event.preventDefault();
    var forwards = $('input').val().split("");
    var backwards = []
    for (var i = forwards.length - 1; i >= 0; i--) {
      var letter = forwards[i];
      backwards.push(letter);
    };
    forwards = forwards.join("");
    backwards = backwards.join("");
    new
    if (forwards === backwards) {
      alert("This is a palindrome!");
    } else {
      alert("This is NOT a palindrome")
    };
  });
});
