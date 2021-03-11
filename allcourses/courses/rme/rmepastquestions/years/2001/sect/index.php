<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2001 v2.0</title>

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

    <center><h2 class="mt-4"> 2001 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center><br />
   
SECTIONB ESSAY<br />
1 hour<br /><br />

Answer threequestionsonlyfrom this section, choosingonequestion from each part<br />
Credit will be given for clarity of expression and orderly presentation of material<br /><br />

PART I RELIGION<br />
Answer one question only from this part<br /><br />

1. (a) (b) State any five of the Ten Commandments. Explain why these commandments are important.
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
                <p>(a) The Ten Commandments.

(i) I am the LORD your God, who brought you out of the land of Egypt, out of the house of bondage.
You shall have no other gods before me.<br /><br />

(ii) You shall not make for yourself a graven image(an idol), which looks like anything in heaven or on earth or under the earth;<br />
You shall not bow down to them or serve them;<br /><br />

(iii) You shall not take the name of the LORD your God in vain; for the LORD will not hold him guiltless who takes his namein vain.<br /><br />

(iv) Remember the sabbath day, to keep it holy.<br />
Six days you shall labor,and do all your work;<br />
but the seventh day is a sabbath to the LORD your God; in it you shall not do any work,.<br /><br />

(v) Honor your father and your mother, that your days may belong in the land which the
LORD your Godgivesyou. <br /><br />
(vi) You shall not kill.<br /><br />
(vii) You shallnot commit adultery. <br /><br />
(viii)You shall not steal.<br /><br />
(ix) You shall not bear false witness against your neighbor.<br /><br />
(x) You shall not desire another person‟s house/ wife/ manservant /maidservant /ox/
anythingthat belongs toanotherperson.<br /><br /><br />

(b) Why these commandments areimportant.<br /><br />

(i) God himself wrote the commandment with his finger (Exo.24:12, Exo.31:18)<br />
 (ii) The first five teach us how to relate with God<br />
(iii) Thelast five teach us how to relate with fellow humans<br />
(iv) They form the fundamentals / basics of constitutions / laws of many nations<br />
(v) They guide us on how to live upright lives<br />
(vi) Their observance promote peace, love and harmony in the society<br />
(vii) Their observance attracts blessings

              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.
(a) 
Describe how witch craft is acquired.<br /><br /><br />
(b)State four reasons why people believe in witches and wizards.

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
                <p>(a) How witchcraft is acquired.<br />
                 (i) Through gifts<br />
A person, who already has witchcraft, gives a gift to someone who is not yet possessed. Once the recipient receives the gift and uses it, the witchcraft is transferred from the giverto therecipient.<br /><br />
(ii) By inheritance<br />
A person who does not have witchcraft may inherit certain things from a witchcraft possessed relative who dies.If the inheritor receives and uses the items he/she may also acquire the witchcraft.<br /><br />
(iii) Through the wearing of certainclothes / adornments<br />
When aperson who does not have witchcraft wears certain clothes or adornment such as bead, chains, bracelets, etc, that are witchcraft-possessed, they may also acquire witchcraft.<br /><br />
(iv) Throughfood<br />
A person can acquire witchcraft through eating food that contains a witch-making substance.<br /><br />
(v) Thoughrituals<br />
One can also acquire witchcraft through rituals that areperformed for/on / by a person, either knowingly or unknowingly.<br /><br /><br />

(b) Reasons why people believe in witches and wizards.<br />
(i) Some people have openly confessed that they are witches / wizards<br />
(ii) The scriptures (Bible/ Quran, etc) makes mention of them<br />
(iii) People have heard several stories about the activities of witches and wizards<br />
(iv) Some people have personally experienced the activities of witches and wizards<br />
(v) Some people have had dreams about witches and wizards.



                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
3.
(a)
What is revelation in Islam?<br /><br /><br />
(b)Identify the importance of revelation to the Muslim.


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
         (a) Revelation in Islam<br />

Messages that disclose /make known certain things about Allah and his will for humankind<br /><br />

(b) The importance of revelation to the Muslim.<br />
(i) It makes the Muslim appreciate the oneness of Allah<br />
(ii) It makes the Muslim know the will of Allah and submit to him<br />
(iii) It shows the Muslim how to pray<br />
(iv) It shows the Muslim how to relate with others<br />
(v) It makes known the promises ofAllah for his followers<br />
(vi) It directs the Muslim to obey the teachings of Allah<br />
(vii) It gives the Muslim understanding about various issues of life

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>
           PART II MORAL LIFE<br />
Answer one question only from this part<br /><br />

4. (a) Describe how Ghanaians greet each other<br /><br /><br />
(b) Show the importance of greetings in the society.



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
                <p>(a) How Ghanaians greet each other<br />
