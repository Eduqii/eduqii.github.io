<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2011 v2.0</title>

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

    <center><h2 class="mt-4">2011 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

 1.
(a) Narrate Jesus’ teaching on salt and light in the Sermon on the Mount.<br /><br /><br />

(b) What three lessons could be learnt from the use of salt and light?
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

(a) Jesus’ teaching on salt and light in the Sermon on the Mount.<br />
Jesus taught that:<br />
– his followers are the salt of the earth<br />
– If salt loses its taste, it cannot regain it<br />
– It therefore has to be thrown away and trampled upon by people<br />
– Also, his followers are the light of the world<br />
– A city on a hill is not hidden (everyone sees it)<br />
– Again, a burning candle is not put under a vessel (container) but rather on a candlestick
(stand), so that people in the house can benefit from the light<br />
– His followers should also let their light shine for men to see, so that others may see their good works, and give glory to the Father in heaven (God)<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
b.
Lessons that could be learnt from the use of salt<br />
– Salt give food greater worth / value – The followers of Christ must also live worthy lives<br />
– If salt loses its taste, it is thrown away and destroyed – Hence, Jesus’ followers should not compromise their standards otherwise no one would regard them anymore and they will become useless.<br />
– Salt gives food a good taste for greater enjoyment. – his followers must live good and useful lives for others to benefit and enjoy being around them<br />
– Salt preserves food (prevents food from going bad) – In the same way, his followers must help preserve their society – ie, encourage good works and prevent / discourage wickedness / evil. This can be done best by setting good examples first and then, teaching others to follow.<br /><br />

Lessons that could be learnt from the use of light<br />
– Light represents leadership – his followers must act as good leaders in their communities<br />
– Light makes people see clearly – his follower must make people understand and know what to do in order to please God<br />
– Light is not hidden – his followers must not hide their God-given abilities / gifts. They
must use them for the benefit of mankind.<br />
– Light drives away darkness – his followers must help resist / stop evil deeds in the society.<br />
– Light shows the way – his followers must also teach others to follow Christ.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.
(a) Identify the five daily prayers offered by Muslims.<br /><br /><br />

(b) State four reasons why prayer is important to the Muslim.

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(a) The five daily prayers offered by Muslims.<br />

(i) Fajr (at dawn)<br />
(ii) Zuhr (at noon)<br />
(iii) Asr (after noon)<br />
(iv) Maghrib (at sunset)<br />
(v) Isha (evening)<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
b. Reasons why prayer is important to the Muslim.<br />

(i) It shows his/ her obedience and submission to God<br />
(ii) It enables him/ her to thank and praise God for his goodness<br />
(iii) It enables him/ her to confess sins and ask for forgiveness<br />
(iv) It enables him/ her to seek God’s protection and guidance<br />
(v) It enables him/ her to guard against sin and wrongdoing<br />
(vi) It helps him / her to stay faithful and committed to God<br />
(vii) It enables him/ her to ask for his/ her needs<br />
(viii) It enables him/ her to purify him/herself<br />
(ix) It strengthens his / her relationship with God.<br />
(x) It enables him/ her to grow spiritually
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
               3.(a) Mention four causes of death.<br /><br /><br />

(b) Give four reasons why death rites are performed.
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
a.
Causes of death.<br />
(i) Disease / sickness / infection<br />
(ii) Motor accidents<br />
(iii) Domestic accidents (eg, falling off a building, slipping and falling, etc)<br />
(iv) Industrial accidents (getting struck by a falling object, killing by heavy equipment, etc)<br />
(v) Abortion<br />
(vi) Murder<br />
(vii) Natural causes (Old age)<br />
(viii) Suicide<br />
(ix) Food poisoning<br />
(x) Natural disasters, eg floods, earthquake, volcanic eruptions, etc<br />
(xi) Execution (death sentence)<br />
(xii) Starvation<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

(b)
Reasons why death rites are performed.<br />
(i) To pay last respects / honour and say farewell to the dead<br />
(ii) To separate the dead from this world and initiate them into the spirit world / the world of the dead<br />
(iii) To encourage people to lead good lives while on earth<br />
(iv) To assist the dead to be promoted to the level of ancestors<br />
(v) To exhibit the culture / customs of the people<br />
(vi) To strengthen the bond of unity among family members, friends, colleagues and other sympathizers<br />
(vii) To collect donations to help the dependants / family of the dead<br />
(viii) It creates an opportunity for distant relations to come back / visit home<br />
(ix) It promotes the cleaning and tidying up of homes and communities<br />
(x) It helps the family, friends and loved ones to cope with the death of their beloved<br />
(xi) It creates an opportunity for potential marriage couples to identify themselves
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>4.(a) List any four types of punishment.<br /><br /><br />

(b) State four reasons why pupils are punished in your school.

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(a) Types of punishment.<br />
(i) Suspension<br />
(ii) Caution / query / warning letters<br />
(iii) Fines<br />
(iv) Dismissal<br />
(v) Isolation / segregation<br />
(vi) Scolding / rebuking<br />
(vii) Jailing / imprisonment<br />
(viii) Corporal punishment<br />
(ix) Extra work (sweeping, mopping, scrubbing, etc)<br />
(x) Capital punishment<br /><br /><br />
DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(b) Reasons why pupils are punished in your school.<br />
(i) For correction<br />
(ii) As a deterrent<br />
(iii) To maintain order and discipline<br />
(iv) For reformation / changing<br />
(v) For protection<br />
(vi) For retribution<br />
(vii) For vindication<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5.
(a) Mention four good deeds that merit a reward.<br /><br /><br />

