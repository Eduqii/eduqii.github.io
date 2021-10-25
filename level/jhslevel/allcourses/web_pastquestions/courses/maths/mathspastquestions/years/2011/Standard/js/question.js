

//Array of Objects
const quiz = [
   {
		question: 'Which of the following is the set of prime factors of 12?',
		options: ['{2, 3}',
		'{1, 2, 3}',
		 '{1, 2, 4, 6}',
		 '{2, 3, 4, 6}'],
		answer: 0
	},
	
	{
		question: ' Expand 3a (a – 4b)',
		options:[ '3a – 12ab',
		 '3a<sup>2</sup> – 12ab',
		 '3a<sup>2</sup> – 12b',
		 '3a<sup>2</sup> – 12a'],
		answer: 1
	},
	{
		question: 'Express 5 as a percentage of 4',
		options: ['125%',
		 '120%',
		 '25%',
		 '20%'],
		answer: 0
	},
	{
		question: 'Express 2700 as a product of prime numbers.',
		options:['2<sup>2</sup> \xD7 3<sup>2</sup> \xD7 5<sup>2</sup>',
		 '2 \xD7 3<sup>3</sup> \xD7 5<sup>2</sup>',
		 '2<sup>2</sup> \xD7 3<sup>3</sup> \xD7 5<sup>2</sup>',
		 '2<sup>2</sup> \xD7 3<sup>2</sup> \xD7 5<sup>3</sup>'],
		answer:2
	},
	{
		question: 'The ratio of mangoes to oranges in a basket is 3:2. If there are 36 mangoes, how many oranges are in the basket?',
		options:['90',
		 '60',
		 '24',
		'12'],
		answer: 2
	},
	{
		question: 'Express 0.125 as a fraction in its lowest form.',
		options:['<sup>1</sup>&frasl;<sub>8</sub>',
		 '<sup>1</sup>&frasl;<sub>9</sub>',
		 '<sup>1</sup>&frasl;<sub>12</sub>',
		 '<sup>1</sup>&frasl;<sub>16</sub>'],
		answer: 0
	},
	{
		question: 'Convert 222<sub>5</sub> to a number in base ten.',
		options: ['30',
		 '52',
		 '60',
		 '62'],
		answer: 3
	},
	{
		question: 'If A = {18, 19, 20} and B = {15, 16, 17}, find A \u2229 B',
		options:['{15, 16, 17, 18, 19, 20}',
		'{15, 16, 18, 19}',
		'{18, 19}',
		'{}'],
		answer: 3
	},
	{
		question: 'Simplify 	3<sup>9</sup> \xF7 3<sup>3</sup>',
		options: ['3<sup>27</sup>',
		 '3<sup>12</sup>',
		 '3<sup>6</sup>',
		 '3<sup>3</sup>'],
		answer: 2
	},
	{
		question: 'An article which costs GH\xA2 25.00 was sold for GH\xA2 35.00. Find the percentage profit made.',
		options: ['10%',
		 '28%',
		 '40%',
		 '70%'],
		answer: 2
	},
	{
		question: ' Factorize completely 	b<sup>2</sup> + fb - mb - fm ',
		options: ['(b – f )(b – m)',
		 ' (b + f )(b – m)',
		 '(b + f )(m – b)',
		 '(b + f )(m + b)'],
		answer: 1
	},
	{
		question: 'Simplify: -13 – (-3) + (-10)',
		options: ['-26',
		 '-20',
		 '-10',
		 '-6'],
		answer: 1
	},
	{
		question: 'Find the HCF of 3<sup>3</sup> \xD7 5<sup>2</sup> and 3<sup>2</sup> \xD7 5<sup>4</sup>',
		options: ['3<sup>2</sup> \xD7 5<sup>2</sup>',
		 '3<sup>3</sup> \xD7 5<sup>2</sup>',
		 '3<sup>2</sup> \xD7 5<sup>4</sup>',
		 '3<sup>5</sup> \xD7 5<sup>6</sup>'],
		answer: 0
	},
	{
		question: 'State the rule for the mapping',
		options: ['x \u2192 15x',
		 'x \u2192 15 + x',
		 'x \u2192 <sup>15</sup>&frasl;<sub>x</sub>',
		 'x \u2192 10 + 5x'],
		answer: 0
	},
	{
		question: 'Solve the inequality x - <sup>1</sup>&frasl;<sub>3</sub> \u2265 <sup>2</sup>&frasl;<sub>3</sub> - x',
		options: ['x \u2264 <sup>1</sup>&frasl;<sub>2</sub>',
		 'x \u2264 <sup>2</sup>&frasl;<sub>3</sub>',
		 'x \u2265 <sup>1</sup>&frasl;<sub>2</sub>',
		 'x \u2265 <sup>2</sup>&frasl;<sub>3</sub>'],
		answer: 2
	},
	{
		question: 'Find the area of a square, if its perimeter is 28 cm.',
		options: ['784cm<sup>2</sup>',
		 '196cm<sup>2</sup>',
		 '49cm<sup>2</sup>',
		 '14cm<sup>2</sup>'],
		answer: 2
	},
	{
		question: 'Simplify: <sup>1</sup>&frasl;<sub>3</sub>(<sup>1</sup>&frasl;<sub>2</sub> - <sup>1</sup>&frasl;<sub>3</sub>) - <sup>1</sup>&frasl;<sub>3</sub>(<sup>1</sup>&frasl;<sub>3</sub> - <sup>1</sup>&frasl;<sub>2</sub>)',
		options: ['-<sup>1</sup>&frasl;<sub>9</sub>',
		 '-<sup>1</sup>&frasl;<sub>18</sub>',
		 '<sup>1</sup>&frasl;<sub>18</sub>',
		 '<sup>1</sup>&frasl;<sub>9</sub>'],
		answer: 3
	},
	{
		question: 'Make n the subject of the relation \u2205 = 180 - <sup>360</sup>&frasl;<sub>n</sub>',
		options: ['<sup>\u2205 + 180</sup>&frasl;<sub>2</sub>',
		 '<sup>\u2205 - 180</sup>&frasl;<sub>2</sub>',
		 '<sup>360</sup>&frasl;<sub>180 - \u2205 </sub>',
		 '<sup>360</sup>&frasl;<sub>180 + \u2205'],
		answer: 2
	},
	{
		question: ' If 	R =<sup>h</sup>&frasl;<sub>2</sub> + <sup>d<sup>2</sup>&frasl;<sub>8h</sub>, find R when d = 8 and h = 6.',
		options: ['3<sup>1</sup>&frasl;<sub>6</sub>',
		 '4<sup>1</sup>&frasl;<sub>3</sub>',
		 '4<sup>3</sup>&frasl;<sub>4</sub>',
		 '4<sup>9</sup>&frasl;<sub>16</sub>'],
		answer: 1
	},
	{
		question: 'Eight copies of a book cost GH\xA2 16.00. Find the cost of 5 copies.',
		options: ['GH\xA2 2.00',
		 'GH\xA2 3.20',
		 'GH\xA2 5.00',
		 'GH\xA2 10.00'],
		answer: 3
	},
	{
		question: 'Solve the equation <sup>1</sup>&frasl;<sub>5</sub>(2 + y) = <sup>1</sup>&frasl;<sub>2</sub>(y - 1)',
		options: ['-3',
		 '<sup>3</sup>&frasl;<sub>4</sub>',
		 '<sup>5</sup>&frasl;<sub>3</sub>',
		 '3'],
		answer: 3
	},
	{
		question: 'The gradient of the straight line that passes through points A(3,2) and B(4,8) is',
		options: ['-<sup>1</sup>&frasl;<sub>6</sub>',
		 '-<sup>1</sup>&frasl;<sub>2</sub>',
		 '2',
		 '6'],
		answer: 3
	},
	{
		question: 'A car is travelling at 60 km per hour. How far does it travel in 2<sup>1</sup>&frasl;<sub>2</sub> hours?',
		options: ['30 km',
		 '60 km',
		 '120 km',
		 '150 km'],
		answer: 3
	},
	{
		question: 'In the diagram below RS and WV are parallel lines. The value of the angle marked a is',
		options: ['38\xBA',
		 '52\xBA',
		 '58\xBA',
		 '64\xBA'],
		answer: 1,
		img: 'img/angles.png'
	},
	{
		question: 'Given that s = (<sup>5</sup><sub>2n</sub>) and b = (<sup>2n - 1</sup><sub>6</sub>). If a = b, find the values of n.',
		options: ['6',
		 '3',
		 '2',
		 '1'],
		answer: 1
	},
	{
		question: 'Find the volume of a cube of side 5 cm.',
		options: ['10 cm<sup>3</sup>',
		 '15 cm<sup>3</sup>',
		 '25 cm<sup>3</sup>',
		 '125 cm<sup>3</sup>'],
		answer: 3
	},
	{
		question: 'In the diagram below, AB and CD are two intersecting straight lines. Find the value of the angle marked y.',
		options: ['130\xBA',
		 '115\xBA',
		 '65\xBA',
		 '60\xBA'],
		answer: 1,
		img:'straightLine.png'
	},
	{
		question: 'Kwame and Ama shared an amount of money in the ratio 5:4 respectively. If Kwame had GH\xA2 9.00, how much did they share?',
		options: ['GH\xA2 16.20',
		 'GH\xA2 36.00',
		 'GH\xA2 45.00',
		 'GH\xA2 81.00'],
		answer: 0
	},

{
		question: 'The area of the trapezium above is',
		options: ['120 cm<sup>2</sup>',
		 '180 cm<sup>2</sup>',
		 '256 cm<sup>2</sup>',
		 '360 cm<sup>2</sup>'],
		answer: 3,
		img:'img/trapezium.png'
	},
	{
		question: 'If s = (<sup>2</sup><sub>-5</sub>) and b = (<sup>-2</sup><sub>5</sub>), calculate 2r - 3s',
		options: ['(<sup>-10</sup><sub>-25</sub>)',
		 '(<sup>-2</sup><sub>-25</sub>)',
		 '(<sup>10</sup><sub>-25</sub>)',
		 '(<sup>10</sup><sub>25</sub>)'],
		answer: 2
	},
	{
		question: 'There are 10 red and 15 green balls in a bag. Find the probability of selecting at random a red ball from the bag.',
		options: ['<sup>3</sup>&frasl;<sub>5</sub>',
		 '<sup>2</sup>&frasl;<sub>5</sub>',
		 '<sup>1</sup>&frasl;<sub>10</sub>',
		 '<sup>1</sup>&frasl;<sub>25</sub>'],
		answer: 1
	},
	{
		question: 'The table below gives the distribution of ages of students in a class.' + '<br />' + 
		'<table>' + '<tr>' + '<td>' + 'Ages (years)' + '</td>' + '<td>' + '13' + '</td>' + '<td>' + '14' + '</td>' + '<td>' + '15'+ '</td>' + '<td>' + '16' + '</td>' + + '<td>' + '17' + '</td>' + '</tr>' +
		'<tr>' + '<td>' + 'Number of students' + '</td>' + '<td>' + '3'+ '</td>' + '<td>' + '10' + '</td>' + '<td>' + '6' + '</td>' + '<td>' + '7' + '</td>' + '<td>' + '4' + '</td>' + '</tr>' + '</table>' + '<br />' + '<br />' + 
		'How many students are in the class?',
		options: ['20',
		 '30',
		 '45',
		 '75'],
		answer: 1
	},
	{
		question: 'The table below gives the distribution of ages of students in a class.' + '<br />' + 
		'<table>' + '<tr>' + '<td>' + 'Ages (years)' + '</td>' + '<td>' + '13' + '</td>' + '<td>' + '14' + '</td>' + '<td>' + '15'+ '</td>' + '<td>' + '16' + '</td>' + + '<td>' + '17' + '</td>' + '</tr>' +
		'<tr>' + '<td>' + 'Number of students' + '</td>' + '<td>' + '3'+ '</td>' + '<td>' + '10' + '</td>' + '<td>' + '6' + '</td>' + '<td>' + '7' + '</td>' + '<td>' + '4' + '</td>' + '</tr>' + '</table>' + '<br />' + '<br />' + 
		'What is the modal age?',
		options: ['14',
		 '15',
		 '16',
		 '17'],
		answer: 0
	},
	{
		question: 'The table below gives the distribution of ages of students in a class.' + '<br />' + 
		'<table>' + '<tr>' + '<td>' + 'Ages (years)' + '</td>' + '<td>' + '13' + '</td>' + '<td>' + '14' + '</td>' + '<td>' + '15'+ '</td>' + '<td>' + '16' + '</td>' + + '<td>' + '17' + '</td>' + '</tr>' +
		'<tr>' + '<td>' + 'Number of students' + '</td>' + '<td>' + '3'+ '</td>' + '<td>' + '10' + '</td>' + '<td>' + '6' + '</td>' + '<td>' + '7' + '</td>' + '<td>' + '4' + '</td>' + '</tr>' + '</table>' + '<br />' + '<br />' + 
		'If a student is chosen at random from the class, what is the probability that the student is 15 years old?',
		options: ['<sup>1</sup>&frasl;<sub>5</sub>',
		 '<sup>1</sup>&frasl;<sub>3</sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>',
		 '<sup>2</sup>&frasl;<sub>3</sub>'],
		answer: 0
	},
	{
		question: 'A length of a ribbon is 16.8 m long. How many ribbons 0.36 m long can be cut from it?',
		options: ['0.46',
		 '4.60',
		 '46',
		 '460'],
		answer: 2
	},
	{
		question: 'A refrigerator was sold for GH\xA2 200.00 at a loss of 10%. Find the cost price.',
		options: ['GH\xA2 180.00',
		 'GH\xA2 190.00',
		 'GH\xA2 220.00',
		 'GH\xA2 222.22'],
		answer: 3
	},
	{
		question: 'The diagram below is the net of a',
		options: ['cone',
		 'cuboid',
		 'rectangular prism',
		 'pyramid'],
		answer: 3,
		img:'img/figure.png'
	},
	{
		question: 'What is the value of 7 in the number 832713?',
		options: ['Seven thousand',
		 'Seven hundred',
		 'Seventy',
		 'Seven'],
		answer: 1
	}
	{
		question: 'Write 3560 in standard form.',
		options: ['3.5610<sup>-4</sup>',
		 '3.5610<sup>-3</sup>',
		 '3.5610<sup>3</sup>',
		 '3.5610<sup>4</sup>'],
		answer: 2
	},
	{
		question: 'Correct 0.02751 to three decimal places',
		options: [' 0.027',
		 '0.028',
		 ' 0.03',
		 '0.28'],
		answer: 1
		
	},
]