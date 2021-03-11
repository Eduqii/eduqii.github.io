

//Array of Objects
const quiz = [
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'John has given ……………..smoking',
  	options:['in',
			 'off',
			 'out',
			 'up'],
  	answer: 3
  },
  {	
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The crowd was ………………….large that the Director became frightened.',
	options:[ 'quite',
			  'so',
			  'too',
			  'very'],
	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'When we got there, the buses ………………left.',
  	options:['are',
			 'had',
			 'have',
			 'were'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The book was ……………to me.',  	
  	options:[ 'gave',
			  'given',
			  'giving',
			  'to give'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Auntie is the lady to ……………..I gave the list.',  	
  	options:[ 'who',
			  'whom',
			  'which',
			  'whose'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'He’s your friend, ……………..?',		
  	options: ['doesn’t he',
			  'does he',
			  'isn’t he',
			  'isn’t it'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Kay: You didn’t go to Accra did you?' + '<br />' + 'Lee: ……………….',
	 options: [ 'No, I did',
			    'No, I didn’t',
			    'Yes, did I',
				'Yes, I didn’t'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'You had better ………………now.',		
  	options: [ 'left',
			   'leave',
			   'be leaving',
			   'to leave'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Kwame asked his friend to ……………..him a pen.',
		options: ['borrow',
			  	  'excuse',
				  'lend',
				  'spare'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'She ended the letter, ………………….',		
  	options: ['‘Yours sincerely’',
			  '‘Your’s sincerely’',
			  '‘Yours’ sincerely’',
			  '‘Your sincerely’'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The woman refused to sell me ……………….kerosene.',
		options: [' any',
				  'little',
				  'plenty',
				  'some'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + '‘Yes, ….…….a book,’ he said.',
		options: ['is',
				  'its',
				  'it’s',
				  'it'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I know you are much ………………..than Esi.',		
  	options: ['tall',
			  'taller',
			  'tallest',
			  'the taller'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Neither John nor his friend, …………….. a play to the end.',
		options: ['watch',
				  'watches',
				  'was watching',
				  'were watching'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Araba and Osei are a devoted couple who love ………………',		
  	options: ['each other',
			  'one another',
			  'themselves',
			  'the other'],
		answer: 0
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The ' + '<u>' + 'welfare' + '</u>' + ' of students should be the concern of teachers.',
		options: ['growth',
				  'joy',
				  'wealth',
				  'well-being'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'He said the practice was ' + '<u>' + 'alien' + '</u>' + ' to him.',		
  	options: ['boring',
			  'new',
			  'modern',
			  'unfamiliar'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'He said the story was ' + '<u>' + 'fictitious.' + '</u>',		
  	options: ['artificial',
			  'false',
			  'interesting',
			  'real'],
		answer: 1
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The man placed ' + '<u>' + 'an order' + '</u>' + ' for rice and stew at the restaurant.',
		options: ['a command',
				  'a demand',
				  'a request',
				  'a directive'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + ' There is nothing with which to compare the ' + '<u>' + 'infinite' + '</u>' + ' knowledge and power of Providence.',
		options: ['  endless',
				  'immeasurable',
				  'incomplete',
				  'inconstant'],
		answer: 1
  },
  {
  	question: '<b>'+ 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Nimo worked hard after his business collapsed and soon ' + '<u>' + 'found his feet.'+ '</u>' + '<br />' + '<br />' + 'This means that he',		
  	options: ['bought a new fleet of cars.',
			  'could walk again.',
			  'revived the business.',
			  'sold the rest of the business.'],
		answer: 2
  },
  {
  	question: '<b>'+ 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Manna ' + '<u>' + 'lay' + '</u>' + ' aside some money for Baaba’s party. This means that Manna',
		options: ['refused to host the party',
				  'saved money for the party',
				  'spent money on the party',
			  	  'took a loan to organise the party'],
		answer: 1
  },
  {
  	question: '<b>'+ 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Mary described the occasion as ' + '<u>' + 'a red-letter day.' + '</u>' + ' This means that the occasion was very',
		options: ['bloody',
				  'enjoyable',
				  'memorable',
				  'rough'],
		answer: 2
  },
  {
  	question: '<b>'+ 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'George has been ' + '<u>' + 'relieved of his post.' + '</u>' + ' This means that George has been',
		options: ['dismissed',
				  'given another assignment',
				  'demoted',
				  'promoted'],
		answer: 0
  },
  {
  	question: '<b>'+ 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Foli and Adzovi ' + '<u>' + 'hit if off' + '</u>' + ' quite well. This means they',
		options: ['fight often.',
				  'get on very well.',
				  'play as a team.',
				  'present good arguments'],
		answer: 1
  },
  {
  	question:'<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'People in our village are ' + '<u>' + 'polite' + '</u>' + ' to strangers.',
		options: ['cruel',
				  'mean',
				  'rude',
				  'unfair'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Fishes are ' + '<u>' + 'plentiful' + '</u>' + ' in the pond.',		
  	options: ['little',
			  'scarce',
			  'small',
			  'unusual'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The price of petrol has ' + '<u>' + 'fallen' + '</u>' + ' for no reason.',
		options: ['aggravated',
				  'doubled',
				  'risen',
				  'weakened'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Cann worked hard to ' + '<u>' + 'stock' + '</u>' + ' the shop.',		
  	options: ['decorated',
			  'empty',
			  'fill',
			  'reinforce'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'There was ' + '<u>' + 'mayhem' + '</u>' + ' as the crowd scattered.',		
  	options:['anger',
			 'fear',
			 'order',
			 'riot'],
		answer: 2
  }
]