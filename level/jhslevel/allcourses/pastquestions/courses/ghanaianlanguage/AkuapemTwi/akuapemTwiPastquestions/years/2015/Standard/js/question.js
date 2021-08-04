

//Array of Objects
const quiz = [
  {
  	question:'\u2184bea wo abofra a, w\u2184ma no',  	
  	options:['Dammirifua',
			 'Hy\u025B den',
			 'Darekena',
			 'Tirinkwa'],
  	answer: 3
  },
  {	
  	question: 'Wudidi na obi ma wo kita mu a, wubegye so d\u025B n?',
	options:[ 'Magyae mu',
			  'Yoo mate',
			  'Mikura no',
			  'Woamma nt\u025B m'],
	answer: 2
  },
  {
  	question:'Paw ap\u025B nt\u025B din a \u025B w\u2184 nea edidi so yi mu.',
  	options:['Asaase asa',
			 'Agyeman',
			 'Nyankomago',
			 'Akua Badu'],
  	answer: 0
  },
  {
  	question:'Hyehy\u025B  din yi nnidiso nnidiso',  	
  	options:[ 'Yaw, Kwasi, Kwabena',
			  'Kwabena, Kwaku, Yaw',
			  'Kwame, Yaw, Kofi',
			  'Kwaku, Kwasi, Kwadwo'],
  	answer: 1
  },
  {
  	question:'\u025B y\u025B  akyiwade s\u025B  yedidi a',  	
  	options:[ 'Y\u025B we nam',
			  'Y\u025B fr\u025B  obi ma odi bi',
			  'Y\u025B de y\u025B n nsa si fam',
			  'Y\u025B nom nsu'],
  	answer: 2
  },
  {
  	question: 'Wo maame papa y\u025B  wo d\u025B n',		
  	options: ['Nanabea',
			  'Nanabarima',
			  'w\u2184fasewa',
			  'papa panyin'],
		answer: 1
  },
  {
  	question: 'Maame Yaa ne maame Akua ware \u2184barima biako, enti w\u2184y\u025B ',	 
  	options: [ 'akorafo',
		 	   'nnamfo',
			   'anuanom',
			   'atip\u025B nfo'],
		answer: 0
  },
  {
  	question: 'Wo maame nuabarima y\u025B  wo d\u025B n?',		
  	options: [ 'w\u2184fa',
			   'w’agya kumaa',
			   'w\u2184fasewa',
			   'w\u2184fase'],
		answer: 0
  },
  {
  	question: 'Wogoru abeawa bi bra a na \u025B kyer\u025B  s\u025B ',		
  	options: ['n’abusuafo w\u2184 sika',
			  'ne maame p\u025B  n’as\u025B m',
			  'ne ho ay\u025B  f\u025B ',
			  'wanyin'],
		answer: 3
  },
  {
  	question: 'S\u025B  w\u2184regoru abeawa bi bra a, w\u2184ma no',		
  	options: ['Otuo',
			  'Bodua',
			  '\u2184t\u2184',
			  'ayitama'],
		answer: 2
  },
  {
  	question: 'Ade titiriw a Akanfo gyina so ware ne',		
  	options: ['aho\u2184f\u025B ',
			  'ahosiesie gonn',
			  'anotew b\u025B reb\u025B re',
			  'suban pa'],
		answer: 3
  },
  {
  	question: '\u2184barima ne \u2184bea ware a, na awofonom ab\u025B y\u025B ',
		options: ['Nkontafo',
				  'Nkumaafo',
				  'Nsewnom',
				  'Akorafo'],
		answer: 2
  },
  {
  	question: 'yiregu ba aware mu a, na \u025B kyer\u025B  s\u025B  aware no',		
  	options: ['Agu',
			  'as\u2184',
			  'afi ase',
			  'akorafo'],
		answer: 0
  },
  {
  	question: '\u2184sram b\u025B n na ekura nnafua 28 anaa 29?',		
  	options: ['Ogyefuo',
			  '\u2184b\u025B nem',
			  'Oforisuo',
			  'Kitawonsa'],
		answer: 0
  },
  {
  	question: 'Dapaa ahe na Akanfo w\u2184',		
  	options: ['Anan',
			  'Abien',
			  'Abi\u025B sa',
			  'Anum'],
		answer: 1
  },
  {
  	question: 'W\u2184ka s\u025B  oi aka nkyene agu a, \u025B kyer\u025B  d\u025B n?',
		options: ['Onni nkyene',
				  'Watu kwan',
				  'Wakohintaw',
				  'Wawu'],
		answer: 3
  },
  {
  	question: 'Nsawa y\u025B  ______a \u2184manfo de boa owufo bi abusuafo.',		
  	options: ['Ntama',
			  'Sika',
			  'Nnuan',
			  'Nsu'],
		answer: 1
  },
  {
  	question: 'Okuafo ma y\u025B n mfumduan. D\u025B n na \u2184b\u2184mm\u2184fo ma y\u025B n?',		
  	options: ['Hanam',
			  'Nkesua',
			  'Atosode',
			  'Nnuaba'],
		answer: 0
  },
  {
  	question: 'Mpanyimfo hyia a, hena na w\u2184kasa fa no so?',		
  	options: ['Odikuro',
			  '\u2184kyeame',
			  '\u2184safohene',
			  '\u025B s\u025B n'],
		answer: 1
  },
  {
  	question: 'Akanman mu \u2184hene b\u025B n na \u2184w\u2184 tumi sen ahemfo no nyinaa?',		
  	options: ['Sanaahene',
			  'Kurontihene',
			  'Dabehene',
			  '\u2184manhene'],
		answer: 3
  },
  {
  	question: 'Nkurow nketewa mu, hena na \u2184hene fa no so fr\u025B  \u2184manfo\u2184.',
		options: ['\u2184brafo',
				  '\u025B s\u025B n',
				  'dawub\u2184fo',
				  'ahenkwaa'],
		answer: 2
  },
  {
  	question: 'Nipa titiriw a \u025B paw \u2184hene no mu biako ne _______',		
  	options: ['\u2184kyer\u025B ma',
			  '\u2184brafo',
			  '\u2184hemmea',
			  'dawub\u2184fo'],
		answer: 2
  },
  {
  	question: '\u2184hene b\u025B n na \u2184hw\u025B  nsa so w\u2184 ahemfi',		
  	options: ['Dabehene',
			  '\u2184hemmea',
			  'Kurontihene',
			  'Sanaahene'],
		answer: 3
  },
  {
  	question: 'Obi tew owufo bi ntoa a, ase ne d\u025B n?',		
  	options: ['Wadi n’ade',
			  'Wat\u2184 funnaka',
			  'wab\u2184 da asie no',
			  'wak\u2184 ayi ase aba'],
		answer: 0
  },
  {
  	question: 'Nwaw ne akyekyere gyina h\u2184 ma d\u025B n?',		
  	options: ['nt\u2184kwaw',
			  'asomdwoe',
			  'patapaa',
			  'aho\u2184hare'],
		answer: 1
  },
  {
  	question: 'S\u025B  woka as\u025B m kyer\u025B  obi na \u2184wosow ne ti a, \u025B kyer\u025B  s\u025B ',		
  	options: ['\u2184renka hwee',
			  '\u2184mpene so',
			  'ka as\u025B m no bio',
			  'wagye ato mu'],
		answer: 1
  },
  {
  	question: 'Akanman mu ntama tuntum ne k\u2184k\u2184\u2184 gyina h\u2184 ma d\u025B n',		
  	options: ['anigye',
			  'ahos\u025B p\u025B w',
			  'awer\u025B how',
			  'ahot\u025B '],
		answer: 2
  },
  {
  	question: 'Ananses\u025B m mu no, Adanko ho as\u025B m taa kyer\u025B ',		
  	options: ['abufuw',
			  'anihaw',
			  'asisi',
			  'aho\u2184hare'],
		answer: 3
  },
  {
  	question: 'Agya rek? ogyaw me abofra bi. Wosoma no a, ?nk? . wok? nso a, na odi w’akyi. ?y? d?n?Agya rek\u2184 ogyaw me abofra bi. Wosoma no a, \u2184nk\u2184 . wok\u2184 nso a, na odi w’akyi. \u025B y\u025B  d\u025B n',
		options: ['Onipa sunsuma',
				  'Onipa nsateaa',
				  'Onipa nan',
			 	  'Onipa nsa'],
		answer: 0
  },
  {
  	question: 'Agya ade bi w\u2184 h\u2184. \u2184nk\u2184 asu nanso daa \u2184w\u2184 nsu w\u2184 n’ahina mu. \u025B y\u025B  d\u025B n?',
		options:['Mako',
				 'nt\u2184rewa',
				 'bor\u2184fere',
				 'kube'],
		answer: 3
  },
  {
  	question: 'Mpanyin kae a w\u2184mmoa s\u025B : wusum nkontopo afiri a, wuyi',
		options: ['nyansa',
				  'kasabr\u025B ',
				  'nokware',
				  'ayamuye'],
		answer: 1
  },
  {
  	question: 'Maame no ka kyer\u025B \u025B  ne ba no se: wok\u2184 aware a',
		options: ['kasa',
				  'didi',
				  'bisa',
				  'tena ase'],
		answer: 2
  },
  {
  	question: 'Toa saa \u025B b\u025B  yi so: woforo dua pa a, na',		
  	options: ['wopia wo',
			  'w\u2184kamfo wo',
			  'w\u2184ma wo amo',
			  'w\u2184b\u2184 nsam ma wo'],
		answer: 0
  },
  {
  	question: 'Akanfo yi apae a, w\u2184de ______ na etwa to.',		
  	options: ['Nyira',
			  'Nnome',
			  '\u2184fr\u025B ',
			  'nkurob\u2184'],
		answer: 1
  },
  {
  	question: 'Akanfo de mmor\u2184nsa yi apae a, w\u2184de nsa no gu k\u2184nk\u2184 no mu mp\u025B n ahe\"',
		options: ['Mp\u025B n asia',
				  'Mpr\u025B nsa',
				  'Mp\u025B n anan',
				  'Mp\u025B n anum'],
		answer: 1
  },
  {
  	question: 'Akyemfo afahy\u025B  titiriw ne',		
  	options: ['Bakatue',
			  'Aboakyere',
			  'Ohum',
			  'Kundum'],
		answer: 2
  },
  {
  	question: 'Dwumadi titiriw b\u025B n na Akanfo de wie afahy\u025B ?',		
  	options: ['akwamm\u2184',
			  'aguab\u2184',
			  'hyirewgu',
			  'nkankye'],
		answer: 1
  },
  {
  	question: 'Aman abien w\u2184 Ghana ha a w\u2184n mmrane ne K\u2184t\u2184k\u2184',		
  	options: ['Akuapem ne Asante',
			  'Kwawu ne Akyem',
			  'Akuapem ne Awawu',
			  'Asante ne Nzema'],
		answer: 3
  },
  {
  	question: 'D\u025B n na atetes\u025B m kyer\u025B  s\u025B  \u2184k\u2184mfo An\u2184kye de mpaboa foroe?',		
  	options: ['Mpampuro',
			  'Kokosi',
			  'bor\u2184fere',
			  'ab\u025B ten'],
		answer: 3
  },
  {
  	question: 'Hena na \u2184de ne nsa tuu \u2184ware wu \u2184bo mu no',		
  	options: ['\u2184k\u2184mfo An\u2184kye',
			  'Ansa Sasraku',
			  '\u2184s\u025B e Bonsu',
			  '\u2184koforobo\u2184'],
		answer: 0
  } 
]