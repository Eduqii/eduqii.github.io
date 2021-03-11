<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2017 v2.0</title>

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

    <center><h2 class="mt-4">2017 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

      1. (a) Outline five contributions of Caliph Abu Bakr to Islam.<br /><br /><br />

(b) What two lessons can be learnt from the contribution of Caliph Abu Bakr
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
                <p>a.
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                (i) He put in place elements of democratic governance by consulting important personalities in the community before taking a decision<br />
                (ii) He formed a well-trained Islamic army.<br />
                (iii) He appointed judges/clerics of high integrity who instituted punishment as prescribed in the Holy Quran<br />
                (iv) He appointed local rulers / council of elders who advised him on important matters affecting believers.<br />
                (v) He helped the Holy Prophet Muhammed to embark on Jihad<br />
                (vi) He taught Muslims the Hajj rites or rituals.<br />
                (vii) He brought unity among Muslims and crushed all rebellions.<br />
                (viii) He gave all his wealth for the service of Allah.<br />
                (ix) Under his rule as Caliph, Islam spread to many parts of the world.<br />
                (x) He was physically tortured, but stood firm for the cause of Islam.<br />
                (xi) He helped to resolve the conflict of succession between the Awars and the Rhrjraz.<br />
                (xii) He freed many slaves including Billab the Muezzin by paying ransoms for them.<br />
                (xiii) He helped to build a mosque at Medina and paid for the land on which it was built.<br />
                (xiv) He organized the collection of the fragmented verses of the Quran into a book.<br />
                (xv) He appointed a successor before he died to avoid confusion.<br />
                (xvi) He gave up his trading business to become a full-time administrator of the Islamic state.<br />
                (xvii) He was the first Caliph to propagate / preach Islam. He attached a lot of importance to the preaching of the right way of life.<br />
                (xviii) He helped the poor and needy.<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) Muslims should be willing to use their wealth for the work of Allah <br />
                (ii) Muslims should have the courage to give up all they have in order to serve Allah faithfully.<br />
                (iii) Muslims should endure all forms of trials and tribulations for the sake of Allah.<br />
                (iv) We should be honest, truthful and trustworthy/loyal in all their deeds.<br />
                (v) We should help the poor and needy.<br />
                (vi) We should endeavour to be steadfast.<br />
                (vii) Muslims should be brave and courageous to fight in the name of Allah.<br />
                (viii) Muslims must respect and fear Allah.<br />
                (ix) Muslims must help to spread the word of Allah.<br />
                (x) We must be tolerant/humble<br />
                (xi) We must demonstrate generosity/kindness. This should be demonstrated by all believers.<br />
                (xii) We must be patriotic to our nation. Be patriotic to one’s nation<br />
                (xiii) We must be peacemakers / resolve conflict.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2. (a) Explain the term puberty.<br /><br /><br />

                (b) State three emotional changes that are associated with puberty.<br /><br /><br />

                (c) Explain four reasons why puberty rites are performed.</p>

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
                <p>a.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (i) It is the transition from childhood to adulthood.<br />
                  (ii) It is the period of growth from childhood to adulthood.<br />
                  Rites are performed to mark puberty in some cultures.<br />
                  (iii) It is a stage of transformation in the human body from childhood to adulthood. It is the period between the ages of 10 and 19 years.<br />
                  (iv) A stage where an individual becomes capable of reproduction.<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) Curiosity to know things around. They become adventurous to explore self and environment.<br />
                  (ii) Experience of changes in mood, such as, getting angry, happy or excited about minor issues.<br />
                  (iii) Development of interest in the opposite sex / engagement in friendly relationship – boy/girl relationships.<br />
                  (iv) Display of shyness when naked<br />
                  (v) Display of rebellious attitude<br />
                  (vi) Fear / worry / anxiety about the future.<br />
                  (vii) Engagement in activities that bring joy and excitement<br />
                  (viii) The desire to engage in sexual activities<br />
                  (ix) The desire to be independent and free from control / a feeling of maturity<br />
                  (x) The crave for love and care/affection<br /><br /><br />

                  c.

                  (i) It is a special ritual ceremony performed to usher a person from childhood to adulthood<br />
                  (ii) It enables a person to be recognized as a fully-fledged responsible member of the family and society.<br />
                  (iii) It teaches girls to be obedient to parents.<br />
                  (iv) It prevents pregnancy before the initiation ceremony.<br />
                  (v) It brings honour to the initiate, parents and family.<br />
                  (vi) Initiates sometimes acquire capital through gifts for her future.<br />
                  (vii) It enables girls to get good husbands.<br />
                  (viii) The initiate girls acquire knowledge about good womanhood.<br />
                  (ix) Helps the initiate to know about the traditions of the society.<br />
                  (x) The initiates learn to live, work and play with others – cooperation.<br />
                  (xi) The girls have the right to get married.<br />
                  (xii) It helps them to become good parents.<br />
                  (xiii) It teaches the initiates to be committed to God.<br />
                  (xiv) It promotes chastity until marriage.<br />
                  (xv) It prepares the youth for adult life, eg, marriage.<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

      3. (a) Describe four types of Christian prayers.<br /><br /><br />

