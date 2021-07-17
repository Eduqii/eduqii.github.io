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
Mr. Kobi, the next speaker, said that although he had left the school many years ago, he still remembered with thanks all that the headmaster had done to make sure that his pupils were well prepared for life. He was sorry that the headmaster had decided to retire at so early an age. This would deprive the pupils of his assistance long before it was necessary to do so. However, he wished the headmaster the best of luck in his retirement and offered him a silver tray as a sign of the high esteem in which his old pupils held him.

After the tray had been handed over, the retiring headmaster came forward to make his speech of thanks. He began by giving a brief summary of the time he had spent as headmaster of the school. He added that it had always been his aim to do his best for the pupils under his charge. He expressed his gratitude to the masters who had been on his staff for their hard work and sacrifice. Finally, he said how glad he was that he was being succeeded as headmaster by Mr. Smith, who had been teaching in the school for many years. He believed that Mr. Smith was generally admired and respected by all who knew him. He asked all his old pupils to take an interest in the school after he had gone, and promised that he would certainly do so himself.


Que 6 - 10
PASSAGE II
It is easy to see why television is so attractive to both children and adults. It is available in the home and we can watch it in comfort whenever we please. Besides, it provides entertainment after a day‟s work. Television also enables us to see places and people and their ways of life. Even people with little or no formal education can watch and enjoy the programmes.

Unfortunately, television takes up much of our time. To watch it we must sit in front of it, watch as long as a programme lasts, and do little else. This exclusive aspect of television, the fact that it prevents us from doing other things, poses more serious problems than is commonly realized. While television may provide an acceptable form of relaxation for adults after a day‟s work, it robs children of the time they must use to learn other things. In addition, not everything that television offers is good. Even when children‟s programmes are provided, we are not sure that these are the only ones they will watch. In fact, these days children watch more programmes meant for adults than for them.

One likely outcome of this is that children may learn about the adult world too soon, and at a time when they can easily be influenced.

