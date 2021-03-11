

//Array of Objects
const quiz = [
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The lion ……… under the tree waiting for its prey.',
  	options:['lie',
 			 'lain',
 			 'lay',
 			 'laid'],
  	answer: 2
  },
  {	
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'I wish Ato …….. come to see us tomorrow.',
	options:[ 'will',
			  'is to',
			  'would',
			  'may'],
	answer: 2
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'It’s high time we ………..the items out.',
  	options:['move',
			 'are moving',
			 'moved',
			 'were moving'],
  	answer: 0
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'This amount is all ………I have on me.',  	
  	options:[ 'what',
			  'that',
			  'which',
			  'this'],
  	answer: 3
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The harder you study, ……..your chance of success.',
		options: ['the great',
				  'greater',
				  'greatest',
				  'the greater'],
		answer: 3
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Please, I would rather you ……….not disturb me.',  	
  	options:[ 'did',
			  'will',
			  'may',
			  'do'],
  	answer: 0
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'That pair of trousers is worn …………',
		options: ['in',
				  'out',
				  'into',
				  'on'],
		answer: 1
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Atsu is looking forward to ……….his friends at the party.',	 
  	options: [ 'see',
			   'be seeing',
			   'seeing',
			   'have seen'],
		answer: 2
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The minister is my ……….brother.',		
  	options: [ 'senior',
			   'older',
			   'elder',
			   'junior'],
		answer: 2
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'We have ………sugar, so we cannot have breakfast.',		
  	options: ['a few',
			  'little',
			  'few',
			  'a little'],
		answer: 1
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'I wouldn’t say this to …….',		
  	options: ['no other',
			  'any other',
			  'nobody',
			  'anyone else'],
		answer: 1
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'This vase is made …………glass.',		
  	options: ['on',
			  'of',
			  'with',
			  'by'],
		answer: 1
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Mrs. Akwei is blind …………the faults of her children.',
		options: ['on',
				  'over',
				  'to',
				  'by'],
		answer: 2
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Shika was absent yesterday, ………?',		
  	options: ['isn’t she',
			  'has she',
			  'didn’t she',
			  'wasn’t she'],
		answer: 3
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'Come and see me tomorrow, ……….. you?',
		options: ['shall',
				  'will',
				  'may',
				  'don’t'],
		answer: 1
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'If Kofi had studied hard, he ………..his examination.',		
  	options: ['would pass',
			  'would be passing',
			  'will be passing',
			  'would have passed'],
		answer: 3
  },
  {
  	question: 'LEXIS AND STRUCTURE' + '<br />' + '<br />' + '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence' + '</b>' + '<br />' + '<br />' + 'The boy likes his ……….dog.',		
  	options: ['little pretty brown',
			  'pretty brown little',
			  'pretty little brown',
			  'brown little pretty'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The radio is a very potent means of communication.',		
  	options: ['necessary',
			  'powerful',
			  'widespread',
			  'sound'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Benjamin deserves the prize because he is industrious.',
		options: ['polite',
				  'hardworking',
				  'intelligent',
				  'funny'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Farming is lucrative.',		
  	options: ['easy',
			  'profitable',
			  'necessary',
			  'good'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The recklessness of the driver caused the woman’s death.',
		options: ['drunkenness',
				  'arrogance',
				  'carelessness',
				  'ignorance'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The doctors have been discussing the shortage of nurses.',		
  	options: ['indiscipline',
			  'love',
			  'scarcity',
			  'efficiency'],
		answer: 2
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Adzo takes after her mother. This means that Adzo',		
  	options: ['likes her',
			  'resembles her',
			  'is unlike her',
			  'always follows her'],
		answer: 1
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Board members are paid five Ghana Cedis a day across the board. This means that',
		options: ['every member receives five Ghana Cedis',
				  'some members receive five Ghana Cedis',
				  'members are given five Ghana Cedis for food.',
				  'only deserving members are given five Ghana Cedis.'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Advise Peter not to poke his nose into my affair.',		
  	options: ['interfere',
			  'enter',
			  'speak',
			  'believe'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'During the lecture, Sarfo was miles away. This means that Sarfo.',
		options: ['was self-conscious',
				  'had travelled',
				  'had slept',
				  'was absent-minded'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Ato was at his wits’ end. This means that Ato',		
  	options: ['was collecting his ideas together.',
			  'had come to the end of his talk.',
			  'did not know what to do next.',
			  'did not have much to do.'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'We are surprised at her hostility to us.',
		options: ['faithfulness',
				  'attitude',
				  'manner',
				  'friendliness'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'She timidly faced her accusers.',		
  	options: ['boldly',
			  'calmly',
			  'angrily',
			  'smilingly'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'The minister is sincere in his promise.',		
  	options:['unrealistic',
			 'uncertain',
			 'dissatisfied',
			 'dishonest'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'The flag was hoisted during the golden jubilee celebration.',
		options: ['sunk',
				  'dipped',
				  'lowered',
				  'dropped'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence' + '</b>' + '<br />' + '<br />' + 'Transparent ballot boxes are used in elections.',		
  	options: ['dark',
			  'opaque',
			  'coated',
			  'painted'],
		answer: 1
  },
  {
  	question: 'LITERATURE' + '<br />' + '<br />' + '<b>' + 'From the options lettered A to D, choose the one that correctly answers each question or completes the sentence' + '</b>' + '<br />' + '<br />' + 'The sequence of events in a play is the',		
  	options: ['theme',
			  'plot',
			  'conflict',
			  'resolution'],
		answer: 1
  },
  {
  	question: 'LITERATURE' + '<br />' + '<br />' +  '<b>' + 'From the options lettered A to D, choose the one that correctly answers each question or completes the sentence' + '</b>' + '<br />' + '<br />' + 'An address directed at oneself is known as',
		options: ['monologue',
				  'dialogue',
				  'apostrophe',
				  'soliloquy'],
		answer: 3
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + '‘O incomprehensible God!' + '<br />' + 
'Shall my pilot be' + '<br />' + 
'My inborn stars to that' + 
'Final call to thee’?' + '<br />' + '<br />' + 'The poem is a kind of',		
  	options: ['sermon',
			  'apostrophe',
			  'dirge',
			  'sonnet'],
		answer: 1
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + '‘O incomprehensible God!' + '<br />' + 
'Shall my pilot be' + '<br />' + 
'My inborn stars to that' + 
'Final call to thee’?' + '<br />' + '<br />' + 'The theme of the above extract is',		
  	options: ['life',
			  'neglect',
			  'war',
			  'death'],
		answer: 3
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + '‘O incomprehensible God!' + '<br />' + 
'Shall my pilot be' + '<br />' + 
'My inborn stars to that' + 
'Final call to thee’?' + '<br />' + '<br />' + 'Which of the following expressions from the extract suggests the theme above?',
		options: ['‘incomprehensible God!’',
				  '‘inborn stars’',
				  '‘Final call’',
				  '‘my pilot’'],
		answer: 2
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + '‘O incomprehensible God!' + '<br />' + 
'Shall my pilot be' + '<br />' + 
'My inborn stars to that' + 
'Final call to thee’?' + '<br />' + '<br />' + 'The main character in a play or a novel is called',		
  	options: ['hero',
			  'villain',
			  'dramatist',
			  'antagonist'],
		answer: 0
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + '‘O incomprehensible God!' + '<br />' + 
'Shall my pilot be' + '<br />' + 
'My inborn stars to that' + 
'Final call to thee’?' + '<br />' + '<br />' + 'The conversation between two characters is known as',
		options: ['a dialogue',
				  'a monologue',
				  'an aside',
				  'a soliloquy'],
		answer: 0
  },
  {
  	question: '<b>' + 'Read the following extract carefully and answer this question' + '</b>' + '<br />' + '<br />' + '‘O incomprehensible God!' + '<br />' + 
'Shall my pilot be' + '<br />' + 
'My inborn stars to that' + 
'Final call to thee’?' + '<br />' + '<br />' + 'Miming refers to',		
  	options: ['the use of song in drama',
			  'acting without the use of words',
			  'imitation of a character',
			  'the use of dialogue in acting'],
		answer: 1
	}
]