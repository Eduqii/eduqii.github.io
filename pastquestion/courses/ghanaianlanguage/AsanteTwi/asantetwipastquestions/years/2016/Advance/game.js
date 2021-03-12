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
question: 'Sɛ ɔkwantuni bi firi akwantuo mu ba a, abusuafoɔ',

choice1: 'ma no adwuma',
choice2: 'ma no due',
choice3: 'bisa no kwanso',
choice4: 'ma no nante yie',
answer: 3,
},
{
question: 'Sɛ ɔkwantuni bɔ n’amanneɛ wie a, abusuafoɔ ma no',

choice1: 'akwaaba',
choice2: 'adwuma',
choice3: 'due ne awɔ',
choice4: 'woaba a, tena ase',
answer: 1,
},
{
question: 'Ansa na wɔbɛma abɔfra bi abusuadin no, na ɔwɔ',

choice1: 'abodin',
choice2: 'kradin',
choice3: 'ahendin',
choice4: 'apɛtɛdin',
answer: 2,
},
{
question: 'Sɛ yɛfrɛ obi Nyankomago a, na ɔyɛ',

choice1: 'bagyina',
choice2: 'ɔdehyeɛ',
question:' ntaafoɔ akyi ba',
choice4: 'Tawia akyi ba.',
answer: 4,
},
{
question: 'Niwaa mma yɛ nnipa a',

choice1: 'wɔn maame awu',
choice2: 'wɔfiri yafunu baako mu',
choice3: 'wɔn maame yɛ ketewa',
choice4: 'wɔn nana yɛ baako',
answer: 2,
},
{
question: 'Sɛ mmarima baanu ware wɔ efie baako mu a, wɔyɛ',

choice1: 'kununom',
choice2: 'akorafoɔ',
choice3: 'nkummaafoɔ',
choice4: 'nsenom',
answer: 2,
},
{
question: 'Sɛ ɔbaa de abɔfra bi kɔware ɔbarima a, abɔfra no yɛ ɔbarima no',

choice1: 'banana',
choice2: 'abanoma',
choice3: 'bagyina',
choice4: 'tammoba',
answer: 2,
},

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho.\n\n Yɛgye di sɛ obi didi na wannwe nam a,',

choice1: 'n’ani bɛfira',
choice2: 'n’ano bɛkyim',
choice3: 'n’aso bɛsi',
choice4: 'ne hwene bɛbɔ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho.\n\n Nnipa bɛn na Akanfoɔ bɔ abamo ma wɔn?',

choice1: 'Fofie',
choice2: 'Tawia',
choice3: 'Nyankomago',
choice4: 'Ntaafoɔ',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho.\n\n Wokɔ wo dɔfo ayie ase a, wobɔ',

choice1: 'hyire',
choice2: 'ka',
choice3: 'tikwa',
choice4: 'nsawa',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho.\n\n Ɔbaa bi kunu wu a,',

choice1: 'ɔyɛ ayɛ',
choice2: 'ɔbɔ hyire',
choice3: 'ɔyɛ kuna',
choice4: 'ɔdware nsuo mu',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho.\n\n Sɛ ɔbaa bi kunu wu a, berɛ bɛn na ɔtumi ware bio?',

choice1: 'Afe baako',
choice2: 'Abosome nsia',
choice3: 'Adaduanan',
choice4: 'Mfeɛ mmienu',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho.\n\n Nhyehyɛeɛ a obi yɛ fa n’agyapadeɛ kyɛ ho ansa na wawu yɛ',

choice1: 'nsamanfrɛ',
choice2: 'nsamankɔ',
choice3: 'nsamanseɛ',
choice4: 'nsamantoa',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho.\n\n Sɛ ɔbarima bi yɛ agyapadeɛ bi wɔ abusua asase so a, ɛyɛ nokorɛ sɛ',

choice1: 'abusua nni so tumi',
choice2: 'ɔntumi mfa nkyɛ ne yere ne ne mma',
choice3: 'ɔtumi de kyɛ ne mma',
choice4: 'ɔtumi de kyɛ ne yere',
answer: 2,
},

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.\n\n Sɛ yɛka sɛ ɔbaa warefoɔ bi bɔ mpoa a, na ɛkyerɛ sɛ',

choice1: 'ɔwo ntɛmntɛm',
choice2: 'ɔpɛ kyini',
choice3: 'ɔpɛ ayɔnkogorɔ',
choice4: 'ɔtwe mpena',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.\n\n Sɛ ɔbarima bi di badudwan a, na ɛkyerɛ sɛ',

choice1: 'ɔwɔ nnwan du',
choice2: 'wadi odwan nkwan',
choice3: 'wawo mma du',
choice4: 'waware mmaa du',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.\n\n Yi deɛ ɛnyɛ nokorɛ wɔ bragorɔ ho',

choice1: 'ɛgu ɔbaa no anima se',
choice2: 'ɛma ɔbaa no nya dwatire',
choice3: 'ɛma ɔbaa no nya kunu pa',
choice4: 'ɛhyɛ ɔbaa no animuonyam',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.\n\n Yɛde …………ka ɔbaa a yɛregoro no bra ano.',

choice1: 'ɛnam',
choice2: 'kosua',
choice3: 'nsa',
choice4: 'nsuo',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.\n\n Anansesɛm mu ɔsebɔ taa di dwuma sɛ',

choice1: 'mmirikatufoɔ',
choice2: 'mmɔborɔhunufoɔ',
choice3: 'owudifoɔ',
choice4: 'onyansafoɔ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.\n\n Asantefoɔ atetesɛm kyerɛ sɛ wɔpue firii fam wɔ',

