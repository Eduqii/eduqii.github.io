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
  	question:'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.\n\n Akanfo gye di s\u025B  \u025B na ma ne ba mogya na agya ma no……..',
    choice1:'Sika',
	choice2: 'Abusua',
	choice3: 'Aduan',
	choice4: '\u2184kra',
  	answer: 4,
  },
  {	
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.\n\n Edin a w\u2184fr\u025B  \u025B na mogya a \u2184de ma ne ba ne…….',
	choice1: 'Aho\u2184f\u025B ',
	choice2:  'nto\u2184 (Nt\u2184n)',
	choice3:  'Saman',
	choice4:  'Abusua',
	answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.\n\n S\u025B  woy\u025B  \u2184barima a, wo nuabea ba y\u025B  wo………',
  	choice1:'Ba',
	choice2: 'W\u2184faase',
	choice3: 'Nana',
	choice4: 'Nanakansowa',
  	answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.\n\n Abusua ne ntor\u2184 (nt\u2184n) fi nnipa kuw b\u025B n h\u2184?',  	
  	choice1: 'Maame ne nena',
	choice2:  'Papa ne nena',
	choice3:  'Maame ne papa',
	choice4:  'Maame ne abusuapanin',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.\n\n Kyer\u025B  nea enti a \u025B na ne mma da nso firi agya ho.',  	
  	choice1: 'W\u2184n na w\u2184firi kurow no mu',
	choice2:  'W\u2184n na daa w\u2184te fie',
	choice3:  'W\u2184n na w\u2184b\u2184 abusua biako',
	choice4:  'W\u2184n na w\u2184di nk\u2184mm\u2184',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.\n\n Suban a \u2184bea a \u2184w\u2184 abadae da no adi no w\u2184fr\u025B  no',		
  	choice1:'ahantan',
	choice2:  'anitew',
	choice3:  'tema',
	choice4:  'obu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.\n\n Agya, \u025B na ne mma, hena ne ofi no ti?',	 
  	choice1: 'Agya',
	choice2:   'Mma',
	choice3:   '\u025B na',
	choice4:   'mmofra',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.\n\n W\u2184fr\u025B  Akanfo adedi s\u025B …..',		
  	choice1: 'Papa adedi',
	choice2:   'Nana adedi',
	choice3:   'Sewaa adedi',
	choice4:   'W\u2184fa adedi',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.\n\n Saa nnipa yi ase nsae a w\u2184faase\u025B  nni ade',		
  	choice1:'nniwaa mma',
	choice2:  'papa mma',
	choice3:  'nena mma',
	choice4:  'w\u2184fa mma',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.\n\n “Agya bi wu a, agya bi te ase” y\u025B  kasa a w\u2184ka kyer\u025B ……',		
  	choice1:'Akunafo',
	choice2:  'Nyisiaa',
	choice3:  'Odiadefo',
	choice4:  'Abusuapanyin',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.\n\n Kasa a \u025B di akyiri a obi ka ansa na wawu na Akanfo\u2184 fr\u025B  no……',		
  	choice1:'Nsamansew',
	choice2:  'Awugyamma',
	choice3:  'Kasapr\u025B ko',
	choice4:  'Nkwa ns\u025B m',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.\n\n Ber\u025B  b\u025B n na abusuafo hyia bue owufo adaka so?',
		choice1:'Afe',
	choice2:  '\u2184sram',
	choice3:	  'Adaduanan',
	choice4:	  'Nnaw\u2184twe',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.\n\n Duaba b\u025B n na Akanfo de gyina h\u2184 ma onipahunu bi a wadi ade?',		
  	choice1:'Kwadu',
	choice2:  'Amango',
	choice3:  'Paya',
	choice4:  'Bor\u2184fer\u025B ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.\n\n S\u025B  okunafo bi mp\u025B  s\u025B  \u2184ware odiadefo a, kasakoa a \u2184ka ne s\u025B  \u2184b\u025B ware…..',		
  	choice1:'Mmoatia',
	choice2:  'Nk\u2184t\u2184 ne mm\u025B b\u025B ',
	choice3:  'Ne kunu saman',
	choice4:  'Nsamanp\u2184w mu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho\n\n Afahy\u025B  yi mu nea \u025B w\u2184 he na w\u2184de hurow k\u2184m',		
  	choice1:'Akwamb\u2184',
	choice2:  'Aboakyere',
	choice3:  'Ohum',
	choice4:  'Kundum',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho\n\n Bakatue y\u025B  nnipa b\u025B n afahy\u025B ?',		
  	choice1:'Adaafo',
	choice2:  '\u025B denafo',
	choice3:  'Akyemfo',
	choice4:  'Simpafo',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho\n\n Kyer\u025B  kurow a edidi so yi mu biako a w\u2184di “Adae-k\u025B se” afahy\u025B .',		
  	choice1:'Adaa',
	choice2:  'Kumase',
	choice3:  'Kyebi',
	choice4:  'Simpa',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho\n\n Afahy\u025B  ho mfaso titiriw biako ne s\u025B ……..',		
  	choice1:'\u025B de akob\u2184fo\u2184 ba fie',
	choice2:  'y\u025B kye akor\u2184mfo\u2184',
	choice3:  'yetu ahemfo ade\u025B  so',
	choice4:  'ede nt\u2184kwaw ba',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho\n\n Kyer\u025B  nea \u025B y\u025B  nokware w\u2184 afahy\u025B  ne nkurow a edidi so yi mu.',		
  	choice1:'Keta-Aboakyere',
	choice2:  'Kumasi –Fetu',
	choice3:  'Somanya –Odwira',
	choice4:  'Axim- Kundum',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho\n\n Aboa b\u025B n na Efutufo kyere no w\u2184 afahy\u025B  ber\u025B ?',		
  	choice1:'\u2184twe',
	choice2:  '\u2184nwansan',
	choice3:  '\u2184tor\u2184m',
	choice4:  'Nantwi',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho\n\n Ns\u025B m a edidi so yi mu nea \u025B w\u2184 he na \u025B ny\u025B  nokware w\u2184 afahy\u025B  ho?',		
  	choice1:'Afahy\u025B  de anigye ba',
	choice2:  'Afahy\u025B  s\u025B e mmere',
	choice3:  'Akob\u2184fo ba fie',
	choice4:  'Nkyirimma sua amammer\u025B ',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.\n\n  Asram dodow ahe na y\u025B nya w\u2184 afirihyia biako mu?',
		choice1:'Dummien',
	choice2:  'Dubiako',
	choice3:	  'Dunkron',
	choice4:	  'Dummi\u025B nsa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.\n\n Bosome a \u025B t\u2184 so dumienu no din de…..',		
  	choice1:'Ogyefuo',
	choice2:  '\u2184b\u025B nem',
	choice3:  '\u2184p\u025B p\u2184n',
	choice4:  '\u2184p\u025B nimaa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.\n\n \u2184sram b\u025B n mu na Simpafo kyere aboa?',
		choice1:'K\u2184t\u2184nimma',
	choice2:  'Ay\u025B wohomum\u2184',
	choice3:   	  '\u2184sanaa',
	choice4: 	  'Obubuo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.\n\n \u2184sram yi kura nnafua aduasa.',		
  	choice1:'\u025B b\u2184',
	choice2:  'Kitawonsa',
	choice3:  'Ogyefuo',
	choice4:  'Ahinime',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.\n\n \u2184sram b\u025B n na Akristofo di Yesu awoda?',
		choice1:'Ogyefuo',
	choice2:  '\u2184p\u025B p\u2184n',
	choice3:	  '\u2184p\u025B nimaa',
	choice4:	  '\u2184sannaa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.\n\n Kyer\u025B  amanne titiriw a Akanfo\u2184 di no dab\u2184ne biara.',		
  	choice1:'wogu nsa',
	choice2:  'w\u2184y\u025B  ayi',
	choice3:  'w\u2184y\u025B  asiei',
	choice4:  'wobu sika ho nkonta',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.\n\n Hyehy\u025B  asram a edidi so yi nnidiso-nnidiso',		
  	choice1:'\u2184p\u025B p\u2184n, \u2184p\u025B nimaa, Ogyefuo',
	choice2:  '\u2184p\u025B nimaa, \u2184p\u025B p\u2184n, Ogyefuo',
	choice3:  'Ogyefuo, \u2184p\u025B nimaa, \u2184p\u025B p\u2184n',
	choice4:  '\u2184p\u025B p\u2184n, \u2184gyefuo, \u2184b\u025B nem',
		answer: 4,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.\n\n Toa b\u025B  yi so “\u025B kaa nwa ne akyekyere nko ara a anka….”',		
  	choice1:'otuo rento w\u2184 kwae mu',
	choice2:  'aboa biara nkye ne y\u2184nko',
	choice3:  'ab\u2184fo biara renk\u2184 wura mu',
	choice4:  'nnipa nnya nam nwe',
		answer: 1,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.\n\n Mpaninfo bu b\u025B  s\u025B , “Bor\u2184fere a \u025B y\u025B  d\u025B  na……”',
		choice1:'mm\u2184fra di',
	choice2: 'y\u025B t\u2184n w\u2184 gua so',
	choice3:	 'nnomaa di',
	choice4:	 'abaa da ase',
		answer: 4,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.\n\n “S\u025B  atuduro asa a, na \u025B ny\u025B …..”',
		choice1:'ahemfi',
	choice2:  'Akowua ntoa mu',
	choice3:	  '\u2184b\u2184mm\u2184fo kotoku mu',
	choice4:	  'Asafo mma kotoku mu',
		answer: 2,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.\n\n “Anomaa nua ne nea \u2184ne no da dua koro” kyer\u025B  Akanfo……',		
  	choice1:'ay\u2184nkofa',
	choice2:  'ofi tena',
	choice3:  'abusuab\u2184',
	choice4:  'nt\u2184n b\u2184',
		answer: 3,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.\n\n \u025B b\u025B , “baanu so a emmia” kyer\u025B ',		
  	choice1:'p\u025B s\u025B menkomenya',
	choice2:  'Nkabom',
	choice3:  'Asisi',
	choice4:  'asondwoe',
		answer: 2,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.\n\n \u2184k\u2184t\u2184 nwo anomaa kyer\u025B  s\u025B  obi suban s\u025B …….',		
  	choice1:'N’awofo',
	choice2:  'N’adamfo',
	choice3:  'Ne nua',
	choice4:  'Ne sewaa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Eyi y\u025B  anwonwade ahorow no mu biako a \u2184k\u2184mfo An\u2184kye y\u025B e?',		
  	choice1:'\u2184de afena w\u2184\u2184 fam ma \u025B kaa h\u2184',
	choice2:  '\u2184paee asub\u2184nten mu abien',
	choice3:  'Oduaa bebe w\u2184 wim',
	choice4:  '\u2184nyanee owufo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Kyer\u025B  ade biako bi a Asebu Amanfi y\u025B  de gyee din',		
  	choice1:'\u2184t\u2184nn nnipa maa Abor\u2184fo',
	choice2:  '\u2184wee nnipa nam',
	choice3:  '\u2184nante firii mpoano k\u2184\u2184 ser\u025B m',
	choice4:  '\u2184wee aburo pata',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n S\u025B  y\u025B b\u2184 Sikadwa Kofi din a, onipa b\u025B n na y\u025B kae no?',		
  	choice1:'Asebu Amanfi',
	choice2:  'Ansa Sasraku',
	choice3:  '\u2184k\u2184mfo Ntiamoa',
	choice4:  '\u2184k\u2184mfo An\u2184kye',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n  Kyer\u025B  baabi a ahemfo baasa a edidi so yi ase firi ; Obunumankoma, \u2184dapagyan ne \u2184son.',
		choice1:' Okuapemman',
	choice2:  'Fanteman',
	choice3:	  'Asanteman',
	choice4:	  'Firaw agya',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Kwaku Ananse ba panin din de….',		
  	choice1:'Afurudohwedohwee',
	choice2:  'Nnakor\u2184nhwea',
	choice3:  'Ntikuma',
	choice4:  'Tikenenkene',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Suban b\u025B n na \u2184seb\u2184 da no adi w\u2184 ananses\u025B m mu?',		
  	choice1:'\u2184boafo',
	choice2:  'Ahobr\u025B ase',
	choice3:  'Asisie',
	choice4:  'Awi\u025B mfo',
		answer: 3,
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
