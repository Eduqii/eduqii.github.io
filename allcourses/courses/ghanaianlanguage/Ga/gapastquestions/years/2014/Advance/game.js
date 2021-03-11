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
	
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Ŋamɔi ni akɛŋaa mɛi pii shwane mli ji…..',

choice1: 'aanyɛkoo',
choice2: 'nyɛshwiee',
choice3: 'ojekoo',
choice4: 'minaanyɛkoo',
answer: 4,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Aŋaa mɔ ko “toŋnoku” kɛji……',

choice1: 'eeye nii',
choice2: 'eefa gbɛ',
choice3: 'eegba sane',
choice4: 'eehɔɔ too',
answer: 1,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Akɛ ashimashi nɛɛ yaŋmɛɔ tumo nɔ dani ayawoɔ lɛ awoɔ lɛ gbɛi……',

choice1: 'Awusa',
choice2: 'Banuma',
choice3: 'Gbobalɔ',
choice4: 'Haaji',
answer: 3,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Kɛji akɛɛ aatswere gbonyo lɛ, etsɔɔ akɛ….',

choice1: 'aasaa lɛ afɔ saa nɔ',
choice2: 'aaŋa emli nu',
choice3: 'aaju aha lɛ',
choice4: 'aakala enaa awo adeka mli',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Gbɔmɔ nɛɛ yeɔ saji ni teɔ shi yɛ shikpɔji ahe.',

choice1: 'Shipi',
choice2: 'Otsaamɛ',
choice3: 'Wolɛiatsɛ',
choice4: 'Akwashɔŋtsɛ',
answer: 4,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Shia fɛɛ shia lɛ….ji yitso',

choice1: 'bi',
choice2: 'nabi',
choice3: 'nuu',
choice4: 'yoo',
answer: 3,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Kɛji mɔ ko lomɔ mɔ kroko lɛ ahaa…..',

choice1: 'ebɛɔ',
choice2: 'eloɔ',
choice3: 'efoɔ',
choice4: 'ekpaa',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Nyɔɔŋ ni ji………. lɛ nɔ lɛ, Gamɛi kpitiɔ shwaa',

choice1: 'kpaanyɔ',
choice2: 'nyɔŋma kɛ enyɔ',
choice3: 'nyɔŋma',
choice4: 'kpawo',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Ŋulami bibii………….…yɔɔ Otukwajaŋ ŋulami agbo lɛ he',

choice1: 'enumɔ',
choice2: 'ejwɛ',
choice3: 'kpaanyɔ',
choice4: 'nyɔŋma',
answer: 1,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Ganyo maŋhiɛnyiɛlɔ ni ha ŋshɔ mli gba enyɔ ni etsɔ mli kɛtee lɛ jɛ…….',

choice1: 'Ga Mashi',
choice2: 'La',
choice3: 'Nuŋua',
choice4: 'Tɛma',
answer: 3,
 },
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Maŋnyɛ nɛɛ wa Gamɛi ayi waa',

choice1: 'Naa Dedei Ashikishaŋ',
choice2: 'Naa Dedei Omadru',
choice3: 'Naa Densua Booba',
choice4: 'Naa Dɔde Akaiba',
answer: 4,
},
{ 

 
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n . Sooyaama, sooyaama….',
choice1: 'otsɛ lɛ kwɛɔ toi',
choice2: 'meele ni yaa ei',
choice3: 'kɔtɔkɔ krubɛ krubɛ',
choice4: 'ayatsɛ dɔkita',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Mɛni shwɛmɔ mli lala “kroloo, krolokotoŋ” ?',

choice1: 'ajamanaa',
choice2: 'aŋmɔ',
choice3: 'adaawe',
choice4: 'awale',
answer: 1,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Yoo ni sabla ji Tuma lɛ etsɔɔ akɛ…….ji lɛ',

choice1: 'awusa',
choice2: 'gbobalɔ',
choice3: 'kromɔ',
choice4: 'nakutsoŋ bi',
answer: 3,
},
{ 

 
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n . Gamɛi agbɛi kui ekpaa lɛ, ……yɛ mli ni amɛbɛ sablai',
choice1: 'enumɔ',
choice2: 'enyɔ',
choice3: 'ejwɛ',
choice4: 'etɛ',
answer: 2,
 },{

 
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n . Otofoshii kusum lɛ ehenɔ ji…..',
choice1: 'fiafeemɔ',
choice2: 'hekpeemɔ',
choice3: 'kpojiemɔ',
choice4: 'tsɛrɛgbamɔ',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Kusum ni tsɛ feɔ ehaa ebinuu ni haa ehe tseɔ ji…………',
choice1: 'hiianifeemɔ',
choice2: 'nitsumɔmliwoo',
choice3: 'tuhamɔ',
choice4: 'yooshibimɔ',
answer: 1,
},
{

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Tsɔɔmɔ mɔ shwuɔ nɔ ni asafoiatsɛ taa',

choice1: 'Shipi',
choice2: 'Akwashɔŋtsɛ',
choice3: 'Otsaamɛ',
choice4: 'Tsulɔ',
answer: 2,
 },
{ 
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n . Gamɛi ahiɛnyiɛlɔ blema beiaŋ ji…………',
choice1: 'Jaasetsɛ',
choice2: 'Maŋtsɛ',
choice3: 'Naawielɔ',
choice4: 'Wulɔmɔ',
answer: 4,
},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Wiemɔ kuku ni jieɔ nilee kɛ jwɛŋmɔ ni mli kwɔ kpo ji….',

