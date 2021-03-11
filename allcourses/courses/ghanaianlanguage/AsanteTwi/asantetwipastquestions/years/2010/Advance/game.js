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

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Saa nnipa yi mu deɛ ɔwɔ he na ɔyɛ wo papa busuani? Wo papa',

choice1: 'Akonta',
choice2: 'Ba',
choice3: 'Sewaa',
choice4: 'Wɔfa',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Sɛ Akanfoɔ ka sɛ bogya a, na ɛkyerɛ sɛn?',

choice1: 'Abusua',
choice2: 'Adamfo',
choice3: 'Akyiwadeɛ',
choice4: 'Awareɛ',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Akanfoɔ wɔ gyidie sɛ onipa biara wɔ ɔkra ne sunsum. Kyerɛ edin foforɔ a yɛde frɛ sunsum',

choice1: 'Abusua',
choice2: 'Bogya',
choice3: 'Ntɔn (Ntorɔ)',
choice4: 'Saman',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Kyerɛ deɛ enti a ɔba ne ɛna yɛ abusuafoɔ.',

choice1: 'Wɔbɔ abusua korɔ',
choice2: 'Wɔbɔ ntɔn korɔ',
choice3: 'Wɔwɔ adwene korɔ',
choice4: 'Wɔwɔ sunsum korɔ',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Ɔkwan bɛn so na Akanfoɔ nam bɔ agya abusua?',

choice1: 'Abusuabɔ',
choice2: 'Awareɛ',
choice3: 'Kunayɛ',
choice4: 'Owuo',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Sɛ wo papa ware mmaa baanu a, ɔbaa baako no yɛ wo maame deɛn?',

choice1: 'Abanoma',
choice2: 'Akumaa',
choice3: 'Kora',
choice4: 'Sewaa',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Nneyɔeɛ a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛyɛ akyiwadeɛ? Sɛ woware….',

choice1: 'Papa ba',
choice2: 'Sewaa ba',
choice3: 'W’adamfo ba',
choice4: 'Wɔfa ba',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Ɛdeɛn na ɛma obi hunu sɛ ɔne ɔfoforɔ som agya bosom baako? Sɛ…',

choice1: 'Wɔbɔ abusua korɔ',
choice2: 'Wɔn akyiwadeɛ yɛ pɛ',
choice3: 'Wɔfiri kuro baako',
choice4: 'Wɔyɛ bogya korɔ',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Abusua bɛn na wɔgye di sɛ wɔde egya baa wiase?',

choice1: 'Aduana',
choice2: 'Asona',
choice3: 'Ɔyoko',
choice4: 'Biretuo',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Abusua bɛn na wɔne akraboa din sɛ?',

choice1: 'Aduana',
choice2: 'Agona',
choice3: 'Asona',
choice4: 'Ɛkoɔna',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ adedie ne ahensɛm ho.\n\n Sɛ wɔpa ɔhene foforɔ a, wɔde no kɔkyerɛ ……..kan.',

choice1: 'Abakomahene',
choice2: 'Amankrado',
choice3: 'Gyaasehene',
choice4: 'Sanaahene',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ adedie ne ahensɛm ho.\n\n Berɛ bɛn na woyi odiadefoɔ?',

choice1: 'Adaduanan du a',
choice2: 'Da a onipa no bɛ wu no',
choice3: 'Wɔnom sikasa wie a',
choice4: 'Wɔyɛ dɔteyie wie a',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ adedie ne ahensɛm ho.\n\n Abusua bɛn mu na wɔyi odiadefoɔ firi?',

choice1: 'Okunafoɔ abusua mu',
choice2: 'Owufoɔ no abusua mu',
choice3: 'Owufoɔ no papa abusua mu',
choice4: 'Ɔhene abusua mu',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ adedie ne ahensɛm ho.\n\n Sɛ obi …….ampene a, onii no ntumi nni obi adeɛ.',

choice1: 'Maame',
choice2: 'Nana',
choice3: 'Papa',
choice4: 'Wɔfa',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ adedie ne ahensɛm ho.\n\n Nnipa baanu bɛn na wɔbɔ mu si ɔhene anan mu?',

