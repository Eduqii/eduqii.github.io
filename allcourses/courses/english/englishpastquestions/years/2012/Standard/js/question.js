

//Array of Objects
const quiz = [
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Two people perished …………….the spot.',
  	options:['upon',
			 'in',
			 'on',
			 'through'],
  	answer: 2
  },
  {	
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Oyo fell ill ……………..measles.',
	options:[ 'at',
			  'by',
			  'of',
			  'with'],
	answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The doctor gave ……………………to the patient.',  	
  	options:[ 'some good advice',
			  'much good advices',
			  'many good advice',
			  'some good advices'],
  	answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'All girls were supposed to wear …………………during the Speech Day.',
  	options:['new, white, long dresses',
			 'new, long, white dresses',
			 'long, white, new dresses',
			 'white, new long dresses'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + '‘I think you know ………………already’, said the host to all the participants.',
		options: ['one another',
				  'each other',
				  'themselves',
				  'ourselves'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The girls asserted that both tennis racquets were',	 
  	options: [ 'of Akologos.',
			   'Akologo’s.',
			   'Akologo’s own.',
			   'Akologo'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Children usually take ……………their parents in appearance.',
		options: [ 'after',
				   'from',
				   'to',
				   'up'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'We haven’t had …………….rice to eat this week.',
		options: ['some',
				  'little',
				  'any',
				  'many'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The chief praised the ………………during the students demonstration.',
		options: ['policemen’s behaviours',
				  'policemen behaviours',
				  'policemen’s behaviour',
				  'policemens’ behaviour'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'When the lights went off I …………my supper.',
		options: ['have eaten',
				  'have been eating',
				  'am eating',
				  'was eating'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The doctor said she ……………if she had not kept strictly to her diet.',
		options: ['has died',
				  'will die',
				  'would die',
				  'would have died'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'We saw the plane ………………for Kumasi',		
  	options: [' take on',
			  'take of',
			  'take off',
			  'take out'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'There are many big houses in our area, ………….?',
		options: ['isn’t it',
				  'aren’t they',
				  'weren’t there',
		  		   'aren’t there'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'You have cut the grass, ……………..?',		
  	options: ['haven’t you',
			  'did you',
			  'didn’t you',
			  'had you'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The new airport ………………next year.',		
  	options: ['will be completed',
			  'shall complete',
			  'will be completing',
			  'shall have completed'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Walking in the rain is not good, ……………….?',		
  	options: ['is not',
			  'is it',
			  'must not',
			  'must it'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Go over your work carefully, …………….. you?',		
  	options: ['do',
			  'will',
			  'may',
			  'shall'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'About fifty houses were ' + '<u>' + 'demolished' + '</u>' + ' to make way for the new road.',		
  	options: ['removed',
			  'attacked',
			  'destroyed',
			  'displayed'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The headmaster took ' + '<u>' + 'drastic' + '</u>' + ' action against the culprits.',		
  	options: ['bold',
			  'dangerous',
			  'necessary',
			  'severe'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'It was ' + '<u>' + 'forecast' + '</u>' + ' that there would be floods this year.',		
  	options: ['deduced',
			  'predicted',
			  'imagined',
			  'observed'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Many people ' + '<u>' + 'revered' + '</u>' + 'the old man for his charity to the poor.',
		options: ['glorified',
			  	  'respected',
				  'feared',
				  'praised'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'When they reached the ' + '<u>' + 'frontier' + '</u>' + ' , the customs officer stopped the car.',
		options: ['fence',
				  'gate',
				  'entrance',
				  'border'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Awuni normally ' + '<u>' + 'feels at home' + '</u>' + ' in my house. This means that Awuni …………….in my house.',		
  	options: ['feels comfortable',
			  'lives',
			  'moves about',
			  'eats'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The students were advised to ' + '<u>' + 'stop building castles' + '</u>' + ' in the air. This mean that the students should',
		options: ['be serious and realistic',
				  'not worry about castles',
				  'be serious and hardworking',
				  'not build any more castles'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The chief told his linguist ' + '<u>' + 'not to beat about the bush.' + '</u>' + ' This means that the linguist must',
		options: ['not stammer',
				  'go straight to the point',
				  'not enter the bush',
				  'cut down the bush'],
		answer: 1
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Immediately Ekuba’s mother left the house, she ' + '<u>' + 'let the cat out of the bag.' + '</u>' + ' This means that Ekuba',
		options: ['bought a cat',
				  'took the cat from the bag',
				  'left her house',
				  'revealed the secret'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The teacher ' + '<u>' + 'poured cold water' + '</u>' + ' on Sena’s suggestion. This means that the teacher',
		options:['challenged Sena’s suggestion',
				 'approved of Sena’s suggestion',
				 'discouraged Sena',
				 'provoked Sena'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'He had applied for a ' + '<u>' + 'permanent' + '</u>' + ' job.',		
  	options: ['a boring',
			  'a dull',
			  'an exacting',
			  'a temporary'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'He has a ' + '<u>' + 'violent' + '</u>' + ' temper.',		
  	options: ['mild',
			  'natural',
			  'flexible',
			  'pleasant'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'His position made him ' + '<u>' + 'humble.' + '</u>',		
  	options: ['stubborn',
			  'wicked',
			  'arrogant',
			  'selfish'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'That is a ' + '<u>' + 'genuine' + '</u>' + ' painting.',		
  	options: ['bad',
			  'fake',
			  'damaged',
			  'poor'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the options lettered A to D, choose the one that correctly answers the questions or completes the sentence' + '</b>' + '<br />' + '<br />' + 'The soldier ' + '<u>' + 'climbed' + '</u>' + ' the mountain carefully.',		
  	options: ['descended',
			  'circled',
			  'fell off',
			  'looked up'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the options lettered A to D, choose the one that correctly answers the questions or completes the sentence' + '</b>' + '<br />' + '<br />' + 'The main idea in a novel or play is the ……………….',
  	options: ['suspense',
			  'plot',
			  'gist',
			  'theme'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the options lettered A to D, choose the one that correctly answers the questions or completes the sentence' + '</b>' + '<br />' + '<br />' + 'The three main forms of literature are prose, drama and ………..',
		options: ['novel',
				  'satire',
				  'poetry',
				  'prosody'],
		answer: 2
  },
  {
  	question: '<b>' + 'Read the following stanza and answer this question' + '</b>' + '<br />' + '<br />' + 'Time, like an ever-rolling stream,' + '<br />' + 'Bears all its sons away.' + '<br />' + 'They fly forgotten, as a dream' + '<br />' + 'Dies at the opening day.' + '<br />' + '<br />' + 'Time in the stanza is being used as …………………..',		
  	options: ['symbol',
			  'simile',
			  'synecdoche',
			  'personification'],
		answer: 3
  },
  {
  	question: '<b>' + 'Read the following stanza and answer this question' + '</b>' + '<br />' + '<br />' + 'Time, like an ever-rolling stream,' + '<br />' + 'Bears all its sons away.' + '<br />' + 'They fly forgotten, as a dream' + '<br />' + 'Dies at the opening day.' + '<br />' + '<br />' + 'The rhyme scheme of the stanza is …………….',  	
  	options: ['abba',
			  'bbaa',
			  'abab',
			  'baba'],
		answer: 0
  },
  {
  	question: 'The place and time of the action of a play or novel is its ……………',		
  	options: ['background',
			  'setting',
			  'scene',
			  'atmosphere'],
		answer: 1
  },
  {
  	question: 'One of the following helps best to create interest in a work of art:',
  	options: ['rhythm',
			  'preface',
			  'epilogue',
			  'suspense'],
		answer: 3
  },
  {
  	question: ' The main function of imagery in literature is to make readers / listeners …………….',
  	options: ['appreciate the great efforts of writers',
			  'understand clearly what writers put across',
			  'admire how learned writers are',
			  'know literature is different from other uses of language'],
		answer: 1
  },
  {
  	question: 'A character in a play that opposes the hero or heroine is the …………..',
  	options: ['antagonist',
			  'challenger',
			  'opponent',
			  'protagonist'],
		answer: 0
  }
]