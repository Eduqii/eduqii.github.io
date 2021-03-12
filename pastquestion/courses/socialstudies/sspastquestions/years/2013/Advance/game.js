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
question: 'The environment can best be described as',

choice1: 'man and his surroundings',
choice2: 'animals and non-living things',
choice3: 'vegetation and non-living things',
choice4: 'man and the vegetation around him',
answer: 1,
},
{ 
question: 'The social environment includes',

choice1: 'settlements, churches and rivers',
choice2: 'settlements, festivals and political parties',
choice3: 'festivals, political parties and religious groups',
choice4: 'festivals, churches and tourist sites',
answer: 3,
},
{ 
question: 'Which of the following statements is true? The',

choice1: 'social and physical environments are inter-dependent',
choice2: 'physical environment is independent of the social environment.',
choice3: 'physical environment is never affected by the social environment',
choice4: 'social environment is more important than the physical environment',
answer: 1,
},
{ 
question: 'A major environmental problem facing municipal and metropolitan assemblies in Ghana is',

choice1: 'waste management',
choice2: 'air pollution',
choice3: ' deforestation',
choice4: 'gully erosion',
answer: 1,
},
{ 

 

question: 'Adolescent reproductive health aims at providing education on',

choice1: 'good nutrition',
choice2: 'sexuality',
choice3: 'good marriage',
choice4: 'security',
answer: 2,
},
{ 
question: 'The period of adolescence is',

choice1: '10 – 19 years',
choice2: '10 – 14 years',
choice3: '15 – 19 years',
choice4: '12 – 19 years',
answer: 1,
},
{ 

 

question: 'One way of managing conflict in the Ghanaian society is',

choice1: 'arbitration',
choice2: 'confrontation',
choice3: ' meditation',
choice4: 'consultation',
answer: 1,
},
{ 
question: 'Adolescent chastity is important because it prevents',

choice1: 'contraction of HIV/AIDS by the youth',
choice2: 'contraction of malaria by the youth',
choice3: ' the effect of peer pressure on the youth',
choice4: 'the occurrence of broken homes',
answer: 1,
},
{ 
question: 'Adolescents who engage in early sex, risk',

choice1: 'dropping out of school',
choice2: 'increasing the size of their family',
choice3: ' looking older than their age',
choice4: 'losing their parents',
answer: 1,
},
{ 
question: 'The part of one’s income that is not spent is one’s',

choice1: 'insurance',
choice2: 'account',
choice3: ' deposit',
choice4: 'savings',
answer: 4,
},
{ 

 

question: 'During their migration, the Akans first settled at',

choice1: 'Bono Manso',
choice2: 'Dormaa Ahenkro',
choie3: ' Asante Manso',
choice4: 'Denkyira',
answer: 1,
},
{ 

 

question: 'Ethnic conflicts must be avoided because they slow down',

choice1: 'economic development',
choice2: 'rural-urban migration',
choice3: ' tribal disintegration',
choice4: 'urban-rural migration',
answer: 1,
},
{ 

 

question: 'Unity among Ghanaians can best be promoted through',

choice1: 'inter-ethnic marriages',
choice2: 'formal education',
choice3: ' opinion leaders',
choice4: 'good environmental practices',
answer: 1,
},
{ 

 

question: 'Which of the following represents earth’s surface or part of it drawn to a scale?',

choice1: 'Layout',
choice2: 'Sketch',
choice: ' Map',
choice4: 'Landmark',
answer: 3,
},
{ 

 

question: 'Which of the towns in the sketch below lies directly south of Miva?',

choice1: 'Kofa',
choice2: 'Aposa',
choice3: ' Soka',
choice4: 'Kutu',
answer: 4,
},
{ 

 

question: 'An important feature which can be used to show direction in a locality is called',

choice1: 'landmark',
choice2: 'bearing',
choice3: ' compass',
choice4: 'scale',
answer: 1,
},
{ 

 

question: 'The ratio between distance measured on a map and the actual distance on the ground is a',

choice1: 'scale',
choice2: 'layout',
choice3: ' statement',
choice4: 'sketch',
answer: 1,
},
{ 


question: 'The diagram below illustrates a' + '\n (refer to image I.)',
choice1: 'linear scale',
choice2: 'statement scale',
choice3: ' representative fraction',
choice4: 'railway line',
answer: 1,
},
{ 


question: 'If the scale of a map is 1:10,000 and the distance on the map is 20 cm, then the actual distance on the ground is',

choice1: '20 km',
choice2: '0.2 km',
choice3: ' 2 km',
choice4: '20,000 km',
answer: 3,
},
{ 

 

question: 'The principle of checks and balances prevents',

choice1: 'constitutionalism',
choice2: 'democracy',
choice3: ' dictatorship',
choice4: 'patriotism',
answer: 3,
},
{ 

 

question: 'One way of sustaining unity among the ethnic groups in Ghana is by',

choice1: 'selecting leaders through elections',
choice2: 'allowing people to enjoy free movement',
choice3: ' appreciating the cultural practices of other people',
choice4: 'keeping troublemakers in prison',
answer: 3,
},
{ 
question: 'One reason for the migration of many ethnic groups into Ghana is',

choice1: 'education',
choice2: 'security',
choice3: ' marriage',
choice4: 'religion',
answer: 2,
},
{ 

 

question: 'Which of the following is a symbol of national unity in Ghana? The' + '\n (refer to image II)',

choice1: 'National anthem',
choice2: 'Akosombo Dam',
choice3: ' Gye Nyame',
choice4: 'Judiciary',
answer: 1,
},
{ 
question: 'The integrity of the nation can be defended by',

choice1: 'encouraging immigration',
choice2: 'reporting saboteurs',
choice3: ' educating the youth',
choice4: 'cleaning the environment',
answer: 2,
},
{ 

 

question: 'Ghana lies between latitudes',

choice1: '5°S and 11°N',
choice2: '5°N and 11°N',
choice3: ' 5°N and 5°S',
choice4: '5°N and 11°S',
answer: 2,
},
{ 
question: 'To promote national unity, Ghanaians are expected to be',

choice1: 'patriotic',
choice2: 'well paid',
choice3: ' hardworking',
choice4: 'highly educated',
answer: 1,
},
{ 
question: 'The people of British Togoland joined Ghana through',

choice1: 'conquest',
choice2: 'persuasion',
choice3: 'voting',
choice4: 'declaration',
answer: 3,
},
{ 
question: 'The Head of State of Ghana at independence in 1957 was',

choice1: 'Kwame Nkrumah',
choice2: 'The Queen of Britain',
choice3: ' Gordon Guggisberg',
choice4: 'Edward Akuffo-Addo',
answer: 2,
},
{ 
question: 'The process by which one country takes control of the administration of another is known as',

choice1: 'acculturation',
choice2: 'colonization',
choice3: ' socialization',
choice4: 'assimilation',
answer: 2,
},
{ 
question: 'One way by which Ghana cooperates with other countries is by',

choice1: 'sending ambassadors and commissioners to them',
choice2: 'lending large sums of money to them',
choice3: ' allowing them to establish military bases in Ghana',
choice4: 'removing all taxes on goods imported from them.',
answer: 1,
},
{ 
question: 'The first political event leading to the formal establishment of British colonial rule in the Gold Coast was the',

choice1: 'signing of the bond of 1844',
choice2: 'declaration of Sagrenti war',
choice3: ' introduction of the Poll Tax Ordinance',
choice4: 'disturbances of 1948',
answer: 1,
},
{ 
question: 'To ensure their continuous survival, private enterprises must do all the following except',

choice1: 'producing quality goods',
choice2: 'keeping proper records',
choice3: ' paying taxes regularly',
choice4: 'using only foreign labour',
answer: 4,
},
{ 
question: 'The rotation of the earth causes',

choice1: 'the seasons',
choice2: 'day and night',
choice3: ' eclipse of the moon',
choice4: 'changes in vegetation',
answer: 2,
},
{ 
question: 'According to the 1992 Constitution of Ghana, an individual can claim Ghanaian citizenship if',

choice1: 'his / her grandparents are Ghanaians',
choice2: 'he / she attends school in Ghana',
choice3: ' he / she works in Ghana',
choice4: 'his / her parents reside in Ghana',
answer: 1,
},
{ 
question: 'When two air masses of different temperatures meet, it results in',

choice1: 'the formation of relief rainfall',
choice2: 'the formation of cyclonic rainfall',
choice3: ' thunder and lightning',
choice4: 'rain shadow zone',
answer: 2,
},
{ 
question: 'A child of not more than seven years of age found in Ghana, and whose parents cannot be traced is a Ghanaian by',

choice1: 'birth',
choice2: 'adoption',
choice3: ' registration',
choice4: 'conferment',
answer: 2,
},
{ 

 

question: 'One basic right of every Ghanaian is the right to',

choice1: 'vote in general elections',
choice2: 'personal liberty',
choice3: ' fair wages',
choice4: 'stand for elections',
answer: 2,
},
{ 

 

question: 'Which of the following can constitute human rights abuse in Ghana?',

choice1: 'Child labour',
choice2: 'Employing an 18 year old girl',
choice3: ' Dropping out of school',
choice4: 'Drug abuse',
answer: 1,
},
{ 
question: 'The right to life is an example of',

choice1: 'economic right',
choice2: 'natural right',
choice3: ' legal right',
choice4: 'political right',
answer: 2,
},
{ 

 

question: 'When one behaves in an honest and just manner, one performs his /her',

choice1: 'civic right',
choice2: 'civic responsibility',
choice3: ' natural responsibility',
choice4: 'social right',
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
