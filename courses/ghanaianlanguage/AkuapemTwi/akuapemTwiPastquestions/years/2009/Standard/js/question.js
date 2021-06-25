

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Akanfo gye di s\u025B  \u025B na ma ne ba mogya na agya ma no_____.',
    options:['Sika',
			 'Abusua',
			 'Aduan',
			 '\u2184kra'],
  	answer: 3
  },
  {	
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Edin a w\u2184fr\u025B  \u025B na mogya a \u2184de ma ne ba ne_____',
	options:[ 'Aho\u2184f\u025B ',
			  'nto\u2184 (Nt\u2184n)',
			  'Saman',
			  'Abusua'],
	answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'S\u025B  woy\u025B  \u2184barima a, wo nuabea ba y\u025B  wo______',
  	options:['Ba',
			 'W\u2184faase',
			 'Nana',
			 'Nanakansowa',],
  	answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Abusua ne ntor\u2184 (nt\u2184n) fi nnipa kuw b\u025B n h\u2184?',  	
  	options:[ 'Maame ne nena',
			  'Papa ne nena',
			  'Maame ne papa',
			  'Maame ne abusuapanin'],
  	answer:2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Kyer\u025B  nea enti a \u025B na ne mma da nso firi agya ho.',  	
  	options:[ 'W\u2184n na w\u2184firi kurow no mu',
		  	  'W\u2184n na daa w\u2184te fie',
			  'W\u2184n na w\u2184b\u2184 abusua biako',
			  'W\u2184n na w\u2184di nk\u2184mm\u2184'],
  	answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Suban a \u2184bea a \u2184w\u2184 abadae da no adi no w\u2184fr\u025B  no',		
  	options: ['ahantan',
			  'anitew',
			  'tema',
			  'obu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo abusuab\u2184 ho.' + '</b>' + '<br />' + 'Agya, \u025B na ne mma, hena ne ofi no ti?',	 
  	options: [ 'Agya',
			   'Mma',
			   '\u025B na',
			   'mmofra'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'W\u2184fr\u025B  Akanfo adedi s\u025B ______',		
  	options: [ 'Papa adedi',
			   'Nana adedi',
			   'Sewaa adedi',
			   'W\u2184fa adedi'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Saa nnipa yi ase nsae a w\u2184faase\u025B  nni ade',		
  	options: ['nniwaa mma',
			  'papa mma',
			  'nena mma',
			  'w\u2184fa mma'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + '\"Agya bi wu a, agya bi te ase\" y\u025B  kasa a w\u2184ka kyer\u025B ______',		
  	options: ['Akunafo',
			  'Nyisiaa',
			  'Odiadefo',
			  'Abusuapanyin'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Kasa a \u025B di akyiri a obi ka ansa na wawu na Akanfo\u2184 fr\u025B  no______',		
  	options: ['Nsamansew',
			  'Awugyamma',
			  'Kasapr\u025B ko',
			  'Nkwa ns\u025B m'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Ber\u025B  b\u025B n na abusuafo hyia bue owufo adaka so?',
		options: ['Afe',
			  	  '\u2184sram',
				  'Adaduanan',
				  'Nnaw\u2184twe'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Duaba b\u025B n na Akanfo de gyina h\u2184 ma onipahunu bi a wadi ade?',		
  	options: ['Kwadu',
			  'Amango',
			  'Paya',
			  'Bor\u2184fer\u025B '],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'S\u025B  okunafo bi mp\u025B  s\u025B  \u2184ware odiadefo a, kasakoa a \u2184ka ne s\u025B  \u2184b\u025B ware______',		
  	options: ['Mmoatia',
			  'Nk\u2184t\u2184 ne mm\u025B b\u025B ',
			  'Ne kunu saman',
			  'Nsamanp\u2184w mu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho' + '</b>' + '<br />' + 'Afahy\u025B  yi mu nea \u025B w\u2184 he na w\u2184de hurow k\u2184m',		
  	options: ['Akwamb\u2184',
			  'Aboakyere',
			  'Ohum',
			  'Kundum'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho' + '</b>' + '<br />' + 'Bakatue y\u025B  nnipa b\u025B n afahy\u025B ?',		
  	options: ['Adaafo',
			  '\u025B denafo',
			  'Akyemfo',
			  'Simpafo'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho' + '</b>' + '<br />' + 'Kyer\u025B  kurow a edidi so yi mu biako a w\u2184di \"Adae-k\u025B se\" afahy\u025B .',		
  	options: ['Adaa',
			  'Kumase',
			  'Kyebi',
			  'Simpa'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho' + '</b>' + '<br />' + 'Afahy\u025B  ho mfaso titiriw biako ne s\u025B _____.',		
  	options: ['\u025B de akob\u2184fo\u2184 ba fie',
			  'y\u025B kye akor\u2184mfo\u2184',
			  'yetu ahemfo ade\u025B  so',
			  'ede nt\u2184kwaw ba'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho' + '</b>' + '<br />' + 'Kyer\u025B  nea \u025B y\u025B  nokware w\u2184 afahy\u025B  ne nkurow a edidi so yi mu.',		
  	options: ['Keta-Aboakyere',
			  'Kumasi –Fetu',
			  'Somanya –Odwira',
			  'Axim- Kundum'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho' + '</b>' + '<br />' + 'Aboa b\u025B n na Efutufo kyere no w\u2184 afahy\u025B  ber\u025B ?',		
  	options: ['\u2184twe',
			  '\u2184nwansan',
			  '\u2184tor\u2184m',
			  'Nantwi'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na \u025B fa Akanfo afahy\u025B  ho' + '</b>' + '<br />' + 'Ns\u025B m a edidi so yi mu nea \u025B w\u2184 he na \u025B ny\u025B  nokware w\u2184 afahy\u025B  ho?',		
  	options: ['Afahy\u025B  de anigye ba',
			  'Afahy\u025B  s\u025B e mmere',
			  'Akob\u2184fo ba fie',
			  'Nkyirimma sua amammer\u025B '],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.' + '</b>' + '<br />' + ' Asram dodow ahe na y\u025B nya w\u2184 afirihyia biako mu?',
		options: ['Dummien',
				  'Dubiako',
				  'Dunkron',
				  'Dummi\u025B nsa'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Bosome a \u025B t\u2184 so dumienu no din de______',		
  	options: ['Ogyefuo',
			  '\u2184b\u025B nem',
			  '\u2184p\u025B p\u2184n',
			  '\u2184p\u025B nimaa'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.' + '</b>' + '<br />' + '\u2184sram b\u025B n mu na Simpafo kyere aboa?',
		options: ['K\u2184t\u2184nimma',
				  'Ay\u025B wohomum\u2184',
			   	  '\u2184sanaa',
			 	  'Obubuo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.' + '</b>' + '<br />' + '\u2184sram yi kura nnafua aduasa.',		
  	options: ['\u025B b\u2184',
			  'Kitawonsa',
			  'Ogyefuo',
			  'Ahinime'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.' + '</b>' + '<br />' + '\u2184sram b\u025B n na Akristofo di Yesu awoda?',
		options: ['Ogyefuo',
				  '\u2184p\u025B p\u2184n',
				  '\u2184p\u025B nimaa',
				  '\u2184sannaa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Kyer\u025B  amanne titiriw a Akanfo\u2184 di no dab\u2184ne biara.',		
  	options: ['wogu nsa',
			  'w\u2184y\u025B  ayi',
			  'w\u2184y\u025B  asiei',
			  'wobu sika ho nkonta'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na a \u025B fa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Hyehy\u025B  asram a edidi so yi nnidiso-nnidiso',		
  	options: ['\u2184p\u025B p\u2184n, \u2184p\u025B nimaa, Ogyefuo',
			  '\u2184p\u025B nimaa, \u2184p\u025B p\u2184n, Ogyefuo',
			  'Ogyefuo, \u2184p\u025B nimaa, \u2184p\u025B p\u2184n',
			  '\u2184p\u025B p\u2184n, \u2184gyefuo, \u2184b\u025B nem'],
		answer: 3
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.' + '</b>' + '<br />' + 'Toa b\u025B  yi so \"\u025B kaa nwa ne akyekyere nko ara a anka_______\"',		
  	options: ['otuo rento w\u2184 kwae mu',
			  'aboa biara nkye ne y\u2184nko',
			  'ab\u2184fo biara renk\u2184 wura mu',
			  'nnipa nnya nam nwe'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.' + '</b>' + '<br />' + 'Mpaninfo bu b\u025B  s\u025B , \"Bor\u2184fere a \u025B y\u025B  d\u025B  na______\"',
		options:['mm\u2184fra di',
				 'y\u025B t\u2184n w\u2184 gua so',
				 'nnomaa di',
				 'abaa da ase'],
		answer: 3
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.' + '</b>' + '<br />' + '\"S\u025B  atuduro asa a, na \u025B ny\u025B ______\"',
		options: ['ahemfi',
				  'Akowua ntoa mu',
				  '\u2184b\u2184mm\u2184fo kotoku mu',
				  'Asafo mma kotoku mu'],
		answer: 1
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.' + '</b>' + '<br />' + '\"Anomaa nua ne nea \u2184ne no da dua koro\" kyer\u025B  Akanfo______',		
  	options: ['ay\u2184nkofa',
			  'ofi tena',
			  'abusuab\u2184',
			  'nt\u2184n b\u2184'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.' + '</b>' + '<br />' + '\u025B b\u025B , \"baanu so a emmia\" kyer\u025B ',		
  	options: ['p\u025B s\u025B menkomenya',
			  'Nkabom',
			  'Asisi',
			  'asondwoe'],
		answer: 1
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a \u025B y\u025B  paa a \u025B fa Akanfo\u2184 mm\u025B  ho.' + '</b>' + '<br />' + '\u2184k\u2184t\u2184 nwo anomaa kyer\u025B  s\u025B  obi suban s\u025B _____',		
  	options: ['N’awofo',
			  'N’adamfo',
			  'Ne nua',
			  'Ne sewaa'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a \u025B y\u025B  na \u025B fa Akanfo atetes\u025B m ne ananses\u025B m ho.' + '</b>' + '<br />' + 'Eyi y\u025B  anwonwade ahorow no mu biako a \u2184k\u2184mfo An\u2184kye y\u025B e?',		
  	options: ['\u2184de afena w\u2184\u2184 fam ma \u025B kaa h\u2184',
			  '\u2184paee asub\u2184nten mu abien',
			  'Oduaa bebe w\u2184 wim',
			  '\u2184nyanee owufo'],
		answer: 0
  },
  {
  	question: 'Kyer\u025B  ade biako bi a Asebu Amanfi y\u025B  de gyee din',		
  	options: ['\u2184t\u2184nn nnipa maa Abor\u2184fo',
			  '\u2184wee nnipa nam',
			  '\u2184nante firii mpoano k\u2184\u2184 ser\u025B m',
			  '\u2184wee aburo pata'],
		answer: 3
  },
  {
  	question: 'S\u025B  y\u025B b\u2184 Sikadwa Kofi din a, onipa b\u025B n na y\u025B kae no?',		
  	options: ['Asebu Amanfi',
			  'Ansa Sasraku',
			  '\u2184k\u2184mfo Ntiamoa',
			  '\u2184k\u2184mfo An\u2184kye'],
		answer: 3
  },
  {
  	question: ' Kyer\u025B  baabi a ahemfo baasa a edidi so yi ase firi ; Obunumankoma, \u2184dapagyan ne \u2184son.',
		options: [' Okuapemman',
				  'Fanteman',
				  'Asanteman',
				  'Firaw agya'],
		answer: 1
  },
  {
  	question: 'Kwaku Ananse ba panin din de_______',		
  	options: ['Afurudohwedohwee',
			  'Nnakor\u2184nhwea',
			  'Ntikuma',
			  'Tikenenkene'],
		answer: 2
  },
  {
  	question: 'Suban b\u025B n na \u2184seb\u2184 da no adi w\u2184 ananses\u025B m mu?',		
  	options: ['\u2184boafo',
			  'Ahobr\u025B ase',
			  'Asisie',
			  'Awi\u025B mfo'],
		answer: 2
  }
]