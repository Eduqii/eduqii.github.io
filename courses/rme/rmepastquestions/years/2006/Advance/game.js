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
question: 'According to the Holy Bible, what was created on the second day?',
choice1: 'Heaven and the earth',
choice2: 'Smaller animals',
choice3: 'Plants and the trees',
choice4: 'Greater light',
answer: 1,
},
{
question: 'The omniscience of God portrays Him as',
choice1: 'allforgiving ',
choice2: 'ever present ',
choice3: 'verygracious ',
choice4: 'allknowing',
answer: 4,
},
{
question: 'The ninety-nine names of God can be found only in',
choice1: 'Christianity and Islam',
choice2: 'Christianity',
choice3: 'Islam',
choice4: 'African Traditional Religion',
answer: 4,
},
{
question: 'Trial by ordeal is a traditional practice whereby a person is',
choice1: 'summoned to the chief‟s palace',
choice2: 'proved innocent through painful test',
choice3: 'brought before a traditional priest',
choice4: 'accused of breaking state taboos',
answer: 2,
},
{
question: 'Which of the following is a harvest festival?',
choice1: 'Adae ',
choice2: 'Hogbetsotso ',
choice3: 'Homowo ',
choice4: 'Aboakyer',
answer: 3,
},
{
question: 'Israel came out of slavery in Egypt under the leadership of',
choice1: 'Joshua ',
choice2: 'Joseph ',
choice3: 'Abraham ',
choice4: 'Moses',
answer: 4,
},
{
question: 'Togbe Tsali is remembered for',
choice1: 'his cruelty to the Anlos',
choice2: 'freeing his people from oppression',
choice3: 'selling his people into slavery',
choice4: 'allowing missionaries to preach to his people',
answer: 2,
},
{
question: 'Zakat is the practice by which Muslims',
choice1: 'pray five times a day',
choice2: 'show concern for the poor',
choice3: 'offer sacrifices to Allah',
choice4: 'travel to Mecca every year',
answer: 2,
},
{
question: 'The second Caliph ofIslam was',
choice1: 'Ali ',
choice2: 'Abubakar ',
choice3: 'Umar ',
choice4: 'Uthman',
answer: 3,
},
{
question: 'God gave Noah and his people the rainbow as a sign of the covenant that',
choice1: 'the earth would never again be destroyed byflood',
choice2: 'idol worshippers would be destroyed',
choice3: 'heavenlybodies would always give light',
choice4: 'humankind would not speak the same language',
answer: 1,
},
{
question: 'The main purpose of the Odwira festival is to',
choice1: 'remember the dead',
choice2: 'purify the state',
choice3: 'strengthen the unity of the people',
choice4: 'pay homage to the chief',
answer: 2,
},
{
question: 'The teaching of Muhammad are found in the',
choice1: 'Kalima ',
choice2: 'Qur‟an ',
choice3: 'Hadith ',
choice4: 'Sura',
answer: 3,
},
{
question: 'A dead person is not regarded as an ancestor if he/she',
choice1: 'lived for more than forty years',
choice2: 'died through an accident',
choice3: 'married and had many children',
choice4: 'died while defending his community',
answer: 2,
},
{
question: 'The burning bush that Moses saw attracted him because',
choice1: 'God spoke to him from it',
choice2: 'the place was a holy ground',
choice3: 'the fire was not consuming the bush',
choice4: 'God wanted to save Israel through him',
answer: 3,
},
{
question: 'After the Isha prayer in the month of Ramadan, Muslims perform',
choice1: 'Tahajjud ',
choice2: 'Fajr ',
choice3: 'Tarawih ',
choice4: 'Istisquah',
answer: 1,
},
{
question: 'One of the moral values revealed in the parable of the Good Samaritan is',
choice1: 'patience ',
choice2: 'justice ',
choice3: 'faithfulness ',
choice4: 'mercy',
answer: 4,
},
{
question: 'Marriage has a good chance of succeeding if the',
choice1: 'couple are from the same town',
choice2: 'man has a lot of money',
choice3: 'couple understand each other',
choice4: 'woman is beautiful',
answer: 3,
},
{
question: 'According to the Qur‟an, the Torah was revealed through',
choice1: 'Ibrahim ',
choice2: 'Muhammad ',
choice3: 'Yusuf ',
choice4: 'Ishmael',
answer: 2,
},
{
question: 'According to Jesus, the poor in spirit are blessed because they shall',
choice1: 'inherit the kingdom of heaven',
choice2: 'be comforted',
choice3: 'inherit the earth',
choice4: 'be called the sons ofGod',
answer: 1,
},
{
question: 'A common feature of traditional prayers is that',
choice1: 'gods are always praised',
choice2: 'people pray for others',
choice3: 'enemies are often cursed',
choice4: 'people confess their sins to gods',
answer: 1,
},
{
question: 'To lead a chaste life, one must',
choice1: 'be obedient',
choice2: 'speak the truth',
choice3: 'avoid drug abuse',
choice4: 'avoid casual sex',
answer: 4,
},
{
question: 'Talking whilst eating is not advisable because one may',
choice1: 'develop stomach pain',
choice2: 'get choked by the food',
choice3: 'expose the food in the mouth',
choice4: 'make unusual disturbing noise',
answer: 2,
},
{
question: 'Which of the following behaviours pollutes our environment?',
choice1: 'Cutting down trees',
choice2: 'Killing birds and animals',
choice3: 'Throwing rubbish around',
choice4: 'Clearing the land for building',
answer: 3,
},
{
question: 'Authority is instituted in the society to ensure',
choice1: 'respect for adults ',
choice2: 'peace and order ',
choice3: 'the right to vote',
choice4: 'freedom of speech',
answer: 2,
},
{
question: 'The most important requirement for a happy and prosperous life is',
choice1: 'loyalty ',
choice2: 'respect ',
choice3: 'courage ',
choice4: 'hardwork',
answer: 4,
},
{
question: 'A member of the Catholic Youth Organisation (CYO) is called a',
choice1: 'deacon ',
choice2: 'voyager ',
choice3: 'soldier ',
choice4: 'crusader',
answer: 4,
},
{
question: 'Which of the following behaviours best shows comportment?',
choice1: 'Controlling one‟s eating habit',
choice2: 'Controlling one‟s sexual behaviour',
choice3: 'Controlling one‟s temper when provoked',
choice4: 'Controlling the way one laughs at school',
answer: 3,
},
{
question: 'The expression work and happiness implies one',
choice1: 'likes working always ',
choice2: 'dances whilst working ',
choice3: 'works while playing',
choice4: 'enjoys the fruit of his labour',
answer: 4,
},
{
question: 'Giving money to influence a public officer for something to be done for you makes you',
choice1: 'a thief ',
choice2: 'corrupt ',
choice3: 'a cheat ',
choice4: 'greedy',
answer: 2,
},
{
question: 'Broken homes may lead to all the following except',
choice1: 'miscarriage ',
choice2: 'substance abuse ',
choice3: 'teenage pregnancy ',
choice4: 'truancy',
answer: 1,
},
{
question: 'The peaceful way of asking for one‟s rights include',
choice1: 'lobbying ',
choice2: 'kidnapping ',
choice3: 'playing games ',
choice4: 'rioting',
answer: 1,
},
{
question: 'One of the advantages of the extended family system is that ',
choice1: 'parents can give sufficient attention to their children ',
choice2: 'an uncle inherits afather‟s property',
choice3: 'the extended family sustains society',
choice4: 'parents are capable of providing the needs of the family',
answer: 3,
},
{
question: 'Repentance begins with',
choice1: 'acceptance of one‟s guilt ',
choice2: 'a regret for doing wrong ',
choice3: 'a request for forgiveness ',
choice4: 'a vow to do good always',
answer: 1,
},
{
question: 'As a child, your duties include all these except',
choice1: 'fetching water',
choice2: 'weeding the compound',
choice3: 'preparing meals',
choice4: 'paying fees',
answer: 4,
},
{
question: 'Dirges are sung during',
choice1: 'harvesting ',
choice2: 'outdooring ',
choice3: 'funerals ',
choice4: 'festivals',
answer: 3,
},
{
question: 'Which of the following is not an example of a stimulant?',
choice1: 'Alcohol ',
choice2: 'cocaine ',
choice3: 'Chloroquine ',
choice4: 'marijuana',
answer: 3,
},
{
question: 'Humankind can learn a lot about the use of time from the',
choice1: 'hare ',
choice2: 'ant ',
choice3: 'tortoise ',
choice4: 'bee',
answer: 2,
},
{
question: 'When a child develops the sense of responsibility he / she',
choice1: 'wins many prizes at school',
choice2: 'passes all his examinations',
choice3: 'becomes tolerant and sincere',
choice4: 'enjoys peace and successin life',
answer: 4,
},
{
question: 'Reformative punishment is aimed at',
choice1: 'discouraging others from committing the same offence',
choice2: 'punishing offenders out of revenge. ',
choice3: 'protecting the good people in society',
choice4: 'helping offenders to become better persons',
answer: 4,
},
{
question: 'Boys and girls are to dress modestly and decently to show that they are',
choice1: 'truthful ',
choice2: 'honest ',
choice3: 'courteous ',
choice4: 'brilliant',
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
