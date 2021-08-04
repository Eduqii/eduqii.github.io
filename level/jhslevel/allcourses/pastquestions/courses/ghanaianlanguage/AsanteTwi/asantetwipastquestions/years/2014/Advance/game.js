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
	
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Akanfoɔ kyea obi a ne busuani afiri mu sɛn?',

choice1: 'Afiri mu',
choice2: 'Gyae su',
choice3: 'Kosɛ',
choice4: 'Yaakɔ',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ obi redidi a Akanfoɔ kyea no sɛn?',

choice1: 'Kuta mu o!',
choice2: 'Adwuma o!',
choice3: 'Ayikoo!',
choice4: 'Me nsa aka o!',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ abɔfra bi de Asaaseasa a, na ɛkyerɛ sɛ ɔyɛ',

choice1: 'temanmuhunu',
choice2: 'ɔdehyeɛ',
choice3: 'bagyina',
choice4: 'ɔmamfrani',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ awofoɔ bi brɛ ansa na wɔawo abɔfra bi a, wɔfrɛ no',

choice1: 'Abayie',
choice2: 'Abɛbrɛsɛ',
choice3: 'Afriyie',
choice4: 'Akyirem',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Ɔbarima ware a, ne yere nuammarima yɛ ne',

choice1: 'koranom',
choice2: 'nkummaafoɔ',
choice3: 'nsenom',
choice4: 'nkontanom',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Wo maame wɔfa yɛ wo',

choice1: 'abusuapanin',
choice2: 'papa',
choice3: 'nana',
choice4: 'wɔfa',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Ɔbaa bi wo a, ne mma no deɛn ne ne nana?',

choice1: 'Nanakumaa',
choice2: 'Nanankasoa',
choice3: 'Nananom',
choice4: 'Nsenom',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ yɛbɔ ɔhene mmrane sɛ Otumfoɔ a, na ɛkyerɛ sɛ',

choice1: 'ɔwɔ tumi',
choice2: 'ɔpɛ ntɔkwa',
choice3: 'ɔyɛ kɛseɛ',
choice4: 'ɔwɔ ahoɔden',
answer: 1,
 }, 

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo, adedie ne nsaguo ho.\n\n Akanfoɔ se sɛ woredware a, nnto dwom ɛfiri sɛ',

choice1: 'Samina bɛkɔ w’anom',
choice2: 'Wonnware ntɛm',
choice3: 'Nsuo bɛkɔ w’anom',
choice4: 'Wo ho mfi',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo, adedie ne nsaguo ho.\n\n Agya bi wu a, hwan na ɔtɔ adaka no?',

choice1: 'Abusuafoɔ',
choice2: 'Anuanom',
choice3: 'Mma',
choice4: 'Okunafoɔ',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo, adedie ne nsaguo ho.\n\n Amanneɛ bɛn na wɔyɛ de gya owufoɔ kwan korakora?',

choice1: 'Wɔdede no',
choice2: 'Wɔdware no',
choice3: 'Wɔgu nsa',
choice4: 'Wɔyɛ no ayie',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo, adedie ne nsaguo ho.\n\n Sɛ odi di owufoɔ bi adeɛ a,',

choice1: 'ɔtɔ owufoɔ no agyapadeɛ no',
choice2: 'ɔhwɛ owufoɔ no agyapadeɛ so',
choice3: 'ɔtɔn owufoɔ no agyapadeɛ no',
choice4: 'wɔde owufoɔ no agyapadeɛ kyɛ no.',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo, adedie ne nsaguo ho.\n\n Akanfoɔ regu nsa a, wɔfrɛ',

choice1: 'Abosom ne ateasefoɔ',
choice2: 'Nsamanfoɔ ne ateasefoɔ',
choice3: 'Onyankopɔn ne abosom',
choice4: 'Onyankopɔn ne ateasefoɔ',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo, adedie ne nsaguo ho.\n\n Ɛdeɛn na Akanfoɔ de wie nsaguo?',

