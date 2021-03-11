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

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Kɛji aŋa mɔ ko “He ni ojɛ” lɛ ahareɔ nɔ……..',

choice1: 'amɛkɛɛ oba',
choice2: 'oyiwaladɔŋŋ',
choice3: 'blɛoo',
choice4: 'jɛi bii yɛ jogbaŋŋ',
answer: 4,
},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Kɛ ji Ganyo miiya koo naa lɛ…..',

choice1: 'eŋaaa mɔ',
choice2: 'egbaa sane',
choice3: 'emiaa ehiŋmɛi',
choice4: 'enyiɛɔ blɛoo',
answer: 1,
}, 
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Kɛji…….lɛ oŋaaa mɔ',

choice1: 'ayi bo',
choice2: 'etɔ bo',
choice3: 'kotsa yɛ odaaŋ',
choice4: 'obɛmiisshɛɛ kwraa',
answer: 3,
},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Gbɛi nɛɛ edu gbɛ yɛ biɛ',

choice1: 'Tsintɔ',
choice2: 'Ahia',
choice3: 'Badu',
choice4: 'Adote',
answer: 1,

},
 {

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Gbɛi “atsɛafɔ” lɛ eji….gbɛi',

choice1: 'weku',
choice2: 'gbobalɔ',
choice3: 'gbi',
choice4: 'fɔmɔnaa',
answer: 2,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Afɔ Ajete Kojo…….',

choice1: 'Hɔgbaa',
choice2: 'Ju',
choice3: 'Soo',
choice4: 'Sohaa',
answer: 2,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Tɛtɛ sabla ji…….',

choice1: 'Mpata',
choice2: 'Ofloba',
choice3: 'Pɛŋ',
choice4: 'Saashi',
answer: 1,
}, 
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Abe tsɛ nii lɛ Abe……ni',

choice1: 'nii',
choice2: 'tsɛ',
choice3: 'nanashishiu',
choice4: 'kansoa',
answer: 4,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Kɛ oyɛ wu lɛ……………….ji owu lɛ nyɛmi yoo',

choice1: 'oshaayoo',
choice2: 'oshienyɛ',
choice3: 'owuyoo',
choice4: 'oŋa',
answer: 3,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Adote bi Kpakpo ……..ji Adote tsɛ',

choice1: 'nii',
choice2: 'shaanuu',
choice3: 'tsɛfio',
choice4: 'tsɛkwɛ',
answer: 1,
}, 
{
 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Yɛ Gamɛi asateŋ lɛ, namɛi haa ŋɔɔwala Hɔgbaa ?',

choice1: 'Tɛma',
choice2: 'Tɛshi',
choice3: 'Ga Mashi',
choice4: 'La',
answer: 1,

},
 {

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Afi ni Krɔbɔmɛi yeɔ ji……',

choice1: 'Asafotufiam',
choice2: 'Domi',
choice3: 'Ŋmayemi',
choice4: 'Ohum',
answer: 3,
},
{
 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Ayeɔ haaji ayɛlɛ……..yɛ Ga Mashi',

choice1: 'Ju',
choice2: 'Jufɔ',
choice3: 'Soo',
choice4: 'Sohaa',
answer: 4,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Hɔmɔwɔ lɛ…….shiɔ kpa',

choice1: 'La kɛ Tɛshi',
choice2: 'Osu kɛ La',
choice3: 'Osu kɛ Tɛshi',
choice4: 'Tɛshi kɛ Nuŋua',
answer: 1,

},
 {

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Ashiɔ otofo yɛ Osu kɛ….',

choice1: 'Asɛrɛ',
choice2: 'Otublohuŋ',
choice3: 'Gbese',
choice4: 'Abola',
answer: 1,
}, 
{
 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Yɛ Gamɛi asateŋ lɛ, eji……..akɛ yoo ni afeko jeŋnii ahako lɛ baaŋɔ hɔ',

choice1: 'shade',
choice2: 'kita',
choice3: 'eshaa',
choice4: 'musu',
answer: 4,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Akɛ “wuɔ kɛ tumo bɛ shidaa”…………….',

choice1: 'daiɔ shidaa sɛɛ',
choice2: 'daa shi',
choice3: 'buɔ abɛ',
choice4: 'buɔ wiemɔ mama',
answer: 1,

},
 {

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Gbekɛ eboo….yɛ onukpa hiɛ',

choice1: 'ao !',
choice2: 'ei !',
choice3: 'hoo',
choice4: 'mm !',
answer: 3,
 },
 {
 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Ataaa adese sheane, no lɛ ……',

choice1: 'obaaje lei',
choice2: 'omusu baakɔ bo',
choice3: 'onaa baaho nu',
choice4: 'oyitso baagba bo',
answer: 1,
}, 
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Ashamɔɔɔ awooo latɛ mli tsɔɔ wɔ…..',

choice1: 'ablobɔɔ',
choice2: 'farefarefeemɔ',
choice3: 'hewalɛwoo',
choice4: 'oyaiyeli',
answer: 2,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Ayee nii kɛnyiɛɛɛ gbɛ nɔ, no lɛ……',

