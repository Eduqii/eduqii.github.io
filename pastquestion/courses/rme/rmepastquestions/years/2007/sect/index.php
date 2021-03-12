<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2007 v2.0</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/grid/">

    

    <!-- Bootstrap core CSS -->
<link href="../../../../../../assets/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="grid.css" rel="stylesheet">
  </head>
  <body class="py-4">
    
<main>
  <!--<div class="container">

    <h1>Bootstrap grid examples</h1>
    <p class="lead">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>
    <p>In these examples the <code>.themed-grid-col</code> class is added to the columns to add some theming. This is not a class that is available in Bootstrap by default.</p>

    <h2 class="mt-4">Five grid tiers</h2>
    <p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>

    <div class="row mb-3">
      <div class="col-4 themed-grid-col">.col-4</div>
      <div class="col-4 themed-grid-col">.col-4</div>
      <div class="col-4 themed-grid-col">.col-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-sm-4 themed-grid-col">.col-sm-4</div>
      <div class="col-sm-4 themed-grid-col">.col-sm-4</div>
      <div class="col-sm-4 themed-grid-col">.col-sm-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-lg-4 themed-grid-col">.col-lg-4</div>
      <div class="col-lg-4 themed-grid-col">.col-lg-4</div>
      <div class="col-lg-4 themed-grid-col">.col-lg-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-xl-4 themed-grid-col">.col-xl-4</div>
      <div class="col-xl-4 themed-grid-col">.col-xl-4</div>
      <div class="col-xl-4 themed-grid-col">.col-xl-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-xxl-4 themed-grid-col">.col-xxl-4</div>
      <div class="col-xxl-4 themed-grid-col">.col-xxl-4</div>
      <div class="col-xxl-4 themed-grid-col">.col-xxl-4</div>
    </div>

    <h2 class="mt-4">Three equal columns</h2>
    <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>
    <div class="row mb-3">
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <h2 class="mt-4">Three equal columns alternative</h2>
    <p>By using the <code>.row-cols-*</code> classes, you can easily create a grid with equal columns.</p>
    <div class="row row-cols-md-3 mb-3">
      <div class="col themed-grid-col"><code>.col</code> child of <code>.row-cols-md-3</code></div>
      <div class="col themed-grid-col"><code>.col</code> child of <code>.row-cols-md-3</code></div>
      <div class="col themed-grid-col"><code>.col</code> child of <code>.row-cols-md-3</code></div>
    </div>

    <h2 class="mt-4">Three unequal columns</h2>
    <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>
    <div class="row mb-3">
      <div class="col-md-3 themed-grid-col">.col-md-3</div>
      <div class="col-md-6 themed-grid-col">.col-md-6</div>
      <div class="col-md-3 themed-grid-col">.col-md-3</div>
    </div>

    <h2 class="mt-4">Two columns</h2>
    <p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>
    <div class="row mb-3">
      <div class="col-md-8 themed-grid-col">.col-md-8</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <h2 class="mt-4">Full width, single column</h2>
    <p class="text-warning">
      No grid classes are necessary for full-width elements.
    </p>

    <hr class="my-4">

    <h2 class="mt-4">Two columns with two nested columns</h2>
    <p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>
    <p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>
    <div class="row mb-3">
      <div class="col-md-8 themed-grid-col">
        <div class="pb-3">
          .col-md-8
        </div>
        <div class="row">
          <div class="col-md-6 themed-grid-col">.col-md-6</div>
          <div class="col-md-6 themed-grid-col">.col-md-6</div>
        </div>
      </div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <hr class="my-4">

    <h2 class="mt-4">Mixed: mobile and desktop</h2>
    <p>The Bootstrap v4 grid system has five tiers of classes: xs (extra small, this class infix is not used), sm (small), md (medium), lg (large), and xl (extra large). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</p>
    <p>Each tier of classes scales up, meaning if you plan on setting the same widths for md, lg and xl, you only need to specify md.</p>
    <div class="row mb-3">
      <div class="col-md-8 themed-grid-col">.col-md-8</div>
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-6 themed-grid-col">.col-6</div>
      <div class="col-6 themed-grid-col">.col-6</div>
    </div>

    <hr class="my-4">

    <h2 class="mt-4">Mixed: mobile, tablet, and desktop</h2>
    <div class="row mb-3">
      <div class="col-sm-6 col-lg-8 themed-grid-col">.col-sm-6 .col-lg-8</div>
      <div class="col-6 col-lg-4 themed-grid-col">.col-6 .col-lg-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-6 col-sm-4 themed-grid-col">.col-6 .col-sm-4</div>
      <div class="col-6 col-sm-4 themed-grid-col">.col-6 .col-sm-4</div>
      <div class="col-6 col-sm-4 themed-grid-col">.col-6 .col-sm-4</div>
    </div>

    <hr class="my-4">

    <h2 class="mt-4">Gutters</h2>
    <p>With <code>.gx-*</code> classes, the horizontal gutters can be adjusted.</p>
    <div class="row row-cols-1 row-cols-md-3 gx-4">
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
    </div>
    <p class="mt-4">Use the <code>.gy-*</code> classes to control the vertical gutters.</p>
    <div class="row row-cols-1 row-cols-md-3 gy-4">
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
    </div>
    <p class="mt-4">With <code>.g-*</code> classes, the gutters in both directions can be adjusted.</p>
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
    </div>
  </div>
