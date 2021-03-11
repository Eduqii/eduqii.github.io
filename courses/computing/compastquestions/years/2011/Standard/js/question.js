

//Array of Objects
const quiz = [
  //q1
  {
		question: 'The most common means by which data are input into the computer is through the',		
		options: ['mouse',
				  'keyboard',
				  'microphone',
				  'joystick'],
		answer: 1
	},
	//q2
	{
		question: 'Computer devices such as mouse, trackpad and joystick are referred to as',		
		options: ['Output devices',
				  'Pointing devices',
				  'Standard devices',
				  'Internal devices'],
		answer: 1
	},
	//q3
	{
		question: 'The flat panel screen is also known as',		
		options: ['LCD',
				  'VCD',
				  'CRT',
			   	  'OCR'],
		answer: 0
	},
	//q4
	{
		question: 'Which of the following is a storage medium?',		
		options: ['Mouse',
				  'Printer',
				  'Keyboard',
			 	  'Flash memory'],
		answer: 3
	},
	//q5
	{
		question: 'The two components of the personal computer main memory are',		
		options: ['RAM and CU',
				  'RAM and ROM',
				  'ROM and CU',
				  'ALU and CU'],
		answer: 1
	},
	//q6
	{
		question: 'Which of the following devices has the largest storage capacity?',
		options: ['Digital Versatile Disc',
				  'Compact Disc',
				  'Floppy disk',
				  'Hard Disk'],
		answer: 3
	},
	//q7
	{
		question: 'The process that starts an operating system when a computer system is turned on is referred to as',
		options: ['Loading',
				  'Start up',
				  'Booting',
				  'Shut down'],
		answer: 2
	},
	//q8
	{
		question: 'Which of the following statements is not true?',		
		options: ['Remove all removable storage media or device from the system unit when switching on a computer.',
				  'Shut down a computer system before removing the electric power supply',
				  'Random access memory is part of main memory',
				  'The application software must be loaded before an operating system can be loaded when a computer system is switched on.'],
		answer: 3
	},
	//q9
	{
		question: 'GUI stands for',		
		options: ['Grand User Interface',
				  'General User Interface',
				  'Graphic User Interface',
				  'Graphical User Interrupt'],
		answer: 2
	},
	//q10
	{
		question: 'The software that manages the communication between the hardware and the application software of a computer system is called',		
		options: ['open office',
				  'Microsoft office',
				  'operating system',
				  'internet'],
		answer: 2
	},
	//q11
	{
		question: 'Windows organizes information on computers using a',		
		options: ['Directory',
				  'folder',
				  'subdirectory',
				  'disk'],
		answer: 1
	},
	//q12
	{
		question: 'Which of the following are valid folder names\n' + 'I. Black/Stars\n' + 'II. Black : Stars\n' + 'III. Black_Stars\n' + 'IV. Black Stars',		
		options: ['I and II only',
				  'II and III only',
				  'III and IV only',
				  'II and IV only'],
		answer: 2
	},
	//q13
	{
		question: 'Use the following information to answer this question\n' + 'I. Processing\n' + 'II. Data\n' + 'III. Information\n' + 'The sequence of the stages in the information processing cycle is',		
		options: ['I, II and III',
				  'II, III and I',
				  'II, I and III',
				  'III, I and II'],
		answer: 2
	},
	//q14
	{
		question: 'Which of the following is not a safety measure to consider in the ICT environment?',
		options: ['Not overloading a socket',
				  'Sitting in a correct posture behind the computer',
				  'Allowing the battery of a laptop to run-down before charging',
				  'Avoid plugging computers in damaged sockets'],
		answer: 3
	},
	//q15
	{
		question: 'The legal right to control the production and selling of a book, play, film and software is known as',		
		options: ['Production right',
				  'Copyright',
				  'Trade mark',
				  'Patent'],
		answer: 1
	},
	//q16
	{
		question: 'Which of the following can bring enhanced learning experience to the classroom through the use of pictures, videos and sound?',
		options: ['Software application',
				  'Multimedia software',
				  'Learning software',
				  'Teaching and learning software'],
		answer: 1
	},
	//q17
	{
		question: 'Which of the following is an effect of a loud ringing tone of a mobile phone?',		
		options: ['Wrist pain',
				  'Neck pain',
				  'Headache',
				  'Hearing impairment'],
		answer: 3
	},
	//q18
	{
		question: 'To which of the following activities is ICT useful?\n' + 'I. Education\n' + 'II. Farming\n' + 'III. Medicine\n',		
		options: ['I and II only',
				  'I and III only',
				  'II and III only',
				  'I, II and III'],
		answer: 3
	},
	//q19
	{
		question: 'Which of the following keys are frequently used in our daily typing work on a computer system?\n' + 'I. Enter key\n' + 'II. Space Bar\n' + 'III. Print Screen\n' + 'IV. Delete Key',		
		options: ['I, II, III and IV',
				  'I, II and III only',
				  'I, II and IV only',
				  'II, III and IV only'],
		answer: 0
	},
	//q20
	{
		question: 'During typing lessons, computer users are supposed to use',		
		options: ['5 fingers',
				  '6 fingers',
				  '8 fingers',
				  '10 fingers'],
		answer: 3
	},
	//q21
	{
		question: 'The most appropriate finger required to type the letter F on a standard QWERTY computer keyboard is the',
		options: ['left middle finger',
				  'right middle finger',
				  'left index finger',
				  'right index finger'],
		answer: 2
	},
	//q22
	{
		question: 'In the absence of a mouse, which of the following devices could be used to perform its functions?',
		options: ['Scanner',
				  'Webcam',
				  'Keyboard',
				  'Microphone'],
		answer: 2
	},
	//q23
	{
				question: 'In typing a class assignment given by a Ghanaian Language teacher using the computer, which of the following application programs will be appropriate to use by the student?',
		options: ['Spreadsheet program',
				  'Word processing program',
				  'Database program',
			   	  'Graphical program'],
		answer: 1
	},
	//q24
	{
		question: 'A key on a keyboard of a computer has two symbols on it, top and down. Which of the following procedures will be appropriate to use to get the top key?',
		options: ['Edit menu',
			  	  'File menu',
			  	  'Format menu',
				  'Insert menu'],
		answer: 2
	},
	//q25
	{
		question: 'To save a previously saved document under a new name, use the',
		options: ['save command',
			 	  'rename command',
				  'resave command',
				  'save as command'],
		answer: 3
	},
	//q26
	{
		question: 'To bold a text in a word processing environment, first select the text, then use the shortcut keys',
		options: ['Ctrl + B',
				  'Shift + B',
				  'Alt + B',
				  'Insert + B'],
		answer: 0
	},
	//q27
	{
		question: 'The symbols B, I, U are commonly used buttons found on the',
		options: ['standard toolbar',
				  'menu bar',
				  'formatting toolbar',
				  'drawing toolbar'],
		answer: 2
	},
	//q28
	{
		question: 'Which of the following is not a tool on the drawing toolbar?',		
		options: ['Arc',
				  'Oval',
				  'Drop cap',
				  'Lines'],
		answer: 2
	},
	//q29
	{
		question: 'Which of the following is not a toolbar?',
	options: ['Drawing toolbar',
			  'Picture toolbar',
			  'Word Art toolbar',
			  'Word Wrap toolbar'],
		answer: 3
	},
	//q30
	{
		question: 'Lines, block arrows and flowcharts are located on the',		
		options: ['drawing toolbar',
				  'standard toolbar',
				  'formatting toolbar',
				  'menu bar'],
		answer: 0
	},
	//q31
	{
		question: 'The default orientation for a word processing document is',
		options: ['landscape',
				  'portrait',
				  'legal',
				  'A4'],
		answer: 1
	},
	//q32
	{
		question: 'To preview a document before printing is necessary because',		
		options: ['it displays the name of the document',
				  'it displays how the document will look like after printing',
				  'it displays copy and paste of the document',
				  'it formats the document'],
		answer: 1
	},
	//q33
	{
		question: 'A computer program that enables users to surf the internet is known as',
		options: ['internet surfer',
				  'internet browser',
				  'web surfer',
				  'web navigator'],
		answer: 1
	},
	//q34
	{
		question: 'A teacher using the internet decided to send an electronic mail to Junior High School Students in Ghana. Which of the following will the teacher use to accomplish his/her mission?',
		options: ['Website address',
				  'Data file address',
				  'E-mail address',
				  'Modern address'],
		answer: 2
	},
	//q35
	{
		question: 'In e-mail context, what does bcc stand for?',		
		options: ['Blank carbon copy',
				  'Bulk carbon copy',
				  'Blind carbon copy',
				  'Backup carbon copy'],
		answer: 2
	},
	//q36
	{
		question: 'The worldwide network that makes electronic information available to users is also known as',
		options: ['Site',
				  'Web',
				  'Browser',
				  'Map'],
		answer: 1
	},
	//q37
	{
		question: 'Transferring data from a remote computer to a local computer is referred to as',		
		options: ['downloading',
			      'downlinking',
				  'uploading',
				  'uplinking'],
		answer: 0
	},
	//q38
	{
		question: 'A tool for locating information on the internet is the',		
		options: ['universal engine',
				  'database engine',
				  'search engine',
				  'deep web'],
		answer: 2
	},
	//q39
	{
		question: 'A mathematical calculation in a spreadsheet is called',		
		options: ['label',
				  'formula',
				  'number',
				  'value'],
		answer: 1
	},
	//q40
	{
		question: 'Which of the following features in a browser enables users to fetch the latest copy of a web page?',
		options: ['Refresh',
				  'Forward',
				  'Backward',
				  'Stop'],
		answer: 0
	}
]