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

question: 'Tsɔɔmɔ hetoi ni aha lɛ ateŋ nɔ ni ja fe fɛɛ yɛ Gamɛi agbɛii he\n\n Namɔ ji haaji asɛɛbii etɛ ?',

choice1: 'Abam',
choice2: 'Tawia',
choice3: 'Akuɔkɔ',
choice4: 'Akuɛtɛ',
answer: 1,
},
 {

 

question: 'Tsɔɔmɔ hetoi ni aha lɛ ateŋ nɔ ni ja fe fɛɛ yɛ Gamɛi agbɛii he\n\n Te gbɛii nɛɛ ateŋ nɔ ni ji awusai agbɛi ?',

choice1: 'Adekabɛ',
choice2: 'Ahia',
choice3: 'Ashami',
choice4: 'Tsintɔ',
answer: 2,
},
 {

 

question: 'Tsɔɔmɔ hetoi ni aha lɛ ateŋ nɔ ni ja fe fɛɛ yɛ Gamɛi agbɛii he\n\n Ganyo fɛɛ Ganyo yɛ fɔmɔnaa gbɛi. Ataa Kwei bi kromɔ Dede sɛɛho nuu gbɛi ji',

choice1: 'Anan',
choice2: 'Badu',
choice3: 'Botswe',
choice4: 'Tɛte',
answer: 4,
},
 {

 
question: 'Kɛ hetoi ni ja agbe aahi nɛɛ anaa\n\n Ajieee waonaa gbɛkɛ, no lɛ……',
choice1: 'ootsɛ pilamɔ oha ohe',
choice2: 'obaaye sɛkɛ',
choice3: 'obaaye ohia',
choice4: 'obaagbo',
answer: 3,
},
 {

 

question: 'Kɛ hetoi ni ja agbe aahi nɛɛ anaa\n\n Yoo taa shikpɔŋ folo, no lɛ……',

choice1: 'ewu baamɔ nyɔmɔ',
choice2: 'enɛy fufɔ baafuu',
choice3: 'enɛy nine baafuu',
choice4: 'ewu baagbo',
answer: 4,
},
 {

 

question: 'Kɛ hetoi ni ja agbe aahi nɛɛ anaa\n\n Gamɛi yɛ kitai srɔtoi enyɔ ni amɛshaa, nomɛi ji maŋ lumɛi akitashaa kɛ…..',

choice1: 'bei loomɔ',
choice2: 'gblamlibotemɔ',
choice3: 'tayaa loo tafaa kitashaa',
choice4: 'nitsumɔ mlibotemɔ',
answer: 3,
},
 {

 
question: 'Gblamlibotemɔ kɛ gblafitemɔ kusum nibii nɛ ha hetoo bɔ pɛ ni ja\n\n Kusum niyenii ni oblayoo kɛ enanemɛi yeɔ kɛshɛɔ amɛ dani eyaa gblawe ji…',
choice1: 'kpokpoi',
choice2: 'ataŋ',
choice3: 'otɔ',
choice4: 'fotoli',
answer: 4,
},
 {

question: 'Gblamlibotemɔ kɛ gblafitemɔ kusum nibii nɛ ha hetoo bɔ pɛ ni ja\n\n Yɛ gblamlibotemɔ kusumfeemɔ mli lɛ, kɛji akɛ ayɛmforo tee ewusɛɛ lɛ akɛ lɛ yaaha ewu lɛ atuɔ lɛ ahaa…….',
choice1: 'nyɛ awo',
choice2: 'tsɛ ataa',
choice3: 'ewusɛɛ yoo onukpa',
choice4: 'ewusɛɛ nuu nukpa',
answer: 3,
},
 {

 

question: 'Gblamlibotemɔ kɛ gblafitemɔ kusum nibii nɛ ha hetoo bɔ pɛ ni ja\n\n Tsɔɔmɔ nibii nɛɛ ateŋ nɔ ni yoo loo nuu nyɛɔ feɔ ni efiteee gba',

choice1: 'ayɛkpɛmɔ',
choice2: 'heshibaa',
choice3: 'jamɔ fɔŋ',
choice4: 'tsofatsumɔ',
answer: 2,
},
 {

 

question: 'Gblamlibotemɔ kɛ gblafitemɔ kusum nibii nɛ ha hetoo bɔ pɛ ni ja\n\n Kɛji gbla ko baasɔ lɛ edamɔ nibii nɛɛ ateŋ ekome nɔ..',

choice1: 'suu',
choice2: 'ajwamaŋbɔɔ',
choice3: 'juu',
choice4: 'subaŋ kpakpa',
answer: 4,
},
 {

 
question: 'Tsɔɔmɔ hetoi lɛ ateŋ nɔ ni ja fe fɛɛ\n\n Yɛ Gamɛi asateŋ lɛ, namɔ ji mɔ ni kwɛɔ tsɛ sɛɛ kɛji tsɛ bɛ?',

choice1: 'Nakutsoŋbi',
choice2: 'Nyɛmi gbekɛ',
choice3: 'Weku yitso',
choice4: 'Kromɔ binu',
answer: 4,
},
 {

 

question: 'Tsɔɔmɔ hetoi lɛ ateŋ nɔ ni ja fe fɛɛ\n\n Kusum naa lɛ, kɛ tsɛ ko te shi yɛ ebii ateŋ lɛ, namɔ akɛ eŋa lɛ haa kula?',

choice1: 'Enyɛmi yoo',
choice2: 'Enyɛminuu',
choice3: 'Ebi',
choice4: 'Enabi',
answer: 2,
},
 {

 

question: 'Tsɔɔmɔ hetoi lɛ ateŋ nɔ ni ja fe fɛɛ\n\n Yɛ yarafeemɔ mli lɛ mɛi nɛɛ ateŋ mɔ kome ji yaratsɛ',

choice1: 'Shiatsɛ',
choice2: 'Tsɛ',
choice3: 'Bi',
choice4: 'Weku yitso',
answer: 4,
},
 {


question: 'Kɔ hetoi lε ateŋ nɔ ni ja kεha sanebimɔi lε\n\n Gamɛi yeɔ Hɔmɔwɔ, ni Adamɛi yeɔ…..',

choice1: 'Hogbɛtsotso',
choice2: 'Kundum',
choice3: 'Asafotufiami',
choice4: 'Odwira',
answer: 3,
},
 {

 

question: 'Kɔ hetoi lε ateŋ nɔ ni ja kεha sanebimɔi lε\n\n Shiŋkpabii shwɛɛ …….…afi lɛ he kwraa',

choice1: 'Aboakyiri',
choice2: 'Ohum',
choice3: 'Asafotufiam',
choice4: 'Kwasidae',
answer: 1,
},
 {

 

question: 'Kɔ hetoi lε ateŋ nɔ ni ja kεha sanebimɔi lε\n\n Guabii yeɔ Afahyɛ, nakai nɔŋŋ Akwapimbii hu tswaa………..',

choice1: 'Kundum',
choice2: 'Ohum',
choice3: 'Asafotufiam',
choice4: 'Odwira',
answer: 4,
},
{
 


question: 'Gamɛi anitsumɔ\n\n Kpone wolɛi kɛ….shaa loo yɛ ŋshɔ lɛ naa',

choice1: 'sɛkɛ',
choice2: 'kako',
choice3: 'kpoŋ',
choice4: 'sumui',
answer: 3,
},
 {

 

question: 'Gamɛi anitsumɔ\n\n Okwaafonyo kɛ kɔi, tamɔ gbɔbilɔ kɛ…….',

choice1: 'lema',
choice2: 'sofi',
choice3: 'hamlɛ',
choice4: 'tu',
answer: 4,
},
 {

 

question: 'Gamɛi anitsumɔ\n\n Kweimaŋ gbɔbilɔ lɛ tsotsoro……….kɛtee gbɔbimɔ nyɛ gbɛkɛ.',

choice1: 'gbaja',
choice2: 'kotoku',
choice3: 'kεntεŋ',
choice4: 'sapεɔ',
answer: 1,
},
 {

  
question: 'Gamɛi anitsumɔ\n\n Atsɛɔ he ni asɔɔ klante, kɔi, akplɔ kɛ amɛhenɔi yɛ lɛ akɛ……….',
choice1: 'koishi',
choice2: 'dade nitsum?he',
choice3: 'kɔi tswaahe',
choice4: 'sɔŋmɛ shishi',
answer: 4,
},
 {

 
question: 'Ha saji ni baa nɛɛ fɛɛ ahetoo\n\n Nyɔɔŋ ko nɔ lɛ, bɔ ni jeŋ feɔ nɛ: kɔɔyɔɔ gbiŋ ŋanii tswaa, fɛi yeɔ, nibii amli nu ŋaa. Mɛni nyɔɔŋ ni?',

choice1: 'Gbo',
choice2: 'Abɛibe',
choice3: 'Aharabata',
choice4: 'Oflɔ',
answer: 3,
 },
{
 

question: 'Ha saji ni baa nɛɛ fɛɛ ahetoo\n\n Nunɛmɔ be wulu yε afi lɛ mli ji….',

choice1: 'Abɛibe',
choice2: 'Agbiɛnaa',
choice3: 'Alemle',
choice4: 'Atɔŋ',
answer: 2,
},
 {

 

question: 'Ha saji ni baa nɛɛ fɛɛ ahetoo\n\n Abɛibe mli lɛ….baa babaoo',

choice1: 'aduawa',
choice2: 'niyenii',
choice3: 'abonua',
choice4: 'abɛi',
answer: 4,
},
 {

 

question: 'Ha saji ni baa nɛɛ fɛɛ ahetoo\n\n Mɛni nyɔɔŋ nyiɛ Blonya nyɔɔŋ lɛ hiɛ lɛ?',

choice1: 'Alemle',
choice2: 'Atɔŋ',
choice3: 'Afuabe',
choice4: 'Abɛibe',
answer: 1,
},
 {

 

question: 'Ha saji ni baa nɛɛ fɛɛ ahetoo\n\n Gamɛi yɛ bɔ ni amɛkaneɔ be. Blema lɛ…… ji klɛŋklɛŋ nyɔɔŋ yɛ afi lɛ mli.',

choice1: 'Oflɔ',
choice2: 'Agbiɛnaa',
choice3: 'Otukwajaŋ',
choice4: 'Gbo',
answer: 4,
},
 {

 
question: 'Gbee abɛi nɛɛ anaa\n\n Akɛ ajitɔ tsofa tsaaa…….',

choice1: 'hiŋmɛi',
choice2: 'kanto',
choice3: 'musu',
choice4: 'nane',
answer: 2,
},
 {

 

question: 'Gbee abɛi nɛɛ anaa\n\n Mɔko kɛ blema ŋme….',

choice1: 'eyaaa jara nɔ',
choice2: 'ekeee mɔ',
choice3: 'baaa shia',
choice4: 'ehooo wonu',
answer: 4,
},
 {

 

question: 'Gbee abɛi nɛɛ anaa\n\n Kɛji otere buulu jatsu lɛ……',

choice1: 'oyiɔ lɛ',
choice2: 'obuɔ lɛ',
choice3: 'opaiɔ esabla',
choice4: 'oshishiuɔ lɛ',
answer: 3,
},
 {

 
question: 'Okadi nibii ni akɛwieɔ\n\n Akɛ ayilɔ folɔ gbekɛ yoo lɛ hiɛ kɛ eniji ahe ejaakɛ eye……..',

choice1: 'asɔ',
choice2: 'bem',
choice3: 'wala',
choice4: 'ejurɔ',
answer: 2,
},
 {

 

question: 'Okadi nibii ni akɛwieɔ\n\n Nuumo Anaafo tsɛrɛ tremai babaoo wo ekuɛ kɛtsɔɔ……abɔ ni eyɔɔ.',

choice1: 'shika',
choice2: 'nibii',
choice3: 'tsui',
choice4: 'nyɔji',
answer: 1,
},
 {

 

question: 'Okadi nibii ni akɛwieɔ\n\n Mɛɛle kɛ Ashele gba tsɛlɛ be ni eshwɛ fioo ni abaawo Ashele gbonyo adeka mli. Enɛ tsɔɔ akɛ afee kusum…..',

choice1: 'ko kɛwo amɛ hewalɛ',
choice2: 'kɛgbla amɛnaanyobɔɔ lɛ mli',
choice3: 'kɛsaa amɛteŋ',
choice4: 'kɛtsɔɔ amɛsuɔmɔ',
answer: 2,
},
 {

 

question: 'Okadi nibii ni akɛwieɔ\n\n La kɛ Tɛshi miitswa ta gbeyeigbeyei, shi La maŋtsɛ kɛ abele tsu kɛtee Tɛshi maŋtsɛ ŋɔɔ. No tsɔɔ akɛ La maŋtsɛ miibi ni….',

choice1: 'amia gbaja mli',
choice2: 'akpe yɛ kpeeshi lɛ naa',
choice3: 'afɔɔ ta lɛ ni toi ŋjɔlɛ aba',
choice4: 'asraafoi ayatutua tɛshimɛi',
answer: 3,
 },
{
 

question: 'Okadi nibii ni akɛwieɔ\n\n Kɛji ona m? ko ni baa ma enaa l? no ts?? ak? m? l?……',

choice1: 'sumɔɔ akɛ ewie',
choice2: 'bɛ hewalɛ',
choice3: 'miitao niyenii',
choice4: 'baagbo',
answer: 1,
 },
 {
question: 'Adesatamɔ\n\n Yɛ adesatamɔ mli lɛ kooloo ko gbɛi fɔɔ kaa waa. Mɛni kooloo ni ?',

choice1: 'Abotia',
choice2: 'Alaŋmai',
choice3: 'Anaanu',
choice4: 'Abletsi',
answer: 3,
},
 {

 question: 'Adesatamɔ\n\n Yɛ adesatamɔ mli lɛ, gbɔmɛi srɔtoi enyɔ ahe hiaa. Amɛ ji toibolɔi kɛ…..',

choice1: 'naawolɔi',
choice2: 'asafo',
choice3: 'boma',
choice4: 'talɔ',
answer: 4,
},
{
 

question: 'Adesatamɔ\n\n Mɛni ji naagbee gbɛjianɔtoo yɛ adesatamɔ mli ?',

choice1: 'toisɛɛtamɔ',
choice2: 'nɔheremɔ',
choice3: 'shishijee',
choice4: 'toinɔwomɔ',
answer: 1,
 },
{
 

question: 'Adesatamɔ\n\n Ajamanaa ji shwɛmɔ ko ni………….shwɛɔ.',

choice1: 'onukpai',
choice2: 'yeifɔyei',
choice3: 'gbekɛbii hii',
choice4: 'gbekɛbii hii kɛ yei',
answer: 3,
 },
{
 

question: 'Adesatamɔ\n\n Oblayei sɔŋŋashwɛmɔ lɛ ekomeji…',

choice1: 'namɔ ye lɛ awui',
choice2: 'adaawe',
choice3: 'kokobinante',
choice4: 'tsetsekule',
answer: 2,
},
 {

 

question: 'Adesatamɔ\n\n Mɛŋi gbɛ nɔ nitsumɔ lala he yɔɔ sɛɛnamɔ ha mɔ ni laa ?',

choice1: 'ewoɔ hewalɛ',
choice2: 'ehaa tɔlɛ baa',
choice3: 'ehaa hɔmɔ yeɔ lɛ',
choice4: 'egbɔleɔ ekpɔiaŋ',
answer: 1,
 },
{
 

question: 'Adesatamɔ\n\n Yɛ mɛni gbɛ nɔ lala ni nihɔɔlɔ laa lɛ yeɔ buaa lɛ ?',

choice1: 'enaa miishɛɛ',
choice2: 'ewoɔ lɛ ekaa',
choice3: 'etsɛɔ jara ehaa lɛ',
choice4: 'ekaseɔ naatselɛ',
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