-->
  <div class="container" id="containers">

    <center><h2 class="mt-4">2007 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

 1. (a) Narrate theparable of theGood Samaritan<br /><br /><br />
(b) What three lessons could be learnt from the story?

  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Answer 
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>1. (a) Parable of the Good Samaritan<br />
Introduction:Jesus told this parable in answer to aquestion from a lawyer wantingto know who his neighbourwas.This was aftertheyhad talked about loving God and lovingour neighbours as ourselves.<br /><br />

Narration:<br /> 
– A man was travelling from Jerusalem to Jericho.<br />
– On the way, he was attacked by robbers(thieves),who removed his clothes,beat him up, left him severely injured and went away.<br />
– After sometime, a priest passed by that wounded man and went away without helping him<br />
– A Levite also came that way, saw this wounded man, crossed to the otherside and left
without attending to the man.<br />
– Then a Samaritan, who was also travelling that way also came to where the wounded man was lying.<br />
– When he saw Him, he had compassion on him, went to him, cleaned the man‟swounds
and dressed it.<br />
– He then carried the wounded man, put him on his own donkey(bywhich hewas travelling) and sent him to an inn /clinic.<br />
– He asked the caretaker to take care of the man till he comes back and paid for the services<br /><br /><br />


(b) 
(i) Lessons that could be learnt from the story
A good neighbour is someone who helps, not just someone close<br />
(ii) It is more important to offer help to those who need it, than merely being religious<br />
(iii) We must be willing to offer help,even to strangers (but these days, with great
caution)<br />
(iv) Helping people is more important to God than practicing religion<br />
(v) We must be careful about using unsecured routes or passages,especially if we are
alone.<br />
(vi) Shortcuts (concerning life in general) can be dangerous<br />
(vii) Life is more important than religious rituals.<br />
(viii) God looks at the heart to judge, not on the outside.<br />
(ix) Sometimes people, whom we think cannot or will not help, are the ones who actually
offer the greatest help.<br />
(x) We must be willing to sacrifice our comforts for others<br />
(xi) At times, those we think should be more helpful are rather wicked<br />

(xii) We must not judge people by their tribe/ colour/sex/ religion, etc. <br />
(xiii) We must not discriminate
 


              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.
(a) 
Describe how marriage ceremony is performed in Islam<br /><br /><br />
(b)State three things which make marriage successful

        </div><br /><br />
  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingTwo">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Answer 
              </button>
            </h4>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>(a) How marriage ceremony is performed in Islam<br /><br />
Introduction:<br />
Marriage(in Islam and others)is the social institution under which a man and woman agree with the consent of their families to live together as husband and wife.<br /><br />

Description<br />
(i) The selection of the partner and proposal is usually done by the man or his family<br />
(ii) Muslims usually marry those who are also Muslims<br />
(iii) A guardian (wali) must be presentas the legal representative ofthe bride<br />
(iv) The dower and/or bride price (Mahr)in the form of money or other gifts are presented to the bride and her parents<br />
(v) Member of the family present share the cola to show that they agree to the marriage.<br />
 (vi) A marriage ceremony(nikah) is performed by a qualified Muslim priest after the
payment and acceptance of the dower and/or brideprice. <br />
(vii) The marriage is recorded in the Islamic registry<br />
(viii) The couple exchange marriage vows to show their commitment to the marriage<br />
(ix) The Islamic priest reads Sura4 of the Quran and gives a sermon.<br />
 (x) The ceremony is usually followed by a wedding party or feasting<br />