choice1: 'Ɔhemaa ne Abusuapanin',
choice2: 'Ɔhemaa ne Amankrado',
choice3: 'Ɔhemaa ne Gyaasehene',
choice4: 'Ɔhemaa ne Dabehene',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ adedie ne ahensɛm ho.\n\n Toa asɛm yi so; Sɛ niwaa mma nsaeɛ a…..nni adeɛ.',

choice1: 'Maame',
choice2: 'Nana',
choice3: 'Onua',
choice4: 'Wɔfaase',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ adedie ne ahensɛm ho.\n\n Nkroma te hɔ a Badu nni adeɛ. Yei kyerɛ sɛ…….',

choice1: 'Abɔfra wɔhɔ a, ɔpanin nni adeɛ',
choice2: 'Badu mma nkroma nni adeɛ',
choice3: 'Wɔfaase wɔhɔ a onua nni adeɛ',
choice4: 'ɔpanin wɔ hɔ a, abɔfra nni adeɛ',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Aboa bɛn na Simpafoɔ kyere de di Aboakyere afahyɛ?',

choice1: 'Ɔkankane',
choice2: 'Ɔnwansane',
choice3: 'Ɔsebɔ',
choice4: 'Ɔtorɔmo',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Kyerɛ botaeɛ a Akyemfoɔ gyina so de di Ohum',

choice1: 'Wɔde frɛ dɔm',
choice2: 'Wɔde gye wɔn ani',
choice3: 'Wɔde huro ɔkɔm',
choice4: 'Wɔde sua amammerɛ',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Nsɛm a ɛdidi soɔ yi deɛ ɛwɔ he na ɛyɛ nokorɛ?',

choice1: 'Akuapemfoɔ',
choice2: 'Bonofoɔ',
choice3: 'Dwaben foforɔfoɔ',
choice4: 'Kwawufoɔ',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Nsɛm a ɛdidi soɔ yi deɛ ɛwɔ he na ɛyɛ nokorɛɛ',

choice1: 'Afahyɛ deɛ ka ba',
choice2: 'Afahyɛ kyerɛ abusua ase',
choice3: 'Afahyɛ ma yɛhuu amammerɛ',
choice4: 'Afahyɛ sɛe berɛ kwa',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Sɛ obi pɛ sɛ ɔkɔhwɛ Bakatue afahyɛ a, ɛsɛ sɛ ɔkɔ…………',

choice1: 'Ɛdena',
choice2: 'Akyemfo',
choice3: 'Odwaa',
choice4: 'Simpa',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Afahyɛ bɛn na Akuapemfoɔ die?',

choice1: 'Akwammɔ',
choice2: 'Apoɔ',
choice3: 'Ohum',
choice4: 'Odwira',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n ………..yɛ amammerɛ bi a ɛkyerɛ da titire bi a atwa mu wɔ ɔman bi abrabɔ mu',

choice1: 'Afahyɛ',
choice2: 'Anansesɛm',
choice3: 'Bragorɔ',
choice4: 'Nsaguo',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Toa ɛbɛ yi so. Etire nte sɛ borɔferɛ na……..',

choice1: 'Yɛabue so',
choice2: 'Yɛapae mu',
choice3: 'Yɛatwam',
choice4: 'Yɛawoso',
answer: 2,

},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Kontromfi se: me suman ne ……',

choice1: 'M’adwene',
choice2: 'M’ani',
choice3: 'Me nan',
choice4: 'M’aso',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Nsɛm a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛyɛ nokorɛ?',

