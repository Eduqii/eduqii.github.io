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
question: 'Awia berɛ mu Twifoɔ kyea ……….',

choice1: 'maakye',
choice2: 'maadwo',
choice3: 'maawia',
choice4: 'maaha',
answer: 4, 
},
 
{
question: 'Wɔkyea Aduanafoɔ a wɔgye so',

choice1: 'yaa Asɔ na',
choice2: 'yaa Ɛsɔn',
choice3: 'yaa Adu-na',
choice4: 'yaa Awu-si',
answer: 3, 
},
 
{
question: 'Wo wɔfa maame yɛ wo deɛn?',

choice1: 'Nana',
choice2: 'Maame',
choice3: 'Sewaa',
choice4: 'Nua',
answer: 1, 
},
 
{
question: 'Sɛ Okanni ka sɛ ɔne obi yɛ mogya baako a, na ɛkyerɛ sɛ…….baako.',

choice1: 'wɔyɛ abosomma',
choice2: 'wɔyɛ abusua',
choice3: 'wɔte fie',
choice4: 'wɔbɔ ntɔn',
answer: 2, 
},
 
{
question: 'Abofra a wo papa de no bɛwaree wo maame yɛ no …….',

choice1: 'kora',
choice2: 'akumaa',
choice3: 'abanoma',
choice4: 'ba',
answer: 3, 
},
 
{
question: 'Abusua biara wɔ …… a ɔda ano.',

choice1: 'ɔkyeame',
choice2: 'abusua panyin',
choice3: 'nhenkwaa',
choice4: 'ɔhene',
answer: 2, 
},
 
{
question: 'Nhunuanim nsa din foforɔ ne ……',

choice1: 'kɔkɔɔkɔbɔ',
choice2: 'tiri nsa',
choice3: 'tiri ade',
choice4: 'danta',
answer: 1, 
},
 
{
question: 'Saa nneɛma yi mu baako na wɔde ka ɔbrani ano.',

choice1: 'Kosua',
choice2: 'Nsa',
choice3: 'Ɛmo',
choice4: 'Fufuo',
answer: 1, 
},
 
{
question: '………….. yɛ amaneɛ a wɔyɛ de pagya abaayewa kɔ ne mpanin mfeɛ mu.',

choice1: 'Ayeforohyia',
choice2: 'Awaregyeeɛ',
choice3: 'Kyiribra',
choice4: 'Bragorɔ',
answer: 4, 
},
 
{
question: 'Awaregyeeɛ mu, ɔbaa no maame gye tamboba a, papa nso gye ……..',

choice1: 'sekan',
choice2: 'tuo',
choice3: 'danta',
choice4: 'ntoma',
answer: 3, 
},
 
{
question: 'Aware ho mfasoɔ baako ne ……',

choice1: 'ɛka ne awerɛhoɔ',
choice2: 'aperepereɛ',
choice3: 'koratwe',
choice4: 'animuonyamhyɛ',
answer: 4, 
},
 
{
question: 'Ntaafoɔ akyiri ba a ɔtɔ so mmienu yɛ ……..',

choice1: 'Obiwom',
choice2: 'Tawia',
choice3: 'Nyankomago',
choice4: 'Atuakɔsɛn',
answer: 3, 
},
 
{
question: 'Akanfoɔ nam …..so gye akokoaa bi to abusua bi mu.',

choice1: 'dintoɔ',
choice2: 'asubɔ',
choice3: 'awaregyeɛ',
choice4: 'kradin',
answer: 1, 
},
 
{
question: 'Sɛ wɔwo obi Memeneda na ɔyɛ ɔbarima a, ne mmrane ne……..',

choice1: 'Atoapoma',
choice2: 'Kontonkyi',
choice3: 'Toturobonsu',
choice4: 'Bodua',
answer: 1, 
},
 
{
question: 'Bragorɔ mu no baabi a ɔbrani kɔtena yɛ ….',

choice1: 'ɔhemaa fie',
choice2: 'brafie',
choice3: 'abusuafie',
choice4: 'ɔmaame fie',
answer: 2, 
},
 
{
question: 'Akanfoɔ di adeɛ kɔ …….fam.',

choice1: 'damfo',
choice2: 'sewaa',
choice3: 'papa',
choice4: 'maame',
answer: 4, 
},
 
{
question: 'Nnipakuo a wɔnoa ɔhene aduane wɔ ahemfie ne …..',

choice1: 'Akyerɛmadefoɔ',
choice2: 'Soodofoɔ',
choice3: 'Ɛsɛnfoɔ',
choice4: 'Adumfoɔ',
answer: 2, 
},
 
{
question: 'Ahemfie nnipa no nyinaa Sahene ne hwan?',

choice1: 'Gyaasehene',
choice2: 'Ɔkyeame',
choice3: 'Kurontihene',
choice4: 'Abrafoɔ',
answer: 1, 
},
 
{
question: 'Sɛ wɔpaw ɔhene foforo a …….kyerɛ ɔmanfoɔ.',

choice1: 'ɔnante',
choice2: 'ɔsuae',
choice3: 'ɔdidi',
choice4: 'ɔkasa',
answer: 2, 
},
 
{
question: 'Ahemfo yi mu hwan na ɔkorɔn sene wɔn a aka no.',

choice1: 'Kurontihene',
choice2: 'Sanaahene',
choice3: 'Gyaasehene',
choice4: 'Ɔmanhene',
answer: 4, 
},
 
