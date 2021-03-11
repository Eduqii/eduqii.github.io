<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2000 v2.0</title>

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

    <center><h2 class="mt-4"> 2000 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center><br />
   
SECTIONB ESSAY<br />
1 hour<br /><br />

Answer three questions only from this section, choosing one question from each part<br />
Credit will be given for clarity of expression and orderly presentation of material<br /><br />

PART I RELIGION<br />
Answer one question only from this part<br /><br />

1. “Honour your father and your mother, that your daysmay belong in the land …”
Explain five ways of fulfilling this commandment
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
                <p>Ways of fulfilling the commandment to honour one’s parents<br />
Introduction: To honour someone means to do something that shows great respect for that person.<br /><br />

WAYS<br />
(i) Obeying one‟s parents<br />
(ii) Greeting one‟s parents in the proper way<br />
(iii) Talking to one‟s parents politely<br />
(iv) Apologising and asking for forgiveness from parents when one offends them<br />
(v) Thanking one‟s parents for the things done for one by parents<br />
(vi) Offering one‟s seat to one‟s parents, if there is shortage of seats<br />
(vii) Behaving well so that others will speak well of one and one‟s parents<br />
(viii) Studying hard and performing well at school to bring honour to one‟s parents<br />
(ix) Celebrating parents, especially on special occasions such as birthdays,
mothers‟/fathers‟ day, etc<br />
(x) Helping one‟s parents with their load without their asking<br /> 
(xi) Offering to do one‟s parents‟ work for them, if capable<br /> 
(xii) Speaking well of one‟s parents to others <br />
(xiii) Praising one‟s parents for how they are and the good things they do.

              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2. (a) Describe how salat is performed<br /><br /><br />
            (b) State any three values in salat

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
                <p>(a) How salat is performed<br /><br />
Introduction:<br />
The ablution (wuzu) must be performed before every salat<br />
The prayer session comprises a number of movements / positions.<br />
Each movement is always preceded by the phrase„ Allahu Akbar‟ (God is Great).<br />
This indicates to followers of the prayer that the leader is about to make the next movement.<br /><br />

Takbir (Starting position)<br />
Muslims face towards the Qibla in Mecca and make the intention to pray.To begin the act of prayer, they say’Allahu Akbar’ meaning God is great, raising the hands to the ears or shoulder.<br /><br />

Qiyaam (Standing position)<br />
Muslims place their right hand over their left on their chest or navel while in the standing position
A short supplication glorifyingGodand seeking His protection is read.<br /><br />

Qiraat (Recitation from Quran)<br />
Muslims recite Surah Al Fatiha, which is the first chapter in the Qur’an. Verses from any other chapter are then recited.<br /><br />

Ruku (Bowing position)<br />
The Muslim bows down, putting the hands on the knees and says’ glory be to God, the Most Great’, threetimes.<br /><br />

Qiyaam (Standing position)<br />
While moving into the upright position, Muslims recite’ God listens to the one who praises Him’ and while in the standing position, ‘To God belongs all praise’ then is recited.’ God is Great’ is recited again. Hands are loosely at the sides this time.<br /><br />

Sujud (Prostrating position)<br />
Sujud means to prostrate. While in the prostration position ‘Glory be to God, the Most High’ is repeated three times. Palms, knees, toes, forehead and nose must be the only body parts touching the ground.<br /><br /><br />

Qa’da-i-Akhira (Sitting position)<br />
‘God is Great’ is recited while moving to the sitting position. Muslims pause here for a few seconds, either staying silent, or reciting a shorter prayer. ’God is Great’ is recited once more as the sujud position is taken again.<br /><br /><br />

Sujud (Prostrating position)<br />
This sujud is the same as the first one.<br />
After reciting ‘Glory be to God, the Most High’, one’ raka’ah’, or unit is complete.<br /><br />

Tashahhud<br />
After saying God is Great, Muslims return to the sitting position. They recite a set number of short prayers in Arabic, praising God,and sending peace on the Prophet. They repeat the declaration of faith, raising the fore finger of their right hand, in order to act as awitness.<br /><br />

They then ask God to bestow blessings and peace upon Prophet Abrahamand his family, and ask for the same for Prophet Muhammad. Finally, Muslims ask for forgiveness and mercy, and ask God to bless them and their children until theDayof Judgement.<br /><br />

