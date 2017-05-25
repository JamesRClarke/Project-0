$(() => {
  let lifeScore = 5;
  let winCondition = 0;
  let difficulty = null;
  const $lives = $('#lives');
  const $playGame = $('#play');
  const $winCondition = $('#winCondition');
  const $subjectOptions = $('#subject-options');
  const $difficultyOptions = $('#difficulty-options');
  const $container = $('.ag-tetris');
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
    ///////////////////Functions that change the word/////////////////////////
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
    //////This generates a different element in a differnt position from the HTML
    function generateAnagramElement () {
      const $anagram = $('<p class="anagram"></p>');
      const left = Math.ceil((Math.random() * 700));
      $anagram.css({left: left});
      return $anagram;
    }
    ////// This is for when the word hits the bottom and 'falls off'
    function anagramHitsTheBottom () {
      $('.anagram').each(function () {
        const position = Math.round($(this).position().top);
        if (position >= 490) {
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
    ///////////////////Functions that change the word/////////////////////////
    //////////////////Main fucntion to play game ////////////////////////////
    function playGame (){
      const selectedWord = generateWord();
      const scrambledWord = generateAnagram(selectedWord);
      const selectedAnagram = generateAnagramElement();
      selectedAnagram.text(scrambledWord);
      selectedAnagram.attr('data-word', selectedWord);
      $container.append(selectedAnagram);
      setInterval(function() {
        selectedAnagram.css('top', '+=10px');
        anagramHitsTheBottom();
      },difficulty.speed);
    }
    /////q/This is the reset function after a game has finished////////////////
    function reset () {
      lifeScore = 5;
      $lives.html('Lives: 5');
      winCondition = 0;
      $winCondition.html('Correct Answers: 0');
      $('.anagram').remove();
    }
    /// This is for when the player is ready to play, after the difficulty is selected and the play button is clicked - so this starts the game!
    $playGame.click( function(){
      console.log(difficulty[winCondition]);
      playGame();
      const interval = setInterval(function(){
        if (winCondition === difficulty.winningCondition) {
          alert('You beat the game this time, can you manage amedium difficutly...?');
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
    });
    /// This is the validation when the button is clicked to submit an answer, this also holds the animations applied to the game.
    $('form').on('submit', function (e) {
      e.preventDefault();
      $('.anagram').each(function () {
        const checker = $(this).data('word');
        if ($('#answer').val() === checker){
          $(this).addClass('animated fadeOutUp').css('color','#39FF14');
          $winCondition.html(`Correct Answers: ${winCondition = winCondition + 1}`);
          setTimeout(() => {
            $(this).remove();
          },500);
        } else {
          $('.anagram').addClass('animated jello');
          setTimeout(() => {
            $('.anagram').removeClass('jello');
          },500);
        }
      });
      $('form').trigger('reset');
    });
  });
