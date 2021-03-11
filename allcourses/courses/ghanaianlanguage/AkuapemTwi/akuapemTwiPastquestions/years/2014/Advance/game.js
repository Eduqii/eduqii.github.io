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
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n\n Sε obi kↄto ne yↄnko na ↄredidi a, okyia no',
  	choice1:'Nya nkwa',
	choice2: 'Ayikoo',
	choice3: 'Adidiabrada',
	choice4: 'Kita mu',
  	answer: 4,
  },
  {	
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n\n Akanfo bu obi a ohu nnipa a onkyia no dεn?',	
  	choice1: 'Atetekwaa',
	choice2:  'Nyansafo',
	choice3:  'Onihafo',
	choice4:  'Nimdefo',
	answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n\n Obi kyia ne yↄnko awia na wↄredi ntetewmu a, nkyia a ne yↄnko no de gyaw no kwan ne',
  	choice1:'“due ne awↄw”',
	choice2: '“da yiye oo”',
	choice3: '“Due ne awia”',
	choice4: '“due ne onwini”',
  	answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n\n Akanfo tete aware ahorow no mu biako ne',  	
  	choice1: 'dↄmfa',
	choice2:  'asiwa',
	choice3:  'ayefare',
	choice4:  'dwetiri',
  	answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n\n Sika bεn na ↄbarima tua ma ne yere nua mmarimanom bere a wↄreware?',  	
  	choice1: 'Ti ade',
	choice2:  'Ti nsa',
	choice3:  'Danta',
	choice4:  'Akontasekan',
  	answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n\n Amanne bεn na Akanfo yε nnawↄtwe da de gye abofra foforo to abusua mu?',
		choice1:'Hyirewgu',
	choice2:  'Awaregu',
	choice3:	  'Abadinto',
	choice4:	  'Abisa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n\n Wↄfrε abofra a odi ntaafo akyi no dεn?',
	 choice1: 'Anane',
	choice2:   'Tawia',
	choice3:	'Nyankomago',
	choice4:	'atuakↄsan',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Nsεmfua a edidi so yi nea εwↄ he na εyε Anom Kasadwini.', 		
  	choice1: 'Anansesεm',
	choice2:   'Buronya',
	choice3:   'nkurobↄ',
	choice4:   'abasεm',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Akanfo kasadwini ahorow ne',		
  	choice1:'akyerεw ne anom kasadwini',
	choice2:  'ayan ne anasesεm',
	choice3:  'akyerεw ne apae',
	choice4:  'abεbu ne akyerεw kasadwini',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Yi akyerεw kasadwini ahorow ho nhwεso wↄ nea edidi so yi mu.',
		choice1:'Abεbu ne abasεm',
	choice2:  'Apae ne ayan',
	choice3:	  'Ahwεgoru ne anwensεm',
	choice4:	  'Abasεm ne amoma',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Nea edidi so yi mu biako yε Akyerεw kasadwini su',		
  	choice1:'Enni ↄkyerεwfo pↄtee',
	choice2:  'Ɛyε ↄmanfo agyapade',
	choice3:  'Enni bere a εbae',
	choice4:  'εwↄ ↄkyerεwfo pↄtee',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Nea edidi so yi mu biako yε Akyerεw Kasadwini su.',		
  	choice1:'εwↄ ↄkyerεfo pↄtee',
	choice2:  'εnni Okyerεwfo pↄtee',
	choice3:  'εyε 0manfo agyapade',
	choice4:  'εnni bere a εbae',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Ↄbarima ne ↄbea a wↄbↄ abusua baako (bogya abusua) no ……',		
  	choice1:'Tumi ware wↄn ho',
	choice2:  'Ntumi nyε ayi mmↄ mu',
	choice3:  'Ntumi nware wↄn ho',
	choice4:  'Tumi tↄn abusua agyapade',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Dεn sunsum na agya de bↄ ne mma ho ban?',	
  	choice1:'Bosom',
	choice2:  'Nyankopasakyi',
	choice3:  'ntↄn',
	choice4:  'bosomakↄmfo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Sε ↄbarima ne ↄbea a wↄbↄ abusua koro ware a, Akanfo bu no sε εyε dεn?',		
  	choice1:'Bragoru',
	choice2:  'Mogyafra',
	choice3:  'yↄnkodↄ',
	choice4:  'kyiribra',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Asona abusuakuw no akraboa yε aboa bεn?',		
  	choice1:'Ampan',
	choice2:  'Kwaakwaadabi',
	choice3:  'Ↄkraman',
	choice4:  'Ɛkoↄ',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n …….yε Aduanafo akraboa.',		
  	choice1:'Ↄkraman',
	choice2:  'Anene',
	choice3:  'Akoo',
	choice4:  'Akoroma',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Abusuakuw bεn na akoroma yε wↄn akraboa?',		
  	choice1:'Ayokofo',
	choice2:  'Asonafo',
	choice3:  'Ɛkoↄnafo',
	choice4:  'Agonafo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.\n\n Abusua biara wↄ ……a emu nnipa no nyinaa hyε n’ase.',		
  	choice1:'Bamkyini',
	choice2:  'Bota',
	choice3:  'Asεsεgua',
	choice4:  'Abusuapanyin',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho. \n\n Mfaso a Ↄkanni nya wↄ n’abusua mu biako ne ….',		
  	choice1:'Nhomanim ne ahoↄfε',
	choice2:  'ahoↄden ne tumidi',
	choice3:  'aniεden ne akokurokosεm',
	choice4:  'sε wↄyε ayi bↄ mu na wↄboa wↄn ho wↄn ho',
		answer: 4,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n\n Adae ahorow ahe na Akanfo wↄ?',		
  	choice1:'Abien',
	choice2:  'Abiesa',
	choice3:  'Anum',
	choice4:  'Ason',
		answer: 1,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n\n Asram kuw yi mu biara kura nnafua aduasa baako.',		
  	choice1:'Ↄbεnem, Ogyefuo, Ɛbↄ',
	choice2:  'Ↄpεpↄn, Ↄbεnem, Kitawonsa',
	choice3:  'Ↄpεnimaa, Kitawonsa, Oforisuo',
	choice4:  'Ↄsanaa, Ahinime, Ayewohomumↄ',
		answer: 2,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n\n Din foforo bεn na Akanfo de frε nnawↄtwe asia?',		
  	choice1:'Adaduasa',
	choice2:  'Adaduosia',
	choice3:  'Adaduanan',
	choice4:  'adaduwↄtwe',
		answer: 3,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n\n Awukudae tↄ mpεn ahe wↄ Akanfo asranna mu?',		
  	choice1:'Awotwe',
	choice2:  'Ason',
	choice3:  'Asia',
	choice4:  'Akron',
		answer: 4,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n\n Afahyε bεn na Akanfo binom di de huro ↄkↄm?',		
  	choice1:'Kundum',
	choice2:  'Adaekεse',
	choice3:  'Ohum',
	choice4:  'Aboakyere',
		answer: 3,
  },
  {
  	question:  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n\n Efutufo kyere aboa na ……….twa Odwira.',		
  	choice1:'Akuapemfo',
	choice2:  'Nzemafo',
	choice3:  'Asantefo',
	choice4:  'Fantefo',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n\n Akanfo akyiwade no mu biako ne sε ….',
		choice1:'yεkↄda a, yεnkra amannifo',
	choice2:  'yehyia obi anↄpa a, yenkyia',
	choice3:	  'yeguare a yεnto dwom',
	choice4:	  'yehyia ↄhↄho a, yemmisa no asεm',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n\n Ɛyε akyiwade sε yedidi a,',		
  	choice1:'Yεwe nam bobↄ dompe mu',
	choice2:  'Yεnom nkwan taforo yεn nsa',
	choice3:  'Yεtena agua tiatia so',
	choice4:  'Yεde yεn nsa benkum si fam',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n\n Akanfo gyidi sε onipa wu a, ….',		
  	choice1:'ↄkↄtena asamando',
	choice2:  'na wawu koraa',
	choice3:  'ↄkↄtena sukwan so',
	choice4:  'ↄnenam mfikyiri',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n\n Owu a obi anto ne kↄn anwu no Akanfo frε ne dεn?',
		choice1:'Owupa',
	choice2: 'atↄfowu',
	choice3:     'ohiawu',
	choice4:	 'nkwaseawu',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n\n Sε obi wu a, hena na ↄhwε ayiyε no ho ntotoe nyinaa so?',
		choice1:'Ahenkwaa',
	choice2:  'Ayipasohene',
	choice3:	  'Okunafo',
	choice4:	  'Nkwaakwaahene',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n\n Yεfrε nneεma a owufo bi gyaw wↄ ne wu akyi no',		
  	choice1:'nsabↄde',
	choice2:  'ayiaseka',
	choice3:  'sora',
	choice4:  'awunyade',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n\n Na minim sε abofra yi ano awo saa da.',
		choice1:'Nim serew',
	choice2:  'Nim kasa',
	choice3:	  'Nim su',
	choice4:	  'Nim adidi',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n\n Nnε nnansa na metee sε ↄhↄho no abu ne kεtε mu. Eyi kyerε sε',
		choice1:'Aguan',
	choice2:  'Ada',
	choice3:	  'Akↄ nsan aba',
	choice4:	  'Awu',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n\n Memeneda nkwan no de, na εnka se.',		
  	choice1:'Ɛnam pii wↄ mu',
	choice2:  'Ani wↄ srade',
	choice3:  'Ɛyε dε papa',
	choice4:  'Ɛnyε dε koraa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n\n Toa bε yi so: “Gua bεba a, efi …”',		
  	choice1:'Awiei',
	choice2:  'aguatↄnde',
	choice3:  'anↄpa',
	choice4:  'nnipa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n\n Woankↄ bi a wose yεankↄ kyerε sε ……..',		
  	choice1:'woamma ntεm',
	choice2:  'obiara ammεfrε wo se kↄko',
	choice3:  'wunnim ↄhaw a yεfaa mu',
	choice4:  'na wonenam hↄ kwa',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ mmofra agorunnwom ne nnwuma ho.\n\n Agoru bεn na mmofra de dwom “sii-sii , sii-dadakoo” di?',
  	choice1:'Sansankoroma',
	choice2:  'Amuamuani',
	choice3:  'Abosi',
	choice4:  'Mpempenaa',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ mmofra agorunnwom ne nnwuma ho.\n\n Agoru antoakyire mu no, mmofra to dwom:',		
  	choice1:'“obi ba o, yee yei! Obewu o, yee yei!”',
	choice2:  '“adonko fa me kↄ, faa dee”',
	choice3:  '“sansan koroma won i awu o”',
	choice4:  '“sansan dↄboro, dↄboro dↄ sansan”',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ mmofra agorunnwom ne nnwuma ho.\n\n Wokↄ sikadwumfo adwuma mu a, dεn na wubenya atↄ?',		
  	choice1:'Ↄsosow ne dadefiri',
	choice2:  'Mpεtea ne asomuade',
	choice3:  'Asεsεgua ne nhene',
	choice4:  'Adaka ne ↄpon',
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
