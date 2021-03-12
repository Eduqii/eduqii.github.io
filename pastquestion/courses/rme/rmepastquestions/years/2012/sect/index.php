<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2012 v2.0</title>

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

    <center><h2 class="mt-4">2012 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

  1.(a) Narrate the parable of the sower<br /><br /><br />

(b) How is the parable of the sower interpreted?<br /><br /><br />

(c) State two moral lessons that can be learnt from the parable of the sower.
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
                <p>a.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                -A sower went out to sow seeds. As he sowed, some of the seeds fell by the way side, and it was trampled upon, and the birds of the air ate it.<br />
                Some other seeds fell upon a rock, and as soon as it germinated, it withered away; because it lacked moisture since there roots were not deep enough in the ground.Other seeds fell among thorns, and as the seeds germinated and grew, the thorns choked them Others fell on good ground / fertile soil, grew up, and bore fruits in hundredfold, sixtyfold and thirtyfold<br /><br /><br />

                b.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                – The seed is the Word of God<br />
                – The sower represents preachers of the Word of God<br />
                – The seeds that fell by the wayside that were eaten by the birds represent the devil stealing away the Word of God from those who hear the word of God and don’t understand it.<br />
                – The seeds that fell on rocks represent those that receive the word of God with joy, believe it for a while but give up or fall away when they face tribulation, persecution or temptation.<br />
                – The seeds that fell among thorns represent those who hear the word of God, but are choked by the cares of this world, riches and pleasures of life.<br />
                – The seeds that fell on good ground represent those who hear the word of God with a good heart, keep it and apply it in their lives<br /><br /><br />

                (c) Moral lessons that can be learnt<br />

                i. We must be doers of the Word of God and not hearers only (ie, we must apply the Word of God to our lives after we have heard it)<br />
                ii. We must obey our parents, teachers and elders and follow their guidance.<br />
                iii. Whatever we are taught in school or at home, we must ensure that we understand it very well, in order to apply it properly.<br />
                iv. We must practically apply the education we are given in school and at home.<br />
                v. We must not allow the enjoyable things of this world (such parties, gossips, TV, internet browsing, chatting, games) to draw us away from God / our parents / teachers.<br />
                vi. We must not yield to ridicule (being laughed at) or persecution from others<br />
                vii. We must be steadfast and strong in our faith.<br />
                viii. We must not allow riches or hardships to deceive us to commit sin<br />
                ix. We must persevere and not give up in the face of difficulties<br />
                x. We must not allow our friends or our enemies to make us commit evil
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.(a) List five traditional festivals in Ghana<br /><br /><br />

