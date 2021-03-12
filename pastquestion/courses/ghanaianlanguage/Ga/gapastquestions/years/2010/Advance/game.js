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


question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Blema lɛ………ŋmaa mɔ',

choice1: 'gbekɛ',
choice2: 'maŋtsɛ',
choice3: 'onukpa',
choice4: 'yoomo',
answer: 1,
 },
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Onukpa aŋamɔ kɛha oblahii kɛ oblayei shwane kɛ gbɛkɛ ji',

choice1: 'Aenyɛkoo',
choice2: 'Ntanyɛntanyɛ',
choice3: 'Nyɛmaŋ nii',
choice4: 'Nyɛwɔŋ',
answer: 3,
 },
 {
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Gamɛi yɛ gbɛi kui …………ni amɛdamɔɔ nɔ amɛkɛwoɔ abifabii agbɛi',
choice1: 'enumɔ',
choice2: 'ekpaa',
choice3: 'kpawo',
choice4: 'nɛɛhu',
answer: 2,
 },
 {

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Yɛ abifao kpojiemɔ mli lɛ, kɛji mɔ ni jieɔ lɛ kpo lɛ kɛ ewao sa ŋmaadaa mli kɛsa abifao lɛ lilɛi nɔ nɔ lɛ, no tsɔɔ akɛ……………',

choice1: 'eegba lɛ blema saji',
choice2: 'eeha lɛ ŋmaadaa',
choice3: 'eesɔle eha lɛ',
choice4: 'eewo enaa afata',
answer: 4,
 },
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Gbobalɔi agbɛi sɔŋŋ nɛ bɛja……..',

choice1: 'Aleenɔ',
choice2: 'Antoban',
choice3: 'Kwandahɔ',
choice4: 'Namɔale',
answer: 4,
},
 {

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Kɛji ato maŋtsɛ hee lɛ ajieɔ lɛ kpo atsɔɔ Nii Ga kɛ majiatsεmεi krokomɛi kɛ maŋbii fɛɛ yɛ……',

choice1: 'Amuginaa',
choice2: 'Maŋtsɛ Agbonaa',
choice3: 'Kɔɔlenaa',
choice4: 'Naewe',
answer: 1,
 },
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Yɛ kitashaa mli lɛ',

choice1: 'apaiɔ mɛi asablai',
choice2: 'atsɛɔ mɛi ablɔfo gbɛii',
choice3: 'atsɛɔ mɛi agbɛii kpeŋ',
choice4: 'awoɔ mɛi gbɛi hee',
answer: 1,
},
 {

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Maŋtsɛ hiɛɔ …….kɛshaa kita',

choice1: 'akatamanso',
choice2: 'kplebi',
choice3: 'otsaamɛ tso',
choice4: 'tsi',
answer: 4,
},
 {

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Esaaa akɛ gbekɛ yoo ni boteko gbala mli….',
choice1: 'baa nii',
choice2: 'buɔ mama shishi kɛ ŋwɛi',
choice3: 'woɔ atade shrɔlɔɔ',
choice4: 'yeɔ fotoli',
answer: 2,
 },
{
 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Kusum ni gbeɔ gbalamlibotemɔ naa ji…..',
choice1: 'agboshimɔ',
choice2: 'gbalanihamɔ',
choice3: 'kpeemɔ',
choice4: 'sɛɛnihamɔ',
answer: 3,
 },
 {

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Anyɛɔ adamɔɔ enɛ nɔ aguɔ gbala',

choice1: 'bɛɛmɔ',
choice2: 'fɔmɔ',
choice3: 'nihoomɔ',
choice4: 'suu',
answer: 4,
},
 {

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Hɔmɔwɔ beiaŋ lɛ Gamɛi yeɔ kpokpoi kɛ…….wonu.',

choice1: 'eŋmɔmi',
choice2: 'ŋkatiɛ',
choice3: 'ŋme',
choice4: 'sɛbɛ',
answer: 3,
 },
{
 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Tɛshimɛi sumɔɔ ….lalai',
choice1: 'amlakui akpa',
choice2: 'kpasɔɔ kpa',
choice3: 'kpelekemɔ kpa',
choice4: 'yijiemɔ kpa',
answer: 2,
 },
 {

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Afeɔ …….. kusum yɛ Ga Mashi kɛgbeleɔ gbɛ kɛhaa miyii kɛ hoofeemɔ',

choice1: 'gbɛmlilaa',
choice2: 'ŋmaadumɔ',
choice3: 'odadao',
choice4: 'shidaa',
answer: 3,
},
 {

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Gamɛi …..kɛhaa lɛ kpoo..',

choice1: 'fuaa gbonyo',
choice2: 'juɔ gbonyo he',
choice3: 'nyɔɔ gbonyo nɔ',
choice4: 'saa gbonyo',
answer: 3,
},
 {

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Kɛji mɔ ko gbo ni mɛi bumɔ mama yɛŋ yɛ yara lɛ nɔ lɛ, etsɔɔ akɛ mɔ ni egbo lɛ …..ni.',

choice1: 'Asafoiatsɛ',
choice2: 'Banuma',
choice3: 'Gbekɛ',
choice4: 'Haajianyɛ',
answer: 4,
 },
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Okwaafonyo to?nii ni ekpa y?……….mli.',