*/		
question: 'Read Passage I carefully and answer this question\nMr. Kobi was sorry about the headmaster‟s early retirement because',
choice1: 'it was necessary to do so',
choice2: 'he would deny the pupils of his help',
choice3: 'he had done a lot',
choice4: 'the pupils were well prepared for life',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\nWhich of the following is not true of the headmaster?',
choice1: 'He was hated by the people',
choice2: 'He had worked hard',
choice3: 'He was happy',
choice4: 'He had worked for a long time',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nBrief in the passage means',
choice1: 'necessary',
choice2: 'good ',
choice3: 'true ',
choice4: 'short',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nAccording to the passage, Mr. Smith was',
choice1: 'liked by many people',
choice2: 'liked by the headmaster only',
choice3: 'a disciplinarian',
choice4: 'a gentleman',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nThe retiring headmaster said he would continue …………….. the school.',
choice1: 'praising',
choice2: 'to teach in',
choice3: 'visiting',
choice4: 'to do his best for',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nPeople like to watch television because it',
choice1: 'is very beautiful',
choice2: 'solves serious problems',
choice3: 'is available',
choice4: 'provides relaxation',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nThe writer feels that children should',
choice1: 'watch television with their parents',
choice2: 'do nothing while watching television',
choice3: 'not watch all programmes',
choice4: 'learn about adult life',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nPoses in the passage means',
choice1: 'solves',
choice2: 'increases',
choice3: 'presents',
choice4: 'determines',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nAccording to the passage, which of the following is not true about television?',
choice1: 'It is a source of entertainment.',
choice2: 'It helps us to see unknown places and people ',
choice3: 'People with little education can also watch it. ',
choice4: 'Everybody has one',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nFrom the passage, we realise that the writer',
choice1: 'dislikes adult programmes',
choice2: 'is not happy about the present situation',
choice3: 'produces television programmes',
choice4: 'wants television to be banned',
answer: 2,
},
{
//SECTION B


question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n The Headmaster asked the school prefect to s͟u͟m͟m͟o͟n͟ a meeting of the Student‟s Council.',
choice1: 'chair',
choice2: 'call',
choice3: 'cancel',
choice4: 'postpone',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n The attitude of the security officer was very h͟o͟s͟t͟i͟l͟e͟.',
choice1: 'strange',
choice2: 'disturbing ',
choice3: 'unfriendly ',
choice4: 'interesting',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n After the hard day‟s work he returned home completely e͟x͟h͟a͟u͟s͟t͟e͟d͟',
choice1: 'disturbed',
choice2: 'worn out',
choice3: 'unhappy',
choice4: 'broken down',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n The auditor‟s job was to g̲o̲ ̲o̲v̲e̲r̲ the accounts carefully.',
choice1: 'present ',
choice2: 'calculate ',
choice3: 'settle',
choice4: 'inspect',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n The paint used for the outside of the building was d̲u̲r̲a̲b̲l̲e̲.̲',
choice1: 'lasting',
choice2: 'expensive ',
choice3: 'attractive ',
choice4: 'decorative',
answer: 1,
},
{
//SECTION C

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nMusa told his friend to m̲i̲n̲d̲ ̲h̲i̲s̲ ̲o̲w̲n̲ ̲b̲u̲s̲i̲n̲e̲s̲s̲. This means that Musa‟s friend should',
choice1: 'worry about his own work',
choice2: 'do his own buying and selling',
choice3: 'not interfere in other people‟s affairs',
choice4: 'not help other people',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nMother buys the best clothes for Patrick because he is the a̲p̲p̲l̲e̲ ̲o̲f̲ ̲h̲e̲r̲ ̲e̲y̲e̲.̲ This means that Patrick is',
choice1: 'the one she loves most',
choice2: 'the most hardworking son ',
choice3: 'her most respectable son ',
choice4: 'her last child',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nIt is difficult for most people to m̲a̲k̲e̲ ̲e̲n̲d̲s̲ ̲m̲e̲e̲t̲ these days. This means most people',
choice1: 'live very comfortably.',
choice2: 'are unable to eat delicious meals.',
choice3: 'are unable to live within their income',
choice4: 'buy expensive clothes',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nEsi was so good a leader that we were all encouraged t̲o̲ ̲t̲a̲k̲e̲ ̲a̲ ̲l̲e̲a̲f̲ ̲o̲u̲t̲ ̲o̲f̲ ̲h̲e̲r̲ ̲b̲o̲o̲k̲ \nThis means we were all encouraged to ...........',
choice1: 'try and beat her record',
choice2: 'take her advice',
choice3: 'follow her example',
choice4: 'treat her with respect',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nBefore I left for the market, I asked my neighbour t̲o̲ ̲k̲e̲e̲p̲ ̲a̲n̲ ̲e̲y̲e̲ ̲o̲n̲ my children. This means my neighbour should',
choice1: 'play with the children',
choice2: 'look after the children',
choice3: 'follow the children around',
choice4: 'look at the children',
answer: 2,
},
{
//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n My friend did everything to h͟i͟n͟d͟e͟r͟ my work.',
choice1: 'reduce',
choice2: 'do',
choice3: 'understand',
choice4: 'assist',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n It is wise to p͟r͟e͟s͟e͟r͟v͟e͟ works of art for the future.',
choice1: 'reduce ',
choice2: 'destroy ',
choice3: 'condemn ',
choice4: 'abolish',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The director e͟n͟g͟a͟g͟e͟d͟ Mary as a saleswoman.',
choice1: 'disqualified',
choice2: 'exempted ',
choice3: 'dismissed ',
choice4: 'excused',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n This soil is very f͟e͟r͟t͟i͟l͟e͟ for the growing of vegetables.',
choice1: 'poor',
choice2: 'shallow ',
choice3: 'porous ',
choice4: 'hard',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n F͟o͟r͟m͟e͟r͟l͟y͟, we walked a very long distance to attend school.',
choice1: 'sometimes',
choice2: 'now',
choice3: 'recently',
choice4: 'usually',
answer: 3,
},
{
//SECTION E

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nWhen the lights went off, I ……………..my supper.',
choice1: 'have eaten',
choice2: 'am eating',
choice3: 'have been eating',
choice4: 'was eating',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe factory had to ……………………many workers because of the fall in production.',
choice1: 'lay down',
choice2: 'put off',
choice3: 'put away',
choice4: 'lay off',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nWe ………………to play a return match last Friday.',
choice1: 'have ',
choice2: 'were ',
choice3: 'ought ',
choice4: 'are',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nIt was not obvious ……………….he was pointing to.',
choice1: 'the one to which',
choice2: 'which one ',
choice3: 'one which ',
choice4: 'as to that',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI have forgotten all ………………..you told me.',
choice1: 'that',
choice2: 'which ',
choice3: 'what ',
choice4: 'those',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nSelfish people always consider ………………first.',
choice1: 'oneself',
choice2: 'yourselves ',
choice3: 'themselves ',
choice4: 'himself',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n………………….the watch is old, it is still working.',
choice1: 'Although',
choice2: 'Despite',
choice3: 'Since',
choice4: 'Because',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nTeye asked me how ………………….French I knew.',
choice1: 'many ',
choice2: 'few ',
choice3: 'little ',
choice4: 'much',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nKwaku‟s evidence …………………. to be checked.',
choice1: 'needing',
choice2: 'needs',
choice3: 'is needing',
choice4: 'will have need',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe headmistress said they could not postpone ………….. the school any longer.',
choice1: 're-opening',
choice2: 're-open',
choice3: 'to have re-opened',
choice4: 'having re-opened',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n You know very well that it was no fault of …………….',
choice1: 'my',
choice2: 'I',
choice3: 'me',
choice4: 'mine',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n You are not hurt, ……………..?',
choice1: 'were you ',
choice2: 'did you ',
choice3: 'are you ',
choice4: 'do you',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI don‟t mind ……………..home early.',
choice1: 'you go ',
choice2: 'your go ',
choice3: 'you to go',
choice4: 'your going',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n All ……………..is good health.',
choice1: 'what I need',
choice2: 'to need',
choice3: 'that I need',
choice4: 'to be needed',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nIf anyone greets you, it is polite to return ………….greeting.',
choice1: 'your',
choice2: 'its',
choice3: 'their',
choice4: 'anyone',
answer:  3,
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
