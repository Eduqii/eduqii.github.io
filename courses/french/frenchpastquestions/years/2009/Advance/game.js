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
question: ' Ce monsieur ____1_____ nous appelons Tonton ____________ avec nous quand nous passons chez ___________ après les cours.',
choice1: 'que',
choice2: 'quel',
choice3: 'quelle',
choice4: 'Qui',
answer: 1,
},
{
question: ' Ce monsieur _________ nous appelons Tonton ______2 ______ avec nous quand nous passons chez ___________ après les cours.',
choice1: 'causez',
choice2: 'causes',
choice3: 'Causer',
choice4: 'Cause',
answer: 4,
},
{
question: ' Ce monsieur _________ nous appelons Tonton ____________ avec nous quand nous passons chez ______3_____ après les cours. ',
choice1: 'elles',
choice2: 'lui',
choice3: 'il',
choice4: 'Ils',
answer: 2,
},
{
question: ' Son magasin est _____4____ à côte _________ la route qui mene à l’école.',
choice1: 'Situés',
choice2: 'Située',
choice3: 'Situé',
choice4: 'Situées',
answer: 3,
},
{
question: ' Son magasin est _________ à côte ____5_____ la route qui mene à l’école.',
choice1: 'de',
choice2: 'dans',
choice3: 'Sur',
choice4: 'Sous',
answer: 1,
},
{
question: ' Quand il est très occupé, nous le laissons ___6____ mais quand il n’y a plus ________ clients, nous regardons les livres, surtout les contes de notre pays.',
choice1: 'travaille',
choice2: 'travailles',
choice3: 'travailler',
choice4: 'travaillez',
answer: 3,
},
{
question: ' Quand il est très occupé, nous le laissons _______ mais quand il n’y a plus ____7____ clients, nous regardons les livres, surtout les contes de notre pays.',
choice1: 'de',
choice2: 'des',
choice3: 'les',
choice4: 'Du',
answer: 1,
},
{
question: ' Il y a aussi des cahiers et des gommes qui ressemblent à ____8_____ jouets.',
choice1: 'notre',
choice2: 'leur',
choice3: 'tes',
choice4: 'Nos',
answer: 4,
},
{
question: ' Le coin le plus interessant est toujours ______9_____ des journaux d’enfants.',
choice1: 'celle',
choice2: 'celui',
choice3: 'ceux',
choice4: 'Celles',
answer: 2,
},
{
question: ' Visiter la librairie est pour ___10___ une joie.',
choice1: 'lui',
choice2: 'toi',
choice3: 'eux',
choice4: 'nous',
answer: 4,
},
{
	question: 'Akosua lave …………………..foulard de sa mère.',

choice1: 'les',
choice2: 'la',
choice3: 'l’',
choice4: 'le',
answer: 4,
},
{
question: 'Tous les élèves ………………s’amuser au jardin le week-end prochain.',

choice1: 'iront',
choice2: 'allaient',
choice3: 'vas',
choice4: 'allez',
answer: 1,
},
{
question: '…………………élève parle trop',

choice1: 'Ce',
choice2: 'Cet',
choice3: 'Ces',
choice4: 'Cette',
answer: 2,
},
{ 

question: 'Les professeurs ……………….de partir',

choice1: 'vient',
choice2: 'viendront',
choice3: 'vient',
choice4: 'viennent',
answer: 4,
},
{
question: 'Cynthia, Rashidatu et Kofi sont très…………….',

choice1: 'intelligentes',
choice2: 'intelligents',
choice3: 'intelligent',
choice4: 'intelligente',
answer: 2,
},
{
question: 'Tu………………très vite.',

choice1: 'grandit',
choice2: 'grandi',
choice3: 'grandis',
choice4: 'grandir',
answer: 1,
},
{
question: 'Il y a trop de ………………sur ce terrain de football.',

choice1: 'cailloux',
choice2: 'caillou',
choice3: 'cartables',
choice4: 'cartable',
answer: 1,
},
{
question: 'Kofi ……………..mal au ventre parce qu’il a mangé une mangue verte.',

choice1: 'as',
choice2: 'a',
choice3: 'est',
choice4: 'avoir',
answer: 2,
},
{
question: 'Quand ……………….jeune, j’aimais jouer au football.',

choice1: 'je suis',
choice2: 'j’avais',
choice3: 'j’étais',
choice4: 'j’étais',
answer: 3,
},
{ 

question: 'Mon père ………………….les accusés, il est avocat.',

choice1: 'frappe',
choice2: 'défend',
choice3: 'soigne',
choice4: 'enseigne',
answer: 2,
},
{
	question: 'L’ensemble des os du ……………..s’appelle le squelette.',
choice1: 'Cœur',
choice2: 'Corps',
choice3: 'sang',
choice4: 'Muscle',
answer: 2, 
},
{
question: 'Le sang a une couleur ………………….',
choice1: 'chaleur',
choice2: 'soleil',
choice3: 'pluies',
choice4: 'Matin',
answer: 3,
},
{
question: 'Pendant la saison sèche, il n’y a pas de …………………………',
choice1: 'verte',
choice2: 'rouge',
choice3: 'jaune',
choice4: 'Blanche',
answer: 2,
},
{
question: 'Madame Owusu est ……………….. ; elle soigne les malades.',
choice1: 'cultivatrice',
choice2: 'professeur',
choice3: 'infirmière',
choice4: 'Vendeuse',
answer: 3,
},
{
question: 'Celui qui attrape les poissons avec un filet est un ……………',
choice1: 'Pêcheur',
choice2: 'fleuriste',
choice3: 'fermier',
choice4: 'Plombier',
answer: 1,
},
{
question: 'Moussah est un bon ……………… ; il tue toujours des gibiers',
choice1: 'chanteur',
choice2: 'chasseur',
choice3: 'chauffeur',
choice4: 'Cultivateur',
answer: 2,
},
{
question: 'Le couteau sert à …………………..les aliments.',
choice1: 'couper',
choice2: 'acheter',
choice3: 'cuire',
choice4: 'Vendre',
answer: 1,
},
{
question: 'Son père conduit un taxi ; il est …………………..',
choice1: 'chauffeur',
choice2: 'coiffeur',
choice3: 'mecanicien',
choice4: 'médecin',
answer: 1,
},
{
question: 'Les documents et les objets ………………sont gardés dans un musée.',
choice1: 'ancien',
choice2: 'ancienne',
choice3: 'anciens',
choice4: 'Ancienne',
answer: 3,
},
{
question: 'Il y a beaucoup …………………cahiers, livres et stylos dans son cartable.',
choice1: 'des',
choice2: 'de',
choice3: 'De l’',
choice4: 'De la',
answer: 2,
},
{
	question: 'Samedi Au Champ\n\n Titi est …………..frère de Baba.',

choice1: 'le grand',
choice2: 'le petit',
choice3: 'la grande',
choice4: 'la petite',
answer: 1,
},
{ 

question: 'Samedi Au Champ\n\n Les samedis, Titi et Baba vont …………………',

choice1: 'au college',
choice2: 'au village',
choice3: 'au champ',
choice4: 'au cinéma',
answer: 3,
},
{ 

question: 'Samedi Au Champ\n\n Le village natal, c’est le village où ……………',

choice1: 'on est né',
choice2: 'on est élève',
choice3: 'on va au champ',
choice4: 'on nage',
answer: 1,
},
{ 

question: 'Samedi Au Champ\n\n Monsieur Samba n’aime pas travailler avec sa femme parce qu’elle ………',

choice1: 'est paressuese',
choice2: 'travaille vite',
choice3: 'parle beaucoup',
choice4: 'est toujours fatiguee',
answer: 3,
},
{
question: 'Samedi Au Champ\n\n Selon Monsieur Samba, les femmes travaillent……………………',

choice1: 'joyeusement',
choice2: 'lentement',
choice3: 'rapidement',
choice4: 'silencieusement',
answer: 2,
},
{ 

question: 'Samedi Au Champ\n\n Monsieur Samba aime travailler avec qui ? \n – Il aime travailler avec ………………',

choice1: 'sa femme',
choice2: 'ses enfants',
choice3: 'ses frères',
choice4: 'ses parents',
answer: 2,
},
{ 

question: 'Samedi Au Champ\n\n Au champ, ils travaillent ………………',

choice1: 'de l’après –midi au soir',
choice2: 'de l’aube à midi',
choice3: 'du matin au soir',
choice4: 'du matin à l’après –midi',
answer: 3,
},
{ 

question: 'Samedi Au Champ\n\n Monsieur Samba pense que les hommes doivent être…………',

choice1: 'faible',
choice2: 'forts',
choice3: 'fatigués',
choice4: 'fiers',
answer: 2,
},
{ 

question: 'Samedi Au Champ\n\n Que font-ils pendant les repos ? \n – Ils ……………',

choice1: 'dorment paisiblement',
choice2: 'causent beaucoup',
choice3: 'prennent les repas',
choice4: 'rentrent chez eux',
answer: 3,
},
{
question: 'Samedi Au Champ\n\n Comment sont-ils le soir quand ils rentrent à la maison ? \n – Ils sont très ……………',

choice1: 'faible',
choice2: 'tristes',
choice3: 'heureux',
choice4: 'malheureux',
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
