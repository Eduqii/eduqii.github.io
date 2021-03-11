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
	
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Akanfoɔ gye di sɛ ɛna ma ne ba mogya na agya ma no……..',

choice1: 'Sika',
choice2: 'Abusua',
choice3: 'Aduane',
choice4: 'ɔkra',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Edin a wɔfrɛ Ɛna mogya a ɔde ma ne ba ne……..',

choice1: 'Ahoɔfɛ',
choice2: 'Ntɔn',
choice3: 'Saman',
choice4: 'Abusua',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Sɛ woyɛ ɔbarima a, wo nuabaa ba yɛ wo………',

choice1: 'Ba',
choice2: 'Wɔfaase',
choice3: 'Nana',
choice4: 'Nanakansewa',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Abusua ne ntɔn firi nnipa kuo bɛn hɔ?',

choice1: 'Maame ne nana',
choice2: 'Papa ne nana',
choice3: 'Maame ne papa',
choice4: 'Maame ne abusuapanin',
answer: 3,

},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Kyerɛ deɛ nti a ɛna ne mma da nso firi agya ho..',

choice1: 'Wɔn na wɔfiri kuro no mu',
choice2: 'Wɔn na daa wɔte fie',
choice3: 'Wɔn na wɔbɔ abusua baako',
choice4: 'Wɔn na wɔdi nkɔmmɔ',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Agya, Ɛna ne mma, hwan ne efie no ti?',

choice1: 'ahantan',
choice2: 'aniteɛ',
choice3: 'tema',
choice4: 'obuo',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusuabɔ ho.\n\n Agya, Ɛna ne mma, hwan ne efie no ti?',

choice1: 'Agya',
choice2: 'Mma',
choice3: 'Ɛna',
choice4: 'Nkwadaa',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ wuo ne adedie ho.\n\n Wɔfrɛ Akanfoɔ adedie sɛ…..',

choice1: 'Papa adedie',
choice2: 'Nana adedie',
choice3: 'Sewaa adedie',
choice4: 'Wɔfa adedie',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ wuo ne adedie ho.\n\n Saa nnipa yi ase nsaeɛ a wɔfaaseɛ nni adeɛ',

choice1: 'nniwaa mma',
choice2: 'papa mma',
choice3: 'nana mma',
choice4: 'wɔfa mma',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ wuo ne adedie ho.\n\n “Agya bi wu a, agya bi te ase” yɛ kasa a wɔka kyerɛ……',

choice1: 'Akunafoɔ',
choice2: 'Nwisiaa',
choice3: 'Odiadefoɔ',
choice4: 'Abusuapanin',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ wuo ne adedie ho.\n\n Kasa a ɛdi akyiri a obi ka ansa na wawu na Akanfoɔ frɛ no……',

choice1: 'Nsamanseɛ',
choice2: 'Awugyamma',
choice3: 'Kasaprɛko',
choice4: 'Nkwa nsɛm',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ wuo ne adedie ho.\n\n Berɛ bɛn na abusuafoɔ hyia bue owufoɔ adaka so?',

choice1: 'Afe',
choice2: 'Bosome',
choice3: 'Adaduanan',
choice4: 'Nnawɔtwe',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ wuo ne adedie ho.\n\n Duaba bɛn na Akanfoɔ de gyina hɔ ma onipahunu bi a wadi adeɛ?',

choice1: 'Kwadu',
choice2: 'Amango',
choice3: 'Paya',
choice4: 'Borɔferɛ',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ wuo ne adedie ho.\n\n Sɛ okunafoɔ bi mpɛ sɛ ɔware odiadefoɔ a, kasakoa a ɔka ne sɛ ɔbɛware…..',

choice1: 'Mmoatia',
choice2: 'Nkɔtɔ ne mmɛbɛ',
choice3: 'Ne kunu saman',
choice4: 'Nsamanpɔ mu',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Afahyɛ yi mu deɛ ɛwɔ he na wɔde huro kɔm',