(xi) Gifts are presented to the new couple by family,friends and well-wishers<br />
(xii) The couple are taken to their matrimonial home<br />
(xiii) The marriage is consummated at the matrimonial home.<br /><br /><br />

(b) Things which make marriage successful<br />
(i) Unconditional love<br />
(ii) Patience for each other<br />
(iii) Understanding of each other<br />
(iv) Willingness to compromise<br />
(v) Willingness to adapt to one‟sspouse‟sbehavior /wayof doing things<br />
(vi) Tolerance for each other<br />
(vii) Sexual satisfaction for each other<br />
(viii) Mutual respect for each other<br />
(ix) Respect for one‟s in-laws(spouse‟s family)<br />
(x) Expressing appreciation and gratitude to one‟s spouse for things done<br />
(xi) Praying for the success of the marriage<br />
(xii) Avoiding things that can cause arguments or heated debates<br />
(xiii) Apologizingto one‟s partner when one goes wrong(or when partnerraisesa concern)<br />
(xiv) Transparency/ openness with one‟s spouse (not hiding things from one‟sspouse)<br />
(xv) For giving each other for wrongs committed<br />
(xvi) Complimenting(praising) the efforts ofone‟sspouse

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
               3.
(a)
Write five important facts about the life of one of  the following personalities: (i) Egya(Osofo) Ahor,<br />
(ii) Okomfo Anokye, <br />(iii) TogbeTsali<br /><br /><br />

(b)
What three lessons could be learnt from the life of the personality you wrote about in (a)?

  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Answer 
              </button>
            </h4>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
               (a) Important facts about thelifeofthefollowingpersonalities:<br />

(i) Egya (Osofo)Ahor,<br />
– An eminent Fante leader in the 12th centuryfromthe AnonaRoyal Family of the
Gomoa Traditional Area<br />
– Heled the Fantes as they migrated from Techiman to their present locations<br />
– He was also a great hunter, farmer and chief priest of the Fante god,Akyen<br />
– He offered good advice and guidance for thepeople<br />
– He planted a tree to symbolize peace in the Fante land<br />
– He assisted the poor and needy with his wealth<br />
– He was highly respected by his people<br />
– At a point in time, there was a plague, which was killing a lot of people.It was found out that it could only be stopped by a human sacrifice.<br />
– Agya Ahor offered himself to be sacrificed to stop the plague<br />
– He ordained his son Edufor as his successor and prepared himself for the sacrifice.<br />
– He was sent to a shrine in Mankesim and was sacrificed voluntarily.<br />
– Soon after the sacrifice, the plague stopped<br />
– The Ahobaa festival was instituted to commemorate him and that great sacrifice<br /><br />

(ii) Okomfo Anokye,<br />
– Was born in the late 1600s in Awukugwa, Akwapim<br />
– His father was called Kaku Ackah.<br />
– He was named after his paternal uncle, Egya Ano<br />
– He was a fetish priest, herbalist, advisor and law giver in the Asante kingdom during the reign of Osei Tutu I<br />
– Together with Osei TutuI, heis a co-founder oftheAsante kingdom.<br />
– It is believed that he was born with an amulet in his hands. Other accounts also say he was born wearing a waist band of cowry shells.<br />
– He is believed to have had amazing magical powers, such as planting a tree for it to growto maturityin just one week<br />
– He assisted the Asante king to win many battles against the Denkyiras and
Akwamus<br />
– He was madea chief of Asante Agona by Osei Tutu I<br />
– He planted three cuttings of the Kum tree at Kwaman, Kumawu and Juabin, but only the one at Kwaman germinated<br />
– He therefore advised that the capital town of Asante kingdom be located at
Kwaman which was later renamed as Kumasi<br />
– He commanded down a golden stool from the skies, which he declared as the soul of the Asante kingdom<br />
– He placed a sword in the ground which no one has been able to takeout to this
day.<br />
– Upon his advice, captives were neither enslaved nor executed, but were instead resettled among the provinces.<br />
– He cured several diseases of people<br />
– He built many shrines where he performed his religious duties<br />
– He helped in the expansion and strengthening of the Asante kingdom<br /><br />

