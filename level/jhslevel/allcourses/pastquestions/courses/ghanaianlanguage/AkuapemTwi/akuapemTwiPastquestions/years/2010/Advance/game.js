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
  	question:'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n Saa nnipa yi mu nea \u2184w\u2184 he na \u2184y\u025B  wo papa busuani? Wo papa',   
  	choice1:'Akonta',
	choice2: 'Ba',
	choice3: 'Sewaa',
	choice4: 'W\u2184fa',
  	answer: 3,
  },
  {	
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n S\u025B  Akanfo ka se bogya a, na \u025B kyer\u025B  d\u025B n?' + '</b />' + '<br />' + 'S\u025B  Akanfo ka se bogya a, na \u025B kyer\u025B  d\u025B n?',	
  	choice1: 'Abusua',
	choice2:  'Adamfo',
	choice3:  'Akyiwade',
	choice4:  'Aware',
	answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n Akanfo\u2184 w\u2184 gyidi s\u025B  onipa biara w\u2184 \u2184kra ne sunsum. Kyer\u025B  din foforo a y\u025B de fr\u025B  sunsum.' ,
  	choice1:'Abusua',
	choice2:  'Bogya',
	choice3:  'Nt\u2184n (Ntor\u2184)',
	choice4:  'Saman',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n Kyer\u025B  nea enti a \u2184ba ne \u025B na y\u025B  abusuafo.',  	
  	choice1: 'W\u2184b\u2184 abusua koro',
	choice2:  'W\u2184b\u2184 nt\u2184n koro',
	choice3:  'W\u2184w\u2184 adwene koro',
	choice4:  'W\u2184w\u2184 sunsum koro',
  	answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n \u2184kwan b\u025B n so na Akanfo nam b\u2184 agya abusua?',  	
  	choice1: 'Abusuab\u2184',
	choice2:  'Aware\u025B ',
	choice3:  'Kunay\u025B ',
	choice4:  'Owu',
  	answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n S\u025B  wo papa ware mmea baanu a, \u2184baa biako no y\u025B  wo maame d\u025B n?',  	
  	choice1:'Abanoma',
	choice2:  'Akumaa',
	choice3:  'Kora',
	choice4:  'Sewaa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n Nney\u025B e a edidi so yi mu nea \u025B w\u2184 he na \u025B y\u025B  akyiwade? S\u025B  woware….',  	
  	choice1: 'Wo Papa ba',
	choice2:   'Wo Sewaa ba',
	choice3:   'W’adamfo ba',
	choice4:   'Wo W\u2184fa ba',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n D\u025B n na \u025B ma obi hu s\u025B  \u2184ne \u2184foforo som agya bosom biako? S\u025B …',  	
  	choice1: 'W\u2184b\u2184 abusua koro',
	choice2:   'W\u2184n akyiwade y\u025B  p\u025B ',
	choice3:   'W\u2184firi kurow biako',
	choice4:   'W\u2184y\u025B  bogya kor\u2184',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n Abusua b\u025B n na w\u2184gye di s\u025B  w\u2184de ogya baa wiase?',  	
  	choice1:'Aduana',
	choice2:  'Asona',
	choice3:  '\u2184yoko',
	choice4:  'Biretuo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.\n\n Abusua b\u025B n na w\u2184ne akraboa din s\u025B ?',  	
  	choice1:'Aduana',
	choice2:  'Agona',
	choice3:  'Asona',
	choice4:  '\u025B ko\u2184na',
		answer: 4,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n S\u025B  w\u2184paw \u2184hene foforo a, w\u2184de no k\u2184kyer\u025B  ……..kan.',  	
  	choice1:'Abakomahene',
	choice2:  'Amankrado',
	choice3:  'Gyaasehene',
	choice4:  'Sanaahene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n Ber\u025B  b\u025B n ban a woyi odiadefo?',		
  	choice1:'Adaduanan du a',
	choice2:  'Da a onipa no b\u025B  wu no',
	choice3:  'W\u2184nom sikasa wie a',
	choice4:  'W\u2184y\u025B  d\u2184teyie wie a',
		answer: 3,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n Abusua b\u025B n mu na w\u2184yi odiadefo firi?',  	
  	choice1:'Okunafo abusua mu',
	choice2:  'Owufo no abusua mu',
	choice3:  'Owufo no papa abusua mu',
	choice4:  '\u2184hene abusua mu',
		answer: 2,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '<br>' + 'S\u025B  okunafo bi mp\u025B  s\u025B  \u2184ware odiadefo a, kasakoa a \u2184ka ne s\u025B  \u2184b\u025B ware…..',		
  	choice1:'Mmoatia',
	choice2:  'Nk\u2184t\u2184 ne mm\u025B b\u025B ',
	choice3:  'Ne kunu saman',
	choice4:  'Nsamanp\u2184w mu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n S\u025B  obi …….ampene a, onii no ntumi nni obi ade\u025B .',
  	choice1:'Maame',
	choice2:  'Nana',
	choice3:  'Papa',
	choice4:  'W\u2184fa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n Nnipa baanu b\u025B n na w\u2184b\u2184 mu si \u2184hene anan mu?',  	
  	choice1:'\u2184hemaa ne Abusuapanin',
	choice2:  '\u2184hemaa ne Amankrado',
	choice3:  '\u2184hemaa ne Gyaasehene',
	choice4:  '\u2184hemaa ne Dabehene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n Toa as\u025B m yi so; S\u025B  niwaa mma nsae\u025B  a…..nni ade.',  	
  	choice1:'Maame',
	choice2:  'Nana',
	choice3:  'Onua',
	choice4:  'W\u2184faase',
		answer: 4,
  },
  {
  	question: 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.\n\n Nkroma te h\u2184 a Badu nni ade. Eyi kyer\u025B  s\u025B …….',  	
  	choice1:'Ab\u2184fra w\u2184h\u2184 a, \u2184panyin nni ade',
	choice2:  'Badu mma nkroma nni ade',
	choice3:  'W\u2184faase w\u2184h\u2184 a onua nni ade',
	choice4:  '\u2184panin w\u2184 h\u2184 a, ab\u2184fra nni ade',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Aboa b\u025B n na Simpafo kyere de di Aboakyere afahy\u025B ?',  	
  	choice1:'\u2184kankane',
	choice2:  '\u2184nwansane',
	choice3:  '\u2184seb\u2184',
	choice4:  '\u2184tor\u2184mo',
		answer: 2,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Kyer\u025B  botae a Akyemfo gyina so de di Ohum.',  	
  	choice1:'W\u2184de fr\u025B  d\u2184m',
	choice2:  'W\u2184de gye w\u2184n ani',
	choice3:  'W\u2184de huro \u2184k\u2184m',
	choice4:  'W\u2184de sua amammer\u025B ',
		answer: 4,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n \u025B hefo na w\u2184di Akwantuk\u025B se afahy\u025B ?',  	
  	choice1:'Akuapemfo',
	choice2:  'Bonofo',
	choice3:  'Dwaben foforofo',
	choice4:  'Kwawufo',
		answer: 3,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Ns\u025B m a \u025B didi so\u2184 yi nea \u025B w\u2184 he na \u025B y\u025B  nokware?',		
  	choice1:'Afahy\u025B  de \u025B ka ba',
	choice2:  'Afahy\u025B  kyer\u025B  abusua ase',
	choice3:  'Afahy\u025B  ma y\u025B hu amammer\u025B ',
	choice4:  'Afahy\u025B  s\u025B e ber\u025B  kwa',
		answer: 3,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n S\u025B  obi p\u025B  s\u025B  \u2184k\u2184hw\u025B  Bakatue afahy\u025B  a, \u025B s\u025B  s\u025B  \u2184k\u2184…………',  	
  	choice1:'\u025B dena',
	choice2:  'Akyemfo',
	choice3:  'Odwaa',
	choice4:  'Simpa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Afahy\u025B  b\u025B n na Akuapemfo di?',		
  	choice1:'Akwamm\u2184',
	choice2:  'Apo\u2184',
	choice3:  'Ohum',
	choice4:  'Odwira',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n  ………..y\u025B  amammer\u025B  bi a \u025B kyer\u025B  da titiriw bi a atwa mu w\u2184 \u2184man bi abrab\u2184 mu.',
  	choice1:'Afahy\u025B ',
	choice2:  'Ananses\u025B m',
	choice3:  'Bragoru',
	choice4:  'Nsagu',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Kontromfi se: me suman ne ……',  	
  	choice1:'M’adwene',
	choice2:  'M’ani',
	choice3:  'Me nan',
	choice4:  'M’aso',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Ns\u025B m a \u025B didi so\u2184 yi mu de\u025B  \u025B w\u2184 he na \u025B y\u025B  nokware?',  	
  	choice1:'Y\u025B de \u025B b\u025B  kyer\u025B  kasakoa ase',
	choice2:  'Y\u025B de \u025B b\u025B  toa \u025B b\u025B  so',
	choice3:  'Y\u025B de \u025B b\u025B  twa as\u025B m tenten tiawa',
	choice4:  'Y\u025B de \u025B b\u025B  si kasakoa anan mu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Mpanin se; Nsamanpom soduro, wo ni wu a, na ………asa.',  	
  	choice1:'W’abusua',
	choice2:  'Wo nkor\u2184fo',
	choice3:  'Wo nnamfonom',
	choice4:  'Wo nuanom',
		answer: 1,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.\n\n Anomaa antu a, ………',  	
  	choice1:'\u2184bua da',
	choice2:  '\u2184gyina h\u2184',
	choice3:  '\u2184si faako',
	choice4:  '\u2184te h\u2184',
		answer: 1,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Hwan na tete no na w\u2184se \u2184we aburowpata no?',		
  	choice1:'Aduobi Ata',
	choice2: 'Ampomfi',
	choice3: 'Asebu Amanfi',
	choice4: 'Atakora',
		answer: 3,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Tete no na w\u2184se Onyankop\u2184n b\u025B n nnipa. \u025B y\u025B \u025B  d\u025B n na \u2184k\u2184\u2184 sorosoro?',		
  	choice1:'Aberewa bi de w\u2184mma w\u2184\u2184 no',
	choice2:  'Ab\u2184fra bi tia ne nan so',
	choice3:  'Obi hwiee nsu guu ne so',
	choice4:  'Papa bi too \u2184bo b\u2184\u2184 no',
		answer: 1,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Dwom a atiefo to w\u2184 anases\u025B m mu no w\u2184fr\u025B  no d\u025B n?',  	
  	choice1:'Abraa braa',
	choice2:  'Aho',
	choice3:  'Mmogu',
	choice4:  'Nnwonkor\u2184',
		answer: 3,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Ananses\u025B m botae titiriw ne s\u025B …..',  	
  	choice1:'W\u2184de b\u2184 nk\u2184mm\u2184',
	choice2:  'W\u2184de gyegye mmofra agoru',
	choice3:  'W\u2184de tu fo',
	choice4:  'W\u2184de twa as\u025B m tiawa',
		answer: 3,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n Anases\u025B m mma mu nea \u2184w\u2184 he na \u2184y\u025B  anite pa ara?',  	
  	choice1:' Akok\u2184 Antwiwaa',
	choice2:  'Ananse',
	choice3:  'Ntikuma',
	choice4:  '\u2184kraman',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.\n\n S\u025B  y\u025B ka s\u025B  ananses\u025B m mfimfini a na \u025B kyer\u025B ……',  	
  	choice1:'Ananses\u025B m no ankasa',
	choice2:  'Ananses\u025B m no awiei',
	choice3:  'Mmogu',
	choice4:  '\u2184fr\u025B ',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.\n\n Sisiri mbo, tabon mbo. Adwuma b\u025B n mu dwom ni?',  	
  	choice1:'Ahay\u025B ',
	choice2:  'Kuay\u025B ',
	choice3:  'Ntomanwene',
	choice4:  'Apok\u2184',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.\n\n Antoakyire y\u025B  mm\u2184fra agoru no mu biako. Kyer\u025B  ne botae.',  	
  	choice1:'Aho\u2184den',
	choice2:  'Ahw\u025B yie',
	choice3:  'Nnamfofa',
	choice4:  'Papay\u025B ',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.\n\n Toa saa dwom yi so: Dedendee Kwaw, Dedendee Kwaw, Agya B\u2184fo\u2184 ne nkwan y\u025B  me d\u025B  nanso……',
		choice1:'N’ataade y\u025B  me tumm',
	choice2:  'Ne mpaboa y\u025B  me k\u2184\u2184',
	choice3:	  'Ne nam y\u025B  me d\u025B ',
	choice4:	  'Ne tuo ho y\u025B  me tumm',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.\n\n Ad\u025B n nti na s\u025B  obi rey\u025B  adwuma a \u2184to dwom? S\u025B de\u025B …..',		
  	choice1:'nkur\u2184fo b\u025B te ne nne',
	choice2:  'nnipa b\u025B hu s\u025B  \u2184w\u2184 h\u2184',
	choice3:  '\u2184benya aboafo',
	choice4:  '\u2184rente \u2184br\u025B ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.\n\n Nea edidi so yi mu nea \u025B w\u2184 he na \u025B ny\u025B  Akanfo agoru?',  	
  	choice1:'Ahay\u2184',
	choice2:  'Antoakyire',
	choice3:  'As\u2184ba',
	choice4:  'atentam',
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
