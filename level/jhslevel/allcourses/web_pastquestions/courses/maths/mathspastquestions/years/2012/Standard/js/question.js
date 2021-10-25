

//Array of Objects
const quiz = [
  {
		question: 'If P = {2, 3, 5, 7}and Q = {2, 4, 6, 8}, find P 	\u2229 Q',
		options: ['{2}',
		 '{3}',
		 '{4}',
		 '{5}'],
		answer: 0
	},
	
{
		question: 'Which of the following numbers is an integer?',
		options: ['<sup>-5</sup>&frasl;<sub>4</sub>',
		 '<sup>-2</sup>&frasl;<sub>3</sub>',
		 '0.5',
		 '1'],
		answer: 3
	},

	{
		question: 'Find the Lowest Common Multiple (LCM) of 2<sup>2</sup> \xD7 3 \xD7 5<sup>2</sup> and 2<sup>3</sup> \xD7 3<sup>2</sup> \xD7 5',
		options: ['2<sup>2</sup> \xD7 3 \xD7 5',
		 ' 2<sup>2</sup> \xD7 3<sup>3</sup> \xD7 5<sup>2</sup>',
		 '2<sup>3</sup> \xD7 3 \xD7 5',
		 '2<sup>3</sup> \xD7 3<sup>2</sup> \xD7 5<sup>2</sup>'],
		answer: 3
	},

	{
		question: 'How many diagonals are in a rectangle?',
		options: ['1',
		 '2',
		 '3',
		 '4'],
		answer: 1
	},

	{
		question: 'Simplify – 4 (3 – 5) + 10 – 3 (7 + 4) + 30',
		options: ['-1',
		 '15',
		 '56',
		 '65'],
		answer: 1
	},

	{
		question: 'An iron rod 15 m long is divided into 12 equal parts. How long is each part?',
		options: ['0.80 m',
		 '1.25 m',
		 '1.50 m',
		 '3.00 m'],
		answer: 1
	},

	{
		question: 'Convert 42 to a base two numeral',
		options: ['1001010<sub>2</sub>',
		 '1010010<sub>2</sub>',
		 '1010100<sub>2</sub>',
		 '101010<sub>2</sub>'],
		answer: 3
	},

	{
		question: 'Simplify <sup>5<sup>7</sup> \xD7 5<sup>4</sup></sup>&frasl;<sub>5<sup>2</sup></sub>',
		options: ['5<sup>7</sup>',
		 '5<sup>8</sup>',
		 '5<sup>9</sup>',
		 '5<sup>13</sup>'],
		answer: 2
	},

	{
		question: 'A tank contains 400 litres of water. If 100 litres is used, what percentage is left?',
		options: ['25%',
		 '30%',
		 '40%',
		 '75%'],
		answer: 3
	},

	{
		question: ' Triangle ABC is a right-angled triangle. Find the length of AC.',
		options: ['1 cm',
		 '5 cm',
		 '7 cm',
		 '12 cm'],
		answer: 1
	},

	{
		question: 'Arrange the following fractions in descending order of magnitude: <sup>2</sup>&frasl;<sub>3</sub>, <sup>5</sup>&frasl;<sub>7</sub>, <sup>2</sup>&frasl;<sub>5</sub>, <sup>1</sup>&frasl;<sub>2</sub>',
		options: ['<sup>5</sup>&frasl;<sub>7</sub>, <sup>2</sup>&frasl;<sub>5</sub>, <sup>2</sup>&frasl;<sub>3</sub>, <sup>1</sup>&frasl;<sub>2</sub>',
		 '<sup>5</sup>&frasl;<sub>7</sub>, <sup>2</sup>&frasl;<sub>3</sub>, <sup>1</sup>&frasl;<sub>2</sub>, <sup>2</sup>&frasl;<sub>5</sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>, <sup>2</sup>&frasl;<sub>5</sub>, <sup>5</sup>&frasl;<sub>7</sub>, <sup>2</sup>&frasl;<sub>3</sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>, <sup>5</sup>&frasl;<sub>7</sub>, <sup>2</sup>&frasl;<sub>3</sub>, <sup>2</sup>&frasl;<sub>5</sub>'],
		answer: 1
	},

	{
		question: 'Find the image of 3 under the mapping, x \u2192 10 - 2x',
		options: ['4',
		 '5',
		 '8',
		 '16'],
		answer: 0
	},

	{
		question: 'Simplify <sup>1</sup>&frasl;<sub>3</sub> + <sup>1</sup>&frasl;<sub>9</sub> + <sup>1</sup>&frasl;<sub>27</sub>',
		options: ['<sup>5</sup>&frasl;<sub>27</sub>',
		 '<sup>7</sup>&frasl;<sub>27</sub>',
		 '<sup>11</sup>&frasl;<sub>27</sub>',
		 '<sup>13</sup>&frasl;<sub>27</sub>'],
		answer: 3
	},

	{
		question: 'If 2x = 5(x – 2) + 7, find the value of x',
		options: ['-5<sup>2</sup>&frasl;<sub>3</sub>',
		 '-1',
		 '1',
		 '5<sup>2</sup>&frasl;<sub>3</sub>'],
		answer: 2
	},

	{
		question: 'The table below shows the day and night temperatures of a town during a week.' + '<br />' + 
		'<table>' + '<tr>' + '<td rowspan="2">' + 'Week day' + '</td>' + '<td>' + 'Temperatures(\xBAC)' + '</td>' + '</tr>' +
		'<tr>' + '<td>' + 'Day' + '</td>' + '<td>' + 'Night' + '</td>' + '</tr>' +
		'<tr>' + '<td>' + 'Monday' + '</td>' + '<td>' + '33' + '</td>' + '<td>' + '24' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Tuesday' + '</td>' + '<td>' + '29' + '</td>' + '<td>' + '25' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Wednesday' + '</td>' + '<td>' + '32' + '</td>' + '<td>' + '23' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Thursday' + '</td>' + '<td>' + '34' + '</td>' + '<td>' + '26' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Friday' + '</td>' + '<td>' + '32' + '</td>' + '<td>' + '24' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Saturday' + '</td>' + '<td>' + '30' + '</td>' + '<td>' + '24' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Sunday' + '</td>' + '<td>' + '30' + '</td>' + '<td>' + '25' + '</td>' + '</tr>' + '<br />' + '<br />' +
		'Find, correct to one decimal place, the average day temperature for the week',
		options: [' 24.4 \xBAC',
		 '30.2 \xBAC',
		 '31.4 \xBAC',
		 '32.2 \xBAC'],
		answer: 2
	},

	{
		question: 'The table below shows the day and night temperatures of a town during a week.' + '<br />' + 
		'<table>' + '<tr>' + '<td rowspan="2">' + 'Week day' + '</td>' + '<td>' + 'Temperatures(\xBAC)' + '</td>' + '</tr>' +
		'<tr>' + '<td>' + 'Day' + '</td>' + '<td>' + 'Night' + '</td>' + '</tr>' +
		'<tr>' + '<td>' + 'Monday' + '</td>' + '<td>' + '33' + '</td>' + '<td>' + '24' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Tuesday' + '</td>' + '<td>' + '29' + '</td>' + '<td>' + '25' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Wednesday' + '</td>' + '<td>' + '32' + '</td>' + '<td>' + '23' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Thursday' + '</td>' + '<td>' + '34' + '</td>' + '<td>' + '26' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Friday' + '</td>' + '<td>' + '32' + '</td>' + '<td>' + '24' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Saturday' + '</td>' + '<td>' + '30' + '</td>' + '<td>' + '24' + '</td>' + '</tr>' + 
		'<tr>' + '<td>' + 'Sunday' + '</td>' + '<td>' + '30' + '</td>' + '<td>' + '25' + '</td>' + '</tr>' + '<br />' + '<br />' +
		'On which day was the change in temperature the least?',
		options: ['Monday',
		 'Saturday',
		 'Sunday',
		 'Tuesday'],
		answer: 3
	},

	{
		question: 'A box contains 30 identical balls of which 16 are white and the rest yellow. If a girl picks a ball at random from the box, what is the probability that it is a yellow ball?',
		options: ['<sup>1</sup>&frasl;<sub>16</sub>',
		 '<sup>7</sup>&frasl;<sub>15</sub>',
		 '<sup>8</sup>&frasl;<sub>15</sub>',
		 '<sup>7</sup>&frasl;<sub>8</sub>'],
		answer: 1
	},

	{
		question: 'Find the truth set of <sup>1</sup>&frasl;<sub>4</sub>(x + 3)\u2264 2x - 1',
		options: ['{x:x\u2264-3}',
		 '{x:x\u2264-1}',
		 '{x:x\u22651}',
		 '{x:x\u22653}'],
		answer: 2
	},

	{
		question: 'The perimeter of the figure below is 71 cm. Find the diameter of the semi-circular portion.[Take \u03C0 = <sup>22</sup>&frasl;<sub>7</sub>]',
		options: ['1.0 cm',
		 ' 3.5 cm',
		 '7.0 cm',
		 '14.0 cm'],
		answer: 3,
		img:'img/2012-semicir.jpg'
	},

	{
		question: 'Simplify <sup>3x</sup>&frasl;<sub>4</sub> - <sup>x - y</sup>&frasl;<sub>3</sub>',
		options: ['<sup>5x - 4y</sup>&frasl;<sub>12</sub>',
		 '<sup>13x - 4y</sup>&frasl;<sub>12</sub>',
		 '<sup>5x + 4y</sup>&frasl;<sub>12</sub>',
		 '<sup>13x + 4y</sup>&frasl;<sub>12</sub>'],
		answer: 2
	},

	{
		question: 'Kojo is 20% heavier than Afua. If Kojo weighs 6 kg, what is Afua’s weight?',
		options: ['4.8 kg',
		 '5.0 kg',
		 '6.0 kg',
		 '7.2 kg'],
		answer: 1
	},

	{
		question: 'Find the volume of a cylinder of height 3 cm and radius 2 cm.',
		options: ['6\u03C0 cm<sup>3</sup>',
		 '12\u03C0 cm<sup>3</sup>',
		 '18\u03C0 cm<sup>3</sup>',
		 '24\u03C0 cm<sup>3</sup>'],
		answer: 1
	},


		{
		question: 'Given the points S(5, -2) and T(3, 2), calculate the gradient of the line ST.',
		options: ['-2',
		 '-<sup>3</sup>&frasl;<sub>5</sub>',
		 '<sup>1</sup>&frasl;<sub>2</sub>',
		 '2'],
		answer: 0
	},

	{
		question: 'Kofi invested GH\xA2 150,000 at 2.5% per annum simple interest. How long will it take this amount to yield an interest of GHKofi invested GH¢ 150,000 at 2.5% per annum simple interest. How long will it take this amount to yield an interest of GHKofi invested GH¢ 150,000 at 2.5% per annum simple interest. How long will it take this amount to yield an interest of GH\xA211,250.00?11,250.00?11,250.00?',
		options: ['2 years',
		 '3 years',
		 '4 years',
		 ' 5 years'],
		answer: 1
	},

	{
		question: 'Express 3.75 as a mixed fraction.',
		options: ['3<sup>1</sup>&frasl;<sub>5</sub>',
		 '3<sup>1</sup>&frasl;<sub>4</sub>',
		 '3<sup>1</sup>&frasl;<sub>3</sub>',
		 '3<sup>3</sup>&frasl;<sub>4</sub>'],
		answer: 0
	},

	{
		question: 'A map is drawn to the scale 1:100,000. What distance in kilometres is represented by 5 cm on the map?',
		options: ['0.5 km',
		 '5.0 km',
		 '50.0 km',
		 '500.0 km'],
		answer: 1
	},

	{
		question: 'Given that r = (<sup>\u2212 3</sup><sub>4</sub>) and (<sup>1</sup><sub>\u2212 3</sub>), find r \u2212 2s',
		options: ['(<sup>\u2212 1 </sup><sub>1</sub>)',
		 '(<sup>\u2212 5</sup><sub>10</sub>)',
		 '<sup>\u2212 2</sup><sub>10</sub>',
		 '<sup>\u2212 1</sup><sub>10</sub>'],
		answer: 1
	},

	{
		question: 'Esi went to the market and bought 500 g of meat, 850 g of fish and 900 g of eggs. What is the total weight of the items she bought in kilograms?',
		options: [' 2.20 kg',
		 ' 2.25 kg',
		 '2.35 kg',
		 '22.50 kg'],
		answer: 1
	},

	{
		question: 'A watch gains 1<sup>1</sup>&frasl;<sub>2</sub>  minutes  minutes per hour. What is the total time gained from 12 noon to 12 midnight in a day?',
		options: ['9 minutes',
		 '15 minutes',
		 '18 minutes',
		 '36 minutes'],
		answer: 2
	},

	{
		question: 'A printing machine prints 600 books in 3 hours. How many books will the machine print in 5 hours?',
		options: ['360 books',
		 '1000 books',
		 '1800 books',
		 '3000 books'],
		answer: 1
	},

	{
		question: 'The bearing of Atoru from Busase is 275\xBA. What is the bearing of Busase from Atoru?',
		options: ['180\xBA',
		 '175\xBA',
		 '095\xBA',
		 '075\xBA'],
		answer: 2
	},

	{
		question: 'In a class of 24 pupils, 10 study French only and 8 study English only. If each pupil studies at least one of the two subjects, how many study English?',
		options: ['12',
		 '14',
		 '16',
		 '18'],
		answer: 1
	},

	{
		question: 'Convert 84 to a base five numeral.',
		options: ['4130<sub>5</sub>',
		 '3014<sub>5</sub>',
		 '314<sub>5</sub>',
		 '114<sub>5</sub>'],
		answer: 2
	},

	{
		question: 'In the diagrams below, triangle A1B1C1 is an enlargement of triangle ABC. Determine the scale factor.',
		options: ['0.50',
		 '0.75',
		 '2.00',
		 '4.00'],
		answer: 2,
		img:'img/enlargement.jpg'
	},

	{
		question: 'Find the least number that must be added to 308 to make it divisible by 19.',
		options: ['4',
		 '7',
		 '15',
		 '18'],
		answer: 2
	},
	{
		question: 'In a school of 940 pupils, the number of girls exceeds the number of boys by 150. How many girls are there in the school?',
		options: ['620',
		 '545',
		 '470',
		 '395'],
		answer: 1
	},
	{
		question: 'Which of the following fractions is equivalent to <sup>3</sup>&frasl;<sub>5</sub> ?',
		options: ['<sup>21</sup>&frasl;<sub>30</sub>',
		 '<sup>12</sup>&frasl;<sub>20</sub>',
		 '<sup>15</sup>&frasl;<sub>45</sub>',
		 '<sup>6</sup>&frasl;<sub>15</sub>'],
		answer: 1
	},
	{
		question: 'In the diagram below, line PQ is parallel to RS and UV is a line drawn through PQ and RS.' + '<br />' + 'Find angle a.',
		options: ['35\xBA',
		 '55\xBA',
		 '135\xBA',
		 '145\xBA'],
		answer: 3,
		img:'img/line.jpg'
	},
	{
		question: 'In the diagram below, line PQ is parallel to RS and UV is a line drawn through PQ and RS.' + '<br />' + 'Angle b and angle c are',
		options: ['alternate angles',
		 'vertically opposite angles',
		 'corresponding angles',
		 'interior opposite angles'],
		answer: 2,
		img:'img/line.jpg'
	},
	{
		question: 'Expand – x(3 – 2x)',
		options: ['\u2212 2x<sup>2</sup> \u2212 3x',
		 '2x<sup>2</sup> \u2212 3x',
		 '\u2212 2x<sup>2</sup> + 3x',
		 '2x<sup>2</sup> + 3x'],
		answer: 0
	}
]