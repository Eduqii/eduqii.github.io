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
  	question:'Nkyia Adwuma, adwuma o, nnyeso ne?',
  	choice1:'Adwuma asa',
	choice2: 'Adwuma da ase',
	choice3: 'Adwuma ye',
	choice4: 'Adwuma yε den',
  	answer: 3,
  },
  {	
  	question: 'Wote nkyia hyε den a na woadu hefa?',
	choice1: 'Ayiase',
	choice2:  'Awaregye ase',
	choice3:  'Nnyedua ase',
	choice4:  'Nsↄree so',
	answer: 1,
  },
  {
  	question:'Sε obi ma wo aduan na wudidi wie a woma no…..',
  	choice1:'Nkwan pa yε dε',
	choice2: 'Tirinkwa',
	choice3: 'Aguare',
	choice4: 'Amo',
  	answer: 4,
  },
  {
  	question:'Akanman mu, hena na ↄde ↄbea ma aware?',  	
  	choice1: 'Ne wↄfa',
	choice2:  'N’asew',
	choice3:  'N’akumaa',
	choice4:  'N’agya',
  	answer: 4,
  },
  {
  	question:'Mpanyin se, wokↄ aware a, …..',  	
  	choice1: 'Nantew yiye',
	choice2:  'Bisa',
	choice3:  'Nkyerεkyerε wo ho',
	choice4:  'Nkra w’atamfo',
  	answer: 2,
  },
  {
  	question: 'Ansa na aware begu no, baguafo no ma awarefo no mu biara …….',		
  	choice1:'Di adanse',
	choice2:  'Bↄ ne nkuro',
	choice3:  'bↄ ne ho aguaa',
	choice4:  'bↄ n’awofonom kↄkↄ',
		answer: 2,
  },
  {
  	question: 'Tete hↄ, amanne kwan so no, abofra di nna ahe a, na wↄto no din?',	 
  	choice1: 'nnawↄtwe',
	choice2:   'asram nsia',
	choice3:   'adaduanan',
	choice4:   'nnanson',
		answer: 1,
  },
  {
  	question: 'Nsu ne nsa a wↄde ka akokoaa ano no kyerε dεn?',		
  	choice1: 'Ahomaso',
	choice2:   'Ayamye',
	choice3:   'Ahosεpεw',
	choice4:   'Nokwaredi',
		answer: 4,
  },
  {
  	question: 'Meka kyerεε m’adamfo no se, me papa nuabea pinyin no yε …. wↄ Akanfo abusuabↄ mu.',
		choice1:'M’akonta',
	choice2:  'Me nanabea',
	choice3:	  'Me sewaa',
	choice4:	  'M’agya kumaa',
		answer: 3,
  },
  {
  	question: 'Akanman mu, hefo na εwↄ abusua kumaa no mu?',		
  	choice1:'Agya, εna ne mma',
	choice2:  'Agya, wↄfa ne sewaa',
	choice3:  'wↄfa, nanabarima',
	choice4:  'akonta, sewaa ne mma',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Paw nea εyε din nnidiso pa wↄ kuw yi mu.',		
  	choice1:'Piesie, Adusa, Manu',
	choice2:  'Manu, Mεnsa, Botwe',
	choice3:  'Nkoroma, Badu, Duku',
	choice4:  'Anane, Ason, Nsia',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Adεn na wↄfrε no Tawia? Efisε odi ………akyi.',
		choice1:'Nyankomago',
	choice2:  'atuakↄasan',
	choice3:	  'ntaafo',
	choice4:	  'brenyaↃ',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+'Adεn nti na εyε akyiwade sε obi didi a, ↄbεto dwom?',		
  	choice1:'Nkwan bεsↄ n’ataade mu',
	choice2:  'ↄremmee ntεm',
	choice3:  'obedi aduan no nyinaa',
	choice4:  'aduan no bεtram no',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akanfo akyiwade biako nso ne sε',		
  	choice1:'anadwo wↄmpra dan mu',
	choice2:  'wudidi a, mma wo nu abo',
	choice3:  'anↄpa wonkyia nnanfo',
	choice4:  'wokↄda a, nkra obiara',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akan mmusuakuw no mu nea n’akraboa yε Akoo ne ……',		
  	choice1:'Ɛkoↄna',
	choice2:  'Agona',
	choice3:  'Asakyiri',
	choice4:  'Asona',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Abusuakuw bεn na wↄne akraboa din yε pε?',		
  	choice1:'Ↄyokoↄ',
	choice2:  'Aseneε',
	choice3:  'Aduana',
	choice4:  'Ɛkoↄna',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Abusuakuw bεn na wↄwↄ akraboa ahorow abien?',		
  	choice1:'Aduana',
	choice2:  'Asakyiri',
	choice3:  'Agona',
	choice4:  'Asona',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Biretufo akraboa ne……..',		
  	choice1:'Ↄsebↄ',
	choice2:  'Agyinamoa',
	choice3:  'akorↄma',
	choice4:  'kↄkↄsakyi',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n' + 'Toa εbε yi so: gua bεba a, ….',
		choice1:'Ɛbεba ↄkyena',
	choice2:  'Na εwↄ awiei',
	choice3:	  'Efi anↄpa',
	choice4:	  'Εyε aguatↄnda',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+'Ayↄnkoyↄnko nti na ↄkↄtↄ annya ti kyerε dεn?',		
  	choice1:'Ayamye ntraso a εho amma mfaso',
	choice2:  'atirimↄden a εma tipae',
	choice3:  'patapaasεm a yεde pam atamfo',
	choice4:  'ahosεpεw a εma nkuranhyε',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n' + 'Ti koro nkↄ agyina kyerε sε ……',		
  	choice1:'asεm ba a, ↄbaakofo na ↄka ne nyinaa',
	choice2:  'asεm ba a, nnipa bebree na wↄdwene ho na εnyε ↄbaakofo',
	choice3:  'εyε ne nkutoo asεm enti obiara nka bi',
	choice4:  'asεm no mfa me ho koraa',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+ 'Agya rekↄ, ogyaw me akoa bi. Ↄba wo fie a woma no agua tena so a, ↄrekↄ a, na wafa agua no atare ne ho. Ɛyε dεn?',
		choice1:'ↄhↄho',
	choice2:  'nkrante',
	choice3:	  'abε bemu',
	choice4:	  'aburow bεtεm',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+ 'Agya ade bi wↄ hↄ: da biara ↄte hↄ a, wasi ne ti ase ma ne ti kyerε fam nso εnhaw no koraa. Ɛyε dεn?',
		choice1:'Okisi',
	choice2:  'Akoo',
	choice3:	  'akↄkono',
	choice4:	  'ampan',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n' + 'Akanfo frε ↄsram a εtↄ so ason no dεn?',		
  	choice1:'Ↄpεpↄn',
	choice2:  'Ↄsanaa',
	choice3:  'Ɛbↄ',
	choice4:  'Kitawonsa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+ 'Asram kuw yi mu biara kura nnafua aduasa pεpεεpε',		
  	choice1:'Ɛbↄ, Ↄsanaa, Ogyefuo',
	choice2:  'Ahinime, Ɛbↄ, Kitawonsa',
	choice3:  'Oforisuo, Ayεwohomumↄ, Ɛbↄ',
	choice4:  'Ↄpεnimaa, Ↄpεpↄn, Ↄbεnem',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n' + 'Da a edi Awukudae anim no, Akanfo frε no dεn?',		
  	choice1:'Akwasidae',
	choice2:  'Benada Dapaa',
	choice3:  'Memeneda Dapaa',
	choice4:  'Fida Fofie',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Nnawↄtwe ahe na εwↄ Akanfo adaduanan mu?',		
  	choice1:'Asia',
	choice2:  'Ason',
	choice3:  'Awotwe',
	choice4:  'Akron',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Afahyε bere mu dεn na mpanyimfo yε ma nsamanfo?',		
  	choice1:'wↄkↄkyε wↄn nsa',
	choice2:  'wogu wↄn nsa',
	choice3:  'wↄkↄda wↄn ase',
	choice4:  'wↄkↄse wↄn ayi',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Akanfo bεn na wodi Ohum afahyε no?',		
  	choice1:'mfantefo',
	choice2:  'asantefo',
	choice3:  'akyemfo',
	choice4:  'efutufo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Bakatue yε hefo afahyε wↄ ↄman yi mu?',		
  	choice1:'Oguaafo',
	choice2: 'Anomabofo',
	choice3: 'Ɛdenafo',
	choice4: 'Adwumakofo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Tete hↄ no, sε ↄman bi rekↄ ↄko a, ↄhene bεn na odi dↄm no nyinaa anim?',		
  	choice1:'kyidↄmhene',
	choice2:  'sanaahene',
	choice3:  'nifahene',
	choice4:  'adↄntehene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Sε wↄrepaw obi adi hene a, hena na odi akoten wↄ osiahenefo no mu?',		
  	choice1:'Kurontihene',
	choice2:  'Ↄhemmea',
	choice3:  'nkↄsohene',
	choice4:  'ntakrahene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Ↄhene bεkↄ aguabↄ ase a, hena na osiesie ne ho?',		
  	choice1:'Sanaahene',
	choice2:  'Sodoofo',
	choice3:  'Dabehene',
	choice4:  'Ntakrahene',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Akanman mu sε wↄredi nnipa baanu asεm a, obiara fa ….',		
  	choice1:'Nnamfo',
	choice2:  'Nsewnom',
	choice3:  'Atemmufo',
	choice4:  'Adansefo',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n' + 'Hena na ↄpata nea wadi bem wↄ asεnni awiei?',		
  	choice1:'Nea wadi fↄ no',
	choice2:  'Nea n’asεm yε dε no',
	choice3:  'Baguafo no kyeame',
	choice4:  'Adansefo no mu biako',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Nnwuma a edidi so yi mu nea εwↄ he na wↄnto dwom wmu koraa?',
		choice1:'Atono',
	choice2:  'Kentenwene',
	choice3: 	  'Nkukunwene',
	choice4:      'Ahayε',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Okuafo ma yεn borↄde a, dεn na yenya fo ↄbↄmmↄfo hↄ?',		
  	choice1:'Atosode',
	choice2:  'Hanam',
	choice3:  'ↄsosↄw',
	choice4:  'ntampehama',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Agoru yi de, mmarimaa nkutoo na wodi Akanman mu',		
  	choice1:'ampe',
	choice2:  'ntεwsi',
	choice3:  'abosi',
	choice4:  'antoakyire',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Mmofra agoru bεn mu na wↄto dwom “sansan korↄma, wo ni awu o?',		
  	choice1:'abosi',
	choice2:  'mpepenaa',
	choice3:  'asↄba',
	choice4:  'tomato',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Akanfo din Antwi mmran ne',		
  	choice1:'Ampem',
	choice2:  'Boasiako',
	choice3:  'Agyeman',
	choice4:  'Guakoro',
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
