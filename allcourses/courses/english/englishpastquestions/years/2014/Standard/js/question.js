

//Array of Objects
const quiz = [
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The students were hostile ……….the lazy teacher.',
  	options:['on',
			 'to',
			 'from',
			 'with'],
  	answer: 1
  },
  {	
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The ………….met at the mess.',
	options:[ 'commander-in-chief',
			  'commander-in-chiefs',
			  'commanders-in-chief',
			  'commanders-in-chiefs'],
	answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The workers are demonstrating ……………..management.',
  	options:['at',
			 'on',
			 'upon',
			 'against'],
  	answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + ' …………….failed the examination, Doris was dismissed from the school.',
  	options:[ 'Having',
			  'In having',
			  'On having',
			  'To having'],
  	answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The building he bought ……………..millions of cedis.',  	
  	options:[ 'cost',
			  'costs',
			  'costed',
			  'costing'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The dresses are …………..',		
  	options: ['you',
			  'your’s',
			  'our’s',
			  'ours'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'We shall invite him when he ……………..from America.',	 
  	options: [ 'will return',
			   'had returned',
			   'returns',
			   'returned'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The students were congratulated ……………..their brilliant performance.',		
  	options: [ 'by',
			   'on',
			   'with',
			   'about'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'By this time next year, I ……………..school.',		
  	options: ['will leave',
			  'would leave',
			  'might leave',
			  'will have left'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Isn’t that girl ……………..old to play with toys?',		
  	options: ['as',
			  'so',
			  'too',
			  'very'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'You usually come to school early, ………….?',		
  	options: ['can you',
			  'will you',
			  'aren’t you',
			  'don’t you'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I am …………….faithfully.',
		options: ['your',
				  'yours’',
				  'yours',
			  	  'your’s'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'No sooner had we arrived ……….he came back from work.',		
  	options: ['than',
			  'then',
			  'when',
			  'before'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Kofi and Ama love …………..',		
  	options: ['another',
			  'theirselves',
			  'each other',
			  'one another'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'It’s no good ………….to him.',		
  	options: ['to be talking',
			  'talked',
			  'talking',
			  'about talking'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Since our last meeting, I ……………ill.',		
  	options: ['am',
			  'was',
			  'had been',
			  'have been'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I was ………….tired that I couldn’t go any further.',		
  	options: ['so',
			  'too',
			  'much',
			  'very'],
		answer: 0
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The elders were advised not to ' + '<u>' + 'meddle' + '</u>' + ' in chieftaincy affairs.',
		options: ['indulge',
				  'intrude',
				  'interfere',
				  'intervene'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The accountant ' + '<u>' + 'corrected'+ '</u>' + ' all the mistakes made by the Chief Executive.',		
  	options: ['refused',
			  'erased',
			  'nullified',
			  'rectified'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Elorm’s decision was ' + '<u>'+ 'superb' + '</u>',		
  	options: ['right',
			  'good',
			  'excellent',
			  'wonderful'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The students complained that the rules were too ' + '<u>' + 'rigid.' + '</u>',
		options: ['strong',
				  'hard',
				  'strict',
				  'bad'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The new headmaster met the staff and made his ' + '<u>' + 'maiden' + '</u>' + ' speech.',		
  	options: ['first',
			  'fresh',
			  'official',
			  'original'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The student was ' + '<u>' + 'caught red-handed' + '</u>' + ' breaking the louvers. This means that the student was caught',
		options: ['while committing the offence',
				  'with blood on his hands',
				  'before the act',
				  'after the act'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'We knew it was ' + '<u>' + 'a cock and bull' + '</u>' + ' story. This means that the story was',
		options: ['difficult to believe',
				  'about a cock and a bull',
				  'real',
				  'false'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The thieves were ' + '<u>' + 'armed to the teeth' + '</u>' + ' when they entered the house. This means that the thieves were',
		options: ['well trained',
				  'experienced',
				  'fully armed',
				  'violent'],
		answer: 2
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Mr. Abban instructed his wife to ' + '<u>' + 'keep an eye' + '</u>' + ' on their daughter. This means that their daughter should be',
		options: ['pampered',
				  'disciplined',
				  'controlled properly',
				  'watched closely'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The president ' + '<u>' + 'hit the nail on the head' + '</u>' + ' when he complained that most of the ministers were corrupt.',
		options: ['the exact truth',
				  'in detail',
				  'harshly',
				  'clearly'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The man was ' + '<u>' + 'disgraced' + '</u>' + ' in public.',
		options: ['respected',
				  'honoured',
				  'welcomed',
				  'accepted'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Akosua ' + '<u>' + 'accepted' + '</u>' + ' the offer.',		
  	options: ['disliked',
			  'declined',
			  'withdrew',
			  'ignored'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Food is ' + '<u>' + 'abundant' + '</u>' + ' in the rural areas.',
		options:['scarce',
			  	 'less',
				 'few',
			  	 'cheap'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Doctors have ' + '<u>' + 'withdrawn' + '</u>' + ' their services.',		
  	options: ['hidden',
			  'registered',
			  'offered',
			  'displayed'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'By our constitution, it is ' + '<u>' + 'obligatory' + '</u>' + ' to vote.',		
  	options: ['good',
			  'necessary',
			  'optional',
			  'right'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.' + '</b>' + '<br />' + '<br />' + 'Which of the following is ' + '<b>' + 'not' + '</b>' + ' an example of oral literature?',
		options: ['Myth',
				  'Folktale',
				  'Proverb',
				  'Melodrama'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.' + '</b>' + '<br />' + '<br />' + 'The dominant idea in a literary work constitutes its …………..',		
  	options: ['plot',
			  'theme',
			  'diction',
			  'structure'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.' + '</b>' + '<br />' + '<br />' + 'The expression “The world is a stage.” is an example of ……….',		
  	options: ['metonymy',
			  'simile',
			  'personification',
			  'metaphor'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.' + '</b>' + '<br />' + '<br />' + 'A genre is ……………..',		
  	options: ['any kind of poetry',
			  'another name for prose',
			  'a subdivision of drama',
			  'any of the three forms of literature'],
		answer: 3
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + 'Sweet sensation rises in pressure' + '<br />' +
'Tiny legs kick with pleasure'+ '<br />' + 
'Sleep comes gently and strong' + '<br />' +
'Sleep whispers softly and strong' + '<br />' + '<br />' + 'The device used in “Sleep comes gently and strong” is ……………',
		options: ['irony',
				  'hyperbole',
				  'euphemism',
				  'personification'],
		answer: 3
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + 'Sweet sensation rises in pressure' + '<br />' +
'Tiny legs kick with pleasure'+ '<br />' + 
'Sleep comes gently and strong' + '<br />' +
'Sleep whispers softly and strong' + '<br />' + '<br />' + 'The rhyme scheme of the stanza is ………….',		
  	options: ['abba',
			  'bbaa',
			  'aabb',
			  'abab'],
		answer: 2
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + 'The fair breeze blew; the white foam flew' + '<br />' +
'The furrow followed free' + '<br />' + 
'We were the first that burst' + '<br />' + 
'Into the silent sea.' + '<br />' + '<br />' + 'The ' + '<b>' + 'main' + '</b>' + ' sound device used in the stanza is …………..',
		options: ['pun',
				  'rhyme',
				  'alliteration',
				  'onomatopoeia'],
		answer: 2
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>'+ '<br />' + '<br />' + 'The fair breeze blew; the white foam flew' + '<br />' +
'The furrow followed free' + '<br />' + 
'We were the first that burst' + '<br />' + 
'Into the silent sea.' + '<br />' + '<br />' + 'The device helps to express …………….',
		options: ['the silence of the sea',
				  'the whiteness of the foam',
				  'the fairness of the weather',
				  'the smoothness of the movement'],
		answer: 2
  } 
]