choice1: 'Ɔyoko',
choice2: 'Kumase',
choice3: 'Mampɔn',
choice4: 'Asantemanso',
answer: 4,
},

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Amanneɛ bɛn na wɔyɛ de kyerɛ sɛ wɔatu ɔhene bi?',

choice1: 'Yɛworɔ ne nan mu mpaboa',
choice2: 'Yɛgye n’afena',
choice3: 'Yɛgye n’akyeampoma',
choice4: 'Yɛgye n’apakan',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Sɛ ɔhempɔn bi ka baabi a, Akanfoɔ tumi ka sɛ',

choice1: 'otumfoɔ atia mpaboa mu',
choice2: 'odupɔn atutu',
choice3: 'ɔberempɔn asoa ne bankyiniiɛ',
choice4: 'ɔhene kɔ nsrahwɛ',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Sɛ Takyimanfoɔ redi apoɔ a,',

choice1: 'ɔhene bɔ tikwa',
choice2: 'ɔhene mpue abɔnten',
choice3: 'wɔtumi ka ɔhene anim',
choice4: 'ɔhene didi abɔnten',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Yeinom baako nka mfasoɔ a yɛnya no afahyɛ ho.',

choice1: 'Ɛde anigyeɛ ba',
choice2: 'Ɛde nkabom ba',
choice3: 'Ɛde mpontuo ba',
choice4: 'Ɛde ntɔkwa ba',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Akanfoɔ frɛ wɔn nnapɔnna sɛ',

choice1: 'dapapa',
choice2: 'dabɔne',
choice3: 'afoofida',
choice4: 'dakronkron',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Memeneda Dapaa din foforɔ ne',

choice1: 'Nkyɛmemene',
choice2: 'Fɔmemene',
choice3: 'Kurumemene',
choice4: 'Monomemene',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Amammerɛ kwan so no …… na wɔdi asɛm.',

choice1: 'abadwafoɔ',
choice2: 'adansefoɔ',
choice3: 'atɛmmuafoɔ',
choice4: 'lɔyafoɔ',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Adɛn nti na Ɔkanni regu nsa a, ɔworɔ ne nan mu mpaboa?',

choice1: 'ɛkyerɛ abufuo',
choice2: 'ɛkyerɛ anibere',
choice3: 'ɛkyerɛ ɔko',
choice4: 'ɛkyerɛ obuo',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.\n\n Sɛ Akanfoɔ reyi apaeɛ a,',

choice1: 'wɔbu nkotodwe',
choice2: 'wɔkata wɔn ani',
choice3: 'wɔpagya wɔn nsa',
choice4: 'wɔworɔ wɔn ntoma gu wɔn mmatiri so',
answer: 4,
},

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Akyeampoma a ɔkwakuo a ɔsɛn dubaa so si kyerɛ sɛ',

choice1: 'Wopɛ sɛ dua mmu mmɔ ɔkwakuo a, ɛnoa no si',
choice2: 'ɔkwakuo ani agye',
choice3: 'ɔkwakuo si dua so',
choice4: 'dubaa no akyere ɔkwakuo nu',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Akanman mu sɛ obi fira kuntunkuni anaasɛ kɔbene a, na ɛkyerɛ sɛ',

choice1: 'n’ani abere',
choice2: 'ne bo afu',
choice3: 'ne biribi awu',
choice4: 'ne werɛ aho',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Biretuo akraboa ne ɔsebɔ a ɔgyina hɔ ma',

choice1: 'ahoɔherɛ',
choice2: 'ahoteɛ',
choice3: 'asomdwoeɛ',
choice4: 'ahoɔden',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Akyekyedeɛ ne nwa nsɛnkyerɛnne kyerɛ deɛn?',

choice1: 'aniteɛ',
choice2: 'asondwoeɛ',
choice3: 'ehu',
choice4: 'mmɔborɔhunu',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Niwaa mma nsae a, …….nni adeɛ.',

choice1: 'babarima',
choice2: 'nuabarima',
choice3: 'wɔfase',
choice4: 'nuabaa',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Obi a ɔmpɛ adwuma no…..na ɛbɛkum no.',

choice1: 'ohia',
choice2: 'aborɔ',
choice3: 'aniteɛ',
choice4: 'soma',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Obi nkwati ……..mmɔ pɔ.',

choice1: 'akyerɛkyerɛkwan',
choice2: 'nsateahene',
choice3: 'kɔkorɔmmɔtoɔ',
choice4: 'kokurobetie',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Obi mfa …..ne kasa.',

choice1: 'adidie',
choice2: 'nkɔmmɔdie',
choice3: 'nsanom',
choice4: 'ntɔkwa',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Ahwenne pa ………',

choice1: 'kasa',
choice2: 'nkasa',
choice3: 'nyɛ fɛ',
choice4: 'yɛ fɛ',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Agya adeɛ bi wɔ hɔ gye sɛ wobɔ n’apampam ansa na watena ase. Ɛyɛ',

choice1: 'bɔɔlo',
choice2: 'dua',
choice3: 'dadewa',
choice4: 'praeɛ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.\n\n Agya nam bi wɔ hɔ gye sɛ wowe ansa na woahunu sɛ mogya wɔ mu. Ɛyɛ',

choice1: 'ahwedeɛ',
choice2: 'borɔferɛ',
choice3: 'nkateɛ',
choice4: 'bese.',
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
