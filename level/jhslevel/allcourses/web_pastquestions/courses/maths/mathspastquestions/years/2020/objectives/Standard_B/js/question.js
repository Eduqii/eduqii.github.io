

//Array of Objects
const quiz = [
  {
  	question:'Which of the following is the set of factors of 12?',
  	options:['{12, 6, 4, 3, 2, 1}', '{12, 6, 4, 3, 2}', '{12, 6, 4, 2}', '{6, 4, 2, 1}'],
  	answer:0
  },
  {	
  	question: 'Which of the following describes the relationship between the sets A and B in the Venn diagram below?',
	options:[ 'A \u2282 B','A \u2229 B = 5', 'A \u2229 B = \u2205', 'A \u222A B = {1,2,3,4,5,6,7}'],
	answer:2,
	img: 'img/venn_diagram.jpg'
  },
  {
  	question:'Mark is 30 years old. Yaw is half as old as Mark. Paul is 10 years older than Yaw. How old is Paul?',
  	options:['30 years',
		 ' 25 years',
		 ' 20 years',
		 '15 years'],
  	answer:1
  },
  {
  	question:'How many lines of symmetry does a rectangle have?',
  	options:[ '1',
		 '2',
		 '3',
		 '4'],
  	answer:1
  },
  {
  	question:'Which of the following is not a prime number?',
  	options:[ '3',
		 '5',
		'7',
		 '9'],
  	answer:3
  },
  {
  	question: 'If x \u2208 { 1, 2, 3, 4, 5 }, find the truth set of 2x+1 \x3C 7',
		options: ['{ 1, 2 }',
		 '{ 2, 3 }',
		 '{ 1, 2, 3 }',
		'{ 3 }'],
		answer: 0
  },
  {
  	question: 'In how many years will \u20B55,0000.00 yield a simple interest of \u20B51,000.00 at a rate of 5% per annum.',
	 options: [ '4 years',
		 ' 5 years',
		 '10 years',
		 '25 years'],
		answer: 0
  },
  {
  	question: 'Make \"M\" the subject of the relation',
		options: [ 'F = <sup>T</sup>&frasl;<sub>S</sub> - M',
		 'M = <sup>T</sup>&frasl;<sub>S</sub> - F',
		 'M = <sup>FS - T</sup>&frasl;<sub>S</sub>',
		 'M = F - <sup>T</sup>&frasl;<sub>S</sub>'],
		answer: 1
  },
  {
  	question: 'What property of arithmetic operation is illustrated by' + '<br />' + '<br />' + ' a(b + c) = ab + ac',
		options: ['Addition',
		 'Associative',
		 ' Commutative',
		 'Distributive'],
		answer: 3
  },
  {
  	question: 'Simplify\n\n 15<sup>9</sup> \xF7 15<sup>7</sup>',
		options: ['30',
		 '63',
		 ' 225',
		 '240'],
		answer: 2
  },
  {
  	question: 'If <sup> 1 </sup>&frasl;<sub> x </sub> = 1\xBD, \n find x',
		options: [' 3',
		 ' <sup>3</sup>&frasl;<sub>2</sub>',
		 '<sup>4</sup>&frasl;<sub>3</sub>',
		 '<sup>2</sup>&frasl;<sub>3</sub>'],
		answer: 3
  },
  {
  	question: 'Calculate the size of an exterior angle of a regular pentagon.',
		options: [' 72\xBA',
		 '90\xBA',
		 '108\xBA',
		 '360\xBA'],
		answer: 0
  },
  {
  	question: 'Factorise \n x<sup>2</sup> - 5x + 6',
		options: ['{x + 3}{x - 2}',
		 '{x - 2}{x - 3}',
		 '{x + 1}{x - 6 }',
		'{x + 2}{x + 3}'],
		answer: 1
  },
  {
  	question: 'Kwame, Atsu and Kojo shared a profit of ',
		options: ['\xA262,500.00',
		 '\xA2125,000.00',
		 '\xA2187,500.00',
		 '\xA225,000.00'],
		answer: 3
  },
  {
  	question: 'Use the identity \n a<sup>2</sup> - b<sup>2</sup> = (a+b)(a-b) to evaluate 83<sup>2</sup> - 17<sup>2</sup>',
		options: ['660',
		 '6,600',
		 '7,718',
		 '7,600'],
		answer: 1
  },
  {
  	question: 'What is the probability of obtaining a prime number when a fair die is thrown once',
		options: ['\xBC',
		 ' 	\xBD',
		 '<sup>1</sup>&frasl;<sub>3</sub>',
		 '  <sup>1</sup>&frasl;<sub>6</sub>'],
		answer: 1
  },
  {
  	question: 'The following are the scores obtained by girls in a beauty contest: 12, 16, 19, 14, 17, 8, 11, 19. What is the probability of obtaining a score of 19?',
		options: ['<sup>1</sup>&frasl;<sub>9</sub>',
		 '<sup>1</sup>&frasl;<sub>8</sub>',
		 '<sup>1</sup>&frasl;<sub>4</sub>',
		 '<sup>19</sup>&frasl;<sub>53</sub>'],
		answer: 2
  },
  {
  	question: 'Express 25 as a percentage of 75',
		options: ['300%',
		 '100%',
		 '50%',
		 ' 33.3%'],
		answer: 3
  },
  {
  	question: 'Find the value of M given that\n M = (3<sup>6</sup> \xF7 3<sup>4</sup>) \xD7 27',
		options: ['3<sup>1</sup>',
		 ' 3<sup>2</sup>',
		 '3<sup>5</sup>',
		 '3<sup>6</sup>'],
		answer: 1
  },
  {
  	question: 'Express 0.0043216 in standard form.',
		options: ['4.3216 x 10<sup>-4</sup>',
		 '4.3216 x 10<sup>-3</sup>',
		 '4.3216 x 10',
		 '4.3216 x 10<sup>3</sup>'],
		answer: 1
  },
  {
  	question: 'Given that a = 2 and b = 3, evaluate (2a + b)(a-2b)',
		options: ['28',
		 '8',
		 '-7',
		 '-28'],
		answer: 3
  },
  {
  	question: 'Which of the following is illustrated on the number line below?',
		options: ['-1 \x3C X  \x3C <sup>2</sup>&frasl;<sub>3</sub>',
		 '-1 \u2264 X \x3C <sup>3</sup>&frasl;<sub>2</sub>',
		 '-1 \x3C X \u2264 <sup>3</sup>&frasl;<sub>2</sub>',
		 '-1 \u2264 X \u2264 <sup>3</sup>&frasl;<sub>2</sub>'],
		answer: 1,
		img: 'img/numberLine.jpg'
  },
  {
  	question: 'In the diagram, A is the centre of the circle with radius 20 cm. If angle BAC is 90\xB0, find the perimeter of the shaded sector.[Take \u03C0 = 3.14]',
		options: ['7.14 cm',
		 '31.8 cm',
		 '40.0 cm',
		 '51.4 cm'],
		answer: 4,
		img: 'img/circle.jpg'
  },
  {
  	question: 'In triangle ABC, |AB| = |BC| = 5 cm and |AC| = 8 cm. Find |BD|',
		options: ['3 cm',
		 '4 cm',
		 '9 cm',
		 '33 cm'],
		answer: 0,
		img: 'img/triangle.jpg'
  },
  {
  	question: 'Write \xA235,632.00 correct to the nearest thousand cedis.',
		options: ['\xA240,000.00',
		 '\xA236,000.00',
		 '\xA235,600.00',
		 '\xA235,000.00'],
		answer: 1
  },
  {
  	question: 'Solve for x if \n 2x + 5 = 3x - 7',
		options: ['12',
		 '2<sup>2</sup>&frasl;<sub>5</sub>',
		 '<sup>2</sup>&frasl;<sub>5</sub>',
		 '-2<sup>2</sup>&frasl;<sub>5</sub>'],
		answer: 0
  },
  {
  	question: '[<sup>2</sup>&frasl;<sub>3</sub> - <sup>1</sup>&frasl;<sub>4</sub>] \xD7 <sup>5</sup>&frasl;<sub>6</sub>',
		options: ['<sup>1</sup>&frasl;<sub>2</sub>',
		 '<sup>1</sup>&frasl;<sub>5</sub>',
		 '<sup>5</sup>&frasl;<sub>12</sub>',
		 '<sup>25</sup>&frasl;<sub>72</sub>'],
		answer: 0
  },
  {
  	question: 'A boy walked 7 km on a bearing 060\xBA. Which of the following diagrams shows his direction?',
		options: ['A',
		 'B',
		 'C',
		 'D'],
		answer: 2,
		img: 'img/vectorA.jpg'
  },
  {
  	question: 'In the following diagram G1OH1 is an enlargement of triangle GOH with scale factor k. If |GG| = 5cm, |GO| = 2cm and |G1H1| = 1cm, what is the value of k?',
		options:['-<sup>5</sup>&frasl;<sub>2</sub>',
		 '-<sup>3</sup>&frasl;<sub>2</sub>',
		 '-<sup>2</sup>&frasl;<sub>5</sub>',
		 '<sup>3</sup>&frasl;<sub>2</sub>'],
		answer: 1,
		img: 'img/enlargement.jpg'
  },
  {
  	question: 'If 14x = 9<sub>ten</sub> find x.',
		options: ['Five',
		 'Eight',
		 'Seven',
		 'Six'],
		answer: 0
  },
  {
  	question: 'How many faces has a cuboid?',
		options: ['6',
		 '8',
		 '12',
		 '16'],
		answer: 0
  },
  {
  	question: 'Which of the following is a factor of the expression \n\n ac - 2bc + ad - 2bd ?',
		options: ['c - d',
		 'a - 2b',
		 'a + b',
		 'a + 2b'],
		answer: 1
  },
  {
  	question: 'Three boys weeded a piece of land in 4 hours. How long would it take 18 boys to weed the same piece of land, weeding at the same rate?',
		options: ['<sup>2</sup>&frasl;<sub>3</sub>hr',
		 '3<sup>1</sup>&frasl;<sub>3</sub>hr',
		 '4<sup>2</sup>&frasl;<sub>3</sub>hr',
		 '22 hr'],
		answer: 0
  },
  {
  	question: 'Find the size of the angle \"a\" in the diagram below',
		options: ['30\xB0',
		 '60\xB0',
		 '90\xB0',
		 '120\xB0'],
		answer: 1,
		img: 'img/straightLine.jpg'
  },
  {
  	question: 'Which of the following is the net of a cube?',
		options: ['A',
		 'B',
		 'C',
		 'D'],
		answer: 1,
		img: 'img/cube.jpg'
  },
  {
  	question: 'Use the mapping below to answer this question.\n Find the value of x',
		options: ['30<sub>five</sub>',
		 '100<sub>five</sub>',
		 '110<sub>five</sub>',
		 '128<sub>five</sub>'],
		answer: 4,
		img: 'img/mapping.jpg'
  },
  {
  	question: 'In the diagram below, find the size of the angle marked \"e\"',
		options: ['52\xB0',
		 '56\xB0',
		 '72\xB0',
		 '128\xB0'],
		answer: 3,
		img: 'img/angle.jpg'
  },
  {
  	question: 'If the area of the figure above is 60cm<sup>2</sup>, find x.',
		options: ['8 cm',
		 ' 9 cm',
		 '12 cm',
		 '16 cm'],
		answer: 0,
		img: 'img/rectangle.jpg'
  },
  {
  	question: 'The mean of the numbers 4,3,3,x is 5. Find x',
		options: ['20',
		 '10',
		 '5',
		 '4'],
		answer: 1
  },
  {
  	question: 'If a number is selected at random from the table below, what is the probability that the number is 5?',
		options: ['<sup>8</sup>&frasl;<sub>25</sub>',
		 '<sup>4</sup>&frasl;<sub>25</sub>',
		' <sup>1</sup>&frasl;<sub>12</sub>',
		 '<sup>2</sup>&frasl;<sub>15</sub>'],
		answer: 3,
		img: 'img/frequency.jpg'
  } 
]