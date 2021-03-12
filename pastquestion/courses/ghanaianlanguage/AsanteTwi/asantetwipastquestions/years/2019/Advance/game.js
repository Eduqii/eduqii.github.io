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
question: 'Ahemfie nnipa no nyinaa sahene ne hwan?',
choice1: 'ɔkyeame',
choice2: 'Gyaasehene',
choice3: 'Abrafoɔ',
choice4: 'Kurontihene',
		answer: 2,
},
{
question: 'Ɔbarima a wɔwo no Yawoada mmrane ne …….',
choice1: 'prɛko',
choice2: 'okoto',
choice3: 'okyini',
choice4: 'bodua',
		answer: 1,
},
{
question: '….. yɛ amammerɛ a wɔyɛ de kae da titire bi a atwam wɔ abrabɔ mu.,',
choice1: 'afahyɛ',
choice2: 'anansesɛm',
choice3: 'nsaguo',
choice4: 'bragorɔ',
		answer: 1,
 
},
{
question: 'Akanfoɔ nnabuo mu no, akwasidɛɛ si mpɛn ahe wɔ afenhyia baako?',
choice1: 'du',
choice2: 'nkron',
choice3: 'dummienu',
choice4: 'nson',
		answer: 2,
 
},
{
question: 'Antoakyire yɛ mmɔfra agorɔ no mu baako, ne botaeɛ titire ne sɛn?',
choice1: 'ahwɛyie',
choice2: 'ahoɔden',
choice3: 'nnamfofa',
choice4: 'papayɛ',
		answer: 1,
},
{
question: 'Deɛn nti na sɛ obi reyɛ adwuma a ɔto dwom?',
choice1: 'sɛnea ɛbɛyɛ a nkurɔfoɔ bɛte ne nne',
choice2: 'ɛbɛyɛ a ɔnte brɛ',
choice3: 'sɛnea ɛbɛtwetwe nnipa abɛboa no',
choice4: 'sɛnea ɛbɛyɛ a,nkurɔfoɔ',
		answer: 4,
},
{
question: 'Bosome a ɛdido soɔ yi mu deɛ ɛwɔ he na nsuo taa tɔ pa ara?',
choice1: 'Ahinime',
choice2: 'Ayɛwohomumɔ',
choice3: 'ɔpɛpɔn',
choice4: 'ɔpɛnimaa',
		answer: 2,
},
{
question: 'Ɔhene biara wɔ ne mpanimfoɔ a ɔne wɔn bu ne man. Saa mpanimfoɔ yi wɔfrɛ wɔ sɛn?',
choice1: 'Adikurofoɔ',
choice2: 'Nhenkwaa',
choice3: 'Atenankonnwa',
choice4: 'Mpapahweakwa',
		answer: 3,

},
{
question: 'Hwehwɛ deɛ ɛda nso wɔ saa nsɛnkuo yi mu.',
choice1: 'Konkosifoɔ',
choice2: 'Ahayɔ',
choice3: 'Kuayɔ',
choice4: 'Kentenwono',
		answer: 1,
},
{
question: 'Ɔbɛtwani de …………….. na ɛfite ne mmɛ.',
choice1: 'Egya',
choice2: 'berɛ',
choice3: 'tɛnee',
choice4: 'mpapa',
		answer: 3,
},
{
question: 'Sɛ ɔman bi rekɔ sa a, sahene a ɔdi ɔhene anim pɛɛ no ne hwan?',
choice1: 'Benkumhene',
choice2: 'Adɔntenhene',
choice3: 'Gyaasehene',
choice4: 'Kyidɔmhene',
		answer: 2,
},
{
question: 'Tete no na mmarima taa sua nnwuma titire a wɔn ….. yɛ.',
choice1: 'Nananom',
choice2: 'Agyanom',
choice3: 'Wɔfanom',
choice4: 'Abusuafoɔ',
		answer: 2,

},
{
question: 'Owupa ne sɛ ……..',
choice1: 'obi ato ne kɔn awuo',
choice2: 'anya lɔre akwanhyia na wawuo',
choice3: 'obi atɔ nsuom awuo',
choice4: 'eto akum obi',
		answer: 1,
},
{
question: 'Ɛdi ……….. ansa na abusuafoɔ ahyia ahwehwɛ awufoɔ agyapadeɛ.',
choice1: 'bosome',
choice2: 'afe',
choice3: 'adaduanan',
choice4: 'nnansa',
		answer: 2,
},
{
question: 'Edin bɛn na Akanfoɔ de frɛ beɛ a obi awuo de kɔsi sɛ wɔbɛkora no wɔ amusieɛ no?',
choice1: 'ahosiesie',
choice2: 'ayiseɛ',
choice3: 'dɔteyie',
choice4: 'ayipa',
		answer: 1,
},
{
question: 'Sɛ ɔbarima bi si ɔbaa bi asiwa a, …………..',
choice1: 'wɔnnidi mmom',
choice2: 'ɔbaa no ne ɔbarima no tena faako',
choice3: 'ɔne ɔbaa no nni nkɔmmɔ',
choice4: 'ɔmmfa ne ho nka ɔbaa no',
		answer: 4,
},
{
question: 'Berɛ bɛn na abaayewa bi so awadeɛ wɔ Akanman mu?',
choice1: 'ɔwie sukuu a',
choice2: 'mfeɛ dunsia a',
choice3: 'ɔbu ne nsa a',
choice4: 'ɔbobɔ nufoɔ a',
		answer: 3,
},
{
question: 'Hwan na ɔgu ɔbaa bi hyire?',
choice1: 'n’ase',
choice2: 'n’akumaa',
choice3: 'okunu',
choice4: 'ne babarima',
		answer: 2,

},
{
question: 'Ahosoɔ kɔkɔɔ a ɛwɔ Ghana frakaa mu no gyina hɔ ma ……..',
choice1: 'ɔman yi sika kɔkɔɔ',
choice2: 'nnuaba ahodoɔ a ɛwɔ ɔman no mu',
choice3: 'mogya a nananom hwie gu gyee ɔman no',
choice4: 'ɔman no kwaeɛ birentuo',
		answer: 3,
},
{
question: 'Sɛ wohunu sɛ duaa tua ɔbrani ano da a wɔregoro bra no a, na ɛkyerɛ sɛ ….',
choice1: 'ɔyɛ agyanka',
choice2: 'ɔmaame wuiɛ nkyɛreeɛ',
choice3: 'obi asi no asiwa',
choice4: 'ɔhene se ɔbɛware no',
		answer: 3,
},
{
question: 'Sɛ obi di obi adeɛ a yɛka sɛ, ……',
choice1: 'wafa ne tuo',
choice2: 'wato boɔ',
choice3: 'wapra n’akyi',
choice4: 'wafom n’agyapadeɛ',
		answer: 1,
},
{
question: 'Akanfoɔ di adeɛ kɔ ….. fam.',
choice1: 'agya maame',
choice2: 'agya',
choice3: 'sewaa',
choice4: 'ɛna',
		answer: 4,
},
{
question: 'Wɔdidi wieeɛ no, ɔbaako kaa sɛ yɛma wo adware. Na ɛkyerɛ sɛ …..',
choice1: 'wɔbɛdi bio',
choice2: 'wɔresrɛ kwan',
choice3: 'wɔkɔdware',
choice4: 'wɔreda no ase',
		answer: 4,
},
{
question: 'Nnyesoɔ a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛnyɛ Bosompoɔ nnyesoɔ?',
choice1: 'Yaa amen',
choice2: 'Yaa osua',
choice3: 'Yaa oburu',
choice4: 'Yaa ɔbeafo',
		answer: 1,
},
{
question: 'Akanfoɔ amammerɛ mu no wɔkyea firi …..',
choice1: 'nifa so',
choice2: 'mpanin so',
choice3: 'mfinimfini',
choice4: 'benkum so',
		answer: 1,
},
{
question: 'Yei ne ɔkwan a Akanfoɔ nam so gye ɔhɔhoɔ bi to abusua bi mu.',
choice1: 'dintoɔ',
choice2: 'asubɔ',
choice3: 'kradin',
choice4: 'awaregyeɛ',
		answer: 4,
},
{
question: 'Nsa ne nsuo a wɔde sosɔ abɔfra tɛkrɛma so wɔ abadintoɔ mu no kyerɛ sɛ ɔmmɛyɛ …..',
choice1: 'papa',
choice2: 'nokwafoɔ',
choice3: 'akwadworɔ',
choice4: 'anomum',
		answer: 2,
},
{
question: 'Edin a ɛdidi soɔ yi mu deɛ wɔ he na ɛyɛ abusuadin?',
choice1: 'Anto',
choice2: 'Adusa',
choice3: 'Bediako',
choice4: 'Opoku',
		answer: 4,
},
{
question: 'Sɛ ɔkanni bi nya edin bi te sɛ Anane a, na ɛfiri …..',
choice1: 'awosuo',
choice2: 'awoɔ nnidisoɔ',
choice3: 'atoyerɛnkyɛm',
choice4: 'awommawuo',
		answer: 2,
},
{
question: '3Sɛ yɛka sɛ obi nka ntam a, na ɛkyerɛ sɛ onipa korɔ no aka ɔman, kuro, anaa kuo bi …..',
choice1: 'nokwasɛm',
choice2: 'nkontomposɛm',
choice3: 'anigyesɛm',
choice4: 'awerɛhosɛm',
		answer: 4,
},
{
question: 'Sɛ obi ka ntam a ….',
choice1: 'wɔkye bi dedua',
choice2: 'wɔhuro no',
choice3: 'wɔbu n’aba so',
choice4: 'wɔde no kɔ kɔɔto',
		answer: 1,
},
{
question: 'Abɔdeɛ ahodoɔ a yɛte wɔn din wɔ anansesɛm mu no ne …..',
choice1: 'anansesɛm su',
choice2: 'anansesɛm mma',
choice3: 'ananse akuamoa',
choice4: 'anansesɛm agorɔ',
		answer: 2,
},
{
question: 'Sɛ obi pae dua mu de mmerɛnkensono bɔ mu de si asaase bi so a, na ɛkyerɛ sɛ …..',
choice1: 'asaase korɔ no yɛ obi na wadɔ',
choice2: 'obi atɔ asaase no',
choice3: 'manso wɔ asaase no so',
choice4: 'obi rebɛdɔ saa asase no',
		answer: 4,
},
{
question: '34. Sɛ wowura efie mu na wɔabɔ nwera fitaa pɔ sɛn efie no aboboano a, na ɛkyerɛ sɛ ….',
choice1: 'wɔretwa odwira',
choice2: 'awo ntaa wɔ saa efie no',
choice3: 'wɔrehyia ayeforɔ',
choice4: 'wɔresi ɔhene',
		answer: 3,
 
 
},
{
question: 'Anansesɛm yɛ …….',
choice1: 'asisisɛm',
choice2: 'bɔsrɛmuka',
choice3: 'nsɛm a asisi pɛn',
choice4: 'anwonsɛm',
		answer: 2,
},
{
question: 'Deɛ Akanfoɔ taa de yi apaeɛ ne ……',
choice1: 'nsa dɔkɔdɔkɔ',
choice2: 'ntunkum',
choice3: 'nsa a ɛboro',
choice4: 'nsuo',
		answer: 3,
},
{
question: 'Onyankopɔn mmrane a wɔtaa de bɔ no wɔ apaeyi mu no baako ne ….',
choice1: 'Daaseberɛ',
choice2: 'ɔkoforoboɔ',
choice3: 'tweaduampɔn',
choice4: 'kuntunkunuku',
		answer: 3,
},
{
question: 'Sɛ mmaa rebɛfiri adowa nnwom ase a, ……',
choice1: 'wɔto apoɔ',
choice2: 'wɔtwa aho',
choice3: 'wɔto no prɛko pɛ',
choice4: 'wɔboro adawuraa mu',
		answer: 4,
},
{
question: 'Ɔkɔmfoɔ bɛn na atetesɛm kyerɛ sɛ ɔtumi de mpaboa foroo onyina?',
choice1: 'Aseibu Amamfi',
choice2: 'Ansa Sasraku',
choice3: 'ɔkɔmfo Kyei',
choice4: 'ɔkɔmfo Anɔkye',
		answer: 4,
},
{
question: 'Hwan na ɔde ne ho bɔɔ aforeɛ maa Asanteman bere a, Asanteman ne Denkyira rekɔ ɔko no?',
choice1: 'ɔsɛe Bonsu',
choice2: 'Tutu',
choice3: 'Tweneboa Kodua',
choice4: 'Opoku Ware',
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