choice1: 'omusu baakɔ bo',
choice2: 'otɔɔɔ kɔkɔɔkɔ',
choice3: 'sisa kɛ enine baawo mli',
choice4: 'niyenii lɛ baashwie',
answer: 3,
},
{
 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Ayiii mɔ yɛ wɔ mli, no lɛ…..',

choice1: 'hela baamɔ lɛ',
choice2: 'mɔ lɛ baatsɔ mli kɛgbo',
choice3: 'mɔ lɛ baawɔ aahu',
choice4: 'ŋwɛi baagba eyi mɔ lɛ nɔ',
answer: 2,

},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Enɛmɛi nyɛɔ kɛ gbele baa, bɛja…..',

choice1: 'dalɛ',
choice2: 'hela',
choice3: 'oshra',
choice4: 'wamɔmɔ',
answer: 4,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Kɛji agbo lɛ, akɛ…….tseɔ naanyobɔɔ ni ka hiɛkalɔ kɛ sisa lɛ teŋ',

choice1: 'kpeshii',
choice2: 'saisramɔ',
choice3: 'tsɛrɛgbamɔ',
choice4: 'yarafeemɔ',
answer: 3,
 },
 {

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Kɛji yoo okualafo saa etee gbala yɛ shia kome mli lɛ efɔɔ…….',

choice1: 'Okulabi',
choice2: 'Doku',
choice3: 'Ababio',
choice4: 'Obaamra',
answer: 2,

},
{
 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n 26',
choice1: 'onukpa',
choice2: 'oblanyo',
choice3: 'oblayoo',
choice4: 'owula',
answer: 1,
}, 
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Te gbɛi ni soro lɛ yɛ enɛmɛi ateŋ lɛ ?',

choice1: 'Tumo',
choice2: 'Obodai',
choice3: 'Atsɛafɔ',
choice4: 'Jokoo',
answer: 2,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Kpojiemɔ lɛ no nɔŋŋ ji…..lɛ',

choice1: 'ŋkpaiyeli',
choice2: 'jeŋnii',
choice3: 'gbɛiwoo',
choice4: 'kpeemɔ',
answer: 3,
},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Yɛ Kpojiemɔ ŋkpaiyeli mli lɛ akɛɔ akɛ “ekɛ ediŋ ba ekɛ eyɛŋ aya” Enɛ shishi ji………..',

choice1: 'ebaabu mama yɛŋ',
choice2: 'ebaana hewolo fɛfɛo',
choice3: 'ebaasumɔnibii ni yɔɔ eyɛŋ',
choice4: 'ebaagbɔ ni eje waŋ',
answer: 4,
},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Klɛŋklɛŋ kusum ni afeɔ yɛ gbalafeemɔ mli ji…….',

choice1: 'agboshimɔ',
choice2: 'musunɔtswaa',
choice3: 'nibimɔ',
choice4: 'yinihamɔ',
answer: 1,
}, 
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Atao enɛmɛi yɛ weku mli dani ayagbaa yɛ mli, bɛja…..',

choice1: 'subaŋ kpakpa',
choice2: 'sɛkɛyeli',
choice3: 'hiɛdɔɔ kɛ nitsumɔ',
choice4: 'humi shihilɛ',
answer: 3,
 },
 {

 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n fite lɛ nuu….eŋa',

choice1: 'ejeɔ',
choice2: 'elomɔ',
choice3: 'eshwieɔ',
choice4: 'eyiɔ',
answer: 3,
 },
 {

 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Blema lɛ…….nyiɛɔ Gamɛi ahiɛ',

choice1: 'asafoiatsɛ',
choice2: 'maŋtsɛ',
choice3: 'otsaame',
choice4: 'wulɔmɔ',
answer: 4,
},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n titrii ji……',

choice1: 'maŋkuramɔ',
choice2: 'maŋhebuu',
choice3: 'kpeetsɛmɔ',
choice4: 'ŋkpaiyeli',
answer: 1,

},
 {

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n jeee…..',

choice1: 'mlifu',
choice2: 'haomɔ',
choice3: 'abui',
choice4: 'afu',
answer: 4,
},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Humi egbɛɛɛ…..gbɛɛmɔ',

choice1: 'wuɔ',
choice2: 'shwuɔ',
choice3: 'gbee',
choice4: 'alɔnte',
answer: 2,

},
{
 

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Gbɔbilɔ lee kooloo……',

choice1: 'yaafolɔ',
choice2: 'helatsɛ',
choice3: 'gidigiditsɛ',
choice4: 'anihaolo',
answer: 2,
 },
 {


question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n yɛ daa nɛɛ enyɛ ehɛ nɔ',

choice1: 'dadesɛŋ',
choice2: 'goga',
choice3: 'klopɔɔtu',
choice4: 'kukwɛi',
answer: 1,

 },
{

question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n N? ko y?, k? otsu l? l? eyaaa shi k? ooya p? enyi? os??.',

choice1: 'Tsul?',
choice2: 'Susuma',
choice3: 'Gbek?',
choice4: 'Bi',
answer: 2,
 },
 {

 
question: 'Gbee wiem?muji l? at?? eko f?? eko naa k? hetoo ni ja fe f??\n\n Ashi) otofo y3 osu k3',
choice1: 'As3r3',
choice2: 'Otublohu?',
choice3: 'Gbese',
choice4: 'Abola',
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
