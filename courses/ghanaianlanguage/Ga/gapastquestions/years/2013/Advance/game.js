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
	

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Gamɛi asateŋ lɛ, gbɛkɛ ŋamɔ ji…',

choice1: 'ŋnaokoo',
choice2: 'ojekoo',
choice3: 'oshwiee',
choice4: 'yaawɔ',
answer: 3,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Gbi ni nyiɛ kɔyeli gbi lɛ sɛɛ lɛ, Gamɛi ŋaa amɛhe…..',

choice1: 'ŋɔɔwala',
choice2: 'nyɛ nyɛtsu nɔ',
choice3: 'oje okoŋŋ',
choice4: 'shidaa ji onɔ',
answer: 1,
},
{
 
question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n   Kpaanyɔ anina wɔ. Wɔye afii nyɔŋmai…',
choice1: 'ekpaa',
choice2: 'enumɔ',
choice3: 'kpaanyɔ',
choice4: 'kpawo',
answer: 3,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Afi ŋamɔ mli wiemɔ, “alɔnte diŋ ko akafo wɔteŋ”, tsɔɔ akɛ…..',

choice1: 'wɔkawie',
choice2: 'wɔkabe',
choice3: 'wɔkanu nu',
choice4: 'wɔkaye nii',
answer: 2,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Te atsɛɔ bi nuu ni afɔ yɛ kuayeli mi tɛŋŋ ?',

choice1:'Ahia',
choice2: 'Antobam,',
choice3: 'Tsintɔ',
choice4: 'Doko',
answer: 4,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Atsɛɔ lɛ Ajete Badu, ejaakɛ lɛ ji bi ni ji..',
choice1: 'kpaanyɔ',
choice2: 'kpawo',
choice3: 'nɛɛhu',
choice4: 'nyɔŋma',
answer: 4,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Atsɛɔ lɛ Oko, afɔ lɛ kɛ enyɛmi yoo..',

choice1: 'Akuɔkɔ',
choice2: 'Akwele',
choice3: 'Tawia',
choice4: 'Ago',
answer: 2,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Abɛɛɛ tsu mli gbɛkɛ ni aloo jwɛi ayashwie, no lɛ…..',

choice1: 'obaaye ohia',
choice2: 'afi ninaŋ bo',
choice3: 'obaana sisa',
choice4: 'omusuŋbaakɔbo',
answer: 1,
},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Ajɛɛɛ onukpa, no lɛ……….',

choice1: 'obaagbo',
choice2: 'obaana shika',
choice3: 'onyɛ baagbo',
choice4: 'otsɛ baagbo',
answer: 1,
},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Ataaa latɛ nɔ, no lɛ…………..',

choice1: 'ebaagwao bo',
choice2: 'ebaata onɔ',
choice3: 'obaaye sɛkɛ',
choice4: 'omusuŋbaakɔ bo',
answer: 2,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Te atsɛɔ gbonyo hejuu nibii anaabuamɔ lɛ tɛŋŋ?',

choice1: 'Niiaŋkwɛmɔ',
choice2: 'Saisramɔ',
choice3: 'Kotsagbamɔ',
choice4: 'Tsɛrɛgbamɔ',
answer: 3,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Kɛji otee yara nɔ ni abu mama yɛŋ lɛ, etsɔɔ akɛ mɔ ni gbo lɛ……',

choice1: 'gbekɛ ni',
choice2: 'oblanta ni',
choice3: 'oblanyo ni',
choice4: 'nuumo ni',
answer: 4,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Shika ni agbaa ahaa wekumɛi ni akɛwoɔ gbonyo lɛ he nyɔji ni abɔ lɛ ji….',

choice1: 'afɔle',
choice2: 'fuu',
choice3: 'kɛtɛ',
choice4: 'tɛ',
answer: 2,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Nitsuru yɛ yara ko nɔ tsɔɔ akɛ mɔ ni gbo lɛ…….….',