choice1: 'Akwambɔ',
choice2: 'Aboakyere',
choice3: 'Ohum',
choice4: 'Kundum',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Bakatue yɛ nnipa bɛn afahyɛ?',

choice1: 'Adaafoɔ',
choice2: 'Ɛdenafoɔ',
choice3: 'Akyemfoɔ',
choice4: 'Simpafoɔ',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Kyerɛ kuro a edidi soɔ yi mu baako a wɔdi “Adɛɛ-kɛseɛ” afahyɛ.',

choice1: 'Adaa',
choice2: 'Kumase',
choice3: 'Kyebi',
choice4: 'Simpa',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Afahyɛ ho mfasoɔ titire baako ne sɛ……..',

choice1: 'ɛde akobɔfoɔ ba fie',
choice2: 'yɛkye akorɔmfoɔ',
choice3: 'yetu ahemfo adeɛ so',
choice4: 'ede ntↄkwa ba',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Kyerɛ deɛ ɛyɛ nokorɛ wɔ afahyɛ ne nkuro a edidi soɔ yi mu.',

choice1: 'Keta-Aboakyere',
choice2: 'Kumasi –Fetu',
choice3: 'Somanya –Odwira',
choice4: 'Axim- Kundum',
answer: 4,

},
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Aboa bɛn na Efutufoɔ kyere no wɔ afahyɛ berɛ?',

choice1: 'Ɔtwe',
choice2: 'Ɔnwansan',
choice3: 'Ɔtorɔm',
choice4: 'Nantwie',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ afahyɛ ho.\n\n Nsɛm a edidi soɔ yi mu deɛ ɛwɔ he na ɛnyɛ nokorɛ wɔ afahyɛ ho?',

choice1: 'Afahyɛ de anigyeɛ ba',
choice2: 'Afahyɛ sɛe mmerɛ',
choice3: 'Akobɔfoɔ ba fie',
choice4: 'Nkyirimma sua amammerɛ',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nnabuo ho.\n\n Bosome dodoɔ sɛn na yɛnya wɔ afenhyia baako mu?',

choice1: 'Dumienu',
choice2: 'Dubaako',
choice3: 'Dunkron',
choice4: 'Dummiɛnsa',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nnabuo ho.\n\n Bosome a ɛtɔ so dumienu no din de…..',

choice1: 'Ogyefuo',
choice2: 'Ɔbɛnem',
choice3: 'Ɔpɔpɔn',
choice4: '?p?nimaa',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nnabuo ho.\n\n Bosome bɛn mu na Simpafoɔ kyere aboa?',

