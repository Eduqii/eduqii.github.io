// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "<i>" + "From the alternatives lettered A to D, choose the one which most suitably completes each sentence. " + "</i>" + "<br />" +  "<br/>" + " He is _______ poor that he cannot pay his bills.",
    answer: 'so',   
    options: ['so',
     'too',
     'very',
     'rather']
  },
    {
    numb: 2,
    answer: "unless",
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' You will be late ______ you hurry.',
    options: ['if',
              'or',
              'unless',
              'while'],
  },
    {
    numb: 3,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Aminu has been absent from class ______ one month.',
    options: ['in',
     'for',
     'from',
     'since'],
    answer: "for"
  },
    {
    numb: 4,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Many people have been invited, but _____ will be employed.', 

options: ['few',

 'a few',

 'little',

 'a little'],
answer: "few"
  },
    {
    numb: 5,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' The teacher told the girl he had received _____of the two exercises.',

options: ['all',

 'any',

 'none',

 'neither'],
answer: "neither"
  },
  {
    numb: 6,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' My father has bought a _______car',

options: ['private brand new',

 'new brand private',

 'private new brand',

 'brand new private'],
answer: "brand new private"
  },
  {
    numb: 7,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Mama is never ______ ready for anything.',

options: ['so',

 'ever',

 'even',

 'rather'],
answer: "ever"
  },
  {
    numb: 8,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Akua was _____that she won four prizes.',

options: ['a girl so brilliant',

 'a so brilliant girl',

 'so brilliant a girl',

 'a brilliant so girl'],
answer: "so brilliant a girl"
  },
  {
    numb: 9,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Before he entered the classroom, we _____ the chalkboard.',

options: ['cleaned',

 'have cleaned',

 'had cleaned',

 'are cleaning'],
answer: "had cleaned"
  },
  {
    numb: 10,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' I have forgotten all _____my friend told me.',

options: ['this',

 'that',

 'what',

 'which'],
answer: "that"
  },
  {
    numb: 11,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' The supervisor will ask the _____to come and repair the pipe in the bath room.',

options: ['mason',

 'repairer',

 'plumber',

 'lumber'],
answer: "plumber"
  },
  {
    numb: 12,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' The stone fell into the river with a loud ______',

options: ['bang',

 'crash',

 'noise',

 'splash'],
answer: "splash"
  },
  {
    numb: 13,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Aggie got _____mark for French in the examination.',

options: ['bad',

 'worse',

 'the worse',

 'the worst'],
answer: "the worst"
  },
  {
    numb: 14,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' We won the school debating contest, _____ we?',

options: ['hadn\'t',

 'didn\'t',

 'couldn\'t',

 'did'],
answer: "didn\'t"
  },
  {
    numb: 15,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Kwame looks very handsome, _____?',

options: ['isn\'t he',

 'isn\'t it',

 'doesn\'t he',

 'does he'],
answer: "doesn\'t he"
  },
  {
    numb: 16,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' Nana Yaa was suffering ____ measles.',

options: ['by',

 'with',

 'from',

 'through'],
answer: "from"
  },
  {
    numb: 17,
    question: '<i>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</i>' + '<br />' + '<br />' + ' The suspect was charged _____ pickpocketing.',

options: ['of',

 'for',

 'on',

 'with'],
answer: "with"
  },
  {
    numb: 18,
    question: '<i>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</i>' + '<br />' + '<br />' + ' One ' + '<u>' + 'essential' + '</u>' + ' item for making local soap is soda ash.',

options: ['correct',

 'main',

 'real',

 'important'],
answer: "important"
  },
  {
    numb: 19,
    question: '<i>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</i>' + '<br />' + '<br />' +' Pupils are to read the ' + '<u>' + 'instructions' + '</u>' + ' carefully.',

options: ['notices',

 'demands',

 'commands',

 'directives'],
answer: "directives"
  },
  {
    numb: 20,
    question: '<i>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</i>' + '<br />' + '<br />' + ' The dog saw its ' + '<u>' + 'image' + '</u>' + ' in the water.',

options: ['nature',

 'condition',

 'reflection',

 'attraction'],
answer: "reflection"
  },
  {
    numb: 21,
    question: '<i>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</i>' + '<br />' + '<br />' + ' We shall have the final ' + '<u>' + 'rehearsal' + '</u>' + ' for the play tonight',

options: ['meeting',

 'practice',

 'trial',

 'preparation'],
answer: "practice"
  },
  {
    numb: 22,
    question: '<i>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</i>' + '<br />' + '<br />' + ' My mother is skilled in ' + '<u>' + 'domestic' + '</u>' + ' affairs',

options: ['local',

 'internal',

 'everyday',

 'household'],
answer: "household"
  },
  {
    numb: 23,
    question: '<i>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</i>' + '<br />' + '<br />' + ' Akweley was ' + '<u>' + 'taken aback' + '</u>' + ' on seeing a stranger in her room.\n This means Akweley was very',

options: ['angry',

 'afraid',

 'confused',

 'surprised'],
answer: "surprised"
  },
  {
    numb: 24,
    question: '<i>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</i>' + '<br />' + '<br />' + ' The employees ' + '<u>' + 'saw eye to eye' + '</u>' + ' with their manager.\n This means that the employees',

options: ['agreed completely with him',

 'were very close to him',

 'rarely saw him',

 'greatly respected him'],
answer: "agreed completely with him"
  },
  {
    numb: 25,
    question: '<i>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</i>' + '<br />' + '<br />' + ' The priest ' + '<u>' + 'was in high spirits' + '</u>' + ' during the sermon.\n This means that he was',

options: ['content',

 'cheerful',

 'spiritual',

 'annoyed'],
answer: "cheerful"
  },
  {
    numb: 26,
    question: '<i>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</i>' + '<br />' + '<br />' + ' The opponents decided to ' + '<u>' + 'bury the hatchet.' + '</u>' + '\n This means that they decided to',

options: ['make peace',

 'bury their guns',

 'hold discussions',

 'suspend the fighting'],
answer: "make peace"
  },
  {
    numb: 27,
    question: '<i>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</i>' + '<br />' + '<br />' + ' The headmaster took the students\' version of the theft ' + '<u>' + 'with a pinch of salt.' + '</u>',

options: ['believed the students\' version.',

 'doubted the students\' version.',

 'accepted the students\' version.',

 'ignored the students\' version.'],
answer: "doubted the students\' version."
  },
  {
    numb: 28,
    question: '<i>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</i>' + '<br />' + '<br />' + ' The judge ' + '<u>' + 'acquitted' + '</u>' + ' four of the accused but ______the rest.',

options: ['convicted',

 'discharged',

 'cautioned',

 'rebuked'],
answer: "convicted"
  },
  {
    numb: 29,
    question: '<i>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</i>' + '<br />' + '<br />' + ' It pays to be ' + '<u>' + 'courteous' + '</u>' + ' rather than being _____.',

options: ['rude',

 'wicked',

 'disobedient',

 'boastful'],
answer: "rude"
  },
  {
    numb: 30,
    question: '<i>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</i>' + '<br />' + '<br />' + ' Drivers who do not drive with ' + '<u>' + 'care' + '</u>' + ' are sometimes charged with _____.',

options: ['speeding',

 'drunkenness',

 'disobedience',

 'recklessness'],
answer: "recklessness"
  },
  {
    numb: 31,
    question: '<i>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</i>' + '<br />' + '<br />' + ' King David was the ' + '<u>' + 'heir' + '</u>' + ' to the throne while the brother was the _____ ',

options: ['usurper',

 'successor',

 'claimant',

 'descendant'],
answer: "usurper"
  },
  {
    numb: 32,
    question: '<i>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</i>' + '<br />' + '<br />' + ' The secretary ' + '<u>' + 'intentionally' + '</u>' + ' hid the documents but the clerk _____burnt them.',

options: ['willingly',

 'hastily',

 'mistakenly',

 'carelessly'],
answer: "mistakenly"
  },
  {
    numb: 33,
    question: '<i>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</i>' + '<br />' + '<br />' + ' A poem of six lines is called a/an _____..',

options: ['octave',

 'opera',

 'sextet',

 'sonnet'],
answer: "sextet"
  },
  {
    numb: 34,
    question: '<i>' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '</i>' + '<br />' + ' How would she get home if the worst happened? The atmosphere is _____ ',

options: ['cheerful',

 'friendly',

 'frightening',

 'undaunting'],
answer: "frightening"
  },
  {
    numb: 35,
    question: '<i>' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '</i>' + '<br />' + ' The state of the weather is emphasized by the word _____.',

options: ['angry',

 'cloud',

 'flashed',

 'grey'],
answer: "angry"
  },
  {
    numb: 36,
    question: '<i>' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '</i>' + '<br />' + ' \'Lightning flashed_____light from______torch.\' is an example of _____',

options: ['alliteration',

 'ellipsis',

 'parallelism',

 'personification'],
answer: "personification"
  },
  {
    numb: 37,
    question: '<i>' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '</i>' + '<br />' + ' What is being referred to by the question, \'How would she _______ happened?\'',

options: ['Current calm',

 'Imminent rain',

 'Latent sky',

 'Rumbling clouds'],
answer: "Imminent rain"
  },
  {
    numb: 38,
    question: '<i>' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '</i>' + '<br />' + ' The extract is ',

options: ['drama',

 'poetry',

 'prose',

 'story'],
answer: "poetry"
  },
  {
    numb: 39,
    question: ' One special feature of prose is the _____.',

options: ['paragraph',

 'stanza',

 'stage direction',

 'rhyme'],
answer: "paragraph"
  },
  {
    numb: 40,
    question: ' The work of the novelist is in _____.',

options: ['drama',

 'poetry',

 'prose',

 'verse'],
answer: "prose"
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];