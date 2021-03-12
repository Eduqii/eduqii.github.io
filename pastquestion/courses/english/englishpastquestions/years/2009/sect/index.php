<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2009 v2.0</title>

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

    <center><h2 class="mt-4">2009 BECE English Language Past Questions – Paper Two</h2></center>
    <center><h4>PART A <br />
    ESSAY WRITING</h4></center>
    <p>Answer one question only from this part<br /><br />
      <b>Your composition should be about 250 words long.</b><br /><br />

      <b>Credit will be given for clarity of expression and orderly presentation of material.</b><br /><br />
     1. An annual festival has recently been celebrated in your area. Write a letter to your friend in another part of the country,
describing the festival and how you enjoyed it.<br /><br />

    2. Your teachers have complained about acts of indiscipline being practiced in your school.
As Senior Prefect, write a letter to the headmaster, describing two of such acts and suggesting ways of correcting them.</p>
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
               BELOW ARE SOME GUIDELINES THAT IF EMPLOYED AND REMEMBERED SHOULD AID THE STUDENT CONSTRUCT A GOOD ESSAY.<br /><br />

              TOPIC SENTENCE : Main Concept Of The Paragraph<br /><br />

              THESIS STATEMENT: Clear And Coherent Statement That Answers The Question Posed.<br /><br />

              SUPPORTING EVIDENCE: Evidence That Supports The Concept In The Thesis Statement.<br /><br />

              PAPER FORMAT AND GRAMMAR: The Essay Should Have A Beginning Middle And An End. It Should Also Utilize Proper Grammar Including Punctuation, Spelling Subject And Verb Usage.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
          <center><b>ARTICLE WRITING</b></center><br />
          [30 marks]<br /><br />
          <p>1.  You are a speaker in a debate on the motion:
The use of mobile phones in school by students should be banned. Write your contribution for or against the motion<br /><br />

            2. Your school performed very well in the inter-zonal athletics competition held recently. As Sports Prefect,
write a report on the competition to your headmaster.

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
                BELOW ARE SOME GUIDELINES THAT IF EMPLOYED AND REMEMBERED SHOULD AID THE STUDENT CONSTRUCT A GOOD ESSAY.<br /><br />

                TOPIC SENTENCE : Main Concept Of The Paragraph <br /><br />

                THESIS STATEMENT: Clear And Coherent Statement That Answers The Question Posed.<br /><br />

                SUPPORTING EVIDENCE: Evidence That Supports The Concept In The Thesis Statement.<br /><br />

                PAPER FORMAT AND GRAMMAR: The Essay Should Have A Beginning Middle And An End. It Should Also Utilize
                Proper Grammar Including Punctuation, Spelling Subject And Verb Usage.
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
