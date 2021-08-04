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
  	question:'\u2184barima reware a, otua sika bi ma ne yere no nua mmarimanom, w\u2184fr\u025B  saa sika yi d\u025B n?',
  	choice1:'asew sika',
	choice2: 'ti nsa',
	choice3: 'akonta sekan',
	choice4: 'akonta sika',
  	answer: 3,
  },
  {	
  	question: 'Nsa a edi kan pa ara a \u2184barima de koyi ne ho adi kyer\u025B  \u2184bea no abusua no w\u2184fr\u025B  no',
	choice1: 'awaregye nsa',
	choice2:  'akonta sekan',
	choice3:  '\u2184pono-akyi-b\u2184',
	choice4:  'ti ade',
	answer: 3,
  },
  {
  	question:'Nea edidi so yi nyinaa y\u025B  nokware w\u2184 Akanfo nkyia ho, gye s\u025B ',
  	choice1:'s\u025B  obi rek\u2184gya ne nan a, onkyia',
	choice2: 's\u025B  obi redidi a, yenkyia no',
	choice3: 'yekyia fi nifa so',
	choice4: 'y\u025B mfa y\u025B n nsa b\u025B nkum nkyia',
  	answer: 2,
  },
  {
  	question:'Ansa na aware biara bedi mu no, gye s\u025B  \u2184barima no tu \u2184bea no.',  	
  	choice1: 'nnamfo nyinaa fo',
	choice2:  'awofo fo',
	choice3:  'nuanom agyina',
	choice4:  'ti nsa',
  	answer: 4,
  },
  {
  	question:'Nna dodow a \u025B da Akwasidae ne F\u2184dwo ntam y\u025B ',
  	choice1: 'akron',
	choice2:  'dunum',
	choice3:  'aduonu abien',
	choice4:  'aduonu',
  	answer: 2,
  },
  {
  	question: '\u2184sram a edi kan afe biara mu ne',
		choice1:'\u2184p\u025B nimaa',
	choice2:  '\u2184b\u025B nem',
	choice3:      'Ogyefuo',
	choice4: 	  '\u2184p\u025B p\u2184n',
		answer: 4,
  },
  {
  	question: 'Da a ade rekye ma w\u2184adi Akwasidae y\u025B ',	 
  	choice1: 'Mono Mene',
	choice2:   'F\u2184dwo',
	choice3:   'Awukudae',
	choice4:   'Memeneda Dapaa',
		answer: 4,
  },
  {
  	question: 'Asram dodow ahe na yenya w\u2184 afirinhyia biako mu?',		
  	choice1: 'dubiako',
	choice2:   'dumien',
	choice3:   'dunkron',
	choice4:   'dummi\u025B nsa',
		answer: 2,
  },
  {
  	question: 'Awunyade y\u025B  nnea owufo no de',		
  	choice1:'gya ne mma ne wu akyi',
	choice2:  'mane ne mma',
	choice3:  'ky\u025B  ne nuanom bere a \u2184te ase',
	choice4:  'ma ne nkonta bere a \u2184te ase',
		answer: 1,
  },
  {
  	question: 'Edin b\u025B n na y\u025B de ma obi a osi owufo anan mu hw\u025B  n’agyapade so?',		
  	choice1:'abusuapanyin',
	choice2:  'ananmusini',
	choice3:  'odiadefo',
	choice4:  '\u2184hw\u025B sofo',
		answer: 3,
  },
  {
  	question: 'Hena na \u025B y\u025B  amanne sodi \u2184barima ade w\u2184 Akanfo mu?',		
  	choice1:'ne w\u2184faase',
	choice2:  'n’agya ne w\u2184faase',
	choice3:  'ne babarima',
	choice4:  'n’akonta',
		answer: 3,
  },
  {
  	question: 'Ns\u025B m a obi ka de kyekye n’agyapade ansa na wawu y\u025B  d\u025B n?',
		choice1:'agyinae',
	choice2:  'nsamansew',
	choice3:	  'mmara',
	choice4:	  'adanse',
		answer: 2,
  },
  {
  	question: 'Bere b\u025B n na Akanfo kyia “Afirinhyia pa”?',		
  	choice1:'buronya',
	choice2:  'akwasidae',
	choice3:  'afahy\u025B ',
	choice4:  'yesu amanehunu',
		answer: 3,
  },
  {
  	question: 'Bere b\u025B n na w\u2184ma obi “akwaaba”. Bere a',		
  	choice1:'wakoguare aba',
	choice2:  '\u2184bea awo foforo',
	choice3:  '\u2184rek\u2184 adwuma',
	choice4:  'ofi akwantu mu aba',
		answer: 4,
  },
  {
  	question: 'S\u025B  obi retu kwan a w\u2184ma no',		
  	choice1:'due ne akwantu',
	choice2:  'mo ne akwantu',
	choice3:  'da yiye',
	choice4:  'nantew yiye',
		answer: 4,
  },
  {
  	question: 'S\u025B  obi rekyia \u2184hene na \u2184kwahu ne ntama a, \u025B kyer\u025B  d\u025B n?',		
  	choice1:'obu',
	choice2:  'onuad\u2184',
	choice3:  'nimde\u025B ',
	choice4:  'koroy\u025B ',
		answer: 1,
  },
  {
  	question: 'Akyemfo afahy\u025B  a wodi ne d\u025B n?',		
  	choice1:'Ohum',
	choice2:  'Adae k\u025B se',
	choice3:  'Akwamm\u2184',
	choice4:  'Aboakyere',
		answer: 1,
  },
  {
  	question: 'Hena na \u2184yan atumpan w\u2184 afahy\u025B  ase?',		
  	choice1:'Okunini',
	choice2:  '\u2184kyer\u025B ma',
	choice3:  '\u2184brafo',
	choice4:  '\u025B s\u025B n',
		answer: 2,
  },
  {
  	question: 'Akanfo afahy\u025B  biara w\u2184y\u025B  eyi w\u2184 ase',		
  	choice1:'wokum \u2184wansan',
	choice2:  'w\u2184noa aburoduan',
	choice3:  'wogu nsa',
	choice4:  'w\u2184pam nsamanfo',
		answer: 3,
  },
  {
  	question: 'Aboa b\u025B n na Simpafo kyere de di Aboakyere afahy\u025B ?',		
  	choice1:'Gyata',
	choice2:  '\u2184seb\u2184',
	choice3:  '\u2184tor\u2184m',
	choice4:  '\u2184nwansan',
		answer: 4,
  },
  {
  	question: 'S\u025B  obi de Tawia a, na odi …..akyi.',		
  	choice1:'M\u025B nsa',
	choice2:  'Ataa',
	choice3:  'Badu',
	choice4:  'Nkoroma',
		answer: 2,
  },
  {
  	question: 'Edin yi mu nea \u025B w\u2184 he na \u025B y\u025B  kradin?',		
  	choice1:'Nyakoaa',
	choice2:  'Kwabena',
	choice3:  'Agyei',
	choice4:  'fr\u025B mp\u2184n',
		answer: 2,
  },
  {
  	question: 'Edin b\u025B n na w\u2184de ma abeawa a w\u2184woo no Fida?',		
  	choice1:'Akua',
	choice2:  'Adwoa',
	choice3:  'Yaa',
	choice4:  'Afua',
		answer: 4,
  },
  {
  	question: 'Edin a edidi so yi mu nea \u025B w\u2184 he na nnap\u2184nna din?',		
  	choice1:'Fofie',
	choice2:  'B\u025B y\u025B \u025B d\u025B n',
	choice3:  'Minta',
	choice4:  'Kwame',
		answer: 1,
  },
  {
  	question: 'Amanne b\u025B n na Akanfo y\u025B  de twe mmeawa ba mpanyin mu?',		
  	choice1:'asub\u2184',
	choice2:  'aware',
	choice3:  'bragoru',
	choice4:  'nhyira',
		answer: 3,
  },
  {
  	question: 's\u025B  w\u2184rebegoru abeawa bi bra a, hena na wodi kan k\u2184b\u2184 no amane\u025B ?',		
  	choice1:'\u2184hene',
	choice2:  'Abusuapanyin',
	choice3:  '\u2184hemmea',
	choice4:  'Sanaahene',
		answer: 3,
  },
  {
  	question: 'S\u025B  wogu abeawa bi kyiribra a,',		
  	choice1:'\u025B ma abeawa no nya dwetiri',
	choice2:  '\u025B ma abeawa no nya kunu pa',
	choice3:  '\u025B ma abeawa no ne n’abusuafo animuonyam',
	choice4:  'egu abeawa no ne n’abusuafo anim ase',
		answer: 4,
  },
  {
  	question: 's\u025B  Akanfo ka s\u025B  “abeawa” bi abu ne nsa” a na \u025B kyer\u025B  d\u025B n?',		
  	choice1:'Way\u025B  bra',
	choice2:  'Ne nsa ay\u025B  tenten',
	choice3:  'Owiawia nne\u025B ma',
	choice4:  'Ne nsa ay\u025B  duru',
		answer: 1,
  },
  {
  	question: 'Din b\u025B n na Akanfo de ma onipa a w\u2184awuwu dedaadaw no?',		
  	choice1:'Ahotewfo',
	choice2:  'Nsamanfo',
	choice3:  'Ateasefo',
	choice4:  'ab\u2184fo',
		answer: 2,
  },
  {
  	question: 'akanman mu s\u025B  obi wu a,',		
  	choice1:'wogu n’nom nsu',
	choice2: 'w\u2184de no to ne benkum so',
	choice3: 'wonso ne mu',
	choice4: 'w\u2184teatea no',
		answer: 1,
  },
  {
  	question: 'obi wu a abusuafo tumi de n’agyapade hy\u025B …..nsa ma \u2184hw\u025B  so.',		
  	choice1:'Okunafo',
	choice2:  'Ne babarima',
	choice3:  'Odiadefo',
	choice4:  'N’adamfo',
		answer: 3,
  },
  {
  	question: 'S\u025B  obi anto ne k\u2184n anwu a, w\u2184fr\u025B  no',		
  	choice1:'\u2184saman',
	choice2:  'fea',
	choice3:  'obusufo',
	choice4:  '\u2184t\u2184fo',
		answer: 4,
  },
  {
  	question: 'agya rek\u2184 no ogyaw me ade bi, wosoma no a, \u2184b\u025B k\u2184 nyinaa na \u2184resu. \u025B y\u025B  d\u025B n?',		
  	choice1:'\u2184kraman',
	choice2:  'frama',
	choice3:  'l\u2184re',
	choice4:  'l\u025B t\u025B ',
		answer: 3,
  },
  {
  	question: 'Agya rek\u2184 no ogyaw me ade bi, wosoma no a \u2184renk\u2184 gye s\u025B  woapae n’atifi ansa. \u025B y\u025B  d\u025B n?',
		choice1:'Dadewa',
	choice2:  'Akoa',
	choice3:  	  'l\u2184re',
	choice4:	  'l\u025B t\u025B ',
		answer: 1,
  },
  {
  	question: 'Agya rek\u2184 no ogyaw me akongua f\u025B f\u025B  bi s\u025B  mentena so, nanso saa akongua no obiara ntumi ntena so . \u025B y\u025B  d\u025B n?',
		choice1:'As\u025B s\u025B gua',
	choice2:  'Bemu',
	choice3:	  'bor\u2184de',
	choice4:	  'akentengua',
		answer: 2,
  },
  {
  	question: 'Agya rek\u2184 no ogyaw me akoa bi, saa akoa no s\u025B  \u2184k\u2184m de no a, ontumi nnyina h\u2184, gye s\u025B  wadidi amee, \u025B y\u025B  d\u025B n?',
		choice1:'\u2184kraman',
	choice2:  'kotoku',
	choice3:	  'agyinamoa',
	choice4: 	  'abofra',
		answer: 2,
  },
  {
  	question: 'Ns\u025B nkyer\u025B nne a obi a \u2184red\u2184w afuw y\u025B  w\u2184 asaase no so ne s\u025B ',		
  	choice1:'osi nk\u025B t\u025B ',
	choice2:  'otua asafe',
	choice3:  'osum otimp\u2184n',
	choice4:  'osum ohwim',
		answer: 1,
  },
  {
  	question: 'S\u025B  wuhu s\u025B  abofra bi tinwi y\u025B  mp\u025B s\u025B mp\u025B s\u025B  a \u025B kyer\u025B  s\u025B ',		
  	choice1:'\u2184y\u025B  \u2184k\u2184mfo',
	choice2:  '\u2184y\u025B  Badu',
	choice3:  '\u2184y\u025B  abosomma',
	choice4:  '\u2184y\u025B  \u2184saman',
		answer: 3,
  },
  {
  	question: 'S\u025B  akyekyere ne nwaw w\u2184 \u2184hene bi akyeampoma so a na \u025B kyer\u025B  s\u025B ',		
  	choice1:'\u2184hene no akra boa ne nwaw ne akyekyere',
	choice2:  '\u2184hene no p\u025B  asomdwoe',
	choice3:  '\u2184hene no kyi nwaw ne akyekyere',
	choice4:  '\u2184hene no p\u025B  nwaw ne akyekyere',
		answer: 2,
  },
  {
  	question: 'Nea edidi so yi mu nea \u025B w\u2184 he na wuhu w\u2184 \u2184hene bi akyeampoma so a, \u025B kyer\u025B  s\u025B  \u2184w\u2184 tumi sen \u2184hene biara',
		choice1:'gyata',
	choice2:  '\u2184seb\u2184',
	choice3:	  '\u2184k\u2184re',
	choice4:	  '\u2184sono',
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

	    }, 1000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()
