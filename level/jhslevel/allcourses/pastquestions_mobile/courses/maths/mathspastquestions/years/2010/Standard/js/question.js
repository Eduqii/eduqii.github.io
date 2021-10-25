

//Array of Objects
const quiz = [
  {

question: 'Which of the following sets is well defined?',

options: ['{Man, Kofi, Red, 14}',
 '{Ink, Mango, Green, Nail}',
 '{Car, Road, Glass, Book}',
 '{Seth, Mary, Jacob, Evelyn}'],
answer: 3

},

{ 

question: 'If set B is a subset of set A, then',

options: ['sets A and B have the same number of elements',
 'some members of set B can be found in set A',
 'no member of set B is in set A',
 'all the members of set B are in set A'],

answer: 3

},

{ 

question: 'The least common multiple (LCM) of 16, 30 and 36 is',

options: ['3',
 '6',
 '240',
 '720'],

answer: 3

},

{ 

question: 'The sum of 5 and x divided by 4 is equal to 3.25. Find the value of x.',

options: ['8',
 '7',
 '2<sup>1</sup>&frasl;<sub>4</sub>',
 '-3<sup>4</sup>&frasl;<sub>13</sub>'],

answer: 0

},

{ 

question: 'The numbers 32, 33, 34, \u2026, \u2026, 42 form a sequence in base 5',

options: [' 35, 36',
 '30, 31',
 '40, 41',
 '31, 41'],

answer: 2

},

{ 

question: 'Write down all the integers in the set A = {-10, -4, 0, \xBC, 2\xBD, 45, 100}',

options: ['{-10, -4, 0, 45, 100}',
 '{-10, – 4}',
 '{0, 45,100}',
 '{	\xBC, 2	\xBD}'],

answer: 0

},

{ 

question: 'Find the total cost of 25 pens and 75 books if each pen costs GH\xA2 0.20 and each book costs GH\xA2 0.30.',

options: ['GH\xA222.50',
 'GH\xA223.50',
 'GH\xA227.50',
 'GH\xA250.00'],

answer: 2

},

{ 

question: 'Simplify – 27 + 18 – (10 – 14) – (-2)',

options: ['-3',
 '-7',
 '-11',
 '-35'],

answer: 0

},

{ 

question: 'Arrange the following numbers from the lowest to the highest: 0.5, 3, -5, 0.',

options: ['0, 0.5, -5, 3',
 '0, -5, 0.5, 3',
 '-5, 0, 0.5, 3',
 '-5, 0.5, 0, 3'],

answer: 2 

},

{ 

question: 'Find how many pieces of cloth 5\xBD m long that can be cut from a roll of cloth 121 m long.',

options: ['665\xBD',
 '115\xBD',
 '66',
 '22'],

answer: 3

},

{ 

question: 'Find the value of 124.3 + 0.275 + 74.06, correcting your answer to one decimal place.',

options: ['198.6',
 '198.7',
 '892.0',
 '892.4'],

answer: 0

},

{ 

question: 'Esi and Kwasi are 12 and 8 years old respectively. They share 60 mangoes in the ratio of their ages. How many mangoes does Esi get?',

options: ['42',
 '40',
 '36',
 '18'],

answer: 2

},

{ 

question: 'It takes 6 students 1 hour to sweep their school compound. How long will it take 15 students to sweep the same compound?',

options: ['24 minutes',
 '12 minutes',
 '3 hours',
 '2 hours'],

answer: 0

},

{ 

question: 'A housing agent makes a commission of GH\xA2 103,500 when he sells a house for GH\xA2 690,000. Calculate the percentage of his commission.',

options: ['15.0%',
 '10.0%',
 '7.5%',
 '5.0%'],

answer: 0

},
{ 

question: ' A simple interest of GH\xA2 37,500.00 is earned on an amount of GH\xA2 500,000.00 for 3 years. Find the rate of interest per annum.',

options: ['20.0%',
 '10.0%',
 '5.0%',
 '2.5%'],
answer: 3

},


{ 

question: 'Simplify: (8x<sup>2</sup>y<sup>3</sup>)(<sup>3</sup>&frasl;<sub>8</sub>xy<sup>4</sup>)',

options: ['3x<sup>3</sup>y<sup>7</sup>',
 '3x<sup>2</sup>y<sup>7</sup>',
 '3x<sup>3</sup>y<sup>4</sup>',
 '3xy'],

answer: 0

},

{ 

question: 'The scores of 10 students in an examination are given as follows:' + '<br />' +
'45, 12, 75, 81, 54, 51, 24, 67, 19 and 39.' + '<br />' +
'What is the median of the scores?',

options: ['39',
 '48',
 '51',
 '54'],

answer: 1

},

{ 

question: 'A pie chart is to be drawn from the data in the following table:' + '<br />' +
'<table>' + '<tr>' + '<td>' + 'Cassava' + '</td>' + '<td>' + '20%' + '</td>' + '</tr>' +
'<tr>' + '<td>' + 'Yam' + '</td>' + '<td>' + '17%' + '</td>' + '</tr>' + 
'<tr>' + '<td>' + 'Plantain' + '</td>' + '<td>' + '28%' + '</td>' + '</tr>' + 
'<tr>' + '<td>' + 'Maize' + '</td>' + + '<td>' + '35%' + '</td>' + '</tr>' + '</table>' + '<br />' + '<br />' +
'What will be the value of the angle of the sector for maize?',

options: ['126.0\xBA',
 '100.8\xBA',
 '72.0\xBA',
 '61.2\xBA'],

answer: 0

},

{ 

question: 'Eighteen cards are numbered from 11 to 29. If one card is chosen at random, what is the probability that it contains the digit 2?',

options: ['<sup>3</sup>&frasl;<sub>9</sub>',
 '<sup>5</sup>&frasl;<sub>18</sub>',
 '<sup>5</sup>&frasl;<sub>9</sub>',
 '<sup>11</sup>&frasl;<sub>19</sub>'],

answer: 3

},

{ 

question: 'Find the value of x, if <sup>x</sup>&frasl;<sub>4</sub> + 1 = 5.',

options: ['24',
 '20',
 '19',
 '16'],

answer: 3

},

{ 

question: 'Factorize: xy + 5x + 2y + 10',

options: ['(x + 5)(2y + 10)',
 '(x + 2)(y + 10)',
 '(x + 5)(y + 2)',
 '(x + 2)(y + 5)'],

answer: 3

},

{ 

question: 'If x \u2208 {2, 3, 4, 5}, find the truth set of 2x + 1 	\x3C 8',

options: ['{2,3,4}',
 '{2,3}',
 '{3,4}',
 '{4,5}'],

answer: 1 

},

{ 

question: 'Solve the inequality: 7x – (10x + 3) \u2265 -9',

options: ['x \u2265 2',
 'x \u2264 4',
 'x \u2265 4',
 'x \u2264 2'],

answer: 3

},

{ 

question: 'Find the rule of the mapping: ',

options: ['x \u2192 4x - 3',
 'x \u2192 3 - 4x',
 'x \u2192 4x + 3',
 'x \u2192 4x + 5'],

answer: 2,
img:'img/mapping.jpg'
},

{ 

question: 'Find the circumference of a circle whose area is equal to 64 \u03C0 cm<sup>2</sup>.',

options: ['32 \u03C0 cm',
 '16 \u03C0 cm',
 '8 \u03C0 cm',
 '4 \u03C0 cm'],

answer: 1

},

{ 

question: 'Which of the following geometric figures is the plane shape of a cube?',

options: ['Circle',
 'Rectangle',
 'Square',
 'Triangle'],

answer: 2

},

{ 

question: 'How many lines of symmetry has a rectangle?',

options: ['4',
 '3',
 '2',
 '1'],

answer: 2

},

{ 

question: 'A rectangular box has length 20 cm, width 6 cm and height 4 cm. Find how many cubes of side 2 cm that will fit into the box.',

options: ['120',
 '60',
 '30',
 '15'],

answer: 1

},

{ 

question: 'The interior angle of a regular polygon is 120\xBA. How many sides has this polygon?',

options: ['3',
 '4',
 '5',
 '6'],

answer: 3
 


},

{ 

question: 'In the diagram below, length of PS = length of SQ and angle SQR = 112\xBA. Find the value of x.',

options: ['68\xBA',
 '56\xBA',
 '46\xBA',
 '44\xBA'],

answer: 3,
img:'triangle.png'

},

{ 

question: 'XYZ is a right-angled triangle with length of sides as shown.' + '<br />' + 'Which of the following equations gives the value of z<sup>2</sup>?',

options: [' z<sup>2</sup> = (x<sup>2</sup> + y<sup>2</sup>)',
 'z<sup>2</sup> = (x – y)',
 'z<sup>2</sup> = (y<sup>2</sup> – x<sup>2</sup>)',
 'z<sup>2</sup> = (x<sup>2</sup> – y<sup>2</sup>)'],

answer: 2,
img:'triangle2.png'

},

{ 

question: 'Express 7 min. 30 sec. as a percentage of 1 hour.',

options: [' 2.5%',
 ' 7.5%',
 '11.7%',
 '12.5%'],

answer: 3
},

{ 

question: 'The point (4,5) is translated to the point (3,1). What is the translation vector?',

options: ['(<sup>-1</sup><sub>4</sub>)',
 '(<sup>1</sup><sub>4</sub>)',
 '(<sup>1</sup><sub>-4</sub>)',
 '(<sup>-1</sup><sub>-4</sub>)'],

answer: 1

},

{ 

question: 'n the diagram below, triangle QRT is the enlargement of QST.' + '<br />' +
'Which side of triangle QRT corresponds to side QT of triangle QST?',

options: ['TS',
 'TR',
 'QR',
 'SR'],

answer: 1,
img:'img/triangle3.png'

},

{ 

question: 'In the diagrams above Fig. I is an enlargement of Fig. II.' + '<br />' +
'Find the side EF of Fig. II',

options: ['20 cm',
 '5 cm',
 '4 cm',
 '3 cm'],

answer: 3,
img:'img/enlargement.jpg'

},

{ 

question: 'Express 4037 in standard form',

options: ['4.03710<sup>-4</sup>',
 '4.03710<sup>-3</sup>',
 '4.03710<sup>3</sup>',
 '4.03710<sup>4</sup>'],

answer: 2

},

{ 

question: 'Which of the following angles can be constructed by using the arcs at point C in the diagram below?',

options: ['30\xBA',
 '45\xBA',
 '60\xBA',
 '75\xBA'],

answer: 1,
img:'img/construction.jpg'

},

{ 

question: ' Given that vector a = (<sup>-5</sup><sub>12</sub>) and b = (<sup>10x</sup><sub>12</sub>) find the value of x if a = b.',

options: ['-2',
 '-	\xBD',
 '\xBD',
 '2'],

answer: 1

},

{ 

question: 'In the diagram above, the bearing of point B from A is',

options: ['340\xBA',
 '220\xBA',
 '140\xBA',
 '50\xBA'],

answer: 1,
img:'img/bearing.jpg'

},

{ 

question: 'Ama is 9 years older than Kwame. If Kwame is 18 years old, find the ratio of the age of Kwame to that of Ama.',

options: ['3 : 2',
 '1 : 3',
 '2 : 3',
 '2 : 1'],

answer: 2  
}
]