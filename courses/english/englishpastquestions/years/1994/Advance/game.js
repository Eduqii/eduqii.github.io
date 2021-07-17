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
/*
Que 1 - 5
SECTION A COMPREHENSION

Read the following passages carefully and answer the questions which follow

PASSAGE I

A long time ago, the world was in total darkness. There was neither water nor fire. Men lived in this condition for a long time because King Eagle, who was the custodian of the sun, moon, stars, water and fire, had bullied them into accepting that situation.

Meanwhile, Eagle had a charming daughter who had fallen in love with Crow – a handsome spotless white bird. As their friendship grew stronger, Crow got to know what Eagle was keeping away from men. On one of his visits, therefore, he secretly stole Eagle‟s hidden treasure that consisted of light, water and fire and flew away with it.

As soon as he got outside, he hanged the sun in the sky. Instantly, the whole world was brilliantly lit up. When the sun set, he fixed the moon and spread the stars around it. Then the darkness of the night began to lift. He was so thrilled by his achievement that he glided and swerved in a beautiful display in the sky. While he was doing this, the water fell to the ground and formed rivers, lakes and streams.

He still held fast unto the fire in his beak. Suddenly some strong and violent winds blew smoke from the fire over Crow‟s beautiful feathers. The smoke made the feathers jet-black leaving a band of white feathers around his neck.


Que 6 - 12
PASSAGE II

As we were eagerly preparing for our special supper of roasted chicken, pepper sauce and fried yam, we heard another loud knock at the door. Papa opened the door to let in a fast-talking handsome stranger.

According to him he was passing to the next village but there were no vehicles. Therefore he was
stranded. My parents with their customary generosity allowed him to stay the rest of the day with us. Soon after, supper was ready. We the younger children had to eat in the kitchen, whilst my parents and the others ate in the dining room.

From where we were eating we could hear and see the adults. “Now, Mr Anang,” said my father, “you being the last to arrive will share the chicken,” “Very well said,” agreed Mr Anang. He began by cutting the head of the chicken, which he gave to Papa saying, “You are the head of the family, so you get the head.” To my mother, he said, “You are the next to the head; therefore, get the neck.” My elder brother, Yoofi, and sister,
Aba had wings because they were of age and would need wings to fly away from the family nest. The other two

guests got the feet in order that they could walk to their destinations. Finally, he declared in a loud voice, “I, a poor wandering man, who must treat my kwashiorkor once and for all, will take the rest!” There was a long silence after this around the dining table.

*/		
question: 'Read Passage I carefully and answer this question\n Why did men not complain about their condition? Because they …………',
choice1: 'thought fire was too hot',
choice2: 'were afraid of Eagle',
choice3: 'were satisfied with what they had',
choice4: 'enjoyed darkness',
choice5: 'did not like water',
answer: 2
},
{
question: 'Read Passage I carefully and answer this question\n Crow released the stolen treasure to the world in the following order: ',
choice1: 'sun, moon, water, fire',
choice2: 'sun, fire, water, moon ',
choice3: 'moon, water, fire, sun ',
choice4: 'sun, water, moon, fire ',
choice5: 'sun, moon, fire, water',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\n Which of the following actions was a deliberate one by Crow? The …………',
choice1: 'dropping of water to the ground',
choice2: 'appearance of violent winds',
choice3: 'burning of his beak',
choice4: 'hanging of the sun in the sky',
choice5: 'blowing of smoke over his feathers',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n Thrilled in the passage means',
choice1: 'afraid',
choice2: 'excited',
choice3: 'surprised ',
choice4: 'thankful ',
choice5: 'popular',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n Eagle‟s action can best be described as',
choice1: 'clever',
choice2: 'dangerous',
choice3: 'famous ',
choice4: 'kindly ',
choice5: 'selfish',
answer: 5,
},
{

question: 'Read Passage II carefully and answer this question\nThe writer‟s family were preparing for ………………',
choice1: 'a birthday party',
choice2: 'an extraordinary supper',
choice3: 'a celebration',
choice4: 'their usual supper',
choice5: 'a family',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\nThe handsome stranger stopped at the writer‟s house because…………',
choice1: 'he did not know the way to his village',
choice2: 'he was hungry',
choice3: 'it was very late in the night',
choice4: 'there was no transport',
choice5: 'he wanted to meet her family',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nTheir customary generosity in the passage tell us that the parents were usually ………..',
choice1: 'proud',
choice2: 'strict',
choice3: 'attentive',
choice4: 'kind',
choice5: 'inquisitive',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nHow many people had their meal in the dining room?',
choice1: 'four ',
choice2: 'five ',
choice3: 'six',
choice4: 'seven',
choice5: 'eight',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nWhich of the following is true according to the order in which the roasted chicken was shared in the passage?',
choice1: 'head, feet, wings, body, neck',
choice2: 'head, wings, neck, body, feet ',
choice3: 'head, neck, wings, feet, body ',
choice4: 'head, neck, feet, wings, body ',
choice5: 'head, feet, wings, neck, body',
answer: 3,
},
{

question: 'Read Passage II carefully and answer this question\nMr Anang‟s behaviour can best be described as ……………',
choice1: 'mean and clever',
choice2: 'talkative but generous',
choice3: 'honest and generous',
choice4: 'jovial but proud',
choice5: 'interesting but fooling',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nHow did the writer‟s family respond to the way the roasted chicken was shared? They ………',
choice1: 'were annoyed',
choice2: 'wept over it ',
choice3: 'were shocked ',
choice4: 'disagreed',
choice5: 'wanted to ask questions',
answer: 3,
},
{
//SECTION B

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'It is always good to be m͟o͟d͟e͟s͟t͟ in your demands',
choice1: 'cheerful ',
choice2: 'humble ',
choice3: 'pleasant ',
choice4: 'smart',
choice5: 'truthful',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'There is no need to do r͟a͟s͟h͟ work.',
choice1: 'speedy',
choice2: 'lazy ',
choice3: 'busy ',
choice4: 'hasty ',
choice5: 'funny',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'Kofi spent all his time s͟t͟a͟r͟i͟n͟g͟ at the madman',
choice1: 'smiling ',
choice2: 'shouting ',
choice3: 'laughing ',
choice4: 'hooting ',
choice5: 'gazing',
answer: 5,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'This mountain is rather too r͟i͟s͟k͟y͟ to climb',
choice1: 'rough',
choice2: 'steep',
choice3: 'difficult',
choice4: 'dangerous',
choice5: 'broad',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'This thief will have to p͟l͟e͟a͟d͟ for mercy',
choice1: 'beg',
choice2: 'speak ',
choice3: 'apply ',
choice4: 'stand',
choice5: 'whisper',
answer: 1,
},
{
//SECTION C

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'The students were advised t̲o̲ ̲s̲t̲o̲p̲ ̲b̲u̲i̲l̲d̲i̲n̲g̲ ̲c̲a̲s̲t̲l̲e̲s̲ ̲i̲n̲ ̲t̲h̲e̲ ̲a̲i̲r̲.̲ This means that the students should……..',
choice1: 'not build any more castles',
choice2: 'be serious and realistic',
choice3: 'not worry about castles',
choice4: 'be serious and hardworking',
choice5: 'not think about building now',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Even though I don‟t talk to her, I̲ ̲g̲i̲v̲e̲ ̲t̲h̲e̲ ̲d̲e̲v̲i̲l̲ ̲h̲i̲s̲ ̲d̲u̲e̲.̲ This means I will ………. her',
choice1: 'agree with', 
choice2: 'confess to ',
choice3: 'reward',
choice4: 'be kind to',
choice5: 'forgive',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Kwasi is h̲e̲a̲d̲ ̲o̲v̲e̲r̲ ̲h̲e̲e̲l̲s̲ ̲ in love with Ama. This means…………',
choice1: 'Kwasi looks at his heels when he sees Ama',
choice2: 'Kwasi‟s love for Ama is abnormal',
choice3: 'Kwasi can‟t control himself when he sees Ama',
choice4: 'Kwasi is deeply in love with Ama.',
choice5: 'Kwasi has hurt his head and heel by following Ama',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'The chief told his linguist not to b̲e̲a̲t̲ ̲a̲b̲o̲u̲t̲ ̲t̲h̲e̲ ̲b̲u̲s̲h̲.̲ This means the linguist must ………',
choice1: 'not stammer',
choice2: 'go straight to the point',
choice3: 'not enter the bush ',
choice4: 'conclude the case ',
choice5: 'clear the bush',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'When mother returned, Kwame l̲e̲t̲ ̲t̲h̲e̲ ̲c̲a̲t̲ ̲o̲u̲t̲ ̲o̲f̲ ̲t̲h̲e̲ ̲b̲a̲g̲.̲ This means that Kwame ………..',
choice1: 'told mother to go out',
choice2: 'took the cat from the bag',
choice3: 'told mother what had happened',
choice4: 'removed the cat from the bag',
choice5: 'told mother he had a cat in his bag',
answer: 3,
},
{
//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'This room is too d͟i͟m͟.',
choice1: 'lit',
choice2: 'shining ',
choice3: 'bright ',
choice4: 'light',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'This baby is very e͟n͟e͟r͟g͟e͟t͟i͟c͟ for his age.',
choice1: 'dull',
choice2: 'simple ',
choice3: 'bulky ',
choice4: 'tall',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'The flower is made from a͟r͟t͟i͟f͟i͟c͟i͟a͟l͟ materials',
choice1: 'natural',
choice2: 'preserved ',
choice3: 'wonderful ',
choice4: 'new',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'All the accused persons were c̲o̲n̲v̲i̲c̲t̲e̲d̲.̲',
choice1: 'executed ',
choice2: 'identified ',
choice3: 'addressed ',
choice4: 'freed',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'There are guards on our border because the government wants to e͟l͟i͟m͟i͟n͟a͟t͟e͟ smuggling',
choice1: 'notice',
choice2: 'encourage',
choice3: 'manage with',
choice4: 'investigate',
choice5: 'nothing',
answer: 2,
},
{
//SECTION E

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'It all depends …………..your being hardworking',
choice1: 'by',
choice2: 'with',
choice3: 'in',
choice4: 'upon',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'We should always be proud ………….our motherland.',
choice1: 'in ',
choice2: 'of ',
choice3: 'for ',
choice4: 'by',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + '…………..hearing the news, he jumped high for joy.',
choice1: 'Over',
choice2: 'On',
choice3: 'With',
choice4: 'In',
choice5: 'nothing',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'A thief was caught …………the house yesterday',
choice1: 'through',
choice2: 'up',
choice3: 'outside',
choice4: 'over',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'I object ………..your joining our school team.',
choice1: 'to ',
choice2: 'by ',
choice3: 'at ',
choice4: 'on',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The lady did not see ………….in the house.',
choice1: 'somebody',
choice2: 'no one',
choice3: 'anybody',
choice4: 'someone',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'This is the book ……..I picked from the floor.',
choice1: 'whom ',
choice2: 'whose ',
choice3: 'what ',
choice4: 'which',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The man ……….house was burnt down is in hospital.',
choice1: 'who‟s ',
choice2: 'whom ',
choice3: 'whose ',
choice4: 'which',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + '…………boys are very happy with the toys',
choice1: 'They ',
choice2: 'These ',
choice3: 'That ',
choice4: 'This',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Have a bottle of coke, will you? No, ………',
choice1: 'I don‟t',
choice2: 'please',
choice3: 'thank you',
choice4: 'I won‟t',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Let‟s go out and play ………….?',
choice1: 'shall we',
choice2: 'do we',
choice3: 'will we',
choice4: 'would we',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Kofi will not meet his father at home if he ………….. not here by 5:00 p.m.',
choice1: 'was ',
choice2: 'were ',
choice3: 'isn‟t ',
choice4: 'is',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The baby needs a bath, doesn‟t it? …………..',
choice1: 'no, it needs',
choice2: 'no, it does',
choice3: 'yes, it doesn‟t',
choice4: 'yes, it does',
choice5: 'nothing',
answer: 4,
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
