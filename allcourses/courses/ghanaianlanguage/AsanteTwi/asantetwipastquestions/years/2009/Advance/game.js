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
question: 'Sɛ obi firi akwanhyia mu a, nkyea bɛn na ɛfata no?',

choice1: 'Akwaaba',
choice2: 'Due',
choice3: 'Frɛ nkwa',
choice4: 'Wo tiri nkwa',
answer: 4,
 },
 {

question: 'Akanfoɔ kyea afirinhyia pa ….bere mu..',

choice1: 'Afudɔ',
choice2: 'Anigyeɛ',
choice3: 'Buronya',
choice4: 'Asuso',
answer: 3,
 },
 {

question: 'Sɛ obi rekyea ɔhene na ɔkwaha ne ntoma a, ɛkyerɛ deɛn?',

choice1: 'Obuo',
choice2: 'Koroyɛ',
choice3: 'Nimdeɛ',
choice4: 'Onuadɔ',
answer: 1,
 },
 {

question: 'Sɛ obi nkyea nnyesoɔ ne “Yaa-sɔna” a, na ɔbɔ abusua bɛn?',

choice1: 'Asakyiri',
choice2: 'Asona',
choice3: 'Ɛkoɔna',
choice4: 'Ɔyoko',
answer: 2,
 },
 {

question: 'Abɔfra a odi Badu akyi no Akanfoɔ frɛ no…..',

choice1: 'Duku',
choice2: 'Kontɔ',
choice3: 'Nsowaa',
choice4: 'Piesie',
answer: 1,
 },
 {

question: 'Nsuo ne nsa a wɔde ka abɔfra ano wɔ abadintoɔ mu kyerɛ sɛ……',

choice1: 'ɔmmɛyɛ osikani',
choice2: 'ɔmmɛyɛ ɔhene',
choice3: 'ɔmmɛka nokorɛ',
choice4: 'ɔnyin nkyɛ',
answer: 3,
 },
 {

question: 'Edin Antobam ase kyerɛ sɛ abɔfra bi ammɛto ne …..',

choice1: 'Maame',
choice2: 'Papa',
choice3: 'Wɔfa',
choice4: 'Nana',
answer: 2,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Kyerɛ deɛ ɛnti a Akanfoɔ nware wɔn nuanom.',

choice1: 'Ɛyɛ abosonsom',
choice2: 'Wɔn mma bɛwuwu',
choice3: 'Wonnya sika',
choice4: 'Ɛyɛ mogyafra',
answer: 4,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Amanneɛ bɛn na Akanfoɔ yɛ ma abaayewa a wadu ne mpaninfeɛ so?',

choice1: 'Ayeforɔhyia',
choice2: 'Bragorɔ',
choice3: 'Kyiribra',
choice4: 'Akradwareɛ',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Nnoɔma yi mu deɛ ɛwɔ he na ɛnsɛ sɛ ɔsakyima no de ne se ka mu?',

choice1: 'Nkosua',
choice2: 'Akokɔnam',
choice3: 'Nsa',
choice4: 'Borɔdedwo',
answer: 1,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Sɛ Akanfoɔ se abaayewa bi abu ne nsa a, na ɛkyerɛ sɛn?',

choice1: 'Ne nsam ayɛ duru',
choice2: 'Wayɛ bra',
choice3: 'Ne nsa ayɛ tenten',
choice4: 'Owiawia nnoɔma',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Nnoɔma a ɛdidi so yi deɛ ɛwɔ he na sɛ ɔbarima du ne mpaninfeɛ so a, wɔma no?',

choice1: 'Otuo ne nkrante',
choice2: 'Sekan ne kɛntɛn',
choice3: 'Asosɔ ne otuo',
choice4: 'Asɔ ne otuo',
answer: 1,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Nnoɔma a wɔde ma abarima no, dɛn na ɛsɛ sɛ ɔde yɛ?',

choice1: 'ƆbƆtƆn',
choice2: 'Ɔde bɛma ne yere',
choice3: 'Ɔde bɛbɔ ne bra',
choice4: 'Ɔde bɛkyerɛ ne nnamfonom',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Hyire a akumaa de sra ɔbaa a wagyae awareɛ kyerɛ sɛ awareɛ no……',

choice1: 'Asɔ yiye',
choice2: 'Agu koraa',
choice3: 'Adi mu',
choice4: 'Nni mu',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Deɛn ne akonta sekan?',

choice1: 'Ntoma a wɔde ma awofoɔ',
choice2: 'Nkrantɛ a nkontanom gye',
choice3: 'Nnoɔma a wɔdema badwafoɔ',
choice4: 'Sika a ɔbarima tua ma ne yere nua mmarima',
answer: 4,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Kyerɛ deɛ ɛnti a Akanfoɔ mpɛ koratwe.',

choice1: 'Ɛde mogyafra ba fie',
choice2: 'Ɛde kyiribra ba abusua mu.',
choice3: 'Ɛtaa de ntɔkwa ba awarefoɔ ntam',
choice4: 'Ɛtaa de mmusuo ba fie',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Mpaninfoɔ regu awareɛ a, wɔma awarefoɔ no mu biara……',

choice1: 'didi ansa',
choice2: 'ma ne wɔfa kasa',
choice3: 'bɔ ne nkuro',
choice4: 'bu nkontaa ansa',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ aware ho.\n\n Deɛn pɔtee na abusuafoɔ hwɛ ho de ɔbaa ma ɔbarima bi awareɛ?',

choice1: 'Suban',
choice2: 'Ahoɔfɛ',
choice3: 'Adan',
choice4: 'Sika',
answer: 1,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ayiyɔ ne adedie ho.\n\n Hyehyɛ ayiyɔ dwumadie yi nnidisoɔ nnidisoɔ.',

choice1: 'Nnabɔ, funsie, nsawabɔ',
choice2: 'Nnabɔ, nsawabɔ, funsie',
choice3: 'Funsie, nnabɔ, nsawabɔ',
choice4: 'Nsawabɔ, funsie, nnabɔ',
answer: 1,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ayiyɔ ne adedie ho.\n\n Deɛn na ntoma fitaa fura da no adi wɔ ayie ase?',

choice1: 'Ɔbɔfoɔ bi awu',
choice2: 'Ɔpanin bi a wanyin yiye awu',
choice3: 'Aberanteɛ bi awu',
choice4: 'Abɔfra bi awu',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ayiyɔ ne adedie ho.\n\n Agya bi wu a, agya bi te ase. Yɛtaa te saa bɛ yi wɔ…..ase.',

choice1: 'Abadintoɔ',
choice2: 'Awaregyaeɛ',
choice3: 'Ayeforɔhyia',
choice4: 'Ayie',
answer: 4,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ayiyɔ ne adedie ho.\n\n Sɛ………te ase a, Badu ntumi nni adeɛ..',

choice1: 'Ata',
choice2: 'Tawia',
choice3: 'Nkroma',
choice4: 'Panin',
answer: 3,
 },
 {
 
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ho.\n\n Deɛn nnoɔma kuo na wɔhwɛ ansa na wɔde obi adi hene?',

choice1: 'Suban, adan, abusua',
choice2: 'Adamfo, sika, abusua',
choice3: 'Abusua, suban, ahosuo',
choice4: 'Sika, ada, ahosuo.',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ho.\n\n Dwuma titire bɛn na Banmuhene di wɔ ahemfie?',

choice1: 'Osie ahemfo sika',
choice2: 'Ɔhwɛ ma wosie ahemfo',
choice3: 'Ɔno na ɔnoa ɔhene aduane',
choice4: 'Ɔno na ɔkasa ma ɔhene',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ho.\n\n Kyerɛ dwuma a Akanfoɔ yɛ a ɛkyerɛ sɛ wɔatu ↄhene adeɛ so.',

choice1: 'Wɔyi ne nan mu mpaboa',
choice2: 'Wɔpa ne ho ntoma',
choice3: 'Wɔtwa no asu',
choice4: 'Wɔde no kɔtena dan mu',
answer: 1,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ho.\n\n Ɛhefoɔ na wɔde wɔn ntadeɛ mpasampasa a mogya wɔmu di akɔneaba berɛ a ɔhene abɔ dwa?',

choice1: 'Ɛsɛn',
choice2: 'Abrafoɔ',
choice3: 'Akyerɛma',
choice4: 'Akyeame',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ho.\n\n Obi a ɔnoa ɔhene aduane yɛ…..',

choice1: 'Ɔkyerɛma',
choice2: 'Ɔkra',
choice3: 'Ɛsɛn',
choice4: 'Osodoni',
answer: 4,
 },
 {
 
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ tete nnwuma ho.\n\n Obi a ɔde nnua yɛ adwinnie yɛ……',

choice1: 'Odunsini',
choice2: 'Duadwumfoɔ',
choice3: 'Onyansafoɔ',
choice4: 'Okuafoɔ',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ tete nnwuma ho.\n\n Nnwuma yi mu deɛ ɛwɔ he na wɔyɛ no wɔ nwura mu?',

choice1: 'Osoodo',
choice2: 'Atono',
choice3: 'Sikadwinie',
choice4: 'Ahayɔ',
answer: 4,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Kyerɛ ɛbɛ yi ase. Wo ntumi wo nnoɔma a, wose wo kahyire nyɛ.',

choice1: 'Wo kɔn mu nyɛ duru a, nsoa nnoɔma',
choice2: 'Wo kahyire nyɛ kɛseɛ a, nsoa adeɛ',
choice3: 'Wontumi adeɛ bi yɛ a, na wode hyɛ obi.',
choice4: 'Wopɛ adesoa a, nhwehwɛ kahyire',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Ɔkwaterekwa se ɔbɛma wo ntoma a tie ne din.',

choice1: 'Ohiani bi anya sika',
choice2: 'Obi rebɔ wo nkɔmmɔ',
choice3: 'Obi pɛ sɛ wotɔ ntoma',
choice4: 'Obi redaadaa ne yɔnko sɛ ɔbɛma no biribi a ɔnni bi.',
answer: 4,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Suban bɛn na nwa ne akyekyedeɛ da no adi wɔ abɛbuo mu?',

choice1: 'Asisie',
choice2: 'Ntɔkwa',
choice3: 'Asomdwoeɛ',
choice4: 'Pɛsɛmenkomenya',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ Agyarekɔ ne nyansapɔ ho.\n\n Agya ade bi wɔ hɔ, sɛ wonam a, etumi di w’anim anaa w’akyi. Ɛyɛ deɛn?',

choice1: 'Nsuo',
choice2: 'Lɔre',
choice3: 'Saakre',
choice4: 'Sunsuma',
answer: 4,
 },
 {
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ Agyarekɔ ne nyansapɔ ho.\n\n Agya wɔ adeɛ bi. Wotia n’ayaase a, na wasere, wopagya wo nan a, na wamuna.',

choice1: 'Asopatere',
choice2: 'Paneɛ',
choice3: 'Dadefidie',
choice4: 'Kotokuo',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ Agyarekɔ ne nyansapɔ ho.\n\n Nnipa baahe na wodi dwa?',

choice1: 'Baako',
choice2: 'Baanu',
choice3: 'Baasa',
choice4: 'Baanan',
answer: 2,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ Agyarekɔ ne nyansapɔ ho.\n\n Nkyene ante aduane mu a, onipa akwaa bɛn na ohu?',

choice1: 'Tɛkrɛma',
choice2: 'Ani',
choice3: 'Yafunu',
choice4: 'Aso',
answer: 1,
 },
 {
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ Agyarekɔ ne nyansapɔ ho.\n\n Abisaa bi ka sɛ muka yɛ akɔmfoɔ baasa. Sɛ ɔbaako nni hɔ a wɔnyɛ adwuma. Adesua bɛn na ɛwɔ saa abisaa yi mu?',
choice1: 'Anuanom baasa',
choice2: 'Koroyɛ',
choice3: 'Akɔmfoɔnkabom',
choice4: 'Mpanimfoɔ agyinatuo',
answer: 2,
 },
 {
 
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsaguo ne nsɛnkyerɛnne ho.\n\n Kyerɛ ɔkwan baako a Akanfoɔ fa so kasa kyerɛ Onyankopɔn..',

choice1: 'Wɔbɔ dawuro',
choice2: 'Wɔka kyerɛ Asaase Yaa',
choice3: 'Woyi apae',
choice4: 'Wɔkɔ asieɛ',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsaguo ne nsɛnkyerɛnne ho.\n\n Suban bɛn na Akanfoɔ da no adi wɔ wɔn atamfo ho wɔ apaeɛ mu?',

choice1: 'Wɔde wɔn bɔne kyɛ wɔn',
choice2: 'Wɔne wɔn yɛ aka',
choice3: 'Wɔdome wɔn nyinaa',
choice4: 'Wɔpa wɔn kyɛw',
answer: 3,
 },
 {

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsaguo ne nsɛnkyerɛnne ho.\n\n Sɛ ɔhene bi akyampoma so agyiraehyɛdeɛ yɛ akoo a, na ɛkyerɛ deɛn??',

choice1: 'Ahoteɛ',
choice2: 'Anuɔden',
choice3: 'Anigye',
choice4: 'Anoteɛ',
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
