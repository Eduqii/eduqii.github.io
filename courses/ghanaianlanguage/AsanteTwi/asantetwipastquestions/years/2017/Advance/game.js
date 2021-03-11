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
question: 'Akanfoɔ ammammerɛ mu no wɔkyea firi',

choice1: 'Benkum so',
choice2: 'Mfimfini',
choice3: 'Nifa so',
choice4: 'Mpanin so',
answer: 3,
},
{ 


question: 'Wɔdidi wieeɛ no, ɔbaako kaa sɛ; “Yɛma wo adware” na ɛkyerɛ sɛn?',

choice1: 'Wɔreda no ase',
choice2: 'Wɔresrɛ kwan',
choice3: 'Wɔbedi bio',
choice4: 'Wɔrekɔdware',
answer: 1,
},
{ 


question: 'Edin a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛyɛ abusuadin?',

choice1: 'Adusa',
choice2: 'Anto',
choice3: 'Opoku',
choice4: 'Bediako',
answer: 3,
},
{ 


question: 'Sɛ wɔwo obi Memeneda na ɛyɛ dabɔne a, wɔfrɛ no',

choice1: 'Amma Bagyina',
choice2: 'Kwame Duku',
choice3: 'Kwame Tutu',
choice4: 'Amma Dapaa',
answer: 4,
},
{ 


question: 'Abɔfra bi de Nyankomago a, na ɛkyerɛ sɛ ɔdi ……akyi.',

choice1: 'Mansa',
choice2: 'Tawia',
choice3: 'Anane',
choice4: 'Ataa',
answer: 2,
},
{ 


question: 'Wo maame wɔfa yɛ wo deɛn? Ɔyɛ wo ….',

choice1: 'Wɔfa',
choice2: 'Nana',
choice3: 'Papa pinyin',
choice4: 'Nana nkansewa',
answer: 2,
},
{ 


question: 'Sɛ Ɔkanni bi ka sɛ ɔne obi yɛ mogya baako a, na ɔrepɛ akyerɛ sɛ ……',

choice1: 'Wɔbɔ abusua baako',
choice2: 'Wɔbɔ ntɔn baako',
choice3: 'Wɔsom bosom baako',
choice4: 'Wɔware efie baako mu',
answer: 1,
},
{ 


question: 'Akanman mu no, sɛ ɔbaa nyem a, …….',

choice1: 'Wɔnyɛ no aduro',
choice2: 'Ɔnnoa aduane',
choice3: 'Ɔnnidi awia',
choice4: 'Wɔnnyɛ ne ho adeɛ',
answer: 4,
},
{ 


question: 'Din bɛn na yɛde ma sika a ɔmanfoɔ de boa owufoɔ no abusuafoɔ no?',

choice1: 'Ayiaseka',
choice2: 'ɛtoɔ',
choice3: 'nsawa',
choice4: 'ntoboa',
answer: 3,
},
{ 


question: 'Akanfoɔ mu wɔdi asɛm wie a, sika a wɔde ma wɔn a wɔdii asɛm no, wɔfrɛ no sɛn?',

choice1: 'Badwadeɛ',
choice2: 'Hyireguo',
choice3: 'Mpata',
choice4: 'Agyinamudeɛ',
answer: 4,
},
{ 


question: 'Ɛyɛ Akanfoɔ akyiwade sɛ…..',

choice1: 'Yɛhyia obi a, yɛkyea no',
choice2: 'Yɛbɛhunu agyinamoa awia',
choice3: 'Yɛdware a, yɛto dwom',
choice4: 'Yɛbɛto yɛn nsa afrɛ obi',
answer: 3,
},
{ 


question: '……..yɛ berɛ a obi bɛwu kɔpem berɛ a wɔbesie no.',

choice1: 'Ayikan',
choice2: 'Apesire',
choice3: 'Dɔteyie',
choice4: 'Nsaayie',
answer: 2,
},
{ 


question: 'Sɛ abaayewa bi bu ne nsa a, n’awofoɔ de no kɔkyerɛ',

choice1: 'Abusua panin',
choice2: 'Aberewatia',
choice3: 'Ɔmanhene',
choice4: 'Ɔhemmaa',
answer: 4,
},
{ 


question: 'Saa nneɛma yi mu baako na wɔde ka ɔbrani ano. Yei ne……',

choice1: 'Kosua',
choice2: 'Fufuo',
choice3: 'Nsa',
choice4: 'Ɛmo',
answer: 1,
},
{ 


question: 'Nhunu-anim nsa din foforɔ ne',

choice1: 'Tammoba',
choice2: 'Kɔkɔɔkɔbɔ',
choice3: 'Tiri adeɛ',
choice4: 'Tiri nsa',
answer: 2,
},
{ 


question: 'Awaregyeɛ mu, agya gye',

choice1: 'Ntoma',
choice2: 'Etuo',
choice3: 'Sekan',
choice4: 'Danta',
answer: 4,
},
{ 


question: 'Aware bɔne tete',

choice1: 'Nnasoɔ',
choice2: 'Kɛtɛ',
choice3: 'Pieto',
choice4: 'Ntoma',
answer: 4,
},
{ 


question: 'Akanfoɔ di adeɛ kɔ …….fam.',

choice1: 'Maame',
choice2: 'Papa',
choice3: 'Wɔfa',
choice4: 'Adamfoɔ',
answer: 1,
},
{ 


question: 'Nnipakuo a wɔnoa ɔhene aduane wɔ ahemfie ne',

choice1: 'Nsɛneafoɔ',
choice2: 'Akyerɔmadefoɔ',
choice3: 'Sodoofoɔ',
choice4: 'Adumfoɔ',
answer: 3,
},
{ 


question: 'Abusua biara wɔ……a ɔda ano.',

choice1: 'Abusua panin',
choice2: 'Ɔkyeame',
choice3: 'Nkwankwaahene',
choice4: 'Ɔhene',
answer: 1,
},
{ 


question: 'Saa onipa yi na ɔda ahemfie nnipa nyinaa ano',

choice1: 'Kurontihene',
choice2: 'Gyaasehene',
choice3: 'Ɔkyeame',
choice4: 'Ɔbrafoɔ',
answer: 1,
},
{ 


question: 'Sɛ wɔpa ɔhene foforɔ a, …….kyerɛ ɔmanfoɔ.',

choice1: 'Ɔkasa',
choice2: 'Ɔnante',
choice3: 'Ɔsuae',
choice4: 'Ɔdidi',
answer: 3,
},
{ 


question: 'Ahemfo yi mu hwan na ɔkorɔn sene wɔn a aka no?',

choice1: 'Kurontihene',
choice2: 'Sanaahene',
choice3: 'Gyaasehene',
choice4: 'Ɔmanhene',
answer: 4,
},
{ 


question: 'Asanteman afahyɛ kɛseɛ ne deɛ ɛwɔ he?',

choice1: 'Nkyidwoɔ',
choice2: 'Awukudeɛ',
choice3: 'Fɔdwoɔ',
choice4: 'Adɛɛ kɛseɛ',
answer: 4,
},
{ 


question: 'Afahyɛ bɛn na wɔdi no wɔ Simpa?',

choice1: 'Akwanbɔ',
choice2: 'Kundum',
choice3: 'Aboakyere',
choice4: 'Fetu',
answer: 3,
},
{ 


question: 'Afarefoɔ de saa nneɛma yi yɛ adwuma',

choice1: 'Ɔkodoɔ, etuo, asau',
choice2: 'Ɔkodoɔ, asau, darewa',
choice3: 'Darewa, atuduro, asau',
choice4: 'Etuo, asau, atuduro',
answer: 2,
},
{ 


question: 'Bosome bɛn na ɛdi Ɛbɔ akyi?',

choice1: 'Ahinime',
choice2: 'Kitawonsa',
choice3: 'Ɔpɛpɔn',
choice4: 'Ɔbɛnem',
answer: 1,
},
{ 


question: 'Ɛnam hwan so na ɛmaa Onyankopɔn kɔɔ soro?',

choice1: 'Maame bi',
choice2: 'Aberewa bi',
choice3: 'Papa bi',
choice4: 'Ɔbarima bi',
answer: 2,
},
{ 


question: 'Hwan na atetesɛm kyerɛ sɛ ɔde akofena wɔɔ fam na obiara ntumi ntuiɛ no?',

choice1: 'Kwabia Amanfi',
choice2: 'Oti Akenten',
choice3: 'Ɔkɔmfo Anɔkye',
choice4: 'Tweneboa Kodua',
answer: 3,
},
{ 


question: 'Ɛdeɛn nti na obi reyɛ adwuma a, ɔto dwom? Sɛde ɛbɛyɛ a',

choice1: 'Nkurɔfoɔ bɛte ne nne',
choice2: 'Nnɔbae no bɛnyini ntɛm',
choice3: 'Nkurɔfoɔ bɛhunu sɛ ɔwɔ afuom',
choice4: 'ɔnte brɛ nka papa',
answer: 4,
},
{ 


question: 'Ɛdeɛn na Akanfoɔ de wie nsaguo?',

choice1: 'Nhyira ne nnome',
choice2: 'Nkamfo ne ntomtom',
choice3: 'Amannebɔ',
choice4: 'Ɔfrɛ',
answer: 1,
},
{ 


question: 'Kɔkɔɔ a ɛwɔ Ghana frankaa mu no gyina hɔ ma',

choice1: 'Ɔman no kwaeɛ',
choice2: 'Mogya a nananom hwie gu de gyee ɔman no',
choice3: 'Ɔman no nkɔsoɔ',
choice4: 'Ɔman no sika kɔkɔɔ',
answer: 2,
},
{ 


question: 'Sɛ ɔkanni ani gye a, ofira ntoma',

choice1: 'Tuntum',
choice2: 'Kɔkɔɔ',
choice3: 'Fitaa',
choice4: 'Kuntunkuni',
answer: 3,
},
{ 


question: 'Onipa anim kam ma yɛhunu',

choice1: 'Ne mmɔdemmɔ',
choice2: 'Ntɔn a ɔbɔ',
choice3: 'Ne suban',
choice4: 'Baabi a ɔfiri',
answer: 4,
},
{ 


question: 'Agya adeɛ bi wɔ hɔ, wosoma no a ɔnnkɔ nanso wokɔ ba a, ɔno na ɔdi kan ka bi hwɛ?',

choice1: 'Kokurobetie',
choice2: 'Nsateaa',
choice3: 'Akyerɛkyerɛkwan',
choice4: 'Nansoaa',
answer: 3,
},
{ 


question: 'Agya adeɛ bi wɔ hɔ, ɛtɔ fam a, onipa baako pɛ na ɔtumi fa',

choice1: 'Ntoma',
choice2: 'Adaka',
choice3: 'Bokiti',
choice4: 'Paneɛ',
answer: 4,
},
{ 


question: 'Agya adeɛ bi wɔ hɔ, ɛnni ani nso ɛtumi wura tokuro biara mu',

choice1: 'Okusie',
choice2: 'Nsuo',
choice3: 'Ɔwɔ',
choice4: 'Paneɛ',
answer: 2,
},
{ 


question: 'Wosum borɔdeɛ a, sum',

choice1: 'Borɔferɛ',
choice2: 'Kwadu',
choice3: 'Apem',
choice4: 'Apantun',
answer: 2,
},
{ 


question: 'Nsamanfoɔ mpo se wɔpɛ dodoɔ na yɛn',

choice1: 'Ateasefoɔ',
choice2: 'Nkyirimma',
choice3: 'Nnɛɛmmafoɔ',
choice4: 'Nnunsifoɔ',
answer: 1,
},
{ 


question: 'Suban a Ananse taa da no adi yɛ',

choice1: 'Ɔboafoɔ',
choice2: 'Aniteɛ',
choice3: 'Awiɛmfoɔ',
choice4: 'Ahobrase',
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
