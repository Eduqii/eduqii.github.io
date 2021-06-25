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
  	question:'Nkyia de d\u025B n na \u025B ba obi so?',
   	choice1:'Awer\u025B how ne animka',
	choice2: 'Osu ne menaasep\u2184w',
	choice3: 'Ahos\u025B p\u025B w, obu ne nidi',
	choice4: 'Nyansa ne nitan',
  	answer: 3,
  },
  {
  	question:'\u025B hefa na y\u025B te nkyia “hy\u025B  den?”',
  	choice1:'Ayiase',
	choice2: 'Awaregye ase',
	choice3: 'Nkurob\u2184 mu',
	choice4: 'Ayeforohyia ase',
  	answer: 1,
  },
  {	
  	question: 'Akanfo taa kyia akokoaa a w\u2184awo no foforo',
	choice1: 'Ayikoo ne awo',
	choice2:  'Aba-a-tena-ase',
	choice3:  'Kos\u025B kos\u025B ',
	choice4:  'Nkyer\u025B  oo',
	answer: 2,
  },
  {
  	question:'Aware mu no, hefo na wogu \u2184bea no hyirew?',  	
  	choice1: 'Ad\u2184fonom',
	choice2:  'Nsewnom',
	choice3:  'Nkontanom',
	choice4:  'Nkumaafo',
  	answer: 4,
  },
  {
  	question:'S\u025B  \u2184bea bi kunu ka baabi na owufo no nuabarima ware no a, \u025B y\u025B ……',
  	choice1: 'Ay\u025B te',
	choice2:  'Kunaware',
	choice3:  'Asiwa',
	choice4:  'Mpenaware',
  	answer: 2,
  },
  {
  	question: 'Abofra a ne na dii awommawu ansa na w\u2184rewo no no y\u025B …..',		
  	choice1:'Ankonam',
	choice2:  'K\u2184sanba',
	choice3:  '\u2184defo',
	choice4:  'Oduefo',
		answer: 2,
  },
  {
  	question: 'Din ahorow yi mu nea \u025B w\u2184 he na \u025B y\u025B  ap\u025B nt\u025B din?',	 
  	choice1: 'Kaakyire',
	choice2:   'Asaseasa',
	choice3:   'Ahenkan',
	choice4:   'Piesie',
		answer: 2,
  },
  {
  	question: 'Duku y\u025B  abofra a \u2184t\u2184 so ……. w\u2184 awo ntoatoaso mu.',		
  	choice1: 'dunan',
	choice2:   'dunum',
	choice3:   'dubiako',
	choice4:   'du',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho Akanfo Kasadwini gu ahorow ahe?',		
  	choice1:'Anum',
	choice2:  'Anan',
	choice3:  'Abi\u025B sa',
	choice4:  'Abien',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho.\n\n Nea edidi so yi mu biako y\u025B  Anom Kasadwini.',		
  	choice1:'Anwens\u025B m',
	choice2:  'Abas\u025B m',
	choice3:  'Ahw\u025B goru',
	choice4:  'Ananses\u025B m',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho.\n\n Nea \u025B w\u2184 he na \u025B y\u025B  Akyer\u025B w Kasadwini?',		
  	choice1:'Amoma',
	choice2:  'Nsaguo',
	choice3:  'Anwens\u025B m',
	choice4:  'Apae',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho.\n\n Anom Kasadwini su biako ne s\u025B  ….',
		choice1:'\u025B y\u025B  \u2184man no nyinaa dea',
	choice2:  '\u025B w\u2184 \u2184kyer\u025B wfo p\u2184tee',
	choice3:	  'enni nhyehy\u025B e p\u2184tee',
	choice4:	  'enni \u2184y\u025B fo ne atiefo',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n\n Akanfo gyidi ne s\u025B  nt\u2184n sunsum no fi …….',
		choice1:'\u025B na',
	choice2:  'W\u2184fa',
	choice3:	  'Agya',
	choice4:	  'Abusuapanyin',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n\n Abusuakuw b\u025B n na w\u2184n akraboa no ara y\u025B  w\u2184n din?',		
  	choice1:'Aduana',
	choice2:  '\u025B ko\u2184na',
	choice3:  'Agona',
	choice4:  'Asakyiri',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n\n Abusuakuw b\u025B n na w\u2184w\u2184 akraboa abien?',		
  	choice1:'Asona',
	choice2:  '\u025B ko\u2184na',
	choice3:  'Agona',
	choice4:  'Aduana',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n\n  ……….. y\u025B  Agona abusuakuw no akraboa.',		
  	choice1:'Kwaakwaadabi',
	choice2:  'Akoroma',
	choice3:  'Akoo',
	choice4:  '\u025B ko\u2184',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n\n Akanman mu, hena ne abusua no nyinaa ti?',		
  	choice1:'Abusuapanyin',
	choice2:	  'Ayipasohene',
	choice3:	  'Nkwaankwaahene',
	choice4: 	  'Adadifo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.\n\n Ade titiriw b\u025B n na Akamfo hw\u025B  ansa na w\u2184apaw \u2184hene?',		
  	choice1:'Onipa tenten bran',
	choice2:  '\u025B s\u025B  s\u025B  \u2184y\u025B  \u2184dehye kronn',
	choice3:  'Ohiani a \u2184w\u2184 mma bebree',
	choice4:  'Obi a otumi di akakabens?m',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.\n\n S\u025B  \u2184hene tu kwan a, \u2184de \u2184man no gyaw hena?', 		
  	choice1:'Safohene',
	choice2:  '\u2184kyeame',
	choice3:  'Kurontihene',
	choice4:  'Dabehene',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.\n\n ………. na \u2184hw\u025B  \u2184hene ne \u2184mamfo sika so w\u2184 ahemfi.',		
  	choice1:'Gyaasehene',
	choice2:  'Sodoohene',
	choice3:  'Mmerantehene',
	choice4:  'Sannaahene',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho. S\u025B  \u2184mamfo hyia w\u2184 aguab\u2184 ase a, hena na ogu nsa?',		
  	choice1:'\u2184kyeame',
	choice2:  'Kurontihene',
	choice3:  'Safohene',
	choice4:  'Dabehene',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho. S\u025B  Akanfo reyi apae a, hena na wodi kan b\u2184 ne din?',		
  	choice1:'Asase Yaa',
	choice2:  'Onyankop\u2184n',
	choice3:  'Nsamanfo',
	choice4:  'Ateasefo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Nne\u025B ma kuw yi mu nea \u025B w\u2184 he na okuafo de adwuma?',
		choice1:'\u2184sos\u2184w, twitae, asadua',
	choice2:  'As\u2184w, asaa, peaw',
	choice3: 	  'Nkrante, \u2184sos\u2184w, as\u2184w',
	choice4:	  'Asadua, as\u2184w, k\u2184t\u2184kor\u2184',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Wok\u2184 \u2184tomfo adwuma mu a, wubenya ….. at\u2184.',		
  	choice1:'k\u025B nt\u025B  ne nkrante',
	choice2:  'peaw ne adwiniasa',
	choice3:  'twitae ne bommo',
	choice4:  '\u2184sos\u2184w ne as\u2184w',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Dwom “Kurohinko” fa adwuma b\u025B n ho?',		
  	choice1:'Nk\u2184b\u2184',
	choice2:  'Kentenwene',
	choice3:  'Atono',
	choice4:  'Ahay\u2184',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Hena na \u2184nto dwom w\u2184 n’adwumay\u025B  mu?',		
  	choice1:'\u2184b\u2184mm\u2184fo',
	choice2:  'Okuafo',
	choice3:  'Kentenwenefo',
	choice4:  '\u2184tomfo',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Toa \u025B b\u025B  yi so: “Otuo tow a …..”',		
  	choice1:'esi \u2184barima bo',
	choice2:  '\u025B kanyan \u2184hene ma osuae',
	choice3:  'nkur\u2184fo b\u2184 hu',
	choice4:  'mmea konhintaw',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Mpanyin se: “\u025B kaa akyekyere ne nnaw nko a anka ……”',		
  	choice1:'mmea b\u025B k\u2184 afum daa',
	choice2:  'mmofra b\u025B k\u2184 atwee da biara',
	choice3:  '\u2184b\u2184mm\u2184fo b\u025B da k\u2184m',
	choice4:  'otuo rentow wuram da',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Yaw M\u025B nsa buu n’adamfo no b\u025B  s\u025B : “ \u2184baakofo nsa…..”',   		
  	choice1:'ntumi nguare ne ho',
	choice2:  'tumi d\u2184w n’afum',
	choice3:  'nso n’abusuafo nyinaa so',
	choice4:  'nso nyame ani kata',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Kasakoa yi ase ne d\u025B n? Adwuma no d\u2184\u2184so enti ma wo nsa so.',
		choice1:'Y\u025B  no nt\u025B mnt\u025B m',
	choice2: 'Pagyaw wo nsa k\u2184 soro',
	choice3:	 'B\u2184 wo nsam \u2184hare so',
	choice4:	 'Ka wo nsa abien b\u2184 mu',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n\n Mprempren de, nna amee me nenabarima.',		
  	choice1:' Ay\u025B  aberantewa koraa',
	choice2:  'Ay\u025B  basaa',
	choice3:  'Anyin papaapa',
	choice4:  'Ntumi nkasa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n\n \u2184hene b\u025B n na otumi de \u025B sono si ne bamkyinii so?',		
  	choice1:'Ab\u2184ntend\u2184mhene',
	choice2:  'Kurontihene',
	choice3:  'Guantoahene',
	choice4:  '\u2184manhene',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n\n \u2184hene a ……..si n’akyeampomaa so no y\u025B  \u2184sonani.',		
  	choice1:'\u2184kraman',
	choice2:  'kwaakwaadabi',
	choice3:  'akoroma',
	choice4:  'akoo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n\n Kurow a Akyekyere ne nwaw da w\u2184n hene as\u025B s\u025B gua ho kyer\u025B  s\u025B  …….',
		choice1:'w\u2184nka mmara',
	choice2:  'hwee ny\u025B  w\u2184n as\u025B m',
	choice3:	  'w\u2184p\u025B  asomdwoe',
	choice4:	  'mmoa abien no y\u025B  nam a w\u2184p\u025B  yiye.',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n\n Agyarek\u2184, ogyaa me asraafo \u2184ha a w\u2184n nyinaa ab\u2184so y\u025B  biako. \u025B y\u025B  d\u025B n?',		
  	choice1:'\u2184prae',
	choice2:  'Muka',
	choice3:  'Asesawura',
	choice4:  'Asomurofi',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n\n Agyarek\u2184, ogyaa me anuanom baanu nanso obiara nhu ne y\u2184nko anim. \u025B y\u025B  onipa',
		choice1:'Nansoaa du',
	choice2:  'Nsa abien',
	choice3: 	  'Nan abien',
	choice4:	  'Nniwa abien',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n\n “\u2184reb\u2184 ne dade so kyankyan” y\u025B  dwom a \u025B fa hena ho?',		
  	choice1:'\u2184tomfo',
	choice2:  '\u2184b\u2184mm\u2184fo',
	choice3:  '\u2184dansifo',
	choice4:  'okuafo',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n\n “…………” y\u025B  dwom a \u025B fa ad\u2184w ho.',		
  	choice1:'Ayikoo, anyaado',
	choice2:  'K\u2184t\u2184k\u2184 sarewa, gyansarewa',
	choice3:  'Kurohinko, kurohinko na \u025B y\u025B  me d\u025B ',
	choice4:  'Adonko, fa me k\u2184 oo',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n\n Dwom b\u025B n na mmofra de di abosi agoru?',		
  	choice1:'Mpempenaa, nana aa…..',
	choice2:  'Obi ba o, yee yei!',
	choice3:  'Sansan koroma, wo ni awuo oo',
	choice4:  'As\u2184ba, yee yei, as\u2184ba',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n\n Mpempenaa agodi mu no, mmofra to dwom',		
  	choice1:'k\u2184t\u2184k\u2184 sarewa, gyansarewa',
	choice2:  'as\u2184ba, b\u025B t\u2184 mu',
	choice3:  'oni wu o.',
	choice4:  'sii, sii, sii, sii dadako o.',
		answer: 4,
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
