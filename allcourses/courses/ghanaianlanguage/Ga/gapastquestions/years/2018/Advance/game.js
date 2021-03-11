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

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Aŋaa Maŋtsɛ akɛ…..',


choice1: 'ojekoo',
choice2: 'ŋnaokoo',
choice3: 'ha manye',
choice4: 'omaŋ nii',
answer: 3, 
},
{

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Aŋaa yoo ni efɔ eŋmɔŋ akɛ',


choice1: 'ha fɔmɔ aba',
choice2: 'kpoo o',
choice3: 'onine nɔ ayilɔ',
choice4: 'oshwie',
answer: 3,

},
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Gamɛi asateŋ lɛ leebi ŋamɔ ji',


choice1: 'aekoo',
choice2: 'ŋnaokoo',
choice3: 'oshwie',
choice4: 'ojekoo',
answer: 4,
},
{
 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n  Astɛɔ bii enyɔ bi afɔ amɛ shi kome akɛ………',

choice1: 'haaji',
choice2: 'awusai',
choice3: 'kromɔbii',
choice4: 'gbobalɔi',
answer: 1,
}, 
{ 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Afɔ Ajete Samsam Soo, no hewɔ lɛ egbi gbɛi ji…..',


choice1: 'Kojo',
choice2: 'Kwao',
choice3: 'Kwami',
choice4: 'Kwaku',
answer: 2, 
},
{

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Aŋaaa mɔ kɛji aaya',


choice1: 'faaŋ',
choice2: 'jaanɔ',
choice3: 'ŋshɔnaa',
choice4: 'niiasɛɛ',
answer: 4,
},
{
 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n   Ajieee waonaa gbɛkɛ, no lɛ mɔ lɛ',

choice1: 'baawɔlɔ kɔŋkɔŋ',
choice2: 'baaye ohia',
choice3: 'baahiɛ ehe efolo',
choice4: 'baagbo trukaa',
answer: 4,
},
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Onyɛmi yoo wu feɔ',


choice1: 'onanehenyo',
choice2: 'oshabi',
choice3: 'oshaanuu',
choice4: 'onikulafo',
answer: 2,

},
{
 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n  Otsɛ Ataa kɛ Onyɛ Awo ji',

choice1: 'ofɔlɔi',
choice2: 'ohetafalɔi',
choice3: 'onabi',
choice4: 'onyɛmimɛi',
answer: 1,

},
{

question:'NGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n amɔ wieɔ maŋtsɛ naa yɛ',

choice1: 'Maŋkralo',
choice2: 'Maŋnyɛ',
choice3: 'Otsaamɛ',
choice4: 'Shipi',
answer: 3, 
},
{
question:'NGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n amɔtswaa shi kɛji Gamɛi ekpe?',

choice1: 'Asafoatse',
choice2: 'Maŋkralo',
choice3: 'Shipi',
choice4: 'Wulɔmɔ',
answer: 4,
},
{
 
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɛni okadi akɛyoɔ maŋtsɛ”',

choice1: 'Abakle',
choice2: 'Adiagba',
choice3: 'Afliŋ',
choice4: 'Shishεi',
answer: 4,
},
{
 
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɛni ajenu henɔ ji koklolonto lɛ egbee jɔɔŋ',

choice1: 'Susumɔ kɛ tsɔɔmɔ',
choice2: 'Naaŋmɔlɔ woo',
choice3: 'Plasheele',
choice4: 'Hefɛɔyeli',
answer: 2

},
{
 
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɔ ko kɛ ebɛku etsɔɔɔ……awe',

choice1: 'efɔlɔi',
choice2: 'onukpai',
choice3: 'ewekumɛi',
choice4: 'etsɛmɛi',
answer: 4,
},
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Too gbonyo sheee…….gbeyei',


choice1: 'lema',
choice2: 'adida',
choice3: 'gbele',
choice4: 'kakla',
answer: 4,

},
{
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɛni wiemɔ akɛgbeɔ adesatamɔ naa?',

choice1: 'Mikɛta nyɛtoi asɛɛ',
choice2: 'Ha onaa oya',
choice3: 'Bɔ ni fee ni nilee gbɛ shwa',
choice4: 'Nakai gbi lɛ miyɛ jɛ',
answer: 1,
}, 
{ 
question:'NGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n amɔ abuɔ lɛ hiɛtsɛlɛlɔ yɛ adesatamɔ mli?',

choice1: 'Tsiɛ Anaanu',
choice2: 'Yawa',
choice3: 'Kwakute',
choice4: 'Alɔnte',
answer: 1,
}, 
{ 
question:'…Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n .., ji Gamɛi afi ni amɛshwɛɛε he kwraa',

choice1: 'Blonya',
choice2: 'Hɔmɔwɔ',
choice3: 'Sisatsɛmɔ',
choice4: 'Yesu Amanehulu',
answer: 2,

},
{
 
question:'AGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ŋlɔmɛi afi ni amɛyeɔ ji',

choice1: 'Asafotufiam',
choice2: 'Bakatue',
choice3: 'Hogbɛtsotso',
choice4: 'Damba',
answer: 3

},
{
 
question:'SGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n hiŋkpabii hu shwɛεɛ……..he kwraa',

choice1: 'Afashɛ',
choice2: 'Kwasidae',
choice3: 'Kundum',
choice4: 'Aboatsiri',
answer: 4,
},
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Gamɛi afi ni amɛkaneɔ lɛ feɔ nyɔji……\n ?i afi ni am?kane? l? fe? ny?ji……',

