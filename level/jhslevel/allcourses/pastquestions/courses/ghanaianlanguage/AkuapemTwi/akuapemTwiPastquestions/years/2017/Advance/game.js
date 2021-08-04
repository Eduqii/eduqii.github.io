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
  	question:'Nkyia Adwuma, adwuma o, nnyeso ne?',
  	choice1:'Adwuma asa',
	choice2: 'Adwuma da ase',
	choice3: 'Adwuma ye',
	choice4: 'Adwuma y\u025B  den',
  	answer: 3,
  },
  {	
  	question: 'Wote nkyia hy\u025B  den a na woadu hefa?',
	choice1: 'Ayiase',
	choice2:  'Awaregye ase',
	choice3:  'Nnyedua ase',
	choice4:  'Ns\u2184ree so',
	answer: 1,
  },
  {
  	question:'S\u025B  obi ma wo aduan na wudidi wie a woma no…..',
  	choice1:'Nkwan pa y\u025B  d\u025B ',
	choice2: 'Tirinkwa',
	choice3: 'Aguare',
	choice4: 'Amo',
  	answer: 4,
  },
  {
  	question:'Akanman mu, hena na \u2184de \u2184bea ma aware?',  	
  	choice1: 'Ne w\u2184fa',
	choice2:  'N’asew',
	choice3:  'N’akumaa',
	choice4:  'N’agya',
  	answer: 4,
  },
  {
  	question:'Mpanyin se, wok\u2184 aware a, …..',  	
  	choice1: 'Nantew yiye',
	choice2:  'Bisa',
	choice3:  'Nkyer\u025B kyer\u025B  wo ho',
	choice4:  'Nkra w’atamfo',
  	answer: 2,
  },
  {
  	question: 'Ansa na aware begu no, baguafo no ma awarefo no mu biara …….',		
  	choice1:'Di adanse',
	choice2:  'B\u2184 ne nkuro',
	choice3:  'b\u2184 ne ho aguaa',
	choice4:  'b\u2184 n’awofonom k\u2184k\u2184',
		answer: 2,
  },
  {
  	question: 'Tete h\u2184, amanne kwan so no, abofra di nna ahe a, na w\u2184to no din?',	 
  	choice1: 'nnaw\u2184twe',
	choice2:   'asram nsia',
	choice3:   'adaduanan',
	choice4:   'nnanson',
		answer: 1,
  },
  {
  	question: 'Nsu ne nsa a w\u2184de ka akokoaa ano no kyer\u025B  d\u025B n?',		
  	choice1: 'Ahomaso',
	choice2:   'Ayamye',
	choice3:   'Ahos\u025B p\u025B w',
	choice4:   'Nokwaredi',
		answer: 4,
  },
  {
  	question: 'Meka kyer\u025B \u025B  m’adamfo no se, me papa nuabea pinyin no y\u025B  …. w\u2184 Akanfo abusuab\u2184 mu.',
		choice1:'M’akonta',
	choice2:  'Me nanabea',
	choice3:	  'Me sewaa',
	choice4:	  'M’agya kumaa',
		answer: 3,
  },
  {
  	question: 'Akanman mu, hefo na \u025B w\u2184 abusua kumaa no mu?',		
  	choice1:'Agya, \u025B na ne mma',
	choice2:  'Agya, w\u2184fa ne sewaa',
	choice3:  'w\u2184fa, nanabarima',
	choice4:  'akonta, sewaa ne mma',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Paw nea \u025B y\u025B  din nnidiso pa w\u2184 kuw yi mu.',		
  	choice1:'Piesie, Adusa, Manu',
	choice2:  'Manu, M\u025B nsa, Botwe',
	choice3:  'Nkoroma, Badu, Duku',
	choice4:  'Anane, Ason, Nsia',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Ad\u025B n na w\u2184fr\u025B  no Tawia? Efis\u025B  odi ………akyi.',
		choice1:'Nyankomago',
	choice2:  'atuak\u2184asan',
	choice3:	  'ntaafo',
	choice4:	  'brenya\u2184',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+'Ad\u025B n nti na \u025B y\u025B  akyiwade s\u025B  obi didi a, \u2184b\u025B to dwom?',		
  	choice1:'Nkwan b\u025B s\u2184 n’ataade mu',
	choice2:  '\u2184remmee nt\u025B m',
	choice3:  'obedi aduan no nyinaa',
	choice4:  'aduan no b\u025B tram no',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akanfo akyiwade biako nso ne s\u025B ',		
  	choice1:'anadwo w\u2184mpra dan mu',
	choice2:  'wudidi a, mma wo nu abo',
	choice3:  'an\u2184pa wonkyia nnanfo',
	choice4:  'wok\u2184da a, nkra obiara',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akan mmusuakuw no mu nea n’akraboa y\u025B  Akoo ne ……',		
  	choice1:'\u025B ko\u2184na',
	choice2:  'Agona',
	choice3:  'Asakyiri',
	choice4:  'Asona',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Abusuakuw b\u025B n na w\u2184ne akraboa din y\u025B  p\u025B ?',		
  	choice1:'\u2184yoko\u2184',
	choice2:  'Asene\u025B ',
	choice3:  'Aduana',
	choice4:  '\u025B ko\u2184na',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Abusuakuw b\u025B n na w\u2184w\u2184 akraboa ahorow abien?',		
  	choice1:'Aduana',
	choice2:  'Asakyiri',
	choice3:  'Agona',
	choice4:  'Asona',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Biretufo akraboa ne……..',		
  	choice1:'\u2184seb\u2184',
	choice2:  'Agyinamoa',
	choice3:  'akor\u2184ma',
	choice4:  'k\u2184k\u2184sakyi',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n' + 'Toa \u025B b\u025B  yi so: gua b\u025B ba a, ….',
		choice1:'\u025B b\u025B ba \u2184kyena',
	choice2:  'Na \u025B w\u2184 awiei',
	choice3:	  'Efi an\u2184pa',
	choice4:	  '\u025B y\u025B  aguat\u2184nda',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+'Ay\u2184nkoy\u2184nko nti na \u2184k\u2184t\u2184 annya ti kyer\u025B  d\u025B n?',		
  	choice1:'Ayamye ntraso a \u025B ho amma mfaso',
	choice2:  'atirim\u2184den a \u025B ma tipae',
	choice3:  'patapaas\u025B m a y\u025B de pam atamfo',
	choice4:  'ahos\u025B p\u025B w a \u025B ma nkuranhy\u025B ',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n' + 'Ti koro nk\u2184 agyina kyer\u025B  s\u025B  ……',		
  	choice1:'as\u025B m ba a, \u2184baakofo na \u2184ka ne nyinaa',
	choice2:  'as\u025B m ba a, nnipa bebree na w\u2184dwene ho na \u025B ny\u025B  \u2184baakofo',
	choice3:  '\u025B y\u025B  ne nkutoo as\u025B m enti obiara nka bi',
	choice4:  'as\u025B m no mfa me ho koraa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+ 'Agya rek\u2184, ogyaw me akoa bi. \u2184ba wo fie a woma no agua tena so a, \u2184rek\u2184 a, na wafa agua no atare ne ho. \u025B y\u025B  d\u025B n?',
		choice1:'\u2184h\u2184ho',
	choice2:  'nkrante',
	choice3:	  'ab\u025B  bemu',
	choice4:	  'aburow b\u025B t\u025B m',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+ 'Agya ade bi w\u2184 h\u2184: da biara \u2184te h\u2184 a, wasi ne ti ase ma ne ti kyer\u025B  fam nso \u025B nhaw no koraa. \u025B y\u025B  d\u025B n?',
		choice1:'Okisi',
	choice2:  'Akoo',
	choice3:	  'ak\u2184kono',
	choice4:	  'ampan',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n' + 'Akanfo fr\u025B  \u2184sram a \u025B t\u2184 so ason no d\u025B n?',		
  	choice1:'\u2184p\u025B p\u2184n',
	choice2:  '\u2184sanaa',
	choice3:  '\u025B b\u2184',
	choice4:  'Kitawonsa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+ 'Asram kuw yi mu biara kura nnafua aduasa p\u025B p\u025B \u025B p\u025B ',		
  	choice1:'\u025B b\u2184, \u2184sanaa, Ogyefuo',
	choice2:  'Ahinime, \u025B b\u2184, Kitawonsa',
	choice3:  'Oforisuo, Ay\u025B wohomum\u2184, \u025B b\u2184',
	choice4:  '\u2184p\u025B nimaa, \u2184p\u025B p\u2184n, \u2184b\u025B nem',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n' + 'Da a edi Awukudae anim no, Akanfo fr\u025B  no d\u025B n?',		
  	choice1:'Akwasidae',
	choice2:  'Benada Dapaa',
	choice3:  'Memeneda Dapaa',
	choice4:  'Fida Fofie',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Nnaw\u2184twe ahe na \u025B w\u2184 Akanfo adaduanan mu?',		
  	choice1:'Asia',
	choice2:  'Ason',
	choice3:  'Awotwe',
	choice4:  'Akron',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Afahy\u025B  bere mu d\u025B n na mpanyimfo y\u025B  ma nsamanfo?',		
  	choice1:'w\u2184k\u2184ky\u025B  w\u2184n nsa',
	choice2:  'wogu w\u2184n nsa',
	choice3:  'w\u2184k\u2184da w\u2184n ase',
	choice4:  'w\u2184k\u2184se w\u2184n ayi',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Akanfo b\u025B n na wodi Ohum afahy\u025B  no?',		
  	choice1:'mfantefo',
	choice2:  'asantefo',
	choice3:  'akyemfo',
	choice4:  'efutufo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Bakatue y\u025B  hefo afahy\u025B  w\u2184 \u2184man yi mu?',		
  	choice1:'Oguaafo',
	choice2: 'Anomabofo',
	choice3: '\u025B denafo',
	choice4: 'Adwumakofo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Tete h\u2184 no, s\u025B  \u2184man bi rek\u2184 \u2184ko a, \u2184hene b\u025B n na odi d\u2184m no nyinaa anim?',		
  	choice1:'kyid\u2184mhene',
	choice2:  'sanaahene',
	choice3:  'nifahene',
	choice4:  'ad\u2184ntehene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'S\u025B  w\u2184repaw obi adi hene a, hena na odi akoten w\u2184 osiahenefo no mu?',		
  	choice1:'Kurontihene',
	choice2:  '\u2184hemmea',
	choice3:  'nk\u2184sohene',
	choice4:  'ntakrahene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ '\u2184hene b\u025B k\u2184 aguab\u2184 ase a, hena na osiesie ne ho?',		
  	choice1:'Sanaahene',
	choice2:  'Sodoofo',
	choice3:  'Dabehene',
	choice4:  'Ntakrahene',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Akanman mu s\u025B  w\u2184redi nnipa baanu as\u025B m a, obiara fa ….',		
  	choice1:'Nnamfo',
	choice2:  'Nsewnom',
	choice3:  'Atemmufo',
	choice4:  'Adansefo',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n' + 'Hena na \u2184pata nea wadi bem w\u2184 as\u025B nni awiei?',		
  	choice1:'Nea wadi f\u2184 no',
	choice2:  'Nea n’as\u025B m y\u025B  d\u025B  no',
	choice3:  'Baguafo no kyeame',
	choice4:  'Adansefo no mu biako',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Nnwuma a edidi so yi mu nea \u025B w\u2184 he na w\u2184nto dwom wmu koraa?',
		choice1:'Atono',
	choice2:  'Kentenwene',
	choice3: 	  'Nkukunwene',
	choice4:      'Ahay\u025B ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Okuafo ma y\u025B n bor\u2184de a, d\u025B n na yenya fo \u2184b\u2184mm\u2184fo h\u2184?',		
  	choice1:'Atosode',
	choice2:  'Hanam',
	choice3:  '\u2184sos\u2184w',
	choice4:  'ntampehama',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Agoru yi de, mmarimaa nkutoo na wodi Akanman mu',		
  	choice1:'ampe',
	choice2:  'nt\u025B wsi',
	choice3:  'abosi',
	choice4:  'antoakyire',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Mmofra agoru b\u025B n mu na w\u2184to dwom “sansan kor\u2184ma, wo ni awu o?',		
  	choice1:'abosi',
	choice2:  'mpepenaa',
	choice3:  'as\u2184ba',
	choice4:  'tomato',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Akanfo din Antwi mmran ne',		
  	choice1:'Ampem',
	choice2:  'Boasiako',
	choice3:  'Agyeman',
	choice4:  'Guakoro',
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