(b) Outline four reasons why Christians pray
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
                <p>a.
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) Prayer of thanksgiving – It is said to thank or show appreciation for what God has done.<br />
                (ii) Prayer of intercession – This is prayer said for the benefit of other. Eg, the sick, the nation or against accident.<br />
                (iii) Prayer of supplication/request/petition – prayer is said to make a request of God. Eg, for job, marriage, etc. It is said to ask God for his intervention on an issue or problem<br />
                (iv) Prayer of confession – this is to confess one’s sins upon violation of God’s laws and ask for forgiveness.<br />
                (v) Dedication / Consecration – It is said to submit and dedicate one’s life to God and to be holy before God. Purifying or dedicating building / church, etc<br />
                (vi) Worship and praise – this is said in giving adoration to God.<br />
                (vii) Prayer of exaltation – this is a prayer said to adore / glorify God.<br />
                (viii) Prayer of committal – this is a prayer said to commit one’s self or anything fully to God<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) To express thanks / gratitude to God for his providence, mercy, etc<br />
                (ii) To express regret and ask for forgiveness.<br />
                (iii) To seek assistance for others in trouble.<br />
                (iv) To renew and maintain relationship with God<br />
                (v) To express commitment and dependence on God.<br />
                (vi) To keep one holy and upright unto God<br />
                (vii) To show good moral ethics and behaviour on daily basis<br />
                (viii) To acknowledge that God is always present to support us.<br />
                (ix) In order to speak to God and have fellowship with him.<br />
                (x) To obtain divine favour/blessing from God<br />
                (xi) To request for help / assistance from God<br />
                (xii) To adore / praise God<br />
                (xiii) To ask God for protection
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>4. (a) State four behaviours that constitute comportment.<br /><br /><br />

                (b) Explain four reasons why people show comportment.

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
                <p>a.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (i) Control of temper in the face of provocation<br />
                  (ii) Paying attention in class<br />
                  (iii) Being patient all the time / not rushing when doing things.<br />
                  (iv) Tolerating / respecting the views of others<br />
                  (v) Behaving well during sporting activities – not fighting / insulting others<br />
                  (vi) Not shouting or making noise in serene environment, eg, school, church, library, etc <br />
                  (vii) Showing respect to colleagues, teachers, parents and elders.<br />
                  (viii) Not defecating or urinating at unauthorized places<br />
                  (ix) Not littering the environment with rubbish<br />
                  (x) Frowning upon bad behaviour by others.<br />
                  (xi) Showing approval for good behaviour.<br />
                  (xii) Not fighting or insulting friends<br />
                  (xiii) Doing things that are morally appropriate.<br />
                  (xiv) Taking part in communal activities<br />
                  (xv) Decent dressing<br />
                  (xvi) Decent language<br />
                  (xvii) Good eating habits<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) It helps people to get favours / opportunities. It brings rewards to individuals.<br />
                  (ii) To be loved and accepted. Makes people like us and speak well of us.<br />
                  (iii) To gain respect in the community<br />
                  (iv) It promotes unity and harmony<br />
                  (v) It promotes peaceful co-existence.<br />
                  (vi) It ensures good sportsmanship.<br />
                  (vii) It brings decency and good conduct in society.<br />
                  (viii) It ensures progress and development in the society / attracts investment / production / wealth creation / jobs.<br />
                  (ix) It promotes good relationship<br />
                  (x) It draws awards to people<br />
                  (xi) It ensures mutual respect among people<br />
                  (xii) It frees people from punishment and humiliation that accompany breaking of the laws.<br />
                  (xiii) It is a command from God.<br />
                  (xiv) To serve as role model.
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5. (a) State four ways of dressing decently. <br /><br /><br />