(i) By verbal expression, such as „ Goodmorning, Welcome, etc‟ in various languages<br />
(ii) By shaking hands (the right hand must be used always)<br /> 
(iii) By bowing / bending the knees briefly<br />
(iv) By saluting with the righthand<br />
(v) By waving the right hand<br />
(vi) Byprostrating(lying on the ground with the facedown)<br />
 (vii) By removing one‟s hat<br />
(viii) By lowering one‟s cloth (formen)<br /><br /><br />

(b) Theimportanceofgreetingsinthesociety.<br />
(i) It shows respect to others<br />
(ii) It shows one‟srecognition and adherence to customs /cultures<br />
(iii) It creates a friendly atmosphere<br />
(iv) It helps to start a conversation<br />
(v) It enables oneto feel welcome and a tease<br />
(vi) It is a sign of proper upbringing<br />
(vii) It promotes peace, love and harmony<br />
(viii) It helps to lower relational tension among people<br />
(ix) It helps to resolve conflicts

                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">
5. Explain the responsibilities of a child to the community

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
                <p>(a) Explanation of the responsibilities of a child to the community<br /><br />
(i) Helping to clear bushy areas in order to prevent diseases/infections and maintain sanitation.<br />
(ii) Helping to clear choked gutters in order to prevent diseases/infections and maintain sanitation.<br />
(iii) Helping to tidy up dirty areas in order to prevent diseases/infections and maintain cleanliness.<br />
(iv) Helping to fetch water for the home / for elders to be used for domestic activities such as washing, bathing, cleaning and cooking<br />
(v) Helping to wash dishes,clothes, etc for the home/ for elders to ensure cleanliness and maintenance of personal hygiene<br />
(vi) Reporting offensive behaviour/ criminal activities to the authorities, so that the offenders can be dealt with, and thereby, reducing the social vices in the community<br />
(vii) Participating in communal labour for the construction of social amenities, such as schools, public toilets, libraries, etc, thereby helping with the development of the community.


              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6. (a) Give five examples of bad deeds.<br /><br /><br />
(b) What are the effects of such bad deeds?



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
                <p>(a) Examples of bad deeds.<br /><br />

(i) Abusing drugs<br />
(ii) Prostitution<br />
(iii) Armed robbery<br />
(iv) Having pre-marital sex<br />
(v) Telling lies<br />
(vi) Insulting others<br />
(vii) Showing disrespect to / disregard for others<br />
(viii) Being late to school /church / other engagements<br />
(ix) Being irregularat school / church<br />
(x) Refusing to do one‟s homework or not doingitproperly<br />
(xi) Refusingto do one‟s house or school work/chores<br />
(xii) Dressing indecently/ inappropriately<br />
(xiii) Performing badly in one‟s test or examination<br />
(xiv) Refusing to help people when they need help which one can provide.<br />
 (xv) Disobeying instructions from elderlypeople<br />
(xvi) Refusing to surrender one‟sseat for an elderly person
(xvii) Indiscriminate littering of the environment<br /> 
(xviii)Keeping our bodies and surroundings dirty<br />
 (xix) Wasting water and electricity<br /><br /><br />

(b) Effects of bad deeds<br />
(i) Shame and disgrace to the person and his family/school/church, etc<br />
(ii) Arrest, prosecution and imprisonment<br />
(iii) Punishment at home or at school<br />
(iv) Loss of friends / difficulty in making good friends<br />
(v) Low reputation<br />
(vi) Low productivity<br />
(vii) Health Problems /Infections and diseases<br />
(viii) Educational challenges<br />
(ix) Loss of skills and knowledge<br />
(x) Poverty / financial difficulty<br />
(xi) Failure to achieve targets / objectives<br />
(xii) Death<br />
(xiii) Unemployment<br />
(xiv) Mob action /Lynching<br />
(xv) Broken homes<br />
(xvi) Low self esteem<br />
(xvii) Termination of education (droppingout of school)<br />
(xviii)Spiritual weakness<br />
(xix) Delayed Education<br />
(xx) Depression/ mental challenges

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
PART III SOCIAL LIFE<br /><br />

Answer one question only from this part. <br /><br />
7. (a) Identify any three types of work<br /><br /><br />

(b) Describe any four ways by which the spirit of hard work can be developed


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
                <p>(a) Types ofwork<br />
(i) School work– Work done at school as part of the curriculum<br />
(ii) Home chores– Work done at home/ in our houses as part of our responsibilities<br />
(iii) Communal work– Work donein /forour communities as part of our social responsibilities<br />
(iv) Occupational work – Work done on are gular basis, especially to earn income<br />

