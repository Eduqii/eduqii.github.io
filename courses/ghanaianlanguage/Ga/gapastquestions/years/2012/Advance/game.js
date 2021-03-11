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
	
question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Tsutsu kɛji akpa maŋtsɛ ko lɛ, …',
choice1: 'agbeɔ lɛ',
choice2: 'atswaa enane shishi tu',
choice3: 'awoɔ lɛ mɔɔŋ',
choice4: 'afeee lɛ nɔ ko',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Kɛji ajie maŋtsɛ kpo lɛ, namɔ mɔɔ enineshi kɛ lɛ tsɔɔ maŋ',
choice1: 'Akwashɔŋtsɛ',
choice2: 'Asafoiatsɛ',
choice3: 'Jaasetsɛ',
choice4: 'Maŋkralo',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n . Adole wu Afadi yɛ ŋa kroko ni gbɛi ji Kuɔkɔ. Kuɔkɔ nɛɛ feɔ Adole…..',
choice1: 'kurafo',
choice2: 'shaayoo',
choice3: 'bienyɛ',
choice4: 'wuyoo',
answer: 3,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Alabi tsɛɔ etsɛ Ataa Bɔte tsɛ akɛ…..',
choice1: 'kaŋsoa',
choice2: 'nii',
choice3: 'shishiu',
choice4: 'tsɛkwɛ',
answer: 2,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Adotetsɛ nyɛmi ji Adukwɛitsɛ. Belɛ Adote kɛ Adukwɛi lɛ…..abii ji amɛ.',
choice1: 'nyɛmimɛi',
choice2: 'bienyɛmɛi',
choice3: 'kurafai',
choice4: 'shiabii',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Naa Suɛle mɛni ji Botɔ kɛji Botɔnyɛ lɛ Naa Suɛle nabi ni?',
choice1: 'Naa',
choice2: 'Nanashishiu',
choice3: 'Nyɛkwɛ',
choice4: 'Nanakaŋsoa',
answer: 4,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Gbɔmɛi, nɛɛ ji ofɔlɔi.',
choice1: 'Onanemɛi kɛ osuɔlɔi',
choice2: 'Onii kɛ onaa',
choice3: 'Osafoŋbii kɛ otsɔɔlɔi',
choice4: 'Otsɛ kɛ onyɛ',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Te Ajɔkɔ baatsɛ etsɛ nyɛmi nuu Tɛte tɛŋŋ???',
choice1: 'Nanadadao',
choice2: 'Nanakɔkrɔdɔ',
choice3: 'Tsɛŋkpa',
choice4: 'Tsɛkwɛ',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n M?? wekunyo ny?? eye? nuu gboshiniii ?m?n??',
choice1: 'Enyɛni yoo',
choice2: 'Enyɛminuu',
choice3: 'Eŋa',
choice4: 'Etsɛkwɛ',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Yɛ Gamɛi asateŋ lɛ, namɔ yeɔ tsɛ nii?',
choice1: 'Binuu',
choice2: 'Nyɛkwɛ',
choice3: 'Tsɛkwɛ',
choice4: 'Wekunukpa',
answer: 1,

},
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Nyɛmimɛi ateŋ Tɛtɛ gbo. Tɛtɛ nyɛmimɛi nɛɛ ni yɔɔ wala mli lε ateŋ namɔ weku kɛ okulafo lɛ baaha gbala?',
choice1: 'Tɛte',
choice2: 'Bɔi',
choice3: 'Kwei',
choice4: 'Badu',
answer: 3,
}, 
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Yɛ Gamɛi akusum naa lɛ, namɔ gbɛi esa akɛ akɛwo abifao?',
choice1: 'Enaanyo',
choice2: 'Enyɛ',
choice3: 'Ekla',
choice4: 'Etsɛ',
answer: 4,
}, 
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Yɛ Gamɛi akusum naa lɛ, kɛji gbɔmɔ gbo lɛ mɔ ni ji yaratsɛ ji…….',
choice1: 'Wekunukpa',
choice2: 'Ebinukpa',
choice3: 'Enyɛminukpa',
choice4: 'Maŋtsɛ',
answer: 1,

},
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Kɛji yoogbayoo gbo lɛ, ewu haa gbonyo lɛ……',
choice1: 'momoto',
choice2: 'tɛklɛ',
choice3: 'jwine',
choice4: 'yara bo',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Akɛɛ biyoo yeee etsɛ nii yɛ tsɛ lɛ gbele sɛɛ ejaakɛ….',
choice1: 'ebaaha enyɛ eko',
choice2: 'ehaŋ enyɛmimɛi eko',
choice3: 'ekɛbaaya shia kroko mli',
choice4: 'enyɛŋ nɔ ekwɛ jogbaŋŋ',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Ga Mashi fɔɔ Hɔmɔwɔyeli yɛ ………….nyɔɔŋ lɛ nɔ.',
choice1: 'Abɛibe',
choice2: 'Antɔŋ',
choice3: 'Otukwajaŋ',
choice4: 'Manyawale',
answer: 4,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Atsɛŋmɛi afi ji…….',
choice1: 'Bakatue',
choice2: 'Ohum',
choice3: 'Lalue Kpledomi',
choice4: 'Obene',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Aŋlɔmɛi afi ni amɛyeɔ ji….',
choice1: 'Hogbɛtsotso',
choice2: 'Afashɛ',
choice3: 'Asafotufiam',
choice4: 'Odwira',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Afiyeli ni Shikpaŋbii shwɛɛɛ he kwraa ji…..',
choice1: 'Kwasidae',
choice2: 'Kundum',
choice3: 'Aboatsiri',
choice4: 'Odwira',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Ga Mashi shwieɔ Odadao nɔ….',
choice1: 'Gbo klɛŋklɛŋ sohaa',
choice2: 'Otukwajaŋ Soo ni ji enyɔ',
choice3: 'Gbo klɛŋklɛŋ Hɔɔ',
choice4: 'Otukwajaŋ klɛŋklɛŋ ju',
answer: 2,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Yɛ Hɔmɔwɔ gbi lɛ nɔ lɛ ahoɔ aho?',
choice1: 'akplijii kɛ kaa',
choice2: 'otɔ kɛ wuɔ wɔlɔ',
choice3: 'kpokpoi kɛ ŋme wonu',
choice4: 'yɛlɛ kɛ baa fɔlɔ',
answer: 3,
}, 
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Gamεi ni efafai gbɛ lɛ esa ni amɛba…..dani afee yeyeeye.',
choice1: 'Soo',
choice2: 'Hɔɔ',
choice3: 'Ju',
choice4: 'Sohaa',
answer: 1,

},
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Gbɛi ni akɛwo ŋulami ni amɛbua amɛhe naa yɛ he ko ji',
choice1: 'Agbiɛnaa',
choice2: 'Antɔŋ',
choice3: 'Alemle',
choice4: 'Afuabe',
answer: 3,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Gamɛi anyɔji feɔ 13 ejaakɛ nyɔɔŋ fɛɛ nyɔɔŋ hiɛ gbii…..',
choice1: '27',
choice2: '28',
choice3: '29',
choice4: '30',
answer: 2,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Nyɔɔŋ nɔ ni jeŋ dɔɔ, jwɛi ŋalaa wɛlɛŋŋ yɛ ŋa mli ni tsei ayibaa tete po kpalaa shwieɔ shi ji……',
choice1: 'Aharabata',
choice2: 'Otsokrikri',
choice3: 'Agbiɛnaa',
choice4: 'Otukwajaŋ',
answer: 2,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Nyɔɔŋtsere jee kɛ egbele feɔ….',
choice1: 'nyɔɔŋ kome',
choice2: 'nyɔji enyɔ',
choice3: 'gbii 30',
choice4: 'otsii enumɔ',
answer: 1,

},
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Mɛni nyɔɔŋ nɔ abɛi baa pii ni amɛkpataa yibii srɔtoi ni amɛbɔi tsuu ahiɛ?',
choice1: 'Agbiɛnaa',
choice2: 'Aharabata',
choice3: 'Abɛibe',
choice4: 'Alemle',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Tsutsu lɛ Gamɛi kaneɔ amɛnyɔji lɛ kayashiɔ….',
choice1: 'nɛɛhu',
choice2: 'nyɔŋma',
choice3: 'nyɔŋma kɛ ejwɛ',
choice4: 'nyɔŋma kɛ etɛ',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Awoo jwine kɛyaaa…..',
choice1: 'Maŋtsɛwe',
choice2: 'Maŋjaanɔ',
choice3: 'Shikatsɛwe',
choice4: 'Amaatsɛwe',
answer: 4,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Duade mli yɛ…..',
choice1: 'agwao',
choice2: 'kɔŋ',
choice3: 'futaa',
choice4: 'tsei',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Emusuŋtsɔmɔ kɛ….ekpe',
choice1: 'nyɔɔŋtsere',
choice2: 'hela',
choice3: 'hewalɛ',
choice4: 'naagba',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Hiŋmɛi mlifilimɔ hewɔ…..',
choice1: 'aboɔ mɔ toi',
choice2: 'odabɔi enyɔ nyiɛɔ',
choice3: 'adamɔɔ masɛi',
choice4: 'ayɔɔ naabu',
answer: 2,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Mina bo mifee lɛ…..',
choice1: 'agbaaa mɔ ko',
choice2: 'musu ni',
choice3: 'akɛɔ daa',
choice4: 'ejee tɔmɔ',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Te gbɔmɛi nɛɛ ateŋ mɔ ni fa akɛ agbe hiimeji fɛɛ yɛ Ga??',
choice1: 'Nii Okaikoi',
choice2: 'Nii Ofoli Tibo',
choice3: 'Owura Mampɔŋ Okai',
choice4: 'Naa Dɔde Akaibi',
answer: 4,
},
 {

 question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n  Mɛɛ Ga lumɔ amɔ ayato yɛ Elimina ejaakɛ eŋɔɔ nɔ akɛ aye maŋbii too yɛ numɔ hewɔ?',
choice1: 'Nii Ofoli Gakpo',
choice2: 'Nii Takie Kɔme I',
choice3: 'Nii Takie Tawia I',
choice4: 'Nii Amugi I',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Ga lum?i n?? f?? wu Akwamu Ta l? eko, shi am?te? nam? shwie Akwamu k?tee Shwilao s???',
choice1: 'Nii Ayikuma Tieku Baa',
choice2: 'Nii Ayi',
choice3: 'Nii Okaikoi',
choice4: 'Nii Asha?m?',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Mɛni ba ni Nyɔŋmɔ yaje shɔŋŋ yɛ ŋwɛi?',
choice1: 'Akɛ nu shwie enɔ',
choice2: 'Abolɔ awo lɛ',
choice3: 'Ashɛre la awo ehe',
choice4: 'Akɛ fufuitso shimɔ lɛ',
answer: 4,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Namɔ ha nilee gbɛ shwa je lɛ mli fɛɛ?',
choice1: 'Akɔnɔle',
choice2: 'Kwakute',
choice3: 'Tsiɛ Anaanu',
choice4: 'Yawa',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Kɛji aata adesa lɛ ataraa shi….',
choice1: 'kɔntɔŋ',
choice2: 'fa kɛ fa',
choice3: 'kokroo',
choice4: 'srɛnɛɛ',
answer: 1,

}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Tso ni adasatalɔ lɛ hiɛɔ be mli ni etaa adesa lɛ tsɔɔ akɛ…..',
choice1: 'eye mɔ fɛɛ mɔ onukpa',
choice2: 'akɛ hewalɛ ko eha lɛ',
choice3: 'ele wiemɔ fe mɔ fɛɛ mɔ',
choice4: 'egbee ŋɔɔ waa diɛŋtsɛ',
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

