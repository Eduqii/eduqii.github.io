const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
	{
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n S\u025B  wo d\u2184fo bi b\u025B sra wo awia na \u2184rek\u2184 a, woma no',  	
  	choice1:'due ne aw\u2184w',
	choice2: 'due ne wia',
	choice3: 'due ne br\u025B ',
	choice4: 'due ne nwunu',
  	answer: 2,
  },
  {	
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n S\u025B  wo ne obi rek\u2184 baabi na \u2184di kan na wok\u2184to no a, wokyia no s\u025B …',
	choice1: 'mema wo ahyia',
	choice2:  'mema wo \u2184duru',
	choice3:  'nky\u025B re ba',
	choice4:  'mema wo akwaaba',
	answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n W\u2184wo ab\u2184fra na \u2184di …….a, w\u2184to ne din',
  	choice1:'adaduanan',
	choice2: 'afe',
	choice3: 'nnaw\u2184twe',
	choice4: 'bosome',
  	answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n Akanfo de w\u2184n babarima panin to…..',  	
  	choice1: 'abusuapanin',
	choice2:  'agya nua panyin',
	choice3:  'agya kumaa',
	choice4:  'agya papa',
  	answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n S\u025B  \u2184barima ware a, ne yere maame nuanom y\u025B  ne',  	
  	choice1: 'nsenom',
	choice2:  'koranom',
	choice3:  'nkumaafo',
	choice4:  'nsenkumaa',
  	answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n S\u025B  \u2184bea ware a, ne kunu nuammarima y\u025B  ne ……',		
  	choice1:'koranom',
	choice2:  'nkontanom',
	choice3:  'nsenom',
	choice4:  'kununom',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n \u2184bea ware a, ne kunu nuammarima mma y\u025B  ne….',	 
  	choice1: 'koramma',
	choice2:   'nananom',
	choice3:   'mmannoma',
	choice4:   'mma',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.\n\n Nsu ne nsa a w\u2184de s\u2184 abofra anom ber\u025B  a w\u2184reto ne din no kyer\u025B  ……',
		choice1: 'aho\u2184den',
	choice2:   'anotew',
	choice3:	   'nokwaredi',
	choice4:	   'papa ne b\u2184ne',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.\n\n  Abamo akyiwade ne…..',		
  	choice1:'akok\u2184',
	choice2:  'okisi',
	choice3:  '\u2184twe',
	choice4:  'wansane',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.\n\n Akanman mu s\u025B  obi rewu a,……',		
  	choice1:' w\u2184gu n’anom nsu',
	choice2:  'w\u2184de no to ne benkum so',
	choice3:  'w\u2184ns\u2184 ne mu',
	choice4:  'w\u2184 teatea no',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.\n\n Nne\u025B ma a Akanfo de gya owufo kwan no w\u2184fr\u025B  no d\u025B n?',
		choice1:'akatasode',
	choice2:  'aky\u025B de',
	choice3:	  'asiede',
	choice4:	  'nkradi',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.\n\n S\u025B  obi de ka na owu a, hena na otua ka no?',
		choice1:'abusuapanyin',
	choice2:  'anuanom',
	choice3:	  'obiara ntua',
	choice4:	  'odiadefo',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.\n\n Kuku a okunafo k\u2184b\u2184 no kurotia no kyer\u025B  s\u025B …..',		
  	choice1:'\u2184ne ne kunu adi ntetewmu',
	choice2:  '\u2184mp\u025B  kuku no',
	choice3:  'ne bo afu',
	choice4:  '\u2184nnidi bio',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.\n\n Ansa na w\u2184b\u025B goru abeawa bi bra no, w\u2184k\u2184b\u2184 hena amanne\u025B ?',		
  	choice1:'abusuapanin',
	choice2:  '\u2184hemmea',
	choice3:  '\u2184hene',
	choice4:  'nananom',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.\n\n S\u025B  w\u2184goro abeawa bi kyiribra a, ……..',		
  	choice1:'\u025B hy\u025B  abusua no animuonyam',
	choice2:  '\u025B ma \u2184baa no nya dwetiri',
	choice3:  '\u025B gu awofo no anim ase',
	choice4:  '\u025B ma \u2184bea no nya kunu pa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.\n\n Eyinom biako nka \u2184hemaa adwuma hoo',		
  	choice1:'\u2184siesie ns\u025B m',
	choice2:  '\u2184tu \u2184hene fo',
	choice3:  '\u2184tumi pa \u2184hene',
	choice4:  '\u2184noa \u2184hene aduan',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.\n\n Nnipakuw yi mu biako nni dwuma w\u2184 Akanfo as\u025B nni mu.',		
  	choice1:'adansefo',
	choice2:  'l\u2184yafo',
	choice3:  'agyinatufo',
	choice4:  'badwafo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.\n\n S\u025B  Akanfo retu agyina w\u2184 as\u025B nni mu a, na \u025B kyer\u025B  d\u025B n?',		
  	choice1:'w\u2184rek\u2184bisa aberewa',
	choice2:  'w\u2184rek\u2184didi aba',
	choice3:  'w\u2184atu as\u025B m no ahy\u025B  da',
	choice4:  'w\u2184regye w\u2184n ahome',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.\n\n Hena na \u2184hw\u025B  \u2184hene foto so?',		
  	choice1:'Ank\u2184beahene',
	choice2:  'Gyaasehene',
	choice3:  'Sanahene',
	choice4:  'Kurontihene',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.\n\n Hena na \u2184yan \u2184hene atumpan?',		
  	choice1:'\u025B s\u025B n',
	choice2:  '\u2184kyer\u025B ma',
	choice3:  'abrafo',
	choice4:  'mm\u025B nsonfo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.\n\n Aboa b\u025B n na Kumawufo de di Papa afahy\u025B ?',		
  	choice1:'\u2184sono',
	choice2:  '\u2184twe',
	choice3:  'nantwie',
	choice4:  'wansane',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.\n\n S\u025B  \u2184hene reba aguab\u2184 ase afahy\u025B  bere a, …….',		
  	choice1:'\u2184nante b\u2184k\u2184\u2184',
	choice2:  '\u2184kasakasa',
	choice3:  '\u2184hurihuri',
	choice4:  '\u2184tu mmirika',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.\n\n W\u2184fr\u025B  w\u2184n a w\u2184di \u2184b\u2184fo akyi k\u2184 ahay\u2184 s\u025B ………',
		choice1:'aboafo',
	choice2:  'ayawfo',
	choice3:	  'akyidifo',
	choice4:	  'asomafo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.\n\n Akanfo\u2184 tumi fr\u025B  Akwasidae s\u025B …….',		
  	choice1:'F\u2184kwasi',
	choice2:  'Monokwasi',
	choice3:  'Nkyikwasi',
	choice4:  'Kurukwasi',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.\n\n Benada Dapaa adekyee\u025B  y\u025B …..',		
  	choice1:'Kwawuku',
	choice2:  'Kurudapaaku',
	choice3:  'Monowuku',
	choice4:  'Ngonawuku',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.\n\n Akwasid\u025B \u025B  biara Akanfo……..',		
  	choice1:'gu nsa',
	choice2:  'b\u2184 tikwa',
	choice3:  'hy\u025B  fa',
	choice4:  'nnidi',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.\n\n S\u025B  w\u2184regye aware a, \u2184bea no abusuafo taa de ti-ade no ……..',		
  	choice1:'k\u2184ma abusuapanin',
	choice2:  'k\u2184gye w\u2184n ani',
	choice3:  'k\u2184tua abusua ka bi',
	choice4:  'k\u2184ma \u2184hemaa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.\n\n Agyapade titiriw a efi aware mu ba ne……..',		
  	choice1:'Ay\u2184nkofa',
	choice2:  'Anigye',
	choice3:  'Sika',
	choice4:  'Mma',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.\n\n Hena na \u2184gu \u2184bea no hyirew w\u2184 awaregyae\u025B  mu?',		
  	choice1:'Nkontanom',
	choice2:  'Nana',
	choice3:  'Nsenom',
	choice4:  'Nkumaafo',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.\n\n Ab)fra nnim adware3 a 3ny3…..',		
  	choice1:'n’anim',
	choice2: 'n’afuru so',
	choice3: 'ne k\u2184n ho',
	choice4: 'ne nsa ho',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.\n\n Aberewa b\u025B di tw\u025B re a, na efi ……..',
		choice1:'n’ano',
	choice2:  'ne nsa',
	choice3:	  'ne nananom',
	choice4:	  'ne poma',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.\n\n Wopam ohufo a, …..',		
  	choice1:'ne koma te',
	choice2:  'woto ne barima',
	choice3:  '\u2184twe sekan',
	choice4:  'wonya as\u025B m',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.\n\n S\u025B  woy\u025B  bi na any\u025B  yiye a, w\u2184fr\u025B  wo……',		
  	choice1:'ay\u025B biagya',
	choice2:  'ay\u025B biagu',
	choice3:  'ay\u025B boafo',
	choice4:  'ay\u025B biakyer\u025B ',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.\n\n Agya ade\u025B  bi w\u2184 h\u2184, s\u025B  wotia n’ayaase a, na \u2184resere. \u025B y\u025B ……',		
  	choice1:'apaso\u2184',
	choice2:  'kaa',
	choice3:  'mpaboa',
	choice4:  'dadefiri',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.\n\n Agya nipa bi w\u2184 h\u2184, \u2184te fie a na n’ab\u2184dwes\u025B  gu ab\u2184nten. \u025B y\u025B …..',		
  	choice1:'ab\u025B ',
	choice2:  'mframa',
	choice3:  'wisiw',
	choice4:  'nsu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.\n\n Kane no na w\u2184fr\u025B  ananses\u025B m s\u025B n?',
	choice1:'Nyankons\u025B m',
	choice2:  'Abas\u025B m',
	choice3:  'B\u2184sr\u025B mka',
	choice4:  'Adomankomas\u025B m',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.\n\n S\u025B nti a tete no na w\u2184nto ananses\u025B m awia ne s\u025B …….',		
  	choice1:'ahuhuro b\u025B de wo',
	choice2:  '\u025B ny\u025B  anigye',
	choice3:  'y\u025B mm\u2184 mmoa din awia',
	choice4:  '\u025B s\u025B e adwumay\u025B ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.\n\n Asantefo atetes\u025B m kyer\u025B  s\u025B …….na w\u2184de egya bae\u025B .',		
  	choice1:'Asonafo',
	choice2:  'Biretufo',
	choice3:  'Aduanafo',
	choice4:  '\u2184yokofo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.\n\n W\u2184ny\u025B  eyinom biako w\u2184 nsagu mu.',		
  	choice1:'w\u2184kata w\u2184n ani',
	choice2:  'w\u2184b\u2184 abosom ne nsamanfo din',
	choice3:  'w\u2184pia w\u2184n ntama gu w\u2184n mmatiri',
	choice4:  'w\u2184yi w\u2184n nan mu mpaboa',
		answer: 1,
  }, 
 {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.\n\n Akanman mu s\u025B  obi resaw na \u2184foforo pagya ne nsa kyer\u025B  no a, \u025B kyer\u025B  s\u025B n?',		
  	choice1:'\u2184nnyae asa',
	choice2:  '\u2184ma no mo',
	choice3:  'dwom no y\u025B  d\u025B ',
	choice4:  '\u2184nnyina h\u2184',
		answer: 2,
  }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 40

startGame = () => {
	questionCounter = 0
	score = 0
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('end.html') 
	}

	questionCounter++
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` 

	const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
	//The next line keep track of the question we are on
	currentQuestion = availableQuestions[questionsIndex]
	question.innerText = currentQuestion.question

	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})

	availableQuestions.splice(questionsIndex, 1)

	acceptingAnswers = true	
}

choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if(!acceptingAnswers) return

		acceptingAnswers = false
	    const selectedChoice = e.target
	    const selectedAnswer = selectedChoice.dataset['number']
	     let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
	    if (classToApply === 'correct') {
	    	incrementScore(SCORE_POINTS)
	    }

	    selectedChoice.parentElement.classList.add(classToApply)

	    setTimeout(() => {
	    	selectedChoice.parentElement.classList.remove(classToApply)
	    	getNewQuestion()

	    }, 3000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()