(iii) TogbeTsali<br />
– He was a powerful traditional priest of theAnlo traditional area<br />
– He was a member of the Tsiame royal clan<br />
– His ancestral background could be traced to Notsie in between Togoand
Benin<br />
– He was a hunter and a farmer by profession<br />
– He had no children<br />
– He possessed many magical powers<br />
– He used his many powers to cause King Agorkoli and his elders to fallintoa deep sleep overnight<br />
– He helped theAnlos to escape from King Agorkoliof Notsie; thus bringing freedom to his people<br />
– He turned his people intoseveral mice<br />
– He turned the footprints of his people backwards so as to prevent their enemies from attackingthem<br />
– His people always looked up to him for assistance and direction<br />
– He united his people as one group<br />
– He physically provided food and meat for the needy<br />
– He sacrificed his comforts for the sake of his people<br />
– He could cause rain to fallon only his farm<br />
– He sacrificed his comforts for the sake of his people<br />
– He built many shrines where his people consulted him for assistance<br />
– Before his death, he removed his upper and lower jaws and instructed his people to use them as foundation stones to build two separate fetish houses (shrines)to his memory<br />
– He was chopped into pieces and thrown into a river, but was later found loitering around the river<br />
– A festival, Hogbetsotso, is celebrated in his honour<br />
– He is now considered a god who is invoked and worshipped.<br /><br /><br />

(b) Lessonslearnt fromthelives oftheabovepersonalities
Egya(Osofo) Ahor / Okomfo Anokye/ TogbeTsali<br />
(i) Love<br />
(ii) Selflessness<br />
(iii) Spiritual strength<br />
(iv) Sacrifice<br /> 
(v) Patriotism <br />
(vi) Commitment<br />
(vii) Bravery/ courage<br />
(viii) Kindness<br />
(ix) Commitment<br />
(x) Hardwork<br />
(xi) Peacemaking
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>
            SECTION B MORAL LIFE<br /><br />

Answer one question only from this section<br /><br />

4. (a)  List four factors to be considered before greeting someone.<br /><br /><br />
 (b)Give four reasons why it is important to greet someone.



</p>

        </div><br /><br />
<div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingFour">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Answer 
              </button>
            </h4>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>(a) Factors to be considered before greeting someone.<br />
(i) The place/ location<br />
(ii) The occasion<br />
(iii) The time<br />
(iv) The age of the person<br />
(v) The sex of the person (whether male or female)<br /> 
(vi) The personal relationship<br />
(vii) The person‟sage<br />
(viii) The person‟s occupation / profession<br />
(ix) The person‟s position<br />
(x) The person‟s role<br /><br /><br />

(b) Reasons why it is important to greet someone.<br />
(i) It shows respect to others<br />
(ii) It shows one‟s recognition and adherence to customs /cultures<br />
(iii) It creates a friendly atmosphere<br />
(iv) It helps to starta conversation<br />
(v) It enables oneto feel welcome and atease<br />
(vi) It is a sign of proper upbringing<br />
(vii) It promotes peace, love and harmony<br />
(viii) It helps to lower relational tension among people<br />
(ix) It helps to resolve conflicts<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

5.
(a) 
Mention anyfive classroom rules<br /><br /><br />
(b)Give four reasons why rules and regulations are important


  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Answer 
              </button>
            </h4>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>(a) Classroomrules<br />
(i) Raise your hand and wait to be called to answer or ask a question<br />
(ii) Leave your bags in the bag storeroom<br />
(iii) Payattention duringlessons<br />
(iv) Takepart in allclassroom activities<br />
(v) Respect the views of others<br />
(vi) Submit your classwork and homework books on time<br />
(vii) Greet the teacher and your classmates when you enter the classroom<br />
(viii) Ensure that your surrounding is always kept neat<br />
(ix) Do not leave the classroom without permission<br />
(x) Do not stand on the tables and chairs except by permission<br />
(xi) Do not litter the classroom<br />
(xii) Do not make noise in class<br />
(xiii) Do not fight in class (or elsewhere) (xiv) Do not eat in class<br />
(xv) Do not use abusive language in class (or elsewhere)<br />
(xvi) Do not sleep in class<br /><br /><br />

(b) Reasons why rules andregulations are important<br /><br />
(i) Theyhelp to maintain order<br />
(ii) Theyinstill disciplinein people<br />
(iii) Theypromote peaceful coexistence <br />
(iv) Theycreatean atmosphereof security <br />
(v) They encourage responsible behavior<br />
(vi) They help to cultivate tolerance in people<br />
(vii) They make teaching and learning easier and more effective<br />
(viii) They help to improvethestandard ofthat community<br />
 (ix) They help to protect one‟s fundamental human rights <br />
 (x) They help to protect life and property

              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6.
