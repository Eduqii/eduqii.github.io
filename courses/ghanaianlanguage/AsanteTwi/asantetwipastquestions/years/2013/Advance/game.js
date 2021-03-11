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
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.\n\n Sɛ wohyia obi na woankyea a, yɛtaa dwene sɛ….',

choice1: 'W’ani ate',
choice2: 'Wompɛ ntɔkwa',
choice3: 'Wonni nteteeɛ',
choice4: 'Wowɔ ɔdɔ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.\n\n Akanfoɔ amammerɛ mu no, wɔkyea firi',

choice1: 'Nifa so',
choice2: 'Mpanin so',
choice3: 'Benkum so',
choice4: 'Mfinimfini',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.\n\n Edin a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛyɛ abusua din?',

choice1: 'Adusa',
choice2: 'Anto',
choice3: 'Opoku',
choice4: 'Bediako',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.\n\n Sɛ wowɔ obi Memeneda a ɛyɛ dabɔne a, wɔbɛfrɛ no…….',

choice1: 'Ama Bagyina',
choice2: 'Ama Dapaa',
choice3: 'Kwame Duku',
choice4: 'Kwame Tutu',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.\n\n Agyeiwaa mmrane yɛ……',

choice1: 'Ɔsɔɔnɔ',
choice2: 'Kyeiwaa',
choice3: 'Amponyinamoa',
choice4: 'Kɔdeɛ',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.\n\n Sɛ wo kunu nuabaa yɛ akumaa a na ne nuabarima ye……',

choice1: 'ase',
choice2: 'wɔfa',
choice3: 'papa',
choice4: 'kunu',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.\n\n Maame kunu nuabarima yɛ ne kunu a, na ne yere nuabaa yɛ ɔbarima no….',

choice1: 'nua',
choice2: 'yere',
choice3: 'ase',
choice4: 'akumaa',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.\n\n Sika a wɔde ma ɔbaa nua mmarima no yɛ…..',

choice1: 'Akontasekan',
choice2: 'Taw',
choice3: 'Danta',
choice4: 'Tiri adeɛ',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.\n\n Hwan na ɔgye awareɛ ma ba barima?',

choice1: 'Papa',
choice2: 'Maame',
choice3: 'Nana',
choice4: 'Wɔfa',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.\n\n Ntam bɛn ne ntam kɔkɔɔ?',

choice1: 'Ntam kumaa',
choice2: 'Ntam kɛseɛ',
choice3: 'Ntam piadeɛ',
choice4: 'Ntam fufuo',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.\n\n Sɛ agya bosom yɛ wo ntɔn a, maame mogya yɛ wo…',

choice1: 'Kra',
choice2: 'Bosom',
choice3: 'Abusua',
choice4: 'Nkwa',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.\n\n Sɛ abaayewa bi hunu mogya a, wɔde no kɔkyerɛ……',

choice1: 'Abusua panin',
choice2: 'Odikro',
choice3: 'Ɔhene',
choice4: 'Ɔhemaa',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.\n\n Ɔkɔmfoɔ bɛn na ɔtumi de mpaboa foroo onyina?',

choice1: 'Ɔkɔmfoɔ Kyei',
choice2: 'Ɔkɔmfoɔ Anokye',
choice3: 'Aseibu Amamfi',
choice4: 'Ansa Sasraku',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.\n\n Dabɛn na Asantehene nsa kaa sikadwa Kofi no?',

choice1: 'Dwoada',
choice2: 'Wukuda',
choice3: 'Memeneda',
choice4: 'Fiada',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.\n\n Bragorɔ mu no baabi a ɔbrani kɔtena yɛ….',

choice1: 'Brafie',
choice2: 'ɔmaame fie',
choice3: 'abusua fie',
choice4: 'ɔhemaa fie',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.\n\n Ɔhene ne ne manfoɔ hyia a, nea ɔma dwam yɛ din yɛ…..',

choice1: 'Ɔhemmaa',
choice2: 'Adumfoɔ',
choice3: 'Sanaafoɔ',
choice4: 'Ɛsɛn',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.\n\n Mmenakurafoɔ taa yɛ ɔhene……',

choice1: 'Nananom',
choice2: 'Wɔfasenom',
choice3: 'Nuanom',
choice4: 'Asomfo',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.\n\n Sɛ ɔman bi rekɔ sa a, deɛ ɔdi ɔhene anim pɛɛ ne….',

choice1: 'Gyasehene',
choice2: 'Benkumhene',
choice3: 'Adɔntenhene',
choice4: 'Kyidɔmhene',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.\n\n Akanman mu no…..na ɔtu ɔhene fo.',

choice1: 'Ɔkyeame',
choice2: 'Ɔhemaa',
choice3: 'Odikro',
choice4: 'Gyaase',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.\n\n Mpanimfoɔ a ɔhene ne wɔn bu ne man no wɔfrɛ wɔn…….',

