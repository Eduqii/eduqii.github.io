

//Array of Objects
const quiz = [
  {
		question: 'The part of the computer which displays information to the user in soft copy format is the',
		options: ['Monitor',
				  'Printer',
		          'Processor',
			 	  'Scanner'],
		answer: 0
	},
	{
		question: 'The sharpness of an image on a monitor screen is determined by the number of',
		options: ['Inches',
				  'Pits',
				  'Pixels',
				  'Units'],
		answer: 2
	},

	{
		question: ' Which of the following can be used as an input device and at the same time as an output device?',
		options: ['Microphone',
				  'Modem',
				  'Printer',
				  'Speaker'],
		answer: 1
	},

	{
		question: 'The device that uses the magnetic method to store data is',		
		options: ['compact disk',
			      'digital versatile disk',
				  'hard disk',
				  'optical disk'],
		answer: 2
	},

	{
		question: 'Which of the following devices has the largest storage capacity?',		
		options: ['Compact disk',
			      'Digital versatile disk',
				  'Flash memory',
				  'Hard disk'],
		answer: 3
	},

	{
		question: 'By default, the drive letter assigned to the hard disk drive is',		
		options: ['A:',
				  'B:',
				  'C:',
				  'D:'],
		answer: 2
	},

	{
		question: 'Which of the following devices must be turned on first when booting a computer?',
		options: ['Monitor',
				  'Printer',
				  'Scanner',
			      'System Unit'],
		answer: 3
	},

	{
		question: 'The program that is loaded into the main memory when a computer is booted is',
		options: ['Utility program',
				  'Operating system',
			  	  'Communication software',
				  'Word processing software'],
		answer: 1
	},

	{
		question: 'To copy a file means to',		
		options: ['Cut the file',
				  'Delete the file',
				  'Remove the file',
				  'Make a duplicate of the file'],
		answer: 3
	},

	{
		question: 'A group of files are stored in a',		
		options: ['Folder',
			  	  'Graphic',
				  'Text',
				  'Word'],
		answer: 0
	},

	{
		question: 'The area of the taskbar that displays small icons of some programs such as the system clock is',
		options: ['Programs area',
				  'Scroll bar',
				  'Start menu',
			  	  'System tray'],
		answer: 3
	},

	{
		question: 'Which of the following is a problem to computer users as a result of radiation from the monitor?',
		options: ['Cardiovascular',
				  'Dizziness',
				  'Eye irritation',
				  'Loss of grip strength'],
		answer: 2
	},

	{
		question: 'Dragging a folder from one drive to a window on another drive is equivalent to a',
		options: ['Cut operation',
				  'Copy operation',
				  'Delete operation',
				  'Move operation'],
		answer: 1
	},

	{
		question: 'Which of the following safety precaution(s) is/are advisable to practice?\n' + 'I. Do not answer or receive calls when charging mobile phones\n' + 'II. Do not overload sockets' + 'III. Plugging ICT tools in damaged sockets can be allowed sometimes.',
		options: ['I and II only',
				  'I and III only',
				  'II and III only',
				  'I, II and III'],
		answer: 0
	},

	{
		question: 'A computer program that can copy itself and infect the computer without the permission or knowledge of the user is',
		options: ['Virus',
				  'Anti-virus',
				  'Window',
			 	  'Word processor'],
		answer: 0
	},

	{
		question: 'The software that assists students in learning and can also be used to take online examinations is',
		options: ['Classroom software',
			  	  'Education software',
				  'Entertaining software',
				  'Graphic software'],
		answer: 1
	},

	{
		question: 'ICT tools can be used in all the following areas except',
		options: ['Sharing ideas',
				  'Starting cabinetry',
				  'Accessing information',
				  'Retrieving information'],
		answer: 1
	},

	{
		question: 'The act of clicking on an object and dragging it to a different location is referred to as',
		options: ['Drop-and-drag',
				  'Drag-and-drop',
				  'Drop-and-move',
				  'Drag-and-paste'],
		answer: 1
	},

	{
		question: 'When pursuing typing lessons, computer users are expected to use',		
		options: ['5 fingers',
				  '6 fingers',
				  '8 fingers',
				  '10 fingers'],
		answer: 3
	},

	{
		question: 'Which of the following keys is not a function key on the computer keyboard?',
		options: ['F1',
				  'F2',
				  'F9',
				  'F13'],
		answer: 3
	},

	{
		question: 'The computer keyboard combination that would move the cursor insertion point to the beginning of the current document is',
		options: ['Ctrl + B',
				  'Ctrl + H',
				  'Ctrl + Home',
				  'Ctrl + PgUp'],
		answer: 1
	},

	{
		question: 'Which of the following commands is used to resave an edited file with the same file name?',
		options: ['A. Copy',
				  'Save',
				  'Save As',
				  'Send'],
		answer: 1
	},


		{
		question: 'Computerized text editing is also referred to as',		
		options: ['Database application',
				  'Desktop application',
			  	  'Spreadsheet application',
				  'Word processing application'],
		answer: 3
	},

	{
		question: 'In order to apply bold formatting to a section of existing text, the user must first',
		options: ['Save the document',
				  'Click the start button',
				  'Click on the formatting button',
				  'Select the section to be formatted'],
		answer: 3
	},

	{
		question: 'Text that is justified is',		
		options: ['Adjusted to meet one margin',
			      'Adjusted to meet both margins',
				  'Grammatically correct',
				  'Only visible in print preview'],
		answer: 1
	},

	{
		question: 'Which of the following keys are used to underline a text in word processing?',
		options: ['Ctrl + B',
				  'Ctrl + H',
				  'Ctrl + I',
				  'Ctrl + U'],
		answer: 3
	},

	{
		question: 'When a text automatically moves to the next line at the end of a margin in a word processing program, it is referred to as',
		options: ['Text wrap','Word wrap','Hard return','Text movement'],
		answer: 1
	},

	{
		question: 'The default orientation for a word processing document is',
		options: ['A4',
			  	  'Landscape',
				  'Letter',
				  'Portrait'],
		answer: 3
	},

	{
		question: 'To print a document after previewing, use the',		
		options: ['Edit command button',
				  'Open command button',
				  'Print command button',
				  'Save command button'],
		answer: 2
	},

	{
		question: 'On an email interface, which of the following areas is mandatory to complete and send a message?',
		options: ['Sender body',
				  'Sender name',
				  'Message header / subject',
				  'Message recipient email address'],
		answer: 3
	},

	{
		question: 'Which of the following domain name extensions is used by educational institutions?',
		options: ['.com',
				  '.edu',
				  '.net',
				  '.org'],
		answer: 1
	},

	{
		question: 'Which of the following is a web browser?',		
		options: ['Firewall',
				  'Opera',
				  'Windows',
				  'Yahoo'],
		answer: 1
	},

	{
		question: 'Which feature in a browser enables users to fetch the latest copy of a web page?',
		options: ['Backward',
				  'Forward',
				  'Refresh',
				  'Stop'],
		answer: 2
	},

	{
		question: 'Transmitting data from a local computer to a remote computer is referred to as',
		options: ['Downlinking',
				  'Downloading',
				  'Uplinking',
				  'Uploading'],
		answer: 3
	},

	{
		question: 'The http:// in a website address refers to',
		options: ['Domain name',
				  'Directory name',
				  'File name',
				  'Protocol'],
		answer: 3
	},
	
	{
		question: 'The command button that opens a dialog box for users to create an email message is',
		options: ['Back button',
				  'Compose button',
				  'Create button',
				  'Refresh button'],
		answer: 1
	},

	{
		question: 'A spreadsheet cell name is referenced by a',		
		options: ['Letter',
			  	  'Number',
				  'Letter and a number',
				  'Number and a letter'],
		answer: 2
	},

	{
		question: 'Mathematical calculations in a spreadsheet are called',		
		options: ['Formulas',
				  'Labels',
				  'Numbers',
				  'Values'],
		answer: 0
	},

	{
		question: 'Which of the following does a user need to bypass before accessing an email?',
		options: ['Username and computer name',
			 	  'Username and email name',
				  'Username and password',
				  'Username and yahoo'],
		answer: 2
	},

	{
		question: 'To apply a formula or function in a spreadsheet program, the symbol used is',
		options: ['= or *',
				  '= or +',
				  '= or /',
				  '= or –'],
		answer: 3
	}
]