choice1: 'gbɛigbɛɛlɔ',
choice2: 'fɔŋwiemɔ',
choice3: 'ŋkwambi',
choice4: 'abɛ',
answer: 4,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Jee abɛ nɛɛ shishi “………..tɛ gbeɔ looflɔ.”',

choice1: 'Alagba',
choice2: 'Akayeli',
choice3: 'Apasa',
choice4: 'Atsɛmɛ',
answer: 1,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Abɛ “Abui ni he edɔ la lɛ eshaa kpaa” miiwie…….he',

choice1: 'bu lɛ',
choice2: 'tsuishitoo',
choice3: 'hiɛmiamɔ',
choice4: 'mɔwamɔ',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Ayeɔ ŋkpai kɛfeɔ enɛ',

choice1: 'Hejuu',
choice2: 'Nikee',
choice3: 'Gbɛiwoo',
choice4: 'Tsonɔyaa',
answer: 3,
 },{

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Wɔyɛ wɔnu……',

choice1: 'wɔtaomɔnii ashɛ wɔdɛŋ',
choice2: 'wɔna hewalɛ kpakpa',
choice3: 'wɔmli afili wɔ',
choice4: 'wɔkojianɔ ajɔ wɔ',
answer: 4,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Mɛni wiemɔ ja fe fɛe ni tsɔɔ tsakpaa ni ka Awo Amele biyei ejwɛ lɛ awumɛi ateŋ ?',

choice1: 'bienyɛmɛi',
choice2: 'kakalɔi',
choice3: 'nikulafoi',
choice4: 'shabimɛi',
answer: 3,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Nuumo Okai ŋa ji Awo Ajɔkɔ. Nuumo Okai nyɛmi yoo ji Aateŋ Kɔkɔ, hewɔ lɛ Awo Ajɔkɔ………..ji Aateŋ Kɔkɔ',

choice1: 'wuyoo',
choice2: 'naanyo',
choice3: 'shaayoo',
choice4: 'kurafa',
answer: 1,
},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Niikoi mɛni ji etsɛ Ataa nanashishiu ?',

choice1: 'Nanakaka',
choice2: 'Nanakaŋkaŋ',
choice3: 'Nanadadao',
choice4: 'Nanakɔkrɔdɔ',
answer: 4,
},
{ 

 
question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n atsɛɔ shika ni ajɛɔ nuusɛɛ ayahaa yoo ni ato ehɛ nɔ baa ni ekɛhe ehewɔ nibii lɛ tɛŋŋ ?',

choice1: 'agboshimɔ',
choice2: 'kplɛmɔ',
choice3: 'hebaatsɛɛ',
choice4: 'yinii',
answer: 4,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Gamɛi asateŋ lɛ kɛji nuu je eŋa sɛɛ ni ekɛ yoo kroko yana bɔlɛ ni ana ale lɛ ahaa….',

choice1: 'ejieɔ eŋa lɛ saanaa',
choice2: 'ekɔɔ dunsa',
choice3: 'eheɔ eŋa lɛ ayifale',
choice4: 'eshwieɔ eŋa lɛ oya',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Nuu ni le kusum lɛ, kɛji eetao ekɛ eŋa akpa shihilɛ lɛ, mɛni esa akɛ efee ?',

choice1: 'Ekɛɔ yoo lɛ ni eka hoo nii dɔŋŋ',
choice2: 'Efaa daa eyahaa yoo lɛ fɔlɔi',
choice3: 'Ehe eshika yɛ efɔlɔi lɛ adɛŋ',
choice4: 'Eloo yoo lɛ nibii etserɛ eshwie',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Tsɔɔmɔ nɔ ni wulɔmɛi kɛ tɛ bibii feɔ',

choice1: 'Amɛkɛfeɔ maŋ kusum',
choice2: 'Amɛkɛkaneɔ afiyeli bi',
choice3: 'Amɛkɛgbeɔ kooloi bibii',
choice4: 'Amɛkɛmaa tsu',
answer: 2,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Mɛni maŋ nɔ ayeɔ haaji ayɛlɛ be mli ni ayeɔ nitsumɔ dadei ayɛlɛ, shi jeee gbi nɔ ni enɔ jetsɛremɔ ni akpitiɔ ashwaa lɛ ?',

choice1: 'Gbese',
choice2: 'Osu',
choice3: 'Sempe',
choice4: 'Tɛshi',
answer: 4,
},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Mɛni ajenu henɔ ji “nɔ ko yɛ, daa nɛɛ eeŋmɔ” lɛ ?',

