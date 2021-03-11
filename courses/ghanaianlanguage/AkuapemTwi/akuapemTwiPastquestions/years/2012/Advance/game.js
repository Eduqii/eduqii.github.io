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
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Sɛ wo dɔfo bi bɛsra wo awia na ɔrekɔ a, woma no',  	
  	choice1:'due ne awɔw',
	choice2: 'due ne wia',
	choice3: 'due ne brɛ',
	choice4: 'due ne nwunu',
  	answer: 2,
  },
  {	
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Sɛ wo ne obi rekɔ baabi na ɔdi kan na wokɔto no a, wokyia no sɛ…',
	choice1: 'mema wo ahyia',
	choice2:  'mema wo ɔduru',
	choice3:  'nkyɛre ba',
	choice4:  'mema wo akwaaba',
	answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Wɔwo abɔfra na ɔdi …….a, wɔto ne din',
  	choice1:'adaduanan',
	choice2: 'afe',
	choice3: 'nnawɔtwe',
	choice4: 'bosome',
  	answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Akanfo de wɔn babarima panin to…..',  	
  	choice1: 'abusuapanin',
	choice2:  'agya nua panyin',
	choice3:  'agya kumaa',
	choice4:  'agya papa',
  	answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Sɛ ɔbarima ware a, ne yere maame nuanom yɛ ne',  	
  	choice1: 'nsenom',
	choice2:  'koranom',
	choice3:  'nkumaafo',
	choice4:  'nsenkumaa',
  	answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Sɛ ɔbea ware a, ne kunu nuammarima yɛ ne ……',		
  	choice1:'koranom',
	choice2:  'nkontanom',
	choice3:  'nsenom',
	choice4:  'kununom',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Ɔbea ware a, ne kunu nuammarima mma yɛ ne….',	 
  	choice1: 'koramma',
	choice2:   'nananom',
	choice3:   'mmannoma',
	choice4:   'mma',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.\n\n Nsu ne nsa a wɔde sɔ abofra anom berɛ a wɔreto ne din no kyerɛ ……',
		choice1: 'ahoɔden',
	choice2:   'anotew',
	choice3:	   'nokwaredi',
	choice4:	   'papa ne bɔne',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.\n\n  Abamo akyiwade ne…..',		
  	choice1:'akokɔ',
	choice2:  'okisi',
	choice3:  'ɔtwe',
	choice4:  'wansane',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.\n\n Akanman mu sɛ obi rewu a,……',		
  	choice1:' wɔgu n’anom nsu',
	choice2:  'wɔde no to ne benkum so',
	choice3:  'wɔnsɔ ne mu',
	choice4:  'wɔ teatea no',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.\n\n Nneεma a Akanfo de gya owufo kwan no wɔfrɛ no dɛn?',
		choice1:'akatasode',
	choice2:  'akyɛde',
	choice3:	  'asiede',
	choice4:	  'nkradi',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.\n\n Sɛ obi de ka na owu a, hena na otua ka no?',
		choice1:'abusuapanyin',
	choice2:  'anuanom',
	choice3:	  'obiara ntua',
	choice4:	  'odiadefo',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.\n\n Kuku a okunafo kɔbɔ no kurotia no kyerɛ sɛ…..',		
  	choice1:'ɔne ne kunu adi ntetewmu',
	choice2:  'ɔmpɛ kuku no',
	choice3:  'ne bo afu',
	choice4:  'ɔnnidi bio',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.\n\n Ansa na wɔbɛgoru abeawa bi bra no, wɔkɔbɔ hena amanneɛ?',		
  	choice1:'abusuapanin',
	choice2:  'ɔhemmea',
	choice3:  'ɔhene',
	choice4:  'nananom',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.\n\n Sɛ wɔgoro abeawa bi kyiribra a, ……..',		
  	choice1:'ɛhyɛ abusua no animuonyam',
	choice2:  'ɛma ɔbaa no nya dwetiri',
	choice3:  'ɛgu awofo no anim ase',
	choice4:  'ɛma ɔbea no nya kunu pa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.\n\n Eyinom biako nka ɔhemaa adwuma hoo',		
  	choice1:'ɔsiesie nsɛm',
	choice2:  'ɔtu ɔhene fo',
	choice3:  'ɔtumi pa ɔhene',
	choice4:  'ɔnoa ɔhene aduan',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.\n\n Nnipakuw yi mu biako nni dwuma wɔ Akanfo asɛnni mu.',		
  	choice1:'adansefo',
	choice2:  'lɔyafo',
	choice3:  'agyinatufo',
	choice4:  'badwafo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.\n\n Sɛ Akanfo retu agyina wɔ asɛnni mu a, na ɛkyerɛ dɛn?',		
  	choice1:'wɔrekɔbisa aberewa',
	choice2:  'wɔrekɔdidi aba',
	choice3:  'wɔatu asɛm no ahyɛ da',
	choice4:  'wɔregye wɔn ahome',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.\n\n Hena na ɔhwɛ ɔhene foto so?',		
  	choice1:'Ankɔbeahene',
	choice2:  'Gyaasehene',
	choice3:  'Sanahene',
	choice4:  'Kurontihene',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.\n\n Hena na ɔyan ɔhene atumpan?',		
  	choice1:'ɛsɛn',
	choice2:  'ɔkyerɛma',
	choice3:  'abrafo',
	choice4:  'mmɛnsonfo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.\n\n Aboa bɛn na Kumawufo de di Papa afahyɛ?',		
  	choice1:'ɔsono',
	choice2:  'ɔtwe',
	choice3:  'nantwie',
	choice4:  'wansane',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.\n\n Sɛ ɔhene reba aguabɔ ase afahyɛ bere a, …….',		
  	choice1:'ɔnante bɔkɔɔ',
	choice2:  'ɔkasakasa',
	choice3:  'ɔhurihuri',
	choice4:  'ɔtu mmirika',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.\n\n Wɔfrɛ wɔn a wɔdi ɔbɔfo akyi kɔ ahayɔ sɛ………',
		choice1:'aboafo',
	choice2:  'ayawfo',
	choice3:	  'akyidifo',
	choice4:	  'asomafo',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.\n\n Akanfoɔ tumi frɛ Akwasidae sɛ…….',		
  	choice1:'Fɔkwasi',
	choice2:  'Monokwasi',
	choice3:  'Nkyikwasi',
	choice4:  'Kurukwasi',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.\n\n Benada Dapaa adekyeeɛ yɛ…..',		
  	choice1:'Kwawuku',
	choice2:  'Kurudapaaku',
	choice3:  'Monowuku',
	choice4:  'Ngonawuku',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.\n\n Akwasidɛɛ biara Akanfo……..',		
  	choice1:'gu nsa',
	choice2:  'bɔ tikwa',
	choice3:  'hyɛ fa',
	choice4:  'nnidi',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.\n\n Sɛ wɔregye aware a, ɔbea no abusuafo taa de ti-ade no ……..',		
  	choice1:'kɔma abusuapanin',
	choice2:  'kɔgye wɔn ani',
	choice3:  'kɔtua abusua ka bi',
	choice4:  'kɔma ɔhemaa',
		answer: 3,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.\n\n Agyapade titiriw a efi aware mu ba ne……..',		
  	choice1:'Ayɔnkofa',
	choice2:  'Anigye',
	choice3:  'Sika',
	choice4:  'Mma',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.\n\n Hena na ɔgu ɔbea no hyirew wɔ awaregyaeɛ mu?',		
  	choice1:'Nkontanom',
	choice2:  'Nana',
	choice3:  'Nsenom',
	choice4:  'Nkumaafo',
		answer: 4,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.\n\n Ab)fra nnim adware3 a 3ny3…..',		
  	choice1:'n’anim',
	choice2: 'n’afuru so',
	choice3: 'ne kɔn ho',
	choice4: 'ne nsa ho',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.\n\n Aberewa bɛdi twɛre a, na efi ……..',
		choice1:'n’ano',
	choice2:  'ne nsa',
	choice3:	  'ne nananom',
	choice4:	  'ne poma',
		answer: 1,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.\n\n Wopam ohufo a, …..',		
  	choice1:'ne koma te',
	choice2:  'woto ne barima',
	choice3:  'ɔtwe sekan',
	choice4:  'wonya asɛm',
		answer: 2,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.\n\n Sɛ woyɛ bi na anyɛ yiye a, wɔfrɛ wo……',		
  	choice1:'ayɛbiagya',
	choice2:  'ayɛbiagu',
	choice3:  'ayɛboafo',
	choice4:  'ayɛbiakyerɛ',
		answer: 2,
  },
  {
  	question:'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.\n\n Agya adeɛ bi wɔ hɔ, sɛ wotia n’ayaase a, na ɔresere. Ɛyɛ……',		
  	choice1:'apasoɔ',
	choice2:  'kaa',
	choice3:  'mpaboa',
	choice4:  'dadefiri',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.\n\n Agya nipa bi wɔ hɔ, ɔte fie a na n’abɔdwesɛ gu abɔnten. Ɛyɛ…..',		
  	choice1:'abɛ',
	choice2:  'mframa',
	choice3:  'wisiw',
	choice4:  'nsu',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.\n\n Kane no na wɔfrɛ anansesɛm sɛn?',
	choice1:'Nyankonsɛm',
	choice2:  'Abasɛm',
	choice3:  'Bɔsrɛmka',
	choice4:  'Adomankomasɛm',
		answer: 1,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.\n\n Sɛnti a tete no na wɔnto anansesɛm awia ne sɛ…….',		
  	choice1:'ahuhuro bɛde wo',
	choice2:  'ɛnyɛ anigye',
	choice3:  'yɛmmɔ mmoa din awia',
	choice4:  'ɛsɛe adwumayɛ',
		answer: 4,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.\n\n Asantefo atetesɛm kyerɛ sɛ…….na wɔde egya baeɛ.',		
  	choice1:'Asonafo',
	choice2:  'Biretufo',
	choice3:  'Aduanafo',
	choice4:  'Ɔyokofo',
		answer: 3,
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.\n\n Wɔnyɛ eyinom biako wɔ nsagu mu.',		
  	choice1:'wɔkata wɔn ani',
	choice2:  'wɔbɔ abosom ne nsamanfo din',
	choice3:  'wɔpia wɔn ntama gu wɔn mmatiri',
	choice4:  'wɔyi wɔn nan mu mpaboa',
		answer: 1,
  }, 
 {
  	question: 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.\n\n Akanman mu sɛ obi resaw na ɔfoforo pagya ne nsa kyerɛ no a, ɛkyerɛ sɛn?',		
  	choice1:'ɔnnyae asa',
	choice2:  'ɔma no mo',
	choice3:  'dwom no yɛ dɛ',
	choice4:  'ɔnnyina hɔ',
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

	    }, 3000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()
