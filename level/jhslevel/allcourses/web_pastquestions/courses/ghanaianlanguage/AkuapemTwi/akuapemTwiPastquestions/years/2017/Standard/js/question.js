

//Array of Objects
const quiz = [
  {
  	question:'Nkyia Adwuma, adwuma o, nnyeso ne?',
  	options:['Adwuma asa',
			 'Adwuma da ase',
			 'Adwuma ye',
			 'Adwuma y\u025B  den'],
  	answer: 2
  },
  {	
  	question: 'Wote nkyia hy\u025B  den a na woadu hefa?',
	options:[ 'Ayiase',
			  'Awaregye ase',
			  'Nnyedua ase',
			  'Ns\u2184ree so'],
	answer: 0
  },
  {
  	question:'S\u025B  obi ma wo aduan na wudidi wie a woma no______',
  	options:['Nkwan pa y\u025B  d\u025B ',
			 'Tirinkwa',
			 'Aguare',
		   	 'Amo'],
  	answer: 3
  },
  {
  	question:'Akanman mu, hena na \u2184de \u2184bea ma aware?',  	
  	options:[ 'Ne w\u2184fa',
			  'N’asew',
			  'N’akumaa',
			  'N’agya'],
  	answer: 3
  },
  {
  	question:'Mpanyin se, wok\u2184 aware a, ______',  	
  	options:[ 'Nantew yiye',
			  'Bisa',
			  'Nkyer\u025B kyer\u025B  wo ho',
			  'Nkra w’atamfo'],
  	answer: 1
  },
  {
  	question: 'Ansa na aware begu no, baguafo no ma awarefo no mu biara _____',		
  	options: ['Di adanse',
			  'B\u2184 ne nkuro',
			  'b\u2184 ne ho aguaa',
			  'b\u2184 n’awofonom k\u2184k\u2184'],
		answer: 1
  },
  {
  	question: 'Tete h\u2184, amanne kwan so no, abofra di nna ahe a, na w\u2184to no din?',	 
  	options: [ 'nnaw\u2184twe',
			   'asram nsia',
			   'adaduanan',
			   'nnanson'],
		answer: 0
  },
  {
  	question: 'Nsu ne nsa a w\u2184de ka akokoaa ano no kyer\u025B  d\u025B n?',		
  	options: [ 'Ahomaso',
			   'Ayamye',
			   'Ahos\u025B p\u025B w',
			   'Nokwaredi'],
		answer: 3
  },
  {
  	question: 'Meka kyer\u025B \u025B  m’adamfo no se, me papa nuabea pinyin no y\u025B  _______ w\u2184 Akanfo abusuab\u2184 mu.',
		options: ['M’akonta',
				  'Me nanabea',
				  'Me sewaa',
				  'M’agya kumaa'],
		answer: 2
  },
  {
  	question: 'Akanman mu, hefo na \u025B w\u2184 abusua kumaa no mu?',		
  	options: ['Agya, \u025B na ne mma',
			  'Agya, w\u2184fa ne sewaa',
			  'w\u2184fa, nanabarima',
			  'akonta, sewaa ne mma'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Paw nea \u025B y\u025B  din nnidiso pa w\u2184 kuw yi mu.',		
  	options: ['Piesie, Adusa, Manu',
			  'Manu, M\u025B nsa, Botwe',
			  'Nkoroma, Badu, Duku',
			  'Anane, Ason, Nsia'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Ad\u025B n na w\u2184fr\u025B  no Tawia? Efis\u025B  odi ______akyi.',
		options: ['Nyankomago',
				  'atuak\u2184asan',
				  'ntaafo',
				  'brenya\u2184'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+'Ad\u025B n nti na \u025B y\u025B  akyiwade s\u025B  obi didi a, \u2184b\u025B to dwom?',		
  	options: ['Nkwan b\u025B s\u2184 n’ataade mu',
			  '\u2184remmee nt\u025B m',
			  'obedi aduan no nyinaa',
			  'aduan no b\u025B tram no'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akanfo akyiwade biako nso ne s\u025B ',		
  	options: ['anadwo w\u2184mpra dan mu',
			  'wudidi a, mma wo nu abo',
			  'an\u2184pa wonkyia nnanfo',
			  'wok\u2184da a, nkra obiara'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akan mmusuakuw no mu nea n’akraboa y\u025B  Akoo ne ______',		
  	options: ['\u025B ko\u2184na',
			  'Agona',
			  'Asakyiri',
			  'Asona'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Abusuakuw b\u025B n na w\u2184ne akraboa din y\u025B  p\u025B ?',		
  	options: ['\u2184yoko\u2184',
			  'Asene\u025B ',
			  'Aduana',
			  '\u025B ko\u2184na'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Abusuakuw b\u025B n na w\u2184w\u2184 akraboa ahorow abien?',		
  	options: ['Aduana',
			  'Asakyiri',
			  'Agona',
			  'Asona'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Biretufo akraboa ne_____.',		
  	options: ['\u2184seb\u2184',
			  'Agyinamoa',
			  'akor\u2184ma',
			  'k\u2184k\u2184sakyi'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n' + 'Toa \u025B b\u025B  yi so: gua b\u025B ba a, _______',
		options: ['\u025B b\u025B ba \u2184kyena',
			  	  'Na \u025B w\u2184 awiei',
				  'Efi an\u2184pa',
				  '\u025B y\u025B  aguat\u2184nda'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+'Ay\u2184nkoy\u2184nko nti na \u2184k\u2184t\u2184 annya ti kyer\u025B  d\u025B n?',		
  	options: ['Ayamye ntraso a \u025B ho amma mfaso',
			  'atirim\u2184den a \u025B ma tipae',
			  'patapaas\u025B m a y\u025B de pam atamfo',
			  'ahos\u025B p\u025B w a \u025B ma nkuranhy\u025B '],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n' + 'Ti koro nk\u2184 agyina kyer\u025B  s\u025B  ______',		
  	options: ['as\u025B m ba a, \u2184baakofo na \u2184ka ne nyinaa',
			  'as\u025B m ba a, nnipa bebree na w\u2184dwene ho na \u025B ny\u025B  \u2184baakofo',
			  '\u025B y\u025B  ne nkutoo as\u025B m enti obiara nka bi',
			  'as\u025B m no mfa me ho koraa'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+ 'Agya rek\u2184, ogyaw me akoa bi. \u2184ba wo fie a woma no agua tena so a, \u2184rek\u2184 a, na wafa agua no atare ne ho. \u025B y\u025B  d\u025B n?',
		options: ['\u2184h\u2184ho',
				  'nkrante',
				  'ab\u025B  bemu',
		 		  'aburow b\u025B t\u025B m'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+ 'Agya ade bi w\u2184 h\u2184: da biara \u2184te h\u2184 a, wasi ne ti ase ma ne ti kyer\u025B  fam nso \u025B nhaw no koraa. \u025B y\u025B  d\u025B n?',
		options: ['Okisi',
				  'Akoo',
				  'ak\u2184kono',
				  'ampan'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n' + 'Akanfo fr\u025B  \u2184sram a \u025B t\u2184 so ason no d\u025B n?',		
  	options: ['\u2184p\u025B p\u2184n',
			  '\u2184sanaa',
			  '\u025B b\u2184',
			  'Kitawonsa'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo mm\u025B , agya rek\u2184 ne asranna ho\n\n'+ 'Asram kuw yi mu biara kura nnafua aduasa p\u025B p\u025B \u025B p\u025B ',		
  	options: ['\u025B b\u2184, \u2184sanaa, Ogyefuo',
			  'Ahinime, \u025B b\u2184, Kitawonsa',
			  'Oforisuo, Ay\u025B wohomum\u2184, \u025B b\u2184',
			  '\u2184p\u025B nimaa, \u2184p\u025B p\u2184n, \u2184b\u025B nem'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n' + 'Da a edi Awukudae anim no, Akanfo fr\u025B  no d\u025B n?',		
  	options: ['Akwasidae',
			  'Benada Dapaa',
			  'Memeneda Dapaa',
			  'Fida Fofie'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Nnaw\u2184twe ahe na \u025B w\u2184 Akanfo adaduanan mu?',		
  	options: ['Asia',
			  'Ason',
			  'Awotwe',
			  'Akron'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Afahy\u025B  bere mu d\u025B n na mpanyimfo y\u025B  ma nsamanfo?',		
  	options: ['w\u2184k\u2184ky\u025B  w\u2184n nsa',
			  'wogu w\u2184n nsa',
			  'w\u2184k\u2184da w\u2184n ase',
			  'w\u2184k\u2184se w\u2184n ayi'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Akanfo b\u025B n na wodi Ohum afahy\u025B  no?',		
  	options: ['mfantefo',
			  'asantefo',
			  'akyemfo',
			  'efutufo'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Bakatue y\u025B  hefo afahy\u025B  w\u2184 \u2184man yi mu?',		
  	options:['Oguaafo',
			 'Anomabofo',
			 '\u025B denafo',
			 'Adwumakofo'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Tete h\u2184 no, s\u025B  \u2184man bi rek\u2184 \u2184ko a, \u2184hene b\u025B n na odi d\u2184m no nyinaa anim?',		
  	options: ['kyid\u2184mhene',
			  'sanaahene',
			  'nifahene',
			  'ad\u2184ntehene'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'S\u025B  w\u2184repaw obi adi hene a, hena na odi akoten w\u2184 osiahenefo no mu?',		
  	options: ['Kurontihene',
			  '\u2184hemmea',
			  'nk\u2184sohene',
			  'ntakrahene'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ '\u2184hene b\u025B k\u2184 aguab\u2184 ase a, hena na osiesie ne ho?',		
  	options: ['Sanaahene',
			  'Sodoofo',
			  'Dabehene',
			  'Ntakrahene'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n'+ 'Akanman mu s\u025B  w\u2184redi nnipa baanu as\u025B m a, obiara fa _______',		
  	options: ['Nnamfo',
			  'Nsewnom',
			  'Atemmufo',
			  'Adansefo'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo nnabu, afahy\u025B , ahens\u025B m ne as\u025B nni ho.\n\n' + 'Hena na \u2184pata nea wadi bem w\u2184 as\u025B nni awiei?',		
  	options: ['Nea wadi f\u2184 no',
			  'Nea n’as\u025B m y\u025B  d\u025B  no',
			  'Baguafo no kyeame',
			  'Adansefo no mu biako'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Nnwuma a edidi so yi mu nea \u025B w\u2184 he na w\u2184nto dwom wmu koraa?',
		options: ['Atono',
			   	  'Kentenwene',
			 	  'Nkukunwene',
			      'Ahay\u025B '],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Okuafo ma y\u025B n bor\u2184de a, d\u025B n na yenya fo \u2184b\u2184mm\u2184fo h\u2184?',		
  	options: ['Atosode',
			  'Hanam',
			  '\u2184sos\u2184w',
			  'ntampehama'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Agoru yi de, mmarimaa nkutoo na wodi Akanman mu',		
  	options: ['ampe',
			  'nt\u025B wsi',
			  'abosi',
			  'antoakyire'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Mmofra agoru b\u025B n mu na w\u2184to dwom \"sansan kor\u2184ma, wo ni awu o?',		
  	options: ['abosi',
			  'mpepenaa',
			  'as\u2184ba',
			  'tomato'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Akanfo din Antwi mmran ne',		
  	options: ['Ampem',
			  'Boasiako',
			  'Agyeman',
			  'Guakoro'],
		answer: 1
  } 
]