(b) Explain five reasons why festivals are celebrated

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (a) Traditional festivals in Ghana<br />
                  – Homowo<br />
                  – Fetu Afahye<br />
                  – Foo<br />
                  – Kundum<br />
                  – Odwira<br />
                  – Aboakyir<br />
                  – Hogbetsotso<br />
                  – Bakatue<br />
                  – Ohum<br />
                  – Bugum<br />
                  – Asafotufiam<br />
                  – Adaekese<br />
                  – Fofie Yam<br />
                  – Kobine<br />
                  – Akwambo<br />
                  – Kloyosikplem<br />
                  – Damba<br /><br /><br />

                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (b) Reasons why festivals are celebrated<br />

                  (i) NEW YEAR – Festivals are celebrated to mark the beginning of a new year<br />

                  (ii) THANKSGIVING AND PRAYER – To thank the Supreme Being, lesser gods and ancestors for a successful past year and pray for their blessings in the coming year.<br />

                  (iii) PURIFICATION – To purify the ancestral stools, the people and the land.<br />

                  (iv) REMEMBRANCE – To remember and celebrate the lives and works of past leaders<br />
                  (both religious and traditional) and rulers<br />

                  (v) PAST DELIVERANCE – To commemorate past victories over hunger, oppression, disease, etc.<br />

                  (vi) HOMAGE / HONOUR – To pay homage to (or honour) the chief and renew loyalty to the chief by sub-chiefs and subjects:<br />

                  (vii) FAMILY REUNION – To bring various family members together and renew relationships after long periods of separation<br />

                  (viii) CONFLICT RESOLUTION – To settle family / communal conflicts and litigations and chart a new course for future relationship:<br />

                  (ix) DEVELOPMENT – To plan and implement developmental projects<br />

                  (x) FUND-RAISING – To raise funds to support various socio-economic programmes.<br />

                  (xi) TOURISM – To attract tourists into the community. Tourism helps to support the arts and crafts industry and raise foreign exchange for the country<br />

                  (xii) CULTURAL PRESERVATION – To preserve the indigenous culture / traditions and therefore prevent it from dying out.
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
                3.(a) Describe how Muslim prayer (Salat) is performed.<br /><br /><br />

                (b) State three benefits of ablution
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (a) How Muslim prayer (Salat) is performed<br /><br />

                  Introduction:<br />
                  The ablution (wuzu) must be performed before every salat<br />
                  The prayer session comprises a number of movements / positions.<br />
                  Each movement is always preceded by the phrase “Allahu Akbar” (God is Great).<br />
                  This indicates to followers of the prayer that the leader is about to make the next movement.<br /><br />

                  Takbir (Starting position)<br />
                  Muslims face towards the Qibla in Mecca and make the intention to pray. To begin the act of prayer, they say ‘Allahu Akbar’ meaning God is great, raising the hands to the ears or shoulder.<br /><br />

                  Qiyaam (Standing position)<br />
                  Muslims place their right hand over their left on their chest or navel while in the standing position<br />
                  A short supplication glorifying God and seeking His protection is read.<br /><br />

                  Qiraat (Recitation from Quran)<br />
                  Muslims recite Surah Al Fatiha, which is the first chapter in the Qur’an.<br /> Verses from any another chapter are then recited.<br /><br />

                  Ruku (Bowing position)<br />
                  The Muslim bows down, putting the hands on the knees and says ‘glory be to God, the Most Great’, three times.<br /><br />

                  Qiyaam (Standing position)<br />
                  While moving into the upright position, Muslims recite ‘God listens to the one who praises Him’ and while in the standing position, ‘To God belongs all praise’ then is recited. ‘God is Great’ is recited again. Hands are loosely at the sides this time.<br /><br />

                  Sujud (Prostrating position)<br />
                  Sujud means to prostrate. While in the prostration position ‘Glory be to God, the Most High’ is repeated three times. Palms, knees, toes, forehead and nose must be the only body parts touching the ground.<br /><br />

                  Qa’da-i-Akhira (Sitting position)<br />
                  ‘God is Great’ is recited while moving to the sitting position. Muslims pause here for a few seconds, either staying silent, or reciting a shorter prayer. ‘God is Great’ is recited once more as the sujud position is taken again.<br /><br />

                  Sujud (Prostrating position)<br />
                  This sujud is the same as the first one.<br />
                  After reciting ‘Glory be to God, the Most High’, one ‘raka’ah’, or unit is complete.<br /><br />

                  Tashahhud<br />
                  After saying God is Great, Muslims return to the sitting position. They recite a set number of short prayers in Arabic, praising God, and sending peace on the Prophet. They repeat the declaration of faith, raising the forefinger of their right hand, in order to act as a witness.<br />

                  They then ask God to bestow blessings and peace upon Prophet Abraham and his family, and ask for the same for Prophet Muhammad. Finally, Muslims ask for forgiveness and mercy, and ask God to bless them and their children until the Day of Judgement.<br /><br />

                  Peace to the right<br />
                  To end the prayer, Muslims first turn their face to the right saying ‘Peace be upon you, and the mercy and blessings of Allah.’<br />
                  (This is said to the Angels who Muslims believe accompany each human being to record their
                  actions)<br /><br />

                  Peace to the left<br />
                  ‘Peace be upon you, and the mercy and blessings of Allah’ is repeated turning to the left side now. (Muslims believe the Angel on the right side records all good actions and thoughts, while the one on the left records all bad actions.)<br /><br /><br />

                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (b) Benefits of ablution (wuzu)<br />
                  (i) It prepares the mind for prayer (salat)<br />
                  (ii) It ensures purity of the body – by the washing with water<br />
                  (iii) It helps the blood circulatory system to function properly – by the massage of the body in the process<br />
                  (iv) It helps with normal breathing – by the cleaning of the nostrils<br />
                  (v) It helps with correct functioning of the central nervous system – through the stimulation of the blood flow by massaging.<br />
                  (vi) It helps to prevent skin infections – by the washing away of germs from the body<br />
                  (vii) It helps to prevent early aging or the formation of wrinkles – by maintaining the electrostatic balance of the body through the application of water.
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>4.(a) In what five ways can one lead a chaste life?<br /><br /><br />

