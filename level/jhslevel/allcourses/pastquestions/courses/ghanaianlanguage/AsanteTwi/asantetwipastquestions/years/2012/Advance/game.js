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

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ wo dɔfo bi bɛsra wo awia na ɔrekɔ a, woma no',

choice1: 'due ne awɔ',
choice2: 'due ne awia',
choice3: 'due ne brɛ',
choice4: 'due ne nwunu',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ wo ne obi rekɔ baabi na ɔdi kan na wokɔto no a, wokyea no sɛ…',

choice1: 'mema wo ahyia',
choice2: 'mema wo ɔduru',
choice3: 'nkyɛreba',
choice4: 'mema wo akwaaba',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Wɔwo abɔfra na ɔdi …….a, wɔto ne din',

choice1: 'adaduanan',
choice2: 'afe',
choice3: 'nnawɔtwe',
choice4: 'bosome',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Akanfoɔ de wɔn babarima panin to…..',

choice1: 'Abusuapanin',
choice2: 'Agya nua panin',
choice3: 'Agya kumaa',
choice4: 'Agya papa',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ ɔbarima ware a, ne yere maame nuanom yɛ ne',

choice1: 'nsenom',
choice2: 'koranom',
choice3: 'nkumaafoɔ',
choice4: 'nsenkumaa',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Sɛ ɔbaa ware a, ne kunu nuammarima yɛ ne ……',

choice1: 'koranom',
choice2: 'nkontanom',
choice3: 'nsenom',
choice4: 'kununom',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Ɔbaa ware a, ne kunu nuammarima mma yɛ ne….',

choice1: 'koramma',
choice2: 'nananom',
choice3: 'mmannoma',
choice4: 'mma',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea, edin ne abusuabɔ ho.\n\n Nsuo ne nsa a wɔde sɔ abɔfra anom berɛ a wɔreto ne din no kyerɛ ……',

choice1: 'ahoɔden',
choice2: 'anoteɛ',
choice3: 'nokorɛdie',
choice4: 'papa ne bɔne',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo ne bragorɔ ho.\n\n Abamo akyiwadeɛ ne…..',

choice1: 'akokɔ',
choice2: 'kusie',
choice3: 'ɔtwe',
choice4: 'wansane',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo ne bragorɔ ho.\n\n Akanman mu sɛ obi rewu a,……',

choice1: 'Wɔgu n’anom nsuo',
choice2: 'Wɔde no to ne benkum so',
choice3: 'Wɔnsɔ ne mu',
choice4: 'Wɔ teatea no',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo ne bragorɔ ho.\n\n Nnoɔma a Akanfoɔ de gya owufoɔ kwan no wɔfrɛ no sɛn?',

choice1: 'Akatasodeɛ',
choice2: 'Akyɛdeɛ',
choice3: 'Asiedeɛ',
choice4: 'Nkradiɛ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo ne bragorɔ ho.\n\n Sɛ obi de ka na ɔwu a, hwan na ɔtua ka no?',

