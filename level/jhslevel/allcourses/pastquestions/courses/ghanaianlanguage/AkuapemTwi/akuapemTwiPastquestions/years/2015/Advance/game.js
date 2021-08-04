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
  	question:'\u2184bea wo abofra a, w\u2184ma no',  	
  	choice1:'Dammirifua',
	choice2: 'Hy\u025B den',
	choice3: 'Darekena',
	choice4: 'Tirinkwa',
  	answer: 4,
  },
  {	
  	question: 'Wudidi na obi ma wo kita mu a, wubegye so d\u025B n?',
	choice1: 'Magyae mu',
	choice2:  'Yoo mate',
	choice3:  'Mikura no',
	choice4:  'Woamma nt\u025B m',
	answer: 3,
  },
  {
  	question:'Paw ap\u025B nt\u025B din a \u025B w\u2184 nea edidi so yi mu.',
  	choice1:'Asaase asa',
	choice2: 'Agyeman',
	choice3: 'Nyankomago',
	choice4: 'Akua Badu',
  	answer: 1,
  },
  {
  	question:'Hyehy\u025B  din yi nnidiso nnidiso',  	
  	choice1: 'Yaw, Kwasi, Kwabena',
	choice2:  'Kwabena, Kwaku, Yaw',
	choice3:  'Kwame, Yaw, Kofi',
	choice4:  'Kwaku, Kwasi, Kwadwo',
  	answer: 2,
  },
  {
  	question:'\u025B y\u025B  akyiwade s\u025B  yedidi a',  	
  	choice1: 'Y\u025B we nam',
	choice2:  'Y\u025B fr\u025B  obi ma odi bi',
	choice3:  'Y\u025B de y\u025B n nsa si fam',
	choice4:  'Y\u025B nom nsu',
  	answer: 3,
  },
  {
  	question: 'Wo maame papa y\u025B  wo d\u025B n',		
  	choice1:'Nanabea',
	choice2:  'Nanabarima',
	choice3:  'w\u2184fasewa',
	choice4:  'papa panyin',
		answer: 2,
  },
  {
  	question: 'Maame Yaa ne maame Akua ware \u2184barima biako, enti w\u2184y\u025B ',	 
  	choice1: 'akorafo',
	choice2:   'nnamfo',
	choice3:   'anuanom',
	choice4:   'atip\u025B nfo',
		answer: 1,
  },
  {
  	question: 'Wo maame nuabarima y\u025B  wo d\u025B n?',		
  	choice1: 'w\u2184fa',
	choice2:   'w’agya kumaa',
	choice3:   'w\u2184fasewa',
	choice4:   'w\u2184fase',
		answer: 1,
  },
  {
  	question: 'Wogoru abeawa bi bra a na \u025B kyer\u025B  s\u025B ',		
  	choice1:'n’abusuafo w\u2184 sika',
	choice2:  'ne maame p\u025B  n’as\u025B m',
	choice3:  'ne ho ay\u025B  f\u025B ',
	choice4:  'wanyin',
		answer: 4,
  },
  {
  	question: 'S\u025B  w\u2184regoru abeawa bi bra a, w\u2184ma no',		
  	choice1:'Otuo',
	choice2:  'Bodua',
	choice3:  '\u2184t\u2184',
	choice4:  'ayitama',
		answer: 3,
  },
  {
  	question: 'Ade titiriw a Akanfo gyina so ware ne',		
  	choice1:'aho\u2184f\u025B ',
	choice2:  'ahosiesie gonn',
	choice3:  'anotew b\u025B reb\u025B re',
	choice4:  'suban pa',
		answer: 4,
  },
  {
  	question: '\u2184barima ne \u2184bea ware a, na awofonom ab\u025B y\u025B ',
		choice1:'Nkontafo',
	choice2:  'Nkumaafo',
	choice3:	  'Nsewnom',
	choice4:	  'Akorafo',
		answer: 3,
  },
  {
  	question: 'yiregu ba aware mu a, na \u025B kyer\u025B  s\u025B  aware no',		
  	choice1:'Agu',
	choice2:  'as\u2184',
	choice3:  'afi ase',
	choice4:  'akorafo',
		answer: 1,
  },
  {
  	question: '\u2184sram b\u025B n na ekura nnafua 28 anaa 29?',		
  	choice1:'Ogyefuo',
	choice2:  '\u2184b\u025B nem',
	choice3:  'Oforisuo',
	choice4:  'Kitawonsa',
		answer: 1,
  },
  {
  	question: 'Dapaa ahe na Akanfo w\u2184',		
  	choice1:'Anan',
	choice2:  'Abien',
	choice3:  'Abi\u025B sa',
	choice4:  'Anum',
		answer: 2,
  },
  {
  	question: 'W\u2184ka s\u025B  oi aka nkyene agu a, \u025B kyer\u025B  d\u025B n?',
		choice1:'Onni nkyene',
	choice2:  'Watu kwan',
	choice3:	  'Wakohintaw',
	choice4:	  'Wawu',
		answer: 4,
  },
  {
  	question: 'Nsawa y\u025B  …..a \u2184manfo de boa owufo bi abusuafo.',		
  	choice1:'Ntama',
	choice2:  'Sika',
	choice3:  'Nnuan',
	choice4:  'Nsu',
		answer: 2,
  },
  {
  	question: 'Okuafo ma y\u025B n mfumduan. D\u025B n na \u2184b\u2184mm\u2184fo ma y\u025B n?',		
  	choice1:'Hanam',
	choice2:  'Nkesua',
	choice3:  'Atosode',
	choice4:  'Nnuaba',
		answer: 1,
  },
  {
  	question: 'Mpanyimfo hyia a, hena na w\u2184kasa fa no so?',		
  	choice1:'Odikuro',
	choice2:  '\u2184kyeame',
	choice3:  '\u2184safohene',
	choice4:  '\u025B s\u025B n',
		answer: 2,
  },
  {
  	question: 'Akanman mu \u2184hene b\u025B n na \u2184w\u2184 tumi sen ahemfo no nyinaa?',		
  	choice1:'Sanaahene',
	choice2:  'Kurontihene',
	choice3:  'Dabehene',
	choice4:  '\u2184manhene',
		answer: 4,
  },
  {
  	question: 'Nkurow nketewa mu, hena na \u2184hene fa no so fr\u025B  \u2184manfo\u2184.',
		choice1:'\u2184brafo',
	choice2:  '\u025B s\u025B n',
	choice3:	  'dawub\u2184fo',
	choice4:	  'ahenkwaa',
		answer: 3,
  },
  {
  	question: 'Nipa titiriw a \u025B paw \u2184hene no mu biako ne ….',		
  	choice1:'\u2184kyer\u025B ma',
	choice2:  '\u2184brafo',
	choice3:  '\u2184hemmea',
	choice4:  'dawub\u2184fo',
		answer: 3,
  },
  {
  	question: '\u2184hene b\u025B n na \u2184hw\u025B  nsa so w\u2184 ahemfi',		
  	choice1:'Dabehene',
	choice2:  '\u2184hemmea',
	choice3:  'Kurontihene',
	choice4:  'Sanaahene',
		answer: 4,
  },
  {
  	question: 'Obi tew owufo bi ntoa a, ase ne d\u025B n?',		
  	choice1:'Wadi n’ade',
	choice2:  'Wat\u2184 funnaka',
	choice3:  'wab\u2184 da asie no',
	choice4:  'wak\u2184 ayi ase aba',
		answer: 1,
  },
  {
  	question: 'Nwaw ne akyekyere gyina h\u2184 ma d\u025B n?',		
  	choice1:'nt\u2184kwaw',
	choice2:  'asomdwoe',
	choice3:  'patapaa',
	choice4:  'aho\u2184hare',
		answer: 2,
  },
  {
  	question: 'S\u025B  woka as\u025B m kyer\u025B  obi na \u2184wosow ne ti a, \u025B kyer\u025B  s\u025B ',		
  	choice1:'\u2184renka hwee',
	choice2:  '\u2184mpene so',
	choice3:  'ka as\u025B m no bio',
	choice4:  'wagye ato mu',
		answer: 2,
  },
  {
  	question: 'Akanman mu ntama tuntum ne k\u2184k\u2184\u2184 gyina h\u2184 ma d\u025B n',		
  	choice1:'anigye',
	choice2:  'ahos\u025B p\u025B w',
	choice3:  'awer\u025B how',
	choice4:  'ahot\u025B ',
		answer: 3,
  },
  {
  	question: 'Ananses\u025B m mu no, Adanko ho as\u025B m taa kyer\u025B ',		
  	choice1:'abufuw',
	choice2:  'anihaw',
	choice3:  'asisi',
	choice4:  'aho\u2184hare',
		answer: 4,
  },
  {
  	question: 'Agya rek? ogyaw me abofra bi. Wosoma no a, ?nk? . wok? nso a, na odi w’akyi. ?y? d?n?Agya rek\u2184 ogyaw me abofra bi. Wosoma no a, \u2184nk\u2184 . wok\u2184 nso a, na odi w’akyi. \u025B y\u025B  d\u025B n',
		choice1:'Onipa sunsuma',
	choice2:  'Onipa nsateaa',
	choice3:	  'Onipa nan',
	choice4: 	  'Onipa nsa',
		answer: 1,
  },
  {
  	question: 'Agya ade bi w\u2184 h\u2184. \u2184nk\u2184 asu nanso daa \u2184w\u2184 nsu w\u2184 n’ahina mu. \u025B y\u025B  d\u025B n?',
		choice1:'Mako',
	choice2: 'nt\u2184rewa',
	choice3:	 'bor\u2184fere',
	choice4:	 'kube',
		answer: 4,
  },
  {
  	question: 'Mpanyin kae a w\u2184mmoa s\u025B : wusum nkontopo afiri a, wuyi',
		choice1:'nyansa',
	choice2:  'kasabr\u025B ',
	choice3:	  'nokware',
	choice4:	  'ayamuye',
		answer: 2,
  },
  {
  	question: 'Maame no ka kyer\u025B \u025B  ne ba no se: wok\u2184 aware a',
		choice1:'kasa',
	choice2:  'didi',
	choice3:	  'bisa',
	choice4:	  'tena ase',
		answer: 3,
  },
  {
  	question: 'Toa saa \u025B b\u025B  yi so: woforo dua pa a, na',		
  	choice1:'wopia wo',
	choice2:  'w\u2184kamfo wo',
	choice3:  'w\u2184ma wo amo',
	choice4:  'w\u2184b\u2184 nsam ma wo',
		answer: 1,
  },
  {
  	question: 'Akanfo yi apae a, w\u2184de ….. na etwa to.',		
  	choice1:'Nyira',
	choice2:  'Nnome',
	choice3:  '\u2184fr\u025B ',
	choice4:  'nkurob\u2184',
		answer: 2,
  },
  {
  	question: 'Akanfo de mmor\u2184nsa yi apae a, w\u2184de nsa no gu k\u2184nk\u2184 no mu mp\u025B n ahe”',
		choice1:'Mp\u025B n asia',
	choice2:  'Mpr\u025B nsa',
	choice3:	  'Mp\u025B n anan',
	choice4:	  'Mp\u025B n anum',
		answer: 2,
  },
  {
  	question: 'Akyemfo afahy\u025B  titiriw ne',		
  	choice1:'Bakatue',
	choice2:  'Aboakyere',
	choice3:  'Ohum',
	choice4:  'Kundum',
		answer: 3,
  },
  {
  	question: 'Dwumadi titiriw b\u025B n na Akanfo de wie afahy\u025B ?',		
  	choice1:'akwamm\u2184',
	choice2:  'aguab\u2184',
	choice3:  'hyirewgu',
	choice4:  'nkankye',
		answer: 2,
  },
  {
  	question: 'Aman abien w\u2184 Ghana ha a w\u2184n mmrane ne K\u2184t\u2184k\u2184',		
  	choice1:'Akuapem ne Asante',
	choice2:  'Kwawu ne Akyem',
	choice3:  'Akuapem ne Awawu',
	choice4:  'Asante ne Nzema',
		answer: 4,
  },
  {
  	question: 'D\u025B n na atetes\u025B m kyer\u025B  s\u025B  \u2184k\u2184mfo An\u2184kye de mpaboa foroe?',		
  	choice1:'Mpampuro',
	choice2:  'Kokosi',
	choice3:  'bor\u2184fere',
	choice4:  'ab\u025B ten',
		answer: 4,
  },
  {
  	question: 'Hena na \u2184de ne nsa tuu \u2184ware wu \u2184bo mu no',		
  	choice1:'\u2184k\u2184mfo An\u2184kye',
	choice2:  'Ansa Sasraku',
	choice3:  '\u2184s\u025B e Bonsu',
	choice4:  '\u2184koforobo\u2184',
		answer: 1,
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
