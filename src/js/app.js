$(() => {
  let height = $('.game-box').outerHeight(true);
  let width = $('.game-box').width();
  let lifeScore = 5;
  let winCondition = 0;
  let difficulty = null;
  const $lives = $('#lives');
  const $playGame = $('#play');
  const $winCondition = $('#winCondition');
  const $subjectOptions = $('#subject-options');
  const $difficultyOptions = $('#difficulty-options');
  const $container = $('.game-box');
  const categories = {
    BBT: ['sheldon','leanord','spock','cheesecake factory','howard','star trek','penny','koothrapoli','bernadette','physics','laundry','halo night','dumplings', 'brisket','nasa','string theory','dark matter', 'comiccon','comic book'],
    LOTR: ['aragorn', 'gimli','gandalf','legolas','mordor','uruk hai','frodo','golumm','orcs','the shire','baggins','sauron', 'gondor','elves','hobbit','dwarves','two towers','black gate','faramir','saruman','shadowfax','witch king'],
    FT: ['arsenal','bournemouth','burnley','brighton','chelsea','crystal palace','everton','liverpool','newcastle','southampton','barcelona','juventus','ajax','bayern'],
    CC: ['vienna','bridgetown','brasilia','brussels','sofia','hanoi','ottowa','bangui','washington','havana','prague','cairo','helsinki','budapest','jakarta','jerusalem','kingston','tokyo','nairobi','beijing','rabat','oslo','pyongyang','madrid'],
    AMG:
    ['kath','jake moore','rolls royce','fucking geoff','pod','robinson','nat yeo','xcina','knowlesey','tinder','petit blue','investment','thomson reuters',' moorhouse','pizza pilgrim','pdog','ewelina','workflow','10am stand up','tea cakes','momentum','james','harrison','kiddie fiddler','we love soup','fuckoffee','jesus ruby','roger the dodger'],
    WDI: ['function','javascript','switch','refactor','namespacing','jquery','const','primitive','object','array','responsive','constructor','recursive','indentation','iterate','method','algorithim','terminal','github','debugging','loop','variable'],
    BBM: ['the dark knight','inception','the shawshank redemption','mission impossible','fast & furious', 'american pie','the sounds of the wind','avatar','titanic','toy story','spider man','mary poppins','the lion kings','101 dalmatians','my fair lady','pride and prejudice','romeo and juliet','bohemian rhapsody','matilda','home alone','doctor zhivago','the excorcist'],
    ANM: ['elephant','parrot','tiger','alpaca','alligator', 'cockroach','cuttlefish','gecko','hedgehog','hummingbird','siberian husky','monkey','turtle','manta ray','kangaroo','rhinoceros','komodo dragon','platypus','porcupine','raccoon','rattlesnake','tasmanian devil','wildebeest','woodlouse','wallaby','penguin','dolphin','snake','mouse','dachshund','dalmatian','eagle','aardvark','ladybird','manatee','giraffe'],
    TUBE: ['acton town','acton central','aldgate', 'aldgate east', 'alperton','amersham','angel','amersham','angel','archway', 'arnos grove','arsenal','baker street','balham','bank','barbican','barking','barkingside','barons court','bayswater','becontree','belsize park','bermondsey','bethnal green','blackfriars','blackhorse road','bond street','borough','boston manor','bounds green','bow road','brent cross','brixton','bromley by bow', 'brondesbury','brondesbury park','buckhurst hill','burnt oak','caledonian road','camden road','camden town','canada water','canary wharf','cannon street','canonbury','canons park','chalfont & latimer'],
    TEST: ['caledonian road & barnesbury','anagram']

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
  $subjectOptions.on('change',() => {
    const value = $subjectOptions.val();
    selectedSubject = categories[value];
  });
  $difficultyOptions.on('change', () => {
    selectedDifficulty = $difficultyOptions.val();
    difficulty = settings[selectedDifficulty];
  });
  ////////////////////Selectors End///////////////////////////

  ///////////////////Functions that change the word/////////////////////////
  /// This selects a random word from the selected array
  function generateWord() {
    const index = [Math.floor(Math.random() *
      selectedSubject.length)];
      const selectedWord = selectedSubject[index];
      selectedSubject.splice(index, 1);
      return selectedWord;
    }
    /// This takes the randomly selected word and shuffles it into an anagram
    function generateAnagram(selectedWord) {
      /// This is splitting the selectedWord (a string) apart then sorting it a
      var numberOfWords = selectedWord.split(' ').length;
      var anagramGenerated = '';
      for(var i = 0; i <= numberOfWords - 1; i++) {
        var word = selectedWord.split(' ')[i];
        word = word.split('').sort(() => {
          return 0.3 - Math.random();
        }).join('') + ' ';
        anagramGenerated = anagramGenerated + word;
      }
      return anagramGenerated
    }
    //////This generates a different element in a differnt position from the HTML
    function generateAnagramElement () {
      const $anagram = $('<p class="anagram"></p>');
      const left = Math.ceil((Math.random() * (width - 250)));
      $anagram.css({left: left});
      return $anagram;
    }
    ////// This is for when the word hits the bottom and 'falls off'
    function anagramHitsTheBottom () {
      $('.anagram').each(function () {
        const position = Math.round($(this).position().top);
        if (position >= height - 85) {
          if(!$(this).hasClass('hinge')) lifeScore -= 1;
          $lives.html(`Lives Left: ${lifeScore}`);
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
      }, difficulty.speed);
    }
    ///////This is the reset function after a game has finished////////////////
    function reset () {
      lifeScore = 5;
      $lives.html('Lives: 5');
      winCondition = 0;
      $winCondition.html('Correct Answers: 0');
      $('.anagram').remove();
    }
    /// This is for when the player is ready to play, after the difficulty is selected and the play button is clicked - so this starts the game!
    $playGame.click( function(){
      $('form').focus($('form'));
      if (selectedDifficulty === '' || selectedSubject === '') {
        alert('A Subject and Difficulty needs to be selected to proceed, please choose both...');
      } else {
        playGame();
        const interval = setInterval(function(){
          if (winCondition === difficulty.winningCondition) {
            alert('You beat the game this time, can you manage harder difficutly...?');
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
      }
    });
    /// This is the validation when the button is clicked to submit an answer, this also holds the animations applied to the game.
    $('form').on('submit', function (e) {
      e.preventDefault();
      $('.anagram').each(function () {
        const checker = $(this).data('word');

        if ($('#answer').val().toLowerCase() === checker){
          $(this).addClass('animated flipOutY').css('color','#39FF14');
          $(this).removeClass('animated jello').css('color','#39FF14');
          $winCondition.html(`Correct Answers: ${winCondition =winCondition + 1}`);
          setTimeout(() => {
            $(this).remove();
          },700);

        } else {
          $('.anagram').addClass('animated jello');
          setTimeout(() => {
            $('.anagram').removeClass('jello');
          },500);
        }
      });
      $('form').trigger('reset');
    });
    ///// this changes the height property based on the resizing of the browsers window
    $(window).on('resize', () => {
      height = $('.game-box').outerHeight(true);
      width = $('.game-box').width();
    });
  });