choice1: 'abusuapanin',
choice2: 'anuanom',
choice3: 'obiara ntua',
choice4: 'odiadefo',
answer: 4,


 },
 {
 question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo ne bragorɔ ho.\n\n Kukuo a okunafoɔ kɔbɔ no kurotia no kyerɛ sɛ…..',

choice1: 'ɔne ne kunu adi ntetemu',
choice2: 'ɔmpɛ kukuo no',
choice3: 'ne bo afu',
choice4: 'ɔnnidi bio',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo ne bragorɔ ho.\n\n Ansa na wɔbɛgoro abaayewa bi bra no, wɔkɔbɔ hwan amanneɛ?',

choice1: 'Abusuapanin',
choice2: 'Ɔhemaa',
choice3: 'Ɔhene',
choice4: 'Nananom',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ akyiwadeɛ, owuo ne bragorɔ ho.\n\n Sɛ wɔgoro abaayewa bi kyiribra a, ……..',

choice1: 'ɛhyɛ abusua no animuonyam',
choice2: 'ɛma ɔbaa no nya dwetire',
choice3: 'ɛgu awofoɔ no anim ase',
choice4: 'ɛma ɔbaa no nya kunu pa',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahennie, asɛnnie ne afahyɛ ho.\n\n Yeinom baako nka ɔhemaa adwuma ho',

choice1: 'Ɔsiesie nsɛm',
choice2: 'Ɔtu ɔhene fo',
choice3: 'Ɔtumi pa ɔhene',
choice4: 'Ɔnoa ɔhene aduane',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahennie, asɛnnie ne afahyɛ ho.\n\n Nnipakuo yi mu baako nni dwuma wɔ Akanfoɔ asɛnnie mu.',

choice1: 'Adansefoɔ',
choice2: 'Lɔyafoɔ',
choice3: 'Agyinatufoɔ',
choice4: 'Badwafoɔ',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahennie, asɛnnie ne afahyɛ ho.\n\n Sɛ Akanfoɔ retu agyina wɔ asɛnnie mu a, na ɛkyerɛ sɛn?',

choice1: 'Wɔrekɔbisa aberewa',
choice2: 'Wɔrekɔdidi aba',
choice3: 'Wɔatu asɛm no ahyɛ da',
choice4: 'Wɔregye wɔn ahome',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahennie, asɛnnie ne afahyɛ ho.\n\n Hwan na ɔhwɛ ɔhene fotoɔ so?',

choice1: 'Ankɔbeahene',
choice2: 'Gyaasehene',
choice3: 'Sanahene',
choice4: 'Kurontihene',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahennie, asɛnnie ne afahyɛ ho.\n\n Hwan na ɔyan ɔhene atumpan?',

choice1: 'Ɛsɛn',
choice2: 'Ɔkyerɛma',
choice3: 'Abrafoɔ',
choice4: 'Mmɛnsonfoɔ',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahennie, asɛnnie ne afahyɛ ho.\n\n Aboa bɛn na Kumawufoɔ de di Papa afahyɛ?',

choice1: 'ɔsono',
choice2: 'ɔtwe',
choice3: 'nantwie',
choice4: 'wansane',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahennie, asɛnnie ne afahyɛ ho.\n\n Sɛ ɔhene reba adwabɔ ase afahyɛ berɛ a, …….',

choice1: 'ɔnante bɔkɔɔ',
choice2: 'ɔkasakasa',
choice3: 'ɔhurihuri',
choice4: 'ɔtu mmirika',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ, nnapɔnna ne adwuma ho.\n\n Wɔfrɛ wɔn a wɔdi ɔbɔfoɔ akyi kɔ ahayɔ sɛ………',

choice1: 'Aboafoɔ',
choice2: 'Ayawfoɔ',
choice3: 'Akyidifoɔ',
choice4: 'Asomafoɔ',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ, nnapɔnna ne adwuma ho.\n\n Akanfoɔ tumi frɛ Akwasidɛɛ sɛ…….',

choice1: 'Fɔkwasie',
choice2: 'Monokwasie',
choice3: 'Nkyikwasie',
choice4: 'Kurukwasie',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ, nnapɔnna ne adwuma ho.\n\n Benada Dapaa adekyeeɛ yɛ…..',

choice1: 'Kwawukuo',
choice2: 'Kurudapaakuo',
choice3: 'Monowukuo',
choice4: 'Ngonawukuo',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ, nnapɔnna ne adwuma ho.\n\n Akwasidɛɛ biara Akanfoɔ……..',

choice1: 'gu nsa',
choice2: 'bɔ tikwa',
choice3: 'hyɛ fa',
choice4: 'nnidi',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ, nnapɔnna ne adwuma ho.\n\n Sɛ wɔregye awareɛ a, ɔbaa no abusuafoɔ taa de tire adeɛ no ……..',

choice1: 'kɔma abusuapanin',
choice2: 'kɔgye wɔn ani',
choice3: 'kɔtua abusua ka bi',
choice4: 'kɔma ɔhemaa',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ, nnapɔnna ne adwuma ho.\n\n Agyapadeɛ titire a ɛfiri awareɛ mu ba ne……..',

choice1: 'Ayɔnkofa',
choice2: 'Anigyeɛ',
choice3: 'Sika',
choice4: 'Mma',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ, nnapɔnna ne adwuma ho.\n\n Hwan na ɔgu ɔbaa no hyire wɔ awaregyaeɛ mu?',

choice1: 'Nkontanom',
choice2: 'Nana',
choice3: 'Nsenom',
choice4: 'Nkumaafoɔ',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekorɔ ho.\n\n Abɔfra nnim adwareɛ a ɛnyɛ…..',

choice1: 'n’anim',
choice2: 'n’afuru so',
choice3: 'ne kɔn ho',
choice4: 'ne nsa ho',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekorɔ ho.\n\n Aberewa bɛdi twɛdeɛ a, na ɛfiri ……..',

choice1: 'n’ano',
choice2: 'ne nsa',
choice3: 'ne nananom',
choice4: 'ne poma',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekorɔ ho.\n\n Wopam ohufoɔ a, …..',

choice1: 'ne koma te',
choice2: 'woto ne barima',
choice3: 'ɔtwe sekan',
choice4: 'wonya asɛm',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekorɔ ho.\n\n Sɛ woyɛ bi na anyɛ yie a, wɔfrɛ wo……',

choice1: 'ayɛbiagya',
choice2: 'ayɛbiaguo',
choice3: 'ayɛboafo',
choice4: 'ayɛbiakyerɛ',
answer: 2,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekorɔ ho.\n\n Agya adeɛ bi wɔ hɔ, sɛ wotia n’ayaase a, na ɔresere. Ɛyɛ……',

choice1: 'apasoɔ',
choice2: 'kaa',
choice3: 'mpaboa',
choice4: 'dadefidie',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekorɔ ho.\n\n Agya nipa bi wɔ hɔ, ɔte fie a na n’abɔdwesɛ gu abɔnten. Ɛyɛ…..',

choice1: 'abɛ',
choice2: 'mframa',
choice3: 'wisie',
choice4: 'nsuo',
answer: 3,
 },
 {
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm,nsaguo ne nsɛnkyerɛnneɛ ho.\n\n Kane no na wɔfrɛ anansesɛm sɛn?',

choice1: 'Nyankonsɛm',
choice2: 'Abasɛm',
choice3: 'Bɔsrɛmka',
choice4: 'Adomankomasɛm',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm,nsaguo ne nsɛnkyerɛnneɛ ho.\n\n Sɛnti a tete no na wɔnto anansesɛm awia ne sɛ…….',

choice1: 'ahuhuro bɛde wo',
choice2: 'ɛnyɛ anigye',
choice3: 'yɛmmɔ mmoa din awia',
choice4: 'ɛsɛe adwumayɛ',
answer: 4,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm,nsaguo ne nsɛnkyerɛnneɛ ho.\n\n Asantefoɔ atetesɛm kyerɛ sɛ…….na wɔde egya baeɛ.',

choice1: 'Asonafoɔ',
choice2: 'Biretufoɔ',
choice3: 'Aduanafoɔ',
choice4: 'Ɔyokofoɔ',
answer: 3,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm,nsaguo ne nsɛnkyerɛnneɛ ho.\n\n Wɔnyɛ yeinom baako wɔ nsaguo mu.',

choice1: 'Wɔkata wɔn ani',
choice2: 'Wɔbɔ abosom ne nsamanfoɔ din',
choice3: 'Wɔpia wɔn ntoma gu wɔn mmatiri',
choice4: 'Wɔyi wɔn nan mu mpaboa',
answer: 1,
},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm,nsaguo ne nsɛnkyerɛnneɛ ho.\n\n Akanman mu sɛ obi resa na ɔfoforɔ pagya ne nsa kyerɛ no a, ɛkyerɛ sɛn?',

choice1: 'Ɔnnyae asa',
choice2: 'Ɔma no mo',
choice3: 'Ɛdwom no yɛ dɛ',
choice4: 'Ɔnnyina hɔ',
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