(b) Identify four effects of rewards.
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(a) Good deeds that merit a reward.<br />
(i) Greeting and showing respect to everyone one meets.<br />
(ii) Going to school / work early / punctually<br />
(iii) Going to school regularly<br />
(iv) Doing one’s homework properly<br />
(v) Doing one’s school chores diligently and faithfully<br />
(vi) Dressing neatly and decently<br />
(vii) Excelling in one’s test or examination<br />
(viii) Assisting / helping friends with their school work whenever they need help.<br />
(ix) Reporting people who do bad deeds to the appropriate authority<br />
(x) Doing one’s house chores diligently and faithfully<br />
(xi) Obeying instructions from elderly people<br />
(xii) Surrendering one’s seat in a bus or at a gathering for an elderly person<br />
(xiii) Disposing of litter in a proper way<br />
(xiv) Keeping our bodies and surroundings clean and tidy at all times<br />
(xv) Using water and electricity wisely.<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(b) Effects of rewards.<br />
Positive<br />
(i) It makes the recipient feel appreciated / recognized<br />
(ii) It encourages the recipient to do more of whatever good deed brought the reward.<br />
(iii) It brings honour to the recipient and his well-wishers<br />
(iv) It motivates others to work harder / do better in order for them to also receive awards<br /><br />

Negative<br />
(v) It can lead to complacency / arrogance in the recipient.<br />
(vi) It can lead to corruption in the system<br />
(vii) It can generate evil feelings / intentions, such as envy / jealousy against the recipient<br />
(viii) It can cause others to ridicule (laugh at) the recipient if the reward is not appropriate /
undesirable
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6.(a) Mention four forms of greetings in your community.<br /><br /><br />

(b) State four moral benefits that can be derived from greeting.

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
                <p>(a) Forms of greetings in your community.<br />
(i) Verbal expression<br />
(ii) Bowing<br />
(iii) Waving<br />
(iv) Saluting<br />
(v) Handshake<br />
(vi) Hugging<br />
(vii) Doffing of hat<br />
(viii) Lowering of cloth (for men)<br />
(ix) Prostrating (laying on the ground with face downwards)<br />
(x) Specialized greetings among members of a particular group (work, church, school, etc)<br />
(xi) Specialized greeting within a particular profession<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(b) Moral benefits that can be derived from greeting.<br />
(i) It shows respect to others<br />
(ii) It shows one’s recognition and adherence to customs / cultures<br />
(iii) It creates a friendly atmosphere<br />
(iv) It helps to start a conversation<br />
(v) It enables one to feel welcome and at ease<br />
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

  7.(a) Describe the nuclear family system.<br /><br /><br />

(b) Mention three advantages and three disadvantages of the nuclear family system.
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(a) The nuclear family system.<br />
– This family system comprises the father, mother and children.<br />
– The head of the family is the father<br />
– The assistant head of the family is the mother<br />
– The father is responsible for the provision of essential needs of the family<br />
– The size is relatively small<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(b) Advantages of the nuclear family system.<br />
(i) Easy and quick communication among family members<br />
(ii) Quick decision-taking<br />
(iii) Less money needed to cater for the family<br />
(iv) Stronger bond of unity / oneness within family<br />
(v) Close supervision of children by parents<br />
(vi) Limited interference from external family members<br />
(vii) Easier / faster conflict resolution due to closeness of members<br />
(viii) Less pressure on family resources<br />
(ix) Greater independence, and hence, ability to concentrate on their work or studies.<br /><br />

Disadvantages of the nuclear family system<br />
(i) The absence of parents can easily cause financial difficulty for the children<br />
(ii) Members may not gain enough experience and wisdom from elders in the extended family.<br />
(iii) Children may not be able to learn their native language properly.<br />
(iv) Children can easily go wayward (get spoilt), especially if parents are absent for long periods.<br />
(v) Members are easily overpowered by enemies of the family, because they are few<br />
(vi) Members are not able to properly learn / apply the culture / customs of their native background<br />
(vii) If parents are irresponsible, the children may have no one to depend on for guidance, assistance and security.<br />
(viii) Members can be like strangers in their own extended families due to little or no social interaction<br />
(ix) Fewer opportunities for progress in life, due to lack of help from other members in the
extended family
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 

8.(a) What is leisure?<br /><br /><br />

(b) Give five reasons why leisure is important to people.


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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (a) Leisure<br />
                  A period of break from normal work / activity
                  Or<br />
                  A free time, due to completion or cessation from usual duties
                  Or<br />
                  Freedom from the demands of work or duty
                  Or<br />
                  A time of break from routine duties<br /><br /><br />

                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (b) Reasons why leisure is important to people.<br />
                  (i) It enables one to refresh the mind and the body<br />
                  (ii) It enables one to regain strength and vitality<br />
                  (iii) It gives the opportunity to rest<br />
                  (iv) It provides the chance to engage in hobbies / other activities of interest<br />
                  (v) It creates the opportunity to socialize with others<br />
                  (vi) It helps one to develop his/ her talents in other areas<br />
                  (vii) It enables one to gain more knowledge and experience<br />
                  (viii) It gives the opportunity to participate in social /communal activities<br />
                  (ix) It helps one to maintain good health<br />

 
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