(b) State five benefits of leading a chaste life

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  a) Ways in which one can lead a chaste life<br />
                  (i) Avoiding bad company, who could influence one to engage in sexual immorality<br />
                  (ii) Staying away from pornographic movies, books, etc<br />
                  (iii) Spending ones leisure time engaging in profitable activities<br />
                  (iv) Dressing decently at all times, in order not to sexually attract the opposite sex.<br />
                  (v) Not escorting members of the opposite sex to secluded or dark places<br />
                  (vi) Saying a strong “no” to premarital sex<br />
                  (vii) Exercising the body regularly<br />
                  (viii) Avoid using stimulants such as alcohol, tobacco, marijuana, etc, which can impair One’s judgment<br />
                  (ix) Avoiding all forms of physical intimacy such as hugging, kissing, fondling, etc<br />
                  (x) Seeking counsel from responsible parents, teachers and elders when one faces temptations to commit sexual immorality<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5.(a) List four symptoms of Acquired Immune Deficiency Syndrome (AIDS)<br /><br /><br />

(b) State four effects of AIDS on the community<br /><br /><br />

(c) Explain four ways by which AIDS can be prevented
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                (a) Symptoms of Acquired Immune Deficiency Syndrome (AIDS)<br />
                – Fever<br />
                – Coughing<br />
                – Shortness of breath<br />
                – Extreme fatigue / lack of energy<br />
                – Weight loss<br />
                – Severe and persistent diarrhoea<br />
                – Severe headaches<br />
                – Coma<br />
                – Forgetfulness<br /><br /><br />

                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                (b) Benefits of leading a chaste life<br />

                (i) Honour to adolescent’s family<br />
                An adolescent who stays chaste brings honour to both him/herself and the family, since it would mean that the family trained him/ her and brought him/ her up properly.<br />

                (ii) High social reputation (how society sees one)<br />
                Chastity is a virtue that society strongly upholds. Those who stay chaste are therefore held in high esteem. Everyone respects an adolescent who is chaste.<br />

                (iii) High self esteem / confidence (how one sees himself/herself)<br />
                A chaste adolescent has a high level of self-esteem / confidence, knowing very well that others respect him/ her due to his/ her chastity.<br />

                (iv) Peace of mind (sound mind) to focus on education.<br />
                A chaste adolescent does not have to bother about the things that may bother his/ her unchaste friends. There are no worries by him/ her/ the family concerning whether she may be pregnant, may have acquired a sexually transmitted disease, or even what others think of him/ her. He/ she enjoys a sound mind in these regards and therefore can focus better on his/ her education.<br />

                (v) Smooth progress of education of adolescent<br />
                Unlike unchaste adolescents who may have to suspend or even stop their education entirely due to problems related to pregnancy / STDs / social stigma, the chaste adolescent enjoys a smooth progress in his/ her education. He/ she does not have to stop school due to pregnancy, or STDs or stigma of being unchaste.<br />

                (vi) Prevention of Sexually Transmitted Diseases (STDs)<br />
                Sexually Transmitted Diseases (STDs) can be gotten if only one has had any form of sexual contact. For that matter, it is practically impossible for a chaste adolescent to be infected with an STD (except he/ she obtained it through other means, which have very low probabilities)<br />

                (vii) Avoidance of teenage pregnancy and related problems<br />
                A female can get pregnant in the natural way only by having sexual intercourse. A chaste adolescent therefore avoids teenage pregnancy and its related problems as long as she stays so.<br />

                (viii) Greater trust and respect from spouse in marriage<br />
                An adolescent who stays chaste till marriage earns the trust and respect of his/ her spouse in marriage. The thinking is that if he/ she stayed chaste all the while, then chances are that he/ she would continue to remain faithful in marriage.<br />

                (ix) Higher chance of attracting responsible partner for marriage<br />
                Most responsible people would want to marry people who have maintained their chastity.<br />
                A chaste adolescent therefore has a higher prospect as regards attracting a responsible partner. (A widely held belief is that, we reap what we sow. If that is true, then, chaste people are most likely to marry equally chaste partners)<br /><br /><br />

                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (b) Effects of AIDS on the community<br />
                – Human Resource Depletion – Aids causes a reduction in the workforce in the community<br />
                – Social Discrimination – Aids patient are usually subjected to severe prejudice and discrimination, which tend to hamper their normal social activities<br />
                – Broken Homes – Due ignorance about the disease and its consequences, AIDS infection of a family member can lead to isolation and even separation<br />
                – Lower productivity – The incidence of AIDS lowers the productivity of the working class and therefore negatively affects the economy<br />
                – Fear and Panic – People within the community become more and more fearful of also getting infected through some means and dying<br />
                – Damaged Relationships – People who used to have a good relationship begin to draw back due to suspicion or shame or ridicule<br />
                – Slow development – The development within the community slows down<br /><br /><br />

                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (c) Ways by which AIDS can be prevented<br />
                (i) Abstaining from casual / premarital sex – People who are not yet married must abstain from all forms of sexual contact with others. This makes it almost impossible for one to get infected with the HIV, since the infection is mostly spread through sexual contact.<br />

                (ii) Being faithful to ones’ partner – Married couples must have sexual intimacy only with each other. In the case where one partner is already infected, then they must always use a condom in order to greatly reduce the risk of infecting the other partner.<br />

                (iii) Using a condom when having sex with an infected person. For people who indulge in pre-marital / casual / extra-marital sex, it is advisable to use a condom in order to reduce the risk of getting infected.<br />

                (iv) Disinfection and sterilization of tools and equipment that are used on or in the body. This must be done to kill any bacteria and viruses that may be present, and hence prevent infection.<br />

                (v) Avoiding the sharing of unsterilized cutting or piercing objects, such as syringes, needles blades<br />

                (vi) Using antiretroviral drugs to help prevent HIV transmission from pregnant HIV- positive mother to unborn child. The drug helps to stop the multiplication and spread of the HIV, therefore reducing the risk of the expectant mother infecting the unborn child.<br />

                (vii) Intensifying public education on prevention and control of AIDS.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6. (a) State four effects of teenage pregnancy<br /><br /><br />