choice1: 'Yɛde ɛbɛ kyerɛ kasakoa ase',
choice2: 'Yɛde ɛbɛ toa ɛbɛ so',
choice3: 'Yɛde ɛbɛ twa asɛm tenten tia',
choice4: 'Yɛde ɛbɛ si kasakoa anan mu',
answer: 3,
},
{ 
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Mpanin se; Nsamanpom soduro, wo ni wu a, na ………asa.',

choice1: 'W’abusua',
choice2: 'Wo nkorɔfoɔ',
choice3: 'Wo nnamfonom',
choice4: 'Wo nuanom',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Anomaa antu a, ………',

choice1: 'ɔbua da',
choice2: 'ɔgyina hɔ',
choice3: 'ɔsi faako',
choice4: 'ɔte hɔ',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Hwan na tete no na wɔse ɔwe aburopata no?',

choice1: 'Aduobi Ata',
choice2: 'Ampomfi',
choice3: 'Asebu Amanfi',
choice4: 'Atakora',
answer: 3,
},
{ 
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Tete no na wɔse Onyankopɔn bɛn nnipa. Ɛyɛɛ dɛn na ɔkɔɔ sorosoro?',

choice1: 'Aberewa bi de wɔmma wɔɔ no',
choice2: 'Abɔfra bi tia ne nan so',
choice3: 'Obi hwiee nsuo guu ne so',
choice4: 'Papa bi too ɔboɔ bɔɔ no',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Sɛn na wɔfrɛ ɛdwom a atiefoɔ to wɔ anasesɛm mu?',

choice1: 'Abraa braa',
choice2: 'Aho',
choice3: 'Mmoguo',
choice4: 'Nnwonkorɔ',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Anansesɛm botaeɛ titire ne sɛ…..',

choice1: 'Wɔde bɔ nkɔmmɔ',
choice2: 'Wɔde gyegye mmofra agorɔ',
choice3: 'Wɔde tu fo',
choice4: 'Wɔde twa asɛm tia',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Anasesɛm mma mu deɛ ɔwɔ he na ɔyɛ aniteɛ pa ara?',

choice1: 'Akokɔ Antwiwaa',
choice2: 'Ananse',
choice3: 'Ntikuma',
choice4: 'Ɔkraman',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Sɛ yɛka sɛ anansesɛm mfimfini a na ɛkyerɛ……',

choice1: 'Anansesɛm no ankasa',
choice2: 'Anansesɛm no awieɛ',
choice3: 'Mmoguo',
choice4: 'ɔfrɛ',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ agorɔ ne adwuma mu nnwom ho.\n\n Sisiri mbo, tabon mbo. Adwuma bɛn mu dwom nie?',

choice1: 'Ahayɔ',
choice2: 'Kuayɔ',
choice3: 'Ntomanwene',
choice4: 'Apokɔ',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ agorɔ ne adwuma mu nnwom ho.\n\n Antoakyire yɛ mmɔfra agorɔ no mu baako. Kyerɛ ne botaeɛ.',

choice1: 'Ahoɔden',
choice2: 'Ahwɛyie',
choice3: 'Nnamfofa',
choice4: 'Papayɛ',
answer: 2,

},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ agorɔ ne adwuma mu nnwom ho.\n\n Toa saa dwom yi so: Dedendee Kwao, Dedendee Kwao, Agya Bɔfoɔ ne nkwan yɛ me dɛ nanso……',

choice1: 'N’ataadeɛ yɛ me tumm',
choice2: 'Ne mpaboa yɛ me kɔɔ',
choice3: 'Ne nam yɛ me dɛ',
choice4: 'Ne tuo ho yɛ me tumm',
answer: 1,
 },
 { 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ agorɔ ne adwuma mu nnwom ho.\n\n Adɛn nti na sɛ obi reyɛ adwuma a ɔto dwom? Sɛdeɛ…..',

choice1: 'nkurɔfoɔ bɛte ne nne',
choice2: 'nnipa bɛhunuu sɛ ɔwɔ hɔ',
choice3: 'ɔbenya aboafoɔ',
choice4: 'ɔrente ɔbrɛ',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ agorɔ ne adwuma mu nnwom ho.\n\n Deɛ ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛnyɛ Akanfoɔ agorɔ?',

choice1: 'Ahayɔ',
choice2: 'Antoakyire',
choice3: 'Asɔba',
choice4: 'Atentam',
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
