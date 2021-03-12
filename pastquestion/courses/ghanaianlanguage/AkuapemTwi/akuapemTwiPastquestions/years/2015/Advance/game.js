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
  	question:'Ↄbea wo abofra a, wↄma no',  	
  	choice1:'Dammirifua',
	choice2: 'Hyεden',
	choice3: 'Darekena',
	choice4: 'Tirinkwa',
  	answer: 4,
  },
  {	
  	question: 'Wudidi na obi ma wo kita mu a, wubegye so dεn?',
	choice1: 'Magyae mu',
	choice2:  'Yoo mate',
	choice3:  'Mikura no',
	choice4:  'Woamma ntεm',
	answer: 3,
  },
  {
  	question:'Paw apεntεdin a εwↄ nea edidi so yi mu.',
  	choice1:'Asaase asa',
	choice2: 'Agyeman',
	choice3: 'Nyankomago',
	choice4: 'Akua Badu',
  	answer: 1,
  },
  {
  	question:'Hyehyε din yi nnidiso nnidiso',  	
  	choice1: 'Yaw, Kwasi, Kwabena',
	choice2:  'Kwabena, Kwaku, Yaw',
	choice3:  'Kwame, Yaw, Kofi',
	choice4:  'Kwaku, Kwasi, Kwadwo',
  	answer: 2,
  },
  {
  	question:'Ɛyε akyiwade sε yedidi a',  	
  	choice1: 'Yεwe nam',
	choice2:  'Yεfrε obi ma odi bi',
	choice3:  'Yεde yεn nsa si fam',
	choice4:  'Yεnom nsu',
  	answer: 3,
  },
  {
  	question: 'Wo maame papa yε wo dεn',		
  	choice1:'Nanabea',
	choice2:  'Nanabarima',
	choice3:  'wↄfasewa',
	choice4:  'papa panyin',
		answer: 2,
  },
  {
  	question: 'Maame Yaa ne maame Akua ware ↄbarima biako, enti wↄyε',	 
  	choice1: 'akorafo',
	choice2:   'nnamfo',
	choice3:   'anuanom',
	choice4:   'atipεnfo',
		answer: 1,
  },
  {
  	question: 'Wo maame nuabarima yε wo dεn?',		
  	choice1: 'wↄfa',
	choice2:   'w’agya kumaa',
	choice3:   'wↄfasewa',
	choice4:   'wↄfase',
		answer: 1,
  },
  {
  	question: 'Wogoru abeawa bi bra a na εkyerε sε',		
  	choice1:'n’abusuafo wↄ sika',
	choice2:  'ne maame pε n’asεm',
	choice3:  'ne ho ayε fε',
	choice4:  'wanyin',
		answer: 4,
  },
  {
  	question: 'Sε wↄregoru abeawa bi bra a, wↄma no',		
  	choice1:'Otuo',
	choice2:  'Bodua',
	choice3:  'ↄtↄ',
	choice4:  'ayitama',
		answer: 3,
  },
  {
  	question: 'Ade titiriw a Akanfo gyina so ware ne',		
  	choice1:'ahoↄfε',
	choice2:  'ahosiesie gonn',
	choice3:  'anotew bεrebεre',
	choice4:  'suban pa',
		answer: 4,
  },
  {
  	question: 'Ↄbarima ne ↄbea ware a, na awofonom abεyε',
		choice1:'Nkontafo',
	choice2:  'Nkumaafo',
	choice3:	  'Nsewnom',
	choice4:	  'Akorafo',
		answer: 3,
  },
  {
  	question: 'yiregu ba aware mu a, na εkyerε sε aware no',		
  	choice1:'Agu',
	choice2:  'asↄ',
	choice3:  'afi ase',
	choice4:  'akorafo',
		answer: 1,
  },
  {
  	question: 'Ↄsram bεn na ekura nnafua 28 anaa 29?',		
  	choice1:'Ogyefuo',
	choice2:  'Ↄbεnem',
	choice3:  'Oforisuo',
	choice4:  'Kitawonsa',
		answer: 1,
  },
  {
  	question: 'Dapaa ahe na Akanfo wↄ',		
  	choice1:'Anan',
	choice2:  'Abien',
	choice3:  'Abiεsa',
	choice4:  'Anum',
		answer: 2,
  },
  {
  	question: 'Wↄka sε oi aka nkyene agu a, εkyerε dεn?',
		choice1:'Onni nkyene',
	choice2:  'Watu kwan',
	choice3:	  'Wakohintaw',
	choice4:	  'Wawu',
		answer: 4,
  },
  {
  	question: 'Nsawa yε …..a ↄmanfo de boa owufo bi abusuafo.',		
  	choice1:'Ntama',
	choice2:  'Sika',
	choice3:  'Nnuan',
	choice4:  'Nsu',
		answer: 2,
  },
  {
  	question: 'Okuafo ma yεn mfumduan. Dεn na ↄbↄmmↄfo ma yεn?',		
  	choice1:'Hanam',
	choice2:  'Nkesua',
	choice3:  'Atosode',
	choice4:  'Nnuaba',
		answer: 1,
  },
  {
  	question: 'Mpanyimfo hyia a, hena na wↄkasa fa no so?',		
  	choice1:'Odikuro',
	choice2:  'Ↄkyeame',
	choice3:  'Ↄsafohene',
	choice4:  'Ɛsεn',
		answer: 2,
  },
  {
  	question: 'Akanman mu ↄhene bεn na ↄwↄ tumi sen ahemfo no nyinaa?',		
  	choice1:'Sanaahene',
	choice2:  'Kurontihene',
	choice3:  'Dabehene',
	choice4:  'Ↄmanhene',
		answer: 4,
  },
  {
  	question: 'Nkurow nketewa mu, hena na ↄhene fa no so frε ↄmanfoↄ.',
		choice1:'ↄbrafo',
	choice2:  'εsεn',
	choice3:	  'dawubↄfo',
	choice4:	  'ahenkwaa',
		answer: 3,
  },
  {
  	question: 'Nipa titiriw a εpaw ↄhene no mu biako ne ….',		
  	choice1:'ↄkyerεma',
	choice2:  'ↄbrafo',
	choice3:  'ↄhemmea',
	choice4:  'dawubↄfo',
		answer: 3,
  },
  {
  	question: 'Ↄhene bεn na ↄhwε nsa so wↄ ahemfi',		
  	choice1:'Dabehene',
	choice2:  'Ↄhemmea',
	choice3:  'Kurontihene',
	choice4:  'Sanaahene',
		answer: 4,
  },
  {
  	question: 'Obi tew owufo bi ntoa a, ase ne dεn?',		
  	choice1:'Wadi n’ade',
	choice2:  'Watↄ funnaka',
	choice3:  'wabↄ da asie no',
	choice4:  'wakↄ ayi ase aba',
		answer: 1,
  },
  {
  	question: 'Nwaw ne akyekyere gyina hↄ ma dεn?',		
  	choice1:'ntↄkwaw',
	choice2:  'asomdwoe',
	choice3:  'patapaa',
	choice4:  'ahoↄhare',
		answer: 2,
  },
  {
  	question: 'Sε woka asεm kyerε obi na ↄwosow ne ti a, εkyerε sε',		
  	choice1:'ↄrenka hwee',
	choice2:  'ↄmpene so',
	choice3:  'ka asεm no bio',
	choice4:  'wagye ato mu',
		answer: 2,
  },
  {
  	question: 'Akanman mu ntama tuntum ne kↄkↄↄ gyina hↄ ma dεn',		
  	choice1:'anigye',
	choice2:  'ahosεpεw',
	choice3:  'awerεhow',
	choice4:  'ahotε',
		answer: 3,
  },
  {
  	question: 'Anansesεm mu no, Adanko ho asεm taa kyerε',		
  	choice1:'abufuw',
	choice2:  'anihaw',
	choice3:  'asisi',
	choice4:  'ahoↄhare',
		answer: 4,
  },
  {
  	question: 'Agya rek? ogyaw me abofra bi. Wosoma no a, ?nk? . wok? nso a, na odi w’akyi. ?y? d?n?Agya rekↄ ogyaw me abofra bi. Wosoma no a, ↄnkↄ . wokↄ nso a, na odi w’akyi. Ɛyε dεn',
		choice1:'Onipa sunsuma',
	choice2:  'Onipa nsateaa',
	choice3:	  'Onipa nan',
	choice4: 	  'Onipa nsa',
		answer: 1,
  },
  {
  	question: 'Agya ade bi wↄ hↄ. Ↄnkↄ asu nanso daa ↄwↄ nsu wↄ n’ahina mu. Ɛyε dεn?',
		choice1:'Mako',
	choice2: 'ntↄrewa',
	choice3:	 'borↄfere',
	choice4:	 'kube',
		answer: 4,
  },
  {
  	question: 'Mpanyin kae a wↄmmoa sε: wusum nkontopo afiri a, wuyi',
		choice1:'nyansa',
	choice2:  'kasabrε',
	choice3:	  'nokware',
	choice4:	  'ayamuye',
		answer: 2,
  },
  {
  	question: 'Maame no ka kyerεε ne ba no se: wokↄ aware a',
		choice1:'kasa',
	choice2:  'didi',
	choice3:	  'bisa',
	choice4:	  'tena ase',
		answer: 3,
  },
  {
  	question: 'Toa saa εbε yi so: woforo dua pa a, na',		
  	choice1:'wopia wo',
	choice2:  'wↄkamfo wo',
	choice3:  'wↄma wo amo',
	choice4:  'wↄbↄ nsam ma wo',
		answer: 1,
  },
  {
  	question: 'Akanfo yi apae a, wↄde ….. na etwa to.',		
  	choice1:'Nyira',
	choice2:  'Nnome',
	choice3:  'ↄfrε',
	choice4:  'nkurobↄ',
		answer: 2,
  },
  {
  	question: 'Akanfo de mmorↄnsa yi apae a, wↄde nsa no gu kↄnkↄ no mu mpεn ahe”',
		choice1:'Mpεn asia',
	choice2:  'Mprεnsa',
	choice3:	  'Mpεn anan',
	choice4:	  'Mpεn anum',
		answer: 2,
  },
  {
  	question: 'Akyemfo afahyε titiriw ne',		
  	choice1:'Bakatue',
	choice2:  'Aboakyere',
	choice3:  'Ohum',
	choice4:  'Kundum',
		answer: 3,
  },
  {
  	question: 'Dwumadi titiriw bεn na Akanfo de wie afahyε?',		
  	choice1:'akwammↄ',
	choice2:  'aguabↄ',
	choice3:  'hyirewgu',
	choice4:  'nkankye',
		answer: 2,
  },
  {
  	question: 'Aman abien wↄ Ghana ha a wↄn mmrane ne Kↄtↄkↄ',		
  	choice1:'Akuapem ne Asante',
	choice2:  'Kwawu ne Akyem',
	choice3:  'Akuapem ne Awawu',
	choice4:  'Asante ne Nzema',
		answer: 4,
  },
  {
  	question: 'Dεn na atetesεm kyerε sε Ↄkↄmfo Anↄkye de mpaboa foroe?',		
  	choice1:'Mpampuro',
	choice2:  'Kokosi',
	choice3:  'borↄfere',
	choice4:  'abεten',
		answer: 4,
  },
  {
  	question: 'Hena na ↄde ne nsa tuu ↄware wu ↄbo mu no',		
  	choice1:'Ↄkↄmfo Anↄkye',
	choice2:  'Ansa Sasraku',
	choice3:  'Ↄsεe Bonsu',
	choice4:  'Ↄkoforoboↄ',
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

		return window.location.assign('end.php') 
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
