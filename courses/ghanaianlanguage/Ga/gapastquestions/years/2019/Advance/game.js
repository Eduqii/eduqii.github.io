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
question: 'Ŋamɔ ni akɛŋaa maŋ onukpa ji ……………',

choice1: 'Ha omanye',
choice2: 'He Omanye',
choice3: 'Omaŋ nii',
choice4: 'Oshiwee',
answer: 1,
}, 
{

question: 'Owula Anaŋ juro gbekɛ nuu ni je oshara gbeyeigbeyei ko mli lɛ akɛ ……',

choice1: 'Oyitso nɔ ayilɔ',
choice2: 'Oshwuɔ nɔ ayilɔ',
choice3: 'Onine nɔ ayilɔ',
choice4: 'Omusu nɔ ayilɔ',
answer: 3, 
},
{
question: 'Kɛji mɔ ko miiye nii lɛ, aŋaa lɛ akɛ ……….',

choice1: 'ha nii aba',
choice2: 'ha maye eko',
choice3: 'ye nii oha mi',
choice4: 'aekoo',
answer: 1,
}, 
{

question: 'Gamɛi asateŋ lɛ, kɛji aaya ………. lɛ aŋaaa mɔ.',

choice1: 'faa mli',
choice2: 'kuŋtso nɔ',
choice3: 'gɔŋ nɔ',
choice4: 'ŋmɔ mli',
answer: 2, 
},
{
question: 'Akɛ gbekɛ tsɔɔɔ samflɛ mli. No lɛ gbekɛ lɛ ………',

choice1: 'mami baalaje',
choice2: 'baatsɔ julɔ',
choice3: 'musuŋ baakɔ lε',
choice4: 'baaye sεkε',
answer: 2, 
},
{
question: 'Afɔɔ bɔlɔ atswaaa mɔ, no lɛ mɔ lɛ ……..',

choice1: 'hiε baadi lε',
choice2: 'baagbo',
choice3: 'yitso baafuu',
choice4: 'baaye sεkε',
answer: 4, 
},
{
question: 'Nibii nɛɛ fɛɛ haaa gbala asɔ ni aŋɔɔ bɛja …..',

choice1: 'ayεkpεmɔ',
choice2: 'suu',
choice3: 'juu',
choice4: 'heshibaa',
answer: 2,
},
{
question: 'Tsɔɔmɔ nibii nɛɛ ateŋ ekome ni fataa yooshibimɔ nibii ahe. Tsɛ kɛ nyɛ',

choice1: 'tεklε',
choice2: 'baagi',
choice3: 'shamɔbo',
choice4: 'atade',
answer: 3, 
},
{
question: 'Naagbee niyenii ni yoo ni miiya gbala we yeɔ ji …..',

choice1: 'fotoli',
choice2: 'otim',
choice3: 'kpokpoi',
choice4: 'otɔ',
answer: 1,
}, 
{

question: 'Gbala taa eshwɛɔ …..',

choice1: 'bii',
choice2: 'maŋ',
choice3: 'weku',
choice4: 'nabii',
answer: 1,
}, 
{

question: 'Mɔ ko ehiɛɛɛ tso ni …..',

choice1: 'gbee akɔ lε',
choice2: 'kaa abε lε',
choice3: 'tsatsu atsε lε',
choice4: 'wuɔ atsɔtse lε',
answer: 1,
}, 
{
question: '….… hi fe mɔ mli ni atsa.',

choice1: 'shwaa',
choice2: 'hela',
choice3: 'Atswa',
choice4: 'fala',
answer: 4, 
},
{
question: 'Lumɔ ni Maŋtsɛ taa eshwuɔ nɔ yɛ kusum naa ji …..',

choice1: 'Akwaashɔŋtsε',
choice2: 'Jaasetsε',
choice3: 'Maŋkralo',
choice4: 'Wulɔmɔ',
answer: 2, 
},
{
question: 'Nii Maŋtsɛ kɛ wiemɔ tsɔɔ …. nɔ yɛ bɛgwa mli.',

choice1: 'wolεiatsε',
choice2: 'otsaamε',
choice3: 'shipi',
choice4: 'atofotsε',
answer: 2, 
},
{
question: 'Lumɔ nɛɛ kɛ bɔlɔ tsuɔ etsaamɛ ekɛyatsɛɔ mɛi kɛbaa ekoishi.',

choice1: 'Jaassetsε',
choice2: 'Maŋtsε',
choice3: 'wulɔmɔ',
choice4: 'Asafoitsε',
answer: 2, 
},
{
question: 'Gbobalɔi agbɛi sɔŋŋ nɛ bɛja ……',

choice1: 'Odɔnkɔ',
choice2: 'Kwandahɔ',
choice3: 'Namɔale',
choice4: 'Antobam',
answer: 4, 
},
{
question: 'Gbɛiwoo hesɛɛnamɔi sɔŋŋ nɛ bɛja ….',

choice1: 'sukuu ni mɔ fee',
choice2: 'gbε nɔ ni atsɔ afɔ mɔ',
choice3: 'weku mli ni mɔ lε jε',
choice4: 'he ni mɔ ye yε fɔmɔ naa',
answer: 1,
}, 
{

question: 'Nakai gbekɛ yoo lɛ atsɛɔ lɛ Fofo ejaakɛ lɛ ji biyoo …… nɔ.',

choice1: 'enyɔ',
choice2: 'enumɔ',
choice3: 'ejwε',
choice4: 'etε',
answer: 2, 
},
{
question: 'Mɛni gbɛi henɔ ji gbɛi ejwɛ nɛɛŋ Apiajei, Saashi, Mpata kɛ osa?',

choice1: 'sabla',
choice2: 'gbobalɔi',
choice3: 'haaji',
choice4: 'weku',
answer: 1,
}, 
{

question: '“Ekɛ ediŋ ba, ekɛ eyɛŋ aaatee.” Wiemɔ nɛɛ yɛ bi kpojiemɔ mli tsɔɔ ….',

choice1: 'walasεεtsεlε',
choice2: 'heshibaa',
choice3: 'miishεε',
choice4: 'tsuishitoo',
answer: 1,
}, 
{

question: 'Kɛji ana nuu onukpa ko ni efee nitsuru lɛ, belɛ bɔ fɛɛ lɛ ….. egbo.',

choice1: 'eŋa',
choice2: 'klakefonyo',
choice3: 'maŋ lumɔ ko',
choice4: 'wulɔmɔ',
answer: 1,
}, 
{

question: 'Kɔji atee yara nɔ lɛ, nɛgbɛ esa akɛ afuɔ yɛ?',

choice1: 'Gbonyo tsuŋ',
choice2: 'Tso shishi',
choice3: 'okulafoi ateaŋ',
choice4: 'kεtrε sεε',
answer: 4, 
},
{
question: 'Tsɛrɛgagbamɔ shishi ji akɛ hiɛkaalɔ lɛ ….',

choice1: 'miitsa abasa',
choice2: 'sharamɔ',
choice3: 'teŋtsamɔ',
choice4: 'shεεyeli',
answer: 4, 
},
{
question: 'Kɛji mɔ ko gbo ni mɛi bumɔ mama yɛŋ yɛ yara lɛ nɔ, etsɔɔ akɛ mɔ ni egbo lɛ ….. ni',

choice1: 'banuma',
choice2: 'gbekε',
choice3: 'haajianyε',
choice4: 'asafoiatsε',
answer: 3, 
},
{
question: 'Kɛji nuu ni yɛ ŋa shi ebɛ bi ni egbo lɛ, akɛ, egboshinii haa …..',

choice1: 'Etsεkwε',
choice2: 'Enyεkwε',
choice3: 'Eŋa',
choice4: 'Efɔlɔi',
answer: 3, 
},
{
question: 'Tsɔɔmɔ gbɛjianɔtoo ni yɔɔ kɛha Ganyo ni egbo nibii anɔkwɛmɔ.',

choice1: 'Fiafeemɔ',
choice2: 'Shamaŋsheo',
choice3: 'Gboshinii',
choice4: 'Ahεtεoshii',
answer: 2, 
},
{
question: 'Mɛni Gamashibii feɔ dani amɛyeɔ Hɔmɔwɔ niyenii kpokpoi lɛ?',

choice1: 'Odadaoyii',
choice2: 'Kplejoo',
choice3: 'ŋŋɔɔwalahamɔ',
choice4: 'Yeeyeye',
answer: 4, 
},
{
question: 'Dedeinyɛ nii ji Ataa Lantɛi. No hewɔ lɛ, Dedei mɛni ji Ataa Lantɛi',

choice1: 'Nana Kansowa',
choice2: 'Nana Shishiu',
choice3: 'Nana Muu',
choice4: 'Nana Dadoa',
answer: 1,
}, 
{

question: 'Jɛ Lamɛi lɛ, maŋ kroko nɔ bii hu shiɔ kpa Hɔmɔwɔyeli be mli Namiɛ ni?',

choice1: 'Tεshimεi',
choice2: 'Nuŋuamεi',
choice3: 'osumεi',
choice4: 'Gamεi',
answer: 1,
}, 
{

question: 'Naa Adotsoo nabi Koshi lɛ, ewuji Nuumo Odai bi Tɛte. Belɛ Tɛte mɛni ji Adotsoo?',

choice1: 'Enyεkwε',
choice2: 'Enshaanaa',
choice3: 'Enyεŋkpa',
choice4: 'Eshaayoo',
answer: 2, 
},
{
question: 'Naa Dedei wu ji Nii Akwei. Te Naa Dedei baatsɛ Nii Akwei nyɛmiyo Aku tɛŋŋ?',

choice1: 'shayoo',
choice2: 'wuyoo',
choice3: 'ŋayoo',
choice4: 'nyεkwε',
answer: 2, 
},
{
question: 'Afi ko nɔ lɛ, Osu kɛ La be kpɔŋŋ. Shi akɛni La maŋtsɛ miitao toiŋjɔlɛ hewɔlɛ etsu akɛ enɛ yaha Osu maŋtsɛ.',

choice1: 'klala',
choice2: 'jwεi',
choice3: 'Abele',
choice4: 'tuŋtε',
answer: 3, 
},
{
question: 'Kɛji ona jatsu ko ma shi ni aku jwɛi afɔ nɔ lɛ, mɛni no tsɔɔ?',

choice1: 'Ajɔɔ nɔ aho bo',
choice2: 'Okata he,oshi',
choice3: 'nɔ ni yɔɔ mli lε efite',
choice4: 'Jee mɔ ko nɔ ni',
answer: 2, 
},
{
question: 'Kɛji ama kɔmfɛ yɛ faa ko naa lɛ, esaaa akɛ ….. yɛ mli.',

choice1: 'ajuɔ he',
choice2: 'ahεɔ',
choice3: 'ayεɔ mu',
choice4: 'ashamɔɔ',
answer: 2, 
},
{
question: 'Nuumo Ahia gbɔbilɔ lɛ bi abɔifonyo lɛ nyiɛ shia ni eyaaa nitsumɔ. Mɛni gbɛi kroko akɛbaatsɛ abɔifonyo nɛɛ?',

choice1: 'banuma',
choice2: 'Gbɔɔlɔ',
choice3: 'Degbɔbi',
choice4: 'Nakutsoŋbi',
answer: 3, 
},
{
question: 'Blema be mli lɛ, Gamɛi shwɛɛɛ nitsumɔ enyɔ nɛɛ ahe kwraa ejaakɛ nomɛi hiɛ amɛ.',

choice1: 'Yikuu kε nikpεε',
choice2: 'Tsumaa kε nigbɔɔ',
choice3: 'wuoyaa kε nishɔɔ',
choice4: 'okwaayeli kε wuoyaa',
answer: 4, 
},
{
question: 'Aboloo loo bodobodo shalɔ shaa nii yɛ enɛ mli.',

choice1: 'Bu',
choice2: 'Hase',
choice3: 'Gbatsu',
choice4: 'Flɔnɔɔ',
answer: 4, 
},
{
question: 'Akɛ wiemɔ tsɔɔ gbɔmɔ nɛɛ wɔ nɔ yɛ bɛgwa mli yɛ naatsɛlɛ kɛ jwɛŋmɔ ni eyɔɔ hewɔ.',

choice1: 'otsaamε',
choice2: 'Shikiteele',
choice3: 'wɔlɔɔmɔ',
choice4: 'Akwaashɔŋtsε',
answer: 1,
}, 
{

question: 'Bulɛ sɔŋŋ ni Gamɛi yɔɔ kɛha wulɔmɔ hewɔ lɛ, amɛwoɔ lɛ gbɛi ko. Mɛni ji gbɛi nɛɛ?',

choice1: 'oblanta',
choice2: 'Ataa',
choice3: 'lumɔbi',
choice4: 'Nuumo',
answer: 4, 
},
{
question: 'Kɛji onukpai ye sane ni abu atɛŋ sɛɛ ni ona ni akɛ ayilɔ loo agblama ekpa mɔ ko nine jurɔ kɔŋ nɔ lɛ, mɛni ji eshishi?',

choice1: 'Sanetsε ji mɔ lε',
choice2: 'Onukpai lε sumɔɔ esane',
choice3: 'patapaatsε ji mɔ lε',
choice4: 'mɔ lε eye bem',
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