Peaceto the right<br />
To end the prayer, Muslims first turn their faceto the right saying ‘Peace be upon you, and the mercy and blessings of Allah.’<br />
(This is said to the Angels who Muslims believe accompany each human being to record their actions)<br /><br />

Peace to the left<br />
‘Peace be upon you, and the mercy and blessings of Allah’ is repeated turning to the left side now.<br /> 
(Muslims believe the Angel on the right side records all good actions and thoughts, while the one on the left records all bad actions.)<br /><br /><br />

(b) Values in salat<br />
(i) Truthfulness<br />
(ii) Purity<br />
(iii) Mercy/ forgiveness<br />
(iv) Obedience<br />
(v) Kindness /generosity<br />
(vi) Submission<br />
(vii) Perseverance<br />
(viii)Commitment / dedication<br />



                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
3.
(a)
What is puberty?<br /><br /><br />
(b) What is the importance of this rite to the people in your community


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
         (a) Puberty?<br />
Puberty is the period of a person‟s life during which their sexual organs develop and they
become capable of havingchildren.<br />
This usually occurs between the ages of 9 and 17years.<br />
In many traditional communities, certain rites are performed, especially for girls, known as puberty rites, to usher them into adulthood.<br /><br /><br />

(b)
The importance of this rite to the people in your community<br />
(i) It helps to maintain chastity among the youth in the community<br />
(ii) It helps the girls to find suitors for marriage<br />
(iii) It helps the girls to gain knowledge of their womanhood and how to take care of themselves<br />
(iv) It brings honour to thegirls and their parents<br />
(v) It helps the girls to get capital to start/learn a business /trade/ practice, thereby reducing poverty/ unemployment<br />
(vi) It prepares the girls mentally, physically and spiritually for marriage.

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>
           PART II MORAL LIFE<br />
Answer one question only from this part<br /><br />

4. Describe any five ways of showing courtesy in your community



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
                <p>4. Ways of showing courtesy in your community<br />
(i) Offering and responding to greetings in a proper way.<br /> 
(ii) Dressing neatly and decently<br />
(iii) Assisting/ helping people who need help.<br /> 
(iv) Obeyinginstructions from elderlypeople<br />
(v) Surrendering one‟s seat in a bus or at a gathering for an elderly person<br />
(vi) Speaking to others in a polite way<br />
(vii) Thanking people for good things they do<br />
(viii) Apologising and asking for forgiveness when one goes wrong<br />
(ix) Being peace-loving and a peace maker

                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">
5. Explain the moral importance of traditional songs

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
                <p>

5. Moral importance of traditional songs<br />
(i) Love – We must love God and love our neighbour<br />
(ii) Peace– we must live at peace with one another<br />
(iii) Compassion– we must be compassionate towards others, especially those in unfortunate circumstances<br />
(iv) Obedience– we must obey God and those who have authority over us<br />
(v) Trust – wemusttrust God with all our heart and be trust worthy ourselves<br />

(vi) Faithfulness– we must be faithful with whatever we are responsible for<br />
(vii) Submission– we must submit ourselves to God and to our elders<br />
(viii)Mercy / Forgiveness–we must show mercy to those who offend us and forgive them<br />
(ix) Graciousness– we must be gracious to others, just as God has been to us<br />
(x) Honesty – we must be honest in all our dealings and relationships<br />
(xi) Perseverance –we must not give up our good works even in difficult times<br />
(xii) Diligent work– we must work diligently<br />
(xiii)Generosity – we must give cheerfully and abundantly


              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6. (a) What is the importance of work ?<br /><br /><br />
(b) Explain any four positive attitudes that one should develop towards work


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
                <p>(a) The importance of work<br /><br />

(i) It brings honour and respect to oneself<br />
(ii) It build up our self esteem / confidence<br />
(iii) It keeps us (spirit, soul and body) healthy and active<br />
 (iv) It increases and sharpens our knowledge and skills<br /> 
 (v) It makes as successful<br />
(vi) It can bring us riches / wealth<br />
(vii) It promotes the development of the society and community<br />
(viii) It creates asenseof fulfillment, satisfaction and joy in us.<br />
(ix) It makes us spiritually blessed, as we obey God‟s word to work hard<br />
(x) It can open up several good opportunities for us<br /><br /><br />

