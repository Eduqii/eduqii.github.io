

//Array of Objects
const quiz = [
  {
  	question:'Nkyia de d\u025B n na \u025B ba obi so?',
   	options:['Awer\u025B how ne animka',
			 'Osu ne menaasep\u2184w',
			 'Ahos\u025B p\u025B w, obu ne nidi',
			 'Nyansa ne nitan'],
  	answer: 2
  },
  {
  	question:'\u025B hefa na y\u025B te nkyia \"hy\u025B  den?\"',
  	options:['Ayiase',
			 'Awaregye ase',
		  	 'Nkurob\u2184 mu',
			 'Ayeforohyia ase'],
  	answer: 0
  },
  {	
  	question: 'Akanfo taa kyia akokoaa a w\u2184awo no foforo',
	options:[ 'Ayikoo ne awo',
			  'Aba-a-tena-ase',
			  'Kos\u025B kos\u025B ',
			  'Nkyer\u025B  oo'],
	answer: 1
  },
  {
  	question:'Aware mu no, hefo na wogu \u2184bea no hyirew?',  	
  	options:[ 'Ad\u2184fonom',
			  'Nsewnom',
			  'Nkontanom',
			  'Nkumaafo'],
  	answer: 3
  },
  {
  	question:'S\u025B  \u2184bea bi kunu ka baabi na owufo no nuabarima ware no a, \u025B y\u025B ______',
  	options:[ 'Ay\u025B te',
			  'Kunaware',
		  	  'Asiwa',
			  'Mpenaware'],
  	answer: 1
  },
  {
  	question: 'Abofra a ne na dii awommawu ansa na w\u2184rewo no no y\u025B ______',		
  	options: ['Ankonam',
			  'K\u2184sanba',
			  '\u2184defo',
			  'Oduefo'],
		answer: 1
  },
  {
  	question: 'Din ahorow yi mu nea \u025B w\u2184 he na \u025B y\u025B  ap\u025B nt\u025B din?',	 
  	options: [ 'Kaakyire',
			   'Asaseasa',
			   'Ahenkan',
			   'Piesie'],
		answer: 1
  },
  {
  	question: 'Duku y\u025B  abofra a \u2184t\u2184 so _____ w\u2184 awo ntoatoaso mu.',		
  	options: [ 'dunan',
			   'dunum',
			   'dubiako',
			   'du'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho.\n' + '</b>' +  'Akanfo Kasadwini gu ahorow ahe?',		
  	options: ['Anum',
			  'Anan',
			  'Abi\u025B sa',
			  'Abien'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho.\n' + '</b>' + 'Nea edidi so yi mu biako y\u025B  Anom Kasadwini.',		
  	options: ['Anwens\u025B m',
			  'Abas\u025B m',
			  'Ahw\u025B goru',
			  'Ananses\u025B m'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho.\n' + '</b>' + 'Nea \u025B w\u2184 he na \u025B y\u025B  Akyer\u025B w Kasadwini?',		
  	options: ['Amoma',
			  'Nsaguo',
			  'Anwens\u025B m',
			  'Apae'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo kasadwini ho.\n' + '</b>' + 'Anom Kasadwini su biako ne s\u025B  _______',
		options: ['\u025B y\u025B  \u2184man no nyinaa dea',
			 	  '\u025B w\u2184 \u2184kyer\u025B wfo p\u2184tee',
				  'enni nhyehy\u025B e p\u2184tee',
				  'enni \u2184y\u025B fo ne atiefo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n' + '</b>' + 'Akanfo gyidi ne s\u025B  nt\u2184n sunsum no fi _____',
		options: ['\u025B na',
				  'W\u2184fa',
				  'Agya',
				  'Abusuapanyin'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n' + '</b>' + 'Abusuakuw b\u025B n na w\u2184n akraboa no ara y\u025B  w\u2184n din?',		
  	options: ['Aduana',
			  '\u025B ko\u2184na',
			  'Agona',
			  'Asakyiri'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n' + '</b>' + 'Abusuakuw b\u025B n na w\u2184w\u2184 akraboa abien?',		
  	options: ['Asona',
			  '\u025B ko\u2184na',
			  'Agona',
			  'Aduana'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n' + '</b>' + ' …_____. y\u025B  Agona abusuakuw no akraboa.',		
  	options: ['Kwaakwaadabi',
			  'Akoroma',
			  'Akoo',
			  '\u025B ko\u2184'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo mmusuakuw ne nt\u2184n ho.\n' + '</b>' + 'Akanman mu, hena ne abusua no nyinaa ti?',		
  	options: ['Abusuapanyin',
				  'Ayipasohene',
				  'Nkwaankwaahene',
			 	  'Adadifo'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.' + '</b>' + 'Ade titiriw b\u025B n na Akamfo hw\u025B  ansa na w\u2184apaw \u2184hene?',		
  	options: ['Onipa tenten bran',
			  '\u025B s\u025B  s\u025B  \u2184y\u025B  \u2184dehye kronn',
			  'Ohiani a \u2184w\u2184 mma bebree',
			  'Obi a otumi di akakabens?m'],
		answer: 1
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.' + '</b>' + 'S\u025B  \u2184hene tu kwan a, \u2184de \u2184man no gyaw hena?', 		
  	options: ['Safohene',
			  '\u2184kyeame',
			  'Kurontihene',
			  'Dabehene'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.' + '</b>' + '…_____ na \u2184hw\u025B  \u2184hene ne \u2184mamfo sika so w\u2184 ahemfi.',		
  	options: ['Gyaasehene',
			  'Sodoohene',
			  'Mmerantehene',
			  'Sannaahene'],
		answer: 3
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.' + '</b>' + 'S\u025B  \u2184mamfo hyia w\u2184 aguab\u2184 ase a, hena na ogu nsa?',		
  	options: ['\u2184kyeame',
			  'Kurontihene',
			  'Safohene',
			  'Dabehene'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo ahenni ne ahemfi nhyehy\u025B e ho.' + '</b>' + 'S\u025B  Akanfo reyi apae a, hena na wodi kan b\u2184 ne din?',		
  	options: ['Asase Yaa',
			  'Onyankop\u2184n',
			  'Nsamanfo',
			  'Ateasefo'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Nne\u025B ma kuw yi mu nea \u025B w\u2184 he na okuafo de adwuma?',
		options: ['\u2184sos\u2184w, twitae, asadua',
				  'As\u2184w, asaa, peaw',
			 	  'Nkrante, \u2184sos\u2184w, as\u2184w',
				  'Asadua, as\u2184w, k\u2184t\u2184kor\u2184'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Wok\u2184 \u2184tomfo adwuma mu a, wubenya ______ at\u2184.',		
  	options: ['k\u025B nt\u025B  ne nkrante',
			  'peaw ne adwiniasa',
			  'twitae ne bommo',
			  '\u2184sos\u2184w ne as\u2184w'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Dwom \"Kurohinko\" fa adwuma b\u025B n ho?',		
  	options: ['Nk\u2184b\u2184',
			  'Kentenwene',
			  'Atono',
			  'Ahay\u2184'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Hena na \u2184nto dwom w\u2184 n’adwumay\u025B  mu?',		
  	options: ['\u2184b\u2184mm\u2184fo',
			  'Okuafo',
			  'Kentenwenefo',
			  '\u2184tomfo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Toa \u025B b\u025B  yi so: \"Otuo tow a ______\"',		
  	options: ['esi \u2184barima bo',
			  '\u025B kanyan \u2184hene ma osuae',
			  'nkur\u2184fo b\u2184 hu',
			  'mmea konhintaw'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Mpanyin se: \"\u025B kaa akyekyere ne nnaw nko a anka ______\"',		
  	options: ['mmea b\u025B k\u2184 afum daa',
			  'mmofra b\u025B k\u2184 atwee da biara',
			  '\u2184b\u2184mm\u2184fo b\u025B da k\u2184m',
			  'otuo rentow wuram da'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Yaw M\u025B nsa buu n’adamfo no b\u025B  s\u025B : \" \u2184baakofo nsa______\"',   		
  	options: ['ntumi nguare ne ho',
			  'tumi d\u2184w n’afum',
			  'nso n’abusuafo nyinaa so',
			  'nso nyame ani kata'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Kasakoa yi ase ne d\u025B n? Adwuma no d\u2184\u2184so enti ma wo nsa so.',
		options:['Y\u025B  no nt\u025B mnt\u025B m',
				 'Pagyaw wo nsa k\u2184 soro',
				 'B\u2184 wo nsam \u2184hare so',
				 'Ka wo nsa abien b\u2184 mu'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, mm\u025B  ne kasakoa ho.\n' + '</b>' + 'Mprempren de, nna amee me nenabarima.',		
  	options: [' Ay\u025B  aberantewa koraa',
			  'Ay\u025B  basaa',
			  'Anyin papaapa',
			  'Ntumi nkasa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n' + '</b>' + '\u2184hene b\u025B n na otumi de \u025B sono si ne bamkyinii so?',		
  	options: ['Ab\u2184ntend\u2184mhene',
			  'Kurontihene',
			  'Guantoahene',
			  '\u2184manhene'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n' + '</b>' + '\u2184hene a _____.si n’akyeampomaa so no y\u025B  \u2184sonani.',		
  	options: ['\u2184kraman',
			  'kwaakwaadabi',
			  'akoroma',
			  'akoo'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n' + '</b>' + 'Kurow a Akyekyere ne nwaw da w\u2184n hene as\u025B s\u025B gua ho kyer\u025B  s\u025B  _____',
		options: ['w\u2184nka mmara',
			  	  'hwee ny\u025B  w\u2184n as\u025B m',
				  'w\u2184p\u025B  asomdwoe',
				  'mmoa abien no y\u025B  nam a w\u2184p\u025B  yiye.'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n' + '</b>' + 'Agyarek\u2184, ogyaa me asraafo \u2184ha a w\u2184n nyinaa ab\u2184so y\u025B  biako. \u025B y\u025B  d\u025B n?',		
  	options: ['\u2184prae',
			  'Muka',
			  'Asesawura',
			  'Asomurofi'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo tete nnwuma, ns\u025B nkyer\u025B nne a \u025B kasa ne Agyarek\u2184 ho.\n' + '</b>' + 'Agyarek\u2184, ogyaa me anuanom baanu nanso obiara nhu ne y\u2184nko anim. \u025B y\u025B  onipa',
		options: ['Nansoaa du',
				  'Nsa abien',
			 	  'Nan abien',
				  'Nniwa abien'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + '\"\u2184reb\u2184 ne dade so kyankyan\" y\u025B  dwom a \u025B fa hena ho?',		
  	options: ['\u2184tomfo',
			  '\u2184b\u2184mm\u2184fo',
			  '\u2184dansifo',
			  'okuafo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + '\"______…\" y\u025B  dwom a \u025B fa ad\u2184w ho.',		
  	options: ['Ayikoo, anyaado',
			  'K\u2184t\u2184k\u2184 sarewa, gyansarewa',
			  'Kurohinko, kurohinko na \u025B y\u025B  me d\u025B ',
			  'Adonko, fa me k\u2184 oo'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + 'Dwom b\u025B n na mmofra de di abosi agoru?',		
  	options: ['Mpempenaa, nana aa______',
			  'Obi ba o, yee yei!',
			  'Sansan koroma, wo ni awuo oo',
			  'As\u2184ba, yee yei, as\u2184ba'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na \u025B fa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + 'Mpempenaa agodi mu no, mmofra to dwom',		
  	options: ['k\u2184t\u2184k\u2184 sarewa, gyansarewa',
			  'as\u2184ba, b\u025B t\u2184 mu',
			  'oni wu o.',
			  'sii, sii, sii, sii dadako o.'],
		answer: 3
  } 
]