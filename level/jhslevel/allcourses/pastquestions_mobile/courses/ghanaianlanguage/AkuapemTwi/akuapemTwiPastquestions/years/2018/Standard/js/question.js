

//Array of Objects
const quiz = [
  {
  	question:'\u2184barima reware a, otua sika bi ma ne yere no nua mmarimanom, w\u2184fr\u025B  saa sika yi d\u025B n?',
  	options:['asew sika',
			 'ti nsa',
			 'akonta sekan',
			 'akonta sika'],
  	answer: 2
  },
  {	
  	question: 'Nsa a edi kan pa ara a \u2184barima de koyi ne ho adi kyer\u025B  \u2184bea no abusua no w\u2184fr\u025B  no',
	options:[ 'awaregye nsa',
			  'akonta sekan',
			  '\u2184pono-akyi-b\u2184',
			  'ti ade'],
	answer: 2
  },
  {
  	question:'Nea edidi so yi nyinaa y\u025B  nokware w\u2184 Akanfo nkyia ho, gye s\u025B ',
  	options:['s\u025B  obi rek\u2184gya ne nan a, onkyia',
			 's\u025B  obi redidi a, yenkyia no',
			 'yekyia fi nifa so',
			 'y\u025B mfa y\u025B n nsa b\u025B nkum nkyia'],
  	answer: 1
  },
  {
  	question:'Ansa na aware biara bedi mu no, gye s\u025B  \u2184barima no tu \u2184bea no.',  	
  	options:[ 'nnamfo nyinaa fo',
			  'awofo fo',
			  'nuanom agyina',
			  'ti nsa'],
  	answer: 3
  },
  {
  	question:'Nna dodow a \u025B da Akwasidae ne F\u2184dwo ntam y\u025B ',
  	options:[ 'akron',
			  'dunum',
			  'aduonu abien',
			  'aduonu'],
  	answer: 1
  },
  {
  	question: '\u2184sram a edi kan afe biara mu ne',
		options: ['\u2184p\u025B nimaa',
				  '\u2184b\u025B nem',
			      'Ogyefuo',
			 	  '\u2184p\u025B p\u2184n'],
		answer: 3
  },
  {
  	question: 'Da a ade rekye ma w\u2184adi Akwasidae y\u025B ',	 
  	options: [ 'Mono Mene',
			   'F\u2184dwo',
			   'Awukudae',
			   'Memeneda Dapaa'],
		answer: 3
  },
  {
  	question: 'Asram dodow ahe na yenya w\u2184 afirinhyia biako mu?',		
  	options: [ 'dubiako',
			   'dumien',
			   'dunkron',
			   'dummi\u025B nsa'],
		answer: 1
  },
  {
  	question: 'Awunyade y\u025B  nnea owufo no de',		
  	options: ['gya ne mma ne wu akyi',
			  'mane ne mma',
			  'ky\u025B  ne nuanom bere a \u2184te ase',
			  'ma ne nkonta bere a \u2184te ase'],
		answer: 0
  },
  {
  	question: 'Edin b\u025B n na y\u025B de ma obi a osi owufo anan mu hw\u025B  n’agyapade so?',		
  	options: ['abusuapanyin',
			  'ananmusini',
			  'odiadefo',
			  '\u2184hw\u025B sofo'],
		answer: 2
  },
  {
  	question: 'Hena na \u025B y\u025B  amanne sodi \u2184barima ade w\u2184 Akanfo mu?',		
  	options: ['ne w\u2184faase',
			  'n’agya ne w\u2184faase',
			  'ne babarima',
			  'n’akonta'],
		answer: 2
  },
  {
  	question: 'Ns\u025B m a obi ka de kyekye n’agyapade ansa na wawu y\u025B  d\u025B n?',
		options: ['agyinae',
			  	  'nsamansew',
				  'mmara',
				  'adanse'],
		answer: 1
  },
  {
  	question: 'Bere b\u025B n na Akanfo kyia \"Afirinhyia pa\"?',		
  	options: ['buronya',
			  'akwasidae',
			  'afahy\u025B ',
			  'yesu amanehunu'],
		answer: 2
  },
  {
  	question: 'Bere b\u025B n na w\u2184ma obi \"akwaaba\". Bere a',		
  	options: ['wakoguare aba',
			  '\u2184bea awo foforo',
			  '\u2184rek\u2184 adwuma',
			  'ofi akwantu mu aba'],
		answer: 3
  },
  {
  	question: 'S\u025B  obi retu kwan a w\u2184ma no',		
  	options: ['due ne akwantu',
			  'mo ne akwantu',
			  'da yiye',
			  'nantew yiye'],
		answer: 3
  },
  {
  	question: 'S\u025B  obi rekyia \u2184hene na \u2184kwahu ne ntama a, \u025B kyer\u025B  d\u025B n?',		
  	options: ['obu',
			  'onuad\u2184',
			  'nimde\u025B ',
			  'koroy\u025B '],
		answer: 0
  },
  {
  	question: 'Akyemfo afahy\u025B  a wodi ne d\u025B n?',		
  	options: ['Ohum',
			  'Adae k\u025B se',
			  'Akwamm\u2184',
			  'Aboakyere'],
		answer: 0
  },
  {
  	question: 'Hena na \u2184yan atumpan w\u2184 afahy\u025B  ase?',		
  	options: ['Okunini',
			  '\u2184kyer\u025B ma',
			  '\u2184brafo',
			  '\u025B s\u025B n'],
		answer: 1
  },
  {
  	question: 'Akanfo afahy\u025B  biara w\u2184y\u025B  eyi w\u2184 ase',		
  	options: ['wokum \u2184wansan',
			  'w\u2184noa aburoduan',
			  'wogu nsa',
			  'w\u2184pam nsamanfo'],
		answer: 2
  },
  {
  	question: 'Aboa b\u025B n na Simpafo kyere de di Aboakyere afahy\u025B ?',		
  	options: ['Gyata',
			  '\u2184seb\u2184',
			  '\u2184tor\u2184m',
			  '\u2184nwansan'],
		answer: 3
  },
  {
  	question: 'S\u025B  obi de Tawia a, na odi ______akyi.',		
  	options: ['M\u025B nsa',
			  'Ataa',
			  'Badu',
			  'Nkoroma'],
		answer: 1
  },
  {
  	question: 'Edin yi mu nea \u025B w\u2184 he na \u025B y\u025B  kradin?',		
  	options: ['Nyakoaa',
			  'Kwabena',
			  'Agyei',
			  'fr\u025B mp\u2184n'],
		answer: 1
  },
  {
  	question: 'Edin b\u025B n na w\u2184de ma abeawa a w\u2184woo no Fida?',		
  	options: ['Akua',
			  'Adwoa',
			  'Yaa',
			  'Afua'],
		answer: 3
  },
  {
  	question: 'Edin a edidi so yi mu nea \u025B w\u2184 he na nnap\u2184nna din?',		
  	options: ['Fofie',
			  'B\u025B y\u025B \u025B d\u025B n',
			  'Minta',
			  'Kwame'],
		answer: 0
  },
  {
  	question: 'Amanne b\u025B n na Akanfo y\u025B  de twe mmeawa ba mpanyin mu?',		
  	options: ['asub\u2184',
			  'aware',
			  'bragoru',
			  'nhyira'],
		answer: 2
  },
  {
  	question: 's\u025B  w\u2184rebegoru abeawa bi bra a, hena na wodi kan k\u2184b\u2184 no amane\u025B ?',		
  	options: ['\u2184hene',
			  'Abusuapanyin',
			  '\u2184hemmea',
			  'Sanaahene'],
		answer: 2
  },
  {
  	question: 'S\u025B  wogu abeawa bi kyiribra a,',		
  	options: ['\u025B ma abeawa no nya dwetiri',
			  '\u025B ma abeawa no nya kunu pa',
			  '\u025B ma abeawa no ne n’abusuafo animuonyam',
			  'egu abeawa no ne n’abusuafo anim ase'],
		answer: 3
  },
  {
  	question: 's\u025B  Akanfo ka s\u025B  \"abeawa\" bi abu ne nsa\" a na \u025B kyer\u025B  d\u025B n?',		
  	options: ['Way\u025B  bra',
			  'Ne nsa ay\u025B  tenten',
			  'Owiawia nne\u025B ma',
			  'Ne nsa ay\u025B  duru'],
		answer: 0
  },
  {
  	question: 'Din b\u025B n na Akanfo de ma onipa a w\u2184awuwu dedaadaw no?',		
  	options: ['Ahotewfo',
			  'Nsamanfo',
			  'Ateasefo',
			  'ab\u2184fo'],
		answer: 1
  },
  {
  	question: 'akanman mu s\u025B  obi wu a,',		
  	options:['wogu n’nom nsu',
		     'w\u2184de no to ne benkum so',
			 'wonso ne mu',
			 'w\u2184teatea no'],
		answer: 0
  },
  {
  	question: 'obi wu a abusuafo tumi de n’agyapade hy\u025B ______nsa ma \u2184hw\u025B  so.',		
  	options: ['Okunafo',
			  'Ne babarima',
			  'Odiadefo',
			  'N’adamfo'],
		answer: 2
  },
  {
  	question: 'S\u025B  obi anto ne k\u2184n anwu a, w\u2184fr\u025B  no',		
  	options: ['\u2184saman',
			  'fea',
			  'obusufo',
		   	  '\u2184t\u2184fo'],
		answer: 3
  },
  {
  	question: 'agya rek\u2184 no ogyaw me ade bi, wosoma no a, \u2184b\u025B k\u2184 nyinaa na \u2184resu. \u025B y\u025B  d\u025B n?',		
  	options: ['\u2184kraman',
			  'frama',
			  'l\u2184re',
			  'l\u025B t\u025B '],
		answer: 2
  },
  {
  	question: 'Agya rek\u2184 no ogyaw me ade bi, wosoma no a \u2184renk\u2184 gye s\u025B  woapae n’atifi ansa. \u025B y\u025B  d\u025B n?',
		options: ['Dadewa',
				  'Akoa',
			  	  'l\u2184re',
				  'l\u025B t\u025B '],
		answer: 0
  },
  {
  	question: 'Agya rek\u2184 no ogyaw me akongua f\u025B f\u025B  bi s\u025B  mentena so, nanso saa akongua no obiara ntumi ntena so . \u025B y\u025B  d\u025B n?',
		options: ['As\u025B s\u025B gua',
				  'Bemu',
				  'bor\u2184de',
				  'akentengua'],
		answer: 1
  },
  {
  	question: 'Agya rek\u2184 no ogyaw me akoa bi, saa akoa no s\u025B  \u2184k\u2184m de no a, ontumi nnyina h\u2184, gye s\u025B  wadidi amee, \u025B y\u025B  d\u025B n?',
		options: ['\u2184kraman',
				  'kotoku',
				  'agyinamoa',
			 	  'abofra'],
		answer: 1
  },
  {
  	question: 'Ns\u025B nkyer\u025B nne a obi a \u2184red\u2184w afuw y\u025B  w\u2184 asaase no so ne s\u025B ',		
  	options: ['osi nk\u025B t\u025B ',
			  'otua asafe',
			  'osum otimp\u2184n',
			  'osum ohwim'],
		answer: 0
  },
  {
  	question: 'S\u025B  wuhu s\u025B  abofra bi tinwi y\u025B  mp\u025B s\u025B mp\u025B s\u025B  a \u025B kyer\u025B  s\u025B ',		
  	options: ['\u2184y\u025B  \u2184k\u2184mfo',
			  '\u2184y\u025B  Badu',
			  '\u2184y\u025B  abosomma',
			  '\u2184y\u025B  \u2184saman'],
		answer: 2
  },
  {
  	question: 'S\u025B  akyekyere ne nwaw w\u2184 \u2184hene bi akyeampoma so a na \u025B kyer\u025B  s\u025B ',		
  	options: ['\u2184hene no akra boa ne nwaw ne akyekyere',
			  '\u2184hene no p\u025B  asomdwoe',
			  '\u2184hene no kyi nwaw ne akyekyere',
			  '\u2184hene no p\u025B  nwaw ne akyekyere'],
		answer: 1
  },
  {
  	question: 'Nea edidi so yi mu nea \u025B w\u2184 he na wuhu w\u2184 \u2184hene bi akyeampoma so a, \u025B kyer\u025B  s\u025B  \u2184w\u2184 tumi sen \u2184hene biara',
		options: ['gyata',
				  '\u2184seb\u2184',
				  '\u2184k\u2184re',
				  '\u2184sono'],
		answer: 0
  } 
]