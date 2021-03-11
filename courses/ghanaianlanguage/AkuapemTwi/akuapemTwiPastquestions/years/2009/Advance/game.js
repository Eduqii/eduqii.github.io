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
  	question:'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.\n\n Akanfo gye di sɛ ɛna ma ne ba mogya na agya ma no……..',
    choice1:'Sika',
	choice2: 'Abusua',
	choice3: 'Aduan',
	choice4: 'ɔkra',
  	answer: 4,
  },
  {	
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.\n\n Edin a wɔfrɛ Ɛna mogya a ɔde ma ne ba ne…….',
	choice1: 'Ahoɔfɛ',
	choice2:  'ntoↄ (Ntɔn)',
	choice3:  'Saman',
	choice4:  'Abusua',
	answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.\n\n Sɛ woyɛ ɔbarima a, wo nuabea ba yɛ wo………',
  	choice1:'Ba',
	choice2: 'Wɔfaase',
	choice3: 'Nana',
	choice4: 'Nanakansowa',
  	answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.\n\n Abusua ne ntorↄ (ntɔn) fi nnipa kuw bɛn hɔ?',  	
  	choice1: 'Maame ne nena',
	choice2:  'Papa ne nena',
	choice3:  'Maame ne papa',
	choice4:  'Maame ne abusuapanin',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.\n\n Kyerɛ nea enti a ɛna ne mma da nso firi agya ho.',  	
  	choice1: 'Wɔn na wɔfiri kurow no mu',
	choice2:  'Wɔn na daa wɔte fie',
	choice3:  'Wɔn na wɔbɔ abusua biako',
	choice4:  'Wɔn na wɔdi nkɔmmɔ',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.\n\n Suban a ɔbea a ɔwɔ abadae da no adi no wɔfrɛ no',		
  	choice1:'ahantan',
	choice2:  'anitew',
	choice3:  'tema',
	choice4:  'obu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.\n\n Agya, Ɛna ne mma, hena ne ofi no ti?',	 
  	choice1: 'Agya',
	choice2:   'Mma',
	choice3:   'Ɛna',
	choice4:   'mmofra',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.\n\n Wɔfrɛ Akanfo adedi sɛ…..',		
  	choice1: 'Papa adedi',
	choice2:   'Nana adedi',
	choice3:   'Sewaa adedi',
	choice4:   'Wɔfa adedi',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.\n\n Saa nnipa yi ase nsae a wɔfaaseɛ nni ade',		
  	choice1:'nniwaa mma',
	choice2:  'papa mma',
	choice3:  'nena mma',
	choice4:  'wɔfa mma',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.\n\n “Agya bi wu a, agya bi te ase” yɛ kasa a wɔka kyerɛ……',		
  	choice1:'Akunafo',
	choice2:  'Nyisiaa',
	choice3:  'Odiadefo',
	choice4:  'Abusuapanyin',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.\n\n Kasa a ɛdi akyiri a obi ka ansa na wawu na Akanfoɔ frɛ no……',		
  	choice1:'Nsamansew',
	choice2:  'Awugyamma',
	choice3:  'Kasaprɛko',
	choice4:  'Nkwa nsɛm',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.\n\n Berɛ bɛn na abusuafo hyia bue owufo adaka so?',
	choice1:'Afe',
	choice2:  	  'ↄsram',
	choice3:	  'Adaduanan',
	choice4:	  'Nnawɔtwe',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.\n\n Duaba bɛn na Akanfo de gyina hɔ ma onipahunu bi a wadi ade?',		
  	choice1:'Kwadu',
	choice2:  'Amango',
	choice3:  'Paya',
	choice4:  'Borɔferɛ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.\n\n Sɛ okunafo bi mpɛ sɛ ɔware odiadefo a, kasakoa a ɔka ne sɛ ɔbɛware…..',		
  	choice1:'Mmoatia',
	choice2:  'Nkɔtɔ ne mmɛbɛ',
	choice3:  'Ne kunu saman',
	choice4:  'Nsamanpɔw mu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho\n\n Afahyɛ yi mu nea ɛwɔ he na wɔde hurow kɔm',		
  	choice1:'Akwambɔ',
	choice2:  'Aboakyere',
	choice3:  'Ohum',
	choice4:  'Kundum',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho\n\n Bakatue yɛ nnipa bɛn afahyɛ?',		
  	choice1:'Adaafo',
	choice2:  'Ɛdenafo',
	choice3:  'Akyemfo',
	choice4:  'Simpafo',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho\n\n Kyerɛ kurow a edidi so yi mu biako a wɔdi “Adae-kɛse” afahyɛ.',		
  	choice1:'Adaa',
	choice2:  'Kumase',
	choice3:  'Kyebi',
	choice4:  'Simpa',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho\n\n Afahyɛ ho mfaso titiriw biako ne sɛ……..',		
  	choice1:'ɛde akobɔfoɔ ba fie',
	choice2:  'yɛkye akorɔmfoɔ',
	choice3:  'yetu ahemfo adeɛ so',
	choice4:  'ede ntↄkwaw ba',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho\n\n Kyerɛ nea ɛyɛ nokware wɔ afahyɛ ne nkurow a edidi so yi mu.',		
  	choice1:'Keta-Aboakyere',
	choice2:  'Kumasi –Fetu',
	choice3:  'Somanya –Odwira',
	choice4:  'Axim- Kundum',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho\n\n Aboa bɛn na Efutufo kyere no wɔ afahyɛ berɛ?',		
  	choice1:'Ɔtwe',
	choice2:  'Ɔnwansan',
	choice3:  'Ɔtorɔm',
	choice4:  'Nantwi',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho\n\n Nsɛm a edidi so yi mu nea ɛwɔ he na ɛnyɛ nokware wɔ afahyɛ ho?',		
  	choice1:'Afahyɛ de anigye ba',
	choice2:  'Afahyɛ sɛe mmere',
	choice3:  'Akobɔfo ba fie',
	choice4:  'Nkyirimma sua amammerɛ',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.\n\n  Asram dodow ahe na yɛnya wɔ afirihyia biako mu?',
	choice1:'Dummien',
	choice2:	  'Dubiako',
	choice3:	  'Dunkron',
	choice4:	  'Dummiɛnsa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.\n\n Bosome a ɛtɔ so dumienu no din de…..',		
  	choice1:'Ogyefuo',
	choice2:  'Ɔbɛnem',
	choice3:  'Ɔpɛpɔn',
	choice4:  'Ɔpɛnimaa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.\n\n Ↄsram bɛn mu na Simpafo kyere aboa?',
	choice1:'Kɔtɔnimma',
	choice2:	  'Ayɛwohomumɔ',
	choice3:   	  'Ɔsanaa',
	choice4: 	  'Obubuo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.\n\n Ↄsram yi kura nnafua aduasa.',		
  	choice1:'Ɛbɔ',
	choice2:  'Kitawonsa',
	choice3:  'Ogyefuo',
	choice4:  'Ahinime',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.\n\n Ↄsram bɛn na Akristofo di Yesu awoda?',
	choice1:'Ogyefuo',
	choice2:	  'Ɔpɛpɔn',
	choice3:	  'Ɔpɛnimaa',
	choice4:	  'Ɔsannaa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.\n\n Kyerɛ amanne titiriw a Akanfoɔ di no dabɔne biara.',		
  	choice1:'wogu nsa',
	choice2:  'wɔyɛ ayi',
	choice3:  'wɔyɛ asiei',
	choice4:  'wobu sika ho nkonta',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.\n\n Hyehyɛ asram a edidi so yi nnidiso-nnidiso',		
  	choice1:'Ɔpɛpɔn, Ɔpɛnimaa, Ogyefuo',
	choice2:  'Ɔpɛnimaa, Ɔpɛpɔn, Ogyefuo',
	choice3:  'Ogyefuo, Ɔpɛnimaa, Ɔpɛpɔn',
	choice4:  'Ɔpɛpɔn, Ɔgyefuo, Ɔbɛnem',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Toa bɛ yi so “Ɛkaa nwa ne akyekyere nko ara a anka….”',		
  	choice1:'otuo rento wɔ kwae mu',
	choice2:  'aboa biara nkye ne yɔnko',
	choice3:  'abɔfo biara renkɔ wura mu',
	choice4:  'nnipa nnya nam nwe',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Mpaninfo bu bɛ sɛ, “Borɔfere a ɛyɛ dɛ na……”',
	choice1:'mmɔfra di',
	choice2:	 'yɛtɔn wɔ gua so',
	choice3:	 'nnomaa di',
	choice4:	 'abaa da ase',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n “Sɛ atuduro asa a, na ɛnyɛ…..”',
	choice1:'ahemfi',
	choice2:	  'Akowua ntoa mu',
	choice3:	  'Ɔbɔmmɔfo kotoku mu',
	choice4:	  'Asafo mma kotoku mu',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n “Anomaa nua ne nea ɔne no da dua koro” kyerɛ Akanfo……',		
  	choice1:'ayɔnkofa',
	choice2:  'ofi tena',
	choice3:  'abusuabɔ',
	choice4:  'ntɔn bɔ',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Ɛbɛ, “baanu so a emmia” kyerɛ',		
  	choice1:'pεsεmenkomenya',
	choice2:  'Nkabom',
	choice3:  'Asisi',
	choice4:  'asondwoe',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Ɔkɔtɔ nwo anomaa kyerɛ sɛ obi suban sɛ…….',		
  	choice1:'N’awofo',
	choice2:  'N’adamfo',
	choice3:  'Ne nua',
	choice4:  'Ne sewaa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ na ɛfa Akanfo atetesɛm ne anansesɛm ho.\n\n Eyi yɛ anwonwade ahorow no mu biako a Ɔkɔmfo Anɔkye yɛe?',		
  	choice1:'Ɔde afena wɔɔ fam ma ɛkaa hɔ',
	choice2:  'Ɔpaee asubɔnten mu abien',
	choice3:  'Oduaa bebe wɔ wim',
	choice4:  'Ɔnyanee owufo',
		answer: 1,
  },
  {
  	question: 'Kyerɛ ade biako bi a Asebu Amanfi yɛ de gyee din',		
  	choice1:'Ɔtɔnn nnipa maa Aborɔfo',
	choice2:  'Ɔwee nnipa nam',
	choice3:  'Ɔnante firii mpoano kɔɔ serɛm',
	choice4:  'Ɔwee aburo pata',
		answer: 4,
  },
  {
  	question: 'Sɛ yɛbɔ Sikadwa Kofi din a, onipa bɛn na yɛkae no?',		
  	choice1:'Asebu Amanfi',
	choice2:  'Ansa Sasraku',
	choice3:  'Ɔkɔmfo Ntiamoa',
	choice4:  'Ɔkɔmfo Anɔkye',
		answer: 4,
  },
  {
  	question: ' Kyerɛ baabi a ahemfo baasa a edidi so yi ase firi ; Obunumankoma, Ɔdapagyan ne Ɔson.',
	choice1:' Okuapemman',
	choice2:	  'Fanteman',
	choice3:	  'Asanteman',
	choice4:	  'Firaw agya',
		answer: 2,
  },
  {
  	question: 'Kwaku Ananse ba panin din de….',		
  	choice1:'Afurudohwedohwee',
	choice2:  'Nnakorɔnhwea',
	choice3:  'Ntikuma',
	choice4:  'Tikenenkene',
		answer: 3,
  },
  {
  	question: 'Suban bɛn na ɔsebɔ da no adi wɔ anansesɛm mu?',		
  	choice1:'Ɔboafo',
	choice2:  'Ahobrɛase',
	choice3:  'Asisie',
	choice4:  'Awiɛmfo',
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
