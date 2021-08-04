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
	
question: 'Read Passage I carefully and answer this question\n\nBarimah asked Fosua to stay indoors because ',
choice1: 'people were running helter-skelter. ',
choice2: 'there was a terrible noise.',
choice3: 'he suspected danger outside. ',
choice4: 'the place was very dark.',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n\nWhat did Barimah find immediately he went out?',
choice1: 'Araba fighting the flames',
choice2: 'People packing things',
choice3: 'People shouting',
choice4: 'Agya Atta‟s house burning',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n\n… put out in the passage means',
choice1: 'control',
choice2: 'extinguish',
choice3: 'reduce',
choice4: 'destroy',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n\nFrom the passage we can infer that the Barimahs and the Agya Attas are',
choice1: 'classmates',
choice2: 'good neighbours',
choice3: 'in-laws',
choice4: 'age mates',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n\nPeople sympathized with Araba because she',
choice1: 'had been left by her husband.', 
choice2: 'toiled with her husband.',
choice3: 'was a good woman.',
choice4: 'was sad.',
answer: 3,
},
{

question: 'Read Passage II carefully and answer this question\n\nWhat has society done about smoking? It has',
choice1: 'sent smokers to court.',
choice2: 'given medical treatment to smokers.',
choice3: 'ignored it.',
choice4: 'opposed it.',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\nAccording to the passage, which of the following is caused by smoking?',
choice1: 'Malaria',
choice2: 'Measles',
choice3: 'Cancer of the lungs',
choice4: 'Tuberculosis',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n\nWhich of the following is true about pregnant women who smoke? They',
choice1: 'are likely to give birth to dead babies',
choice2: 'are not able to breastfeed ',
choice3: 'are likely to have twins ',
choice4: 'lose weight',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\n\nPassive smokers are those who',
choice1: 'befriend smokers',
choice2: 'are addicted to smoking',
choice3: 'do not smoke at all',
choice4: 'inhale smoke from smokers‟ cigarettes',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\nAccording to the passage, smokers are',
choice1: 'fearless ',
choice2: 'selfish ',
choice3: 'proud',
choice4: 'disrespectful',
answer: 2,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nSenyo tried i̲n̲ ̲v̲a̲i̲n̲ to stop his friend from stealing the kitten.',
choice1: 'hard',
choice2: 'timidly',
choice3: 'angrily',
choice4: 'unsuccessfully',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nWith hard work we can o͟v͟e͟r͟c͟o͟m͟e͟ any problem.',
choice1: 'get',
choice2: 'avoid ',
choice3: 'stop ',
choice4: 'solve',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nThe meal is d͟e͟l͟i͟c͟i͟o͟u͟s͟.͟',
choice1: 'fine',
choice2: 'tasty',
choice3: 'sweet',
choice4: 'nutritious',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n The audience a͟p͟p͟l͟a͟u͟d͟e͟d͟ the actors at the end of the play.',
choice1: 'booed',
choice2: 'invited',
choice3: 'rewarded',
choice4: 'cheered',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nJasper l͟a͟m͟e͟n͟t͟e͟d͟ the loss of his pet.',
choice1: 'regretted',
choice2: 'mourned',
choice3: 'remembered',
choice4: 'discovered',
answer: 2,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n John is always l̲i̲g̲h̲t̲-̲h̲e̲a̲r̲t̲e̲d̲ in spite of his problems. This means that in spite of his problems John is always',
choice1: 'careless',
choice2: 'cheerful',
choice3: 'cool',
choice4: 'proud',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nAfter that accident Ayorkor has really g̲o̲n̲e̲ ̲t̲h̲r̲o̲u̲g̲h̲ ̲t̲h̲e̲ ̲m̲i̲l̲l̲.̲ This means Ayorkor has',
choice1: 'changed her lifestyle',
choice2: 'become wiser',
choice3: 'suffered a lot',
choice4: 'received some money',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nMoro f̲e̲l̲t̲ very much a̲t̲ ̲h̲o̲m̲e̲ at his friends‟s house. This means that Moro',
choice1: 'knew his friend‟s house',
choice2: 'was comfortable and relaxed',
choice3: 'was disappointed',
choice4: 'lived with his friend.',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nThe students w̲e̲r̲e̲ ̲a̲l̲l̲ ̲e̲a̲r̲s̲ during the programme. This means that the students',
choice1: 'answered questions. ',
choice2: 'looked closely.',
choice3: 'closed their ears. ',
choice4: 'listened intently',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nIt took our new prefect two months before he c̲o̲u̲l̲d̲ ̲f̲i̲n̲d̲ ̲h̲i̲s̲ ̲f̲e̲e̲t̲.̲ This means that it took the prefect two months before he',
choice1: 'knew everybody ',
choice2: 'became confident ',
choice3: 'won a prize',
choice4: 'became popular',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The Member of Parliament is very g͟e͟n͟e͟r͟o͟u͟s͟; he has done much for his people.',
choice1: 'honourable',
choice2: 'proud',
choice3: 'talkative',
choice4: 'unkind',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n If you are i͟n͟d͟o͟l͟e͟n͟t͟, you will not pass the examination.',
choice1: 'hardworking',
choice2: 'rude',
choice3: 'careless',
choice4: 'honest',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n When asked about the theft, Kwame said he was g̲u̲i̲l̲t̲y̲.̲',
choice1: 'surprised',
choice2: 'afraid',
choice3: 'absent',
choice4: 'innocent',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Handle the glass with care; it is f̲r̲a̲g̲i̲l̲e̲.̲',
choice1: 'rigid',
choice2: 'beautiful',
choice3: 'unbreakable',
choice4: 'new',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Some of our customs are o̲l̲d̲-̲f̲a̲s̲h̲i̲o̲n̲e̲d̲.̲',
choice1: 'modern',
choice2: 'attractive ',
choice3: 'interesting ',
choice4: 'funny',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nOf all the Brown children, Ato is ……….',
choice1: 'the short',
choice2: 'the shorter ',
choice3: 'the shortest ',
choice4: 'short',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Amma was so frightened ………….she fainted.',
choice1: 'so',
choice2: 'as',
choice3: 'then',
choice4: 'that',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nAberewa has ………friends who often visit her.',
choice1: 'few ',
choice2: 'much ',
choice3: 'a little ',
choice4: 'a few',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nKofi is the boy to …………..I gave the pen.',
choice1: 'whose ',
choice2: 'which ',
choice3: 'whom ',
choice4: 'who',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYou are tired, ………….?',
choice1: 'aren‟t you ',
choice2: 'don‟t you ',
choice3: 'isn‟t it',
choice4: 'not so',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n He said that he …………come.',
choice1: 'will',
choice2: 'would',
choice3: 'has',
choice4: 'have',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nWhen Daddy arrived, Mummy ………..finished cooking.',
choice1: 'has ',
choice2: 'had ',
choice3: 'have',
choice4: 'having',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nHe was …………tired that he couldn‟t finish the race.',
choice1: 'much',
choice2: 'too',
choice3: 'so',
choice4: 'very',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nThe farmer was ………by a poisonous snake.',
choice1: 'bitten ',
choice2: 'beaten ',
choice3: 'bit',
choice4: 'beat',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYou have put too ………sugar in the porridge.',
choice1: 'many ',
choice2: 'much ',
choice3: 'few ',
choice4: 'small',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYaw is a ………………..',
choice1: 'handsome, tall man ',
choice2: 'handsome man tall ',
choice3: 'tall, handsome man ',
choice4: 'man, tall, handsome',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nI am …………to walking to school everyday.',
choice1: 'using ',
choice2: 'uses ',
choice3: 'use',
choice4: 'used',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nThe mechanic succeeded ……………the generator.',
choice: 'at repairing ',
choice2: 'in repairing ',
choice3: 'to repair',
choice4: 'with repairing',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nIf I ………………with my grandmother, I would have enjoyed village life.',
choice1: 'had lived',
choice2: 'have lived',
choice3: 'have been living',
choice4: 'am living',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Atia has given ………….smoking.',
choice1: 'off ',
choice2: 'out ',
choice3: 'up ',
choice4: 'in',
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

		return window.location.assign('end.html') 
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
