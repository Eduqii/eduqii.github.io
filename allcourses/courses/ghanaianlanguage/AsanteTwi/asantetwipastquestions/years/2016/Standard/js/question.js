

//Array of Objects
const quiz = [
 {
question: 'Sɛ ɔkwantuni bi firi akwantuo mu ba a, abusuafoɔ',

options: ['ma no adwuma',
 'ma no due',
 'bisa no kwanso',
 'ma no nante yie'],
answer: 2
},
{
question: 'Sɛ ɔkwantuni bɔ n’amanneɛ wie a, abusuafoɔ ma no',

options: ['akwaaba',
 'adwuma',
 'due ne awɔ',
 'woaba a, tena ase'],
answer: 0
},
{
question: 'Ansa na wɔbɛma abɔfra bi abusuadin no, na ɔwɔ',

options: ['abodin',
 'kradin',
 'ahendin',
 'apɛtɛdin'],
answer: 1
},
{
question: 'Sɛ yɛfrɛ obi Nyankomago a, na ɔyɛ',

options: ['bagyina',
 'ɔdehyeɛ',
' ntaafoɔ akyi ba',
 'Tawia akyi ba.'],
answer: 3
},
{
question: 'Niwaa mma yɛ nnipa a',

options: ['wɔn maame awu',
 'wɔfiri yafunu baako mu',
 'wɔn maame yɛ ketewa',
 'wɔn nana yɛ baako'],
answer: 1
},
{
question: 'Sɛ mmarima baanu ware wɔ efie baako mu a, wɔyɛ',

options: ['kununom',
 'akorafoɔ',
 'nkummaafoɔ',
 'nsenom'],
answer: 1
},
{
question: 'Sɛ ɔbaa de abɔfra bi kɔware ɔbarima a, abɔfra no yɛ ɔbarima no',

options: ['banana',
 'abanoma',
 'bagyina',
 'tammoba'],
answer: 1
},

{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho. '+ '<br />' + '<br />' + '</b>' + ' Yɛgye di sɛ obi didi na wannwe nam a,',

options: ['n’ani bɛfira',
 'n’ano bɛkyim',
 'n’aso bɛsi',
 'ne hwene bɛbɔ'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho. '+ '<br />' + '<br />' + '</b>' + ' Nnipa bɛn na Akanfoɔ bɔ abamo ma wɔn?',

options: ['Fofie',
 'Tawia',
 'Nyankomago',
 'Ntaafoɔ'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho. '+ '<br />' + '<br />' + '</b>' + ' Wokɔ wo dɔfo ayie ase a, wobɔ',

options: ['hyire',
 'ka',
 'tikwa',
 'nsawa'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho. '+ '<br />' + '<br />' + '</b>' + ' Ɔbaa bi kunu wu a,',

options: ['ɔyɛ ayɛ',
 'ɔbɔ hyire',
 'ɔyɛ kuna',
 'ɔdware nsuo mu'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho. '+ '<br />' + '<br />' + '</b>' + ' Sɛ ɔbaa bi kunu wu a, berɛ bɛn na ɔtumi ware bio?',

options: ['Afe baako',
 'Abosome nsia',
 'Adaduanan',
 'Mfeɛ mmienu'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho. '+ '<br />' + '<br />' + '</b>' + ' Nhyehyɛeɛ a obi yɛ fa n’agyapadeɛ kyɛ ho ansa na wawu yɛ',

options: ['nsamanfrɛ',
 'nsamankɔ',
 'nsamanseɛ',
 'nsamantoa'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ gyidie, owuo ne adedie ho. '+ '<br />' + '<br />' + '</b>' + ' Sɛ ɔbarima bi yɛ agyapadeɛ bi wɔ abusua asase so a, ɛyɛ nokorɛ sɛ',

options: ['abusua nni so tumi',
 'ɔntumi mfa nkyɛ ne yere ne ne mma',
 'ɔtumi de kyɛ ne mma',
 'ɔtumi de kyɛ ne yere'],
answer: 1
},

{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.' + '<br />' + '<br />' + '</b>' + ' Sɛ yɛka sɛ ɔbaa warefoɔ bi bɔ mpoa a, na ɛkyerɛ sɛ',

options: ['ɔwo ntɛmntɛm',
 'ɔpɛ kyini',
 'ɔpɛ ayɔnkogorɔ',
 'ɔtwe mpena'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.' + '<br />' + '<br />' + '</b>' + ' Sɛ ɔbarima bi di badudwan a, na ɛkyerɛ sɛ',

options: ['ɔwɔ nnwan du',
 'wadi odwan nkwan',
 'wawo mma du',
 'waware mmaa du'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.' + '<br />' + '<br />' + '</b>' + ' Yi deɛ ɛnyɛ nokorɛ wɔ bragorɔ ho',

options: ['ɛgu ɔbaa no anima se',
 'ɛma ɔbaa no nya dwatire',
 'ɛma ɔbaa no nya kunu pa',
 'ɛhyɛ ɔbaa no animuonyam'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.' + '<br />' + '<br />' + '</b>' + ' Yɛde …………ka ɔbaa a yɛregoro no bra ano.',

options: ['ɛnam',
 'kosua',
 'nsa',
 'nsuo'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.' + '<br />' + '<br />' + '</b>' + ' Anansesɛm mu ɔsebɔ taa di dwuma sɛ',

options: ['mmirikatufoɔ',
 'mmɔborɔhunufoɔ',
 'owudifoɔ',
 'onyansafoɔ'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ awareɛ, bragorɔ, anansesɛm ne atetesɛm ho.' + '<br />' + '<br />' + '</b>' + ' Asantefoɔ atetesɛm kyerɛ sɛ wɔpue firii fam wɔ',

options: ['Ɔyoko',
 'Kumase',
 'Mampɔn',
 'Asantemanso'],
answer: 3
},

{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Amanneɛ bɛn na wɔyɛ de kyerɛ sɛ wɔatu ɔhene bi?',

options: ['Yɛworɔ ne nan mu mpaboa',
 'Yɛgye n’afena',
 'Yɛgye n’akyeampoma',
 'Yɛgye n’apakan'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Sɛ ɔhempɔn bi ka baabi a, Akanfoɔ tumi ka sɛ',

options: ['otumfoɔ atia mpaboa mu',
 'odupɔn atutu',
 'ɔberempɔn asoa ne bankyiniiɛ',
 'ɔhene kɔ nsrahwɛ'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Sɛ Takyimanfoɔ redi apoɔ a,',

options: ['ɔhene bɔ tikwa',
 'ɔhene mpue abɔnten',
 'wɔtumi ka ɔhene anim',
 'ɔhene didi abɔnten'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Yeinom baako nka mfasoɔ a yɛnya no afahyɛ ho.',

options: ['Ɛde anigyeɛ ba',
 'Ɛde nkabom ba',
 'Ɛde mpontuo ba',
 'Ɛde ntɔkwa ba'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Akanfoɔ frɛ wɔn nnapɔnna sɛ',

options: ['dapapa',
 'dabɔne',
 'afoofida',
 'dakronkron'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Memeneda Dapaa din foforɔ ne',

options: ['Nkyɛmemene',
 'Fɔmemene',
 'Kurumemene',
 'Monomemene'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Amammerɛ kwan so no …… na wɔdi asɛm.',

options: ['abadwafoɔ',
 'adansefoɔ',
 'atɛmmuafoɔ',
 'lɔyafoɔ'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Adɛn nti na Ɔkanni regu nsa a, ɔworɔ ne nan mu mpaboa?',

options: ['ɛkyerɛ abufuo',
 'ɛkyerɛ anibere',
 'ɛkyerɛ ɔko',
 'ɛkyerɛ obuo'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ ahennie, afahyɛ, asɛnnie, nsaguo ne nnapɔnna ho.' + '<br />' + '<br />' + '</b>' + ' Sɛ Akanfoɔ reyi apaeɛ a,',

options: ['wɔbu nkotodwe',
 'wɔkata wɔn ani',
 'wɔpagya wɔn nsa',
 'wɔworɔ wɔn ntoma gu wɔn mmatiri so'],
answer: 3
},

{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Akyeampoma a ɔkwakuo a ɔsɛn dubaa so si kyerɛ sɛ',

options: ['Wopɛ sɛ dua mmu mmɔ ɔkwakuo a, ɛnoa no si',
 'ɔkwakuo ani agye',
 'ɔkwakuo si dua so',
 'dubaa no akyere ɔkwakuo nu'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Akanman mu sɛ obi fira kuntunkuni anaasɛ kɔbene a, na ɛkyerɛ sɛ',

options: ['n’ani abere',
 'ne bo afu',
 'ne biribi awu',
 'ne werɛ aho'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Biretuo akraboa ne ɔsebɔ a ɔgyina hɔ ma',

options: ['ahoɔherɛ',
 'ahoteɛ',
 'asomdwoeɛ',
 'ahoɔden'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Akyekyedeɛ ne nwa nsɛnkyerɛnne kyerɛ deɛn?',

options: ['aniteɛ',
 'asondwoeɛ',
 'ehu',
 'mmɔborɔhunu'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Niwaa mma nsae a, …….nni adeɛ.',

options: ['babarima',
 'nuabarima',
 'wɔfase',
 'nuabaa'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Obi a ɔmpɛ adwuma no…..na ɛbɛkum no.',

options: ['ohia',
 'aborɔ',
 'aniteɛ',
 'soma'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Obi nkwati ……..mmɔ pɔ.',

options: ['akyerɛkyerɛkwan',
 'nsateahene',
 'kɔkorɔmmɔtoɔ',
 'kokurobetie'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Obi mfa …..ne kasa.',

options: ['adidie',
 'nkɔmmɔdie',
 'nsanom',
 'ntɔkwa'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Ahwenne pa ………',

options: ['kasa',
 'nkasa',
 'nyɛ fɛ',
 'yɛ fɛ'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Agya adeɛ bi wɔ hɔ gye sɛ wobɔ n’apampam ansa na watena ase. Ɛyɛ',

options: ['bɔɔlo',
 'dua',
 'dadewa',
 'praeɛ'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ na ɛfa Akanfoɔ nsɛnkyerɛnneɛ a ɛkasa, mmɛ ne agya rekɔ ho.' + '<br />' + '<br />' + '</b>' + ' Agya nam bi wɔ hɔ gye sɛ wowe ansa na woahunu sɛ mogya wɔ mu. Ɛyɛ',

options: ['ahwedeɛ',
 'borɔferɛ',
 'nkateɛ',
 'bese.'],
answer: 3
}
]