choice1: 'nyɔŋma kɛ ekome',
choice2: 'ŋyɔŋma kɛ etɛ',
choice3: 'ŋyɔŋma kɛ enyɔ',
choice4: 'ŋyɔŋma kɛ ejwɛ',
answer: 3, 
},
{
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Gamɛi klɛŋklɛŋ nyɔɔŋ yɛ afi lɛ mli ji……..',

choice1: 'Aharabata',
choice2: 'Gbo',
choice3: 'Oflɔ',
choice4: 'Manyawale',
answer: 1,
}, 
{ 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Mɛni kusum afeɔ ahaa Ga fɔmɔbi nuu”',


choice1: 'nitsumɔ kasemɔ',
choice2: 'fiafeemɔ',
choice3: 'gbɛbaa',
choice4: 'butrumwɔɔ',
answer: 4,

},
{

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Mɛni okadi akɛyoɔ gbobalɔ?',

choice1: 'gbɛbaa',
choice2: 'tsi',
choice3: 'otsaamɛtso',
choice4: 'yishɛɛ',
answer: 1,

},
{

question:'NGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n yɔɔŋ ko gbɛi ji Otsokrikri ejaakɛ…….',

choice1: 'fɛi yeɔ',
choice2: 'nugbɔ nɛɔ',
choice3: 'hulu tsoɔ',
choice4: 'ŋshɔ ŋmɛɔ',
answer: 3, 
},
{
question:'NGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n yɔɔŋ ko nɔ ni abɛii baa waa gbɛi ji……….',

choice1: 'Agbiɛnaa',
choice2: 'Afuabe',
choice3: 'Abɛibe',
choice4: 'Aharabata',
answer: 3

},
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Ŋulami ko gbɛi nɛ, eyɛ ŋulami bibii etɛ yɛ ehewɔ',


choice1: 'Alemle',
choice2: 'Otukwajaŋ',
choice3: 'Oflɔ',
choice4: 'Antɔŋ',
answer: 4,
},
{
 
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɔ ko kɛ shwuɔ yeee….',

choice1: 'naamɔ',
choice2: 'nitusmɔ',
choice3: 'nikwɛmɔ',
choice4: 'fɛo',
answer: 1,

},
{

question:'AGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n nuuu nu atooo……………',

choice1: 'wɔ',
choice2: 'Aharabata',
choice3: 'tsofa',
choice4: 'Sohaa',
answer: 2, 
},
{
question:'KGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɛji efi gbee lɛ ………..jwɛi',

choice1: 'ekpeɔ',
choice2: 'emiɔ',
choice3: 'etaoɔ',
choice4: 'ehoɔ',
answer: 1,

},
{

question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɛɛ maŋtsɛ ni kulɛ enyiɛ Gamɛi ahiɛ kɛbaa shi ebanyɔ yɛ gbɛ lɛ nɔ lɛ?',

choice1: 'Nii Ofori Tibo',
choice2: 'Nii Okaikoi',
choice3: 'Nii Ayi Kushi',
choice4: 'Nii Ayikuma Tieku',
answer: 3

},
{
 
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n aŋtsɛ ni eyatswa Katamanso Ta (1826) ni eye kunim ji ………',

choice1: 'Nii Adama Akwaja',
choice2: 'Nii Taki Obli',
choice3: 'Nii Taki Kɔme II',
choice4: 'Nii Taki Kɔme I',
answer: 4,

},
{
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n ɛɛ maŋtsɛ kpee Awutu maŋtsɛ biyoo Dede Akaibi akɛ eŋa?',

choice1: 'Nii Okaikoi',
choice2: 'Nii Amah',
choice3: 'Owula Mampɔŋ Okai',
choice4: 'Nii Ashaŋmɔ',
answer: 3, 
},
{
question:'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n antsɛ ni awo lɛ ayato Elmina ejaakɛ ekplɛɛɛ ni Blɔfo aye maŋbii atoo ji ….. (1875)',

choice1: 'Nii Taki Tawia I',
choice2: 'Nii Taki Kɔme I',
choice3: 'Nii Taki Obli',
choice4: 'Nii Tɛiko Tsuru',
answer: 1,
}, 
{ 
question:'AGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n wula Dedei wu nyɛmiyoo feɔ',

choice1: 'ebienyɛ',
choice2: 'ewuyoo',
choice3: 'eshaayoo',
choice4: 'ekurafo',
answer: 2

},
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Nuu ni fɔ mitsɛ pap feɔ mi',


choice1: 'Nana shishiu',
choice2: 'Nana kansoa',
choice3: 'Nana dadao',
choice4: 'Nana muu',
answer: 2, 
},
{
question:'TGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n e nibii nɛɛ ateŋ nɔ ni haa gbala ko sɔɔ lɛ?',

choice1: 'subaŋ kpakpa',
choice2: 'ajwamaŋbɔɔ',
choice3: 'suu',
choice4: 'juu',
answer: 1,

}, 
{
question: 'Klɛŋklɛŋ kusum ni nuu tsuɔ kɛji eetao ŋa ji ………',


choice1: 'ebiɔ yoo lɛ suɔmɔ',
choice2: 'efaa daa',
choice3: 'eshiɔ agbe',
choice4: 'ekeɔ yoo lɛ nii',
answer: 3

},
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n Ayeee yɛlɛ naa yɛ ………..',


choice1: 'kpo nɔ',
choice2: 'su mli',
choice3: 'ŋa mli',
choice4: 'maŋ mli',
answer: 2

},
{
 
question:'SGbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ.\n\n hibaa ji kusum ni tsɔɔ akɛ',

choice1: 'abaana loo',
choice2: 'afeee hoo',
choice3: 'ŋshɔ wuji ajamɔ',
choice4: 'ahu ŋmaa ŋmɔ mli',
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
