<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2019 v2.0</title>

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

    <center><h2 class="mt-4">2019 BECE English Language Past Questions – Paper Two</h2></center>
    <center><h4>PART A <br />
    ESSAY WRITING</h4></center>
    <p>1. Write a letter to your headteacher discussing two games that should be encouraged among the students.<br /><br />

      2. Write an article for publication in your school magazine on why every student should be computer-literate.<br /><br />

      3. Write an interesting story which ends with the words, it pays to be kind to strangers</p>

    <p><center><h4>PART B<br />
    COMPREHENSION <br /><br /> <b><i>4. Read the following passage carefully and answer all the questions which follow</i></b></h4></center></p>
    <p>Friends are meant to help each other when the need arises. At school, some people develop friendly relationships which continue throughout their lives. One thing which helps people to stay together as <u>intimate</u> friends is the ability to communicate freely among themselves and endeavor to be each other’s keeper. What destroys friendships mostly is friends being suspicious of each other. That is why a popular <u>adage</u> says, “Suspicion is the bane of friendship”.</p>
    <p>People attend school not only because they want to make friends but also to <u>acquire</u> knowledge and skills for employment. Education helps people to be <u>polished</u> in their manners.The school prepares its students to become useful citizens.</p>
    <p>At school, Tono <u>was not in the good books of the teachers</u> because he behaved in an unruly manner. <u>Initially </u>, everyone avoided his company; he could be violent at times. Worst of all, he would refuse to do his assignment and was a habitual latecomer. <u>With the passage of time</u>, he was realized the need to work diligently in order to have a bright future. His academic work therefore improved by <u>leaps and bounds.</u></p>
    <p>Fortune separated us. I travelled abroad for further studies. I stayed away for two decades. On my return, I went to my former school for my certificate. There, I met a middle-age gentleman who also came to the office for the same purpose. I could not recognize him because time had wiped off all memories of school. However, the names on the certificates revealed that we were classmates.
    After further discussions, Tono invited me to be his business partner.</p>
    <p>(a) (i) Sate one thing which helps people to be close.<br />
       (ii) How can friendships get destroyed?<br />
       (b) Give two reasons why people to school.</p>

      <p>(c) (i) Why did people avoid Tono’s company?<br />
      (ii) State Tono’s reason for visiting his former school.</p>

      <p>(d) Why could the writer not recognize Tono?</p>

      <p>(e) Explain, in your own words, give another word or a phrase that means the same, and can fit into the passage;<br />
      (i) Was not in the good books of teachers<br />
      (ii) With the passage of time<br />
      (iii) by leaps and bounds</p>

      <p>(f) For each of the following words, give another word or phrase that means the same, and can fit into the passage:<br />
      (i) intimate;<br />
      (ii) adage;<br />
      (iii) acquire;<br />
      (iv) polished;<br />
      (v) initially</p>


  </div>

  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Answer 
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                (a) (i) People’s ability to communicate freely among themselves and being each others’ keepers.<br />
                (ii) Friendships are destroyed when friends get suspicious of each other.<br /><br />

                (b) (i). To acquire skills for employment.<br />
                (ii) To make friends<br /><br />

                (c) (i) He could be violent at times. / He behaved badly. / He was disliked by his teachers.<br />
                (ii) Tono visited his former school in order to collect his certificate.<br /><br />

                (d) He had not seen Tono in over two decades.<br /><br />

                (e) Explain, in your own words, give another word or a phrase that means the same, and can fit into the
                passage;<br /><br />

                (i) was not in the good books of teachers – The teachers were displeased with his behaviour<br />
                (ii) with the passage of time – As time proceeded.<br />
                (iii) by leaps and bounds – tremendously /Rapidly / swiftly/quickly<br /><br />

                (f) For each of the following words, give another word or phrase that means the same, and can fit into the passage:<br />
                (i) intimate – very close / dear<br />
                (ii) adage – proverb / saying<br />
                (iii) acquire – obtain / gain<br />
                (iv) polished – refined / fine-tuned<br />
                (v) initially – From the start / At first / in the beginning
              </div>
            </div>
          </div>
        </div>
      </div>
     <p><center><h4>PART C<br />
   LITERATURE<br /><br /> <b><i>5. Question 5(a) to 5(c) are based on the abridged and simplified version of Charles Dickens’ Oliver Twist</i></b></h4>
   <h4>CHARLES DICKENS: <i>Oliver Twist</i></h4>
 </center></p> 
 <div class="container" id="containers">
  <p>“stop, thief!” he shouted, thinking Oliver had robbed him. The poor boy found himself being chased by people and even dogs! Someone in the crowd, a young man with purple lips and red sores all over his hands, grabbed Oliver and knocked him down…”<br /><br />

    (Page 109)<br /><br />

    (a) The one described as a young man with purple lips and red sores all over his hands is ………<br /><br />

    (b) Why did the ‘young man with purple lips and red sores all over his hands’ want to harm Oliver?<br /><br />

    (c) How did Mr. Brownlow help Oliver at the end of the story?</p>
  </div>
  <div class="container-sm themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingTwo">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Answer 
              </button>
            </h4>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                (a) Monks / Edward Leeford<br /><br />

                (b) He intended to keep all of their father’s wealth to himself.<br /><br />

                (c) He helped Oliver Twist discover who his real parents were.
              </div>
            </div>
          </div>
        </div></div>
        <p><center><h4><b><i>Read the following extract carefully and answer Questions 5(d) and 5(e)</i></b></h4>
   <h4>KEN SARO-WIWA: <i>Home Sweet Home</i></h4>
 </center></p>
 <div class="container" id="containers">
