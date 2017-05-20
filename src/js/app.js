console.log('JS Loaded');
$(() => {
  const $playGame = $('#play');
  const $inputByUser = $('#answer');


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

  let $BBT = $('#BBT').val();
  let $LOTR = $('#LOTR').val();
  let $EPL = $('#EPL').val();
  let $ASIA = $('#ASIA').val();
  let $WDI = $('#WDI').val();

  let $EASY = $('#easy').val();
  let $medium = $('#medium').val();
  let $hard = $('#hard').val();
  let $insane = $('#insane').val();

  $BBT = ['sheldon','leanord','spock','cheescake factory','howard','raj','star trek','penny','amy','bernadette','physics','laundry','halo night','dumplings', 'brisket','nasa','string theory','dark matter', 'comiccon'];


  $LOTR = ['arragon', 'gimli', 'gandalf'];



  // let currentScore = 0;
  // let highScore = 0;


  let selectedDifficulty = null;
  let selectedSubject = null;

  ////////////////////Selectors///////////////////////////
  $('#subject-options').on('change', function() {
    selectedSubject = $('#subject-options option:checked').val();
    switch (selectedSubject){
      case '$BBT':
        selectedSubject = $BBT;
        break;
      case '$LOTR':
        selectedSubject = $LOTR;
        break;
      case '$EPL':
        selectedSubject = $EPL;
        break;
      case '$WDI':
        selectedSubject = $WDI;
        break;
      case '$ASIA':
        selectedSubject = $ASIA;
        break;
      default:
        alert('AAAAAAAAAHHHHHHH!!!!!!');

    }
  });
  $('#difficulty-options').on('change', function() {
    selectedDifficulty = $('#difficulty-options option:checked').val();
    switch (selectedDifficulty){
      case 'easy':
        selectedDifficulty = $easy;
        break;
      case 'medium':
        selectedDifficulty = $medium;
        break;
      case 'hard':
        selectedDifficulty = $hard;
        break;
      case 'insane':
        selectedDifficulty = $insane;
        break;
      default:
        alert('AAAAAAAAHHHHH!!!!!');
    }
  });
  ////////////////////Selectors///////////////////////////

  $playGame.on('click', function(){
    console.log('heyo!');
    //// This stores the selected subject and randomises the choice of words in the array the subject chosen refers to.


    /// These are the difficulty settings chosen by the user split into different functions ...
    function difficultyEasy (x){
      setInterval(function() {
        $anagram1.text(x[Math.floor(Math.random() * x.length)]).css('top', '+=10px');
        console.log('heyyoo!');
      },2000);
    }
    difficultyEasy(selectedSubject);

    //   function medium (){
    //     setInterval(function() {
    //       $anagram1.text(selectedSubject).css('top', '+=25px');
    //     },2000);
    //   }
    //   // Medium();
    //
    //   function hard (){
    //     setInterval(function() {
    //       $anagram1.text(selectedSubject).css('top', '+=35px');
    //     },1500);
    //   }
    //
    //   // Hard();
    //   function insane (){
    //     setInterval(function() {
    //       $anagram1.text(selectedSubject).css('top', '+=50px');
    //     },1000);
    //   }
  });
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

  //Working code
  $('#submit').on('click', function () {
    if($('#answer').val() === selectedSubject){
      $anagram1.text(selectedSubject).css('color', 'red');
      console.log('hello');
    }
  });



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
