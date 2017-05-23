console.log('JS Loaded');
$(() => {
  let interval;
  const $currentScore = $('#currentScore');
  const $lives = $('#lives');
  const $playGame = $('#play');
  const $inputByUser = $('#answer');
  const $subjectOptions = $('#subject-options');
  const $difficultyOptions = $('#difficulty-options');
  const $anagram1 = $('#anagram1');
  const $anagram2 = $('#anagram2');
  const $anagram3 = $('#anagram3');
  const $anagram4 = $('#anagram4');
  const $anagram5 = $('#anagram5');
  const $anagram6 = $('#anagram6');
  const $anagram7 = $('#anagram7');
  const $anagram8 = $('#anagram8');
  const $anagram9 = $('#anagram9');
  const $anagram10 = $('#anagram10');
  const $anagrams = [$anagram1,$anagram2,$anagram3,$anagram4,$anagram5,$anagram6,$anagram7,$anagram8,$anagram9,$anagram10];

  const $container = $('.ag-tetris');
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
  });
  $difficultyOptions.on('change', () => {
    selectedDifficulty = $difficultyOptions.val();
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

  /// This chooses a different 'anagram' position from the HTML
  // let selectedAnagram = '';
  function generateAnagramElement () {
    const $anagram = $('<p class="anagram"></p>');
    const left = Math.ceil((Math.random() * 600));
    $anagram.css({left: left});
    // selectedAnagram = $anagrams[Math.floor((Math.random() * 10) + 1)];
    return $anagram;
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

    interval = setInterval(function() {
      selectedAnagram.css('top', '+=10px');
    },2000);
    const position = selectedAnagram.position();
  }

  function difficultyMedium (selectedAnagram){

    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);

    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);

    interval = setInterval(function() {
      selectedAnagram.css('top', '+=20px');
    },2000);
  }

  function difficultyHard (selectedAnagram){

    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);
    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);

    interval = setInterval(function() {
      selectedAnagram.css('top', '+=20px');
    },1500);
    const position = selectedAnagram.position();
    console.log(position);
  }

  function difficultyInsane (selectedAnagram){

    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);

    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);


    interval = setInterval(function() {
      selectedAnagram.css('top', '+=30px');
    },1000);
    const position = selectedAnagram.position();
    console.log(position);
  }

  //////////////////// Difficulty Options End here ////////////////////////

  //current score of the player
  let lifeScore = 5;
  let currentScoreDislpayed = 0;
  let winCondition = 0;


  /// This is the validation when the button is clicked to submit an answer, this also holds the animations applied to the game.
  $('#submit').on('click', function () {

    const correct = false;

    // loop through all elements with class of 'anagram'
    // for each element, grab the data-word attribute
    // check if the data-word matches the #answer val()
    // if so, make correct true
    // else etc.

    // index, element
    // inside an each loop you need to wrap the element inside jquery
    // $(element)
    // inside the loop, if you find a match, set correct to be true
    // once the loop has finished, check if correct has been changed to true, if so , add a point, if not, minus a point

    $('.anagram').each

    const selectedWord = selectedAnagram.attr('data-word');

    if($('#answer').val() === selectedWord){

      selectedAnagram.text(selectedWord).css('display','hidden');

      winCondition ++;
      console.log(winCondition);

      $currentScore.html(`Score: ${currentScoreDislpayed += selectedWord.length}`);

      selectedAnagram.addClass('animated fadeOutLeft').css('color','green');

      clearInterval(interval);
    } else {
      selectedAnagram.addClass('animated wobble').css('color','red');

      $lives.html(`Lives: ${lifeScore -= 1}`);
    }
  });

  /// This is for when the player is ready to play, after the difficulty is selected and the play button is clicked - so this starts the game!
  $playGame.on('click', function(){
    switch (selectedDifficulty) {
      case 'easy':
      // randomisePosition();
      difficultyEasy();
      const intervalId = setInterval(function(){
        if (winCondition > 2) {
          clearInterval(intervalId);
          console.log('winCondition is greater than 5');
        } else {
          // randomisePosition();
          difficultyEasy();
        }
      },10000);
      break;
      case 'medium':
      // randomisePosition();
      difficultyMedium();
      setInterval(function(){
        // randomisePosition();
        difficultyMedium();
      },8000);
      break;
      case 'hard':
      // randomisePosition();
      difficultyHard();
      setInterval(function(){
        // randomisePosition();
        difficultyHard();
      },5000);
      break;
      case 'insane':
      // randomisePosition();
      setInterval(function(){
        // randomisePosition();
        difficultyInsane();
      },3000);
      break;
      default:
      alert('Please select a difficulty...');
    }
    console.log(selectedDifficulty);
  });
});
