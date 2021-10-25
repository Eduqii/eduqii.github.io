

//Array of Objects
const quiz = [
 {
		question: 'If Q={1, 3, 5, 7, 9, 10, 11, 13, 15} and T={1, 2, 3, 5, 6, 7, 10, 11, 12}, find Q \u222A T',
		options: ['{1, 2, 3, 5, 7, 10, 11}',
		 '{1, 3, 5, 7, 9, 11, 13, 15}',
		 '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13}',
		 '{1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 15}'],
		answer: 3
	},
	
{
		question: 'If 21 : 2x = 7 : 12, find the value of x.',
		options: ['10',
		 '12',
		 '15',
		 '18'],
		answer: 3
	},

	{
		question: 'Given that <sup>1</sup>&frasl;<sub>2p</sub> = <sup>1</sup>&frasl;<sub>8</sub>, find the value of p',
		options: ['4',
		 '3',
		 '2',
		 '1'],
		answer: 0
	},

	{
		question: 'Simplify 3q 	\xD7 12pq',
		options: ['15pq<sup>2</sup>',
		 '15p<sup>2</sup>q',
		 '32pq<sup>2</sup>',
		 '32p<sup>2</sup>q'],
		answer: 2
	},

	{
		question: 'If A = {2, 6, 8} and B = {4, 6, 8, 10}, which of the following statements is true?',
		options: ['A\u2282B',
		 'A\u2229B={2,6,8}',
		 'A\u222AB={2,4,6,8,10}',
		 'A\u2283B'],
		answer: 2
	},

	{
		question: 'Find the product of 4xy<sup>4</sup> and x<sup>2</sup>yz',
		options: ['4x<sup>3</sup>y<sup>4</sup>z',
		 '4x<sup>3</sup>y<sup>5</sup>z',
		 '4x<sup>2</sup>y<sup>4</sup>z',
		 '4x<sup>2</sup>y<sup>4</sup>'],
		answer: 1
	},

	{
		question: 'The sum of the interior angles of a regular polygon with 10 sides is',
		options: ['144\xB0',
		 '900\xB0',
		 '1440\xB0',
		 '1800\xB0'],
		answer: 2
	},

	{
		question: 'Solve 2 + <sup>x</sup>&frasl;<sub>3</sub> = 1 - 2x',
		options: ['-1<sup>2</sup>&frasl;<sub>7</sup>',
		 '<sup>-3</sup>&frasl;<sub>7</sub>',
		 '<sup>3</sup>&frasl;<sub>7</sub>',
		 '1<sup>2</sup>&frasl;<sub>7</sub>'],
		answer: 1
	},

	{
		question: 'The ages of the members of a social club are 20 years, 55 years, 60 years and 25 years. Find the mean age of the members of the club.',
		options: ['20 years',
		 ' 30 years',
		 '40 years',
		 '50 years'],
		answer: 2
	},

	{
		question: 'Evelyn saved GH\xA2 35.48 every month for 8 months. How much did she save?',
		options: ['GH\xA2 183.60',
		 'GH\xA2 280.63',
		 'GH\xA2 283.20',
		 'GH\xA2 283.84'],
		answer: 3
	},

	{
		question: 'Evaluate: <sup>0.00492</sup>&frasl;<sub>0.041</sub>',
		options: ['0.012',
		 '0.12',
		 '1.2',
		 '12.0'],
		answer: 1
	},

	{
		question: 'A woman deposited an amount of GHc 50,000.00 at a bank for 2 years at a rate of 20% per annum. Find the simple interest.',
		options: ['Gh\xA2 1,000.00',
		 'GH\xA2 2,000.00',
		 'GH\xA2 10,000.00',
		 'GH\xA2 20,000.00'],
		answer: 3
	},

	{
		question: 'What is the total cost of x shirts at GHc 5.00 each and y shirts at GH\xA2 1.50 each?',
		options: ['5x + 1.5y',
		 '5y + 1.5x',
		 '5(x + 1.5y)',
		 '1.5(5x + y)'],
		answer: 0
	},

	{
		question: 'At a meeting attended by 23 people, the females were 7 more than the males. How many males were there?',
		options: ['8',
		 '15',
		 '16',
		 '30'],
		answer: 0
	},

	{
		question: 'Find the value of x in the diagram',
		options: ['28\xBA',
		 '30\xBA',
		 '34\xBA',
		 '60\xBA'],
		answer: 2,
		img:'img/parrallel_line.png'
	},

	{
		question: 'How many lines of symmetry does a rhombus have?',
		options: ['2',
		 '3',
		 '4',
		 '5'],
		answer: 0
	},

	{
		question: 'In 1995, 215 boys and 185 girls were admitted into a Senior Secondary School. Find, correct to the nearest whole number, the percentage of girls admitted.',
		options: ['46%',
		 '47%',
		 '53%',
		 '54%'],
		answer: 0
	},

	{
		question: 'Simplify: <sup>2(u - v)(2u + v)</sup>&frasl;<sub>4u + 6v</sub>',
		options: ['<sup>(u - v)(2u + v)</sup>&frasl;<sub>u + v</sub>',
		 '<sup>(u - v)(u + v)</sup>&frasl;<sub>u + 2v </sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>(u - v)',
		 '(u - v)'],
		answer: 3
	},

	{
		question: ' Solve 25x + 450	\u2264 3000',
		options: ['x \u2265 102',
		 'x \u2264 102',
		 'x \u2265 138',
		 'x \u2264 138'],
		answer: 1
	},

	{
		question: 'Given that a = (<sup>4</sup><sub>-6</sub>) and b = (<sup>-4</sup><sub>6</sub>), find a + b.',
		options: ['(<sup>0</sup><sub>0</sub>)',
		 '(<sup>-8</sup><sub>12</sub>)',
		 '(<sup>8</sup><sub>-12</sub>)',
		 '(<sup>-8</sup><sub>0</sub>)'],
		answer: 0
	},

	{
		question: 'Mr. Agyekum has 11 of the GH\xA2 20.00 notes, 15 of the GH\xA2 10.00 notes and 6 of the GH\xA2 5.00 notes. How much does Mr. Agyekum have altogether?',
		options: ['280.00',
		 ' 320.00',
		 '360.00',
		 '400.00'],
		answer: 3
	},

	{
		question: 'A man travelled a distance of 1.5 km in 30 minutes. What distance can he cover in 50 minutes, travelling at the same speed?',
		options: ['2.2 km',
		 ' 2.5 km',
		 '2.8 km',
		 '3.2 km'],
		answer: 1
	},


		{
		question: 'In the diagram, UVW is an isosceles triangle, |UV| = |UW| and angle VUW = 70\xB0. Find angle UVW',
		options: ['70\xB0',
		 '60\xB0',
		 '55\xB0',
		 '35\xB0'],
		answer: 2,
		img:'img/construction.png'
	},

	{
		question: 'Arrange the following in descending order: ' + '<br />' + '<sup>7</sup>&frasl;<sub>20</sub>, <sup>7</sup>&frasl;<sub>25</sub>, <sup>37</sup>&frasl;<sub>100</sub>, <sup>1</sup>&frasl;<sub>4</sub>',
		options: ['<sup>37</sup>&frasl;<sub>100</sub>, <sup>7</sup>&frasl;<sub>20</sub>, <sup>7</sup>&frasl;<sub>25</sub>, <sup>1</sup>&frasl;<sub>4</sub>',
		 '<sup>1</sup>&frasl;<sub>4</sub>, <sup>7</sup>&frasl;<sub>25</sub>, <sup>7</sup>&frasl;<sub>20</sub>, <sup>37</sup>&frasl;<sub>100</sub>',
		 '<sup>37</sup>&frasl;<sub>100</sub>, <sup>7</sup>&frasl;<sub>20</sub>, <sup>1</sup>&frasl;<sub>4</sub>, <sup>7</sup>&frasl;<sub>25</sub>',
		 '<sup>7</sup>&frasl;<sub>25</sub>, <sup>1</sup>&frasl;<sub>4</sub>, <sup>7</sup>&frasl;<sub>20</sub>, <sup>37</sup>&frasl;<sub>100</sub>'],
		answer: 0
	},

	{
		question: 'The point D(4, 3) is reflected in the y-axis. Find the coordinates of its image.',
		options: ['(-4, -3)',
		 '(-3, 4)',
		 ' (-4, 3)',
		 '(3, -4)'],
		answer: 2
	},

	{
		question: 'Simplify: 7<sup>1</sup>&frasl;<sub>2</sub> \xD7 (<sup>1</sup>&frasl;<sub>4</sub> \xF7 <sup>1</sup>&frasl;<sub>2</sub>) - <sup>1</sup>&frasl;<sub>4</sub>',
		options: ['<sup>7</sup>&frasl;<sub>2</sub>',
		 '<sup>11</sup>&frasl;<sub>16</sub>',
		 '<sup>7</sup>&frasl;<sub>32</sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>'],
		answer: 0
	},

	{
		question: 'Divide 64.5 by 0.015, leaving the answer in standard form.',
		options: ['4.3 \xD7 10<sup>4</sup>',
		 '4.3 \xD7 10<sup>3</sup>',
		 '4.3 \xD7 10<sup>2</sup>',
		 '4.3 \xD7 10'],
		answer: 1
	},

	{
		question: 'The point Q(-2, 3) is rotated anticlockwise about the origin through an angle of 90\xBA. Find the coordinates of its image.',
		options: ['(-3, -2)',
		 '(-3, 2)',
		 '(3, -2)',
		 ' (3, 2)'],
		answer: 0
	},

	{
		question: 'Elias bought five books. Their mean price was GH\xA2 3.25. The total cost for four of the books was GH\xA2 11.75. What was the cost of the fifth book?',
		options: ['GH\xA2 3.50',
		 'GH\xA2 4.00',
		 'GH\xA2 4.20',
		 'GH\xA2 4.50'],
		answer: 3
	},

	{
		question: 'Tins of milk each of volume 77 cm<sup>3</sup> and weight 170 g were packed into an empty carton of volume 1540 cm<sup>3</sup> and weight 500 g.' + '<br />' + 'How many tins of milk can be packed to fill the carton?',
		options: ['2',
		 '3',
		 '20',
		 '22'],
		answer: 2
	},

	{
		question: 'Tins of milk each of volume 77 cm<sup>3</sup> and weight 170 g were packed into an empty carton of volume 1540 cm<sup>3</sup> and weight 500 g.' + '<br/>' + 'What is the weight of the carton when packed with the tins of milk?',
		options: ['2.06 kg',
		 '2.94 kg',
		 '3.90 kg',
		 '8.50 kg'],
		answer: 2
	},

	{
		question: 'A piece of cloth is 8.4 m long. If 30 cm is needed to sew a napkin, how many napkins can be sewn from this piece of cloth?',
		options: ['20',
		 '25',
		 ' 28',
		 ' 30'],
		answer: 2
	},

	{
		question: 'Express <sup>10</sup>&frasl;<sub>32</sub> as a decimal fraction.',
		options: ['0.3200',
		 '0.3125',
		 '0.3676',
		 '0.3222'],
		answer: 1
	},

	{
		question: 'A match box contains 40 sticks. If 15 of them are spoil, find the probability that a stick chosen at random is not spoilt?',
		options: ['<sup>3</sup>&frasl;<sub>5</sub>',
		 '<sup>3</sup>&frasl;<sub>8</sub>',
		 '<sup>5</sup>&frasl;<sub>8</sub>',
		 '<sup>2</sup>&frasl;<sub>5</sub>'],
		answer: 2
	},

	{
		question: 'The number of pupils who attended hospital from eight classes on a particular day are: 1, 5, 3, 1, 7, 5, 1, 1.' + '<br />' + 'Find the median number.',
		options: ['1',
		 '2',
		 '3',
		 '4'],
		answer: 1
	},
	{
		question: 'The number of pupils who attended hospital from eight classes on a particular day are: 1, 5, 3, 1, 7, 5, 1, 1.' + '<br />' + 'What is the modal number?',
		options: ['1',
		 '4',
		 '5',
		 '7'],
		answer: 0
	},
{
		question: 'The number of pupils who attended hospital from eight classes on a particular day are: 1, 5, 3, 1, 7, 5, 1, 1.' + '<br />' + 'Calculate the mean.',
		options: ['2',
		 '3',
		 '4',
		 '5'],
		answer: 1
	},
	{
		question: 'The distance from the centre of a circle to any point on it is called',
		options: ['Circumference',
		 'Diameter',
		 'Radius',
		 'Sector'],
		answer: 2
	},
	{
		question: 'Express 1352 as a product of prime factors.',
		options: ['2<sup>3</sup> \xD7 13<sup>3</sup>',
		 '2<sup>3</sup> \xD7 13<sup>2</sup>',
		 '2<sup>2</sup> \xD7 13<sup>3</sup>',
		 '2<sup>2</sup> \xD7 13<sup>2</sup>'],
		answer: 1
	},

	{
		question: 'Which of the following statements about sets is true?',
		options: [' Every set is a subset of the null set.',
		 'The universal set is the subset of the null set',
		 'The intersection of two sets is always a null set',
		 'The universal set is the union of all its subsets.'],
		answer: 3
	}
]