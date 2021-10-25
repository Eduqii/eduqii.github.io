

//Array of Objects
const quiz = [
 {
		question: 'Which of the following is a finite set?',
		options: ['{2, 4, 6, 8, \u2026}',
		 '{1, 2, 3, 4, \u2026}',
		 '{\u2026, 2, 3, 5, 7}',
		 '{3, 6, 9, 12}'],
		answer: 3
	},
	
{
		question: 'Given that M = {a, b, c}, find the number of subsets of M',
		options: ['3',
		 '4',
		 '6',
		 '8'],
		answer: 3
	},

	{
		question: 'If P = {2, 3, 4, 6, 8} and Q = {1, 2, 3, 4}, find P \u2229 Q',
		options: ['{2, 3, 4}',
		 '{7, 9, 10}',
		 '{2, 3, 4, 6, 8}',
		 '{1, 2, 3, 4, 6, 8}'],
		answer: 0
	},

	{
		question: 'A boy bought 3 pairs of socks at GH\xA2 17.50 per a pair and paid with two GH\xA2 50.00 notes.' + '<br />' +
'How much change was he given?',
		options: ['GH\xA2 27.50',
		 'Gh\xA2 37.50',
		 'GH\xA2 47.50',
		 'GH\xA2 48.50'],
		answer: 2
	},
	{
		question: 'Find the least Common Multiple (LCM) of the numbers 5, 10 and 12',
		options: ['2 \xD7 3 \xD7 5',
		 '2 \xD7 3<sup>2</sup> \xD7 5',
		 '2<sup>2</sup> \xD7 3 \xD7 5',
		 '2<sup>2</sup> \xD7 3<sup>2</sup> \xD7 5<sup>2</sup>'],
		answer: 2
	},

	{
		question: 'Correct 48,947.2547 to the nearest hundred.',
		options: ['490',
		 '48,900',
		 '48,950',
		 '49,000'],
		answer: 1
	},

	{
		question: 'Simplify: 16 + 5.6 + 0.681',
		options: ['2.2281',
		 '22.281',
		 '222.81',
		 '2228.1'],
		answer: 1
	},

	{
		question: 'Evaluate:<sup>4</sup>&frasl;<sub>5</sub> - <sup>1</sup>&frasl;<sub>3</sub> + <sup>2</sup>&frasl;<sub>9</sub>',
		options: ['<sup>5</sup>&frasl;<sub>11</sub>',
		 '<sup>11</sup>&frasl;<sub>45</sub>',
		 '<sup>31</sup>&frasl;<sub>45</sub>',
		 '<sup>41</sup>&frasl;<sub>45</sub>'],
		answer: 2
	},

	{
		question: 'Arrange the following integers from the least to the highest ' + '&minus;' + '4, 9, ' + '&minus;' + ' 10, ' + '&minus;' + ' 7 and 2.',
		options: ['&minus;'+'10, ' + '&minus;' + '7, ' + '&minus;' + '4, 2, 9',
		 '&minus;' + '10, 9, ' + '&minus;' + '7, ' + '&minus;' + '4, 2',
		 '&minus;' + '4, ' + '&minus;' + '7, ' + '&minus;' + '10, 2, 9',
		 '2, ' + '&minus;' + '4, ' + '&minus;' + '7, 9, ' + '&minus;' + '10'],
		answer: 0
	},

	{
		question: 'Simplify: (46 '+ '&times;' + ' 102) + (102 ' + '&times;' + ' 54)',
		options: ['1,020',
		 '10,200',
		 '102,000',
		 '1,020,000'],
		answer: 1
	},

	{
		question: 'Correct 5178.3426 to two decimal places',
		options: ['5178.00',
		 '5178.30',
		 '5178.34',
		 '5178.35'],
		answer: 2
	},

	{
		question: 'Find the simple interest on GHc 120,000.00 for 5 months at 12% per annum.',
		options: [' GH\xA2 6,000.00',
		 ' GH\xA2 7,200.00',
		 'GH\xA2 50,000.00',
		 'GH\xA2 72,000.00'],
		answer: 0
	},

	{
		question: 'Fifteen boys took 12 hours to weed a plot of land. If nine boys work at the same rate, how long will it take them to weed the plot of land?',
		options: ['6 hours',
		 '7<sup>1</sup>&frasl;<sub>5</sub>',
		 '11<sup>1</sup>&frasl;<sub>4</sub>',
		 '20 hours'],
		answer: 3
	},

	{
		question: 'A car cost GH\xA2 12,500.00. A discount of 9% is given for cash payment. Find the cost of the car when payment is made by cash.',
		options: ['GH\xA2 10,250.00',
		 'GH\xA2 11,250.00',
		 'GH\xA2 11,375.00',
		 'GH\xA2 13,625.00'],
		answer: 2
	},

	{
		question: 'Simplify: 5<sup>2</sup> \xD7 2<sup>2</sup> \xD7 5<sup>2</sup> \xD7 2',
		options: ['2<sup>2</sup> \xD7 5<sup>2</sup>',
		 '2<sup>2</sup> \xD7 5<sup>4</sup>',
		 '2<sup>3</sup> \xD7 5<sup>2</sup>',
		 '2<sup>3</sup> \xD7 5<sup>4</sup>'],
		answer: 3
	},

	{
		question: 'The table shows the marks of some students in a test.' + '<br />' + '<br />' + 
				  '<table border="1">' + '<tr>' + '<td>' + 'Marks' + '</td>' + '<td>' + '0' + '</td>' + '<td>' + '1' + '</td>' + '<td>' + '2' + '</td>' + '<td>' + '3' + '</td>' + '<td>' + '4' + '</td>' + '<td>' + '5' + '</td>' + '<td>' + '6' + '</td>' + '<td>' + '7' + '</td>' + '<td>' + '8' + '</td>' + '<td>' + '9' + '</td>' + '<td>' + '10' + '</td>' + '</tr>' + 
					'<tr>' + '<td>' + 'Number of Students' + '</td>' + '<td>' + '3' + '</td>' + '<td>' + '4'+ '</td>' + '<td>' + '5' + '</td>' +'<td>' + '4' + '</td>' +'<td>' + '5' + '</td>' + '<td>' + '4' + '</td>' +'<td>' + '7' +'</td>' +'<td>' + '3' + '</td>' +'<td>' + '4' + '</td>' +'<td>' + '2' + '</td>' + '<td>' + '2' + '</td>' + '</tr>' + '</table>' + '<br />' + '<br />' + 
					'What is the modal mark?',
		options: ['2',
		 '5',
		 '6',
		 '10'],
		answer: 2
	},

	{
		question: 'The table shows the marks of some students in a test.' + '<br />' + '<br />' + '<table border="1">' +
					'<tr>' + '<td>' + 'Marks' + '</td>' + '<td>' + '0' + '</td>' + '<td>' + '1' + '</td>' + '<td>' + '2' + '</td>' + '<td>' + '3' + '</td>' + '<td>' + '4' + '</td>' + '<td>' + '5' + '</td>' + '<td>' + '6' + '</td>' + '<td>' + '7' + '</td>' + '<td>' + '8' + '</td>' + '<td>' + '9' + '</td>' + '<td>' + '10' + '</td>' + '</tr>' + 
					'<tr>' + '<td>' + 'Number of Students' + '</td>' + '<td>' + '3' + '</td>' + '<td>' + '4'+ '</td>' + '<td>' + '5' + '</td>' +'<td>' + '4' + '</td>' +'<td>' + '5' + '</td>' + '<td>' + '4' + '</td>' +'<td>' + '7' +'</td>' +'<td>' + '3' + '</td>' +'<td>' + '4' + '</td>' +'<td>' + '2' + '</td>' + '<td>' + '2' + '</td>' + '</tr>' + '</table>' + '<br />' + '<br />' + 
					'How many students failed the test, if the pass mark was 4?',
		options: ['4',
		 '6',
		 '16',
		 '21'],
		answer: 2
	},

	{
		question: 'What is the probability of obtaining 4, when a fair die is tossed once?',
		options: ['<sup>1</sup>&frasl;<sub>6</sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>',
		 '<sup>2</sup>&frasl;<sub>3</sub>',
		 '<sup>5</sup>&frasl;<sub>6</sub>'],
		answer: 0
	},

	{
		question: 'Make P the subject of the relation,R = <sup>P + Q </sup>&frasl;<sub>2</sub>',
		options: [' P = Q - 2R',
		 ' P = 2R - Q',
		 ' P = 2R + Q',
		 'P = 2Q + R'],
		answer: 1
	},

	{
		question: 'Given that t = p<sup>2</sup> + 1, find p when t = 10.',
		options: ['3.0',
		 '4.5',
		 '11.0',
		 '81.0'],
		answer: 0
	},

	{
		question: 'Simplify: 4(x + 2) ' + '&minus;' + ' 3(x + 1).',
		options: ['x + 5',
		 'x + 11',
		 '7x + 5',
		 '7x + 11'],
		answer: 2
	},

	{
		question: 'When a number is doubled and the result is decreased by 9, the answer is 19. Find the number.',
		options: ['5',
		 '7',
		 '14',
		 '16'],
		answer: 2
	},


		{
		question: 'Solve the inequality 2x + 10 \u2265 <sup>7</sup>&frasl;<sub>2</sub>x - 5</sub>',
		options: ['x \u2265 10',
		 ' x \u2264 10',
		 'x \u2264 40',
		 'x \u2265 40'],
		answer: 1
	},

	{
		question: 'Find the image of 5, under the mapping x \u2192 4x - 7',
		options: ['3',
		 '13',
		 '20',
		 '27'],
		answer: 1
	},

	{
		question: 'An angle which is greater than 180\xBA but less than 360\xBA is',
		options: [' a right angle',
		 'an acute angle',
		 'an obtuse angle',
		 'a reflex angle'],
		answer: 3
	},

	{
		question: 'How many lines of symmetry has a rectangle?',
		options: ['1',
		 '2',
		 '3',
		 '4'],
		answer: 1
	},

	{
		question: 'The perimeter of an isosceles triangle is 45 cm. Find the length of the third side, if each of the equal sides is 14 cm long.',
		options: ['11 cm',
		 '14 cm',
		 '17 cm',
		 '31 cm'],
		answer: 2
	},

	{
		question: 'Find the area of a circle whose diameter is 7cm. [Take \u03C0 <sup>22</sup>&frasl;<sub>7</sub>]',
		options: ['11 cm<sup>2</sup>',
		 '38<sup>1</sup>&frasl;<sub>2</sub>cm<sup>2</sup>',
		 '44<sup>1</sup>&frasl;<sub>2</sub>cm<sup>2</sup>',
		 ' 54cm<sup>2</sup>'],
		answer: 1
	},

	{
		question: 'The mean of three numbers is 12. If two of the numbers are 14 and 16, find the third number.',
		options: ['6',
		 '12',
		 '30',
		 '36'],
		answer: 0
	},

	{
		question: 'The sum of the interior angles of a regular polygon is 540\xB0. Find the number of sides of the polygon.',
		options: ['7',
		 ' 6',
		 '5',
		 '4'],
		answer: 2
	},

	{
		question: 'The figure QPR is an equilateral triangle. ' + '<br/>' + 'If angle PRS = (2x ' + '&minus;' + ' 10\xB0), find the value of x.',
		options: ['55\xB0',
		 '65\xB0',
		 ' 85\xB0',
		 '95\xB0'],
		answer: 1,
		img:'img/eqTriangle.png'
	},

	{
		question: 'The diagonal of a rectangle is 10 cm long. If the length of the rectangle is 8 cm, find its breadth.',
		options: ['2 cm',
		 '3 cm',
		 '5cm',
		 '6cm'],
		answer: 3
	},

	{
		question: ' In an enlargement, XY \u2192 X<sub>1</sub>Y<sub>1</sub>. If |XY| = 24 cm and |X<sub>1</sub>Y<sub>1</sub>| = 8 cm, calculate the scale factor of the enlargement.',
		options: [' <sup>1</sup>&frasl;<sub>32</sub>',
		 ' <sup>1</sup>&frasl;<sub>24</sub>',
		 '<sup>1</sup>&frasl;<sub>8</sub>',
		 '<sup>1</sup>&frasl;<sub>3</sub>'],
		answer: 3
	},

	{
		question: 'Study the triangle of odd numbers and use it to answer this question' + '<br />' + 'Evaluate 13 + b + c + 19.',
		options: ['62',
		 '64',
		 '74',
		 '76'],
		answer: 1,
		img: 'img/oddNumTrian.png'
	},

	{
		question: 'Study the triangle of odd numbers and use it to answer this question' + '<br />' + 'Evaluate: a + b + c',
		options: ['24',
		 '29',
		 '36',
		 '43'],
		answer: 3
	},

	{
		question: 'Simplify: (<sup>-3</sup><sub>5</sub>) + (<sup>2</sup><sub>7</sub>)',
		options: ['(<sup>-1</sup><sub>2</sub>)',
		 '(<sup>-5</sup><sub>12</sub>)',
		 '(<sup>-1</sup><sub>-2</sub>)',
		 '(<sup>-5</sup><sub>-12</sub>)'],
		answer: 2
	},

	{
		question: 'The bearing of X from Y is 196\xBA. What is the bearing of Y from X?',
		options: ['016\xBA',
		 '074\xBA',
		 '106\xBA',
		 '244\xBA'],
		answer: 0
	},

	{
		question: 'If a = -4 and b = 3, evaluate <sup>3a + 2b</sup>&frasl;<sub>ab</sub>',
		options: ['<sup>3</sup>&frasl;<sub>2</sub>',
		 '1',
		 '<sup>1</sup>&frasl;<sub>2</sub>',
		 ' -<sup>3</sup>&frasl;<sub>2</sub>'],
		answer: 2
	},

	{
		question: 'The point P (' + '&minus;' + ' 3, 7) is reflected in the x-axis. Find its image.',
		options: ['(' + '&minus;' + '3, '+ '&minus;' + '7)',
		 '(' + '&minus;' + '3, '+ '7)',
		 '(' + '&minus;' + '7, 3)',
		 '(3, '+ '&minus;' + '7)'],
		answer: 0
	},

	{
		question: 'The instrument used to measure the angle between two lines that meet at a point is known as a',
		options: ['pair of compasses',
		 'set-square',
		 'protractor',
		 'pair of dividers'],
		answer: 2
	}
	]