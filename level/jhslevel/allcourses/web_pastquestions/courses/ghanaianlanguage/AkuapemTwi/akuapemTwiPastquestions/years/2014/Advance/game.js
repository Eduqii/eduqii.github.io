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
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n\n S\u025B  obi k\u2184to ne y\u2184nko na \u2184redidi a, okyia no',
  	choice1:'Nya nkwa',
	choice2: 'Ayikoo',
	choice3: 'Adidiabrada',
	choice4: 'Kita mu',
  	answer: 4,
  },
  {	
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n\n Akanfo bu obi a ohu nnipa a onkyia no d\u025B n?',	
  	choice1: 'Atetekwaa',
	choice2:  'Nyansafo',
	choice3:  'Onihafo',
	choice4:  'Nimdefo',
	answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n\n Obi kyia ne y\u2184nko awia na w\u2184redi ntetewmu a, nkyia a ne y\u2184nko no de gyaw no kwan ne',
  	choice1:'“due ne aw\u2184w”',
	choice2: '“da yiye oo”',
	choice3: '“Due ne awia”',
	choice4: '“due ne onwini”',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n\n Akanfo tete aware ahorow no mu biako ne',  	
  	choice1: 'd\u2184mfa',
	choice2:  'asiwa',
	choice3:  'ayefare',
	choice4:  'dwetiri',
  	answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n\n Sika b\u025B n na \u2184barima tua ma ne yere nua mmarimanom bere a w\u2184reware?',  	
  	choice1: 'Ti ade',
	choice2:  'Ti nsa',
	choice3:  'Danta',
	choice4:  'Akontasekan',
  	answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n\n Amanne b\u025B n na Akanfo y\u025B  nnaw\u2184twe da de gye abofra foforo to abusua mu?',
		choice1:'Hyirewgu',
	choice2:  'Awaregu',
	choice3:	  'Abadinto',
	choice4:	  'Abisa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n\n W\u2184fr\u025B  abofra a odi ntaafo akyi no d\u025B n?',
	 choice1: 'Anane',
	choice2:   'Tawia',
	choice3:	'Nyankomago',
	choice4:	'atuak\u2184san',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Ns\u025B mfua a edidi so yi nea \u025B w\u2184 he na \u025B y\u025B  Anom Kasadwini.', 		
  	choice1: 'Ananses\u025B m',
	choice2:   'Buronya',
	choice3:   'nkurob\u2184',
	choice4:   'abas\u025B m',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Akanfo kasadwini ahorow ne',		
  	choice1:'akyer\u025B w ne anom kasadwini',
	choice2:  'ayan ne anases\u025B m',
	choice3:  'akyer\u025B w ne apae',
	choice4:  'ab\u025B bu ne akyer\u025B w kasadwini',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Yi akyer\u025B w kasadwini ahorow ho nhw\u025B so w\u2184 nea edidi so yi mu.',
		choice1:'Ab\u025B bu ne abas\u025B m',
	choice2:  'Apae ne ayan',
	choice3:	  'Ahw\u025B goru ne anwens\u025B m',
	choice4:	  'Abas\u025B m ne amoma',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Nea edidi so yi mu biako y\u025B  Akyer\u025B w kasadwini su',		
  	choice1:'Enni \u2184kyer\u025B wfo p\u2184tee',
	choice2:  '\u025B y\u025B  \u2184manfo agyapade',
	choice3:  'Enni bere a \u025B bae',
	choice4:  '\u025B w\u2184 \u2184kyer\u025B wfo p\u2184tee',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Nea edidi so yi mu biako y\u025B  Akyer\u025B w Kasadwini su.',		
  	choice1:'\u025B w\u2184 \u2184kyer\u025B fo p\u2184tee',
	choice2:  '\u025B nni Okyer\u025B wfo p\u2184tee',
	choice3:  '\u025B y\u025B  0manfo agyapade',
	choice4:  '\u025B nni bere a \u025B bae',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n \u2184barima ne \u2184bea a w\u2184b\u2184 abusua baako (bogya abusua) no ……',		
  	choice1:'Tumi ware w\u2184n ho',
	choice2:  'Ntumi ny\u025B  ayi mm\u2184 mu',
	choice3:  'Ntumi nware w\u2184n ho',
	choice4:  'Tumi t\u2184n abusua agyapade',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n D\u025B n sunsum na agya de b\u2184 ne mma ho ban?',	
  	choice1:'Bosom',
	choice2:  'Nyankopasakyi',
	choice3:  'nt\u2184n',
	choice4:  'bosomak\u2184mfo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n S\u025B  \u2184barima ne \u2184bea a w\u2184b\u2184 abusua koro ware a, Akanfo bu no s\u025B  \u025B y\u025B  d\u025B n?',		
  	choice1:'Bragoru',
	choice2:  'Mogyafra',
	choice3:  'y\u2184nkod\u2184',
	choice4:  'kyiribra',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Asona abusuakuw no akraboa y\u025B  aboa b\u025B n?',		
  	choice1:'Ampan',
	choice2:  'Kwaakwaadabi',
	choice3:  '\u2184kraman',
	choice4:  '\u025B ko\u2184',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n …….y\u025B  Aduanafo akraboa.',		
  	choice1:'\u2184kraman',
	choice2:  'Anene',
	choice3:  'Akoo',
	choice4:  'Akoroma',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Abusuakuw b\u025B n na akoroma y\u025B  w\u2184n akraboa?',		
  	choice1:'Ayokofo',
	choice2:  'Asonafo',
	choice3:  '\u025B ko\u2184nafo',
	choice4:  'Agonafo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.\n\n Abusua biara w\u2184 ……a emu nnipa no nyinaa hy\u025B  n’ase.',		
  	choice1:'Bamkyini',
	choice2:  'Bota',
	choice3:  'As\u025B s\u025B gua',
	choice4:  'Abusuapanyin',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho. \n\n Mfaso a \u2184kanni nya w\u2184 n’abusua mu biako ne ….',		
  	choice1:'Nhomanim ne aho\u2184f\u025B ',
	choice2:  'aho\u2184den ne tumidi',
	choice3:  'ani\u025B den ne akokurokos\u025B m',
	choice4:  's\u025B  w\u2184y\u025B  ayi b\u2184 mu na w\u2184boa w\u2184n ho w\u2184n ho',
		answer: 4,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n\n Adae ahorow ahe na Akanfo w\u2184?',		
  	choice1:'Abien',
	choice2:  'Abiesa',
	choice3:  'Anum',
	choice4:  'Ason',
		answer: 1,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n\n Asram kuw yi mu biara kura nnafua aduasa baako.',		
  	choice1:'\u2184b\u025B nem, Ogyefuo, \u025B b\u2184',
	choice2:  '\u2184p\u025B p\u2184n, \u2184b\u025B nem, Kitawonsa',
	choice3:  '\u2184p\u025B nimaa, Kitawonsa, Oforisuo',
	choice4:  '\u2184sanaa, Ahinime, Ayewohomum\u2184',
		answer: 2,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n\n Din foforo b\u025B n na Akanfo de fr\u025B  nnaw\u2184twe asia?',		
  	choice1:'Adaduasa',
	choice2:  'Adaduosia',
	choice3:  'Adaduanan',
	choice4:  'adaduw\u2184twe',
		answer: 3,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n\n Awukudae t\u2184 mp\u025B n ahe w\u2184 Akanfo asranna mu?',		
  	choice1:'Awotwe',
	choice2:  'Ason',
	choice3:  'Asia',
	choice4:  'Akron',
		answer: 4,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n\n Afahy\u025B  b\u025B n na Akanfo binom di de huro \u2184k\u2184m?',		
  	choice1:'Kundum',
	choice2:  'Adaek\u025B se',
	choice3:  'Ohum',
	choice4:  'Aboakyere',
		answer: 3,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n\n Efutufo kyere aboa na ……….twa Odwira.',		
  	choice1:'Akuapemfo',
	choice2:  'Nzemafo',
	choice3:  'Asantefo',
	choice4:  'Fantefo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n\n Akanfo akyiwade no mu biako ne s\u025B  ….',
		choice1:'y\u025B k\u2184da a, y\u025B nkra amannifo',
	choice2:  'yehyia obi an\u2184pa a, yenkyia',
	choice3:	  'yeguare a y\u025B nto dwom',
	choice4:	  'yehyia \u2184h\u2184ho a, yemmisa no as\u025B m',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n\n \u025B y\u025B  akyiwade s\u025B  yedidi a,',		
  	choice1:'Y\u025B we nam bob\u2184 dompe mu',
	choice2:  'Y\u025B nom nkwan taforo y\u025B n nsa',
	choice3:  'Y\u025B tena agua tiatia so',
	choice4:  'Y\u025B de y\u025B n nsa benkum si fam',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n\n Akanfo gyidi s\u025B  onipa wu a, ….',		
  	choice1:'\u2184k\u2184tena asamando',
	choice2:  'na wawu koraa',
	choice3:  '\u2184k\u2184tena sukwan so',
	choice4:  '\u2184nenam mfikyiri',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n\n Owu a obi anto ne k\u2184n anwu no Akanfo fr\u025B  ne d\u025B n?',
		choice1:'Owupa',
	choice2: 'at\u2184fowu',
	choice3:     'ohiawu',
	choice4:	 'nkwaseawu',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n\n S\u025B  obi wu a, hena na \u2184hw\u025B  ayiy\u025B  no ho ntotoe nyinaa so?',
		choice1:'Ahenkwaa',
	choice2:  'Ayipasohene',
	choice3:	  'Okunafo',
	choice4:	  'Nkwaakwaahene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n\n Y\u025B fr\u025B  nne\u025B ma a owufo bi gyaw w\u2184 ne wu akyi no',		
  	choice1:'nsab\u2184de',
	choice2:  'ayiaseka',
	choice3:  'sora',
	choice4:  'awunyade',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n\n Na minim s\u025B  abofra yi ano awo saa da.',
		choice1:'Nim serew',
	choice2:  'Nim kasa',
	choice3:	  'Nim su',
	choice4:	  'Nim adidi',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n\n Nn\u025B  nnansa na metee s\u025B  \u2184h\u2184ho no abu ne k\u025B t\u025B  mu. Eyi kyer\u025B  s\u025B ',
		choice1:'Aguan',
	choice2:  'Ada',
	choice3:	  'Ak\u2184 nsan aba',
	choice4:	  'Awu',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n\n Memeneda nkwan no de, na \u025B nka se.',		
  	choice1:'\u025B nam pii w\u2184 mu',
	choice2:  'Ani w\u2184 srade',
	choice3:  '\u025B y\u025B  d\u025B  papa',
	choice4:  '\u025B ny\u025B  d\u025B  koraa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n\n Toa b\u025B  yi so: “Gua b\u025B ba a, efi …”',		
  	choice1:'Awiei',
	choice2:  'aguat\u2184nde',
	choice3:  'an\u2184pa',
	choice4:  'nnipa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n\n Woank\u2184 bi a wose y\u025B ank\u2184 kyer\u025B  s\u025B  ……..',		
  	choice1:'woamma nt\u025B m',
	choice2:  'obiara amm\u025B fr\u025B  wo se k\u2184ko',
	choice3:  'wunnim \u2184haw a y\u025B faa mu',
	choice4:  'na wonenam h\u2184 kwa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 mmofra agorunnwom ne nnwuma ho.\n\n Agoru b\u025B n na mmofra de dwom “sii-sii , sii-dadakoo” di?',
  	choice1:'Sansankoroma',
	choice2:  'Amuamuani',
	choice3:  'Abosi',
	choice4:  'Mpempenaa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 mmofra agorunnwom ne nnwuma ho.\n\n Agoru antoakyire mu no, mmofra to dwom:',		
  	choice1:'“obi ba o, yee yei! Obewu o, yee yei!”',
	choice2:  '“adonko fa me k\u2184, faa dee”',
	choice3:  '“sansan koroma won i awu o”',
	choice4:  '“sansan d\u2184boro, d\u2184boro d\u2184 sansan”',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 mmofra agorunnwom ne nnwuma ho.\n\n Wok\u2184 sikadwumfo adwuma mu a, d\u025B n na wubenya at\u2184?',		
  	choice1:'\u2184sosow ne dadefiri',
	choice2:  'Mp\u025B tea ne asomuade',
	choice3:  'As\u025B s\u025B gua ne nhene',
	choice4:  'Adaka ne \u2184pon',
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

	    }, 1000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()