(b) Explain four reasons why an individual needs to dress decently.
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
                <p>a.
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) Wearing the appropriate dress for the right occasion or function<br />
                (ii) Dress must be clean and ironed<br />
                (iii) Dress must cover all delicate and sensitive parts of the body.<br />
                (iv) Footwear must be neat and well-polished if necessary.<br />
                (v) The hair must be well kept and trimmed when it is too bushy.<br />
                (vi) Buttons on shirts must be well fixed with shirts tucked in where appropriate.<br />
                (vii) Belts or braces must be worn well to hold the dress firmly on the body. It is wrong to use belts and braces at the same time.<br />
                (viii) The colour of the belt worn must match with that of the shoe at all times.<br />
                (ix) Long sleeve shirts should not be folded to make them short.<br />
                (x) Dresses must not be transparent on the body.<br />
                (xi) Underwear must be neat and shorter than the dress itself.<br />
                (xii) Boys must tuck in their shirts nicely before going out.<br />
                (xiii) Wear decent footwear with socks<br />
                (xiv) Boys must lace shoes and fasten belts.<br />
                (xv) Girls should avoid skin tight and suggestive dresses.<br />
                (xvi) Use deodorant / lime / lemon when necessary<br />
                (xvii) Avoid wearing torn clothes.<br /><br /><br />

                b.<br />
                (i) It depicts the kind of person one is – the character of the person.<br />
                (ii) It helps to avoid unnecessary attraction from people.<br />
                (iii) It shows a person to be responsible and admirable.<br />
                (iv) It brings respect, honour and recognition to the individual and his / her family.<br />
                (v) It can open new avenues for personal development and achievement.<br />
                (vi) It qualifies a person to be described as gentle or decent.<br />
                (vii) It makes a person to be a role model.<br />
                (viii) It makes one to be loved by the society.<br />
                (ix) It minimizes rape and related cases in society.<br />
                (x) It makes the society have confidence/ trust in us as potential future leaders.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>6. (a) Describe four deeds that are punishable in the society.<br /><br /><br />

