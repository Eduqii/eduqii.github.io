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

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Te gbɛi nɛɛ ateŋnɔni edu gbɛ lɛ?',

choice1: 'Amɛɛle',
choice2: 'Sowa',
choice3: 'Adekabɛ',
choice4: 'Bɔɔle',
answer: 3,
}, 
{
 

question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Afɔ Okaile Hɔgbaa, hewɔ lɛ egbi gbɛi ji……………',

choice1: 'Aba',
choice2: 'Akoshia',
choice3: 'Ama',
choice4: 'Afua',
answer: 2,
},
 {


question: 'Ha sanebimɔi nɛɛ fɛɛ hetoo\n\n Oboshi fɔ bihii enyɔ nyɛ. Gbɛi ni akɛbaawo amɛ ji……',
choice1: 'Oko kɛ Tɛtɛ',
choice2: 'Akwete kɛ Oko',
choice3: 'Oko kɛ Akuɛtɛ',
choice4: 'Akwete kɛ Akuɛtɛ',
answer: 4,
}, 
{
 

question: 'Gamɛi yɛ aahi. Tsɔɔmɔ nɔ ni aahi nɛɛ kɛbaa\n\n Akpaa bɛlɛ gbɛkɛ, no lɛ……',

choice1: 'Obaana sisa',
choice2: 'Obaagbo',
choice3: 'Omɔ ko baagbo',
choice4: 'Oyitso baagba bo',
answer: 1,
 },
{
 

question: 'Gamɛi yɛ aahi. Tsɔɔmɔ nɔ ni aahi nɛɛ kɛbaa\n\n Abɛɛ tsu mli gbɛkɛ ni aloo jwɛi lɛ ayashwie, no lɛ…….',

choice1: 'Obaana sisa',
choice2: 'Obaaye Ohia',
choice3: 'Hela baamɔ bo',
choice4: 'Obaashwila',
answer: 2,
},
 {

 

question: 'Gamɛi yɛ aahi. Tsɔɔmɔ nɔ ni aahi nɛɛ kɛbaa\n\n Akɛ nine enyɛɛɛ shi kɛji aaye nii, no lɛ…….',

choice1: 'Oyitso baagba bo',
choice2: 'Ofɔlɔi baagbo',
choice3: 'Otɔɔɔ',
choice4: 'Onaa baagbo',
answer: 3,
},
{ 
question: 'Gbalamlibotemɔ kɛ fitemɔ nibii komɛi nɛ. Ha hetoo ni sa.\n\n Te nibii nɛɛ ateŋ nɔ ni akwɛɛɛ yɛ yoosɛɛkpamɔ mli?',

choice1: 'Kɛji abi yoo lɛ shishi momo',
choice2: 'Kɛji yoo lɛ sɛɛ eye hela fɔŋ ko da',
choice3: 'Kɛji yoo lɛ saa ehe jogbaŋŋ daa nɛɛ',
choice4: 'Kɛji ayɛ loo sulɔ ko yɛ weku lɛ mli',
answer: 3,
}, 
{
 

question: 'Gbalamlibotemɔ kɛ fitemɔ nibii komɛi nɛ. Ha hetoo ni sa.\n\n Yoo ni afee nii pɛpɛɛpɛ yɛ Gamɛi akusum naa lɛ tsɔɔ ewu lɛ',

choice1: 'Nanehenyoo',
choice2: 'Boi ekpaa yoo',
choice3: 'Naawolɔ',
choice4: 'Otofoyoo',
answer: 2,
},
 {

 

question: 'Gbalamlibotemɔ kɛ fitemɔ nibii komɛi nɛ. Ha hetoo ni sa.\n\n Te nibii nɛɛ ate nɔ ni kɛ gbalafitemɔ baa ?',

choice1: 'Je’ba',
choice2: 'Suɔmɔ',
choice3: 'Heshibaa',
choice4: 'Ajwamaŋbɔɔ',
answer: 4,
}, 
{
 

question: 'Gbalamlibotemɔ kɛ fitemɔ nibii komɛi nɛ. Ha hetoo ni sa.\n\n Yoo ni fɔɔ lɛ Gamɛi tsɛɔ lɛ akɛ….',

choice1: 'jaŋnyɛ',
choice2: 'kene',
choice3: 'okulafo',
choice4: 'awusa',
answer: 2,
},
 {

 
question: 'Okɛ hetoo ni ja aha sanebimɔi lɛ ahetoo\n\n Tɔshii wu ji Nii Lante, hewɔ lɛ Tɔshii mɛni ji Nii Lante naa ?',

choice1: 'shaayoo',
choice2: 'wunukpa',
choice3: 'wuyoo',
choice4: 'shaanaa',
answer: 4,
},
 {

 

question: 'Okɛ hetoo ni ja aha sanebimɔi lɛ ahetoo\n\n Mitsɛ nyɛmi yoo lɛ feɔ mi………',

choice1: 'naa',
choice2: 'nyɛkwɛ',
choice3: 'nyɛnkpa',
choice4: 'nyɛfio',
answer: 2,
}, 
{
 

question: 'Okɛ hetoo ni ja aha sanebimɔi lɛ ahetoo\n\n Nuu ni fɔ mitsɛ lɛ, mi…..ni',

choice1: 'nana kansoa',
choice2: 'nii',
choice3: 'nana nuu',
choice4: 'nana dada',
answer: 2,
},
 {

 
question: 'Gamɛi afiyeli nibii baa nɛɛ. Ha hetoo ni ja\n\n Niyenii ni Gamɛi yeɔ kɛji eshɛ Hɔmɔwɔ ji……',
choice1: 'ata',
choice2: 'fotoli',
choice3: 'akliji',
choice4: 'kɔ',
answer: 4,
},
 {

 

question: 'Gamɛi afiyeli nibii baa nɛɛ. Ha hetoo ni ja\n\n Af?? haaji ay?l?yeli y? Ga Mashi….',

choice1: 'Hɔɔ',
choice2: 'Sohaa',
choice3: 'Soo',
choice4: 'Ju',
answer: 2,
}, 
{
 

question: 'Gamɛi afiyeli nibii baa nɛɛ. Ha hetoo ni ja\n\n Hɔmɔwɔyeli be mli lɛ maji enyɔ komɛi shiɔ kpa, Mɛni maji ?',

choice1: 'Nuŋua kɛ La',
choice2: 'Tɛshi kɛ Osu',
choice3: 'La kɛ Tɛshi',
choice4: 'Osu kɛ Tɛma',
answer: 3,
}, 
{
 
question: 'Kɛ hetoo ni ja agbe wiemɔi nɛɛ anaa\n\n Be ni wɔtee sɔ mɛ shishi lɛ, sɔlɔ lɛ kɛ……..kɔ dade yɛ la lɛ mli efɔ shi.',

choice1: 'abɛɛle',
choice2: 'hamlɛ',
choice3: 'sɔ mɛtɛ',
choice4: 'afoot',
answer: 1,
 },
{
 

question: 'Kɛ hetoo ni ja agbe wiemɔi nɛɛ anaa\n\n Wuolɛinyo kɛ lɛlɛ, nakai nɔ nisɔlɔ hu kɛ……',

choice1: 'asooyi',
choice2: 'tsene',
choice3: 'nu',
choice4: 'su',
answer: 4,
},
 {
 question: 'Kɛ hetoo ni ja agbe wiemɔi nɛɛ anaa\n\n Gbɔbilɔ lɛ kɛ ……..lɛ wo, egbaja lɛ mli kɛba shia.',

choice1: 'tooloo',
choice2: 'milɛloo',
choice3: '‘shɔ’ loo',
choice4: 'wuɔloo',
answer: 2,
},
 {

 

question: 'Kɛ hetoo ni ja agbe wiemɔi nɛɛ anaa\n\n Tɛ daa lɛ tsɔɔ ………..mli, kɛboteɔ saasɛ mli.',

choice1: 'ododobɛŋ',
choice2: 'kpaa',
choice3: 'bu',
choice4: 'gbɛ',
answer: 1,
},
 {

question: 'Gamɛi yɛ bɔ ni amɛbuɔ amɛfii lɛ amɛhaa. Ha saji ni baa nyɔji ni yɔɔ afi lɛ mli nɔ.\n\n Nyɔɔ ni ji enyɔ lɛ atsɛɔ lɛ Oflɔ. Mɛni gbɛ nɔ atsɔ ana gbɛi nɛɛ ?',

choice1: 'Aduawa ni woɔ',
choice2: 'Tsei ni kwɛɔ',
choice3: 'Fɔfɔi ko ni anaa',
choice4: 'Baa ko ni he fɔɔ kaa',
answer: 3,
},
 {

 question: 'Gamɛi yɛ bɔ ni amɛbuɔ amɛfii lɛ amɛhaa. Ha saji ni baa nyɔji ni yɔɔ afi lɛ mli nɔ.\n\n Antɔ ji nyɔɔ ni ji nyɔ ma. Mɛni mli ana gbɛi lɛ kɛjɛ ?',

choice1: 'Nyɔɔ tsere',
choice2: 'Kwaabuɛtɛ',
choice3: 'Atatu',
choice4: 'Ŋulami',
answer: 4,
}, 
{
 

question: 'Gamɛi yɛ bɔ ni amɛbuɔ amɛfii lɛ amɛhaa. Ha saji ni baa nyɔji ni yɔɔ afi lɛ mli nɔ.\n\n Naagbee nyɔ yɛ mɛnɛ mɛnɛ afi lɛ mli ji Afuabe, mɛni gbɛ nɔ atsɔ ana gbɛi lɛ ?',

choice1: 'Nu nɛɔ wɛtɛ wɛtɛ',
choice2: 'Kɔɔyɔɔ gbi tswaa',
choice3: 'Afuaa woɔ waa',
choice4: 'Hulu tsoɔ waa',
answer: 3,
},
 {

 

question: 'Gamɛi yɛ bɔ ni amɛbuɔ amɛfii lɛ amɛhaa. Ha saji ni baa nyɔji ni yɔɔ afi lɛ mli nɔ.\n\n Hulu tsoɔ krikri, je dɔɔ waa, ni latsa tsaa waa yɛ nyɔɔ ni ji etɛ lɛ nɔ.',

choice1: 'Antɔŋ',
choice2: 'Gbo',
choice3: 'Oflɔ',
choice4: 'Otsokrikri',
answer: 4,
}, 
{
 

question: 'Gamɛi yɛ bɔ ni amɛbuɔ amɛfii lɛ amɛhaa. Ha saji ni baa nyɔji ni yɔɔ afi lɛ mli nɔ.\n\n Question',

choice1: 'Option 1',
choice2: 'Option 2',
choice3: 'Option 3',
choice4: 'Option 4',
answer: 1,
},
 {

question: 'Tsɔɔmɔ nikasemɔi ni anaa yɔɔ nɛkɛ abɛi nɛe amli\n\n Maŋtsɛbi ejooo foi eyakwɛɛɛ yitso',

choice1: 'heshibaa',
choice2: 'tsuishitoo',
choice3: 'trumufeemɔ',
choice4: 'hiɛkɔɔ',
answer: 1,
},
 {

 

question: 'Tsɔɔmɔ nikasemɔi ni anaa yɔɔ nɛkɛ abɛi nɛe amli\n\n Koo ni here bo lɛ otsɛɛɛ lɛ koo sha',

choice1: 'tsuishitoo',
choice2: 'heshibaa',
choice3: 'bulɛ',
choice4: 'trumufeemɔ',
answer: 4,
},
 {

 

question: 'Tsɔɔmɔ nikasemɔi ni anaa yɔɔ nɛkɛ abɛi nɛe amli\n\n Osaaŋɔi ko ekako ŋwɛi da',

choice1: 'bulɛ',
choice2: 'nɔ fɛɛ nɔ yɛ naagbee',
choice3: 'maŋhedɔɔ',
choice4: 'heshibaa',
answer: 2,
},
 {

 
question: 'Mɛni okadii nɛɛ damɔ shi ha ?\n\n Mɔ ko ni efee nidiŋ',
choice1: 'heyeli',
choice2: 'naagba',
choice3: 'nkɔmɔyeli',
choice4: 'haom?',
answer: 3,
}, 
{
 

question: 'Nitsurufeemɔ',

choice1: 'awerɛho',
choice2: 'ekomefeemɔ',
choice3: 'shigbeemɔ',
choice4: 'hi mɛi tsuu',
answer: 4,
},
 {

 

question: 'Mɛni okadii nɛɛ damɔ shi ha ?\n\n Kɛji ona mɔ ko ni efee niyɛ lɛ, mɛni susumɔ baa oyitso ?',

choice1: 'miishɛɛ',
choice2: 'ekomefeemɔ',
choice3: 'shigbeemɔ',
choice4: 'hewalɛwoo',
answer: 1,
},
 {

question: 'Mɛni okadii nɛɛ damɔ shi ha ?\n\n Nine gɔnti',
choice1: 'nɔyaa',
choice2: 'miishɛɛ',
choice3: 'bulɛ',
choice4: 'hewalɛ',
answer: 4,
}, 
{
 

question: 'Mɛni okadii nɛɛ damɔ shi ha ?\n\n Yɛ saneyelihe loo gwabɔɔ mli lɛ, okadi ko yɛ kɛha taflatsɛtoo.',

choice1: 'fɔfɔi',
choice2: 'jwɛi',
choice3: 'baa',
choice4: 'zaana',
answer: 2,
}, 
{
 
question: 'Ha saji ni abibii yɛ adesatamɔ he lɛ ahetoo\n\n Yɛ adesatamɔ mli lɛ, toibolɔi lɛ fɛɛ taraa shi',

choice1: 'srɛnɛɛ',
choice2: 'kokroo',
choice3: 'kakadaŋŋ',
choice4: 'kɔntɔŋ',
answer: 4,
}, 
 {

question: 'Ha saji ni abibii yɛ adesatamɔ he lɛ ahetoo\n\n Adesatalɔ hiɛɔ tso ko be mli ni etaa adesa lɛ. No tsɔɔ….',

choice1: 'hewalɛ ni eyɔɔ',
choice2: 'suɔmɔ ni eyɔɔ',
choice3: 'miishɛɛ ni eyɔɔ',
choice4: 'heshibaa ni eyɔɔ',
answer: 1,
},
 {

 

question: 'Ha saji ni abibii yɛ adesatamɔ he lɛ ahetoo\n\n Yɛ adesatamɔ gbɛjianɔtoo mli lɛ, talɔ lɛ kɛ toibolɔi lɛ fɛɛ nyɛɔ feɔ nɔ ko kɛfoɔ adesatamɔ lɛ mli. Mɛni ji nɔ ni amɛfeɔ?',

choice1: 'amɛkpaa blɛ',
choice2: 'amɛlaa',
choice3: 'amɛ mɔɔ',
choice4: 'amɛyiɔ joo',
answer: 2,
}, 
{

question: 'Tsɔɔmɔ hetoi lɛ ateŋ nɔ ni ja fe ekrokomɛi lɛ fɛɛ\n\n Gbɛi kroko ni akɛtsɛɔ Sakiodom shwɛmɔ lɛ ji',

choice1: 'lai kɔmɔ',
choice2: 'tɛ kɔmɔ',
choice3: 'kɔmi kɔmɔ',
choice4: 'fɔbite kɔmɔ',
answer: 2,
},
 {

 

question: 'Tsɔɔmɔ hetoi lɛ ateŋ nɔ ni ja fe ekrokomɛi lɛ fɛɛ\n\n Ŋshɔnaa gbekɛbii nyaa……shwɛmɔ lɛ he',

choice1: 'tuumatu',
choice2: 'akro',
choice3: 'otoonsa',
choice4: 'ajamanaa',
answer: 4,
},
 {

 

question: 'Tsɔɔmɔ hetoi lɛ ateŋ nɔ ni ja fe ekrokomɛi lɛ fɛɛ\n\n Lala yɛ nitsumɔ mli………',

choice1: 'yeɔ buaa naatselɛ',
choice2: 'yeɔ ebua wanejee',
choice3: 'woɔ nitsulɔi lɛ hewalɛ',
choice4: 'gbɔjɔɔ nitsulɔi lɛ',
answer: 3,
},
 {

 

question: 'Tsɔɔmɔ hetoi lɛ ateŋ nɔ ni ja fe ekrokomɛi lɛ fɛɛ\n\n Nih??l?i laa be mli ni am?h?? am?nibii l?, ejaak?',

choice1: 'etsɛɔ jara',
choice2: 'woɔ niiahe sɔlɛ',
choice3: 'naa tseɔ',
choice4: 'gbɔleɔ kpɔia',
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