choice1: 'Mpapahwekwa',
choice2: 'Nhenkwaa',
choice3: 'Atenankonnwa',
choice4: 'Adikrofoɔ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.\n\n Wɔfrɛ baabi a wɔbɔ nnadeɛ ne nsɔ sɛ',

choice1: 'Gyedua ase',
choice2: 'Amanfo so',
choice3: 'Afuom',
choice4: 'Tonsuom',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n Nam dodoɔ ……..nkwan.',

choice1: 'nnsɛe',
choice2: 'sɛe',
choice3: 'resɛe',
choice4: 'bɛsɛe',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n Ɔdehyeɛ anko a…………….',

choice1: 'ɛmfa obiara ho',
choice2: 'mpanin dwane',
choice3: 'akoa dwane',
choice4: 'mpanin bisa no',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n ………………su agyenkuku su a ne to pae.',

choice1: 'Apatuprɛ',
choice2: 'Aserewa',
choice3: 'Aburuburo',
choice4: 'Akyem',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n Agya adeɛ bi wɔ hɔ ɔrebɛwu a gye sɛ ɔkra ne maame. Ɛyɛ…………..',

choice1: 'kanea',
choice2: 'ɛgya',
choice3: 'bokyea',
choice4: 'mankese',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n Agya adeɛ bi wɔ hɔ ɛnni ani nso ɛtumi wura tokuro biara mu. Ɛyɛ deɛn?',

choice1: 'Ɔwɔ',
choice2: 'Okusie',
choice3: 'Nsuo',
choice4: 'Paneɛ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n Nsaguo mu no yɛhyira yɛn',

choice1: 'Adɔfo',
choice2: 'Nsamanfoɔ',
choice3: 'Atamfo',
choice4: 'Akɔmfoɔ',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n Nsaguo mu no yɛtaa srɛ nneɛma a ɛdidi soɔ yi gye sɛ…..',

choice1: 'Siadeɛ',
choice2: 'Nhyira',
choice3: 'Nnome',
choice4: 'Onyinkyerɛ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n Apoɔ yɛ fa a wɔhyɛ no wɔ Takyiman ne',

choice1: 'Dɔmaa',
choice2: 'Wankyi',
choice3: 'Kintampo',
choice4: 'Sunyane',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.\n\n ……………yɛ afahyɛ a wɔde huro kɔm.',

choice1: 'Aboakyere',
choice2: 'Ohum',
choice3: 'Adɛɛ kɛse',
choice4: 'Akwanbo',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Abɔfra a wɔatwa ne tiri mpɛsempɛsɛ yɛ…………..',

choice1: 'ɔbosomma',
choice2: 'aboatia ba',
choice3: 'ɔkɔmfoɔ ba',
choice4: 'ɔdehyeɛ',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Sɛ ɔkanni bi ani gye a ɔfira ntoma……..',

choice1: 'Fitaa',
choice2: 'Tuntum',
choice3: 'Kɔkɔɔ',
choice4: 'Kuntunkuni',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Sɛ ɔbɔfoɔ kɔ wuram a, deɛ ɔyɛ de hyɛ ɔkwan nso ne sɛ……..',

choice1: 'ɔpae kwan so',
choice2: 'ɔtwitwa nnunsin a ɛwɔ kwan so',
choice3: 'ɔhye ɔkwan so nwura',
choice4: 'ɔbotabota nnua ho',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Akyekyedeɛ wɔ anansesɛm mu gyina hɔ ma',

choice1: 'Aniteɛ',
choice2: 'Ntɔkwa',
choice3: 'Asomdwoeɛ',
choice4: 'Manso',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Yɛfrɛ bosome dubaako sɛ…….',

choice1: 'Obubuo',
choice2: 'Ɛbɔ',
choice3: 'Ɔpɛpɔn',
choice4: 'Oforisuo',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Hwehwɛ deɛ ɛda nso wɔ saa nsɛm yi mu………',

choice1: 'Ɔgyefuo',
choice2: 'Oforisuo',
choice3: 'Ɔpɛnima',
choice4: 'Ɔpɛpɔn',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Firi bere a obi bewu kɔpem berɛ a wɔbesie no yɛ…..',

choice1: 'ayipa',
choice2: 'ayiseɛ',
choice3: 'ahosiesie',
choice4: 'dɔteyie',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Amanneɛ a wɔyɛ obi a ne kunu anaa ne yere awu yɛ',

choice1: 'ayeforohyia',
choice2: 'kuna',
choice3: 'awaregyeɛ',
choice4: 'awareguo',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n …………..yɛ nkra a ɛtwa toɔ ma awufoɔ ne ateasefoɔ.',

choice1: 'Awaregyeɛ',
choice2: 'Ayeforohyia',
choice3: 'Ayiyɔ',
choice4: 'Awareguo',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.\n\n Ɔbarima wu a deɛ ɔdi adeɛ fa no……',

choice1: 'sekan',
choice2: 'akonnwa',
choice3: 'agyapadeɛ',
choice4: 'tuo',
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