choice1: 'gbɔ ni',
choice2: 'maŋnyo ni',
choice3: 'omaŋfo ni',
choice4: 'lumɔ ni',
answer: 4,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Aashia yarafeemɔ mli lɛ, ashɛ wekumɛi komɛi ayitsɔi, no tsɔɔ akɛ…',

choice1: 'enabii ji amɛ',
choice2: 'ebii ji amɛ',
choice3: 'enanemɛi ji amɛ',
choice4: 'ewekumɛi ji amɛ',
answer: 1,
},
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Atuɔ ayɛmforo ahaa………',
choice1: 'ewu lɛ nyɛmi yoo',
choice2: 'ewu lɛ nyɛmi nuu',
choice3: 'ewusɛɛ nuu nukpa',
choice4: 'ewusɛɛ yoo nukpa',
answer: 4,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Te nibii nɛɛ ateŋ nɔ ni haa gbala sɔɔ lɛ?',

choice1: 'Subaŋ kpakpa',
choice2: 'Ayɛkpɛmɔ',
choice3: 'Ajwamaŋbɔɔ',
choice4: 'Juu',
answer: 1,
},
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Shika ni ahaa yoo ni ekɛheɔ egbala mli nibii ji…...',
choice1: 'agboshimɔ',
choice2: 'kplɛmɔ',
choice3: 'gbalanii',
choice4: 'shibimɔ',
answer: 2,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Daa ni nuu haa ena wekumɛi, kɛtoɔ amɛ taflatsɛ ji….',

choice1: 'fɔmɔ daa',
choice2: 'shitaralɔi adaa',
choice3: 'shabi daa',
choice4: 'kplɛmɔ daa',
answer: 4,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Ajei yakɔ dunsa yɛ Ashite ŋɔɔ ejaakɛ….',

choice1: 'ekɛ ebi gba sane',
choice2: 'etsɛ ebi lɛ',
choice3: 'ekɛ eŋa na bɔlɛ',
choice4: 'egwao eŋa lɛ',
answer: 3,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Mɛni hewɔ biyoo yeee tsɛ nii yɛ tsɛ lɛ gbele sɛɛ?',

choice1: 'Ebaaha enyɛ eko',
choice2: 'Enyɛŋ nɔ ekwɛ',
choice3: 'Ejeee egbɛnaa ni',
choice4: 'Ekɛbaaya shia kroko',
answer: 4,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Gbɔmɛi nɛɛ ateŋ namɔ yɔɔ hegbɛ yɛ tsɛ niyeli nɔ?',

choice1: 'Bi',
choice2: 'Nyɛkwɛ',
choice3: 'Nyɛmi',
choice4: 'Tsɛkwɛ',
answer: 1,
},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Namɔ woɔ ebi gbɛi?',

choice1: 'Nyɛ',
choice2: 'Shaanuu',
choice3: 'Tsɛ',
choice4: 'Shaayoo',
answer: 3,

}, 
 {

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Ajuɔ gbonyo he yɛ…..',

choice1: 'enaanyo shia',
choice2: 'enanemɛi awe',
choice3: 'enyɛmɛi awe',
choice4: 'etsɛmɛi awe',
answer: 4,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Asaa gbonyo afɔɔ shi yɛ ……',

choice1: 'enaamɛi awe',
choice2: 'enyɛmɛi awe',
choice3: 'eshia asa nɔ',
choice4: 'etsɛmɛi awe',
answer: 4,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Otsaam?tso ni otsaam? hi?? k?nyi?? ma?ts? hi? k?yaa kpee ts?? ak?',

choice1: 'eji hefatalɔ',
choice2: 'eji ŋaawolɔ',
choice3: 'eji naawielɔ',
choice4: 'eji sɛɛkwɛlɔ',
answer: 3,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Kla ji mɔ ni …yɛ gwabɔɔ mli',

choice1: 'taa maŋtsɛ hiɛ',
choice2: 'damɔɔ maŋtsɛ hiɛ',
choice3: 'nyiɛɔ maŋtsɛ hiɛ',
choice4: 'wieɔ maŋtsɛ hiɛ',
answer: 1,
},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Akatamanso kpojiemɔ tsɔɔ mɛi akɛ maŋ lumɔ ko….',