(v) Humanitarian work– Work done for the good of humankind<br /><br /><br />

(b) Ways by which the spirit of hardwork can be developed<br />

(i) Being punctual- coming to /starting work on time<br />
(ii) Being regular – coming to / doing work as often as is required<br />
(iii) Being disciplined -doing what has to be done regardless of how one feels<br />
(iv) Being committed - having a strong loyalty / devotion for the work (as though it wereyours /your lifedepended on it)<br />
(v) Being diligent -working tirelessly and consistently<br />
(vi) Persevering – continuing / persisting, even in the face of difficulties<br />
(vii) Staying focused- always having in mind the ultimate objective/ goal /aim.<br /> 
(viii)Being patient -Enduring / staying calm in caseof unexpected delays
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 

8.
(a) 

What is a human right?<br /><br /><br />

(b) Describe how any three rights of thechild can be protected.

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
                <p>(a) A humanright<br />
The basic privileges and freedoms to which all human beings are entitled
Or:<br /><br />

The basic privileges and freedoms of an individual<br /><br /><br />

(b) 
(i) How rights of the child can be protected<br /><br />
The right to life<br />
This right can be protected by<br />
(A) EDUCATION: Children, parents and the general public must be educated on
the rights of the child to life,<br /><br />
ways of preventingabuseof thechild‟sright to life and
avenues through which one can seek help in caseof abuseorattempted abuse
ofthe child‟sright to life.<br /><br />
(B) PREVENTING ABORTION: Abortion of unborn babies must be prevented by making and enforcing laws against abortion<br /><br />
(C) IMPROVING REPRODUCTIVE HEALTH SYSTEMS. Reproductive health systems must be improved to prevent child mortality(children dyingat/after birth)<br /><br /><br />

(ii) The right to education<br />
This right can beprotected by:<br />
(A) PUBLIC EDUCATION :Running public education campaigns on
the child‟sright to education<br />
ways of preventingabuseof thechild‟sright to education and
avenues through which one can address abuse or attempted abuse of the
child‟sright to education.<br /><br />
(B) RESPONSIBLE PARENTING: Parents paying their children‟s school fees and providing other educational needs of the child.<br /><br />
(C) FREE ANDCOMPULSORY BASIC EDUCATION: The government making basic education free and compulsory<br /><br />

(D) GOVERNMENTAL/ CIVILSOCIETAL INTERVENTIONS:<br />
Government /civil society providing children with items such as school books, bags, uniforms, etc, that are needed forschool<br /><br /><br />

(iii) The right to equality<br />
This right can beprotected by:<br />
(A) PUBLIC EDUCATION :Running public education campaigns on
the child‟sright to equality
ways of preventingabuseof thechild‟sright to equalityand
avenues through which one canaddress abuse orattempted abuseofthe
child‟sright to equality.<br /><br />
(B) RESPONSIBLE PARENTING: Parents /teachers treatingtheirchildren/ pupils equally,regardless of their sex, intelligence, physical appearance, temperament or any other unique personal trait.<br /><br />
(C) GOVERNMENTAL/ CIVILSOCIETAL INTERVENTIONS:The government and civil society providing equal opportunities for all children irrespective of their race/tribe, gender, location, social class, political opinion, etc.<br /><br /><br />

(iv) Freedom of expression<br />
This right can beprotected by:<br />
(A) PUBLIC EDUCATION :Runningpublic education campaigns on
the child‟sright to freedom of expression
ways of preventingabuseof thechild‟sright to freedom of expression and
avenues through which one canaddress abuse orattempted abuseofthe
child‟sfreedom of expression<br /><br />
(B) PROPERTRAINING: Parents/teachers training their children on how to properly express their opinions with respect/courtesy<br /><br />
(C) OPPORTUNITY FOR EXPRESSION: Parents /teachers allowing children to freely express their views.<br /><br />
(D) GOVERNMENTAL/ CIVILSOCIETAL INTERVENTIONS:Thegovernment
and civil societyproviding good platforms for children to freely express their views without fear / reservation.<br /><br /><br />

(v) Freedom of worship/ religion<br />
This right can be protected by:<br />
(A) PUBLIC EDUCATION:Running public education campaigns on
the child‟sright to freedom of worship/religion
ways of preventing abuse of the child‟sright to freedom of worship/religion and
avenues through which one can address abuse or attempted abuse of the
child‟sfreedom ofworship/religion<br /><br />
(B) OPPORTUNITY FOR EXPRESSION: Parents/teachers allowing children to worship /practice religion in the way that their spirits inspires them to.<br /><br />
(C) GOVERNMENTAL/ CIVILSOCIETAL INTERVENTIONS: The government and civil society providing legal protection for children to worship freely in the way they are inspired to.

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