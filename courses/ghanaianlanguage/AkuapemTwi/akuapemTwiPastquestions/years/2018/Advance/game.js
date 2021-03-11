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
  	question:'Ↄbarima reware a, otua sika bi ma ne yere no nua mmarimanom, wↄfrε saa sika yi dεn?',
  	choice1:'asew sika',
	choice2: 'ti nsa',
	choice3: 'akonta sekan',
	choice4: 'akonta sika',
  	answer: 3,
  },
  {	
  	question: 'Nsa a edi kan pa ara a ↄbarima de koyi ne ho adi kyerε ↄbea no abusua no wↄfrε no',
	choice1: 'awaregye nsa',
	choice2:  'akonta sekan',
	choice3:  'ↄpono-akyi-bↄ',
	choice4:  'ti ade',
	answer: 3,
  },
  {
  	question:'Nea edidi so yi nyinaa yε nokware wↄ Akanfo nkyia ho, gye sε',
  	choice1:'sε obi rekↄgya ne nan a, onkyia',
	choice2: 'sε obi redidi a, yenkyia no',
	choice3: 'yekyia fi nifa so',
	choice4: 'yεmfa yεn nsa bεnkum nkyia',
  	answer: 2,
  },
  {
  	question:'Ansa na aware biara bedi mu no, gye sε ↄbarima no tu ↄbea no.',  	
  	choice1: 'nnamfo nyinaa fo',
	choice2:  'awofo fo',
	choice3:  'nuanom agyina',
	choice4:  'ti nsa',
  	answer: 4,
  },
  {
  	question:'Nna dodow a εda Akwasidae ne Fↄdwo ntam yε',
  	choice1: 'akron',
	choice2:  'dunum',
	choice3:  'aduonu abien',
	choice4:  'aduonu',
  	answer: 2,
  },
  {
  	question: 'Ↄsram a edi kan afe biara mu ne',
		choice1:'Ↄpεnimaa',
	choice2:  'Ↄbεnem',
	choice3:      'Ogyefuo',
	choice4: 	  'Ↄpεpↄn',
		answer: 4,
  },
  {
  	question: 'Da a ade rekye ma wↄadi Akwasidae yε',	 
  	choice1: 'Mono Mene',
	choice2:   'Fↄdwo',
	choice3:   'Awukudae',
	choice4:   'Memeneda Dapaa',
		answer: 4,
  },
  {
  	question: 'Asram dodow ahe na yenya wↄ afirinhyia biako mu?',		
  	choice1: 'dubiako',
	choice2:   'dumien',
	choice3:   'dunkron',
	choice4:   'dummiεnsa',
		answer: 2,
  },
  {
  	question: 'Awunyade yε nnea owufo no de',		
  	choice1:'gya ne mma ne wu akyi',
	choice2:  'mane ne mma',
	choice3:  'kyε ne nuanom bere a ↄte ase',
	choice4:  'ma ne nkonta bere a ↄte ase',
		answer: 1,
  },
  {
  	question: 'Edin bεn na yεde ma obi a osi owufo anan mu hwε n’agyapade so?',		
  	choice1:'abusuapanyin',
	choice2:  'ananmusini',
	choice3:  'odiadefo',
	choice4:  'ↄhwεsofo',
		answer: 3,
  },
  {
  	question: 'Hena na εyε amanne sodi ↄbarima ade wↄ Akanfo mu?',		
  	choice1:'ne wↄfaase',
	choice2:  'n’agya ne wↄfaase',
	choice3:  'ne babarima',
	choice4:  'n’akonta',
		answer: 3,
  },
  {
  	question: 'Nsεm a obi ka de kyekye n’agyapade ansa na wawu yε dεn?',
		choice1:'agyinae',
	choice2:  'nsamansew',
	choice3:	  'mmara',
	choice4:	  'adanse',
		answer: 2,
  },
  {
  	question: 'Bere bεn na Akanfo kyia “Afirinhyia pa”?',		
  	choice1:'buronya',
	choice2:  'akwasidae',
	choice3:  'afahyε',
	choice4:  'yesu amanehunu',
		answer: 3,
  },
  {
  	question: 'Bere bεn na wↄma obi “akwaaba”. Bere a',		
  	choice1:'wakoguare aba',
	choice2:  'ↄbea awo foforo',
	choice3:  'ↄrekↄ adwuma',
	choice4:  'ofi akwantu mu aba',
		answer: 4,
  },
  {
  	question: 'Sε obi retu kwan a wↄma no',		
  	choice1:'due ne akwantu',
	choice2:  'mo ne akwantu',
	choice3:  'da yiye',
	choice4:  'nantew yiye',
		answer: 4,
  },
  {
  	question: 'Sε obi rekyia ↄhene na ↄkwahu ne ntama a, εkyerε dεn?',		
  	choice1:'obu',
	choice2:  'onuadↄ',
	choice3:  'nimdeε',
	choice4:  'koroyε',
		answer: 1,
  },
  {
  	question: 'Akyemfo afahyε a wodi ne dεn?',		
  	choice1:'Ohum',
	choice2:  'Adae kεse',
	choice3:  'Akwammↄ',
	choice4:  'Aboakyere',
		answer: 1,
  },
  {
  	question: 'Hena na ↄyan atumpan wↄ afahyε ase?',		
  	choice1:'Okunini',
	choice2:  'Ↄkyerεma',
	choice3:  'Ↄbrafo',
	choice4:  'Εsεn',
		answer: 2,
  },
  {
  	question: 'Akanfo afahyε biara wↄyε eyi wↄ ase',		
  	choice1:'wokum ↄwansan',
	choice2:  'wↄnoa aburoduan',
	choice3:  'wogu nsa',
	choice4:  'wↄpam nsamanfo',
		answer: 3,
  },
  {
  	question: 'Aboa bεn na Simpafo kyere de di Aboakyere afahyε?',		
  	choice1:'Gyata',
	choice2:  'ↄsebↄ',
	choice3:  'ↄtorↄm',
	choice4:  'ↄnwansan',
		answer: 4,
  },
  {
  	question: 'Sε obi de Tawia a, na odi …..akyi.',		
  	choice1:'Mεnsa',
	choice2:  'Ataa',
	choice3:  'Badu',
	choice4:  'Nkoroma',
		answer: 2,
  },
  {
  	question: 'Edin yi mu nea εwↄ he na εyε kradin?',		
  	choice1:'Nyakoaa',
	choice2:  'Kwabena',
	choice3:  'Agyei',
	choice4:  'frεmpↄn',
		answer: 2,
  },
  {
  	question: 'Edin bεn na wↄde ma abeawa a wↄwoo no Fida?',		
  	choice1:'Akua',
	choice2:  'Adwoa',
	choice3:  'Yaa',
	choice4:  'Afua',
		answer: 4,
  },
  {
  	question: 'Edin a edidi so yi mu nea εwↄ he na nnapↄnna din?',		
  	choice1:'Fofie',
	choice2:  'Bεyεεdεn',
	choice3:  'Minta',
	choice4:  'Kwame',
		answer: 1,
  },
  {
  	question: 'Amanne bεn na Akanfo yε de twe mmeawa ba mpanyin mu?',		
  	choice1:'asubↄ',
	choice2:  'aware',
	choice3:  'bragoru',
	choice4:  'nhyira',
		answer: 3,
  },
  {
  	question: 'sε wↄrebegoru abeawa bi bra a, hena na wodi kan kↄbↄ no amaneε?',		
  	choice1:'Ↄhene',
	choice2:  'Abusuapanyin',
	choice3:  'Ↄhemmea',
	choice4:  'Sanaahene',
		answer: 3,
  },
  {
  	question: 'Sε wogu abeawa bi kyiribra a,',		
  	choice1:'εma abeawa no nya dwetiri',
	choice2:  'εma abeawa no nya kunu pa',
	choice3:  'εma abeawa no ne n’abusuafo animuonyam',
	choice4:  'egu abeawa no ne n’abusuafo anim ase',
		answer: 4,
  },
  {
  	question: 'sε Akanfo ka sε “abeawa” bi abu ne nsa” a na εkyerε dεn?',		
  	choice1:'Wayε bra',
	choice2:  'Ne nsa ayε tenten',
	choice3:  'Owiawia nneεma',
	choice4:  'Ne nsa ayε duru',
		answer: 1,
  },
  {
  	question: 'Din bεn na Akanfo de ma onipa a wↄawuwu dedaadaw no?',		
  	choice1:'Ahotewfo',
	choice2:  'Nsamanfo',
	choice3:  'Ateasefo',
	choice4:  'abↄfo',
		answer: 2,
  },
  {
  	question: 'akanman mu sε obi wu a,',		
  	choice1:'wogu n’nom nsu',
	choice2: 'wↄde no to ne benkum so',
	choice3: 'wonso ne mu',
	choice4: 'wↄteatea no',
		answer: 1,
  },
  {
  	question: 'obi wu a abusuafo tumi de n’agyapade hyε…..nsa ma ↄhwε so.',		
  	choice1:'Okunafo',
	choice2:  'Ne babarima',
	choice3:  'Odiadefo',
	choice4:  'N’adamfo',
		answer: 3,
  },
  {
  	question: 'Sε obi anto ne kↄn anwu a, wↄfrε no',		
  	choice1:'ↄsaman',
	choice2:  'fea',
	choice3:  'obusufo',
	choice4:  'ↄtↄfo',
		answer: 4,
  },
  {
  	question: 'agya rekↄ no ogyaw me ade bi, wosoma no a, ↄbεkↄ nyinaa na ↄresu. Ɛyε dεn?',		
  	choice1:'ↄkraman',
	choice2:  'frama',
	choice3:  'lↄre',
	choice4:  'lεtε',
		answer: 3,
  },
  {
  	question: 'Agya rekↄ no ogyaw me ade bi, wosoma no a ↄrenkↄ gye sε woapae n’atifi ansa. Ɛyε dεn?',
		choice1:'Dadewa',
	choice2:  'Akoa',
	choice3:  	  'lↄre',
	choice4:	  'lεtε',
		answer: 1,
  },
  {
  	question: 'Agya rekↄ no ogyaw me akongua fεfε bi sε mentena so, nanso saa akongua no obiara ntumi ntena so . Ɛyε dεn?',
		choice1:'Asεsεgua',
	choice2:  'Bemu',
	choice3:	  'borↄde',
	choice4:	  'akentengua',
		answer: 2,
  },
  {
  	question: 'Agya rekↄ no ogyaw me akoa bi, saa akoa no sε ↄkↄm de no a, ontumi nnyina hↄ, gye sε wadidi amee, Ɛyε dεn?',
		choice1:'ↄkraman',
	choice2:  'kotoku',
	choice3:	  'agyinamoa',
	choice4: 	  'abofra',
		answer: 2,
  },
  {
  	question: 'Nsεnkyerεnne a obi a ↄredↄw afuw yε wↄ asaase no so ne sε',		
  	choice1:'osi nkεtε',
	choice2:  'otua asafe',
	choice3:  'osum otimpↄn',
	choice4:  'osum ohwim',
		answer: 1,
  },
  {
  	question: 'Sε wuhu sε abofra bi tinwi yε mpεsεmpεsε a εkyerε sε',		
  	choice1:'ↄyε ↄkↄmfo',
	choice2:  'ↄyε Badu',
	choice3:  'ↄyε abosomma',
	choice4:  'ↄyε ↄsaman',
		answer: 3,
  },
  {
  	question: 'Sε akyekyere ne nwaw wↄ ↄhene bi akyeampoma so a na εkyerε sε',		
  	choice1:'ↄhene no akra boa ne nwaw ne akyekyere',
	choice2:  'ↄhene no pε asomdwoe',
	choice3:  'ↄhene no kyi nwaw ne akyekyere',
	choice4:  'ↄhene no pε nwaw ne akyekyere',
		answer: 2,
  },
  {
  	question: 'Nea edidi so yi mu nea εwↄ he na wuhu wↄ ↄhene bi akyeampoma so a, εkyerε sε ↄwↄ tumi sen ↄhene biara',
		choice1:'gyata',
	choice2:  'ↄsebↄ',
	choice3:	  'ↄkↄre',
	choice4:	  'ↄsono',
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

	    }, 1000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()