(b) Outline four roles that the youth can play to prevent teenage pregnancies.

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (a) Effects of teenage pregnancy<br />

                (i) Medical Complications – due to the fact that a teenage girl’s body is usually not
                matured enough to safely carry a baby<br />
                (ii) Shame and disgrace on both teenage mother and family – since teenage pregnancy is considered unacceptable in most societies and cultures.<br />
                (iii) Worries about the future – regarding how to cater for herself and her child, since
                she is most likely unemployed; and especially when the father of the child has either refused responsibility or is unable to help<br />
                (iv) Delayed Education – because she may have to suspend her education or drop out of school for a while in order to deliver and nurse the baby for some time.<br />
                (v) Depression – due the intense mental stress she may be going through as a result of the
                situation.<br />
                (vi) Financial difficulties – in the case where she has little or no support from her parents or the father of the child. She may have to use the little money she may have to care for the baby.<br />
                (vii) Baby health – The baby’s health may be poor as a result of the inadequate care it may receive.<br />
                (viii) Reduced parental care – for the baby as a result of the teenage mother’s several
                challenges, including financial, mental, physical, educational, etc<br />
                (ix) Increased burden on society – if the child due to inadequate care, ends up in the
                social welfare children’s home or becomes a street child.<br /><br /><br />

                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (b) Roles that the youth can play to prevent teenage pregnancies.<br />

                (i) Seeking of reproductive health education, especially, teenage pregnancy causes, effects and prevention<br />
                (ii) Abstinence from pre-marital sex.<br />
                (iii) Concentrating on their studies or occupation<br />
                (iv) Teenagers? avoidance of bad / immoral friends<br />
                (v) Participating in beneficial social activities such as communal labour, sports and games.<br />
                (vi) Using contraceptives, such as the male/ female condom, the pill, etc, in case the youth
                is already sexually active (strongly not recommended )
 
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

   7.(a) What four moral problems confront the adolescent?<br /><br /><br />

