

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Saa nnipa yi mu nea \u2184w\u2184 he na \u2184y\u025B  wo papa busuani? Wo papa',   
  	options:['Akonta',
			 'Ba',
			 'Sewaa',
			 'W\u2184fa'],
  	answer: 2
  },
  {	
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'S\u025B  Akanfo ka se bogya a, na \u025B kyer\u025B  d\u025B n?' + '</b />' + '<br />' + 'S\u025B  Akanfo ka se bogya a, na \u025B kyer\u025B  d\u025B n?',	
  	options:[ 'Abusua',
			  'Adamfo',
			  'Akyiwade',
			  'Aware',],
	answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Akanfo\u2184 w\u2184 gyidi s\u025B  onipa biara w\u2184 \u2184kra ne sunsum. Kyer\u025B  din foforo a y\u025B de fr\u025B  sunsum.' ,
  	options:['Abusua',
			  'Bogya',
			  'Nt\u2184n (Ntor\u2184)',
			  'Saman',],
  	answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Kyer\u025B  nea enti a \u2184ba ne \u025B na y\u025B  abusuafo.',  	
  	options:[ 'W\u2184b\u2184 abusua koro',
			  'W\u2184b\u2184 nt\u2184n koro',
			  'W\u2184w\u2184 adwene koro',
			  'W\u2184w\u2184 sunsum koro'],
  	answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + '\u2184kwan b\u025B n so na Akanfo nam b\u2184 agya abusua?',  	
  	options:[ 'Abusuab\u2184',
			  'Aware\u025B ',
			  'Kunay\u025B ',
			  'Owu'],
  	answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'S\u025B  wo papa ware mmea baanu a, \u2184baa biako no y\u025B  wo maame d\u025B n?',  	
  	options: ['Abanoma',
			  'Akumaa',
			  'Kora',
			  'Sewaa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Nney\u025B e a edidi so yi mu nea \u025B w\u2184 he na \u025B y\u025B  akyiwade? S\u025B  woware_______',  	
  	options: [ 'Wo Papa ba',
			   'Wo Sewaa ba',
			   'W’adamfo ba',
			   'Wo W\u2184fa ba'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'D\u025B n na \u025B ma obi hu s\u025B  \u2184ne \u2184foforo som agya bosom biako? S\u025B …',  	
  	options: [ 'W\u2184b\u2184 abusua koro',
			   'W\u2184n akyiwade y\u025B  p\u025B ',
			   'W\u2184firi kurow biako',
			   'W\u2184y\u025B  bogya kor\u2184'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Abusua b\u025B n na w\u2184gye di s\u025B  w\u2184de ogya baa wiase?',  	
  	options: ['Aduana',
			  'Asona',
			  '\u2184yoko',
			  'Biretuo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  pa a \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Abusua b\u025B n na w\u2184ne akraboa din s\u025B ?',  	
  	options: ['Aduana',
			  'Agona',
			  'Asona',
			  '\u025B ko\u2184na'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'S\u025B  w\u2184paw \u2184hene foforo a, w\u2184de no k\u2184kyer\u025B  _____.kan.',  	
  	options: ['Abakomahene',
			  'Amankrado',
			  'Gyaasehene',
			  'Sanaahene'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'Ber\u025B  b\u025B n ban a woyi odiadefo?',		
  	options: ['Adaduanan du a',
			  'Da a onipa no b\u025B  wu no',
			  'W\u2184nom sikasa wie a',
			  'W\u2184y\u025B  d\u2184teyie wie a'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'Abusua b\u025B n mu na w\u2184yi odiadefo firi?',  	
  	options: ['Okunafo abusua mu',
			  'Owufo no abusua mu',
			  'Owufo no papa abusua mu',
			  '\u2184hene abusua mu'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '<b>' + '<br>' + 'S\u025B  okunafo bi mp\u025B  s\u025B  \u2184ware odiadefo a, kasakoa a \u2184ka ne s\u025B  \u2184b\u025B ware______',		
  	options: ['Mmoatia',
			  'Nk\u2184t\u2184 ne mm\u025B b\u025B ',
			  'Ne kunu saman',
			  'Nsamanp\u2184w mu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'S\u025B  obi _____ampene a, onii no ntumi nni obi ade\u025B .',
  	options: ['Maame',
			  'Nana',
			  'Papa',
			  'W\u2184fa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'Nnipa baanu b\u025B n na w\u2184b\u2184 mu si \u2184hene anan mu?',  	
  	options: ['\u2184hemaa ne Abusuapanin',
			  '\u2184hemaa ne Amankrado',
			  '\u2184hemaa ne Gyaasehene',
			  '\u2184hemaa ne Dabehene'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'Toa as\u025B m yi so; S\u025B  niwaa mma nsae\u025B  a______nni ade.',  	
  	options: ['Maame',
			  'Nana',
			  'Onua',
			  'W\u2184faase'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae\u025B  A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 adedi ne ahens\u025B m ho.' + '</b>' + '<br />' + 'Nkroma te h\u2184 a Badu nni ade. Eyi kyer\u025B  s\u025B _____',  	
  	options: ['Ab\u2184fra w\u2184h\u2184 a, \u2184panyin nni ade',
			  'Badu mma nkroma nni ade',
			  'W\u2184faase w\u2184h\u2184 a onua nni ade',
			  '\u2184panin w\u2184 h\u2184 a, ab\u2184fra nni ade'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Aboa b\u025B n na Simpafo kyere de di Aboakyere afahy\u025B ?',  	
  	options: ['\u2184kankane',
			  '\u2184nwansane',
			  '\u2184seb\u2184',
			  '\u2184tor\u2184mo'],
		answer: 1
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Kyer\u025B  botae a Akyemfo gyina so de di Ohum.',  	
  	options: ['W\u2184de fr\u025B  d\u2184m',
			  'W\u2184de gye w\u2184n ani',
			  'W\u2184de huro \u2184k\u2184m',
			  'W\u2184de sua amammer\u025B '],
		answer: 3
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + '\u025B hefo na w\u2184di Akwantuk\u025B se afahy\u025B ?',  	
  	options: ['Akuapemfo',
			  'Bonofo',
			  'Dwaben foforofo',
			  'Kwawufo'],
		answer: 2
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Ns\u025B m a \u025B didi so\u2184 yi nea \u025B w\u2184 he na \u025B y\u025B  nokware?',		
  	options: ['Afahy\u025B  de \u025B ka ba',
			  'Afahy\u025B  kyer\u025B  abusua ase',
			  'Afahy\u025B  ma y\u025B hu amammer\u025B ',
			  'Afahy\u025B  s\u025B e ber\u025B  kwa'],
		answer: 2
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'S\u025B  obi p\u025B  s\u025B  \u2184k\u2184hw\u025B  Bakatue afahy\u025B  a, \u025B s\u025B  s\u025B  \u2184k\u2184______…',  	
  	options: ['\u025B dena',
			  'Akyemfo',
			  'Odwaa',
			  'Simpa'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Afahy\u025B  b\u025B n na Akuapemfo di?',		
  	options: ['Akwamm\u2184',
			  'Apo\u2184',
			  'Ohum',
			  'Odwira'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + ' …_____.y\u025B  amammer\u025B  bi a \u025B kyer\u025B  da titiriw bi a atwa mu w\u2184 \u2184man bi abrab\u2184 mu.',
  	options: ['Afahy\u025B ',
			  'Ananses\u025B m',
			  'Bragoru',
			  'Nsagu'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Kontromfi se: me suman ne ______',  	
  	options: ['M’adwene',
			  'M’ani',
			  'Me nan',
			  'M’aso'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Ns\u025B m a \u025B didi so\u2184 yi mu de\u025B  \u025B w\u2184 he na \u025B y\u025B  nokware?',  	
  	options: ['Y\u025B de \u025B b\u025B  kyer\u025B  kasakoa ase',
			  'Y\u025B de \u025B b\u025B  toa \u025B b\u025B  so',
			  'Y\u025B de \u025B b\u025B  twa as\u025B m tenten tiawa',
			  'Y\u025B de \u025B b\u025B  si kasakoa anan mu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Mpanin se; Nsamanpom soduro, wo ni wu a, na ______asa.',  	
  	options: ['W’abusua',
			  'Wo nkor\u2184fo',
			  'Wo nnamfonom',
			  'Wo nuanom'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo afahy\u025B  ho.' + '</b>' + '<br />' + 'Anomaa antu a, ______',  	
  	options: ['\u2184bua da',
			  '\u2184gyina h\u2184',
			  '\u2184si faako',
			  '\u2184te h\u2184'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.' + '</b>' + '<br />' + 'Hwan na tete no na w\u2184se \u2184we aburowpata no?',		
  	options:['Aduobi Ata',
			 'Ampomfi',
			 'Asebu Amanfi',
			 'Atakora'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.' + '</b>' + '<br />' + 'Tete no na w\u2184se Onyankop\u2184n b\u025B n nnipa. \u025B y\u025B \u025B  d\u025B n na \u2184k\u2184\u2184 sorosoro?',		
  	options: ['Aberewa bi de w\u2184mma w\u2184\u2184 no',
			  'Ab\u2184fra bi tia ne nan so',
			  'Obi hwiee nsu guu ne so',
			  'Papa bi too \u2184bo b\u2184\u2184 no'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.' + '</b>' + '<br />' + 'Dwom a atiefo to w\u2184 anases\u025B m mu no w\u2184fr\u025B  no d\u025B n?',  	
  	options: ['Abraa braa',
			  'Aho',
			  'Mmogu',
			  'Nnwonkor\u2184'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.' + '</b>' + '<br />' + 'Ananses\u025B m botae titiriw ne s\u025B ______',  	
  	options: ['W\u2184de b\u2184 nk\u2184mm\u2184',
			  'W\u2184de gyegye mmofra agoru',
			  'W\u2184de tu fo',
			  'W\u2184de twa as\u025B m tiawa'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.' + '</b>' + '<br />' + 'Anases\u025B m mma mu nea \u2184w\u2184 he na \u2184y\u025B  anite pa ara?',  	
  	options: [' Akok\u2184 Antwiwaa',
			  'Ananse',
			  'Ntikuma',
			  '\u2184kraman'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.' + '</b>' + '<br />' + 'S\u025B  y\u025B ka s\u025B  ananses\u025B m mfimfini a na \u025B kyer\u025B ______',  	
  	options: ['Ananses\u025B m no ankasa',
			  'Ananses\u025B m no awiei',
			  'Mmogu',
			  '\u2184fr\u025B '],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Sisiri mbo, tabon mbo. Adwuma b\u025B n mu dwom ni?',  	
  	options: ['Ahay\u025B ',
			  'Kuay\u025B ',
			  'Ntomanwene',
			  'Apok\u2184'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Antoakyire y\u025B  mm\u2184fra agoru no mu biako. Kyer\u025B  ne botae.',  	
  	options: ['Aho\u2184den',
			  'Ahw\u025B yie',
			  'Nnamfofa',
			  'Papay\u025B '],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Toa saa dwom yi so: Dedendee Kwaw, Dedendee Kwaw, Agya B\u2184fo\u2184 ne nkwan y\u025B  me d\u025B  nanso______',
		options: ['N’ataade y\u025B  me tumm',
				  'Ne mpaboa y\u025B  me k\u2184\u2184',
				  'Ne nam y\u025B  me d\u025B ',
				  'Ne tuo ho y\u025B  me tumm'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Ad\u025B n nti na s\u025B  obi rey\u025B  adwuma a \u2184to dwom? S\u025B de\u025B ______',		
  	options: ['nkur\u2184fo b\u025B te ne nne',
			  'nnipa b\u025B hu s\u025B  \u2184w\u2184 h\u2184',
			  '\u2184benya aboafo',
			  '\u2184rente \u2184br\u025B '],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Nea edidi so yi mu nea \u025B w\u2184 he na \u025B ny\u025B  Akanfo agoru?',  	
  	options: ['Ahay\u2184',
			  'Antoakyire',
			  'As\u2184ba',
			  'atentam'],
		answer: 0
  }
]