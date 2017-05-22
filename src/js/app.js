console.log('JS Loaded');
$(() => {
  let interval;
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

  function generateWord() {
    const selectedWord = selectedSubject[Math.floor(Math.random() * selectedSubject.length)];
    return selectedWord;
  }

  function generateAnagram(selectedWord) {
    return selectedWord.split('').sort(function(){
      return 0.5 - Math.random();
    } ).join('');
  }

  let selectedAnagram = '';
  function randomisePosition () {
    selectedAnagram = $anagrams[Math.floor((Math.random() * 10) + 1)];
    return selectedAnagram;
  }

  function nonReuseable () {
    $anagrams.sort(function() {
      return 0.5 - Math.random();
    });
  }


  /////////////// These are the difficulty option functions ///////////////
  function difficultyEasy (selectedAnagram){

    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);

    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);

    interval = setInterval(function() {
      selectedAnagram.css('top', '+=10px');
    },2000);
    const position = selectedAnagram.position();
    console.log(position);
  }

  function difficultyMedium (selectedAnagram){

    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);

    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);

    interval = setInterval(function() {
      selectedAnagram.css('top', '+=20px');
    },2000);
    const position = selectedAnagram.position();
    console.log(position);
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
  //code validation of anagram
  /// function that stops and animates a correctly or incorrectly given answer
  //////////////////////////WORKING CODE//////////////////////////////////////

  $('#submit').on('click', function () {
    const selectedWord = selectedAnagram.attr('data-word');

    if($('#answer').val() === selectedWord){

      console.log(`when this reaches 10 player wins the game -  ${winCondition = winCondition + 1}`);
      selectedAnagram.text(selectedWord).css('display','hidden');

      console.log(`players current score is now ${currentScoreDislpayed = currentScoreDislpayed + selectedWord.length}`);

      selectedAnagram.addClass('animated fadeOutLeft').css('color','green');

      clearInterval(interval);
    } else {
      selectedAnagram.addClass('animated wobble').css('color','red');
      console.log( `lives left is now ${lifeScore = lifeScore -1}`);
    }
  }
);

$playGame.on('click', function(){
  switch (selectedDifficulty) {
    case 'easy':
    randomisePosition();
    difficultyEasy(selectedAnagram);
    setInterval(function(){
      randomisePosition();
      nonReuseable();
      difficultyEasy(selectedAnagram);
    },10000);
    break;
    case 'medium':
    randomisePosition();
    difficultyMedium(selectedAnagram);
    setInterval(function(){
      randomisePosition();
      difficultyMedium(selectedAnagram);
    },8000);
    break;
    case 'hard':
    randomisePosition();
    difficultyHard(selectedAnagram);
    setInterval(function(){
      randomisePosition();
      difficultyHard(selectedAnagram);
    },5000);
    break;
    case 'insane':
    randomisePosition();
    setInterval(function(){
      randomisePosition();
      difficultyInsane(selectedAnagram);
    },3000);
    break;
    default:
    alert('Please select a difficulty...');
  }
  console.log(selectedDifficulty);
});

/// These are the difficulty settings chosen by the user split into different functions ...


// difficultyEasy(selectedSubject);


/// Difficulty selections ends here.


// JavaScript

//  create an object which stores arrays of the subjects that can be chosen for the game creating arrays of strings assigning names of the arrays to subjects which can be chosen

// link the subject chosen and  chosen on the selection fields to apply it to the

// set interval functions that means the anagrams fall from the top to bottom of the screen set for each difficutly of the game
// have the anagrams fall from diffferent places - possibly from the HTML


// make it so when the anagrams get to the bottom of the box they dissapear or animate out
//take 1 away from lives for each anagram that reaches the bottom of the screen
// life

// high score counter dependent on the length of the anagram that has been solved

// a function and/or an if/else statement that will check the input field agaisnt the anagrams
//use, to lower case, incase they type in with any capital letters so the strings will match


//restart button
// but doesn't restart the highscore


});



// Rules
//type in the anagram to the input field and press enter   or click a button which submits your answer

//if the anagram hits the bottom of the box or the right hand side dependent on how I build it

// different rounds which means multiple anagrams at once and you can type to submit either anagrams


//Win condition

// you can win by completing all the rounds in the game

// start again if you lose your lives

// Features

// High score tracker - score relates to the length of the string

// Choosing different subjects e.g. football teams, big bang theory etc

// annoying music to put people off or music which relates to theme that has been chosen

// dependent on the subject chosen the look of the game wil differ so a 'theme'