choice1: 'Amannebɔ',
choice2: 'Nkamfoɔ ne ntontom',
choice3: 'Nhyira ne nnome',
choice4: 'Ɔfrɛ',
answer: 3,
 }, 

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asɛnnie, ahennie ne atetesɛm ho.\n\n Ɔhene resuae a,',

choice1: 'ɔhyɛ atadeɛ',
choice2: 'ɔka ntam',
choice3: 'ɔnom nsa',
choice4: 'ɔto dwom',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asɛnnie, ahennie ne atetesɛm ho.\n\n Deɛ ɛdidi soɔ yi mu baako nka asɛm a wɔgyina so tu ɔhene wɔ Akanman mu ho',

choice1: 'Ɔhene a ɔdidi abɔnten',
choice2: 'Ɔhene a ɔmpɛ kasa',
choice3: 'Ɔhene a ɔmmu ne mpanimfoɔ',
choice4: 'Ɔhene a ɔyɛ sadweam',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asɛnnie, ahennie ne atetesɛm ho.\n\n AAbusuapanin adwuma titire ne sɛ',

choice1: 'ɔhwɛ abusua agyapadeɛ so',
choice2: 'ɔhwɛ kuro so',
choice3: 'ɔhwɛ akunafoɔ',
choice4: 'ɔtwe manso',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asɛnnie, ahennie ne atetesɛm ho.\n\n Deɛ ɛdi kan wɔ asɛnnie mu ne',

choice1: 'Nkurobɔ',
choice2: 'Adansedie',
choice3: 'Agyinatuo',
choice4: 'Soboɔ',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asɛnnie, ahennie ne atetesɛm ho.\n\n Sɛ mpanimfoɔ tu wɔn nan si asɛm so a, ɛkyerɛ sɛ',

choice1: 'Wɔabu obi bem',
choice2: 'Wɔabu ntɛnkyea',
choice3: 'Wɔatu asɛm no ahyɛ da',
choice4: 'Wɔammu obiara fɔ',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asɛnnie, ahennie ne atetesɛm ho.\n\n Asantefoɔ atetesɛm kyerɛ sɛ wɔn ……………hyɛ Sikadwa Kofi mu.',

choice1: 'Ahoɔden',
choice2: 'Animuonyam',
choice3: 'Nyansa',
choice4: 'Sunsum',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asɛnnie, ahennie ne atetesɛm ho.\n\n Ɔkɔmfo Anɔkye yii Sikadwa Kofi firii',

choice1: 'ewiem',
choice2: 'ɛfam',
choice3: 'adan mu',
choice4: 'Nsuo mu',
answer: 1,
 }, 

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Ɔbaa a yɛregoro no bra bɔ kosua a yɛde ka n’ano mu a, ɛkyerɛ sɛ',

choice1: 'ɔrennya ahotɔ',
choice2: 'ɔrenwo ba',
choice3: 'ɔrennya kunu',
choice4: 'ɔrenyɛ yie',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Yeinom ka nneɛma a wɔde ka asakyima ano ho.',

choice1: 'Akokɔ ne odwan',
choice2: 'Ampesie ne fufuo',
choice3: 'ɛtɔ ne kosua',
choice4: 'nsa ne Nsuo',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Sɛ ɔbarima pɛ sɛ ɔware ɔbaa foforɔ ka ne yere ho a,',

choice1: 'ɔgyae ne yere panin no',
choice2: 'ɔgu ne yere panin no hyire',
choice3: 'ɔtua ayeferɛ',
choice4: 'ɔpata ne yere panin no',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Ɔbarima ware maa baanu a, mmaa no yɛ',

choice1: 'Anuanom',
choice2: 'Nkummaafoɔ',
choice3: 'Akorafoɔ',
choice4: 'Yerenom',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Deɛ ɛdidi soɔ yi mu baako de awaregyaeɛ ba wɔ Akanman mu',