<p>“Born, say, our young Miss has arrived heavily laden with all the good things of this earth. I should think Dukana will soon float on a sea of wealth”
(Page 178)<br /><br />

(d) Who is referred to as our young Miss?<br /><br />

(e) The library device used in heavily laden with all the good things of the earth is………</p>
 </div>
  <div class="container-md themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingThree">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Answer 
              </button>
            </h4>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                (d) The Author<br /><br />

                (e) Hyperbole
              </div>
            </div>
          </div>
        </div></div>
        <p><center><h4><b><i>Read the following extract carefully and answer Questions 5(f) to 5(h)</i></b></h4>
   <h4>AMA ATA AIDOO: <i>The Dilemma of a Ghost</i></h4>
 </center></p>
 <div class="container" id="containers">
 <p> “X: It was a couple of days ago that we met. What came out of the meeting is that we must come and ask you and your wife what is preventing you from giving your grandmother a great-grandchild before she leaves us.”
(Act 4, Page 66)<br />
(f) The speaker represented by ‘X’ in the extract is…….<br /><br />

(g) According to Ato, what is preventing him and his wife from having children?<br /><br />

(h) The figure of speech that describes she leaves us in the extract is……….</p>

</div>
  <div class="container-lg themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingFour">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Answer 
              </button>
            </h4>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                (f) Petu <br /><br />

                (g) An unknown reason / Nothing<br /><br />

                (h) Euphemism
              </div>
            </div>
          </div>
        </div></div>
        <p><center><h4><b><i>Read the following extract carefully and answer Question 5(i) and 5(j)</i></b></h4>
   <h4>THERESA ENNIN: <i>Makola</i></h4>
 </center></p>
 <div class="container" id="containers">
  <p>“Head bent, rags all around the upside down pan
Picking her nose, shuffling her feet, oblivious to the bustle”<br />
(Page 158)<br /><br />

(i) Write one group of words in the extract that brings out the theme of uncleanliness.<br /><br />

(j) The words Head bent, rags all around the upside down pan appeal to the reader’s sense of…….</p>
</div>
  <div class="container-xl themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingFive">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                Answer 
              </button>
            </h4>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                (i) Rags all around<br /><br />

                (j) sight / sympathy
              </div>
            </div>
          </div>
        </div></div>
        <p><center><span style="font-variant: small-caps;">Good Luck</span></center></p>
  
</main>


    
  </body>
  
   <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</html>