choice1: 'miiya maŋ ko nɔ',
choice2: 'miiye efɔmɔgbi',
choice3: 'yataa shi yɛ gwabɔɔ mli',
choice4: 'miiwie yɛ gwabɔɔ mli',
answer: 3,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Atswa ŋoŋo yɛ Tɛshi, no tsɔɔ….',

choice1: 'gbɛmlilaa',
choice2: 'adafitswaa',
choice3: 'ŋmaadumɔ',
choice4: 'shihɛlemɔ',
answer: 2,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Nitsumɔ dade ni akɛkɔɔ la yɛ sɔŋmɛ shishi ji……',

choice1: 'afoto',
choice2: 'abɛɛle',
choice3: 'hamlɛ',
choice4: 'papa',
answer: 2,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Hulɔ nitsumɔ dade ni eshwɛɛɛ he kwraa ji……..',
choice1: 'klante',
choice2: 'aklomia',
choice3: 'akofi',
choice4: 'kɛntɛŋ',
answer: 1,
},
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Tsu ko ni hulɔ kpaa ŋmɔshi nibii toɔ mli ji…...',
choice1: 'aboŋo',
choice2: 'ablanaa',
choice3: 'akrowa',
choice4: 'asese',
answer: 1,
},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Olotɔ ji he ni gbɔbilɔ….yɛ',

choice1: 'taa shi',
choice2: 'tumɔɔ',
choice3: 'huɔ',
choice4: 'gbeɔ kooloi',
answer: 4,

},
 {

 
question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n   Yitso taaa shi ni nakutso abu fai',
choice1: 'Onukpa taaa shi ni agwao mɔ ko',
choice2: 'Onukpa taaa shi ni awie yɛ ehiɛ',
choice3: 'Onukpa taaa shi ni awo gbekɛ maŋtsɛ',
choice4: 'Onukpa taaa shi ni ashwɛ yɛ ehiɛ',
answer: 3,

},
 {

 
question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n   Kaa fɔɔɔ loofɔlɔ',
choice1: 'Bi subaŋ tamɔ fɔlɔ subaŋ',
choice2: 'Bɔ ni obiɔ lɛ nakai ahaa bo',
choice3: 'Bɔni otsuɔ lɛ nakai nyɔmɔwoo onaa',
choice4: 'Bi he fɛo tamɔ fɔlɔ he fɛo',
answer: 1,
},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Koo ni here bo lɛ otsɛɛɛ lɛ ko osha',

choice1: 'Amimyeli',
choice2: 'Trumufeemɔ',
choice3: 'Tsuishitoo',
choice4: 'Woo',
answer: 2,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Fiofio adɔdɔŋ fee ekɛye gbee toi',

choice1: 'Ekomefeemɔ',
choice2: 'Heshibaa',
choice3: 'Mɔwamɔ',
choice4: 'Tsuishitoo',
answer: 4,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Ŋkpaiyeli ji Gamɛi…….',

choice1: 'ahetsuumɔ',
choice2: 'asɔlemɔ',
choice3: 'akusumfeemɔ',
choice4: 'atsɔsemɔ',
answer: 2,

},
 {

 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Daa kɛ tɔ ni daawolɔ lɛ kɛsaa ŋkpaiyelɔ lɛ glase lɛ naa shii etɛ lɛ tsɔɔ…..',
choice1: 'hewalɛ',
choice2: 'hewoo',
choice3: 'gbɛŋmɛɛ',
choice4: 'woo',
answer: 3,

}, 
{
 

question: 'Ha saji ni abibii nɛɛ fɛɛ ahetoo,\n\n  Mɔ ni yeɔ ŋkpai lɛ jieɔ etokota kɛtsɔɔ…..',

choice1: 'agbojee',
choice2: 'hewalɛ',
choice3: 'nɔyeli',
choice4: 'bulɛ',
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