(b) Positive attitudes that one should develop towards work<br />
(i) Being punctual- coming to /starting work on time<br />
(ii) Being regular – coming to /doing work as often as is required<br />
(iii) Beingdisciplined -doing what has to be done regardless of how one feels<br />
(iv) Beingcommitted -having a strong loyalty / devotion for the work (as though it were yours /your life depended on it)<br />
(v) Being diligent -working tirelessly and consistently<br />
(vi) Persevering – continuing/ persisting, even in the face of difficulties<br />
(vii) Staying focused- always having in mind the ultimate objective/ goal /aim.<br /> 
(viii)Beingpatient -Enduring / staying calm in case of unexpected delays

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
PART III SOCIAL LIFE<br /><br />

Answer one question only from this part. <br /><br />
7. (a) (b) List any five common diseases that can cause death in your community<br /><br /><br />

What steps can be taken to prevent such diseases


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
                <p>(a) Common diseases that can cause death in your community<br />
(i) Acquired Immune Deficiency Syndrome (AIDS)<br /> 
(ii) Cholera<br />
(iii) Malaria<br />
(iv) Hypertension<br />
(v) Typhoid<br />
(vi) Tuberculosis<br />
(vii) Poliomyelitis<br /><br /><br />

(b) Steps that can be taken to prevent such diseases<br /><br />

DISEASE PREVENTION<br /><br />

AIDS Avoid pre-marital / casual /extra-marital sex<br />
Avoid usingusedsyringes / needles / blades<br /><br />

Cholera Eating hot meals,<br />
drinking clean potable water,<br />
washing hands with soap after visiting the toilet<br /><br />

Malaria<br /> 
Using treated mosquito net<br />
Using mosquito repellent<br />
Using anti-malaria drugs<br />
Clearing mosquito breeding grounds such as choked gutters, stagnant pools of water, etc<br />
High blood pressure<br /> 
 Reducing salt intake<br />
 Avoiding drinking alcoholic beverages<br />
 Avoiding smoking<br />
 Exercising regularly<br />
 Having enough sleep<br />
 Reducing emotional stress<br />
 Reducing fat intake<br />
 Increasing fruits and vegetable intake<br /><br />
Leukemia<br /> 
 Avoiding exposure to certain radiations<br />
 Avoiding exposure to certain chemicals<br />
 Avoiding smoking<br />

Tuberculosis<br />
 Vaccination<br />
Ensuring adequate ventilation<br />
Avoid sharing cutlery, cups and glasses with infected persons
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 
8.
(a) 

Describe the extended family system.<br /><br /><br />

(b) Mention any three advantages and three disadvantages of the extended family system

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
                <p>(a) The extended family system.<br /><br />

– It comprises of various nuclear families<br />
– Many generations (great grandparents,grandparents, parents, children,grandchildren, greatgrandchildren) ofthe family live together as one<br />
– Several relations (uncles,aunties, nephews, nieces, cousins, etc) live together as one unit<br />
– Each member has a responsibility towards other members of thefamily<br />
– The system is led by the family head (Abusuapanyin)<br /><br /><br />

(b) Advantages ofthe extended family system<br /><br />

(i) Other family members takeup the responsibility of caring for the children in the absence of biological parents<br />
(ii) Members gain broad knowledge, experience and wisdom from elders in the extended family.<br />
(iii) Children are able to learn their native language properly.<br />
(iv) Children do not go wayward (get spoilt), even if parents are absent for long periods. 
(v) Greater security of members due to larger size<br />
(vi) Members are able to properly learn /apply the culture/ customs of their native background<br />
(vii) Where parents are irresponsible, the children have other family members to depend on for guidance, assistance and security.<br />
(viii ) Members benefit from strong relationships among family members<br />
(ix) More opportunities for progress in life, due to help from other members in the extended family<br /><br />

Disadvantages of the extended family<br />
(i) Reduced privacy as members keep meddling in the affairs ofothers. 
(ii) Slow decision-taking process due to large size.<br />
(iii) More money needed to cater for the needs of the family<br />
(iv) Higher frequency of quarrels and disagreements among members<br />
(v) Weaker bond of unity/ oneness within family<br />
(vi) Inadequate supervision of children by parents<br />
(vii) Greater envy / jealousy among extended family members<br />
(viii) High incidence of sexual /physical abuse.<br />
 (ix) Slower conflict resolution<br />
(x) Greater pressureon family resources

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