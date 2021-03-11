

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n' + '</b>' + 'Sε obi kↄto ne yↄnko na ↄredidi a, okyia no',
  	options:['Nya nkwa',
			 'Ayikoo',
			 'Adidiabrada',
			 'Kita mu'],
  	answer: 3
  },
  {	
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n' + '</b>' + 'Akanfo bu obi a ohu nnipa a onkyia no dεn?',	
  	options:[ 'Atetekwaa',
			  'Nyansafo',
			  'Onihafo',
			  'Nimdefo'],
	answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n' + '</b>' + 'Obi kyia ne yↄnko awia na wↄredi ntetewmu a, nkyia a ne yↄnko no de gyaw no kwan ne',
  	options:['“due ne awↄw”',
		     '“da yiye oo”',
			 '“Due ne awia”',
			 '“due ne onwini”'],
  	answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n' + '</b>' + 'Akanfo tete aware ahorow no mu biako ne',  	
  	options:[ 'dↄmfa',
			  'asiwa',
			  'ayefare',
			  'dwetiri'],
  	answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n' + '</b>' + 'Sika bεn na ↄbarima tua ma ne yere nua mmarimanom bere a wↄreware?',  	
  	options:[ 'Ti ade',
			  'Ti nsa',
			  'Danta',
			  'Akontasekan'],
  	answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n' + '</b>' +  'Amanne bεn na Akanfo yε nnawↄtwe da de gye abofra foforo to abusua mu?',
		options: ['Hyirewgu',
				  'Awaregu',
				  'Abadinto',
				  'Abisa'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ abusuabɔ ho.\n' + '</b>' +  'Wↄfrε abofra a odi ntaafo akyi no dεn?',
	 options: [ 'Anane',
			    'Tawia',
				'Nyankomago',
				'atuakↄsan'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Nsεmfua a edidi so yi nea εwↄ he na εyε Anom Kasadwini.', 		
  	options: [ 'Anansesεm',
			   'Buronya',
			   'nkurobↄ',
			   'abasεm'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Akanfo kasadwini ahorow ne',		
  	options: ['akyerεw ne anom kasadwini',
			  'ayan ne anasesεm',
			  'akyerεw ne apae',
			  'abεbu ne akyerεw kasadwini'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Yi akyerεw kasadwini ahorow ho nhwεso wↄ nea edidi so yi mu.',
		options: ['Abεbu ne abasεm',
				  'Apae ne ayan',
				  'Ahwεgoru ne anwensεm',
				  'Abasεm ne amoma'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Nea edidi so yi mu biako yε Akyerεw kasadwini su',		
  	options: ['Enni ↄkyerεwfo pↄtee',
			  'Ɛyε ↄmanfo agyapade',
			  'Enni bere a εbae',
			  'εwↄ ↄkyerεwfo pↄtee'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Nea edidi so yi mu biako yε Akyerεw Kasadwini su.',		
  	options: ['εwↄ ↄkyerεfo pↄtee',
			  'εnni Okyerεwfo pↄtee',
			  'εyε 0manfo agyapade',
			  'εnni bere a εbae'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Ↄbarima ne ↄbea a wↄbↄ abusua baako (bogya abusua) no ……',		
  	options: ['Tumi ware wↄn ho',
			  'Ntumi nyε ayi mmↄ mu',
			  'Ntumi nware wↄn ho',
			  'Tumi tↄn abusua agyapade'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Dεn sunsum na agya de bↄ ne mma ho ban?',	
  	options: ['Bosom',
			  'Nyankopasakyi',
			  'ntↄn',
			  'bosomakↄmfo'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Sε ↄbarima ne ↄbea a wↄbↄ abusua koro ware a, Akanfo bu no sε εyε dεn?',		
  	options: ['Bragoru',
			  'Mogyafra',
			  'yↄnkodↄ',
			  'kyiribra'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Asona abusuakuw no akraboa yε aboa bεn?',		
  	options: ['Ampan',
		  	  'Kwaakwaadabi',
			  'Ↄkraman',
			  'Ɛkoↄ'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ '…….yε Aduanafo akraboa.',		
  	options: ['Ↄkraman',
			  'Anene',
			  'Akoo',
			  'Akoroma'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Abusuakuw bεn na akoroma yε wↄn akraboa?',		
  	options: ['Ayokofo',
			  'Asonafo',
			  'Ɛkoↄnafo',
			  'Agonafo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+  'Abusua biara wↄ ……a emu nnipa no nyinaa hyε n’ase.',		
  	options: ['Bamkyini',
			  'Bota',
			  'Asεsεgua',
			  'Abusuapanyin'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasadwini ho.' + '</b>'+ 'Mfaso a Ↄkanni nya wↄ n’abusua mu biako ne ….',		
  	options: ['Nhomanim ne ahoↄfε',
			  'ahoↄden ne tumidi',
			  'aniεden ne akokurokosεm',
			  'sε wↄyε ayi bↄ mu na wↄboa wↄn ho wↄn ho'],
		answer: 3
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n' + '</b>' + 'Adae ahorow ahe na Akanfo wↄ?',		
  	options: ['Abien',
			  'Abiesa',
			  'Anum',
			  'Ason'],
		answer: 0
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n' + '</b>' +  'Asram kuw yi mu biara kura nnafua aduasa baako.',		
  	options: ['Ↄbεnem, Ogyefuo, Ɛbↄ',
			  'Ↄpεpↄn, Ↄbεnem, Kitawonsa',
			  'Ↄpεnimaa, Kitawonsa, Oforisuo',
			  'Ↄsanaa, Ahinime, Ayewohomumↄ'],
		answer: 1
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n' + '</b>' +  'Din foforo bεn na Akanfo de frε nnawↄtwe asia?',		
  	options: ['Adaduasa',
			  'Adaduosia',
			  'Adaduanan',
			  'adaduwↄtwe'],
		answer: 2
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n' + '</b>' +  'Awukudae tↄ mpεn ahe wↄ Akanfo asranna mu?',		
  	options: ['Awotwe',
			  'Ason',
			  'Asia',
			  'Akron'],
		answer: 3
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n' + '</b>' +  'Afahyε bεn na Akanfo binom di de huro ↄkↄm?',		
  	options: ['Kundum',
			  'Adaekεse',
			  'Ohum',
			  'Aboakyere'],
		answer: 2
  },
  {
  	question: '<b>' +  'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ nnabu ne afahyε ho.\n' + '</b>' +  'Efutufo kyere aboa na ……….twa Odwira.',		
  	options: ['Akuapemfo',
			  'Nzemafo',
			  'Asantefo',
			  'Fantefo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n' + '</b>' + 'Akanfo akyiwade no mu biako ne sε ….',
		options: ['yεkↄda a, yεnkra amannifo',
			  	  'yehyia obi anↄpa a, yenkyia',
				  'yeguare a yεnto dwom',
				  'yehyia ↄhↄho a, yemmisa no asεm'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n' + '</b>' +  'Ɛyε akyiwade sε yedidi a,',		
  	options: ['Yεwe nam bobↄ dompe mu',
			  'Yεnom nkwan taforo yεn nsa',
			  'Yεtena agua tiatia so',
			  'Yεde yεn nsa benkum si fam'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n' + '</b>' +  'Akanfo gyidi sε onipa wu a, ….',		
  	options: ['ↄkↄtena asamando',
			  'na wawu koraa',
			  'ↄkↄtena sukwan so',
			  'ↄnenam mfikyiri'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n' + '</b>' +  'Owu a obi anto ne kↄn anwu no Akanfo frε ne dεn?',
		options:['Owupa',
			     'atↄfowu',
			     'ohiawu',
				 'nkwaseawu'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n' + '</b>' +  'Sε obi wu a, hena na ↄhwε ayiyε no ho ntotoe nyinaa so?',
		options: ['Ahenkwaa',
				  'Ayipasohene',
				  'Okunafo',
				  'Nkwaakwaahene'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ akyiwade, owu ne ayiyε ho.\n' + '</b>' +  'Yεfrε nneεma a owufo bi gyaw wↄ ne wu akyi no',		
  	options: ['nsabↄde',
			  'ayiaseka',
			  'sora',
			  'awunyade'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n' + '</b>' + 'Na minim sε abofra yi ano awo saa da.',
		options: ['Nim serew',
				  'Nim kasa',
				  'Nim su',
				  'Nim adidi'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n' + '</b>' + 'Nnε nnansa na metee sε ↄhↄho no abu ne kεtε mu. Eyi kyerε sε',
		options: ['Aguan',
				  'Ada',
				  'Akↄ nsan aba',
				  'Awu'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n' + '</b>' +  'Memeneda nkwan no de, na εnka se.',		
  	options: ['Ɛnam pii wↄ mu',
			  'Ani wↄ srade',
			  'Ɛyε dε papa',
			  'Ɛnyε dε koraa'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n' + '</b>' +  'Toa bε yi so: “Gua bεba a, efi …”',		
  	options: ['Awiei',
			  'aguatↄnde',
			  'anↄpa',
			  'nnipa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ kasakoa ne nnε ho.\n' + '</b>' +  'Woankↄ bi a wose yεankↄ kyerε sε ……..',		
  	options: ['woamma ntεm',
			  'obiara ammεfrε wo se kↄko',
			  'wunnim ↄhaw a yεfaa mu',
			  'na wonenam hↄ kwa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ mmofra agorunnwom ne nnwuma ho.\n' + '</b>' + 'Agoru bεn na mmofra de dwom “sii-sii , sii-dadakoo” di?',
  	options: ['Sansankoroma',
			  'Amuamuani',
			  'Abosi',
			  'Mpempenaa'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ mmofra agorunnwom ne nnwuma ho.\n' +  'Agoru antoakyire mu no, mmofra to dwom:',		
  	options: ['“obi ba o, yee yei! Obewu o, yee yei!”',
			  '“adonko fa me kↄ, faa dee”',
			  '“sansan koroma won i awu o”',
			  '“sansan dↄboro, dↄboro dↄ sansan”'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu baako a eye na ɛfa Akanfoɔ mmofra agorunnwom ne nnwuma ho.\n' +  'Wokↄ sikadwumfo adwuma mu a, dεn na wubenya atↄ?',		
  	options: ['Ↄsosow ne dadefiri',
			  'Mpεtea ne asomuade',
			  'Asεsεgua ne nhene',
			  'Adaka ne ↄpon'],
		answer: 1
  } 
]