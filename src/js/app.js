console.log('JS Loaded');
$(() => {
  let lifeScore = 5;
  // let currentScoreDislpayed = 0;
  let winCondition = 0;
  let interval;
  // const $currentScore = $('#currentScore');
  const $lives = $('#lives');
  // const $highScore = $('#hihghScore');
  const $playGame = $('#play');
  const $winCondition = $('#winCondition');

  const $subjectOptions = $('#subject-options');
  const $difficultyOptions = $('#difficulty-options');

  const $container = $('.ag-tetris');

  const $instructions = $('#instructions');

  const categories = {
    BBT: ['sheldon','leanord','spock','cheesecakefactory','howard','startrek','penny','koothrapoli','bernadette','physics','laundry','halonight','dumplings', 'brisket','nasa','stringtheory','darkmatter', 'comiccon','comicbook'],
    LOTR: ['arragon', 'gimli']
  };

  ////////////////////Selectors///////////////////////////
  let selectedDifficulty = '';
  let selectedSubject = '';
  $subjectOptions.on('change', () => {
    const value = $subjectOptions.val();
    selectedSubject = categories[value];
    switch (value) {
      case 'BBT':
      $('body').addClass('imageBBT');
      break;
      case 'LOTR':

      break;
      case 'CC':

      break;
      case 'EPL':

      break;
      case 'LOTR':

      break;
      case 'WDI':

      break;
    }
  });
  $difficultyOptions.on('change', () => {
    selectedDifficulty = $difficultyOptions.val();
    switch (selectedDifficulty) {
      case 'easy':
      $instructions.prepend('<h2>Instructions</h2><p> When a word falls to the bottom of the box you lose a life.<br><br>You need to guess 5 anagrams correctly to beat this game!<br><br>You have 5 lives...Enjoy!</p>');
      break;
      case 'medium':
      $instructions.append('<h2>Instructions</h2><p> When a word falls to the bottom of the box you lose a life.<br><br>You need to guess 7 anagrams correctly to beat this game!<br><br>You have 5 lives...Enjoy!</p>');
      break;
      case 'hard':
      $instructions.append('<h2>Instructions</h2><p> When a word falls to the bottom of the box you lose a life.<br><br>You need to guess 10 anagrams correctly to beat this game!<br><br>You have 5 lives...Enjoy!</p>');
      break;
      case 'insane':
      $instructions.append('<h2>Instructions</h2><p> When a word falls to the bottom of the box you lose a life.<br><br>You need to guess  anagrams correctly to beat this game!<br><br>You have 10 lives...Enjoy!</p>');
      break;
    }
  });

  ////////////////////Selectors End///////////////////////////

  //////////////////////Functions that change the word/////////////////////////

  /// This selects a random word from the selected array
  function generateWord() {
    const index = [Math.floor(Math.random() * selectedSubject.length)];
    const selectedWord = selectedSubject[index];
    selectedSubject.splice(index, 1);
    return selectedWord;
  }
  /// This takes the randomly selected word and shuffles it into an anagram
  function generateAnagram(selectedWord) {
    return selectedWord.split('').sort(function(){
      return 0.5 - Math.random();
    } ).join('');
  }
  /// This generates a different element in a differnt position from the HTML
  function generateAnagramElement () {
    const $anagram = $('<p class="anagram"></p>');
    const left = Math.ceil((Math.random() * 600));
    $anagram.css({left: left});
    return $anagram;
  }
  function anagramHitsTheBottom () {
    $('.anagram').each(function () {
      const position = Math.round($(this).position().top);
      if (position >= 462) {
        console.log('working');
        $lives.html(`Lives Left: ${lifeScore = lifeScore - 1}`);
        $(this).css('color','red');
        $(this).addClass('animated hinge');
      }
    });
  }

  //////////////////////Functions that change the word/////////////////////////

  /////////////// These are the difficulty option functions ///////////////
  function difficultyEasy (){
    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);
    const selectedAnagram = generateAnagramElement();
    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);
    $container.append(selectedAnagram);
    anagramHitsTheBottom();

    interval = setInterval(function() {
      selectedAnagram.css('top', '+=10px');
    },1500);
  }
  function difficultyMedium (){
    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);
    const selectedAnagram = generateAnagramElement();

    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);
    $container.append(selectedAnagram);
    anagramHitsTheBottom();
    interval = setInterval(function() {
      selectedAnagram.css('top', '+=10px');
    },1000);
  }
  function difficultyHard (){
    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);
    const selectedAnagram = generateAnagramElement();

    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);
    $container.append(selectedAnagram);
    anagramHitsTheBottom();
    interval = setInterval(function() {
      selectedAnagram.css('top', '+=10px');
    },700);
  }
  function difficultyInsane (){
    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);
    const selectedAnagram = generateAnagramElement();

    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);
    $container.append(selectedAnagram);
    anagramHitsTheBottom();
    interval = setInterval(function() {
      selectedAnagram.css('top', '+=10px');
    },200);
  }
  //////////////////// Difficulty Options End here ////////////////////////


  // let highScore = localStorage.getItem('highScore') || 0;
  // function setHighScore ($highScore) {
  //   highScore = currentScoreDislpayed > highScore ? currentScoreDislpayed : highScore;
  //   $highScore.text($highScore);
  // }
  function reset () {
    lifeScore = 5;
    $lives.html('Lives: 5');
    // currentScoreDislpayed = 0;
    // $currentScore.html(`Score: 0`);
    winCondition = 0;
    $winCondition.html('Correct Answers: 0');
    $('.anagram').remove();
    // setHighScore();
  }

  /// This is for when the player is ready to play, after the difficulty is selected and the play button is clicked - so this starts the game!
  $playGame.on('click', function(){

    switch (selectedDifficulty) {
      case 'easy':
      difficultyEasy();

      const intervalE = setInterval(function(){
        if (winCondition >= 5) {
          alert('You beat the game this time, can you manage a medium difficutly...?');
          clearInterval(intervalE);
          reset();
        } else if (lifeScore <= 0) {
          alert('Game Over, sorry you lost, Booooooo!');
          reset();
        }
        else {
          difficultyEasy();
        }
      },10000);
      break;

      case 'medium':
      difficultyMedium();
      const intervalM = setInterval(function(){
        if (winCondition >= 7 ) {
          alert('You beat the game this time, can you manage a hard difficutly...?');
          clearInterval(intervalM);
          reset();
        } else if ( lifeScore <= 0){
          alert('Game Over, sorry you lost, Booooooo!');
          reset();
        }
        else {
          difficultyMedium();
        }
      },7000);
      break;

      case 'hard':
      difficultyHard();
      const intervalH = setInterval(function(){
        if (winCondition >= 10 ) {
          alert('You beat the game this time, well thats it, unless you really are insane...');
          clearInterval(intervalH);
          reset();
        } else if ( lifeScore <= 0){
          alert('Game Over, sorry you lost, Booooooo!');
          reset();
        }
        else {
          difficultyHard();
        }
      },5000);
      break;

      case 'insane':

      difficultyInsane();
      const intervalI = setInterval(function(){
        if (winCondition >= 10 ) {
          alert('You beat the game, like you beat it, beat it erm yeah, grats I guess');
          clearInterval(intervalI);
          reset();
        } else if ( lifeScore <= 0){
          alert('Game Over, sorry you lost, Booooooo!');
          reset();
        }
        else {
          difficultyInsane();
        }
      },2500);
      break;
      default:
      alert('Please select a difficulty...');
    }
  });
  /// This is the validation when the button is clicked to submit an answer, this also holds the animations applied to the game.

  $('form').on('submit', function (e) {
    e.preventDefault();

    $('.anagram').each(function () {
      const checker = $(this).data('word');

      if ($('#answer').val() === checker){
        $winCondition.html(`Correct Answers: ${winCondition = winCondition + 1}`);
        $(this).addClass('animated fadeOutLeft').css('color','green');
        $(this).css('display','hidden');
        // $currentScore.html(`Score: ${currentScoreDislpayed += 5}`);
      } else {
        $('.anagram').addClass('animated wobble');
      }
    });
    $('form').trigger('reset');
  });
});

///// lose a life for words falling on bottom of the div place this in a function and then call it in each difficulty
