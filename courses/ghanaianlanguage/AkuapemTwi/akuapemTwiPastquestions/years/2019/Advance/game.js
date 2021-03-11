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
  	question:'Bere bɛn na ɔkanni ka kyerɛ ne yɔnko tipɛn due ne nwunu?',
  	choice1:'Anwummere',
	choice2: 'Anɔpa',
	choice3: 'Ahemanakye',
	choice4: 'Awia',
  	answer: 1,
  },
  {	
  	question: 'he na Akanfo kyia no aba-a-tenase?',
	choice1: 'Akwakora a wapɔn adwuma',
	choice2:  'Akokoaa a wɔawo no foforo',
	choice3:  'Asewbea a ɔredi n’awoda',
	choice4:  'Onuabarima a ɔretu kwan',
	answer: 2,
  },
  {
  	question:'Okuafo, Adwuma o! Nnyeso no ne…….',
  	choice1:'Woato me',
	choice2: 'Yɛahyiahyia',
	choice3: 'ɛnkaa akyi ɛ',
	choice4: 'Adwuma ye',
  	answer: 4,
  },
  {
  	question:'ɛhefa na Akanfo kyia due',  	
  	choice1: 'Awoda ase',
	choice2:  'Awaregye ase',
	choice3:  'Ayi Ase',
	choice4:  'Apontow Ase',
  	answer: 3,
  },
  {
  	question:'Din kuw yi mu biako y3 Akanfo kradin nkutoo',  	
  	choice1: 'Agyeman,ɔpɔn, Agyeibea',
	choice2:  'Nkansa, Amma, Ofori',
	choice3:  'Kwasi, Abena , Yaa',
	choice4:  'Twum, Kwame, ɔsaebea',
  	answer: 3,
  },
  {
  	question: 'Din bɛn na wode bɛma mmofra a ɛna awo wɔn koro anaa bere koro mu?',		
  	choice1:'Ntaafo',
	choice2:  'Ahenkan',
	choice3:  'Piesie',
	choice4:  'Kaakyire',
		answer: 1,
  },
  {
  	question: 'Paw kuw biako a ne nyinaa yɛ apɛntɛdin.',	 
  	choice1: 'Oforiwa, Adwoa, Obimp3',
	choice2:   'Kwakye, Adoma, Nyako',
	choice3:   'Ntomago, Sumina, Asaaseasa',
	choice4:   'Nkrabrea, Frempɔn, Kwabena',
		answer: 3,
  },
  {
  	question: 'Wo papa wɔfa yɛ wo dɛn wɔ w’abusua mu?',		
  	choice1: 'Akumaa',
	choice2:   'Wɔfa',
	choice3:   'Wɔfaasewa',
	choice4:   'Nanabarima',
		answer: 4,
  },
  {
  	question: 'Akanfo mma bɔ wɔn agyanom …….',		
  	choice1:'ntɔn',
	choice2:  'Mogya',
	choice3:  'Mfuakokɔ',
	choice4:  'Sora',
		answer: 1,
  },
  {
  	question: 'Hena ne wo sewaa?',		
  	choice1:'papa Nuabea',
	choice2:  'Maame Wɔfa',
	choice3:  'ɛna nuabea',
	choice4:  'Akyi ba a ɔto so abien',
		answer: 1,
  },
  {
  	question: 'Akanman mu sɛ obi ka ntam a …..',		
  	choice1:'Wɔde no kɔ kɔɔto',
	choice2:  'Wɔhwe no',
	choice3:  'Wɔkyere no dedua',
	choice4:  'Wɔbɔ no ka',
		answer: 3,
  },
  {
  	question: 'Bragoru yɛ amanne a Akanfo yɛ ma hefo?',
		choice1:'Mmerea a wɔayae aware',
	choice2:  'Mma mmea a wɔadu mpanyin afe so',
	choice3:	  'Mma mmarima a wɔrehyɛ kuayɛ ase',
	choice4:	  'Asigyafo a wɔrekɔ aware ase',
		answer: 2,
  },
  {
  	question: 'Nneɛma kuw yi mu nea ɛwɔ he na Akanfo de ma asakyima mo?',		
  	choice1:'Hyirew, Adwerɛ, ɔkɔben',
	choice2:  'Birisi, adaka, ɔtɔ',
	choice3:  'Ayitama, Nkesua, Ntwoma',
	choice4:  'ɔtɔ, Nkesua, Sonwere',
		answer: 4,
  },
  {
  	question: 'Akanfo awaregye mu no, hena na ogye danta no?',		
  	choice1:'Agya',
	choice2:  'ɛna',
	choice3:  'Wɔfa',
	choice4:  'Akumaa',
		answer: 1,
  },
  {
  	question: 'Din bɛn na wɔde ma sika a okunu de ma ne yere no?',		
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
	choice4: 'ɔkorafo',	
		 
		answer: 3,
  },
  {
  	question: 'Abusuakuw Agona akraboa ne ……',		
  	choice1:'ɔkraman',
	choice2:  'Akoo',
	choice3:  'Ampan',
	choice4:  'Akorɔma',
		answer: 2,
  },
  {
  	question: 'Abusua bɛn na wɔn akraboa ne Opete?',		
  	choice1:'Asenefo',
	choice2:  'Aduanafo',
	choice3:  'Asakyirifo',
	choice4:  'Agonafo',
		answer: 3,
  },
  {
  	question: 'Abusua bɛn na wɔn din ne wɔn akraboa no yɛ pɛ?',		
  	choice1:'ɔyoko',
	choice2:  'ɛkoɔna',
	choice3:  'Aduana',
	choice4:  'Asona',
		answer: 2,
  },
  {
  	question: 'Akanfo nnabu mu no, din foforo bɛn na wɔde ma nnawɔtwe asia?',		
  	choice1:'Adaduosia',
	choice2:  'Adaekɛse',
	choice3:  'Adaduɔwɔtwe',
	choice4:  'Adaduanan',
		answer: 4,
  },
  {
  	question: 'Dapaa yɛ da a edi ………. anim.',		
  	choice1:'Adae',
	choice2:  'Odwira',
	choice3:  'Afahyɛ',
	choice4:  'Abisa',
		answer: 1,
  },
  {
  	question: 'Akanfo Asranna mu no, Adae kuw no yɛ ahe?',		
  	choice1:'Abiɛsa',
	choice2:  'Abien',
	choice3:  'Asia',
	choice4:  'Anan',
		answer: 2,
  },
  {
  	question: 'Akuapemfo afahyɛ titiriw ne ……..',		
  	choice1:'Odwira',
	choice2:  'Aboakyere',
	choice3:  'Kundum',
	choice4:  'Ohum',
		answer: 1,
  },
  {
  	question: 'Nea edidi so yi mu biako nyɛ afahyɛ ho mfaso.',		
	choice1:  'Abusua tontɔn wɔn ',
	choice2:  'Ahemfo ne wɔn manfo bɔ' ,	
	choice3:  'ɔmanfo sua wɔn', 	
	choice4:  'ɛde akobɔfo ba fie bɛsra abusuafo',
		answer: 1,
  },
  {
  	question: 'Ade titiriw pa ara a Akanfo hwɛ so paw ɔhene ne sɛ, ɛsɛ sɛ onipa ko no yɛ ……… kron.',
		choice1:'ɔdehye',
	choice2:  'ɔyamuyefo ne abakan',
	choice3:	  'osikani',
	choice4:	  'patapaa ne akokoduru',
		answer: 1,
  },
  {
  	question: 'Dɛn na ɔhene foforo de suae kyerɛ ne manfo?',		
  	choice1:'Atumpan',
	choice2:  'Afoa',
	choice3:  'ɔdawuru',
	choice4:  'Mmena',
		answer: 2,
  },
  {
  	question: 'Sanaahene adwuma ne dɛn wɔ ahemfi?',		
  	choice1:'ɔhw3 sikasɛm so',
	choice2:  'ɔboaboa dɔm ano',
	choice3:  'Odi Kyeame',
	choice4:  'ɔhwɛ aduannoa so',
		answer: 1,
  },
  {
  	question: 'Agyarekɔ no, ogyaw me akwakoraa bi; ɔda dan mu a, na ne bogyesɛ gu adiwo. Ɛyɛ dɛn?',
		choice1:'Nhwiren a apow',
	choice2:  'Dɔte a egu borɔde ase',
	choice3:	  'Mframa a ɛhyɛ toa mu',
	choice4:	  'Mukaase Wusiw',
		answer: 1,
  },
  {
  	question: 'Kwasi se, agya ade bi wɔ hɔ, ɛnyɛ dɛ nanso ɛka wo nsa pɛ na woatafere. Ɛyɛ ……',
		choice1:'ɛwo',
	choice2:  'gyasramma',
	choice3:	  'asikiretɛ',
	choice4:	  'adesaa',
		answer: 2,
  },
  {
  	question: 'Akanfo anansesɛm nhyehyɛe no yɛ …….',		
  	choice1:'mfiase, mfinimfini, awiei',
	choice2: 'Awieim, mfinimfini, mfiase',
	choice3: 'mfinimfini ne mfiase nkutoo',
	choice4: 'mfinimfini, awiei, mfiase',
		answer: 1,
  },
  {
  	question: 'Anansesɛm mu nnwom gu ahorow abien, Anansesɛm mu nnwom ne …..',		
  	choice1:'Mmoguo',
	choice2:  'Bɔsrɛmuka',
	choice3:  'Mede soa asiamasi',
	choice4:  'mfeafeaho',
		answer: 1,
  },
  {
  	question: 'Hena na Akanfo bɔ no mmran; Ototurobonsu?',		
  	choice1:'ɔhene a ɔte agua so',
	choice2:  'Onyankopɔn a ɔbɔɔ wiase',
	choice3:  'Kwaku Ananse ne Ntikuma',
	choice4:  'ɔbɔmmɔfo a wakum ɔsono',
		answer: 2,
  },
  {
  	question: 'Akanfo din Antwi mmran ne dɛn?',		
  	choice1:'Apea Kubi',
	choice2:  'Nyasɛmhwɛ',
	choice3:  'Bediako',
	choice4:  'Bosiako',
		answer: 4,
  },
  {
  	question: 'Me papa taa bɔ me nua Kwame mmran se …….',		
  	choice1:'Okyini',
	choice2:  'Atoapoma',
	choice3:  'ɔdaaku',
	choice4:  'okoto',
		answer: 2,
  },
  {
  	question: 'Toa ɛbɛ yi so: Afiri huan a, …….',		
  	choice1:'ɛwɔ wuram',
	choice2:  'ɛkɔ ne nkyi',
	choice3:  'eyi aseredowa',
	choice4:  'ɛba n’anim',
		answer: 2,
  },
  {
  	question: 'Abofra no ka kyerɛɛ n’adamfo no sɛ: “Woankɔ bi a ….”',		
  	choice1:'Wuse yɛankɔ',
	choice2:  'yɛbɛbɔ nkɔmmɔ',
	choice3:  'wobɛtena fie',
	choice4:  'Wo papa de ɔbae',
		answer: 1,
  },
  {
  	question: 'Tete nsaano dwuma mu no, dɛn na ɔtomfo ma ɔmanfo?',		
  	choice1:'ɔsosɔw, asomukaa, nkyene',
	choice2:  'kente, mpɛtea, asaawa',
	choice3:  'Asɔw, nkrante, ɔsosow',
	choice4:  'Borɛɔde,Asɔw, ntɔrewa',
		answer: 3,
  },
  {
  	question: 'Nneɛma kuw yi mu nea ɛwɔ he na yenya fi okuafo hɔ?',		
  	choice1:'Ahwerew, pɛtea, amankani',
	choice2:  'Bayerɛ, kɔnmuade, ntama',
	choice3:  'Bankye, atosode, borɔde',
	choice4:  'Nkontommire, kente, kuku',
		answer: 3,
  },
  {
  	question: 'Agoru yi de mmewa nkutoo na wodi',		
  	choice1:'Mpempenaa',
	choice2:  'Ahintahinta',
	choice3:  'Anansesɛm',
	choice4:  'Asɔba',
		answer: 4,
  },
  {
  	question: 'Nea ɛwɔ he na ɛnka mfaso a mmofra nya wɔ agorudi mu?',		
  	choice1:'Anigye',
	choice2:  'Ahantan',
	choice3:  'Apɔwmuden',
	choice4:  'Ahosɛpaw',
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
