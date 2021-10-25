

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + 'S\u025B  wo d\u2184fo bi b\u025B sra wo awia na \u2184rek\u2184 a, woma no',  	
  	options:['due ne aw\u2184w',
			 'due ne wia',
			 'due ne br\u025B ',
			 'due ne nwunu'],
  	answer: 1
  },
  {	
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + 'S\u025B  wo ne obi rek\u2184 baabi na \u2184di kan na wok\u2184to no a, wokyia no s\u025B …',
	options:[ 'mema wo ahyia',
			  'mema wo \u2184duru',
			  'nky\u025B re ba',
			  'mema wo akwaaba'],
	answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + 'W\u2184wo ab\u2184fra na \u2184di _____a, w\u2184to ne din',
  	options:['adaduanan',
			 'afe',
			 'nnaw\u2184twe',
			 'bosome'],
  	answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + 'Akanfo de w\u2184n babarima panin to______',  	
  	options:[ 'abusuapanin',
			  'agya nua panyin',
			  'agya kumaa',
			  'agya papa'],
  	answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + 'S\u025B  \u2184barima ware a, ne yere maame nuanom y\u025B  ne',  	
  	options:[ 'nsenom',
			  'koranom',
			  'nkumaafo',
			  'nsenkumaa'],
  	answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + 'S\u025B  \u2184bea ware a, ne kunu nuammarima y\u025B  ne ______',		
  	options: ['koranom',
			  'nkontanom',
			  'nsenom',
			  'kununom'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + '\u2184bea ware a, ne kunu nuammarima mma y\u025B  ne_______',	 
  	options: [ 'koramma',
			   'nananom',
			   'mmannoma',
			   'mma'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo nkyea, edin ne abusuab\u2184 ho.' + '</b>' + '<br>' + 'Nsu ne nsa a w\u2184de s\u2184 abofra anom ber\u025B  a w\u2184reto ne din no kyer\u025B  ______',
		options: [ 'aho\u2184den',
				   'anotew',
				   'nokwaredi',
				   'papa ne b\u2184ne'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + ' Abamo akyiwade ne______',		
  	options: ['akok\u2184',
			  'okisi',
			  '\u2184twe',
			  'wansane'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Akanman mu s\u025B  obi rewu a,______',		
  	options: [' w\u2184gu n’anom nsu',
			  'w\u2184de no to ne benkum so',
			  'w\u2184ns\u2184 ne mu',
			  'w\u2184 teatea no'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Nne\u025B ma a Akanfo de gya owufo kwan no w\u2184fr\u025B  no d\u025B n?',
		options: ['akatasode',
				  'aky\u025B de',
				  'asiede',
				  'nkradi'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'S\u025B  obi de ka na owu a, hena na otua ka no?',
		options: ['abusuapanyin',
				  'anuanom',
				  'obiara ntua',
				  'odiadefo'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Kuku a okunafo k\u2184b\u2184 no kurotia no kyer\u025B  s\u025B ______',		
  	options: ['\u2184ne ne kunu adi ntetewmu',
			  '\u2184mp\u025B  kuku no',
			  'ne bo afu',
			  '\u2184nnidi bio'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Ansa na w\u2184b\u025B goru abeawa bi bra no, w\u2184k\u2184b\u2184 hena amanne\u025B ?',		
  	options: ['abusuapanin',
			  '\u2184hemmea',
			  '\u2184hene',
			  'nananom'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'S\u025B  w\u2184goro abeawa bi kyiribra a, _____.',		
  	options: ['\u025B hy\u025B  abusua no animuonyam',
			  '\u025B ma \u2184baa no nya dwetiri',
			  '\u025B gu awofo no anim ase',
			  '\u025B ma \u2184bea no nya kunu pa'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.' + '</b>' + '<br>' + 'Eyinom biako nka \u2184hemaa adwuma hoo',		
  	options: ['\u2184siesie ns\u025B m',
			  '\u2184tu \u2184hene fo',
			  '\u2184tumi pa \u2184hene',
			  '\u2184noa \u2184hene aduan'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.' + '</b>' + '<br>' + 'Nnipakuw yi mu biako nni dwuma w\u2184 Akanfo as\u025B nni mu.',		
  	options: ['adansefo',
			  'l\u2184yafo',
			  'agyinatufo',
			  'badwafo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.' + '</b>' + '<br>' + 'S\u025B  Akanfo retu agyina w\u2184 as\u025B nni mu a, na \u025B kyer\u025B  d\u025B n?',		
  	options: ['w\u2184rek\u2184bisa aberewa',
			  'w\u2184rek\u2184didi aba',
			  'w\u2184atu as\u025B m no ahy\u025B  da',
			  'w\u2184regye w\u2184n ahome'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.' + '</b>' + '<br>' + 'Hena na \u2184hw\u025B  \u2184hene foto so?',		
  	options: ['Ank\u2184beahene',
			  'Gyaasehene',
			  'Sanahene',
			  'Kurontihene'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.' + '</b>' + '<br>' + 'Hena na \u2184yan \u2184hene atumpan?',		
  	options: ['\u025B s\u025B n',
			  '\u2184kyer\u025B ma',
			  'abrafo',
			  'mm\u025B nsonfo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.' + '</b>' + '<br>' + 'Aboa b\u025B n na Kumawufo de di Papa afahy\u025B ?',		
  	options: ['\u2184sono',
			  '\u2184twe',
			  'nantwie',
			  'wansane'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo ahenni, as\u025B nni ne afahy\u025B  ho.' + '</b>' + '<br>' + 'S\u025B  \u2184hene reba aguab\u2184 ase afahy\u025B  bere a, _____',		
  	options: ['\u2184nante b\u2184k\u2184\u2184',
			  '\u2184kasakasa',
		  	  '\u2184hurihuri',
			  '\u2184tu mmirika'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.' + '</b>' + '<br>' + 'W\u2184fr\u025B  w\u2184n a w\u2184di \u2184b\u2184fo akyi k\u2184 ahay\u2184 s\u025B ______',
		options: ['aboafo',
			      'ayawfo',
				  'akyidifo',
				  'asomafo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.' + '</b>' + '<br>' + 'Akanfo\u2184 tumi fr\u025B  Akwasidae s\u025B _____',		
  	options: ['F\u2184kwasi',
			  'Monokwasi',
			  'Nkyikwasi',
			  'Kurukwasi'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.' + '</b>' + '<br>' + 'Benada Dapaa adekyee\u025B  y\u025B ______',		
  	options: ['Kwawuku',
			  'Kurudapaaku',
			  'Monowuku',
			  'Ngonawuku'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.' + '</b>' + '<br>' + 'Akwasid\u025B \u025B  biara Akanfo_____.',		
  	options: ['gu nsa',
			  'b\u2184 tikwa',
			  'hy\u025B  fa',
			  'nnidi'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.' + '</b>' + '<br>' + 'S\u025B  w\u2184regye aware a, \u2184bea no abusuafo taa de ti-ade no _____.',		
  	options: ['k\u2184ma abusuapanin',
			  'k\u2184gye w\u2184n ani',
			  'k\u2184tua abusua ka bi',
			  'k\u2184ma \u2184hemaa'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.' + '</b>' + '<br>' + 'Agyapade titiriw a efi aware mu ba ne_____.',		
  	options: ['Ay\u2184nkofa',
			  'Anigye',
			  'Sika',
			  'Mma'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a \u025B fa Akanfo aware, nnap\u2184nna ne adwuma ho.' + '</b>' + '<br>' + 'Hena na \u2184gu \u2184bea no hyirew w\u2184 awaregyae\u025B  mu?',		
  	options: ['Nkontanom',
			  'Nana',
			  'Nsenom',
			  'Nkumaafo'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.' + '</b>' + '<br />' + 'Ab)fra nnim adware3 a 3ny3______',		
  	options:['n’anim',
			 'n’afuru so',
			 'ne k\u2184n ho',
			 'ne nsa ho'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.' + '</b>' + '<br />' + 'Aberewa b\u025B di tw\u025B re a, na efi _____.',
		options: ['n’ano',
			  	  'ne nsa',
				  'ne nananom',
				  'ne poma'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.' + '</b>' + '<br />' + 'Wopam ohufo a, ______',		
  	options: ['ne koma te',
			  'woto ne barima',
			  '\u2184twe sekan',
			  'wonya as\u025B m'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.' + '</b>' + '<br />' + 'S\u025B  woy\u025B  bi na any\u025B  yiye a, w\u2184fr\u025B  wo______',		
  	options: ['ay\u025B biagya',
			  'ay\u025B biagu',
			  'ay\u025B boafo',
			  'ay\u025B biakyer\u025B '],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.' + '</b>' + '<br />' +  'Agya ade\u025B  bi w\u2184 h\u2184, s\u025B  wotia n’ayaase a, na \u2184resere. \u025B y\u025B ______',		
  	options: ['apaso\u2184',
			  'kaa',
			  'mpaboa',
			  'dadefiri'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo mm\u025B  ne agya rek\u2184 ho.' + '</b>' + '<br />' + 'Agya nipa bi w\u2184 h\u2184, \u2184te fie a na n’ab\u2184dwes\u025B  gu ab\u2184nten. \u025B y\u025B ______',		
  	options: ['ab\u025B ',
			  'mframa',
			  'wisiw',
			  'nsu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.' + '</b>' + '<br>' + 'Kane no na w\u2184fr\u025B  ananses\u025B m s\u025B n?',
	options: ['Nyankons\u025B m',
			  'Abas\u025B m',
			  'B\u2184sr\u025B mka',
			  'Adomankomas\u025B m'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.' + '</b>' + '<br>' + 'S\u025B nti a tete no na w\u2184nto ananses\u025B m awia ne s\u025B _____',		
  	options: ['ahuhuro b\u025B de wo',
			  '\u025B ny\u025B  anigye',
			  'y\u025B mm\u2184 mmoa din awia',
			  '\u025B s\u025B e adwumay\u025B '],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.' + '</b>' + '<br>' + 'Asantefo atetes\u025B m kyer\u025B  s\u025B _____na w\u2184de egya bae\u025B .',		
  	options: ['Asonafo',
			  'Biretufo',
			  'Aduanafo',
			  '\u2184yokofo'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.' + '</b>' + '<br>' + 'W\u2184ny\u025B  eyinom biako w\u2184 nsagu mu.',		
  	options: ['w\u2184kata w\u2184n ani',
			  'w\u2184b\u2184 abosom ne nsamanfo din',
			  'w\u2184pia w\u2184n ntama gu w\u2184n mmatiri',
			  'w\u2184yi w\u2184n nan mu mpaboa'],
		answer: 0
  }, 
 {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 atetes\u025B m, ananses\u025B m, nsagu ne ns\u025B nkyer\u025B nne\u025B  a \u025B kasa ho.' + '</b>' + '<br>' + 'Akanman mu s\u025B  obi resaw na \u2184foforo pagya ne nsa kyer\u025B  no a, \u025B kyer\u025B  s\u025B n?',		
  	options: ['\u2184nnyae asa',
			  '\u2184ma no mo',
			  'dwom no y\u025B  d\u025B ',
			  '\u2184nnyina h\u2184'],
		answer: 1
  } 
]