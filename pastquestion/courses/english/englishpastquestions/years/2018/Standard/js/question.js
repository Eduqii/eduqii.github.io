

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Salifu was ……..surprised that he could not talk.',
  	options:['enough',
			 'so',
			 'what',
			 'which'],
  	answer:1
  },
  {	
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'This amount is all ………I have on me.',
	options:[ 'that',
			  'this',
			  'what',
			  'which'],
	answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I am told the boy is a friend of ……….',
  	options:['he',
			 'him',
			 'his',
			 'he’s'],
  	answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Rice and beans ……a good meal for children.',
  	options:[ 'are',
			  'have been',
			  'is',
			  'is being'],
  	answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Yaw is …….clever to be cheated.',  	
  	options:[ 'quite',
			  'so',
			  'too',
			  'very'],
  	answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The two rivals are fond of insulting ………',		
  	options: ['each other',
			  'one another',
			  'one and the other',
			  'themselves'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Of all the pupils in the class, Ekua is ……..',	 
  	options: [ 'prettier',
			   'prettiest',
			   'the prettier',
			   'the prettiest'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'It is high time Adzo …… home.',		
  	options: [ ' came',
			   'comes',
			   'has come',
			   'will come'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'You should be ……..more careful about what you say.',		
  	options: ['less',
			  'least',
			  'little',
			  'a little'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Atsu is looking forward to ……..his friends at the party.',		
  	options: ['see',
			  'seeing',
			  'be seeing',
			  'have seen'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The harder you study, ……..your chance of success.',
  		options: ['greater',
				  'greatest',
				  'the great',
				  'the greater'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'If you had asked me, I ………you.',
		options: ['will help',
				  'would help',
				  'will have helped',
				  'would have helped'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I don’t really know what you want, ………I?',		
  	options: ['am',
			  'aren’t',
			  'do',
			  'did'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I will not walk to school with ………. of the boys.',		
  	options: ['each',
			  'either',
			  'everyone',
			  'neither'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Jane fell ill ………..measles.',		
  	options: ['at',
			  'by',
			  'of',
			  'with'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Aminu’s bushy eyebrows gave him a very ' + '<u>' + ' severe' + '</u>' + ' look.',
		options: ['bad',
				  'deadly',
				  'serious',
				  'unpleasant'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'My father had the ' + '<u>' + 'benefit' + '</u>' + ' of good education.',		
  	options: ['luck',
			  'advantage',
			  'quality',
			  'value'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Kwame was too ' + '<u>' + 'scared' + '</u>' + ' to be left alone in the house.',		
  	options: ['afraid',
		 	  'anxious',
			  'uneasy',
			  'unhappy',],
		answer: 0
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The new school is ' + '<u>' + 'ideal' + '</u>' + ' for Mr. Mensah’s children.',		
  	options: ['good',
			  'perfect',
			  'satisfactory',
			  'suitable'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The internet is of ' + '<u>' + 'enormous' + '</u>' + ' benefit to education.',		
  	options: ['enviable',
			  'great',
			  'much',
			  'suitable'],
		answer: 1
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Afua celebrates her birthday today but ' + '<u>' + 'I cannot make it.' + '</u>' + ' This means that the speaker',
	options: ['does not want to be there',
			  'feels it is not necessary to attend',
			  'has no birthday gift for her friend',
			  'will not be able to attend'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The interview was conducted to separate the ' + '<u>' + 'sheep from the goats.' + '</u>' + ' This means that the interview aimed at',
		options: ['finding people who could rear sheep',
				  'keeping the sheep in a different pen',
				  'selecting only the humble candidates',
				  'selecting the best candidates'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Being the eldest child of the family, Joojo claimed ' + '<u>' + 'the lion’s share' + '</u>' + ' of the father’s property. This means that Joojo had',
		options: ['all the property',
				  'half of the property',
				  'the best part',
				  'the largest part'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The students ' + '<u>' + 'were all ears' + '</u>' + ' during the presentation. This means that the students',
		options: ['did not enjoy the presentation',
				  'had big ears',
				  'listened attentively',
				  'were very happy'],
		answer: 2
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Dallies is the ' + '<u>' + 'pick of the bunch.' + '</u>' + ' This means that Dallies',		
  	options: ['is a farmer',
			  'is an athlete',
			  'is preferred to all the others',
			  'works on a banana plantation'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The headteacher asked the pupils to ' + '<u>' + 'disperse' + '</u>' + '.',
		options: ['assemble',
				  'come',
				  'meet',
				  'stay'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The current is ' + '<u>' + 'slow' + '</u>' + ' downhill.',		
  	options: ['abrupt',
			  'fresh',
			  'running',
			  'swift'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The bread is ' + '<u>' + 'stale.' + '</u>',		
  	options: ['burnt',
			  'delicious',
			  'fresh',
			  'mouldy'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Akos has nothing to be ' + '<u>' + 'boastful' + '</u>' + ' of.',		
  	options: [' afraid',
			  'anxious',
			  'ashamed',
			  'nervous'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The pupils are ' + '<u>' + 'confident' + '</u>' + ' of passing the examination.',
		options:['determined',
				 'doubtless',
				 'uncertain',
				 'uneasy'],
		answer: 2
  }
]