(b) State four physical changes that occur during puberty
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

              (a) Physical changes that occur during puberty girls<br />
              (a) Physical changes that occur during puberty girls<br />
              – Commencement of menstruation and ovulation<br />
              – Enlargement of breasts<br />
              – Broadening of hips<br />
              – Thinning of waist line<br />
              – Growth of pubic hair<br /><br />

              Boys<br />
              • Broadening of chest<br />
              • Deepening of voice<br />
              • Enlarging of male organ<br />
              • Growth of pubic hair<br />
              • Growth spurts<br /><br /><br />

              DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

              (b) Moral problems that confront the adolescent<br />

              • Indecent dressing tendency<br />
              • Alcohol and drug involvement<br />
              • Sexual tendencies / activities<br />
              • Honesty – Loyalty dilemma (Whether to truthfully report a case involving a friend or to remain silent in solidarity with that friend)<br />
              • Becoming more easily irritated<br />
              • Tendency of becoming more disrespectful (seemingly)<br />
              • Becoming more suspicious of the intentions of others
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 

8.(a) Describe four activities of any religious youth organization<br /><br /><br />

(b) Identify four benefits of joining a religious youth organization


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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

(a) Activities of most Religious youth organizations<br />
(i) Scripture study sessions that help to develop Religious character in the members.<br />
This is done by taking portions of the Scriptures, especially the parables and other stories, studying them and being tested on what they have learnt from the study.<br /><br />

(ii) Prayer sessions that promotes spiritual growth in the members. This is done by praying on a particular topic at time. The prayers may be either silent or aloud, individually or all together.<br /><br />
(iii) Evangelistic programmes to help spread the message of their respective religions.<br />

They take religious tracts, move into the community, share the tracts and also testify about the goodness of their religion. This is done to encourage others to join them.<br /><br />

(iv) Teaching sessions, where members are taught religious values, attitudes, principles and
morals that would help them to be useful members of the society in future.<br /><br />

(v) Talent development programmes, where members are given the opportunity to develop their talents in other areas such as playing musical instruments, drawing, singing, dancing, etc.<br /><br />

(vi) Sports, games and athletics competitions to promote unity, cooperation, tolerance, endurance and physical fitness. This is done by putting members into sections / groups and making them compete among themselves.<br /><br />

(vii) Workshops and seminars to train their members in certain skills and vocations. This could be organized on an intensive or non-intensive basis.<br /><br />

(viii) Youth Camp Meetings, where the members get the opportunity of staying together at a place, usually quite far from home, for a number of days. At the camp meeting,
there is more time to do all the activities they have been doing on a regular and intensive basis.<br /><br />

(ix) Leadership roles are assigned to certain members, which help to give them the necessary exposure and experience to become effective leaders in future.<br /><br />

(x) Sight-seeing / excursions. Members may be allowed to bring along both indoor and
outdoor games as well as other items of interest. This is done from time to time to allow the members to relax, have fun, have adventure and have the opportunity of visiting other places of interest.<br /><br /><br />

(b) Benefits of joining a religious youth organization<br />

(i) Members become more knowledgeable in the scriptures<br />
(ii) Members develop good religious values, attitudes and morals<br />
(iii) Members grow spiritually<br />
(iv) Members receive spiritual blessings, inner joy and satisfaction<br />
(v) Members get the chance of developing their talents and potentials<br />
(vi) Members get to make lots of friends<br />
(vii) Members learn to socialize, cooperate with others, tolerate others and become good team players<br />
(viii) Members become physically fit and strong<br />
(ix) Members learn vocations and practical skills that they can use to make some money in future<br />
(x) Members get the opportunity to visit tourist sites and places of interest<br />
(xi) Members learn to develop leadership qualities.

 
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
