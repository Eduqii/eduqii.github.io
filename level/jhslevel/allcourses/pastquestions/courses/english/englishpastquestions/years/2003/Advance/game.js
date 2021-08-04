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

Que 1 - 6

SECTION A COMPREHENSION

Read the following passages carefully and answer the questions which follow

PASSAGE I

The children rushed out of school that afternoon innocently singing the song they had just learned: Rain, rain, go away.
Go and come another day. Little children want to play. Rain, rain, go away

But they stopped abruptly when they looked up and saw dark clouds racing across the sky. These were signs of rain and the children were beside themselves with joy. Then they burst into yet another song:

The rains will soon come. The sky will be bright And the guns will boom

As they sang and danced, they were soon joined by their parents in their happiness. It was six months since it had last rained and all that time the farmers prayed for rain that would not come. The result was famine in the country for the land became so dry that new crops could not be sown and cassava could not be uprooted. The streams and the wells had also dried up and the people could find very little water for themselves and their livestock. Was it then strange that adults danced and sang like children in the hope that their troubles would soon be over? They were sure that the fetish priest‟s sacrifices would not be in vain.

But they woke up the next morning to find that the land was still dry; there was not a drop of rainwater anywhere.

Then they became angry and ran after the fetish priest. But he was gone before they could lynch him.

Que 7 - 11

PASSAGE II

Teacher Amu never lost the opportunity to give pep-talks to his students. „Variety is the spice of life,‟ he often
began. Then he would tell them how life has opposites, like good and bad. He would talk about the variety of

birds, the different kinds of fish and species of trees. His students could always tell when teacher Amu‟s sermons were about to end. He would raise his voice and loop up as he made his point: “God made them all and He said, „It is good‟.”

These words had a lasting effect on his students. When the class was over, they would go on reeling with laughter as they recited these words. Soon, it was not surprising when they began to call Teacher Amu, „God made them all‟ whenever his back was turned.

But one of them, Kofi Abre, did not consider Teacher Amu‟s pep-talks funny at all. He was not amused that his classmates joked with his teacher‟s words. Teacher Amu had said that the world was made up of different things, different people and different habits. So why did they bother when he, Abre, acted differently?

The other day, he shouted down a school mate who called him lazy. He almost bloodied a friend‟s nose too when this friend scolded him for not doing his homework. Teacher Amu warned that he would punish Abre. It was an act of indiscipline. Kofi Abre shook his head. It was his friend who offended him yet Teacher Amu would punish him for being violent and different.

*/

