$(document).ready(function() {
  // words for cycling through the typwriter
  var words = ['Awesome People', 'Brave', 'Agile', 'Intelligent', 'Product People'];

  // How often it outputs a character
  var delay = 100;

  var count = 0;



  function writeText() {
    // Code goes here
    function character(start, end, words) {
      return words[0].substring(start, end);
    }

    setTimeout(writeText, delay);
    $('.typewriter').append(character(count, count+1, words));
    count++;
   
  }

  // calls the first words element, 'Awesome People', and not the rest;
  writeText(words[0]); 








  /* BONUS

  function writeWords(words) {
    // Code goes here
  }

  writeWords(words);

  */


});


