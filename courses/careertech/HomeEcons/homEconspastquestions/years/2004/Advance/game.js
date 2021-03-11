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
question: 'Short dashes are used for',

choice1: 'cutting planes',
choice2: 'hidden outlines',
choice3: 'dimensioning',
choice4: 'visible outlines',
answer: 
SHOW ANSWER
1.', choice2: 'hidden outlines
},
{
question: 'Which of the following wires carries electric current to an electric iron?',

choice1: 'Earth',
choice2: 'Live',
choice3: 'Negative',
choice4: 'Neutral',
answer: 
SHOW ANSWER
2.', choice2: 'Live
},
{
question: 'Which of the following is not a stage in the design process?',

choice1: 'Making',
choice2: 'Situation',
choice3: 'Specification',
choice4: 'Questionnaire',
answer: 
SHOW ANSWER
3.', choice4: 'Questionnaire
},
{
question: 'Missing nails in household furniture occur in',

choice1: 'concrete benches',
choice2: 'metal tables',
choice3: 'plastic cabinets',
choice4: 'wooden chairs',
answer: 
SHOW ANSWER
 
},
{
4.', choice4: 'wooden chairs

 

 

 

2018-bece-pastquestions-home-econs
Figure 1 shows a sketch of wooden block. Use it to answer questions 5 and 6.

5. The view indicated by arrow X is',
choice4:
'answer: 2018-bece-pastquestions-home-econs-9
SHOW ANSWER
5.', choice3:
'},
{
6. The view indicated by the arrow Y is',
choice4:
'answer: 2018-bece-pastquestions-home-econs-99
SHOW ANSWER
 question: '',. choice1:
'},
{
 

question: 'The main function of carbohydrate in the body is for',

choice1: 'growth',
choice2: 'energy',
choice3: 'repair',
choice4: 'maintenance',
answer: 
SHOW ANSWER
7.', choice2: 'energy
},
{
question: 'Portion control equipment include',

choice1: 'sauce boat',
choice2: 'oval plate',
choice3: 'casserole',
choice4: 'ladle',
answer: 
SHOW ANSWER
8.', choice4: 'ladle
},
{
question: 'The process of making another article out of an existing one is termed',

choice1: 'patching',
choice2: 'remodelling',
choice3: 'renovation',
choice4: 'darning',
answer: 
SHOW ANSWER
9.', choice2: 'remodelling
},
{
question: 'The best seam for children’s dress is',

choice1: 'French seam',
choice2: 'open seam',
choice3: 'overlaid seam',
choice4: 'welt seam',
answer: 
SHOW ANSWER
 question: '0',. choice1: 'French seam
},
{
 

question: 'Select the element of design from the following options.',

choice1: 'Colour',
choice2: 'Motif',
choice3: 'Repeat',
choice4: 'Rhythm',
answer: 
SHOW ANSWER
 question: '1',. choice1: 'Colour
},
{
 

question: 'Shading in tones is best done with',

choice1: '2B pencil',
choice2: '2H pencil',
choice3: 'HB pencil',
choice4: 'HH pencil',
answer: 
SHOW ANSWER
 question: '2',. choice1: '2B pencil
},
{
 

question: 'Preliminary sketches help the artist to',

choice1: 'increase his drawings',
choice2: 'gather required materials',
choice3: 'get the required form',
choice4: 'make the product last longer',
answer: 
SHOW ANSWER
 
},
{
13.', choice3: 'get the required form

 

question: 'Select a neutral colour from the options below;',

choice1: 'blue',
choice2: 'orange',
choice3: 'red',
choice4: 'white',
answer: 
SHOW ANSWER
 
},
{
14.', choice4: 'white

 

question: 'Which colour is directly opposite red on the six-point colour wheel?',

choice1: 'Orange',
choice2: 'Violet',
choice3: 'Green',
choice4: 'Black',
answer: 
SHOW ANSWER
 
},
{
15.', choice3: 'Green

 

question: 'The freezer is used to store',

choice1: 'fresh milk and cabbage',
choice2: 'kontonmire and eggs',
choice3: 'fresh fish and meat',
choice4: 'lettuce and smoked fish',
answer: 
SHOW ANSWER
 
},
{
16.', choice3: 'fresh fish and meat

 

question: 'Which of the following is a standing collar?',

choice1: 'Peter pan collar',
choice2: 'Sailor’s collar',
choice3: 'Mandarin collar',
choice4: 'Shirt collar',
answer: 
SHOW ANSWER
 
},
{
17.', choice3: 'Mandarin collar

 

question: 'Tools used for measuring when sewing include',

choice1: 'bodkin and stiletto',
choice2: 'needle and sewing pins',
choice3: 'thimble and stitch ripper',
choice4: 'tape measure and metre rule',
answer: 
SHOW ANSWER
 
},
{
18.', choice4: 'tape measure and metre rule

 

question: 'Stitches used for securing hems and turnings to prevent fraying are',

choice1: 'back stitches',
choice2: 'neatening stitches',
choice3: 'running stitches',
choice4: 'temporary stitches',
answer: 
SHOW ANSWER
 
},
{
19.', choice2: 'neatening stitches

 

question: 'A student can earn income from selling chair backs and fanciful articles when he or she learns',

choice1: 'drafting',
choice2: 'embroidery',
choice3: 'sewing',
choice4: 'crocheting',
answer: 
SHOW ANSWER
 
},
{
20.', choice4: 'crocheting

 

question: 'Individual working in a poorly ventilated kitchen often shows signs of',

choice1: 'fatigue',
choice2: 'aggression',
choice3: 'forgetfulness',
choice4: 'clumsiness
question: 'ANSWER
21',. choice1: 'fatigue

question: 'The major factor to be considered in selecting any equipment for use by a Form Two student is',

choice1: 'space for storage',
choice2: 'availability of equipment',
choice3: 'skill of the user',
choice4: 'availability of electricity',
answer: 
SHOW ANSWER
 
},
{
22. C skill of the user

 

question: 'In frying meat, heat is transferred by means of',

choice1: 'convection',
choice2: 'conduction and radiation',
choice3: 'radiation and convection',
choice4: 'conduction
question: 'ANSWER
3',. choice1: 'convection

question: 'Incorrect threading of a sewing machine will cause',

choice1: 'puckering of seams',
choice2: 'missing stitches',
choice3: 'thread breaking',
choice4: 'loose stitches forming',
answer: 
SHOW ANSWER
 
},
{
24.', choice4: 'loose stitches forming

 

question: 'suitable inexpensive fabric for making a school bag is',

choice1: 'poplin',
choice2: 'denim',
choice3: 'damask',
choice4: 'calico',
answer: 
SHOW ANSWER
25.', choice4: 'calico
},
{
question: 'Fruits are best cooked by',

choice1: 'stewing',
choice2: 'poaching',
choice3: 'steaming',
choice4: 'boiling
question: 'ANSWER
26',. choice1: 'stewing

question: 'The food item that absorbs all the liquid during boiling is',

choice1: 'rice',
choice2: 'fish',
choice3: 'yam',
choice4: 'meat',
question: 'ANSWER
27',. choice1: 'rice

question: 'A strong neat seam suitable for pyjamas is',

choice1: 'double stitched seam',
choice2: 'overlaid seam',
choice3: 'French seam',
choice4: 'open seam',
question: 'ANSWER
28',. choice1: 'double stitched seam

question: 'Petroleum jelly is used in the treatment of',

choice1: 'open wound',
choice2: 'scald',
choice3: 'minor burns',
choice4: 'bruises',
answer: 
SHOW ANSWER
29.', choice3: 'minor burns
},
{
question: 'In setting a table, the glass for water is placed',

choice1: 'on the dinner table',
choice2: 'on side of plate',
choice3: 'at the tip of dessert fork',
choice4: 'at the tip of dinner knife',
answer: 
SHOW ANSWER
30.', choice4: 'at the tip of dinner knife
},
{]