choice1: 'aboŋo',
choice2: 'agba',
choice3: 'sɛɛtsu',
choice4: 'shia',
answer: 1,
 },
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Kusum naa lɛ …………..ji mɛi ni kaneɔ gbii lɛ yɛ Gamɛi asateŋ',

choice1: 'Agbaafoi',
choice2: 'Ŋoŋotswalɔ',
choice3: 'Osɔfo',
choice4: 'Wulɔmɛi',
answer: 4,
},
 {

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Anaa enɛ kɛjɛɔ gbɔbilɔ nitsumɔ mli',

choice1: 'kɔi',
choice2: 'milɛ',
choice3: 'samfɛlɛ',
choice4: 'yɛlɛ',
answer: 2,
},
 {

 
question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Mɛni hiɛ nyam gbɛi Gamɛi kɛwoɔ nyɛ ?',

choice1: 'Awo',
choice2: 'Mami',
choice3: 'Naa',
choice4: 'Nanaa',
answer: 1,
 },
{
 
question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Mɛni ji wiemɔ ni daawolɔ kɛmuɔ enitsumɔ naa yɛ bɛgwafoi ateŋ ?.',
choice1: 'daa lɛ fɛɛ eta',
choice2: 'migbe nitsumɔ lɛ naa',
choice3: 'mijie minine yɛ nii lɛ he',
choice4: 'wɔ hu be ni',
answer: 3,
},
 {

 
question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Mɛɛ be mli Gamɛi ŋaa amɛhe ŋɔɔwala?',
choice1: 'gbalamlibotemɔ',
choice2: 'Hɔmɔwɔ',
choice3: 'kpojiemɔ',
choice4: 'yarafeemɔ',
answer: 2,
 },
{
 

question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Mɛɛ gbi krɛdɛɛ nɔ Gamɛi yeɔ haaji ayɛlɛ?',

choice1: 'Hɔɔ',
choice2: 'Jufɔ',
choice3: 'Shɔ',
choice4: 'Sohaa',
answer: 4,
},
 {

 

question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Tsɔɔmɔ gbɛi pɔtɛɛ ni akɛwoɔ binuu ni baa biyei enyɔ asɛɛ loo biyoo ni baa yɛ bihii enyɔ asɛε lɛ.',
choice1: 'Awudu',
choice2: 'Kɛenɛale',
choice3: 'Obuaba',
choice4: 'Tsintɔ',
answer: 4,
 },
{
 
question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Te jeŋ feɔ tɛŋŋ Aharabata beiaŋ ?',
choice1: 'Fɔfɔi kwɛɔ',
choice2: 'Jeŋ dɔɔ',
choice3: 'Shikpɔŋ gbiɔ',
choice4: 'Tsui kumɔɔ',
answer: 3,
},
 {

 

question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Ŋulamii bibii enyiɛ yɔɔ otukwajaŋ ŋulami agbo lɛ he ?',

choice1: 'Enumɔ',
choice2: 'Ekpaa',
choice3: 'Kpaanyɔ',
choice4: 'Nyɔŋma',
answer: 1,
},
 {

 

question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Gbɛi Antɔŋ ni akɛwo October lɛ, mɛni gbɛi ni ??',

choice1: 'Fɔfɔi',
choice2: 'Ŋulami',
choice3: 'Su',
choice4: 'Tso',
answer: 2,
},
 {

 

question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n M?ni okadi ak? laitsei eny? to? y? tawuu mli ?',

choice1: 'Hefɛoyeli',
choice2: 'Henɔwomɔ',
choice3: 'Heshifɔɔ',
choice4: 'Mlilawoo',
answer: 3,
},
 {

 
question: 'Tsɔɔmɔ saji ni abibii lɛ ateŋ eko fɛɛ eko hetoo ni yɔɔ hetoi ni aha lɛ mli\n\n Kɛji mɔ ko kɛ bɛlɛo fi yɛli tso ko lɛ mɛni no tsɔɔ ? ',
choice1: 'Faikpamɔ',
choice2: 'Gbɛŋmɛɛ',
choice3: 'Hɔɔ mɔ',
choice4: 'Naatsii',
answer: 4,
},
 {

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Alee mɔ ni……………',

choice1: 'ewɔ',
choice2: 'fuɔ mɔ',
choice3: 'gbeɔ mɔ',
choice4: 'tsuɔ nii',
answer: 2,
 },
{
 
question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Kɛji oleee gbele le saramɔ…....',
choice1: 'gbonyo',
choice2: 'too',
choice3: 'wɔ',
choice4: 'yalai',
answer: 3,
},
 {

 

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Enɔ too ji……..',

choice1: 'kpo',
choice2: 'pii',
choice3: 'saŋŋ',
choice4: 'vii',
answer: 1,
},
 {

 

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Mɔni taa adesa gbeɔ edasatamɔ lɛ naa kɛ wiemɔ nɛɛ…………',

choice1: 'anaanu miishɛre bɛlɛ',
choice2: 'gbi lɛ miyɛ jɛmɛ',
choice3: 'mikɛta ashimashi toi asɛɛ',
choice4: 'mita nyɛ loo mikata nyɛ',
answer: 3,
},
 {

 
question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n desa yɛ hei nɛɛ bɛja',

choice1: 'faa mli',
choice2: 'hejuuuhe',
choice3: 'ŋmɔ mli',
choice4: 'yara nɔ',
answer: 4,
},
 {

 

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Mɔ ko yɛ daa nɛɛ ewo……atade',

choice1: 'dade',
choice2: 'odonti',
choice3: 'sliki',
choice4: 'wolo',
answer: 1,
 },
{
 

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Ataa Oblanyo ei! Lɛ nɔŋŋ, Nɛgbɛ…..?',
choice1: 'eho',
choice2: 'etee',
choice3: 'eyaa',
choice4: 'eyɔɔ',
answer: 2,
},
 {

 

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Mɛɛ be mli alaa ketia dɔmpɔli lala lɛ',
choice1: 'hiianifeemɔ mli',
choice2: 'kpashimɔ mli',
choice3: 'nisɔɔ mli',
choice4: 'shwɛmɔ mli',
answer: 1,
 },
{
 

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Owula………ŋma ewo Afrikan Society wolo mli akɛ Ga Jaku yɛ jeeŋmɔ dani Nii Ayi Kushi gbɛi he shi',
choice1: 'Ako Adjei',
choice2: 'Bɔtɛi Doku',
choice3: 'E. N. Omaboe',
choice4: 'A.B. Quartey-Papafio',
answer: 4,
 
},
 {

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n aŋtsɛ ni wo Ga Jaku sɛi kɛtee Anɛhɔ ji',

choice1: 'Nii Ama (1560 – 1585)',
choice2: 'Nii Ashaŋmɔ (1660 – 1680)',
choice3: 'Nii Ofoli Tibo (1733 – 1739)',
choice4: 'Nii Tɛiko Tsuru (1782 – 1787)',
answer: 2,
},
 {

 

question: 'Gbee wiemɔmuji nɛɛ eko fɛɛ eko naa\n\n Gbala ni ji gbala l3……….l3',

choice1: 'afiteee',
choice2: 'aheee',
choice3: 'akaaa',
choice4: 'asaaa',
answer: 1,
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
