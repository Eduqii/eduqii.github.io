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
	
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Nuu ni fɔ mitsɛ lɛ, mi………..ni.',

choice1: 'nana kansoa',
choice2: 'nanshishiu',
choice3: 'naa',
choice4: 'nii',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Minyɛmi yoo bi lɛ, efeɔ mi….',

choice1: 'wu',
choice2: 'ŋa',
choice3: 'bi',
choice4: 'nii',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Mistɛ nyɛmi yoo lɛ, efeɔ mi…..',

choice1: 'nyɛkwɛ',
choice2: 'nyɛ',
choice3: 'naa',
choice4: 'nii',
answer: 1,

},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Minaa ji Awo Afole ejaakɛ minyɛ….ji lɛ.',

choice1: 'naa',
choice2: 'nyɛ',
choice3: 'nyɛŋkpa',
choice4: 'nyɛfio',
answer: 2,
 },
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Ataa Adjei nyɛmi ji minaa hewɔ lɛ efeɔ mi….',

choice1: 'nii dadaa',
choice2: 'nii kansoa',
choice3: 'nii',
choice4: 'nuumo',
answer: 3,

},
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Miŋa nyɛmi nuu lɛ ji mi…..',

choice1: 'wu',
choice2: 'shabi',
choice3: 'shieŋtsɛ',
choice4: 'wu',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Bi nuu kɛ bi yoo nyɛŋ amɛbote gbalashihilɛ mli ejaakɛ …. ji amɛ',

choice1: 'nyɛmimɛi',
choice2: 'nanemɛi',
choice3: 'shieŋtsɛmɛi',
choice4: 'wekumɛi',
answer: 1,
}, {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Amɛɛle yɛ bi kome dani ekɛ Ataa Sowa hi shi, hewɔ lɛ Ataa Sowa……ji eŋa bi lɛ.',

choice1: 'banuma',
choice2: 'bi',
choice3: 'naanyo',
choice4: 'wekunyo',
answer: 1,

},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Namɔ ji mɔni kwɛɔ tsɛsɛɛ kɛji ebɛ ?',

choice1: 'eshieŋtsɛ',
choice2: 'eŋa',
choice3: 'enaanyo bi',
choice4: 'ebinuu nukpa',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Biyoo yeee etsɛ nii ejaakɛ….',

choice1: 'ewako tsɛ kɛtsu nii',
choice2: 'esumɔɔɔ etsɛ nibii',
choice3: 'ekɛ nibii lɛ baaya shia kroko',
choice4: 'ejeee suɔmɔ bi',
answer: 3,

},
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Gboshinii jaa mli lɛ…..ji mɔ ni yɔɔ hewalɛ.',

choice1: 'binuu',
choice2: 'ŋa',
choice3: 'shieŋtsɛ',
choice4: 'wekunukpa',
answer: 4,
 },
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Ataa Kwei ye Ataa Sowa nijaa he odase ejaakɛ…..',

choice1: 'amɛtee skul kome',
choice2: 'amɛyaa sɔlemɔ kome',
choice3: 'nyɛmimɛi ji amɛ',
choice4: 'nitsulɔi ji amɛ',
answer: 3,

},
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Awoɔ maŋtsɛ lɛ bi nukpa yɛ esɛɛ ejaakɛ',

choice1: 'egbɛnaa ni',
choice2: 'efɔɔ nibii ahe',
choice3: 'esumɔɔ esane',
choice4: 'etsɔɔ lɛ nitsumɔ',
answer: 1,

},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Bi fɛɛ bi yɛ gbɛfaŋ nɔ yɛ etsɛ gboshinii anɔ ejaakɛ……',

choice1: 'egbɛnaa ni',
choice2: 'enibii ni',
choice3: 'ewa etsɛ kɛhe',
choice4: 'ehe eha etsɛ lɛ',
answer: 1,
}, {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Ayeɔŋ kpai yɛ gboshinii jaa he kɛtsɛɔ….',

choice1: 'nitsulɔi',
choice2: 'sisai',
choice3: 'polisifoi',
choice4: 'wekumɛi',
answer: 2,
 },
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Te niyenii ateŋ nɔ ni ayeɔ kɛji eshɛ Hɔmɔwɔ lɛ….',

choice1: 'Akpliji',
choice2: 'Ataŋ',
choice3: 'Kɔmi',
choice4: 'Kɔ',
answer: 4,
 },
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Maji nɛɛ ateŋ ekome mlibii shiɔ Obene',

choice1: 'La',
choice2: 'Nuŋua',
choice3: 'Osu',
choice4: 'Tɛma',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Gamɛi yeɔ Hɔmɔwɔ, nakai nɔŋŋ Adamɛi yeɔ……',

choice1: 'Asafotufiam',
choice2: 'Hogbɛtsotso',
choice3: 'Kundum',
choice4: 'Odwira',
answer: 1,
}, {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Hɔmɔwɔ shishi ji….',

choice1: 'niyenii shwamɔ',
choice2: 'niyenii hamɔ',
choice3: 'hɔmɔwɔlɔi agbi',
choice4: 'hɔmɔ yiwɔmɔ',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Kɔgbamɔ shishi ji',

choice1: 'yɛlɛshimɔ',
choice2: 'otɔshimɔ',
choice3: 'kpokpoihoomɔ',
choice4: 'fotolihoomɔ',
answer: 3,

},
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Alɔnte diŋ ko akafo wɔteŋ shishi ji…',
choice1: 'wɔkatsu nii',
choice2: 'wɔkaye nii',
choice3: 'bei akaba wɔteŋ',
choice4: 'nyɔmɔ akaba wɔnɔ',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Afeee hoo Hɔmɔwɔ beiaŋ ejaakɛ…….',