(b) Outline four ways of accepting responsibility for one’s bad deeds.

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
                <p>a.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) Stealing<br />
                  (ii) Bullying<br />
                  (iii) Cheating / exam malpractice<br />
                  (iv) Telling lies<br />
                  (v) Violent behaviour<br />
                  (vi) Murder<br />
                  (vii) Fighting<br />
                  (viii) Disobedience to authority<br />
                  (ix) Indecent dressing<br />
                  (x) Drug abuse<br />
                  (xi) Destruction of public property / someone’s property<br />
                  (xii) Occultism<br />
                  (xiii) Littering the environment<br />
                  (xiv) Negligence of duty<br />
                  (xv) Indecent language<br />
                  (xvi) Laziness<br />
                  (xvii) Refusal to report crime<br />
                  (xviii) Robbing / defrauding people<br />
                  (xix) Sexual immorality<br />
                  (xx) Bribery and Corruption<br />
                  (xxi) Teaching your friends bad habits<br />
                  (xxii) Refusal to help people in need.<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i)Owning up for something you did wrong.<br />
                  (ii) Accepting to correct the wrong you did.<br />
                  (iii) Apologizing for the bad deed / asking for forgiveness<br />
                  (iv) Showing remorse and regret for the bad deed.<br />
                  (v) Accepting the appropriate punishment for the wrong deed.<br />
                  (vi) Readiness to make restitution when required to.<br />
                  (vii) Discussing the wrong with a trusted friend and seeking advice<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

      7. (a) Outline four ways of promoting good relationship among family members<br /><br /><br />

(b) State three reasons each for being obedient to:<br />
I. parents;<br />
II. teachers.<br />
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
                <p>a.
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) Showing respect to parents, grandparents and others of a household.<br />
                (ii) Being obedient to parents, grandparents and others.<br />
                (iii) Giving support to parents, grandparents and others.<br />
                (iv) Helping parents with household chores.<br />
                (v) Showing love/kindness/mercy/appreciation to members of the household.<br />
                (vi) Learning to forgive one another<br />
                (vii) Allowing free and open discussion on issues before taking decision / tolerance<br />
                (viii) Contributing towards family activities and projects.<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                I. Parents<br /><br />

                (i) It is a command from God.<br />
                (ii) It is a duty.<br />
                (iii) It brings honour to the individual / family<br />
                (iv) It promotes good relationship<br />
                (v) It promotes peace / harmony / love / security<br />
                (vi) It brings a reward / blessing / long life<br />
                (vii) To enable them provide their needs<br />
                (viii) To avoid punishment<br /><br /><br />

                II. Teachers.<br /><br />

                (i) They are established by God<br />
                (ii) It is a duty<br />
                (iii) It promotes good relationship<br />
                (iv) It brings harmony / peace / security / love<br />
                (v) It promotes environment for smooth / effective teaching and learning<br />
                (vi) It promotes higher academic achievement.<br />
                (vii) To avoid punishment
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>8. (a) Outline four reasons why Religious Youth Organisations are formed.<br /><br /><br />

(b) State four benefits of joining Religious Youth Organisations.



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
                <p>a.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) To bring the youth together to organize their social programs to socialize.<br />
                  (ii) To teach moral values.<br />
                  (iii) To teach the traditions of their religion so that they can defend their faith at all times<br />
                  (iv) To incorporate the youth into the religious group.<br />
                  (v) To re-direct the energy of the youth into useful work.<br />
                  (vi) To learn leadership skills.<br />
                  (vii) To create a forum for discussing youth problems<br />
                  (viii) To train the youth to spread the gospel.<br />
                  (ix) To prepare them to become responsible and useful adults.<br />
                  (x) To demonstrate patriotism and loyalty to the community<br />
                  (xi) To contribute their quota to their state and community.<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) Self-confidence – By participating in their activities, one builds up his confidence.<br />
                  (ii) Social adjustment – One is able to relate well with peers and the opposite sex.<br />
                  (iii) Leadership training – One is trained to acquire leadership skills<br />
                  (iv) Character growth and development – Members learn to grow and develop spiritually and morally.<br />
                  (v) Religious tolerance and peaceful co-existence – Members are taught how to relate with members of their faith and those of others.<br />
                  (vi) Proper use of leisure time – By participating in the activities of the Religious Youth Organisation, it promotes proper use of leisure time to keep away from evil deeds.<br />
                  (vii) Promotion of culture – By inculcating in us traditional values, we will be able to promote our culture to the outside world.<br />
                  (viii) Positive attitude to social vices, eg, stealing, prostitution, etc<br />
                  (ix) Members help each other in times of need.
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
