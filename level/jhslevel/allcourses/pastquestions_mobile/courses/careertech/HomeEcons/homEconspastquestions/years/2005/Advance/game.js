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
question: 'The plan of a cylinder is a',

choice1: 'circle',
choice2: 'rectangle',
choice3: 'square',
choice4: 'triangle',
answer: 1,
},
 {

question: 'The first stage of the design process is',

choice1: 'brief',
choice2: 'evaluation',
choice3: 'situation',
choice4: 'specification',
answer: 3,
},
 {

2019-Pretech-bece
Figure I show the pictorial view of a block. Use it to answer questions 3 and 4.

3. Which of the following represents the front view in the direction of arrow Z?
',
answer: 2019-Pretech-ques-3-option3,
'},
 {

4. Which of the following represents the right end elevation?
',
answer: 2019-Pretech-ques-4-option1,
'},
 {

question: 'In the design process, the selected idea is developed in order to',

choice1: 'determine the cost',
choice2: 'evaluate final product',
choice3: 'improve upon it',
choice4: 'reduce its beauty',
answer: 2,
}
]},
 {

question: 'The most suitable pencil for drawing construction lines is',

choice1: 'B',
choice2: 'HB',
choice3: '2B',
choice4: '2H',
answer: 4,
},
{
 

question: 'A common method of cooking used for most Ghanaian staple foods is',

choice1: 'steaming',
choice2: 'boiling',
choice3: 'frying',
choice4: 'stewing',
answer: 2,
}
]},
 {

question: 'A seam that is often used for outer garment is',

choice1: 'plain seam',
choice2: 'French seam',
choice3: 'Machine felled seam',
choice4: 'Overlaid seam',
answer: 1,
},
 {

question: 'When setting a table, the first course cutlery should be placed',

choice1: 'at the top edge of the dinner plate',
choice2: 'on the dinner plate',
choice3: 'near the dinner plate',
choice4: 'further away from the dinner plate',
answer: 1,
},
 {

question: 'Stranded cotton thread is used for',

choice1: 'decorative stitches',
choice2: 'neatening seams',
choice3: 'joining seams',
choice4: 'temporary stitches',
answer: 1,
},
 {

question: 'Red, Orange and violet are',

choice1: 'warm colours',
choice2: 'cool colours',
choice3: 'opposite colours',
choice4: 'neutral colours',
answer: 1,
},
 {

question: 'The inscription BB on a pencil indicates that, it',

choice1: 'is hard',
choice2: 'is soft',
choice3: 'breaks easily',
choice4: 'sharpens well',
answer: 2,
},
{
 

question: 'A circle is',

choice1: 'a form',
choice2: 'a principle of design',
choice3: 'a sphere',
choice4: 'an element of design',
answer: 4,
},
{
 

question: 'The colour violet symbolizes',

choice1: 'wealth',
choice2: 'peace',
choice3: 'aggression',
choice4: 'royalty',
answer: 4,
},
{
 

question: 'The primary colours are',

choice1: 'red, violet, yellow',
choice2: 'green, yellow, red',
choice3: 'red, yellow, blue',
choice4: 'violet, yellow, green',
answer: 3,
},
{
 

question: 'The most important nutrients found in vegetables are vitamins and',

choice1: 'carbohydrates',
choice2: 'proteins',
choice3: 'minerals',
choice4: 'fats',
answer: 3,
},
{
 

question: 'In frying meat, heat is transferred by means of',

choice1: 'conduction',
choice2: 'convection',
choice3: 'conduction and radiation',
choice4: 'radiation and convention',
answer: 2,
},
{
 

question: 'Elements of design in nature include',

choice1: 'lines, shape and dot',
choice2: 'shape, dot and balance',
choice3: 'line, rhythm and texture',
choice4: 'texture, balance and rhythm.',
answer: 1,
},
 {

question: 'An adolescent whose diet is deficient in iron is likely suffer from',

choice1: 'rickets',
choice2: 'goiter',
choice3: 'scurvy',
choice4: 'anaemia',
answer: 4,
},
{
 

question: 'Wounds and fractures can heal quickly if one takes in adequate amount of',

choice1: 'starchy roots and plantain',
choice2: 'fruits and vegetables',
choice3: 'animal products',
choice4: 'legumes and pulses',
answer: 2,
},
{
 

question: 'A stitched that is worked from right to left on the right side of an article is',

choice1: 'overcasting',
choice2: 'oversewing',
choice3: 'hemming stitch',
choice4: 'slip stitch',
answer: 2,
}
]},
 {

question: 'Which of the following elements of design is likely to be seen on whole baked rock buns?',

choice1: 'Lines, colour and dot',
choice2: 'Shape, texture and dot',
choice3: 'Texture, shape and lines',
choice4: 'Colour, lines and dot',
answer: 2,
c 'Shape, texture and dot
{
 

question: 'Incorrect threading of a sewing machine will cause',

choice1: 'puckering of seams',
choice2: 'missing stitches',
choice3: 'thread breaking',
choice4: 'loose stitches forming',
answer: 4,
},
 {

question: 'Suitable inexpensive fabric for making bag is',

choice1: 'poplin',
choice2: 'denim',
choice3: 'damask',
choice4: 'calico',
answer: 4,
},
{
 

question: 'The cause of spoilage in dried beans is',

choice1: 'weevil',
choice2: 'bugs',
choice3: 'yeast activities',
choice4: 'enzymes action',
answer: 1,
},
 {

question: 'The rubbing -in method is used in the preparation of',

choice1: 'queen cakes',
choice2: 'fish turnovers',
choice3: 'banana fritters',
choice4: 'sweet pancakes',
answer: 1,
},
 {

question: 'A suitable leavening agent that can be used in the preparation of banana cake is',

choice1: 'palm wine',
choice2: 'cream of tartar',
choice3: 'baking powder',
choice4: 'bicarbonate of soda',
answer: 4,
},
 {

question: 'Heat is transferred by conduction and convection when food is cooked by',

choice1: 'steaming',
choice2: 'frying',
choice3: 'grilling',
choice4: 'baking',
answer: 1,
},
 {

question: 'In Ghana, a popular method for preserving most food commodities at home is',

choice1: 'drying',
choice2: 'salting',
choice3: 'smoking',
choice4: 'bottling',
answer: 1,
},
 {

question: 'The main use of fat in cake making to',

choice1: 'enhance appearance',
choice2: 'increase volume',
choice3: 'improve keeping quality',
choice4: 'improve flavour',
answer: 2,
}

]