choice1: 'ayaa wuo',
choice2: 'ama kɔmfɛ',
choice3: 'adu ŋmaa',
choice4: 'aaye afi',
answer: 3,

},
{
 
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Ghana gbii juji lɛ ekomɛi nɛ bɛja…..',
choice1: 'Afuabe 25',
choice2: 'Afuabe 26',
choice3: 'Otsokrikri 6',
choice4: 'Ofl? 24',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Ghana heyeli lɛ kaimɔ gbi ji…..',

choice1: 'Otsokrikri 6',
choice2: 'Oflɔ 24',
choice3: 'Afuabe 24',
choice4: 'Agbiɛnaa 16',
answer: 1,

},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Tsutsu ko lɛ Gamɛi kaneɔ amɛnyɔji lɛ kɛyashiɔ….',

choice1: 'nyɔŋma kɛ ejwɛ',
choice2: 'nyɔŋma kɛ etɛ',
choice3: 'nyɔŋma',
choice4: 'nɛɛhu',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Nyɔɔŋ ko gbɛi ji Otsokrikri ejaakɛ…',

choice1: 'nugbɔ nɛɔ waa',
choice2: 'hulu tsoɔ waa',
choice3: 'fɛi yeɔ waa',
choice4: 'abɛi baa waa',
answer: 2,
 },
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Atsɛɔ nyɔɔŋ ni ji nyɔŋma lɛ akɛ Antɔŋ. No tsɔɔ…',

choice1: 'hulu ko gbɛi',
choice2: 'nyɔɔŋtsere ko gbɛi',
choice3: 'ŋulami ko gbɛi',
choice4: 'tsei komɛi agbɛi',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Tsɔɔmɔ wiemɔ nɛɛ shishi: “Okwaafoi alatsaa”',

choice1: 'shiaa baa babaoo',
choice2: 'hulu tsoɔ waa',
choice3: 'kooloi pii baa',
choice4: 'nu nɛɔ ŋwɛtɛŋwɛtɛ',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Afuabe ji nyɔɔŋ ko ko ni….',

choice1: 'afua woɔ',
choice2: 'fɛi yeɔ',
choice3: 'hulu tsoɔ',
choice4: 'nu nɛɔ',
answer: 1,
}, {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Omama mli……',

choice1: 'ejeee fu kɛkɛ',
choice2: 'gbulɔɔ fɔji',
choice3: 'jeɔ fu',
choice4: 'ŋmoŋ kɔɔ bo',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Mɔ ko nɔ leebi ni mɔko nɔ gbɛkɛ….',

choice1: 'swane',
choice2: 'gbɛkɛ',
choice3: 'maŋkɛ',
choice4: 'nyɔɔŋteŋ',
answer: 2,
 },
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Bi ni nuɔ nii lɛ …..',

choice1: 'ayeee abuaaa lɛ',
choice2: 'atsuuu lɛ',
choice3: 'akɛ lɛ ewieee pii',
choice4: 'abiii lɛ saji pii',
answer: 3,

},
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Fiofio adɔdɔŋ fee ekɛye gbee toi….',

choice1: 'tsuishitoo',
choice2: 'trumufeemɔ',
choice3: 'mɔwamɔ',
choice4: 'woo',
answer: 1,

},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Koo ni here bo lɛ otsɛɛɛ lɛ koo sha…..',

choice1: 'waajwaa',
choice2: 'trumufeemɔ',
choice3: 'heshibaa',
choice4: 'aminyeli',
answer: 2,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Gamɛi eyaa wuo daa……………',

choice1: 'Ju',
choice2: 'Jufɔ',
choice3: 'Soo',
choice4: 'Sohaa',
answer: 2,
 },
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Blema ko lɛ ……….hoo kpokpoi ema shi eha Gamɛi.',

choice1: 'Nae Wulɔmɔ',
choice2: 'Gbɔbu Wulɔmɔ',
choice3: 'Kɔɔle',
choice4: 'La Kpa',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Hemɔkɛyeli ko yɛ akɛ Gamɛi jɛ…..',

choice1: 'Burkina Faso',
choice2: 'Cote d’Ivoire',
choice3: 'Isreal',
choice4: 'Niger',
answer: 3,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Mɛni hewɔ afeee hoo kɛji adu ŋmaa lɛ? Aheɔ ayeɔ akɛ…..',

choice1: 'gbɔi ayi efa yɛ maŋ lɛ mli',
choice2: 'onukpai lɛ efa gbɛ',
choice3: 'onukpai lɛ ewɔ',
choice4: 'sisai eba maŋ lɛ mli',
answer: 4,
},
 {

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n “Mita nyɛ loo mikata nyɛ” yɛ adesa-tamɔ mli tsɔɔ….',

choice1: 'mlifoo',
choice2: 'naagbe',
choice3: 'nɔheremɔ',
choice4: 'toinɔwomɔ',
answer: 4,
 },
 {

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Enɛmɛi fɛɛ tsɔɔ nikasemɔ ni anaa kɛjɛɔ adesatamɔ mli, bɛja…..',

choice1: 'miishɛɛ hi',
choice2: 'anihaofeemɔ ehiii',
choice3: 'fuufeemɔ ehiii',
choice4: 'heshibaa hi',
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