question: 'Read Passage I carefully and answer this question\nThe children changed their song because',
choice1: 'the guns would be fired. ',
choice2: 'it was going to rain.',
choice3: 'their parents had seen the fetish priest. ',
choice4: 'they did not like their teacher‟s song.',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\nThe parents also sang and danced because',
choice1: 'they wanted to be happy.',
choice2: 'the children were returning from school. ',
choice3: 'it started to rain.',
choice4: 'they believed it would rain.',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nWhich of the following is true?',
choice1: 'The people beat the fetish priest',
choice2: 'It had rained for six months',
choice3: 'There was little water to drink',
choice4: 'The children did not want the rain',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\nAbruptly in the passage means',
choice1: 'soon ',
choice2: 'totally ',
choice3: 'slowly',
choice4: 'suddenly',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nThe people wanted to lynch the fetish priest because',
choice1: 'there was famine',
choice2: 'the streams had dried up',
choice3: 'he did not perform the sacrifices',
choice4: 'he had deceived them',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nFrom the passage we learn that',
choice1: 'the children were innocent',
choice2: 'man cannot fully rely on nature',
choice3: 'adults play like children',
choice4: 'it had not rained for several days',
answer: 2,
},
{

question: 'Read Passage II carefully and answer this question\nThe expression, „Variety is the spice of life‟ means life',
choice1: 'has its ups and downs',
choice2: 'is like a tasty food',
choice3: 'should be taken seriously',
choice4: 'is full of different and interesting things',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nThe students called Teacher Amu „God made them all‟ because',
choice1: 'it was his favourite saying',
choice2: 'he always looked up',
choice3: 'his pep-talks were funny',
choice4: 'he liked preaching',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nKofi Abre did not like the jokes because he',
choice1: 'hated his classmates',
choice2: 'was afraid of his teacher ',
choice3: 'loved his teacher‟s words ',
choice4: 'was lazy',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\nThe word scolded in the passage means',
choice1: 'reminded ',
choice2: 'annoyed. ',
choice3: 'rebuked',
choice4: 'questioned',
answer: 3,
},
{

question: 'Read Passage II carefully and answer this question\nTeacher Amu punished Kofi Abre because he',
choice1: 'did not do his homework',
choice2: 'did not behave well',
choice3: 'did not like pep-talks',
choice4: 'shook his head',
answer: 2,
},
{
//SECTION B



question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word or phrase in each sentence\nAbass was not selected to play because he had little s͟t͟a͟m͟i͟n͟a͟.',
choice1: 'love',
choice2: 'potential ',
choice3: 'endurance ',
choice4: 'skill',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word or phrase in each sentence\nThe town was d͟e͟s͟e͟r͟t͟e͟d͟ after the war.',
choice1: 'destroyed',
choice2: 'built',
choice3: 'quiet',
choice4: 'abandoned',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word or phrase in each sentence\nThe police i͟n͟t͟e͟r͟r͟o͟g͟a͟t͟e͟d͟ the suspect at the police station.',
choice1: 'warned',
choice2: 'questioned',
choice3: 'detained',
choice4: 'beat',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word or phrase in each sentence\nJohn was i̲m̲p̲r̲e̲s̲s̲e̲d̲ ̲w̲i̲t̲h̲ Joana‟s gift.',
choice1: 'moved',
choice2: 'deceived ',
choice3: 'calmed ',
choice4: 'pleased',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word or phrase in each sentence\nMost doctors are c͟a͟u͟t͟i͟o͟u͟s͟ in treating patients.',
choice1: 'careful',
choice2: 'good',
choice3: 'experienced',
choice4: 'friendly',
answer: 1,
},
{
//SECTION C



question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nThe Chairman was disturbed because only fifteen members t̲u̲r̲n̲e̲d̲ ̲u̲p̲ for the meeting. This means that fifteen members ………….the meeting',
choice1: 'attended',
choice2: 'avoided',
choice3: 'postponed',
choice4: 'disturbed',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nTony h̲e̲l̲d̲ ̲h̲i̲s̲ ̲t̲o̲n̲g̲u̲e̲ for an hour before speaking. This means that Tony',
choice1: 'was angry',
choice2: 'was happy',
choice3: 'smiled for a while',
choice4: 'kept quiet',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nJones will l̲e̲t̲ ̲t̲h̲e̲ ̲c̲a̲t̲ ̲o̲u̲t̲ ̲o̲f̲ ̲t̲h̲e̲ ̲b̲a̲g̲ if he is invited. This means he will',
choice1: 'cause trouble',
choice2: 'confuse everybody',
choice3: 'reveal the secret',
choice4: 'release the cat',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nThe PTA Chairman c̲l̲e̲a̲r̲e̲d̲ ̲t̲h̲e̲ ̲a̲i̲r̲ about the increase in dues. This means that he',
choice1: 'explained why there was an increase',
choice2: 'announced the increase',
choice3: 'published the increase in the papers',
choice4: 'was sorry about the increase.',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nCharles Taylor‟s shot missed its target by a̲ ̲h̲a̲i̲r̲ ̲‟̲s̲ ̲b̲r̲e̲a̲d̲t̲h̲ ̲. This means that',
choice1: 'he shot wide',
choice2: 'the goal was disallowed',
choice3: 'he nearly scored a goal',
choice4: 'the keeper caught the ball',
answer: 3,
},
{
//SECTION D



question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nApplying cocoa butter to the skin makes it s͟m͟o͟o͟t͟h͟',
choice1: 'soft',
choice2: 'rough ',
choice3: 'warm ',
choice4: 'dark',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nDo not d͟e͟s͟p͟i͟s͟e͟ poor people because you are rich.',
choice1: 'cheat ',
choice2: 'avoid ',
choice3: 'admire ',
choice4: 'annoy',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nHearing is an i͟n͟v͟o͟l͟u͟n͟t͟a͟r͟y͟ action.',
choice1: 'difficulty',
choice2: 'slow',
choice3: 'quick',
choice4: 'intentional',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Iddrisu swore that he would rather be a s͟p͟e͟n͟d͟t͟h͟r͟i͟f͟t͟ than a ………',
choice1: 'miser',
choice2: 'pauper',
choice3: 'weakling',
choice4: 'thief',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nOur friends gave us a c͟o͟r͟d͟i͟a͟l͟ welcome.',
choice1: 'plain ',
choice2: 'hostile ',
choice3: 'calm ',
choice4: 'steady',
answer: 2,
},
{
//SECTION E

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe youth are advised to abstain ………..sex.',
choice1: 'in',
choice2: 'on',
choice3: 'from',
choice4: 'through',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nDaddy writes beautifully, ………..he?',
choice1: 'would',
choice2: 'wouldn‟t ',
choice3: 'doesn‟t ',
choice4: 'didn‟t',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nBulky goods are transported …………..sea.',
choice1: 'through',
choice2: 'to ',
choice3: 'on ',
choice4: 'by',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nLife skills ………my favourite subject when I was in school.',
choice1: 'has been',
choice2: 'were',
choice3: 'was',
choice4: 'have been',
answer: 3,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n„Will you mind if I borrowed your book?‟',
choice1: '„Yes, I do‟',
choice2: '„Yes, I mind‟ ',
choice3: '„No, I don‟t‟ ',
choice4: '„No, I won‟t‟',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n„Has Sister Edith ……………her glass of water this evening?‟',
choice1: 'drunk ',
choice2: 'drink ',
choice3: 'drinks ',
choice4: 'drank',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nIf my uncle had come I …………have had some money',
choice1: 'may ',
choice2: 'will ',
choice3: 'shall',
choice4: 'would',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nNewspapers are …………magazines.',
choice1: 'cheap as',
choice2: 'cheaper than ',
choice3: 'cheapest of ',
choice4: 'cheap than',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI have discovered a new ……….rhyme.',
choice1: 'children ',
choice2: 'childrens‟ ',
choice3: 'children‟s ',
choice4: 'childrens',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI told mum I ………..take my breakfast later.',
choice1: 'will',
choice2: 'can',
choice3: 'would',
choice4: 'shall',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe final match was played ………… three and five o‟clock in the afternoon.',
choice1: 'by',
choice2: 'toward',
choice3: 'from',
choice4: 'between',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe girl told her mother that she ………….from church.',
choice1: 'comes',
choice2: 'had come',
choice3: 'has come',
choice4: 'has been coming',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n………….. I joined the class late I could pass the examination.',
choice1: 'Since',
choice2: 'As',
choice3: 'Despite',
choice4: 'Although',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe book was ………difficult to read.',
choice1: 'much',
choice2: 'too ',
choice3: 'little ',
choice4: 'so',
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