(a) 
What four reasons do students give for abusing drugs?<br /><br /><br />
(b)State three defensive skills you would use to protect yourself against substance abuse.


</p>

        </div><br /><br />
  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingSix">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                Answer 
              </button>
            </h4>
            <div id="collapseSix " class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>(a) Reasons students give for abusing drugs?<br />
(i) Drugs enable them to stayawaketo study<br />
(ii) Drugs make them haveasharperretentive memory and remember whatever they study<br />
(iii) Drugs were created by God for the use of man, therefore man must make use of it.<br /> 
(iv) Drugs make them stronger and more handsome/beautiful<br />
(v) Drugs makethem not to feel hungryoften<br />
(vi) Drugs give them a good appetite to eat more.<br />
(vii) Drugs make them more confident and courageous<br />
(viii) Drugs serveas a sign of identity or belongingness to their peergroup<br /><br /><br />

(b) Defensive skills against substance abuse.<br />
(i) Avoiding the company of people who are known to be substance abusers<br />
(ii) Joining groups that encourage good morals and values<br />
(iii) Avoiding self-medication (takingdrugs only if prescribed by a health worker)<br />
(iv) Staying focused on one‟s studies / education<br />
(v) Seeking appropriate counseling when confused or tempted<br />
(vi) Familiarizing oneself with the dangers involved in substance abuse<br />
(vii) Followingthe teachings of one‟s religion
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
SECTION C SOCIAL LIFE<br /><br />

Answeronequestiononlyfromthissection<br /><br /><br />

7. (a)State three types of work carried out in your community. <br /><br /><br />
(b)Give four advantages of working hard
  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingSeven">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Answer 
              </button>
            </h4>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>(a) Types of work carried out in your community.<br />
(i) School or AcademicWork<br />
(ii) Domestic work / household work<br />
(iii) Communal Work<br />
 (iv) Occupational Work<br />
 (v) VoluntaryWork<br /><br /><br />

(b) Advantages of working hard<br /><br />

(i) It brings honour and respect to oneself<br />
(ii) It build up our selfesteem/confidence<br />
(iii) It keeps us (spirit, soul and body) healthy and active<br /> 
(iv) It increases and sharpens our knowledge and skills<br /> 
(v) It makes as successful<br />
(vi) It can bringus riches / wealth<br />
(vii) It promotes the development of the society and community<br />
(viii)It creates asenseof fulfillment, satisfaction and joyin us.<br />
(ix) It makes us spirituallyblessed, as we obey God‟s word to work hard<br />
(x) It can open up several good opportunities for us
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 


8. (a)Explain the two main family systems in Ghana<br /><br /><br />
(b)Give four advantages of belonging to a nuclear family

</p>

        </div><br /><br />
  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingEight">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                Answer 
              </button>
            </h4>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>(a) The two main family systems in Ghana<br /><br />

The nuclear family system<br />
– This family system comprises the father, mother and children.<br />
– Thehead of the familyisthe father<br />
– The assistant head of the familyi s the mother<br />
– The father is responsible for the provision of essential needs of thefamily<br />
– The size is relatively small<br /><br />

The extended family system<br />
– It comprises of various nuclear families<br />
– Many generations (great grandparents,grandparents, parents, children,grandchildren, greatgrandchildren) of the family live  together as one<br />
– Several relations (uncles, aunties, nephews, nieces, cousins, etc) live together as one unit<br />
– Each member has a responsibility towards other members of the family<br />
– The system is led by the family head (Abusuapanyin)<br /><br /><br />

(b) Adva<br />
(i) ntages of belonging to a nuclear family<br />
Easyand quick communication amongfamilymembers<br />
(ii) Quick decision-taking<br />
(iii) Less moneyneeded to cater for the family<br />
(iv) Stronger bond of unity/oneness within family<br />
(v) Close supervision of children by parents<br />
(vi) Limited interference from external family members<br />
(vii) Easier/ faster conflict resolution due to closeness of members<br />
(viii) Less pressure on family resources<br />
(ix) Greater independence, and hence, ability to concentrate on their work or studies.

                </div>
            </div>
          </div>
        </div>
              </div><br />
  
              
  <div class="container-xxl themed-container"><center>Good Luck</center></div>
</main>


    
  </body>
  <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</html>
