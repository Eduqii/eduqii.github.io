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
question: 'Berɛ a me sewaa woeɛ no, n’awofoɔ kɔmaa no',

choice1: 'Yaakɔ',
choice2: 'Dammirifua',
choice3: 'Afirim',
choice4: 'Due',
answer: 3,
},
{ 
question: 'Nnipa a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛsɛ sɛ yɛma no akwaaba',

choice1: 'Obi a ɔretu kwan',
choice2: 'Obi a waware foforo',
choice3: 'Obi a ɔfiri akwantuom aba',
choice4: 'Obi a yɛakye no sɛ ɔrewia adeɛ',
answer: 3,
},
{ 
question: 'Deɛ ɛdidi soɔ yi nyinaa yɛ nokorɛ wɔ Akanfoɔ nkyea ho, gye sɛ',

choice1: 'Sɛ obi rekɔgya ne nan a, ɔnkyea',
choice2: 'Sɛ obi redidi a, yɛnkyea no',
choice3: 'Yɛkyea firi nifa so',
choice4: 'Yɛmfa yɛn nsa bɛnkum nkyea',
answer: 2,
},
{ 
question: 'Berɛ bɛn na Akanfoɔ ma obi due-ne-onwunu?',

choice1: 'Anwummerɛ',
choice2: 'Anɔpa',
choice3: 'Prɛmotobrɛ',
choice4: 'Awia',
answer: 1,
},
{
question: 'Edin a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɔkanni ba biara di kan nya',

choice1: 'Aborɔfo din',
choice2: 'Kradin',
choice3: 'Adakam dim',
choice4: 'Abusua din',
answer: 2,
},
{ 
question: 'Akanfoɔ abadintoɔ mu no, nsuo ne nsa a wɔde sosɔ abofra no tɛkyerɛma so no gyina hɔ ma',

choice1: 'Aniɛden',
choice2: 'Akokoɔduro',
choice3: 'Anoteɛ',
choice4: 'Nokorɛdie',
answer: 3,
},
{ 
question: 'Akanfoɔ tumi bɔ Kofi mmrane sɛ',

choice1: 'Ogyam',
choice2: 'Bodua',
choice3: 'Atoapoma',
choice4: 'Tuo/ kyini',
answer: 4,
},
{ 
question: 'Sɛ ɔbaa bi wo ntaa na sɛ ɛyɛ ɔbaa ne barima a yɛka sɛ wawo',

choice1: 'Ahuhuro ne Awɔ',
choice2: 'Takyi ne Kuro',
choice3: 'Ahum ne Aham',
choice4: 'Sika ne Amaneɛ',
answer: 2,
},
{ 

 question: 'Agya Abankwa ne ne yere mma mmienu a, ɛdi kan yɛ mmarima. Deɛ ɔtɔ so mmienu yɛ ɔbaa a, wɔbɛfrɛ no sɛn?',

choice1:'Kontɔ',
choice2: 'Mɛnsa',
choice3: 'Adantam',
choice4: 'Ahuhuro',
answer: 1,
 },
 {
question: 'Ɔbaa bi ware a ne deɛn ne ne kunu nuabaa?',

choice1: 'Ne sewaa ba',
choice2: 'Ne kora',
choice3: 'N’akumaa',
choice4: 'N’ase',
answer: 3,
},
{ 
question: 'Nnipa yi mu hwan na Akanman mu ɔyɛ ɔbarima bi wɔfase?',

choice1: 'Ne nuabaa ba',
choice2: 'Ne nana ba',
choice3: 'Ne nuabarima ba',
choice4: 'Ne wɔfa ba',
answer: 1,
 },
 {
question: 'Yei na ɛdi adanseɛ sɛ ɔbarima bi aware ɔbaa bi wɔ Akanman mu',

choice1: 'Kawa',
choice2: 'Tiri nsa',
choice3: 'Ayeforɔ',
choice4: 'Danta',
answer: 2,
},
{ 
question: 'Akanfoɔ frɛ aduane edi kan a ɔbaa a wɔayɛ ne ho adeɛ foforɔ yɛ de kɔma ne kunu no nen ne nkurɔfoɔ sɛ',

choice1: 'Aduanekan',
choice2: 'Aduanewoɔ',
choice3: 'Aduanekɛseɛ',
choice4: 'Aduanepa',
answer: 3,
},
{ 
question: 'Sɛ wɔgu ɔbaa bi hyire a, na ɛkyerɛ sɛ',

choice1: 'N’awareɛ no asɔ twann',
choice2: 'N’awareɛ no adi nkunim',
choice3: 'N’awareɛ no atu mpɔn',
choice4: 'N’awareɛ no agu koraa',
answer: 4,
},
{ 
question: 'Akanfoɔ bragorɔ mu, sɛ wohunu sɛ dua tua ɔbrani no ano a, ɛkyerɛ sɛ',

choice1: 'Ɔyɛ agyanka',
choice2: 'Ne maame wuiɛ nkyɛreeɛ',
choice3: 'Ɛkɔm de no',
choice4: 'Obi asi no asiwa',
answer: 4,
},
{ 
question: 'Deɛ ɛdidi soɔ yi nyinaa yɛ Akanfoɔ akyiwadeɛ gye sɛ',

choice1: 'Woredidi na worenom nsuo',
choice2: 'Wode wo nsa benkum si fam berɛ a woredidi',
choice3: 'Wo ne wo papa redidi na wodi kan sɔre',
choice4: 'Woredidi na woreto dwom',
answer: 1,
 },
 {
question: 'Sɛ obi ka ntam wɔ Akanman mu a, hwan na ɔkye ne dedua?',

choice1: 'Ɔkyeame',
choice2: 'Ɔhene',
choice3: 'Ahenkwaa',
choice4: 'Dabehene',
answer: 2,
},
{ 
question: 'Akanfoɔ ayiyɛ mu no, sɛ mmaa su kɔ tia ba tia ansa na wɔahyɛ ayie no ase a, yɛka sɛ wɔreto',

choice1: 'Ayikan',
choice2: 'Ayinan',
choice3: 'Sudwere',
choice4: 'Sukan',
answer: 2,
},
{ 
question: 'Akanfoɔ frɛ nkra a obi a ɔrewu ne n’abusuafoɔ di no sɛ',

choice1: 'Nsamankɔm',
choice2: 'Nsamankra',
choice3: 'Nsamanseɛ',
choice4: 'Nsamantoa',
answer: 2,
},
{
question: 'Sɛ obi wu na sɛ yɛka sɛ ɛyɛ sodoɔ a, na yɛrepɛ akyerɛ sɛ',

choice1: 'Owufoɔ no anwo ba',
choice2: 'Owufoɔ no wuu atɔfowuo',
choice3: 'Owufoɔno anyare anna hɔ ankyɛ',
choice4: 'Owufoɔ no na ɔdi kan a wawu ne maame mma mu',
answer: 4,
},
{ 
question: 'Akanfoɔ amammerɛmu no, sɛ ɔbarima bi wu gya ne yere akyire a, ɛdi nna sɛn na ɔbaa no tumi ware foforɔ?',

choice1: 'Abosome nkron',
choice2: 'Afe',
choice3: 'Abosome nsia',
choice4: 'Abosome mmiɛnsa',
answer: 2,
},
{ 
question: 'Sɛ wɔde obi di hene a, edin bɛn na Akanfoɔ de to abɔfra ɔbɛdi kan awo no?',

choice1: 'Kantinka',
choice2: 'Ahenkan',
choice3: 'Bɛkoe',
choice4: 'Piesie',
answer: 2,
},
{ 
question: 'Nnipa a ɛdidi soɔ yi mu deɛ ɛwɔ he na wɔfrɛ no “ɔhene yere”?',

choice1: 'Ɛsɛn',
choice2: 'Kontihene',
choice3: 'Dabehene',
choice4: 'Ɔkyeame',
answer: 1,
 },
 {
question: 'Sɛ ɔhene yɛ deɛ ɛdidi soɔ yi mu baako a, wɔtumi gyina so tu no.',

choice1: 'Sɛ ɔdidi wɔ abɔnten',
choice2: 'Ɔbɛhyɛ atadeɛ apue',
choice3: 'Sɛ ɔbɛbɔ tikwa',
choice4: 'Sɛ ɔbɛdi nkɔmmɔ wɔ abɔnten',
answer: 1,

question: 'Wɔdi Apoɔ afahyɛ wɔ mantam bɛn mu?',

choice1: 'Apueeɛ mantam',
choice2: 'Asante mantam',
choice3: 'Bono Ahafo mantam',
choice4: 'Atɔeɛ mantam',
answer: 3,
},
{ 
question: 'Edin foforɔ a Akanfoɔ de frɛ Akwasidɛɛ ne',

choice1: 'Kurukwasie',
choice2: 'Nkyekwasie',
choice3: 'Kwakwasie',
choice4: 'Monokwasie',
answer: 1,
 },
 {
question: 'Akanfoɔ frɛ beaeɛ a okuani bɔ ne kookoo, bese na ɔburu sɛ',

choice1: 'Kookooase',
choice2: 'Ahyiaeɛm',
choice3: 'Ahyehyɛeɛ',
choice4: 'Abɔeɛ',
answer: 4,
},
{ 
question: 'Sɛ ɔbɔfoɔ kɔ ahayɔ a, ɛdeɛn na ɔyɛ sɛdeɛ ɛbɛyɛ a ɔnyera?',

choice1: 'Ɔbotabota nnuaa ho',
choice2: 'Ɔgu ahahan',
choice3: 'Ɔde akaadoo gugu kwan no so',
choice4: 'Ɔde nso gugu kwan no so',
answer: 1,
 },
 {
question: 'Sɛ ɔbɔfoɔ kum ɔbɔpɔn a, ɔdware',

choice1: 'Ayeraduro',
choice2: 'Sasaduro',
choice3: 'Abɔpɔnduro',
choice4: 'Atuduro',
answer: 2,
},
{ 
question: 'Obi a ɔsene nnua de yɛ akuaba, asɛsɛdwa, waduro, ntwene ne ade no, wɔfrɛ no sɛn',

choice1: 'Duadwonfoɔ',
choice2: 'Ɔtomfoɔ',
choice3: 'Sikadwomfoɔ',
choice4: 'Dadedwomfoɔ',
answer: 1,
 },
 {
question: 'Ɔkanni ka sɛ adaduanan a ɛyɛ nnawɔtwe dodoɔ sɛn?',

choice1: 'Nsia',
choice2: 'Num ne fa',
choice3: 'Num',
choice4: 'Nsia ne fa',
answer: 1,
 },
 {
question: 'Twifoɔ nnabuo mu no, Ahinime yɛ bosome a ɛtɔ so',

choice1: 'Nan',
choice2: 'Nsia',
choice3: 'Nwɔtwe',
choice4: 'Du',
answer: 4,
},
{ 
question: 'Mpanin se, “Aberewa bɛdi twɛdeɛ a na ɛfiri….”',

choice1: 'Ne se',
choice2: 'Ne poma',
choice3: 'N’ano',
choice4: 'N’anim',
answer: 3,
},
{ 
question: 'Seantie ne ɔnwam',

choice1: 'Atikɔpɔ',
choice2: 'Awiawuo',
choice3: 'Amanenya',
choice4: 'Awiasu',
answer: 1,
 },
 {
question: 'Mmɛ yi mu deɛ ɛwɔ he na ɛkasa tia akwadworɔ?',

choice1: 'Abɔfra bɔ nwa na ɔmmɔ akyekyedeɛ',
choice2: 'Wote faako a, wote w’adeɛ so',
choice3: 'Deɛ odwan pɛ na ɔde ne fufuo bɔ',
choice4: 'Niwaa mma nsaeɛ a, wɔfase nni adeɛ',
answer: 2,
},
{ 

 question: 'Agya adeɛ bi wɔ hɔ, sɛ wotia n’ayaase a na wasere, sɛ woyi wo nan a, na wam',unchoice1: 'Ɛyɛ deɛbɛn?',

choice1:'Ɔkra',
choice2: 'Dadefidie',
choice3: 'Aponkyerɛnne',
choice4: 'Dadepɔnkɔ',
answer: 2,
},
{ 
question: 'Agya adeɛ bi wɔ hɔ, onipa mpɛ n’asɛm, nanso sɛ ɔba wo nkyɛn a, wobɔ wo nsam ma no. Ɛyɛ deɛn?',

choice1: 'Ntontom',
choice2: 'Ɔwɔ',
choice3: 'Nantwie',
choice4: 'Akorɔma',
answer: 1,
 },
 {
question: 'Deɛ ɛdidi soɔ yi nyina yɛ nokorɛ fa amoma ho, gye sɛ',

choice1: 'ɛyɛ atetesɛm',
choice2: 'ɛyɛ abakɔsɛm',
choice3: 'ɛyɛ bɔsremka',
choice4: 'ɛyɛ akokɔdurusɛm',
answer: 3,
},
{ 
question: 'Atetesɛm kyerɛ sɛ na saa onipa yi tumi de berɛ tiawa bi we aburopata?',

choice1: 'Ɔkɔmfo Anɔkye',
choice2: 'Aseibu Amamfi',
choice3: 'Didifuro Kwadwo',
choice4: 'Ɔkɔmfo Tuwoda',
answer: 2,
},
{ 
question: 'Atetesɛm kyerɛ sɛ saa onipa yi tumi de mpaboa foro bɛtene',

choice1: 'Ansa sasraku',
choice2: 'Tweneboa Kodua',
choice3: 'Agyabirinti Mɛnsa',
choice4: 'Ɔkɔmfo Anɔkye',
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
