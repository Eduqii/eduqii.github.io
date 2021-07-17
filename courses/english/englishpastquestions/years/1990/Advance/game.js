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




question: 'Read Passage I carefully and answer this question\n\nThe classroom was quiet because the pupils …………..',
choice1: 'wanted the lesson to end quickly',
choice2: 'did not understand the lesson',
choice3: 'were preparing for their final examination',
choice4: 'had stolen some pawpaw',
choice5: 'had heard that Mr Odumba had fallen down.',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n\nMr Odumba came to the school ………..',
choice1: 'because he wanted to beat one of the pupils',
choice2: 'to search for those who had stolen his pawpaw',
choice3: 'to return the bucket to the school',
choice4: 'to converse with one of the teachers',
choice5: 'to learn about “if” clauses',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n\n How did Mr Odumba‟s visit to the school affect the pupils?',
choice1: 'They were frightened',
choice2: 'He disturbed them',
choice3: 'They were happy',
choice4: 'They felt sorry for him',
choice5: 'They were ashamed',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n\n Which of the following statements is not true according to the passage?',
choice1: 'The pupils were weak in grammar',
choice2: 'Mr. Odumba fell down once',
choice3: 'The lesson was not understood',
choice4: 'The pupils‟ hands smelt of pawpaw',
choice5: 'Mr Odumba kept a garden',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n\n Mr Odumba‟s big head came round the door. \nThis means Mr Odumba‟s head',
choice1: 'appeared at the entrance',
choice2: 'hit the door',
choice3: 'blocked the entrance',
choice4: 'pushed the door open',
choice5: 'turned round at the door',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\n\n The expression, Can I have a word with you? means, let me …….',
choice1: 'help you teach',
choice2: 'teach you a word',
choice3: 'give you something',
choice4: 'have my pawpaw back',
choice5: 'speak to you',
answer: 5,
},
{

question: 'Read Passage II carefully and answer this question\n\n According to the passage when one comes across two dogs fighting, one ………..',
choice1: 'becomes both attracted and frightened',
choice2: 'must run away from them',
choice3: 'must hit their necks with a stick',
choice4: 'must shout to separate them',
choice5: 'becomes both sorry and happy.',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\n\n The spectators thought Whisky had won the fight because he ………..',
choice1: 'had once attacked and defeated a lizard',
choice2: 'knew how to fight',
choice3: 'was able to jump higher than Sandy',
choice4: 'pushed Sandy to the ground',
choice5: 'showed his sharp teeth',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\n Whisky was defeated because Sandy ………',
choice1: 'had the support of the crowd',
choice2: 'bit his legs',
choice3: 'held his throat ',
choice4: 'turned the tide ',
choice5: 'attacked first',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n\n Sandy played it cool means that Sandy ……..',
choice1: 'enjoyed the fight',
choice2: 'felt very cold',
choice3: 'did not bark',
choice4: 'remained undisturbed',
choice5: 'stopped fighting',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\n The tide turned as used in the passage means ………',
choice1: 'the situation changed',
choice2: 'it became windy',
choice3: 'the weather became more violent',
choice4: 'the fight became more violent',
choice5: 'spectators changed their minds',
answer: 1,
},
{

question: 'From the list of words lettered A to E, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The traders a͟g͟r͟e͟e͟d͟ to pay extra money to the council.',
choice1: 'tried',
choice2: 'struggled',
choice3: 'refused',
choice4: 'remembered',
choice5: 'wanted',
answer: 3,
},
{
question: 'From the list of words lettered A to E, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The boxer displayed a high degree of b͟r͟a͟v͟e͟r͟y͟ in the fight.',
choice1: 'speed',
choice2: 'cowardice',
choice3: 'alertness',
choice4: 'competence',
choice5: 'skill',
answer: 2,
},
{
question: 'From the list of words lettered A to E, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n It is a fact that Zaibu often gives a͟c͟c͟u͟r͟a͟t͟e͟ answers to questions.',
choice1: 'long',
choice2: 'silly',
choice3: 'interesting',
choice4: 'quick',
choice5: 'wrong',
answer: 5,
},
{
question: 'From the list of words lettered A to E, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The students r͟e͟j͟e͟c͟t͟e͟d͟ the prefect chosen by the staff.',
choice1: 'admired ',
choice2: 'advised ',
choice3: 'relied on ',
choice4: 'accepted',
choice5: 'helped',
answer: 4,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n At the end of the investigations the police said t̲h̲e̲ ̲h̲a̲n̲d̲s̲ ̲o̲f̲ ̲t̲h̲e̲ ̲a̲c̲c̲u̲s̲e̲d̲ ̲w̲e̲r̲e̲ ̲c̲l̲e̲a̲n̲\n. This means ……..',
choice1: 'police praised the accused for his neatness',
choice2: 'accused was blameless',
choice3: 'accused had washed his hands',
choice4: 'police saw the accused‟s fingerprints.',
choice5: 'police said the accused told the truth',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n „It‟s only 2 o‟clock, Martin. Y̲o̲u̲ ̲n̲e̲e̲d̲n̲‟̲t̲ ̲g̲o̲ ̲y̲e̲t̲ \n. This means that Martin ………',
choice1: 'doesn‟t go out',
choice2: 'can‟t go yet',
choice3: 'doesn‟t have to go yet',
choice4: 'isn‟t going yet',
choice5: 'doesn‟t want to go',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n H̲e̲ ̲f̲e̲a̲r̲e̲d̲ ̲t̲h̲a̲t̲ ̲h̲i̲s̲ ̲f̲a̲t̲h̲e̲r̲ ̲w̲o̲u̲l̲d̲ ̲a̲s̲k̲ ̲w̲h̲e̲r̲e̲ ̲h̲e̲ ̲h̲a̲d̲ ̲b̲e̲e̲n̲\n. This means that …….',
choice1: 'he was afraid when his father asked him where he had been. ',
choice2: 'he would be afraid if his father asked him where he had been.',
choice3: 'he was afraid of his father so he did not tell him where he had been.',
choice4: 'he was afraid that his father would want to know where he had been. ',
choice5: 'he was frightened by the way his father asked him where he had been.',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n I don‟t like people w̲h̲o̲ ̲b̲l̲o̲w̲ ̲t̲h̲e̲i̲r̲ ̲o̲w̲n̲ ̲t̲r̲u̲m̲p̲e̲t̲\n. This means I dislike people who ………..',
choice1: 'are noisy',
choice2: 'are selfish',
choice3: 'blow trumpets ',
choice4: 'are quarrelsome ',
choice5: 'are boastful',
answer: 5,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n I̲f̲ ̲M̲a̲n̲t̲e̲y̲ ̲h̲a̲d̲ ̲p̲a̲s̲s̲e̲d̲ ̲t̲h̲e̲ ̲e̲x̲a̲m̲i̲n̲a̲t̲i̲o̲n̲ ̲h̲i̲s̲ ̲f̲a̲t̲h̲e̲r̲ ̲w̲o̲u̲l̲d̲ ̲h̲a̲v̲e̲ ̲b̲o̲u̲g̲h̲t̲ ̲h̲i̲m̲ ̲a̲ ̲p̲r̲e̲s̲e̲n̲t̲\n. This means Mantey …',
choice1: 'failed the examination so he had no present',
choice2: 'did not usually do well in examination',
choice3: 'would be given a present for being successful in the examination',
choice4: 'usually received presents from his father after examinations',
choice5: 'knew that his father would buy him a present to help pass examination.',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n “Put this money aside a̲g̲a̲i̲n̲s̲t̲ ̲a̲ ̲r̲a̲i̲n̲y̲ ̲d̲a̲y̲, Kwesi. Kwesi is being told …………..',
choice1: 'to keep the money until he really needs it',
choice2: 'to keep the money until it rains',
choice3: 'not to waste money when it rains',
choice4: 'to put all his money in the bank',
choice5: 'give out money on the day it rains',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Eshun is a good singer, ………….?',
choice1: 'isn‟t it',
choice2: 'wasn‟t he',
choice3: 'is he',
choice4: 'isn‟t he',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYou shouldn‟t work so late, ………?',
choice1: 'won‟t you',
choice2: 'do you',
choice3: 'should you',
choice4: 'don‟t you',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYou‟ll travel by train to Kumasi, …………?',
choice1: 'won‟t you',
choice2: 'can‟t you',
choice3: 'shouldn‟t you',
choice4: 'wouldn‟t you',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYou are not afraid of snakes, …………..?',
choice1: 'aren‟t you',
choice2: 'are you',
choice3: 'do you',
choice4: 'won‟t you',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nI can go to bed now because I ………….my assignment.',
choice1: 'am finishing ',
choice2: 'will finished ',
choice3: 'finished',
choice4: 'have finished',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nNo one can be expected to …………such bad behaviour.',
choice1: 'put up with',
choice2: 'put in for',
choice3: 'put across to',
choice4: 'put down against',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nI can‟t hear him; I wish he ………..louder.',
choice1: 'will speak ',
choice2: 'is speaking ',
choice3: 'would speak ',
choice4: 'had spoken',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nIf Sampson had spoken the truth the teacher ………….him.',
choice1: 'shouldn‟t have punished',
choice2: 'won‟t have punished',
choice3: 'wouldn‟t have punished',
choice4: 'wouldn‟t punish',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nThe head teacher advised the students to ………….if they wanted to do well in their examination.',
choice1: 'sit back',
choice2: 'sit by ',
choice3: 'sit on ',
choice4: 'sit up',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nAt these words, the students …………laughter.',
choice1: 'burst with ',
choice2: 'burst into ',
choice3: 'burst for ',
choice4: 'burst in',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nMy uncle will go on a short course before he …………his new job.',
choice1: 'takes to ',
choice2: 'takes up ',
choice3: 'takes out ',
choice4: 'takes in',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nThe prefect made the boy …………the assembly hall.',
choice1: 'swept ',
choice2: 'sweeps ',
choice3: 'to sweep ',
choice4: 'sweep',
answer: 4,
},
{

question: 'Choose from the alternatives lettered A to E the one which is nearest in meaning to the underlined word or words as they are used in the sentence\n It is not always good to believe all newspaper a̲c̲c̲o̲u̲n̲t̲s̲.̲',
choice1: 'cartoons ',
choice2: 'headlines ',
choice3: 'reports',
choice4: 'jokes',
choice5: 'columns',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to E the one which is nearest in meaning to the underlined word or words as they are used in the sentence\n Everybody should have a g͟o͟a͟l͟ in life.',
choice1: 'a choice',
choice2: 'a skill',
choice3: 'an opinion',
choice4: 'an aim',
choice5: 'a result',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to E the one which is nearest in meaning to the underlined word or words as they are used in the sentence\n Mr. Mensah was w̲o̲r̲n̲ ̲o̲u̲t̲ after walking up the hill.',
choice1: 'tired',
choice2: 'sweating ',
choice3: 'hungry ',
choice4: 'worried ',
choice5: 'sleepy',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to E the one which is nearest in meaning to the underlined word or words as they are used in the sentence\n Elephants are becoming r̲a̲r̲e̲ ̲i̲n̲ some parts of Africa.',
choice1: 'unimportant ',
choice2: 'uncommon ',
choice3: 'unknown',
choice4: 'exposed',
choice5: 'destructive',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to E the one which is nearest in meaning to the underlined word or words as they are used in the sentence\n On the doctor‟s advice, Mr Smith c̲u̲t̲ ̲o̲u̲t̲ smoking altogether.',
choice1: 'stopped',
choice2: 'dismissed ',
choice3: 'postponed ',
choice4: 'interrupted ',
choice5: 'decreased',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to E the one which is nearest in meaning to the underlined word or words as they are used in the sentence\n The old man told us a t̲a̲l̲l̲ ̲s̲t̲o̲r̲y̲ about a soldier who fought a war with a spoon.',
choice1: 'a sad story',
choice2: 'an adventurous ',
choice3: 'a funny story ',
choice4: 'a long story',
choice5: 'an incredible story',
answer: 5,
},
{
question: 'Choose from the alternatives lettered A to E the one which is nearest in meaning to the underlined word or words as they are used in the sentence\n All my clothes are o̲u̲t̲m̲o̲d̲e̲d̲.̲',
choice1: 'worn out',
choice2: 'old-fashioned',
choice3: 'handmade',
choice4: 'ready-made',
choice5: 'specially made',
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
