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
  	question:'Bere b\u025Bn na \u2184kanni ka kyer\u025B ne y\u2184nko tip\u025Bn due ne nwunu?',
  	choice1:'Anwummere',
	choice2: 'An\u2184pa',
	choice3: 'Ahemanakye',
	choice4: 'Awia',
  	answer: 1,
  },
  {	
  	question: 'he na Akanfo kyia no aba-a-tenase?',
	choice1: 'Akwakora a wap\u2184n adwuma',
	choice2:  'Akokoaa a w\u2184awo no foforo',
	choice3:  'Asewbea a \u2184redi n’awoda',
	choice4:  'Onuabarima a \u2184retu kwan',
	answer: 2,
  },
  {
  	question:'Okuafo, Adwuma o! Nnyeso no ne…….',
  	choice1:'Woato me',
	choice2: 'Y\u025Bahyiahyia',
	choice3: '\u025Bnkaa akyi \u025B',
	choice4: 'Adwuma ye',
  	answer: 4,
  },
  {
  	question:'\u025Bhefa na Akanfo kyia due',  	
  	choice1: 'Awoda ase',
	choice2:  'Awaregye ase',
	choice3:  'Ayi Ase',
	choice4:  'Apontow Ase',
  	answer: 3,
  },
  {
  	question:'Din kuw yi mu biako y3 Akanfo kradin nkutoo',  	
  	choice1: 'Agyeman,\u2184p\u2184n, Agyeibea',
	choice2:  'Nkansa, Amma, Ofori',
	choice3:  'Kwasi, Abena , Yaa',
	choice4:  'Twum, Kwame, \u2184saebea',
  	answer: 3,
  },
  {
  	question: 'Din b\u025Bn na wode b\u025Bma mmofra a \u025Bna awo w\u2184n koro anaa bere koro mu?',		
  	choice1:'Ntaafo',
	choice2:  'Ahenkan',
	choice3:  'Piesie',
	choice4:  'Kaakyire',
		answer: 1,
  },
  {
  	question: 'Paw kuw biako a ne nyinaa y\u025B ap\u025Bnt\u025Bdin.',	 
  	choice1: 'Oforiwa, Adwoa, Obimp3',
	choice2:   'Kwakye, Adoma, Nyako',
	choice3:   'Ntomago, Sumina, Asaaseasa',
	choice4:   'Nkrabrea, Fremp\u2184n, Kwabena',
		answer: 3,
  },
  {
  	question: 'Wo papa w\u2184fa y\u025B wo d\u025Bn w\u2184 w’abusua mu?',		
  	choice1: 'Akumaa',
	choice2:   'W\u2184fa',
	choice3:   'W\u2184faasewa',
	choice4:   'Nanabarima',
		answer: 4,
  },
  {
  	question: 'Akanfo mma b\u2184 w\u2184n agyanom …….',		
  	choice1:'nt\u2184n',
	choice2:  'Mogya',
	choice3:  'Mfuakok\u2184',
	choice4:  'Sora',
		answer: 1,
  },
  {
  	question: 'Hena ne wo sewaa?',		
  	choice1:'papa Nuabea',
	choice2:  'Maame W\u2184fa',
	choice3:  '\u025Bna nuabea',
	choice4:  'Akyi ba a \u2184to so abien',
		answer: 1,
  },
  {
  	question: 'Akanman mu s\u025B obi ka ntam a …..',		
  	choice1:'W\u2184de no k\u2184 k\u2184\u2184to',
	choice2:  'W\u2184hwe no',
	choice3:  'W\u2184kyere no dedua',
	choice4:  'W\u2184b\u2184 no ka',
		answer: 3,
  },
  {
  	question: 'Bragoru y\u025B amanne a Akanfo y\u025B ma hefo?',
		choice1:'Mmerea a w\u2184ayae aware',
	choice2:  'Mma mmea a w\u2184adu mpanyin afe so',
	choice3:	  'Mma mmarima a w\u2184rehy\u025B kuay\u025B ase',
	choice4:	  'Asigyafo a w\u2184rek\u2184 aware ase',
		answer: 2,
  },
  {
  	question: 'Nne\u025Bma kuw yi mu nea \u025Bw\u2184 he na Akanfo de ma asakyima mo?',		
  	choice1:'Hyirew, Adwer\u025B, \u2184k\u2184ben',
	choice2:  'Birisi, adaka, \u2184t\u2184',
	choice3:  'Ayitama, Nkesua, Ntwoma',
	choice4:  '\u2184t\u2184, Nkesua, Sonwere',
		answer: 4,
  },
  {
  	question: 'Akanfo awaregye mu no, hena na ogye danta no?',		
  	choice1:'Agya',
	choice2:  '\u025Bna',
	choice3:  'W\u2184fa',
	choice4:  'Akumaa',
		answer: 1,
  },
  {
  	question: 'Din b\u025Bn na w\u2184de ma sika a okunu de ma ne yere no?',		
  	choice1:'Ti Ade',
	choice2:  'Danta',
	choice3:  'Akonta Sekan',
	choice4:  'Ti Nsa',
		answer: 1,
  },
  {
  	question: 'Awaregyae mu no, hena na ogu hyirew?',		
  	choice1:' Asew Barima',
	choice2: 'Akonta ',	
	choice3: 'Akummaa',	
	choice4: '\u2184korafo',	
		 
		answer: 3,
  },
  {
  	question: 'Abusuakuw Agona akraboa ne ……',		
  	choice1:'\u2184kraman',
	choice2:  'Akoo',
	choice3:  'Ampan',
	choice4:  'Akor\u2184ma',
		answer: 2,
  },
  {
  	question: 'Abusua b\u025Bn na w\u2184n akraboa ne Opete?',		
  	choice1:'Asenefo',
	choice2:  'Aduanafo',
	choice3:  'Asakyirifo',
	choice4:  'Agonafo',
		answer: 3,
  },
  {
  	question: 'Abusua b\u025Bn na w\u2184n din ne w\u2184n akraboa no y\u025B p\u025B?',		
  	choice1:'\u2184yoko',
	choice2:  '\u025Bko\u2184na',
	choice3:  'Aduana',
	choice4:  'Asona',
		answer: 2,
  },
  {
  	question: 'Akanfo nnabu mu no, din foforo b\u025Bn na w\u2184de ma nnaw\u2184twe asia?',		
  	choice1:'Adaduosia',
	choice2:  'Adaek\u025Bse',
	choice3:  'Adadu\u2184w\u2184twe',
	choice4:  'Adaduanan',
		answer: 4,
  },
  {
  	question: 'Dapaa y\u025B da a edi ………. anim.',		
  	choice1:'Adae',
	choice2:  'Odwira',
	choice3:  'Afahy\u025B',
	choice4:  'Abisa',
		answer: 1,
  },
  {
  	question: 'Akanfo Asranna mu no, Adae kuw no y\u025B ahe?',		
  	choice1:'Abi\u025Bsa',
	choice2:  'Abien',
	choice3:  'Asia',
	choice4:  'Anan',
		answer: 2,
  },
  {
  	question: 'Akuapemfo afahy\u025B titiriw ne ……..',		
  	choice1:'Odwira',
	choice2:  'Aboakyere',
	choice3:  'Kundum',
	choice4:  'Ohum',
		answer: 1,
  },
  {
  	question: 'Nea edidi so yi mu biako ny\u025B afahy\u025B ho mfaso.',		
	choice1:  'Abusua tont\u2184n w\u2184n ',
	choice2:  'Ahemfo ne w\u2184n manfo b\u2184' ,	
	choice3:  '\u2184manfo sua w\u2184n', 	
	choice4:  '\u025Bde akob\u2184fo ba fie b\u025Bsra abusuafo',
		answer: 1,
  },
  {
  	question: 'Ade titiriw pa ara a Akanfo hw\u025B so paw \u2184hene ne s\u025B, \u025Bs\u025B s\u025B onipa ko no y\u025B ……… kron.',
		choice1:'\u2184dehye',
	choice2:  '\u2184yamuyefo ne abakan',
	choice3:	  'osikani',
	choice4:	  'patapaa ne akokoduru',
		answer: 1,
  },
  {
  	question: 'D\u025Bn na \u2184hene foforo de suae kyer\u025B ne manfo?',		
  	choice1:'Atumpan',
	choice2:  'Afoa',
	choice3:  '\u2184dawuru',
	choice4:  'Mmena',
		answer: 2,
  },
  {
  	question: 'Sanaahene adwuma ne d\u025Bn w\u2184 ahemfi?',		
  	choice1:'\u2184hw3 sikas\u025Bm so',
	choice2:  '\u2184boaboa d\u2184m ano',
	choice3:  'Odi Kyeame',
	choice4:  '\u2184hw\u025B aduannoa so',
		answer: 1,
  },
  {
  	question: 'Agyarek\u2184 no, ogyaw me akwakoraa bi; \u2184da dan mu a, na ne bogyes\u025B gu adiwo. \u025By\u025B d\u025Bn?',
		choice1:'Nhwiren a apow',
	choice2:  'D\u2184te a egu bor\u2184de ase',
	choice3:	  'Mframa a \u025Bhy\u025B toa mu',
	choice4:	  'Mukaase Wusiw',
		answer: 1,
  },
  {
  	question: 'Kwasi se, agya ade bi w\u2184 h\u2184, \u025Bny\u025B d\u025B nanso \u025Bka wo nsa p\u025B na woatafere. \u025By\u025B ……',
		choice1:'\u025Bwo',
	choice2:  'gyasramma',
	choice3:	  'asikiret\u025B',
	choice4:	  'adesaa',
		answer: 2,
  },
  {
  	question: 'Akanfo ananses\u025Bm nhyehy\u025Be no y\u025B …….',		
  	choice1:'mfiase, mfinimfini, awiei',
	choice2: 'Awieim, mfinimfini, mfiase',
	choice3: 'mfinimfini ne mfiase nkutoo',
	choice4: 'mfinimfini, awiei, mfiase',
		answer: 1,
  },
  {
  	question: 'Ananses\u025Bm mu nnwom gu ahorow abien, Ananses\u025Bm mu nnwom ne …..',		
  	choice1:'Mmoguo',
	choice2:  'B\u2184sr\u025Bmuka',
	choice3:  'Mede soa asiamasi',
	choice4:  'mfeafeaho',
		answer: 1,
  },
  {
  	question: 'Hena na Akanfo b\u2184 no mmran; Ototurobonsu?',		
  	choice1:'\u2184hene a \u2184te agua so',
	choice2:  'Onyankop\u2184n a \u2184b\u2184\u2184 wiase',
	choice3:  'Kwaku Ananse ne Ntikuma',
	choice4:  '\u2184b\u2184mm\u2184fo a wakum \u2184sono',
		answer: 2,
  },
  {
  	question: 'Akanfo din Antwi mmran ne d\u025Bn?',		
  	choice1:'Apea Kubi',
	choice2:  'Nyas\u025Bmhw\u025B',
	choice3:  'Bediako',
	choice4:  'Bosiako',
		answer: 4,
  },
  {
  	question: 'Me papa taa b\u2184 me nua Kwame mmran se …….',		
  	choice1:'Okyini',
	choice2:  'Atoapoma',
	choice3:  '\u2184daaku',
	choice4:  'okoto',
		answer: 2,
  },
  {
  	question: 'Toa \u025Bb\u025B yi so: Afiri huan a, …….',		
  	choice1:'\u025Bw\u2184 wuram',
	choice2:  '\u025Bk\u2184 ne nkyi',
	choice3:  'eyi aseredowa',
	choice4:  '\u025Bba n’anim',
		answer: 2,
  },
  {
  	question: 'Abofra no ka kyer\u025B n’adamfo no s\u025B: “Woank\u2184 bi a ….”',		
  	choice1:'Wuse y\u025Bank\u2184',
	choice2:  'y\u025Bb\u025Bb\u2184 nk\u2184mm\u2184',
	choice3:  'wob\u025Btena fie',
	choice4:  'Wo papa de \u2184bae',
		answer: 1,
  },
  {
  	question: 'Tete nsaano dwuma mu no, d\u025Bn na \u2184tomfo ma \u2184manfo?',		
  	choice1:'\u2184sos\u2184w, asomukaa, nkyene',
	choice2:  'kente, mp\u025Btea, asaawa',
	choice3:  'As\u2184w, nkrante, \u2184sosow',
	choice4:  'Bor\u025B\u2184de,As\u2184w, nt\u2184rewa',
		answer: 3,
  },
  {
  	question: 'Nne\u025Bma kuw yi mu nea \u025Bw\u2184 he na yenya fi okuafo h\u2184?',		
  	choice1:'Ahwerew, p\u025Btea, amankani',
	choice2:  'Bayer\u025B, k\u2184nmuade, ntama',
	choice3:  'Bankye, atosode, bor\u2184de',
	choice4:  'Nkontommire, kente, kuku',
		answer: 3,
  },
  {
  	question: 'Agoru yi de mmewa nkutoo na wodi',		
  	choice1:'Mpempenaa',
	choice2:  'Ahintahinta',
	choice3:  'Ananses\u025Bm',
	choice4:  'As\u2184ba',
		answer: 4,
  },
  {
  	question: 'Nea \u025Bw\u2184 he na \u025Bnka mfaso a mmofra nya w\u2184 agorudi mu?',		
  	choice1:'Anigye',
	choice2:  'Ahantan',
	choice3:  'Ap\u2184wmuden',
	choice4:  'Ahos\u025Bpaw',
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
