

//Array of Objects
const quiz = [
 {
		question: 'Which of the following is arranged in ascending order?',
		options: ['-25, -64, 4, 17',
		 '-64, -25, 4, 17',
		 '-64, -25, 17, 4',
		 '17, 4, -25, -64'],
		answer: 1
	},
	
{
question: 'If P = {' + '<i>' + 'x: x is an even number greater than two and less than or equal to twelve' + '</i>' + '}, list the members of P.',
		options: ['{2, 4, 6, 8, 10, 12}',
		 '{3, 4, 6, 8, 10, 12}',
		 '{2, 4, 6, 8, 10}',
		 '{4, 6, 8, 10, 12}'],
		answer: 3
	},

	{
		question: 'Which of the following is an infinite set?',
		options: ['{1, 2, \u2026, 5, 6, 7}',
		 '{4, 6, 8, 10, 12}',
		 '{2, 3, 5, 7, 11, \u2026}',
		 '{3, 6, \u2026, 18, 21, \u2026, 33, 36}'],
		answer: 2
	},

	{
		question: 'Find the HCF of 18, 36 and 60.',
		options: ['2<sup>2</sup> \xD7 3<sup>2</sup> \xD7 5',
		 '2<sup>2</sup> \xD7 3<sup>2</sup>',
		 '2 \xD7 3 \xD7 5',
		 '2 \xD7 3'],
		answer: 3
	},

	{
		question: 'Write two hundred and two million, two thousand, two hundred and two in figures.',
		options: ['202,002,202',
		 '202,020,202',
		 '202,022,202',
		 '202,200,202'],
		answer: 0
	},

	{
		question: ' Find the number that can be added to 207 to make the sum divisible by 17.',
		options: ['3',
		 '13',
		 '14',
		 '30'],
		answer: 2
	},

	{
		question: 'If P = {factors of 36} and Q = {multiples of 4 less than 40}, find the number of subsets in P \u2229 Q.',
		options: ['10',
		 '8',
		 '6',
		 '4'],
		answer: 3
	},

	{
		question: 'Find the LCM of 10, 15 and 25.',
		options: ['90',
		 '120',
		 '150',
		 '300'],
		answer: 2
	},

	{
		question: 'Evaluate (<sup>2</sup>&frasl;<sub>3</sub> - <sup>1</sup>&frasl;<sub>4</sub>) \xF7 <sup>5</sup>&frasl;<sub>6</sub>',
		options: ['<sup>1</sup>&frasl;<sub>2</sub>',
		 '<sup>12</sup>&frasl;<sub>25</sub>',
		 '<sup>5</sup>&frasl;<sub>12</sub>',
		 '<sup>1</sup>&frasl;<sub>5</sub>'],
		answer: 0
	},

	{
		question: 'Arrange <sup>2</sup>&frasl;<sub>3</sub>,<sup>4</sup>&frasl;<sub>9</sub> and <sup>3</sup>&frasl;<sub>7</sub> in ascending order.',
		options: ['<sup>2</sup>&frasl;<sub>3</sub>, <sup>3</sup>&frasl;<sub>7</sub>, <sup>4</sup>&frasl;<sub>9</sub>',
		 '<sup>4</sup>&frasl;<sub>9</sub>, <sup>3</sup>&frasl;<sub>7</sub>, <sup>2</sup>&frasl;<sub>3</sub>',
		 '<sup>3</sup>&frasl;<sub>7</sub>, <sup>2</sup>&frasl;<sub>3</sub>, <sup>4</sup>&frasl;<sub>9</sub>',
		 '<sup>3</sup>&frasl;<sub>7</sub>, <sup>4</sup>&frasl;<sub>9</sub>, <sup>2</sup>&frasl;<sub>3</sub>'],
		answer: 3
	},

	{
		question: 'Find the simple interest on GH\xA2 600.00 saved for 2 years 8 months at 5% per annum.',
		options: ['GH\xA2 64.00',
		 'GH\xA280.00',
		 'GH\xA284.00',
		 'GH\xA292.00'],
		answer: 1
	},

	{
		question: 'The number of girls in a mixed school is 420. If the ratio of boys to girls in the school is 3:2, how many students are in the school?',
		options: ['1050',
		 '1470',
		 ' 1630',
		 '1680'],
		answer: 0
	},

	{
		question: 'Mary had a chance to select a number from 1 to 20 randomly. What is the probability that the number is divisible by 3?',
		options: ['<sup>3</sup>&frasl;<sub>20</sub>',
		 '<sup>1</sup>&frasl;<sub>5</sub>',
		 '<sup>3</sup>&frasl;<sub>10</sub>',
		 '<sup>7</sup>&frasl;<sub>20</sub>'],
		answer: 2
	},

	{
		question: 'Ama bought a pair of sandals for GH\xA220.00 and sold it at GH\xA224.00. Find her percentage profit',
		options: ['4%',
		 '17%',
		 '20%',
		 '44%'],
		answer: 2
	},

	{
		question: 'Eight men can do a piece of work in 12 days. How long will 6 men take to do the same work if they work at the same rate?',
		options: ['14 days',
		 '16 days',
		 '18 days',
		 '20 days'],
		answer:1
	},

	{
		question: 'In the diagram QP is parallel to ST, angle QPR = 68\xB0 and angle SRT = 40\xB0' + '<br />' + 'Find the value of angle PQR',
		options: ['40\xB0',
		 '68\xB0',
		 '72\xB0',
		 '108\xB0'],
		answer: 2,
		img:'img/angle.png'
	},

	{
		question: 'In the diagram QP is parallel to ST, angle QPR = 68\xB0 and angle SRT = 40\xB0' + '<br />' + 'Find the value of angle TSR',
		options: ['40\xB0',
		 '68\xB0',
		 '72\xB0',
		 '112\xB0'],
		answer: 1,
		img:'img/angle.png'
	},

	{
		question: 'A train is travelling at a speed of 60 km/h. What distance would it cover from 10:45 am to 12:15 pm?',
		options: ['75 km',
		 '87 km',
		 '90 km',
		 '150 km'],
		answer: 2
	},

	{
		question: 'The perimeter of a rectangle is 26 cm. If its length is 10 cm, find its area.',
		options: ['30cm<sup>2</sup>',
		 '60cm<sup>2</sup>',
		 '130cm<sup>2</sup>',
		 '160cm<sup>2</sup>'],
		answer: 0
	},

	{
		question: 'Find the slope of the line 3x - 6y = 33.',
		options: ['-3',
		 '-<sup>1</sup>&frasl;<sub>2</sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>',
		 '3'],
		answer: 2
	},

	{
		question: 'If y = c + bx<sup>2</sup>, find y when c = <sup>14</sup>&frasl;<sub>5</sub>, b=<sup>4</sup>&frasl;<sub>5</sub> and x = 2.',
		options: ['3',
		 '4',
		 '6',
		 '7'],
		answer: 2
	},

	{
		question: 'The volume of a cylinder is 20\u03C0cm<sup>3</sup>. If the height of the cylinder is 5 cm, find the base radius.',
		options: ['1 cm',
		 '2 cm',
		 '3 cm',
		 '4 cm'],
		answer: 1
	},


		{
		question: 'In the diagram, PQR is a right-angled triangle with |PR| = 15 cm and |QR| = 12 cm. Find the length PQ.',
		options: ['3.0 cm',
		 '8.0 cm',
		 '9.0 cm',
		 '19.2cm'],
		answer: 2,
		img:'img/right-angleTriangle.png'
	},

	{
		question: 'How many edges has a triangular prism?',
		options: ['3',
		 '5',
		 '6',
		 '9'],
		answer: 3
	},

	{
		question: 'Make m the subject of the relation q=<sup>1</sup>&frasl;<sub>3</sub>(m + n)h',
		options: ['m = <sup>3q</sup>&frasl;<sub>h</sub> - n',
		 'm = 3q - hn',
		 'm = 3q + hn',
		 'm = <sup>3q</sup>&frasl;<sub>h</sub> + n'],
		answer: 0
	},

	{
		question: 'Simplify: 16<sup>2</sup> \xD7 8 <sup>2</sup>',
		options: ['2<sup>10</sup>',
		 '2<sup>14</sup>',
		 '2<sup>15</sup>',
		 '2<sup>16</sup>'],
		answer: 1
	},

	{
		question: 'Simplify: 4a - 9b - 2(2a - 3b).',
		options: ['8a + 3b',
		 '8a - 3b',
		 '-15b',
		 '-3b'],
		answer: 3
	},

	{
		question: 'If u = (<sup>3</sup><sub>1</sub>) and v = (<sup>-2</sup><sub>1</sub>) evaluate 6v + 2u.',
		options: ['(<sup>-1</sup><sub>3</sub>)',
		 '(<sup>-6</sup><sub>8</sub>)',
		 '(<sup>-</sup><sub>3</sub>)',
		 '<sup>6</sup><sub>8</sub>'],
		answer: 1
	},

	{
		question: 'Find the image of the point (2,5) under the transformation:(<sup>x</sup><sub>y</sub>) \u2192 (<sup>x</sup><sub>2-y</sub>)',
		options: ['(2,-3)',
		 '(2,2)',
		 '(2,3)',
		 '(2,7)'],
		answer: 0
	},

	{
		question: 'Find the image of Q(-4,5) when rotated anticlockwise through 90\xBA about the origin.',
		options: ['Q(-5,4)',
		 'Q(-5,-4)',
		 '(4,-5)',
		 '(4,5)'],
		answer: 1
	},

	{
		question: 'The following data show the marks of students in a test:' + '<br />' + '10, 4, 1, 4, 3, 3, 2, 1, 1, 7, 8' + '<br />' + '<br />' + 'If the pass mark is 4, find the number of students who scored more than the pass mark.',
		options: ['1',
		 '2',
		 '3',
		 '4'],
		answer: 2
	},

	{
		question: 'The following data show the marks of students in a test:' + '<br />' + '10, 4, 1, 4, 3, 3, 2, 1, 1, 7, 8' + '<br />' + '<br />' + 'Find the mean mark.',
		options: ['3',
		 '4',
		 '7',
		 '8'],
		answer: 1
	},

	{
		question: 'How many lines of symmetry has a rhombus',
		options: ['2',
		 '3',
		 '4',
		 '5'],
		answer: 0
	},

	{
		question: 'In an enlargement length AB = 3 cm and the length of its image A<sub>1</sub>B<sub>1</sub> = 15 cm. Calculate the scale factor.',
		options: ['<sup>1</sup>&frasl;<sub>5</sub>',
		 '<sup>2</sup>&frasl;<sub>3</sub>',
		 '5',
		 '12'],
		answer: 2
	},

	{
		question: 'Find the rule of the mapping:',
		options: ['y \u2192 <sup>x</sup>&frasl;<sub>2</sub> - 2',
		 'y \u2192 x - 2',
		 'y \u2192 x<sup>2</sup> - 2',
		 'y \u2192 2x - 2'],
		answer: 3,
		img:'img/mapping_.png'
	},
	{
		question: 'Solve the inequality: <sup>1</sup>&frasl;<sub>2</sub>(3x -1) + 1 \u2264 7 + 2x',
		options: ['x \u2265 -14',
		 'x \u2264 -14',
		 'x \u2265 -13',
		 'x \u2264 -13'],
		answer: 2
	},
	{
		question: 'If 4 - x = 3(4x + 5), find the value of x.',
		options: ['<sup>11</sup>&frasl;<sub>13</sub>',
		 '1<sup>6</sup>&frasl;<sub>13</sub>',
		 '-1<sup>6</sup>&frasl;<sub>13</sub>',
		 '<sup>11</sup>&frasl;<sub>13</sub>'],
		answer: 3
	},
	{
		question: 'In class, there are 12 girls and 48 boys. Find the percentage of boys in the class.',
		options: ['20%',
		 '40%',
		 '60%',
		 '80%'],
		answer: 3
	},
	{
		question: 'The bearing of P from Q is 060\xBA. Find the bearing of Q from P.',
		options: ['120\xBA',
		 '150\xBA',
		 '210\xBA',
		 '240\xBA'],
		answer: 3
	},
	{
		question: 'Which of the following statements best describes the construction below?',
		options: ['construction of line AB from P.',
		 'construction of perpendicular from P to meet line AB.',
		 'construction of an arc of a circle with centre P.',
		 'construction of the bisector of line AB.'],
		answer: 1,
		img:'img/construction.png'
	}
]