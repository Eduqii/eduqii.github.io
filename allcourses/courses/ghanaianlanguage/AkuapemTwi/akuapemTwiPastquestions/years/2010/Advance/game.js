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
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Saa nnipa yi mu nea ɔwɔ he na ɔyɛ wo papa busuani? Wo papa',   
  	choice1:'Akonta',
	choice2: 'Ba',
	choice3: 'Sewaa',
	choice4: 'Wɔfa',
  	answer: 3,
  },
  {	
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Sɛ Akanfo ka se bogya a, na ɛkyerɛ dɛn?' + '</b />' + '<br />' + 'Sɛ Akanfo ka se bogya a, na ɛkyerɛ dɛn?',	
  	choice1: 'Abusua',
	choice2:  'Adamfo',
	choice3:  'Akyiwade',
	choice4:  'Aware',
	answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Akanfoɔ wɔ gyidi sɛ onipa biara wɔ ɔkra ne sunsum. Kyerɛ din foforo a yɛde frɛ sunsum.' ,
  	choice1:'Abusua',
	choice2:  'Bogya',
	choice3:  'Ntɔn (Ntorɔ)',
	choice4:  'Saman',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Kyerɛ nea enti a ɔba ne ɛna yɛ abusuafo.',  	
  	choice1: 'Wɔbɔ abusua koro',
	choice2:  'Wɔbɔ ntɔn koro',
	choice3:  'Wɔwɔ adwene koro',
	choice4:  'Wɔwɔ sunsum koro',
  	answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Ɔkwan bɛn so na Akanfo nam bɔ agya abusua?',  	
  	choice1: 'Abusuabɔ',
	choice2:  'Awareɛ',
	choice3:  'Kunayɛ',
	choice4:  'Owu',
  	answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Sɛ wo papa ware mmea baanu a, ɔbaa biako no yɛ wo maame dɛn?',  	
  	choice1:'Abanoma',
	choice2:  'Akumaa',
	choice3:  'Kora',
	choice4:  'Sewaa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Nneyɛe a edidi so yi mu nea ɛwɔ he na ɛyɛ akyiwade? Sɛ woware….',  	
  	choice1: 'Wo Papa ba',
	choice2:   'Wo Sewaa ba',
	choice3:   'W’adamfo ba',
	choice4:   'Wo Wɔfa ba',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Dεn na ɛma obi hu sɛ ɔne ɔfoforo som agya bosom biako? Sɛ…',  	
  	choice1: 'Wɔbɔ abusua koro',
	choice2:   'Wɔn akyiwade yɛ pɛ',
	choice3:   'Wɔfiri kurow biako',
	choice4:   'Wɔyɛ bogya korɔ',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Abusua bɛn na wɔgye di sɛ wɔde ogya baa wiase?',  	
  	choice1:'Aduana',
	choice2:  'Asona',
	choice3:  'Ɔyoko',
	choice4:  'Biretuo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.\n\n Abusua bɛn na wɔne akraboa din sɛ?',  	
  	choice1:'Aduana',
	choice2:  'Agona',
	choice3:  'Asona',
	choice4:  'Ɛkoɔna',
		answer: 4,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Sɛ wɔpaw ɔhene foforo a, wɔde no kɔkyerɛ ……..kan.',  	
  	choice1:'Abakomahene',
	choice2:  'Amankrado',
	choice3:  'Gyaasehene',
	choice4:  'Sanaahene',
		answer: 2,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Berɛ bɛn ban a woyi odiadefo?',		
  	choice1:'Adaduanan du a',
	choice2:  'Da a onipa no bɛ wu no',
	choice3:  'Wɔnom sikasa wie a',
	choice4:  'Wɔyɛ dɔteyie wie a',
		answer: 3,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Abusua bɛn mu na wɔyi odiadefo firi?',  	
  	choice1:'Okunafo abusua mu',
	choice2:  'Owufo no abusua mu',
	choice3:  'Owufo no papa abusua mu',
	choice4:  'Ɔhene abusua mu',
		answer: 2,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '<br>' + 'Sɛ okunafo bi mpɛ sɛ ɔware odiadefo a, kasakoa a ɔka ne sɛ ɔbɛware…..',		
  	choice1:'Mmoatia',
	choice2:  'Nkɔtɔ ne mmɛbɛ',
	choice3:  'Ne kunu saman',
	choice4:  'Nsamanpɔw mu',
		answer: 3,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Sɛ obi …….ampene a, onii no ntumi nni obi adeɛ.',
  	choice1:'Maame',
	choice2:  'Nana',
	choice3:  'Papa',
	choice4:  'Wɔfa',
		answer: 3,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Nnipa baanu bɛn na wɔbɔ mu si ɔhene anan mu?',  	
  	choice1:'Ɔhemaa ne Abusuapanin',
	choice2:  'Ɔhemaa ne Amankrado',
	choice3:  'Ɔhemaa ne Gyaasehene',
	choice4:  'Ɔhemaa ne Dabehene',
		answer: 2,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Toa asɛm yi so; Sɛ niwaa mma nsaeɛ a…..nni ade.',  	
  	choice1:'Maame',
	choice2:  'Nana',
	choice3:  'Onua',
	choice4:  'Wɔfaase',
		answer: 4,
  },
  {
  	question: 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.\n\n Nkroma te hɔ a Badu nni ade. Eyi kyerɛ sɛ…….',  	
  	choice1:'Abɔfra wɔhɔ a, ɔpanyin nni ade',
	choice2:  'Badu mma nkroma nni ade',
	choice3:  'Wɔfaase wɔhɔ a onua nni ade',
	choice4:  'ɔpanin wɔ hɔ a, abɔfra nni ade',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Aboa bɛn na Simpafo kyere de di Aboakyere afahyɛ?',  	
  	choice1:'Ɔkankane',
	choice2:  'Ɔnwansane',
	choice3:  'Ɔsebɔ',
	choice4:  'Ɔtorɔmo',
		answer: 2,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Kyerɛ botae a Akyemfo gyina so de di Ohum.',  	
  	choice1:'Wɔde frɛ dɔm',
	choice2:  'Wɔde gye wɔn ani',
	choice3:  'Wɔde huro ɔkɔm',
	choice4:  'Wɔde sua amammerɛ',
		answer: 4,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Ɛhefo na wɔdi Akwantukɛse afahyɛ?',  	
  	choice1:'Akuapemfo',
	choice2:  'Bonofo',
	choice3:  'Dwaben foforofo',
	choice4:  'Kwawufo',
		answer: 3,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Nsɛm a ɛdidi soɔ yi nea ɛwɔ he na ɛyɛ nokware?',		
  	choice1:'Afahyɛ de ɛka ba',
	choice2:  'Afahyɛ kyerɛ abusua ase',
	choice3:  'Afahyɛ ma yɛhu amammerɛ',
	choice4:  'Afahyɛ sɛe berɛ kwa',
		answer: 3,
  },
  {
  	question: + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Sɛ obi pɛ sɛ ɔkɔhwɛ Bakatue afahyɛ a, ɛsɛ sɛ ɔkɔ…………',  	
  	choice1:'Ɛdena',
	choice2:  'Akyemfo',
	choice3:  'Odwaa',
	choice4:  'Simpa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Afahyɛ bɛn na Akuapemfo di?',		
  	choice1:'Akwammɔ',
	choice2:  'Apoɔ',
	choice3:  'Ohum',
	choice4:  'Odwira',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n  ………..yɛ amammerɛ bi a ɛkyerɛ da titiriw bi a atwa mu wɔ ɔman bi abrabɔ mu.',
  	choice1:'Afahyɛ',
	choice2:  'Anansesɛm',
	choice3:  'Bragoru',
	choice4:  'Nsagu',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Kontromfi se: me suman ne ……',  	
  	choice1:'M’adwene',
	choice2:  'M’ani',
	choice3:  'Me nan',
	choice4:  'M’aso',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Nsɛm a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛyɛ nokware?',  	
  	choice1:'Yɛde ɛbɛ kyerɛ kasakoa ase',
	choice2:  'Yɛde ɛbɛ toa ɛbɛ so',
	choice3:  'Yɛde ɛbɛ twa asɛm tenten tiawa',
	choice4:  'Yɛde ɛbɛ si kasakoa anan mu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Mpanin se; Nsamanpom soduro, wo ni wu a, na ………asa.',  	
  	choice1:'W’abusua',
	choice2:  'Wo nkorɔfo',
	choice3:  'Wo nnamfonom',
	choice4:  'Wo nuanom',
		answer: 1,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.\n\n Anomaa antu a, ………',  	
  	choice1:'ɔbua da',
	choice2:  'ɔgyina hɔ',
	choice3:  'ɔsi faako',
	choice4:  'ɔte hɔ',
		answer: 1,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.\n\n Hwan na tete no na wɔse ɔwe aburowpata no?',		
  	choice1:'Aduobi Ata',
	choice2: 'Ampomfi',
	choice3: 'Asebu Amanfi',
	choice4: 'Atakora',
		answer: 3,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.\n\n Tete no na wɔse Onyankopɔn bɛn nnipa. Ɛyɛɛ dɛn na ɔkɔɔ sorosoro?',		
  	choice1:'Aberewa bi de wɔmma wɔɔ no',
	choice2:  'Abɔfra bi tia ne nan so',
	choice3:  'Obi hwiee nsu guu ne so',
	choice4:  'Papa bi too ɔbo bɔɔ no',
		answer: 1,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.\n\n Dwom a atiefo to wɔ anasesɛm mu no wɔfrɛ no dɛn?',  	
  	choice1:'Abraa braa',
	choice2:  'Aho',
	choice3:  'Mmogu',
	choice4:  'Nnwonkorɔ',
		answer: 3,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.\n\n Anansesɛm botae titiriw ne sɛ…..',  	
  	choice1:'Wɔde bɔ nkɔmmɔ',
	choice2:  'Wɔde gyegye mmofra agoru',
	choice3:  'Wɔde tu fo',
	choice4:  'Wɔde twa asɛm tiawa',
		answer: 3,
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.\n\n Anasesɛm mma mu nea ɔwɔ he na ɔyɛ anite pa ara?',  	
  	choice1:' Akokɔ Antwiwaa',
	choice2:  'Ananse',
	choice3:  'Ntikuma',
	choice4:  'Ɔkraman',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.\n\n Sɛ yɛka sɛ anansesɛm mfimfini a na ɛkyerɛ……',  	
  	choice1:'Anansesɛm no ankasa',
	choice2:  'Anansesɛm no awiei',
	choice3:  'Mmogu',
	choice4:  'ɔfrɛ',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.\n\n Sisiri mbo, tabon mbo. Adwuma bɛn mu dwom ni?',  	
  	choice1:'Ahayε',
	choice2:  'Kuayε',
	choice3:  'Ntomanwene',
	choice4:  'Apokɔ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.\n\n Antoakyire yɛ mmɔfra agoru no mu biako. Kyerɛ ne botae.',  	
  	choice1:'Ahoɔden',
	choice2:  'Ahwɛyie',
	choice3:  'Nnamfofa',
	choice4:  'Papayɛ',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.\n\n Toa saa dwom yi so: Dedendee Kwaw, Dedendee Kwaw, Agya Bɔfoɔ ne nkwan yɛ me dɛ nanso……',
		choice1:'N’ataade yɛ me tumm',
	choice2:  'Ne mpaboa yɛ me kɔɔ',
	choice3:	  'Ne nam yɛ me dɛ',
	choice4:	  'Ne tuo ho yɛ me tumm',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.\n\n Adɛn nti na sɛ obi reyɛ adwuma a ɔto dwom? Sɛdeɛ…..',		
  	choice1:'nkurɔfo bɛte ne nne',
	choice2:  'nnipa bɛhu sɛ ɔwɔ hɔ',
	choice3:  'ɔbenya aboafo',
	choice4:  'ɔrente ɔbrɛ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.\n\n Nea edidi so yi mu nea ɛwɔ he na ɛnyɛ Akanfo agoru?',  	
  	choice1:'Ahayɔ',
	choice2:  'Antoakyire',
	choice3:  'Asɔba',
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
