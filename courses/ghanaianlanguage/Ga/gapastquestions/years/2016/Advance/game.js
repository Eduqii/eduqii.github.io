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

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Ŋamɔ “Awɔn” lɛ onukpai kɛŋaa gbekɛbii …………… mli',


choice1: 'shwane',
choice2: 'maŋkɛ',
choice3: 'leebi',
choice4: 'gbɛkɛ',
answer: 3,
},
{ 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Aŋaa yoo ni efɔ bi ŋmɔŋ akɛ ………………',


choice1: 'onine nɔ ayilɔ',
choice2: 'ole fɔmɔ diɛŋtsɛ',
choice3: 'ohe esa jogbaŋŋ',
choice4: 'obɔ mɔdɛŋ naakpa',
answer: 1,
 },
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Nuu ni afɔ lɛ Jufɔ lɛ egbi gbɛi ji……',


choice1: 'Kwaku',
choice2: 'Kwabla',
choice3: 'Kwami',
choice4: 'Kwashi',
answer: 2,
},
{ 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Fɔmɔnaatoo gbɛi ni yɔɔ biɛ ji …………….',


choice1: 'Aba',
choice2: 'Bɔtɛi',
choice3: 'Namɔale',
choice4: 'Odiko',
answer: 4,
},
{
 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Te wiemɔi nɛɛ ateŋ nɔ ni ja fe fɛɛ ni tsɔɔ tsakpaa ni ka Aafio Ababio biyei enyɔ lɛ awumɛi atɛŋ?',


choice1: 'Bienyɛmɛi',
choice2: 'Nikulafoi',
choice3: 'Shabimɛi',
choice4: 'Tipɛŋfoi',
answer: 2,
},
{
 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Tsɔɔmɔ mɔ ni Ataa Okwei ji kɛha enii tsɛ papa papa',


choice1: 'Ebi',
choice2: 'Edadao',
choice3: 'Ekɔkrɔdɔ',
choice4: 'Emuu',
answer: 2,
},
{ 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Tsɔɔmɔ tsakpaa ni yɔɔ Kote kɛ enyɛmi yoo Kuɔko bi tɛŋ.',

choice1: 'banuma bi kɛ kurafa bi',
choice2: 'nuu bi kɛ yoo bi',
choice3: 'shabimɛi abii',
choice4: 'wɔfaasei abii',
answer: 2,
},
{
 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Te nibii ni ahiɔ nɛɛ ateŋ nɔ ni abaanyɛ akɛwo aahi ni akɛbaa nii ayi shishi lɛ ?',


choice1: 'ashamɔɔ ashwieee la nɔ',
choice2: 'alaaa kɛji aaju he',
choice3: 'abɛɛɛ tsuŋ gbɛkɛ',
choice4: 'akɛ niji shwɛɛɛ shikpɔŋ',
answer: 1,
},
 {

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Gamɛi asateŋ lɛ, kɛji mɔ ko gbo lɛ afeɔ eyara yɛ………',

choice1: 'efɔlɔi awe',
choice2: 'emamimɛi awe',
choice3: 'enaamɛi awe',
choice4: 'etsɛmɛi awe',
answer: 4,
},
{ 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Mɛni kusum daa akɛfeɔ yara ?',


choice1: 'wiski',
choice2: 'shinapu',
choice3: 'jin',
choice4: 'akpɛtɛshi',
answer: 2,
},
{
 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Ashiɔ kpokpoafonyo otofo koni……',

choice1: 'ele yihɔɔ diɛŋtsɛ',
choice2: 'ena nitsumɔ etsu',
choice3: 'etsɔ yoo kpakpa',
choice4: 'eye jara jogbaŋŋ',
answer: 3,
},
{

 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Mɛɛ nifeemɔ he ehiaaa yɛ otofoshii mli ?',

choice1: 'Wuhamɔ',
choice2: 'Nikee',
choice3: 'Jootsɔɔmɔ',
choice4: 'Akayeli',
answer: 1,
},
 {

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Ha mɔkwɛmɔnɔ kome ni tsɔɔ akɛ bei wulu yɛ nuu kɛ eŋa teŋ',

choice1: 'Ŋmɔ mli ni ayaaa',
choice2: 'Nibii ahe ni afɔɔɔ',
choice3: 'Kukwɛi kɛ shibumɔ',
choice4: 'Akɛ he ewieee',
answer: 3,
},
{ 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Mɛi ni ahe hiaa fe fɛɛ kɛji abaafite nuu kɛ eŋa gbala ji nuu kɛ yoo lɛ………',

choice1: 'abii kɛ amɛnanemɛi krokomɛi',
choice2: 'afɔlɔi kɛ amɛŋaawolɔi srɔtoi',
choice3: 'asuɔlɔi kɛ amɛwekumɛi saŋŋ',
choice4: 'atsɛmɛi kɛ amɛnyɛmɛi asɛɛbii',
answer: 4,
},
{
 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Tsɔɔmɔ bɔ ni fɔlɔi feɔ kɛnaa nɔ gbɔmɛi ni mɛi ni miitao amɛkɛ amɛbii abote gbalashihilɛ mli ji',

choice1: 'Amɛtsaleɔ amɛshishi veveeve',
choice2: 'Amɛnyiɛɔ amɛsɛɛ daa',
choice3: 'Amɛjaa amɛ nii',
choice4: 'Amɛhaa amɛ nitsumɔ',
answer: 1,
 },
 {

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Kɛji nuu ko ni yɛ ŋamɛi etɛ gbo ni eshiiii shamaŋsheo lɛ, te afeɔ tɛŋŋ ajaa egboshinii ahaa ebii ?',


choice1: 'akɛhaa ebii ni efa gbɛ',
choice2: 'akɛhaa ebii ni fɔko',
choice3: 'ajaa yɛ nyɛmɛi anaa',
choice4: 'ahaa ebihii ni ashiɔ yei.',
answer: 3,
},
{

 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Gbɔmɔ nɛɛ, maŋ husui asaji kɔɔ ehe fe mɔ fɛɛ mɔ.',


choice1: 'Akwashɔŋtsɛ',
choice2: 'Akutsotsɛ',
choice3: 'Agbaafoiatsɛ',
choice4: 'Asafoiatsɛ',
answer: 1,
 },
{
 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Namɔ kɛ maŋ fɛɛ shika toɔ ?',

choice1: 'Okwaafoiatsɛ',
choice2: 'Atofotsɛ',
choice3: 'Tatsɛ',
choice4: 'Wuolɛiatsɛ.',
answer: 3,
},
{

 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Sane ni mli wa lɛ………… koishi ayeɔ yɛ.',


choice1: 'shipi',
choice2: 'otsaamɛ',
choice3: 'maŋtsɛ',
choice4: 'jaasetsɛ',
answer: 3,
},
{ 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Mɛni la ni akɛshwieɔ Maŋtsɛ nane nɔ loo etsɔɔ mli kɛboteɔ shia mli tsɔɔ ?',

choice1: 'Toolooyeli',
choice2: 'Ŋaawoo',
choice3: 'Maŋkpɛɛ',
choice4: 'Hetsuumɔ',
answer: 4,
},
{ 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Wiemɔ “Nii Maŋtsɛ etee abɔɔ mli” lɛ, te eshishi ?',

choice1: 'Egbo',
choice2: 'Ekpleke shi',
choice3: 'Etee kpee',
choice4: 'Eyaaye nii',
answer: 1,
},
 {

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Tsɔɔmɔ bɔ ni Wulɔmɛi feɔ amɛkaneɔ afiyeli be lɛ yɛ Ga maji anɔ.',


choice1: 'Amɛkwɛɔ afiyelii krokomɛi',
choice2: 'Amɛkwɛɔ nyɔɔŋ shishijee kɛ egbele',
choice3: 'Amɛkaneɔ ŋulamii yɛ atatuŋ',
choice4: 'Amɛkaneɔ Blɔfo kalanda',
answer: 2,
},
{
 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Tsɔɔmɔ nɔ ni fɔlɔi damɔɔ nɔ kɛyeɔ amɛbii haaji ayɛlɛ daa afi',

choice1: 'Amɛkwɛɔ mɛi krokomɛi anɔ nɔ kɛfeɔ',
choice2: 'Amɛshika shidaamɔ kɛ shia mli saamɔ',
choice3: 'Bii atsɛmɔ yɛ kulo naa mli saji',
choice4: 'Toi kɛ wuɔi kɛ yɛji abɔ ni amɛyɔɔ',
answer: 3,
},
{ 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Kɛji okwaafonyo na eŋmɔmi wui lɛ eduɔ yɛ shikpɔŋ ni………. sɔŋŋ yɔɔ nɔ',

choice1: 'ŋmlitsa',
choice2: 'ŋoo',
choice3: 'shia',
choice4: 'su',
answer: 4,
},
{
 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Blema l?, Gam?i y? ny?ji ………….\nBlema lɛ, Gamɛi yɛ nyɔji ………….',


choice1: '12',
choice2: '13',
choice3: '14',
choice4: '15',
answer: 2,
},
{ 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Nnɛɛ nyɔɔŋ nɔ Gamɛi wuolɛi gbeɔ obue ?',

choice1: 'Maawɛ',
choice2: 'Otukwajaŋ',
choice3: 'Gbo',
choice4: 'Antɔŋ',
answer: 1,
},
 {

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Abɛ, “Ohiafo egbɛɛɛ shwuɔ gbɛɛmɔ” lɛ miiwie …………. he',

choice1: 'heshibaa',
choice2: 'maŋjwaa',
choice3: 'trumufeemɔ',
choice4: 'yelikɛbuamɔ',
answer: 1,
 },
 {
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  “Kɔŋ bɛ ejurɔfeemɔ mli” shishi ji …………',

choice1: 'nine jurɔ ekɔdɔ',
choice2: 'mɔwamɔ eŋɔɔɔ kwraa',
choice3: 'heguɔgbee yɛ ahuntoo',
choice4: 'ekpakpa feemɔ hi',
answer: 4,
},
{
 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Mɛni hewɔ abuɔ abɛ ?',

choice1: 'ehaa sane sɛɛ kɛɔ',
choice2: 'ejieɔ mlifu kpo',
choice3: 'etserɛɔ mɛi amli',
choice4: 'ewaa naatselɛ',
answer: 4,
},
{ 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Gbɔmɔ nɛɛ kɛ kookoo jɛ Franapo kɛba Ghana.',


choice1: 'Tɛtɛ Kwashi',
choice2: 'Tɛte Kwashi',
choice3: 'Tete Kwashi',
choice4: 'Tɔto Kwashi',
answer: 1,
 },
{
 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Ga Maŋtsɛ kakalɔ ni tsɛ yɛ sɛi nɔ fe Ga maŋtsɛmɛi krokomɛi fɛɛ ji ……………',


choice1: 'Nii Taki Kɔme I',
choice2: 'Nii Taki Obli',
choice3: 'Nii Taki Tawia I',
choice4: 'Nii Taki Yaobɔi',
answer: 3,
},
{

 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Ŋkpaiyeli shishi ji ……………',


choice1: 'yarafeemɔ',
choice2: 'wɔŋjamɔ',
choice3: 'tsofatsumɔ',
choice4: 'sɔlemɔ',
answer: 4,
},
{
 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Kɛji mɔ ko jie ehe nɔ fɛɛ nɔ ni eye ŋkpai kɛtee kɛba lɛ, no tsɔɔ akɛ ………. mɔ ko',

choice1: 'eejɔɔ',
choice2: 'eelomɔ',
choice3: 'eesara',
choice4: 'eetao',
answer: 2,
},
{
 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n “Ataa oblanyo ei Lɛ nɔŋŋ” Mɛɛ shɛmɔ lala nɛ ?',


choice1: 'Aware',
choice2: 'Akro',
choice3: 'Adaawe',
choice4: 'Ajamanaa',
answer: 3,
},
{

 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n ………….. pɛ laa lala nɛɛ kɛji ehiɛ edɔ ni eestu nii : Krubɛ, Krubɛ, Kɔtɔkɔ Krubɛ.',


choice1: 'Okwaafonyo',
choice2: 'Nisɔlɔ',
choice3: 'Gbɔbilɔ',
choice4: 'Wuolɛinyo',
answer: 1,
},
 {

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Ajenu ko hetoo nɛ “ŋwɛi kɛ shikpɔŋ” Tsɔɔmɔ ajenu ni ji.',

choice1: 'Fukufuku mɛɛlɛ',
choice2: 'Futufutu yaa Fante',
choice3: 'Aga mi yɛ fɔ',
choice4: 'Akpaki kɛ enaanɔ',
answer: 4,
},
{
 

 


question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n nɛɛ atɛŋ nɔ ni ji nii kɛ nii ahetoo ajenu lɛ ?',


choice1: 'Oblayoo saa kɛ ehiŋmɛi kome',
choice2: 'Koklolonto egbee jɔɔ lɛ mli',
choice3: 'Shinaana shinaana nante fɔɔ',
choice4: 'Sɛɛ sɛɛ ko sɛɛ ko',
answer: 3,

},
{

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Akaseɔ subaŋi kpakpai kɛ gbohii fɛɛ kɛjɛɔ adesatamɔ mli. Te subaŋi nɛɛ ateŋ nɔ ni ehii ?',

choice1: 'Ekomefeemɔ',
choice2: 'Aminyeli',
choice3: 'Heshibaa',
choice4: 'Suɔmɔ',
answer: 2,
},
{
 

 

question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n Gbɛi kui komɛi bɛ sablai yɛ fɔmɔ mli saji ahewɔ. Tsɔɔmɔ gbɛi ku ni bɛ sabla yɛ biɛ',


choice1: 'Fɔmɔnaatoo',
choice2: 'Gbi',
choice3: 'Awusa',
choice4: 'Haaji',
answer: 3,
},
{

 

 
question: 'Gbee wiemɔmuji lɛ ateŋ eko fɛɛ eko naa kɛ hetoo ni ja fe fɛɛ\n\n  Kɛji ona mɔ ko ni baa ma enaa lɛ, te eshishi hu?',

choice1: 'Eeye ohia',
choice2: 'Eepiŋ',
choice3: 'Eekpleke shi',
choice4: 'Eefe muujɔɔ',
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

