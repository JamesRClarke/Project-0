console.log('JS Loaded');
$(() => {
  let lifeScore = 5;
  let winCondition = 0;
  let interval;
  let difficulty = null;
  const $lives = $('#lives');
  const $playGame = $('#play');
  const $winCondition = $('#winCondition');
  const $subjectOptions = $('#subject-options');
  const $difficultyOptions = $('#difficulty-options');
  const $container = $('.ag-tetris');
  const $instructions = $('#instructions');
  const categories = {
    BBT: ['sheldon','leanord','spock','cheesecake factory','howard','startrek','penny','koothrapoli','bernadette','physics','laundry','halonight','dumplings', 'brisket','nasa','stringtheory','darkmatter', 'comiccon','comicbook'],

    LOTR: ['arragon', 'gimli','gandalf','legolas','mordor','uruk hai','frodo','golumn','orcs','theshire','baggins','sauron', 'gondor','elves','hobbit','dwarves','twotowers','blackgate','fariamir','saruman','shadowfax','witchking'],

    EPL: ['arsenal','bournemouth','burnley','brighton','chelsea','crystal palace','everton','leicstercity','liverpool','manchestercity','manchesterunited','newcastle','southampton','stoke city','tottenhamhotspur','watford','westbrom','westham'],

    CC: ['buenosaires','vienna','bridgetown','brasilia','brussels','sofia','phnom peh','ottowa','bangui','san jose','havana','prauge','cairo','helsinki','budapest','jakarta','jerusalem','kingston','tokyo','nairobi','kualalumpur','rabat','oslo','pyongyang'],

    WDI: ['function','javascript','switch','refactor','namespacing','jquery','const','primitive','object','array','responsive','constructor','reccursive','indentation','iterate','method','algorithim','terminal','github','debugging','whileloop','variable']
  };
  const settings = {
    easy: {
      interval: 10000,
      speed: 1500,
      winningCondition: 5
    },
    medium: {
      interval: 7000,
      speed: 1000,
      winningCondition: 7
    },
    hard: {
      interval: 5000,
      speed: 700,
      winningCondition: 10
    },
    insane: {
      interval: 2500,
      speed: 200,
      winningCondition: 10
    }
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
    difficulty = settings[selectedDifficulty];
    console.log(difficulty);
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
    const left = Math.ceil((Math.random() * 650));
    $anagram.css({left: left});
    return $anagram;
  }
  function anagramHitsTheBottom () {
    $('.anagram').each(function () {
      const position = Math.round($(this).position().top);
      if (position >= 465) {
        console.log(lifeScore);
        if(!$(this).hasClass('hinge')) lifeScore -= 1;
        $lives.html(`Lives Left: ${lifeScore}`);//Not Working
        $(this).css('color','red');
        $(this).addClass('animated hinge');
        setTimeout(() => {
          $(this).remove();
        },500);

      }
    });
  }
  //////////////////////Functions that change the word/////////////////////////

  /////////////// These are the difficulty option functions ///////////////
  function playGame (){
    const selectedWord = generateWord();
    const scrambledWord = generateAnagram(selectedWord);
    const selectedAnagram = generateAnagramElement();
    selectedAnagram.text(scrambledWord);
    selectedAnagram.attr('data-word', selectedWord);
    $container.append(selectedAnagram);

    interval = setInterval(function() {
      selectedAnagram.css('top', '+=10px');
      anagramHitsTheBottom();
    },difficulty.speed);
  }

  // function difficultyMedium (){
  //   const selectedWord = generateWord();
  //   const scrambledWord = generateAnagram(selectedWord);
  //   const selectedAnagram = generateAnagramElement();
  //
  //   selectedAnagram.text(scrambledWord);
  //   selectedAnagram.attr('data-word', selectedWord);
  //   $container.append(selectedAnagram);
  //   interval = setInterval(function() {
  //     selectedAnagram.css('top', '+=10px');
  //     anagramHitsTheBottom();
  //   },1000);
  // }
  // function difficultyHard (){
  //   const selectedWord = generateWord();
  //   const scrambledWord = generateAnagram(selectedWord);
  //   const selectedAnagram = generateAnagramElement();
  //
  //   selectedAnagram.text(scrambledWord);
  //   selectedAnagram.attr('data-word', selectedWord);
  //   $container.append(selectedAnagram);
  //   interval = setInterval(function() {
  //     selectedAnagram.css('top', '+=10px');
  //     anagramHitsTheBottom();
  //   },700);
  // }
  // function difficultyInsane (){
  //   const selectedWord = generateWord();
  //   const scrambledWord = generateAnagram(selectedWord);
  //   const selectedAnagram = generateAnagramElement();
  //
  //   selectedAnagram.text(scrambledWord);
  //   selectedAnagram.attr('data-word', selectedWord);
  //   $container.append(selectedAnagram);
  //   interval = setInterval(function() {
  //     selectedAnagram.css('top', '+=10px');
  //     anagramHitsTheBottom();
  //   },200);
  // }
  //////////////////// Difficulty Options End here ////////////////////////

  ///////////This is the reset function after a game has finished////////////////
  function reset () {
    lifeScore = 5;
    $lives.html('Lives: 5');
    winCondition = 0;
    $winCondition.html('Correct Answers: 0');
    $('.anagram').remove();
  }

  /////////////////////////////////reset function end///////////////////////////

  /// This is for when the player is ready to play, after the difficulty is selected and the play button is clicked - so this starts the game!
  $playGame.on('click', function(){
    console.log(difficulty[winCondition]);
    playGame();
    const interval = setInterval(function(){
      if (winCondition === difficulty.winningCondition) {
        alert('You beat the game this time, can you manage a medium difficutly...?');
        clearInterval(interval);
        reset();
      } else if (lifeScore <= 0){
        clearInterval(interval);
        alert('Game Over, sorry you lost, Booooooo!');
        reset();
      } else{
        playGame();
      }
    },difficulty.interval);

    // switch (selectedDifficulty) {
    //   case 'easy':
    //   difficultyEasy();
    //   const intervalE = setInterval(function(){
    //     if (winCondition >= 5) {
    //       alert('You beat the game this time, can you manage a medium difficutly...?');
    //       clearInterval(intervalE);
    //       reset();
    //     } else if (lifeScore <= 0) {
    //       clearInterval(intervalE);
    //       alert('Game Over, sorry you lost, Booooooo!');
    //       reset();
    //     } else {
    //       difficultyEasy();
    //     }
    //   },10000);
    //   break;
    //
    //   case 'medium':
    //   difficultyMedium();
    //   const intervalM = setInterval(function(){
    //     if (winCondition >= 7 ) {
    //       alert('You beat the game this time, can you manage a hard difficutly...?');
    //       clearInterval(intervalM);
    //       reset();
    //     } else if ( lifeScore <= 0){
    //       clearInterval(intervalM);
    //       alert('Game Over, sorry you lost, Booooooo!');
    //       reset();
    //     }
    //     else {
    //       difficultyMedium();
    //     }
    //   },7000);
    //   break;
    //
    //   case 'hard':
    //   difficultyHard();
    //   const intervalH = setInterval(function(){
    //     if (winCondition >= 10 ) {
    //       alert('You beat the game this time, well thats it, unless you really are insane...');
    //       clearInterval(intervalH);
    //       reset();
    //     } else if ( lifeScore <= 0){
    //       clearInterval(intervalH);
    //       alert('Game Over, sorry you lost, Booooooo!');
    //       reset();
    //     }
    //     else {
    //       difficultyHard();
    //     }
    //   },5000);
    //   break;
    //
    //   case 'insane':
    //
    //   difficultyInsane();
    //   const intervalI = setInterval(function(){
    //     if (winCondition >= 10 ) {
    //       alert('You beat the game, like you beat it, beat it erm yeah, grats I guess');
    //       clearInterval(intervalI);
    //       reset();
    //     } else if ( lifeScore <= 0){
    //       clearInterval(intervalI);
    //       alert('Game Over, sorry you lost, Booooooo!');
    //       reset();
    //     }
    //     else {
    //       console.log('Function called!')
    //       difficultyInsane();
    //     }
    //   },2500);
    //   break;
    //   default:
    //   alert('Please select a difficulty...');
    // }
  });

  /// This is the validation when the button is clicked to submit an answer, this also holds the animations applied to the game.

  $('form').on('submit', function (e) {
    e.preventDefault();
    console.log('in here');
    $('.anagram').each(function (anagram) {
      console.log(anagram, this);
      const checker = $(this).data('word');

      if ($('#answer').val() === checker){
        $(this).addClass('animated fadeOutLeft').css('color','#39FF14');
        $winCondition.html(`Correct Answers: ${winCondition = winCondition + 1}`);
        setTimeout(() => {
          $(this).remove();
        },500);

      } else {
        $('.anagram').addClass('animated wobble');
        setTimeout(() => {
          $('.anagram').removeClass('wobble');
        },500);
      }
    });
    $('form').trigger('reset');
  });
});

///// lose a life for words falling on bottom of the div place this in a function and then call it in each difficulty
