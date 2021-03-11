

//Array of Objects
const quiz = [
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '<b>' + '<br />' + '<br />' + 'One of the bulls………from the herd.',
  	options:['have been strayed',
			 'has been strayed',
			 'have strayed',
			 'has strayed'],
  	answer: 3
  },
  {	
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I saw the dog………….out of the house.',
	options:[ 'run',
			  'is running',
			  'ran',
			  'was running'],
	answer: 0	
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Habib goes to school……train.',
  	options:['by',
			 'on',
			 'with',
			 'in'],
  	answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'This phone is not mine; it is …..',
  	options:[ 'mine uncle’s',
			  'my uncle’s',
			  'my uncles',
			  'mine uncle'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Their sister wore a ….. dress to the party.',  	
  	options:[ 'silk blue beautiful',
			  'beautiful blue silk',
			  'blue beautiful silk',
			  'beautiful silk blue'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I wish I ….. my friend next week.',		
  	options: ['can visit',
			  'am visiting',
			  'shall visit',
			  'could visit'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Aba took ….. her mother in many ways.',	 
  	options: [ 'after',
			   'up',
			   'on',
			   'by'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'That girls is allergic ….. dust.',		
  	options: [ 'with',
			   'to',
			   'against',
			   'about'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'My brother, with his children, ….. travelling to Salaga next week.',		
  	options: ['is',
			  'are',
			  'was',
			  'were'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'It is high time we …… for the meeting.',		
  	options: ['left',
			  'leave',
			  'have to leave',
			  'will leave'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The accused person refused to appear before the ….. panel.',		
  	options: ['five-man’s',
			  'five-man',
			  'five-men',
			  'five-mens'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The stories her children told her made her ……',
		options: ['to laugh',
				  'laughing',
				  'laughed',
				  'laugh'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'They have not bought …… of the two prescribed books.',		
  	options: ['neither',
			  'either',
			  'none',
			  'all'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The boy found the assignment …… to do.',
		options: ['much too difficult',
				  'difficult too much',
				  'too much difficult',
				  'much difficult too'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The oxen lay on the bare floor, …..?',		
  	options: ['didn’t they',
			  'don’t they',
			  'didn’t it',
			  'isn’t it'],
		answer: 0
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The officials made a ' + '<u>' + 'sudden' + '</u>' + ' visit to the school.',
		options: ['an unusual',
				  'a strange',
				  'a quick',
				  'an unexpected'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Some of the students '+ '<u>' + 'grumbled' +'</u>' + ' about the assignment.',		
  	options: ['questioned',
			  'talked',
			  'complained',
			  'bothered'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />'  + '<br />' + '<br />' + 'It is ' + '<u>' + 'impolite' + '</u>' + ' to talk loudly in the presence of the elderly.',		
  	options: ['incorrect',
			  'improper',
			  'unwise',
			  'rude'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'She is fond of talking about ' + '<u>' + 'trivial' + '</u>' + ' matters.',		
  	options: [' unpleasant',
			  'unimportant',
			  'unexciting',
			  'unacceptable'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'This ' + '<u>' + 'curious' + '</u>' + ' child likes to ask a lot of questions.',		
  	options: ['inquisitive',
			  'pompous',
			  'intelligent',
			  'talkative'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Araba’s visit was a' + '<u>' + ' bolt from the blue.' + '</u>' + ' This means that the visit was',
		options: ['a most welcome one',
				  'short',
				  'a complete surprise',
				  'timely'],
		answer: 2
  },
  {
  	question: '<b>' + 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'My uncle loves to ' + '<u>' + 'cast his bread upon the waters.' + '</u>' + ' This means that my uncle',
		options: ['behaves strangely',
				  'feeds his fish with bread',
				  'is wasteful',
				  'loves to help people'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + ' When he lost his job, Taro was ' + '<u>' + 'left to sink or swim.' + '</u>' + ' This means that my uncle',
		options: ['was depressed',
				  'shouted for help',
				  'had to find another job',
				  'had to survive on his own'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'I was informed ' + '<u>' + 'at the  eleventh hour' + '</u>' + ' about his decision to leave. This means that I heard about his decision',
		options: ['immediately',
			  	  'at eleven o’clock',
				  'in good time',
				  'very late'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'John had to ' + '<u>' + 'eat his words' + '</u>' + ' when our team won the match. This means that John',
		options: [' became very much surprised',
				  'admitted he was wrong',
				  'denied all that he had said',
				  'lost appetite'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The girl ' + '<u>' + 'intentionally' + '</u>' + ' tore her dress.',
		options: ['carelessly',
				  'accidentally',
				  'willingly',
				  'foolishly'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'We ' + '<u>' +  'initiated' + '</u>' + ' several projects last year.',		
  	options: ['funded',
			  'completed',
			  'executed',
			  'organized'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Most of the rules were ' + '<u>' + 'observed.' + '</u>',		
  	options: ['violated',
			  'cancelled',
			  'lessened',
			  'excluded'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The results will be ' + '<u>' + 'released' + '</u>' + ' very soon',		
  	options: ['withheld',
			  'confirmed',
			  'withdrawn',
			  'canceled'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'No one enjoyed the old man’s ' + '<u>' + 'humourless' + '</u>' + ' stories.',
		options:['funny',
				 'peculiar',
				 'familiar',
				 'cheerful'],
		answer: 0
  }
]