choice1: 'plasheele',
choice2: 'susumɔkɛtsɔɔmɔ',
choice3: 'naaŋmɔlɔwoo',
choice4: 'hefɛoyeli',
answer: 3,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Tsakemɔ ni baa yɛ adesai ashihilɛ mli lɛ, nomɛi anɔ akwɛɔ afeɔ enɛ',

choice1: 'Abuɔ abɛ',
choice2: 'Afoɔ aahi',
choice3: 'Agbaa ajenu',
choice4: 'Ataa adesa',
answer: 2,
 },
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Kɛji ona otsaamɛ tso ni akpaŋa akɛto sama yɛ eyiteŋ lɛ, etsɔɔ akɛ nakai maŋ lɛ nɔ bii lɛ………',

choice1: 'amɛhe wa jogbaŋŋ',
choice2: 'amɛŋmɛɛɛ nii ahe',
choice3: 'amɛsaa nibii ni ehiii',
choice4: 'amɛyaa daaŋ kwraa',
answer: 4,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Samai ni ato yɛ maji enyɔ nɛɛ akatamansoi ayiteŋ shishi ji kɛji amɛmɔ bo lɛ, amɛŋmɛɛɛ ohe',

choice1: 'Gbese kɛ Nuŋua',
choice2: 'Sempe kɛ Awutu',
choice3: 'Ŋleshi Alata kɛ Osu',
choice4: 'Tɛshi kɛ La',
answer: 3,
 },{

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Eji Gamɛi ahemɔkɛyeli akɛ kɛji akɛ ŋulami ko tse lɛ, eshishi ji….',

choice1: 'obaafɔ abifao fɛfɛo ko',
choice2: 'abaagbe loo pii nakai gbi lɛ',
choice3: 'onukpa ko baate shi',
choice4: 'omaŋfo ko eyaje mɔ ko sɛɛ',
answer: 3,
},
{ 

 question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Obɔade nitsumɔi fɛɛ lɛ, kɛji aatsu lɛ alaa. Mɛni hewɔ afeɔ nakai ?',

choice1: 'Ajoɔ yɛ nitsumɔi lɛ amli',
choice2: 'Jemawɔji lɛ kɛɛ afee nakai',
choice3: 'Oyai yeli tuutu hewɔ',
choice4: 'Ehaaa anu tɔlɛ he oya',
answer: 4,
},
{ 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n Yɛ Gamɛi asateŋ lɛ, kɛji nuu ko gbo lɛ ajaa egboshinii lɛ titri ahaa ebiii. Mɛni hewɔ ebaa lɛ nakai?',

choice1: 'no ji kusum ni ja',
choice2: 'amɛ pɛ ji ewekumɛi',
choice3: 'esaa ni aha mɛi pii',
choice4: 'koni amɛkaye awerɛho tsɔ',
answer: 1,
},
{ 

 

question: 'Ha sanebimɔi nɛɛ fɛɛ ahetoo\n\n  Tsɔɔmɔ nɔ hewɔ ni mɛi susuɔ akɛ aahi he yɛ sɛɛnamɔ pam ha Gamɛi lɛ.',

choice1: 'Amɛkɛgba amɛblema naakpɛɛ saji',
choice2: 'Amɛkɛbaa amɛnibii babaoo ayi',
choice3: 'Amɛkɛtsimɔ amɛnibii anɔ',
choice4: 'Amɛkɛwo amɛhe gbeyei waa',
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