choice1: 'Ɔbarima a ɔdɔ Beneda',
choice2: 'Ɔbarima a ɔdidi dodo',
choice3: 'Ɔbarima a ɔnni ahoɔden',
choice4: 'Ɔbarima a ahia no',
answer: 1,
 },
  {
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Ɔtomfoɔ de saa nneɛma yi mu bi yɛ n’adwuma.',

choice1: 'Nsuo, sradaa, dadeɛ',
choice2: 'Sradaa, afa, egya',
choice3: 'Afa, dadeɛ, egya',
choice4: 'Egya, Nsuo, sradaa',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Aduane a wɔde ma nsamanfoɔ afahyɛ berɛ mu no, wɔmfa …….nto mu.',

choice1: 'Gyeene',
choice2: 'Nam',
choice3: 'Ntoosi',
choice4: 'Mako',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Dwumadie titire bɛn na wɔde wie afahyɛ?',

choice1: 'Wɔbɔ dwa',
choice2: 'Wɔkɔ nkonnwafie',
choice3: 'Wɔsiesie nsɛm',
choice4: 'Wɔyɛ kwasafodwuma',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Ako yɛ Agonafoɔ akraboa a ɔgyina hɔ ma',

choice1: 'Ahoɔherɛ',
choice2: 'Anoteɛ',
choice3: 'Animuonyam',
choice4: 'Ahoteɛ',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Ɔhene a nwa ne akyekyedeɛ sisi n’akyeampoma so kyerɛ sɛ',

choice1: 'ɔwɔ tema',
choice2: 'ɔpɛ asomdwoeɛ',
choice3: 'ɔnim nyansa',
choice4: 'ɔpɛ ntɔkwa',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ bragorɔ, awareɛ, nnwuma, afahyɛ ne nsɛnkyerɛnneɛ ho.\n\n Akanman mu sɛ dɔsɔ si obi asene a na ɛkyerɛ sɛ ɔyɛ',

choice1: 'ɔhene',
choice2: 'ɔyaresafoɔ',
choice3: 'nkonyaayifoɔ',
choice4: 'ɔkɔmfoɔ',
answer: 4,
 }, 

{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Ɔbosome a ɛtɔ so nsia din de',

choice1: 'Ahinime',
choice2: 'Ayɛwɔhomumɔ',
choice3: 'Kitawonsa',
choice4: 'Oforisuo',
answer: 2,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Nnafua aduasa na ɛwɔ abosome kuo yi mu.',

choice1: 'Oforisuo, Ɛbɔ',
choice2: 'Ɔpɛpɔn, Kɔtɔnimma',
choice3: 'Ɔpɛnimma Obubuo',
choice4: 'Ɔsannaa, Kitawonsa',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Anansesɛm mu aberewa gyina hɔ ma',

choice1: 'Nyinkyerɛ',
choice2: 'Ntoboaseɛ',
choice3: 'Nsekuro',
choice4: 'Nyansa',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Wosuro atɛkyɛ mpaboa a,',

choice1: 'Wohyɛ n’atadeɛ',
choice2: 'Wohyɛ ne kyɛ',
choice3: 'Wofira ne ntoma',
choice4: 'Wohyɛ ne pieto',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Abɔfra nnyinii a, ɔnsere',

choice1: 'ɔgramoo',
choice2: 'ɔkɛseɛ',
choice3: 'akwatia',
choice4: 'ateae',
answer: 3,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Abɔfra repɛ kɔkɔɔ ahwɛ a, yɛde ………..kyerɛ no.',

choice1: 'kogyan',
choice2: 'mogya',
choice3: 'ngo',
choice4: 'damenama ahaban',
answer: 4,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Agya adeɛ bi wɔ hɔ, ɔnkɔ nsuo nanso daa nsuo wɔ n’ankorɛ mu.',

choice1: 'Kube',
choice2: 'Aborɔbɛ',
choice3: 'Ankaa',
choice4: 'Amango',
answer: 1,
 }, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ asranna, anansesɛm, mmɛ ne agya rekɔ ho.\n\n Agya adeɛ bi wɔ hɔ, sɛ ɛkɔm de no a ɔda fam, sɛ ɔmee a na ɔgyina hɔ. Ɛyɛ',

choice1: 'Ahina',
choice2: 'Bɔtɔ',
choice3: 'Ankorɛ',
choice4: 'Bokiti',
answer: 2,
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