choice1: 'Kɔtɔnimma',
choice2: 'Ayɛwohomumɔ',
choice3: 'Ɔsanaa',
choice4: 'Obubuo',
answer: 1,
}, 
{
question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nnabuo ho.\n\n Bosome yi kura nnafua aduasa.',
choice1: 'Ɛbɔ',
choice2: 'Kitawonsa',
choice3: 'Ogyefuo',
choice4: 'Ahinime',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nnabuo ho.\n\n Bosome bɛn na Akristofoɔ di Yesu awoda?',

choice1: 'Ogyefuo',
choice2: 'Ɔpɛpɔn',
choice3: 'Ɔpɛnimaa',
choice4: 'Ɔsannaa',
answer: 3,
},
{ 
question:'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nnabuo ho.\n\n Kyerɛ amanne titire a Akanfoɔ di no dabɔne biara..',

choice1: 'wogu nsa',
choice2: 'wɔyɛ ayi',
choice3: 'wɔyɛ asie',
choice4: 'wɔbu sika ho nkonta',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nnabuo ho.\n\n Hyehyɛ bosome a edidi soɔ yi nnidisoɔ-nnidisoɔ',

choice1: 'Ɔpɛpɔn, Ɔpɛnimaa, Ogyefuo',
choice2: 'Ɔpɛnimaa, Ɔpɛpɔn, Ogyefuo',
choice3: 'Ogyefuo, Ɔpɛnimaa, Ɔpɛpɔn',
choice4: 'Ɔpɛpɔn, Ɔgyefuo, Ɔbɛnem',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Toa bɛ yi so “Ɛkaa nwa ne akyekyedeɛ nko ara a anka….”',

choice1: 'etuo rento wɔ kwaeɛ mu',
choice2: 'aboa biara nkye ne yɔnko',
choice3: 'abɔfoɔ biara renkɔ wura mu',
choice4: 'nnipa nnya nam nwe',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Mpaninfoɔ bu bɛ sɛ, “Borɔferɛ a ɛyɛ dɛ na……”',

choice1: 'mmɔfra die',
choice2: 'yɛtɔn wɔ dwa mo',
choice3: 'nnomaa die',
choice4: 'abaa da aseɛ',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n “Sɛ atuduro asa a, na ɛnyɛ…..”',

choice1: 'Ɔhene toa mu',
choice2: 'Akowua ntoa mu',
choice3: 'Ɔbɔmmɔfoɔ bɔtɔ mu',
choice4: 'Asafo bɔtɔ mu',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n “Anomaa nua ne nea ɔne no da duakorɔ” kyerɛ Akanfoɔ……',

choice1: 'ayɔnkofa',
choice2: 'efie tena',
choice3: 'abusuabɔ',
choice4: 'ntɔn bɔ',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Ɛbɛ, “baanu so a emmia” kyerɛ',

choice1: 'Aniteɛ',
choice2: 'Nkabom',
choice3: 'Asisie',
choice4: 'asondwoeɛ',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.\n\n Ɔkɔtɔ nwo anomaa kyerɛ sɛ obi suban sɛ…….',

choice1: 'N’awofoɔ',
choice2: 'N’adamfo',
choice3: 'Ne nua',
choice4: 'Ne sewaa',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Yei yɛ anwonwadeɛ ahodoɔ no mu baako a Ɔkɔmfo Anɔkye yɛeɛ?',

choice1: 'Ɔde afena wɔɔ fam ma ɛkaa hɔ',
choice2: 'Ɔpaee asubɔnten mu mmienu',
choice3: 'Oduaa bebe wɔ wiem',
choice4: 'Ɔnyanee owufoɔ',
answer: 1,
}, 
{

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Kyerɛ adeɛ baako bi a Asebu Amanfi yɛ de gyee din',

choice1: 'Ɔtɔnn nnipa maa Aborɔfo',
choice2: 'Ɔwee nnipa nam',
choice3: 'Ɔnante firii mpoano kɔɔ serɛm',
choice4: 'Ɔwee aburo pata',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Sɛ yɛbɔ Sikadwa Kofi din a, onipa bɛn na yɛkae no?',

choice1: 'Asebu Amanfi',
choice2: 'Ansa Sasraku',
choice3: 'Ɔkɔmfo Ntiamoa',
choice4: 'Ɔkɔmfo Anɔkye',
answer: 4,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Kyerɛ baabi a ahemfo yi ase firi ; Obunumankoma, Ɔdapagyan ne Ɔson..',

choice1: 'Okuapemman',
choice2: 'Fanteman',
choice3: 'Asanteman',
choice4: 'Firaw agya',
answer: 2,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Kwaku Ananse ba panin din de….',

choice1: 'Afurudohwedohwee',
choice2: 'Nnakorɔnhwea',
choice3: 'Ntikuma',
choice4: 'Tikenenkene',
answer: 3,
},
{ 

question: 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm ne anansesɛm ho.\n\n Suban bɛn na ɔsebɔ da no adi wɔ anansesɛm mu?',

choice1: 'Ɔboafo',
choice2: 'Ahobrɛaseɛ',
choice3: 'Asisie',
choice4: 'Awiɛmfoɔ',
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
