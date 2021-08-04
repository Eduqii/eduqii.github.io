

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n' + '</b>' + 'S\u025B  obi k\u2184to ne y\u2184nko na \u2184redidi a, okyia no',
  	options:['Nya nkwa',
			 'Ayikoo',
			 'Adidiabrada',
			 'Kita mu'],
  	answer: 3
  },
  {	
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n' + '</b>' + 'Akanfo bu obi a ohu nnipa a onkyia no d\u025B n?',	
  	options:[ 'Atetekwaa',
			  'Nyansafo',
			  'Onihafo',
			  'Nimdefo'],
	answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n' + '</b>' + 'Obi kyia ne y\u2184nko awia na w\u2184redi ntetewmu a, nkyia a ne y\u2184nko no de gyaw no kwan ne',
  	options:['\"due ne aw\u2184w\"',
		     '\"da yiye oo\"',
			 '\"Due ne awia\"',
			 '\"due ne onwini\"'],
  	answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n' + '</b>' + 'Akanfo tete aware ahorow no mu biako ne',  	
  	options:[ 'd\u2184mfa',
			  'asiwa',
			  'ayefare',
			  'dwetiri'],
  	answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n' + '</b>' + 'Sika b\u025B n na \u2184barima tua ma ne yere nua mmarimanom bere a w\u2184reware?',  	
  	options:[ 'Ti ade',
			  'Ti nsa',
			  'Danta',
			  'Akontasekan'],
  	answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n' + '</b>' +  'Amanne b\u025B n na Akanfo y\u025B  nnaw\u2184twe da de gye abofra foforo to abusua mu?',
		options: ['Hyirewgu',
				  'Awaregu',
				  'Abadinto',
				  'Abisa'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 abusuab\u2184 ho.\n' + '</b>' +  'W\u2184fr\u025B  abofra a odi ntaafo akyi no d\u025B n?',
	 options: [ 'Anane',
			    'Tawia',
				'Nyankomago',
				'atuak\u2184san'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Ns\u025B mfua a edidi so yi nea \u025B w\u2184 he na \u025B y\u025B  Anom Kasadwini.', 		
  	options: [ 'Ananses\u025B m',
			   'Buronya',
			   'nkurob\u2184',
			   'abas\u025B m'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Akanfo kasadwini ahorow ne',		
  	options: ['akyer\u025B w ne anom kasadwini',
			  'ayan ne anases\u025B m',
			  'akyer\u025B w ne apae',
			  'ab\u025B bu ne akyer\u025B w kasadwini'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Yi akyer\u025B w kasadwini ahorow ho nhw\u025B so w\u2184 nea edidi so yi mu.',
		options: ['Ab\u025B bu ne abas\u025B m',
				  'Apae ne ayan',
				  'Ahw\u025B goru ne anwens\u025B m',
				  'Abas\u025B m ne amoma'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Nea edidi so yi mu biako y\u025B  Akyer\u025B w kasadwini su',		
  	options: ['Enni \u2184kyer\u025B wfo p\u2184tee',
			  '\u025B y\u025B  \u2184manfo agyapade',
			  'Enni bere a \u025B bae',
			  '\u025B w\u2184 \u2184kyer\u025B wfo p\u2184tee'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Nea edidi so yi mu biako y\u025B  Akyer\u025B w Kasadwini su.',		
  	options: ['\u025B w\u2184 \u2184kyer\u025B fo p\u2184tee',
			  '\u025B nni Okyer\u025B wfo p\u2184tee',
			  '\u025B y\u025B  0manfo agyapade',
			  '\u025B nni bere a \u025B bae'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ '\u2184barima ne \u2184bea a w\u2184b\u2184 abusua baako (bogya abusua) no ______',		
  	options: ['Tumi ware w\u2184n ho',
			  'Ntumi ny\u025B  ayi mm\u2184 mu',
			  'Ntumi nware w\u2184n ho',
			  'Tumi t\u2184n abusua agyapade'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'D\u025B n sunsum na agya de b\u2184 ne mma ho ban?',	
  	options: ['Bosom',
			  'Nyankopasakyi',
			  'nt\u2184n',
			  'bosomak\u2184mfo'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'S\u025B  \u2184barima ne \u2184bea a w\u2184b\u2184 abusua koro ware a, Akanfo bu no s\u025B  \u025B y\u025B  d\u025B n?',		
  	options: ['Bragoru',
			  'Mogyafra',
			  'y\u2184nkod\u2184',
			  'kyiribra'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Asona abusuakuw no akraboa y\u025B  aboa b\u025B n?',		
  	options: ['Ampan',
		  	  'Kwaakwaadabi',
			  '\u2184kraman',
			  '\u025B ko\u2184'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ '_____y\u025B  Aduanafo akraboa.',		
  	options: ['\u2184kraman',
			  'Anene',
			  'Akoo',
			  'Akoroma'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Abusuakuw b\u025B n na akoroma y\u025B  w\u2184n akraboa?',		
  	options: ['Ayokofo',
			  'Asonafo',
			  '\u025B ko\u2184nafo',
			  'Agonafo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+  'Abusua biara w\u2184 ______a emu nnipa no nyinaa hy\u025B  n’ase.',		
  	options: ['Bamkyini',
			  'Bota',
			  'As\u025B s\u025B gua',
			  'Abusuapanyin'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasadwini ho.' + '</b>'+ 'Mfaso a \u2184kanni nya w\u2184 n’abusua mu biako ne _______',		
  	options: ['Nhomanim ne aho\u2184f\u025B ',
			  'aho\u2184den ne tumidi',
			  'ani\u025B den ne akokurokos\u025B m',
			  's\u025B  w\u2184y\u025B  ayi b\u2184 mu na w\u2184boa w\u2184n ho w\u2184n ho'],
		answer: 3
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n' + '</b>' + 'Adae ahorow ahe na Akanfo w\u2184?',		
  	options: ['Abien',
			  'Abiesa',
			  'Anum',
			  'Ason'],
		answer: 0
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n' + '</b>' +  'Asram kuw yi mu biara kura nnafua aduasa baako.',		
  	options: ['\u2184b\u025B nem, Ogyefuo, \u025B b\u2184',
			  '\u2184p\u025B p\u2184n, \u2184b\u025B nem, Kitawonsa',
			  '\u2184p\u025B nimaa, Kitawonsa, Oforisuo',
			  '\u2184sanaa, Ahinime, Ayewohomum\u2184'],
		answer: 1
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n' + '</b>' +  'Din foforo b\u025B n na Akanfo de fr\u025B  nnaw\u2184twe asia?',		
  	options: ['Adaduasa',
			  'Adaduosia',
			  'Adaduanan',
			  'adaduw\u2184twe'],
		answer: 2
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n' + '</b>' +  'Awukudae t\u2184 mp\u025B n ahe w\u2184 Akanfo asranna mu?',		
  	options: ['Awotwe',
			  'Ason',
			  'Asia',
			  'Akron'],
		answer: 3
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n' + '</b>' +  'Afahy\u025B  b\u025B n na Akanfo binom di de huro \u2184k\u2184m?',		
  	options: ['Kundum',
			  'Adaek\u025B se',
			  'Ohum',
			  'Aboakyere'],
		answer: 2
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 nnabu ne afahy\u025B  ho.\n' + '</b>' +  'Efutufo kyere aboa na …_____twa Odwira.',		
  	options: ['Akuapemfo',
			  'Nzemafo',
			  'Asantefo',
			  'Fantefo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n' + '</b>' + 'Akanfo akyiwade no mu biako ne s\u025B  _______',
		options: ['y\u025B k\u2184da a, y\u025B nkra amannifo',
			  	  'yehyia obi an\u2184pa a, yenkyia',
				  'yeguare a y\u025B nto dwom',
				  'yehyia \u2184h\u2184ho a, yemmisa no as\u025B m'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n' + '</b>' +  '\u025B y\u025B  akyiwade s\u025B  yedidi a,',		
  	options: ['Y\u025B we nam bob\u2184 dompe mu',
			  'Y\u025B nom nkwan taforo y\u025B n nsa',
			  'Y\u025B tena agua tiatia so',
			  'Y\u025B de y\u025B n nsa benkum si fam'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n' + '</b>' +  'Akanfo gyidi s\u025B  onipa wu a, _______',		
  	options: ['\u2184k\u2184tena asamando',
			  'na wawu koraa',
			  '\u2184k\u2184tena sukwan so',
			  '\u2184nenam mfikyiri'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n' + '</b>' +  'Owu a obi anto ne k\u2184n anwu no Akanfo fr\u025B  ne d\u025B n?',
		options:['Owupa',
			     'at\u2184fowu',
			     'ohiawu',
				 'nkwaseawu'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n' + '</b>' +  'S\u025B  obi wu a, hena na \u2184hw\u025B  ayiy\u025B  no ho ntotoe nyinaa so?',
		options: ['Ahenkwaa',
				  'Ayipasohene',
				  'Okunafo',
				  'Nkwaakwaahene'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 akyiwade, owu ne ayiy\u025B  ho.\n' + '</b>' +  'Y\u025B fr\u025B  nne\u025B ma a owufo bi gyaw w\u2184 ne wu akyi no',		
  	options: ['nsab\u2184de',
			  'ayiaseka',
			  'sora',
			  'awunyade'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n' + '</b>' + 'Na minim s\u025B  abofra yi ano awo saa da.',
		options: ['Nim serew',
				  'Nim kasa',
				  'Nim su',
				  'Nim adidi'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n' + '</b>' + 'Nn\u025B  nnansa na metee s\u025B  \u2184h\u2184ho no abu ne k\u025B t\u025B  mu. Eyi kyer\u025B  s\u025B ',
		options: ['Aguan',
				  'Ada',
				  'Ak\u2184 nsan aba',
				  'Awu'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n' + '</b>' +  'Memeneda nkwan no de, na \u025B nka se.',		
  	options: ['\u025B nam pii w\u2184 mu',
			  'Ani w\u2184 srade',
			  '\u025B y\u025B  d\u025B  papa',
			  '\u025B ny\u025B  d\u025B  koraa'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n' + '</b>' +  'Toa b\u025B  yi so: \"Gua b\u025B ba a, efi …\"',		
  	options: ['Awiei',
			  'aguat\u2184nde',
			  'an\u2184pa',
			  'nnipa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 kasakoa ne nn\u025B  ho.\n' + '</b>' +  'Woank\u2184 bi a wose y\u025B ank\u2184 kyer\u025B  s\u025B  _____.',		
  	options: ['woamma nt\u025B m',
			  'obiara amm\u025B fr\u025B  wo se k\u2184ko',
			  'wunnim \u2184haw a y\u025B faa mu',
			  'na wonenam h\u2184 kwa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 mmofra agorunnwom ne nnwuma ho.\n' + '</b>' + 'Agoru b\u025B n na mmofra de dwom \"sii-sii , sii-dadakoo\" di?',
  	options: ['Sansankoroma',
			  'Amuamuani',
			  'Abosi',
			  'Mpempenaa'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 mmofra agorunnwom ne nnwuma ho.\n' +  'Agoru antoakyire mu no, mmofra to dwom:',		
  	options: ['\"obi ba o, yee yei! Obewu o, yee yei!\"',
			  '\"adonko fa me k\u2184, faa dee\"',
			  '\"sansan koroma won i awu o\"',
			  '\"sansan d\u2184boro, d\u2184boro d\u2184 sansan\"'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na \u025B fa Akanfo\u2184 mmofra agorunnwom ne nnwuma ho.\n' +  'Wok\u2184 sikadwumfo adwuma mu a, d\u025B n na wubenya at\u2184?',		
  	options: ['\u2184sosow ne dadefiri',
			  'Mp\u025B tea ne asomuade',
			  'As\u025B s\u025B gua ne nhene',
			  'Adaka ne \u2184pon'],
		answer: 1
  } 
]