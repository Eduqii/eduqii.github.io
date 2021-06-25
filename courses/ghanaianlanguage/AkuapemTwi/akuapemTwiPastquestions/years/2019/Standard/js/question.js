

//Array of Objects
const quiz = [
  {
  	question:'Bere b\u025B n na \u2184kanni ka kyer\u025B  ne y\u2184nko tip\u025B n due ne nwunu?',
  	options:['Anwummere',
			 'An\u2184pa',
			 'Ahemanakye',
			 'Awia'],
  	answer: 0
  },
  {	
  	question: 'he na Akanfo kyia no aba-a-tenase?',
	options:[ 'Akwakora a wap\u2184n adwuma',
			  'Akokoaa a w\u2184awo no foforo',
			  'Asewbea a \u2184redi n’awoda',
			  'Onuabarima a \u2184retu kwan'],
	answer: 1
  },
  {
  	question:'Okuafo, Adwuma o! Nnyeso no ne_____',
  	options:['Woato me',
			 'Y\u025B ahyiahyia',
		   	 '\u025B nkaa akyi \u025B ',
			 'Adwuma ye'],
  	answer:3
  },
  {
  	question:'\u025B hefa na Akanfo kyia due',  	
  	options:[ 'Awoda ase',
		  	  'Awaregye ase',
			  'Ayi Ase',
			  'Apontow Ase'],
  	answer: 2
  },
  {
  	question:'Din kuw yi mu biako y3 Akanfo kradin nkutoo',  	
  	options:[ 'Agyeman,\u2184p\u2184n, Agyeibea',
			  'Nkansa, Amma, Ofori',
			  'Kwasi, Abena , Yaa',
			  'Twum, Kwame, \u2184saebea'],
  	answer: 2
  },
  {
  	question: 'Din b\u025B n na wode b\u025B ma mmofra a \u025B na awo w\u2184n koro anaa bere koro mu?',		
  	options: ['Ntaafo',
			  'Ahenkan',
			  'Piesie',
			  'Kaakyire'],
		answer: 0
  },
  {
  	question: 'Paw kuw biako a ne nyinaa y\u025B  ap\u025B nt\u025B din.',	 
  	options: [ 'Oforiwa, Adwoa, Obimp3',
			   'Kwakye, Adoma, Nyako',
			   'Ntomago, Sumina, Asaaseasa',
			   'Nkrabrea, Fremp\u2184n, Kwabena'],
		answer: 2
  },
  {
  	question: 'Wo papa w\u2184fa y\u025B  wo d\u025B n w\u2184 w’abusua mu?',		
  	options: [ 'Akumaa',
			   'W\u2184fa',
			   'W\u2184faasewa',
			   'Nanabarima'],
		answer: 3
  },
  {
  	question: 'Akanfo mma b\u2184 w\u2184n agyanom _____',		
  	options: ['nt\u2184n',
			  'Mogya',
			  'Mfuakok\u2184',
			  'Sora'],
		answer: 0
  },
  {
  	question: 'Hena ne wo sewaa?',		
  	options: ['papa Nuabea',
			  'Maame W\u2184fa',
			  '\u025B na nuabea',
			  'Akyi ba a \u2184to so abien'],
		answer: 0
  },
  {
  	question: 'Akanman mu s\u025B  obi ka ntam a ______',		
  	options: ['W\u2184de no k\u2184 k\u2184\u2184to',
			  'W\u2184hwe no',
			  'W\u2184kyere no dedua',
			  'W\u2184b\u2184 no ka'],
		answer: 2
  },
  {
  	question: 'Bragoru y\u025B  amanne a Akanfo y\u025B  ma hefo?',
		options: ['Mmerea a w\u2184ayae aware',
				  'Mma mmea a w\u2184adu mpanyin afe so',
				  'Mma mmarima a w\u2184rehy\u025B  kuay\u025B  ase',
				  'Asigyafo a w\u2184rek\u2184 aware ase'],
		answer: 1
  },
  {
  	question: 'Nne\u025B ma kuw yi mu nea \u025B w\u2184 he na Akanfo de ma asakyima mo?',		
  	options: ['Hyirew, Adwer\u025B , \u2184k\u2184ben',
			  'Birisi, adaka, \u2184t\u2184',
			  'Ayitama, Nkesua, Ntwoma',
			  '\u2184t\u2184, Nkesua, Sonwere'],
		answer: 3
  },
  {
  	question: 'Akanfo awaregye mu no, hena na ogye danta no?',		
  	options: ['Agya',
			  '\u025B na',
			  'W\u2184fa',
			  'Akumaa'],
		answer: 0
  },
  {
  	question: 'Din b\u025B n na w\u2184de ma sika a okunu de ma ne yere no?',		
  	options: ['Ti Ade',
			  'Danta',
			  'Akonta Sekan',
			  'Ti Nsa'],
		answer: 0
  },
  {
  	question: 'Awaregyae mu no, hena na ogu hyirew?',		
  	options: [
		 'Asew Barima',
		 'Akonta',
		 'Akummaa',
		 '\u2184korafo'],
		answer: 2
  },
  {
  	question: 'Abusuakuw Agona akraboa ne ______',		
  	options: ['\u2184kraman',
			  'Akoo',
			  'Ampan',
			  'Akor\u2184ma'],
		answer: 1
  },
  {
  	question: 'Abusua b\u025B n na w\u2184n akraboa ne Opete?',		
  	options: ['Asenefo',
			  'Aduanafo',
			  'Asakyirifo',
			  'Agonafo'],
		answer: 2
  },
  {
  	question: 'Abusua b\u025B n na w\u2184n din ne w\u2184n akraboa no y\u025B  p\u025B ?',		
  	options: ['\u2184yoko',
			  '\u025B ko\u2184na',
			  'Aduana',
			  'Asona'],
		answer: 1
  },
  {
  	question: 'Akanfo nnabu mu no, din foforo b\u025B n na w\u2184de ma nnaw\u2184twe asia?',		
  	options: ['Adaduosia',
			  'Adaek\u025B se',
			  'Adadu\u2184w\u2184twe',
			  'Adaduanan'],
		answer: 3
  },
  {
  	question: 'Dapaa y\u025B  da a edi …_____ anim.',		
  	options: ['Adae',
			  'Odwira',
			  'Afahy\u025B ',
			  'Abisa'],
		answer: 0
  },
  {
  	question: 'Akanfo Asranna mu no, Adae kuw no y\u025B  ahe?',		
  	options: ['Abi\u025B sa',
			  'Abien',
			  'Asia',
			  'Anan'],
		answer: 1
  },
  {
  	question: 'Akuapemfo afahy\u025B  titiriw ne _____.',		
  	options: ['Odwira',
			  'Aboakyere',
			  'Kundum',
			  'Ohum'],
		answer: 0
  },
  {
  	question: 'Nea edidi so yi mu biako ny\u025B  afahy\u025B  ho mfaso.',		
	options: [ 'Abusua tont\u2184n w\u2184n nsaase',
		 	   'Ahemfo ne w\u2184n manfo b\u2184 gua',
		 	   '\u2184manfo sua w\u2184n amammer\u025B ',
		  	   '\u025B de akob\u2184fo ba fie b\u025B sra abusuafo'],
		answer: 0
  },
  {
  	question: 'Ade titiriw pa ara a Akanfo hw\u025B  so paw \u2184hene ne s\u025B , \u025B s\u025B  s\u025B  onipa ko no y\u025B  ______ kron.',
		options: ['\u2184dehye',
			 	  '\u2184yamuyefo ne abakan',
				  'osikani',
				  'patapaa ne akokoduru'],
		answer: 0
  },
  {
  	question: 'D\u025B n na \u2184hene foforo de suae kyer\u025B  ne manfo?',		
  	options: ['Atumpan',
			  'Afoa',
			  '\u2184dawuru',
			  'Mmena'],
		answer: 1
  },
  {
  	question: 'Sanaahene adwuma ne d\u025B n w\u2184 ahemfi?',		
  	options: ['\u2184hw3 sikas\u025B m so',
			  '\u2184boaboa d\u2184m ano',
			  'Odi Kyeame',
			  '\u2184hw\u025B  aduannoa so'],
		answer: 0
  },
  {
  	question: 'Agyarek\u2184 no, ogyaw me akwakoraa bi; \u2184da dan mu a, na ne bogyes\u025B  gu adiwo. \u025B y\u025B  d\u025B n?',
		options: ['Nhwiren a apow',
			  	  'D\u2184te a egu bor\u2184de ase',
				  'Mframa a \u025B hy\u025B  toa mu',
				  'Mukaase Wusiw'],
		answer: 0
  },
  {
  	question: 'Kwasi se, agya ade bi w\u2184 h\u2184, \u025B ny\u025B  d\u025B  nanso \u025B ka wo nsa p\u025B  na woatafere. \u025B y\u025B  ______',
		options: ['\u025B wo',
			  	  'gyasramma',
				  'asikiret\u025B ',
				  'adesaa'],
		answer: 1
  },
  {
  	question: 'Akanfo ananses\u025B m nhyehy\u025B e no y\u025B  _____',		
  	options:['mfiase, mfinimfini, awiei',
			 'Awieim, mfinimfini, mfiase',
			 'mfinimfini ne mfiase nkutoo',
			 'mfinimfini, awiei, mfiase'],
		answer: 0
  },
  {
  	question: 'Ananses\u025B m mu nnwom gu ahorow abien, Ananses\u025B m mu nnwom ne ______',		
  	options: ['Mmoguo',
			  'B\u2184sr\u025B muka',
			  'Mede soa asiamasi',
			  'mfeafeaho'],
		answer: 0
  },
  {
  	question: 'Hena na Akanfo b\u2184 no mmran; Ototurobonsu?',		
  	options: ['\u2184hene a \u2184te agua so',
			  'Onyankop\u2184n a \u2184b\u2184\u2184 wiase',
			  'Kwaku Ananse ne Ntikuma',
			  '\u2184b\u2184mm\u2184fo a wakum \u2184sono'],
		answer: 1
  },
  {
  	question: 'Akanfo din Antwi mmran ne d\u025B n?',		
  	options: ['Apea Kubi',
			  'Nyas\u025B mhw\u025B ',
			  'Bediako',
			  'Bosiako'],
		answer: 3
  },
  {
  	question: 'Me papa taa b\u2184 me nua Kwame mmran se _____',		
  	options: ['Okyini',
			  'Atoapoma',
			  '\u2184daaku',
			  'okoto'],
		answer: 1
  },
  {
  	question: 'Toa \u025B b\u025B  yi so: Afiri huan a, _____',		
  	options: ['\u025B w\u2184 wuram',
			  '\u025B k\u2184 ne nkyi',
			  'eyi aseredowa',
			  '\u025B ba n’anim'],
		answer: 1
  },
  {
  	question: 'Abofra no ka kyer\u025B \u025B  n’adamfo no s\u025B : \"Woank\u2184 bi a _______\"',		
  	options: ['Wuse y\u025B ank\u2184',
			  'y\u025B b\u025B b\u2184 nk\u2184mm\u2184',
			  'wob\u025B tena fie',
			  'Wo papa de \u2184bae'],
		answer: 0
  },
  {
  	question: 'Tete nsaano dwuma mu no, d\u025B n na \u2184tomfo ma \u2184manfo?',		
  	options: ['\u2184sos\u2184w, asomukaa, nkyene',
			  'kente, mp\u025B tea, asaawa',
			  'As\u2184w, nkrante, \u2184sosow',
			  'Bor\u025B \u2184de,As\u2184w, nt\u2184rewa'],
		answer: 2
  },
  {
  	question: 'Nne\u025B ma kuw yi mu nea \u025B w\u2184 he na yenya fi okuafo h\u2184?',		
  	options: ['Ahwerew, p\u025B tea, amankani',
			  'Bayer\u025B , k\u2184nmuade, ntama',
			  'Bankye, atosode, bor\u2184de',
			  'Nkontommire, kente, kuku'],
		answer: 2
  },
  {
  	question: 'Agoru yi de mmewa nkutoo na wodi',		
  	options: ['Mpempenaa',
			  'Ahintahinta',
			  'Ananses\u025B m',
			  'As\u2184ba'],
		answer: 3
  },
  {
  	question: 'Nea \u025B w\u2184 he na \u025B nka mfaso a mmofra nya w\u2184 agorudi mu?',		
  	options: ['Anigye',
			  'Ahantan',
			  'Ap\u2184wmuden',
			  'Ahos\u025B paw'],
		answer: 1
  } 
]