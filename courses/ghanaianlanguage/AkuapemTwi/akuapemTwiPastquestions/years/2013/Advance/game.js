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
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho. \n\n S\u025B  obi didi na wok\u2184to no a, wubekyia no d\u025B n?',
  	options:['Ayekoo',
			 'Woato me',
			 'Kita mu',
			 'Adwuma o'],
  	answer: 2
  },
  {	
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho. \n\n \u2184kwantuni a wafi kwan so abefu fie no, y\u025B ma no ………',
	options:[ 'Akwaaba',
			  'Nantew yiye',
			  'Nky\u025B re o',
			  'Aba a tena ase'],
	answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho. \n\n Da b\u025B n na w\u2184woo abofra a \u2184de Kwame?',
  	options:['Dwowda',
			 'Benada',
			 'Memeneda',
			 'Kwasida'],
  	answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho. \n\n Abofra bi de Tawia a na \u025B kyer\u025B  s\u025B  odi ……….akyi.',  	
  	options:[ 'Mansa',
			  'Ntaafo',
		  	  'Anane',
			  'Nyankomago'],
  	answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho. \n\n Wo w\u2184fa papa y\u025B  wo d\u025B n?',  	
  	options:[ 'Wo na ba',
			  'W’agya ba',
			  'W’agya kumaa',
			  'Wo nanabarima'],
  	answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho. \n\n Wo papa nuabea y\u025B  wo …..',		
  	options: ['w\u2184fa',
			  'nua panyin',
			  'maame kumaa',
			  'sewaa'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho. \n\n Mmofra a \u025B na biako awo w\u2184n no y\u025B ',	 
  	options: [ 'w\u2184fa mma',
			   '\u025B na mma',
			   'sewaa mma',
			   'abusua mma'],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n \u025B y\u025B  Akanfo akyiwade s\u025B ……..',
		options: [ 'Y\u025B guare a, y\u025B nto dwom',
				   'Yekyia obi a, yekia no',
				   'Yebehu agyinamoa awia',
				   'y\u025B b\u025B b\u2184 y\u025B n nsam afr\u025B  obi'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Akanman mu obi wu a, …….no ansa na w\u2184adeda no w\u2184 mpa so.',
		options: ['Woguare',
				  'w\u2184soa',
				  'wosie',
				  'w\u2184b\u2184 nsawa'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Din b\u025B n na y\u025B de ma sika a \u2184manfo de boa owufo no abusuafo no?',
		options: ['Ayise',
				  'Nsawa',
				  'Tow',
				  'Ayiy\u025B '],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Akanfo mu wodi as\u025B m wie a, sika a w\u2184de ma mpanyimfo no, w\u2184fr\u025B  no d\u025B n?',
		options: ['Hyirewgu',
				  'Mpata',
				  'Baguade',
				  'Agyinamudi'],
		answer: 2
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n As\u025B nni mu sika a nea wadi f\u2184 no tua ne …… ma nea wadi bem no.',
		options: ['Sonkahyire',
				  'Aboade',
				  'Tow',
			   	  'Mpata'],
		answer: 3
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Ansa na obi bedi hene no, \u025B s\u025B  s\u025B  \u2184y\u025B  ….',
		options: ['Osikani mapa',
				  '\u2184dehye kronn',
				  '\u2184dekyer\u025B fo',
				  '\u2184ho\u2184f\u025B fo'],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n \u2184hene b\u025B n na \u2184hw\u025B  sika so w\u2184 ahemfi?',
		options: ['Abakomahene',
				  'Dabehene',
				  '\u2184hemmea',
				  'Sanaahene'],
		answer: 3
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo bragoru, aware ne adedi ho.. \n\n Kasakoa foforo a etumi kyer\u025B  \u2184k\u2184 afikyiri ne ……..',
		options: ['Wabu ne nsa',
				  'Wada ne nan so',
				  'Wabu ne nan mu',
				  'Wada ne k\u2184n so'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Wogoru abeawa bi bra a, w\u2184ma no \u2184t\u2184 ne …..',
		options: ['Nkyenam',
				  'Bankye',
				  'nt\u2184rewa',
				  'nkesua'],
		answer: 3
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Agya sika a ogye w\u2184 ne babea aware mu no, w\u2184fr\u025B  no d\u025B n?',		
  	options: ['Danta',
			  'Sonkahyiri',
			  'Akontasekan',
		  	  'Aseda'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n \u2184barima bi reware a otua akontasekan ma \u2184bea no …..',		
  	options: ['Nkumaafo',
			  'Awofo',
			  'Nua barimanom',
			  'Nua mmeanom'],
		answer: 2
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Akanfo regu aware a, awarefo no mu biara b\u2184 ne ………',		
  	options: ['Din',
			  'Nkuro',
			  'Ti mu p\u2184w',
			  'Ho aguaa'],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Din b\u025B n na y\u025B de fr\u025B  obi a w\u2184de no si owufo bi anan mu?',
		options: [' \u2184y\u2184nko br\u025B bo',
				  'Okunafo',
				  'Odiadefo',
				  'Opiafo'],
		answer: 2
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo akyiwade, ayiy\u025B , as\u025B nni ne ahenni ho.. \n\n Din b\u025B n na Akanfo de ma onipa a otua abusua no ano?',		
  	options: ['Ahenekwaa',
			  '\u2184dehye',
			  '\u2184somafo',
			  'Abusuapanyin'],
		answer: 3
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho.. \n\n D\u025B n na mpanyimfo y\u025B  ma nsamafo afahy\u025B  bere mu?',		
  	options: ['Wogu w\u2184n nsa',
			  'Wokokyia w\u2184n',
			  'w\u2184k\u2184da',
			  'w\u2184ky\u025B  w\u2184n nne\u025B ma'],
		answer: 0
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho.. \n\n Akuapemfo afahy\u025B  k\u025B se pa ara ne …..',
		options: ['Aboakyere',
			 	  'Bakatue',
				  'Odwira',
				  'akwamb\u2184'],
		answer: 2
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho.. \n\n Afarefo de saa nne\u025B ma yi y\u025B  adwuma',		
  	options: ['\u2184korow, otuo, asau',
			  '\u2184korow, asau, darewa',
			  'darewa, atuduru, asau',
			  'otuo, asau, atuduru'],
		answer: 1
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho.. \n\n \u2184sram b\u025B n na edi Oforisuo anim?',		
  	options: ['Kitawonsa',
			  '\u2184sanaa',
			  '\u025B b\u2184',
			  '\u2184b\u025B nem'],
		answer: 3
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nkyia, edin ne abusuab\u2184 ho.. \n\n Edin foforo b\u025B n na Akanfo de ma nnaw\u2184twe asia?',		
  	options: ['Adaduonu',
			  'Adaduasa',
			  'Adaduanan',
			  'Adaduosia'],
		answer: 2
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n Toa \u025B b\u025B  yi so: Abofra hu ne nsa hohoro a, \u2184ne mpanyimfo …….',
		options: ['Didi',
				  'Nantew',
				  'Kasa',
				  'Tu kwan'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n Mpanyin se: wop\u025B  asaka akyer\u025B  Nyame a, …',		
  	options: ['Wokra w’adamfo',
			  'Wokyer\u025B w no nwoma so',
			  'Woka kyer\u025B  mframa',
			  'Wutu kwan k\u2184 wim'],
		answer: 2
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n Papa no buu y\u025B n b\u025B  se: Seantie \u025B ne …',		
  	options: ['W’as\u025B m aka wo ti mu',
			  '\u2184nwam atik\u2184 p\u2184w',
			  'woanya anidaso',
			  'woante ase'],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n Agya rek\u2184, ogyaw me ade bi. Da biara \u2184te h\u2184 a, na ne ti kyer\u025B  fam. \u025B y\u025B  …..',
		options: ['Opurow',
				  'Ampan',
				  'k\u2184t\u2184k\u2184',
				  'ankyem'],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n Agya rek\u2184 ogyaw me maame bi. \u2184hwe ase a, onipa baako p\u025B  na otumi ma no so . \u025B y\u025B  ….',		
  	options:['Pane',
			 'Bokiti',
			 'Adaka',
			 'Ntama'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n Hena na atetes\u025B m kyer\u025B  s\u025B  \u2184de akofena w\u2184w fam na obiara ntumi ntui no?',
		options: ['\u2184k\u2184mfo An\u2184kye',
			  	  'Kwabia Amamfi',
				  'Oti Ak\u025B nt\u025B n',
				  'Tweneboa Kodua'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n S\u025B  w\u2184b\u2184 \u2184hene bi mmran Otumfo a, \u025B kyer\u025B  s\u025B  ….',		
  	options: ['\u2184p\u025B  nt\u2184kwaw',
			  '\u2184w\u2184 sika',
			  '\u2184w\u2184 ahode bebree',
			  '\u2184w\u2184 tumi'],
		answer: 3
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agyarek\u2184 ne atetes\u025B m ho.. \n\n Hena na atetes\u025B m mu na \u2184y\u025B  \u2184k\u2184mfo An\u2184kye adamfo ber\u025B bo?',
		options: ['Oti Ak\u025B nt\u025B n',
				  'Obiri Y\u025B boa',
				  '\u2184s\u025B e Tutu',
				  'Ntim Gyakari'],
		answer: 2
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo apae, ns\u025B nkyer\u025B nne ne ananses\u025B m ho.. \n\n Nne\u025B ma titiriw b\u025B n na Akanfo de yi apae?',		
  	options: ['Nsa, nsu',
			  'Nsu, \u025B wo',
			  '\u025B wo, wisa',
			  'Nsa, mako'],
		answer: 0
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo apae, ns\u025B nkyer\u025B nne ne ananses\u025B m ho.. \n\n Akanfo yi apae a, wodi kan fr\u025B ',		
  	options: ['nsub\u2184nten',
			  'onyankop\u2184n',
			  'abosom',
			  'nsamanfo'],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo apae, ns\u025B nkyer\u025B nne ne ananses\u025B m ho.. \n\n \u2184hene a nnipa ti abien si n’akyeampoma so kyer\u025B  s\u025B :',		
  	options: ['Yenim y\u025B n ho',
			  'Y\u025B mp\u025B  y\u025B n ho as\u025B m',
			  'Y\u025B b\u025B ky\u025B  no p\u025B p\u025B \u025B p\u025B ',
			  'Y\u025B redwen ab\u2184 mu'],
		answer: 3
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo apae, ns\u025B nkyer\u025B nne ne ananses\u025B m ho.. \n\n S\u025B  obi y\u025B  b\u2184ne na \u2184de ne nsa to ne nsayam a, \u025B kyer\u025B  s\u025B  ….',
		options: ['Ne nsa y\u025B  no yaw',
				  '\u2184pa ky\u025B w',
				  'n’as\u025B m y\u025B  d\u025B ',
				  'ne nsam gow'],
		answer: 1
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo apae, ns\u025B nkyer\u025B nne ne ananses\u025B m ho.. \n\n \u2184seb\u2184 y\u025B  aboa a ne suban kyer\u025B  …..',		
  	options: ['ahumm\u2184b\u2184',
			  'aho\u2184f\u025B ',
			  'asisi',
			  'nyansa'],
		answer: 2
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo apae, ns\u025B nkyer\u025B nne ne ananses\u025B m ho.. \n\n Akanfo ananses\u025B m mu Ananse taa y\u025B  ne ho …..',		
  	options: ['\u2184fotufo',
			  '\u2184domfo',
			  '\u2184yamyefo',
			  'onitefo'],
		answer: 3
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