{
question: 'Ahemfo baasa a wɔdii Fantefoɔ anim bepuee mpoano ne ……….',

choice1: 'Ntim Gyakari, Aseibu Amenfi, Opoku Ware',
choice2: 'Ɔsono, Ntim Gyakari, Ɔsɛe Bonsu',
choice3: 'Oburumankoma, Ɔdapagyan, Ɔsono.',
choice4: 'Ɔsɛe Tutu, Tweneboa Kodua, Ansa Sasraku',
answer: 3, 
},
 
{
question: 'Akan man mu sɛ obi ka ntam a …..',

choice1: 'wɔhwe no',
choice2: 'wɔde no kɔ kɔɔto',
choice3: 'wɔkyere no dedua',
choice4: 'wɔbɔ n’aba so',
answer: 3, 
},
 
{
question: 'Nsɛm a yɛde wie nsaguo taa yɛ deɛ yɛde ……',

choice1: 'hyira',
choice2: 'boa',
choice3: 'frɛ',
choice4: 'dome',
answer: 4, 
},
 
{
question: 'Nnoɔma a yɛde yi apaeɛ no bi ne …………….',

choice1: 'nsa a ɛboro',
choice2: 'fanta',
choice3: 'ntunkum',
choice4: 'nsa dɔkɔdɔkɔ',
answer: 1, 
},
 
{
question: '…………….yɛ berɛ a obi anto ne kɔn anwu.',

choice1: 'Yarewuo',
choice2: 'Atɔfowuo',
choice3: 'Owupa',
choice4: 'Mpam wuo',
answer: 2, 
},
 
{
question: 'Asiedeɛ a Akanfoɔ de ma owufoɔ kyerɛ wɔn ………wɔ owuo akyi.',

choice1: 'Ayamye',
choice2: 'Gyedie',
choice3: 'Nteaseɛ',
choice4: 'Ahɔhoyɛ',
answer: 2, 
},
 
{
question: 'Suban a Ananse taa da no adi yɛ ……',

choice1: 'ahobrɛaseɛ',
choice2: 'awiɛmfoɔ',
choice3: 'aniteɛ',
choice4: 'aboafoɔ',
answer: 3, 
},
 
{
question: 'Ɛnam hwan so na Onyankopɔn kɔɔ soro?',

choice1: 'Ɔbarima bi',
choice2: 'Papa bi',
choice3: 'Maame bi',
choice4: 'Aberewa bi',
answer: 4, 
},
 
{
question: 'Kɔkɔɔ a ɛwɔ Ghana frankaa mu no kyerɛ ……',

choice1: 'mogya a nananom hwie guiɛ',
choice2: 'ɔman no kwaeɛ',
choice3: 'ɔman no nkɔsoɔ',
choice4: 'ɔman no sika kɔkɔɔ',
answer: 1, 
},
 
{
question: 'Tikorɔ mmienu a ɛbɔ mu kyerɛ sɛ ……',

choice1: 'tire no asɛe',
choice2: 'tire mmienu ahyia',
choice3: 'asɛm bɔne asi',
choice4: 'tikorɔ nkɔ agyina',
answer: 4, 
},
 
{
question: 'Onipa anim kam ma yɛhunu ne …….',

choice1: 'ntɔn a ɔbɔ',
choice2: 'baabi a ɔfiri',
choice3: 'mmɔdemmɔ',
choice4: 'suban',
answer: 2, 
},
 
{
question: 'Ɔbɛtwani de …… fite ne mmɛ.',

choice1: 'egya',
choice2: 'mpapa',
choice3: 'tɛnee',
choice4: 'berɛ',
answer: 3, 
},
 
{
question: 'Afahyɛ bɛn na wɔdi no wɔ Simpa?',

choice1: 'Aboakyer',
choice2: 'Akwambɔ',
choice3: 'Fetu',
choice4: 'Kundum',
answer: 1, 
},
 
{
question: 'Asante afahyɛ kɛseɛ ne deɛ ɛwɔ he?',

choice1: 'Nkyidwoɔ',
choice2: 'Adɛɛ kɛseɛ',
choice3: 'Awukudeɛ',
choice4: 'Nkyifie',
answer: 2, 
},
 
{
question: 'Agya adeɛ bi wɔ hɔ wosoma no a ɔnkɔ nso worekɔ a na ɔdi wakyi. Ɛyɛ ………',

choice1: 'Owia',
choice2: 'Sunsum',
choice3: 'ɔkra',
choice4: 'ɔsaman',
answer: 2, 
},
 
{
question: 'Wɔtaa de saa asɛm yi hyɛ abisaa ase.',

choice1: 'Akonta',
choice2: 'Wɔfa',
choice3: 'Agya',
choice4: 'Nana',
answer: 3, 
},
 
{
question: 'Ɔbaatan na ………deɛ ne ba bɛdie.',

choice1: 'wɔnim',
choice2: 'ɔnim',
choice3: 'ɔnnim',
choice4: 'wɔnnim',
answer: 2, 
},
{ 
	question:'Obi kɔdi asɛm na ɔdi nkonim a ɔfura ntama.',

choice1: 'tuntum',
choice2: 'kɔkɔɔ',
choice3: 'kente',
choice4: 'fitaa',
answer: 4, 

 },
{
question: 'Akokɔ a ɔbutu ne mma so nsɛnkyerɛnneɛ kyerɛ',

choice1: 'ehu',
choice2: 'nokorɛdie',
choice3: 'patapaa',
choice4: 'bammɔ',
answer: 4, 
},
 
{
question: 'Ako gyina hɔ ma abusua',

choice1: 'Agona',
choice2: 'Ɔyokoɔ',
choice3: 'Aduana',
choice4: 'Ɛkoɔna',
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
