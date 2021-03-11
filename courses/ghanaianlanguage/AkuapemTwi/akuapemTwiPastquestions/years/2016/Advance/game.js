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
  	question:'Nkyia de dɛn na ɛba obi so?',
   	choice1:'Awerɛhow ne animka',
	choice2: 'Osu ne menaasepɔw',
	choice3: 'Ahosɛpɛw, obu ne nidi',
	choice4: 'Nyansa ne nitan',
  	answer: 3,
  },
  {
  	question:'Ɛhefa na yɛte nkyia “hyɛ den?”',
  	choice1:'Ayiase',
	choice2: 'Awaregye ase',
	choice3: 'Nkurobɔ mu',
	choice4: 'Ayeforohyia ase',
  	answer: 1,
  },
  {	
  	question: 'Akanfo taa kyia akokoaa a wɔawo no foforo',
	choice1: 'Ayikoo ne awo',
	choice2:  'Aba-a-tena-ase',
	choice3:  'Kosɛkosɛ',
	choice4:  'Nkyerɛ oo',
	answer: 2,
  },
  {
  	question:'Aware mu no, hefo na wogu ɔbea no hyirew?',  	
  	choice1: 'Adɔfonom',
	choice2:  'Nsewnom',
	choice3:  'Nkontanom',
	choice4:  'Nkumaafo',
  	answer: 4,
  },
  {
  	question:'Sɛ ɔbea bi kunu ka baabi na owufo no nuabarima ware no a, ɛyɛ……',
  	choice1: 'Ayɛte',
	choice2:  'Kunaware',
	choice3:  'Asiwa',
	choice4:  'Mpenaware',
  	answer: 2,
  },
  {
  	question: 'Abofra a ne na dii awommawu ansa na wɔrewo no no yɛ…..',		
  	choice1:'Ankonam',
	choice2:  'Kɔsanba',
	choice3:  'Ɔdefo',
	choice4:  'Oduefo',
		answer: 2,
  },
  {
  	question: 'Din ahorow yi mu nea ɛwɔ he na ɛyɛ apɛntɛdin?',	 
  	choice1: 'Kaakyire',
	choice2:   'Asaseasa',
	choice3:   'Ahenkan',
	choice4:   'Piesie',
		answer: 2,
  },
  {
  	question: 'Duku yɛ abofra a ɔtɔ so ……. wɔ awo ntoatoaso mu.',		
  	choice1: 'dunan',
	choice2:   'dunum',
	choice3:   'dubiako',
	choice4:   'du',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho Akanfo Kasadwini gu ahorow ahe?',		
  	choice1:'Anum',
	choice2:  'Anan',
	choice3:  'Abiɛsa',
	choice4:  'Abien',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho.\n\n Nea edidi so yi mu biako yɛ Anom Kasadwini.',		
  	choice1:'Anwensɛm',
	choice2:  'Abasɛm',
	choice3:  'Ahwɛgoru',
	choice4:  'Anansesɛm',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho.\n\n Nea ɛwɔ he na ɛyɛ Akyerɛw Kasadwini?',		
  	choice1:'Amoma',
	choice2:  'Nsaguo',
	choice3:  'Anwensɛm',
	choice4:  'Apae',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho.\n\n Anom Kasadwini su biako ne sɛ ….',
		choice1:'ɛyɛ ɔman no nyinaa dea',
	choice2:  'ɛwɔ ɔkyerɛwfo pɔtee',
	choice3:	  'enni nhyehyɛe pɔtee',
	choice4:	  'enni ɔyɛfo ne atiefo',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n\n Akanfo gyidi ne sɛ ntɔn sunsum no fi …….',
		choice1:'Ɛna',
	choice2:  'Wɔfa',
	choice3:	  'Agya',
	choice4:	  'Abusuapanyin',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n\n Abusuakuw bɛn na wɔn akraboa no ara yɛ wɔn din?',		
  	choice1:'Aduana',
	choice2:  'Ɛkoɔna',
	choice3:  'Agona',
	choice4:  'Asakyiri',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n\n Abusuakuw bɛn na wɔwɔ akraboa abien?',		
  	choice1:'Asona',
	choice2:  'Ɛkoɔna',
	choice3:  'Agona',
	choice4:  'Aduana',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n\n  ……….. yɛ Agona abusuakuw no akraboa.',		
  	choice1:'Kwaakwaadabi',
	choice2:  'Akoroma',
	choice3:  'Akoo',
	choice4:  'Ɛkoɔ',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n\n Akanman mu, hena ne abusua no nyinaa ti?',		
  	choice1:'Abusuapanyin',
	choice2:	  'Ayipasohene',
	choice3:	  'Nkwaankwaahene',
	choice4: 	  'Adadifo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.\n\n Ade titiriw bɛn na Akamfo hwɛ ansa na wɔapaw ɔhene?',		
  	choice1:'Onipa tenten bran',
	choice2:  'Ɛsɛ sɛ ɔyɛ ɔdehye kronn',
	choice3:  'Ohiani a ɔwɔ mma bebree',
	choice4:  'Obi a otumi di akakabens?m',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.\n\n Sɛ ɔhene tu kwan a, ɔde ɔman no gyaw hena?', 		
  	choice1:'Safohene',
	choice2:  'Ɔkyeame',
	choice3:  'Kurontihene',
	choice4:  'Dabehene',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.\n\n ………. na ɔhwɛ ɔhene ne ɔmamfo sika so wɔ ahemfi.',		
  	choice1:'Gyaasehene',
	choice2:  'Sodoohene',
	choice3:  'Mmerantehene',
	choice4:  'Sannaahene',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho. Sɛ ɔmamfo hyia wɔ aguabɔ ase a, hena na ogu nsa?',		
  	choice1:'Ɔkyeame',
	choice2:  'Kurontihene',
	choice3:  'Safohene',
	choice4:  'Dabehene',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho. Sɛ Akanfo reyi apae a, hena na wodi kan bɔ ne din?',		
  	choice1:'Asase Yaa',
	choice2:  'Onyankopɔn',
	choice3:  'Nsamanfo',
	choice4:  'Ateasefo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Nneɛma kuw yi mu nea ɛwɔ he na okuafo de adwuma?',
		choice1:'Ɔsosɔw, twitae, asadua',
	choice2:  'Asɔw, asaa, peaw',
	choice3: 	  'Nkrante, ɔsosɔw, asɔw',
	choice4:	  'Asadua, asɔw, kɔtɔkorɔ',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Wokɔ ɔtomfo adwuma mu a, wubenya ….. atɔ.',		
  	choice1:'kɛntɛ ne nkrante',
	choice2:  'peaw ne adwiniasa',
	choice3:  'twitae ne bommo',
	choice4:  'ɔsosɔw ne asɔw',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Dwom “Kurohinko” fa adwuma bɛn ho?',		
  	choice1:'Nkɔbɔ',
	choice2:  'Kentenwene',
	choice3:  'Atono',
	choice4:  'Ahayɔ',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Hena na ɔnto dwom wɔ n’adwumayɛ mu?',		
  	choice1:'Ɔbɔmmɔfo',
	choice2:  'Okuafo',
	choice3:  'Kentenwenefo',
	choice4:  'Ɔtomfo',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Toa ɛbɛ yi so: “Otuo tow a …..”',		
  	choice1:'esi ɔbarima bo',
	choice2:  'ɛkanyan ɔhene ma osuae',
	choice3:  'nkurɔfo bɔ hu',
	choice4:  'mmea konhintaw',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Mpanyin se: “Ɛkaa akyekyere ne nnaw nko a anka ……”',		
  	choice1:'mmea bɛkɔ afum daa',
	choice2:  'mmofra bɛkɔ atwee da biara',
	choice3:  'ɔbɔmmɔfo bɛda kɔm',
	choice4:  'otuo rentow wuram da',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Yaw Mɛnsa buu n’adamfo no bɛ sɛ: “ Ɔbaakofo nsa…..”',   		
  	choice1:'ntumi nguare ne ho',
	choice2:  'tumi dɔw n’afum',
	choice3:  'nso n’abusuafo nyinaa so',
	choice4:  'nso nyame ani kata',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Kasakoa yi ase ne dɛn? Adwuma no dɔɔso enti ma wo nsa so.',
		choice1:'Yɛ no ntɛmntɛm',
	choice2: 'Pagyaw wo nsa kɔ soro',
	choice3:	 'Bɔ wo nsam ɔhare so',
	choice4:	 'Ka wo nsa abien bɔ mu',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n\n Mprempren de, nna amee me nenabarima.',		
  	choice1:' Ayɛ aberantewa koraa',
	choice2:  'Ayɛ basaa',
	choice3:  'Anyin papaapa',
	choice4:  'Ntumi nkasa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n\n Ɔhene bɛn na otumi de ɛsono si ne bamkyinii so?',		
  	choice1:'Abɔntendɔmhene',
	choice2:  'Kurontihene',
	choice3:  'Guantoahene',
	choice4:  'Ɔmanhene',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n\n Ɔhene a ……..si n’akyeampomaa so no yɛ ɔsonani.',		
  	choice1:'ɔkraman',
	choice2:  'kwaakwaadabi',
	choice3:  'akoroma',
	choice4:  'akoo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n\n Kurow a Akyekyere ne nwaw da wɔn hene asɛsɛgua ho kyerɛ sɛ …….',
		choice1:'wɔnka mmara',
	choice2:  'hwee nyɛ wɔn asɛm',
	choice3:	  'wɔpɛ asomdwoe',
	choice4:	  'mmoa abien no yɛ nam a wɔpɛ yiye.',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n\n Agyarekɔ, ogyaa me asraafo ɔha a wɔn nyinaa abɔso yɛ biako. Ɛyɛ dɛn?',		
  	choice1:'Ɔprae',
	choice2:  'Muka',
	choice3:  'Asesawura',
	choice4:  'Asomurofi',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n\n Agyarekɔ, ogyaa me anuanom baanu nanso obiara nhu ne yɔnko anim. Ɛyɛ onipa',
		choice1:'Nansoaa du',
	choice2:  'Nsa abien',
	choice3: 	  'Nan abien',
	choice4:	  'Nniwa abien',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n\n “Ɔrebɔ ne dade so kyankyan” yɛ dwom a ɛfa hena ho?',		
  	choice1:'Ɔtomfo',
	choice2:  'Ɔbɔmmɔfo',
	choice3:  'ɔdansifo',
	choice4:  'okuafo',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n\n “…………” yɛ dwom a ɛfa adɔw ho.',		
  	choice1:'Ayikoo, anyaado',
	choice2:  'Kɔtɔkɔ sarewa, gyansarewa',
	choice3:  'Kurohinko, kurohinko na ɛyɛ me dɛ',
	choice4:  'Adonko, fa me kɔ oo',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n\n Dwom bɛn na mmofra de di abosi agoru?',		
  	choice1:'Mpempenaa, nana aa…..',
	choice2:  'Obi ba o, yee yei!',
	choice3:  'Sansan koroma, wo ni awuo oo',
	choice4:  'Asɔba, yee yei, asɔba',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n\n Mpempenaa agodi mu no, mmofra to dwom',		
  	choice1:'kɔtɔkɔ sarewa, gyansarewa',
	choice2:  'asɔba, bɛtɔ mu',
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
