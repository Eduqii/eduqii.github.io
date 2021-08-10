

//Array of Objects
const quiz = [
  {
  	question: 'Given that A = {2,4,6,8,10} and B = {4, 8, 12}, find A \u222A B',
  	options:['4,8',
			 '2,8,12',
			 '4,6,8,12',
			 '2,4,6,8,10,12'],
  	answer: 3
  },
  {	
  	question: 'Express 0.000344 in standard form.',
	options:[ '3.44 \xD7 10<sup>-6</sup>',
			  '3.44 \xD7 10<sup>-5</sup>',
			  '3.44 \xD7 10<sup>-4</sup>',
			  '3.44 \xD7 10<sup>-3</sup>'],
	answer: 2	
  },
  {
  	question: 'Which of the following numbers is the largest?',
  	options:['\u2212 70',
			 '\u2212 50',
			 '\u2212 3',
			 '\u2212 2'],
  	answer: 3
  },
  {
  	question: 'Correct 0.024561 to three significant figures.',
  	options:[ '0.03',
			  '0.025',
			  '0.0245',
			  '0.0246'],
  	answer: 3
  },
  {
  	question: 'Simplify: (7<sup>5</sup> \xD7 7<sup>3</sup>) \xF7 7<sup>6</sup>',  	
  	options:[ '7<sup>9</sup>',
			  '7<sup>4</sup>',
			  '7<sup>3</sup>',
			  '7<sup>2</sup>'],
  	answer: 3
  },
  {
  	question: 'How many lines of symmetry has a square?',		
  	options: ['0',
			  '1',
			  '2',
			  '4'],
		answer: 3
  },
  {
  	question: 'Solve the equation 10 - <sup>(x+3)</sup>&frasl;<sub>2</sub> = 8',	 
  	options: [ '-9',
			   '-3',
			   '1',
			   '15'],
		answer: 2
  },
  {
  	question: 'Factorize: kx + 2xt - 4k - 8t.',		
  	options: [ '(k-2t)(x+4)',
			   '(k+2t)(x+4)',
			   '(k+t)(x-4)',
			   '(k+2t)(x-4)'],
		answer: 3
  },
  {
  	question: 'There are 12 boys and 18 girls in a class. Find the fraction of boys in the class',		
  	options: ['<sup>2</sup>&frasl;<sub>5</sub>',
			  '<sup>3</sup>&frasl;<sub>5</sub>',
			  '<sup>2</sup>&frasl;<sub>3</sub>',
			  '<sup>3</sup>&frasl;<sub>4</sub>'],
		answer: 0
  },
  {
  	question: 'Express 30% as a fraction in its lowest term.',		
  	options: ['<sup>7</sup>&frasl;<sub>10</sub>',
			  '<sup>3</sup>&frasl;<sub>20</sub>',
			  '<sup>7</sup>&frasl;<sub>20</sub>',
			  '<sup>3</sup>&frasl;<sub>10</sub>'],
		answer: 3
  },
  {
  	question: 'Make k the subject of the relation, ky - k = y<sup>2</sup>',		
  	options: ['k = <sup>y<sup>2</sup></sup>&frasl;<sub>y-1</sub>',
			  'k = <sup>y<sup>2</sup></sup>&frasl;<sub>y + 1</sub>',
			  'k = -<sup>y<sup>2</sup> + 1</sup>&frasl;<sub>y + 1</sub>',
			  'k = <sup>y<sup>2</sup> + 1</sup>&frasl;<sub>y - 1</sub>'],
		answer: 0
  },
  {
  	question: 'The mean of the numbers 5, 2x, 4 and 3 is 5. Find the value of x',
		options: ['3',
				  '4',
				  '5',
				  '8'],
		answer: 1
  },
  {
  	question: 'Find the rule of the mapping:',		
  	options: ['y = 2x + 2',
			  'y = -2x + 2',
			  'y = 4x',
			  'y = -2x + 5'],
		answer: 3,
		img: 'img/mapping.jpg'
  },
  {
  	question: 'The two sides of a parallelogram are 4.8m an 7.2m long. Find its perimeter.',
		options: ['48.0m',
				  '34.6 m',
				  '24.0 m',
				  '17.3m'],
		answer: 2
  },
  {
  	question: ' A tank in the form of a cuboid has length 6m and breadth 4m. If the volume of the tank is 36m<sup>3</sup>, find the height.',		
  	options: ['0.67m',
			  '1.5m',
			  '1.8m',
			  '5.0m'],
		answer: 1
  },
  {
  	question: 'If the bearing of A from B is 240\xB0, find the bearing of B from A.',
		options: ['040\xBA',
				  '060\xBA',
				  '120\xBA',
				  '300\xBA'],
		answer: 1
  },
  {
  	question: 'Find the truth set of the inequality 2y + 5 < 4y - 5.',		
  	options: ['{y:y>5}',
			  '{y:y<5}',
			  'y:y>1',
			  'y:y>0'],
		answer: 0
  },
  {
  	question: 'Find the gradient of the straight line which passes through the points (-3,4) and (3,-2).',		
  	options: ['2',
			  '1',
			  '-2',
			  '-1'],
		answer: 3
  },
  {
  	question: 'If 6:8 = r:48, find the value of r.',		
  	options: ['36',
			  '34',
			  '14',
			  '12'],
		answer: 0
  },
  {
  	question: 'Find \u2220QPS in the diagram.',		
  	options: ['70\xBA',
			  '40\xBA',
			  '35\xBA',
			  '20\xBA'],
		answer: 1,
	img:'img/angles.png'
  },
  {
  	question: 'A man travelled a distance of 8km in an hour. How long will it take him to cover a distance of 12km, travelling at the same speed?',
		options: ['1<sup>1</sup>&frasl;<sub>3</sub>hrs',
				  '1<sup>1</sup>&frasl;<sub>2</sub>hrs',
				  '1<sup>3</sup>&frasl;<sub>4</sub>hrs',
				  '2 hrs'],
		answer: 1
  },
  {
  	question: ' A number is selected at random from: 25,26,27,28\u2026 35. Find the probability that the number selected is a prime number.',
		options: ['<sup>6</sup>&frasl;<sub>11</sub>',
				  '<sup>3</sup>&frasl;<sub>11</sub>',
				  '<sup>2</sup>&frasl;<sub>11</sub>',
				  '<sup>1</sup>&frasl;<sub>11</sub>'],
		answer: 2
  },
  {
  	question: 'Express <sup>12</sup>&frasl;<sub>25</sub> in decimal fraction.',
		options: ['0.0408',
				  '0.048',
				  '0.408',
				  '0.48'],
		answer: 3
  },
  {
  	question: 'Find the diameter of a circle whose circumference is 88cm.[take \u03C0 = <sup>22</sup>&frasl;<sub>7</sub>]',
		options: ['14 cm',
			  	  '22 cm',
				  '28 cm',
				  '20 cm'],
		answer: 2
  },
  {
  	question: 'When twelve is subtracted from three times a certain number and the result is divided by four, the answer is eighteen. Find the number.',
		options: ['84',
				  '40',
				  '28',
				  '20'],
		answer: 2
  },
  {
  	question: 'In the diagram, line MN is parallel to line TU, line MN at O and Angle MQS = 115\xB0.Find Angle OTU',
		options: ['65\xB0',
				  '55\xB0',
				  '45\xB0',
				  '25\xB0'],
		answer: 0,
		img:'img/angles_.png'
  },
  {
  	question: 'Given that r = (<sup>-3</sup><sub>-5</sub>) and t = (<sup>3</sup><sub>5</sub>), find r + t.',		
  	options: ['(<sup>-6</sup><sub>10</sub>)',
			  '(<sup>-6</sup><sub>-10</sub>)',
			  '(<sup>0</sup><sub>-10</sub>)',
			  '(<sup>6</sup><sub>10</sub>)'],
		answer: 2
  },
  {
  	question: 'A trader sold 90 oranges at 3 for GH\xA2 0.75. How much did she get from selling all the oranges?',		
  	options: ['GH\xA222.50',
			  'GH\xA267.50',
			  'GH\xA275.00',
			  'GH\xA2225.50'],
		answer: 0
  },
  {
  	question: 'Express 72 as a product of prime factors',		
  	options: ['2<sup>3</sup> \xD7 3<sup>2</sup>',
			  '2<sup>2</sup> \xD7 3<sup>3</sup>',
			  '2<sup>2</sup> \xD7 3<sup>2</sup>',
			  '2 \xD7 3'],
		answer: 0
  },
  {
  	question: 'Simplify: 3a \xD7 24ab.',
		options:['27 ab<sup>2</sup>',
				 '27a<sup>2</sup>b',
				 '72ab<sup>2</sup>',
				 '72a<sup>2</sup>b'],
		answer: 3
  },
  {
  	question: 'Simplify: (<sup>-2</sup><sub>3</sub>) + (<sup>-1</sup><sub>5</sub>)',
		options:['(-3 - 2(<sup>-3</sup><sub>-2</sub>)',
				 '(<sup>-1</sup><sub>2</sub>)',
				 '(<sup>-3</sup><sub>8</sub>)',
				 '(<sup>-1</sup><sub>-2</sub>)'],
		answer: 2
  },
  {
  	question: 'Multiply 247 by 32',
		options:['6916',
				 '7804',
				 '7904',
				 '1235'],
		answer: 2
  },
  {
  	question: 'Evaluate (0.07 \xD7 0.02) \xF7 14',
		options:['0.01',
				 '0.001',
				 '0.0001',
				 '0.00001'],
		answer: 2
  },
   {
  	question: 'In a class of 23 students, the girls were 7 more than the boys. How many boys were in the class?',
		options:['8',
				 '15',
				 '16',
				 '30'],
		answer: 0
  },
   {
  	question: 'Express 30 minutes as a percentage of 3 hours 20 minutes.',
		options:['12.5%',
				 '15%',
				 '16<sup>2</sup>&frasl;<sub>3</sub>',
				 '20%'],
		answer: 1
  },
   {
  	question: 'Find the Least Common Multiple (LCM) of 2, 3 and 5.',
	       options:['6',
				 '12',
				 '24',
				 '30'],
		answer: 3
   },
   {
  	question: ' The simple interest on GH\xA2 450.00 for 4 years is GH\xA2 45.00, find the rate of interest.',
	       options:['2.5%',
				 '10%',
				 '25%',
				 '6.5%'],
		answer: 0
   },
   {
  	question: 'Find the median of the following numbers: 46, 68, 34, 37, 76 and 81.',
	       options:['35.5',
				 '57',
				 '67',
				 '68'],
		answer: 1
   },
   {
  	question: 'In the Venn diagram M and N are the subsets of the universal set U.' + '<br />' + ' Find M\u2229N',
	       options:['{7}',
				 '{2,7}',
				 '{3,5,8}',
				 '{1,2,3,4,5,6,7,8,9}'],
		answer: 1,
		img: 'img/venn_diagram.png'
   },
   {
  	question: 'How many members are on the set N?',
	       options:['2',
				 '3',
				 '4',
				 '6'],
		answer: 3,
		img:'img/venn_diagram.png'
   },
]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     