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

    <center><h2 class="mt-4">2009 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

 1.(a) Narrate the covenant God made with Abraham<br /><br /><br />

(b) What three lessons can be learnt from God’s covenant with Abraham?
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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(a) Introduction: A covenant is a solemn agreement binding two parties. A covenant usually has
obligations and /or conditions that must be done/ satisfied by both parties<br /><br />

The covenant God made with Abraham<br />
– God commanded Abram t to leave his country and extended family and move to a place God will show him<br />
– God promised to make him great and have many descendants who will become a great nation<br />
– God also promised to bless those who are good to him (Abram) and curse those who do him wrong<br />
– Abram was seventy-five years old at this time.<br />
– At another time (Gen.15), God appeared to Abram again in a vision and asked him not to be afraid because he will keep him safe and reward him greatly<br />
– Abraham however was worried that his servant Eliezer will inherit his property, since he had no child as at that time.<br />
– God then promised to give him his own child and also descendants as numerous as the stars<br />
– Abraham believed what God said and it was accounted to his as righteousness<br />
– God then asked Abraham to perform an animal offering using a cow, a female goat, a sheep (each 3 years old) and a young pigeon, which he obeyed<br />
– Abram fell asleep afterwards and dreamt that his descendants would be strangers and later, slaves in a foreign land (Egypt) for 400 years and afterwards, come out of that country with great substance<br />
– God then promised Abram long life and a peaceful death<br />
– God once again revealed himself as the Almighty God (El Shaddai) to Abram when he was 99 years old<br />
– God commanded Abram to live an upright and blameless life<br />
– God repeated his promise to make Abram fruitful and great and a father of a great nation.<br />
– God added another promise that his descendants will possess the land, Canaan, in
 which he’s stranger.<br />
– God asked Abraham to circumcise (cut off the foreskin of the male organ of) every male that shall be born in his house on the 8th day<br />
– God promised that Sarai shall bring forth a son for Abram and that their descendants will be kings / royals.<br />
– God changed Abram’s name to Abraham and Sarai’s to Sarah<br />
– God promised to bless Ishmael, who was Abraham’s first son and extend his covenant
 to Isaac<br />
– After this, Abraham obeyed God and circumcised all the male people in his household including himself<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(b) Lessons that can be learnt from God’s covenant with Abraham<br />
(i) God cares for his people and is deeply interested in their welfare<br />
(ii) God has wonderful blessings in store for his children who obey Him.<br />
(iii) We must fully submit to the will of God and obey Him promptly and completely just
as Abraham did<br />
(iv) We must have faith in God even when there’s no physical evidence or basis for our
faith.<br />
(v) With God, all things are possible (nothing is impossible with God)<br />
(vi) God rewards those who remain faithful to him.<br />
(vii) We must be patient with God and wait for him to fulfil his promises to us.<br />
(viii) God has a right time for the fulfilment of every promise he has made.<br />
(ix) Whatever we sow, we shall surely reap, no matter how long it takes.<br />
(x) How we live our lives can affect our children / descendants, either positively or
negatively.<br />
(xi) The promises of God are mostly conditional – i.e., they happen only when his people
satisfy the conditions<br />
(xii) God is steadfast in His love for His children<br />
(xiii) God has a definite / specific purpose for each of His children.<br />
(xiv) God requires His children to obey and trust in Him.<br />
(xv) No matter how long it may take, God’s promise will surely be established / fulfilled.<br />
(xvi) No situation is permanent – how things are today does not mean that is how things
will be tomorrow.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.
(a) Write on libation as a traditional means of worship<br /><br /><br />

(b) Mention three purposes of traditional worship

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

(a) Libation as a traditional means of worship<br />

– Libation is the pouring out of special liquids, especially alcoholic beverages, to a deity or the ancestors<br />
– Libation is a way by which people pray to a deity<br />
– Libation may be offered by an individual on his behalf alone or on behalf of a group of people<br />
– Libations are usually offered at festivals, naming ceremonies, engagements, marriage ceremonies, etc<br />
– Those who qualify to offer libation include family heads, linguists, chiefs, fetish priests, etc<br />
– Libation is offered to the ancestors, lesser gods and spirits and to the Supreme God<br />
– The one who offers the libation must remove his hat and footwear as a sign of respect to the deity or ancestors and stands in front of the other members of the praying group<br />
– The prayers are said aloud to the hearing of all those present<br />
– The right hand is used in the offering of libation<br /><br />
– The following procedures are followed:<br />
– Prelude: the capturing of the attention / consent of the objects of worship<br />
– Invocation: the spirits are invoked through rendering appellations and praise<br />
– Petition: petitions / requests are made unto the deity / ancestor to which the prayers are being rendered<br />
– Conclusion: Usually marked by request for curses upon enemies and blessings upon sympathizers<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

(b) Purposes of traditional worship<br />

(i) To offer thanksgiving and praises to the objects of worship (Supreme God, lesser gods, ancestors, etc)<br />
(ii) To strengthen the bond between the worshipper and the object of worship<br />
(iii) To express the worshipper’s faith and confidence in the deities (Supreme God, lesser gods, certain spirits)<br />
(iv) To show reverence / honour for the deities / object of worship<br />
(v) To seek protection / security from the deities<br />
(vi) To request for blessings – favour, success, prosperity, riches, strength, etc<br />
(vii) To confess their evil deeds / wrongdoings and seek forgiveness<br />
(viii) It promotes unity, solidarity and harmony among the members of the community<br />
(ix) It encourages spiritual growth and progress<br />
(x) It shows dependence on the deities for well-being and life
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
               3.
(a) Describe how fasting is performed during Ramadan<br /><br /><br />

(b) State four benefits of fasting in Ramadan
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
a) How fasting is performed during Ramadan<br />
Introduction:<br />
Fasting means to totally abstain from food, alcohol, sex and smoking before dawn till sun set
during the month of Ramadan
Ramadan is the ninth month on the Islamic calendar. It is the 4th of the five pillars of Islam<br /><br />

Description<br />
(i) All adults Muslims are obligated to fast for all the 29 or 30 days of the month of
Ramadan<br />
(ii) Young children, the aged, the sick are exempted from the fast<br />
(iii) The fasting Muslim abstains from food, alcohol, sex and smoking throughout the day– from before sunrise till after sunset.<br />
(iv) The Muslim rises very early in the morning about an hour or two before fajr (the pre- dawn prayer)<br />
(v) He / she prepares for Suhoor, the pre-dawn meal before the Fajr prayer.<br />
(vi) He / she may also do some reading or listening to readings from Islamic books about the virtues of Ramadan. About two units of night prayer may also be performed before Suhoor.<br />
(vii) The family takes the early morning / pre-dawn meal (the Suhoor)<br />
(viii) The few minutes before the break of dawn is spent performing ablution, to prepare for the dawn prayer, Fajr<br />
(ix) The fast begins with the rendering of the dawn prayer, fajr.<br />
(x) fasting Muslims are expected to stay calm, avoid quarrels, avoid unnecessary chatting and shun all forms of evil<br />
(xi) Fasting Muslims are expected to go about their normal duties, but must not exert themselves too much.<br />
(xii) The fasting Muslims must stay in a prayerful and meditative mood and recite the
Quran as much as possible throughout the day.<br />
(xiii) Islamic leaders read out portions of the Quran and teach / preach throughout the day.<br /> (xiv) The fasting Muslim is expected to perform good deeds, such as providing for the
poor, carrying out charitable activities, etc, in the course of the fast.<br />
(xv) The fast is broken in the evening with a meal (the Iftar) after sunset<br />
 (xvi) The fourth Prayer, the Maghrib, is offered just after the evening meal.<br />
  (xvii) The fifth and last prayer, Isha, is offered as the last activity of the day<br />
(xviii) The fasting Muslim is expected to sleep early, ie, just after the fifth prayer, in order to wake up early to prepare for the day.<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

(b) Benefits of fasting in Ramadan<br /><br />

(i) It makes the fasting Muslim thank and praise God for his goodness<br />
(ii) It encourages a sense of equality among all mankind<br />
(iii) It creates the opportunity for the Muslim to give more to the poor (Zakat)<br />
(iv) It provides the chance to confess sins and ask for forgiveness<br />
(v) It promotes total submission to the will of Allah<br />
(vi) It enables the fasting Muslim to seek God’s protection and guidance<br />
(vii) It cultivates the virtue of self-control in the fasting Muslim.<br />
(viii) It makes the physical body healthier as it takes a rest from the continuous digestion of foods<br />
(ix) It helps to guard against sin and wrongdoing<br />
(x) It gives the opportunity to ask for Allah’s blessings and favour<br />
(xi) It enables one to purify him/herself<br />
(xii) It strengthens the fasting Muslims? relationship with God.<br />
(xiii) It enables him/ her to grow spiritually<br />
(xiv) It promotes the study, meditation and recital of the Quran.
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>4.
(a) List five deeds that constitute examination malpractice<br /><br /><br />

(b) State two reasons why such activities are unacceptable in society.

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
(a) Deeds that constitute examination malpractice<br />

(i) Asking another candidate a question during examination<br />
(ii) Teaching / helping a co-candidate during examination<br />
(iii) Receiving answers to exam questions from a candidate or an invigilator<br />
(iv) Someone writing the examination for another person<br />
(v) Copying another candidates answers<br />
(vi) Allowing a candidate to copy one’s answer<br />
(vii) Chatting with another candidate during examination<br />
(viii) Discussion of questions / answers during the examination<br />
(ix) Writing after the instruction for stopping work has been given<br />
(x) Knowing the questions of a paper before the examination starts<br />
(xi) Turning over to a new section / part of the question paper before being told to do so.<br />
(xii) Answering questions, writing before being told to do so<br />
(xiii) Writing on any other material except the given ones (question papers and answer sheets)<br />
(xiv) Possessing / using a mobile phone while examination is in progress<br />
(xv) Standing / stretching with the intention of copying from another person<br />
(xvi) Making any kind of noise to disturb, while examination is in progress<br />
(xvii) Bringing materials that are not allowed (such as calculator, pieces of notes, etc) into the examination room.<br />
(xviii) Exchanging papers (whether question or answer) during examination<br />
(xix) Taking an examination answer sheet out of the examination room<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(b) Reasons why such activities are unacceptable in society.<br />
(i) It defeats the very purpose of examination<br />
(ii) It leads to a wrong assessment / evaluation of a candidate’s performance<br />
(iii) They are against the laws of the state and rules/ regulations of the examination council
/ school.<br />
(iv) It deceives the candidate into believing that he / she is academically better (or worse)
than what he/ she actually is<br />
(v) It makes a section of the candidates gain unfair advantage over others.<br />
(vi) It destroys the reputation of the pupil, his/her school / parents / family / community /
sponsor and even the nation in general<br />
(vii) It gradually cultivates an attitude of laziness in pupils / students, knowing very well they can always cheat their way to success.<br />
(viii) Certificates issued by the examination body may lose its value / weight.<br />
(ix) It can lead to the cancellation of examination results<br />
(x) Students can be given a suspension (barred from writing exam)<br />
(xi) It creates a false impression about the prevailing standards of education in the country<br />
(xii) It causes wrong placements of students in schools and courses.<br />
(xiii) It can cause the student to develop a low self-esteem of him/ herself<br />
(xiv) It can lead to fatal incidents such as collapsing, heart attack, suicide, etc
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5.
(a) State four reasons why good manners are important in your community.<br /><br /><br />

(b) Identify four ways of showing decency in dressing.
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

(a) Reasons why good manners are important in your community.<br />
(i) They promote peace, unity and good neighbourliness<br />
(ii) They create the room for one to receive help from others<br />
(iii) They cause one to receive blessings from God<br />
(iv) They bring honour and respect to the home / school / church / community that one is coming from<br />
(v) They help to reduce tension and conflicts in the society.<br />
(vi) They make it easier for the one possessing it to progress in life.<br />
(vii) They enable people to gain the respect and trust of others<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

(b) Ways of showing decency in dressing.<br />

(i) Wearing clothes that are suitable for the occasion or place<br />
(ii) Wearing clean, unscented and neatly ironed clothes<br />
(iii) Boys and girls tucking in their shirts and blouses (ie, the ones that must be tucked in)<br />
(iv) Wearing well-polished / well-cleaned footwear<br />
(v) Wearing clothes which cannot be seen through (especially girls)<br />
(vi) Combing / brushing one’s hair neatly<br />
(vii) Wearing clothes that sufficiently cover the body (especially girls)<br />
(viii) Wearing trousers or shorts at/ above the waist line (especially boys)<br />
(ix) Putting on a pair of socks, if wearing shoes (full)<br />
(x) Wearing belt, especially when belt holes are provided
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6.(a) Explain the term commitment<br /><br /><br />

(b) Indicate five ways by which one can show commitment to friends

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
(a) Commitment<br />

Giving oneself completely to a person or a cause
Or<br />
Devoting oneself to a person, or group or thing, especially if that person, or group or thing is worthwhile<br /><br />

We show commitment when we<br />
– Perform our responsibilities willingly<br />
– Share our resources to help the person or group or thing<br />
– Enter into agreement / covenants with the other party<br />
– Share the other parties joy, sorrow, successes and failures<br />
– Share the interests of the other party and contribute to their welfare<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

(b) Ways by which one can show commitment to friends<br />
(i) Sharing ideas, skills and knowledge with them<br />
(ii) Helping them in times of difficulty<br />
(iii) Sharing our items with them whenever they need it<br />
(iv) Defending them when they are in trouble<br />
(v) Correcting them in a nice way when they go wrong<br />
(vi) Sharing our secrets with them<br />
(vii) Being entirely truthful with them<br />
(viii) Praying for them<br />
(ix) Advising them to stay away from wrong-doing<br />
(x) Apologizing to them whenever we wrong them<br />
(xi) Forgiving and encouraging them when they do us wrong<br />
(xii) Helping them to do their house work<br />
(xiii) Visiting / communicating wit them regularly to check on them<br />
(xiv) Tolerating and respecting dissenting views from them

 
 
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
7.
(a) State four causes of bribery and corruption.<br /><br /><br />

(b) Give four reasons why it is wrong to give bribe.
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

(a) Causes of bribery and corruption.<br />

(i) Low wages and salaries<br />
(ii) Greediness (or greed)<br />
(iii) Lack of sympathy for others<br />
(iv) Extravagant lifestyle<br />
(v) Wanting to show off<br />
(vi) Financial difficulties<br />
(vii) Low standards of morality<br />
(viii) Poverty / unemployment<br />
(ix) Ignorance<br />
(x) Low self esteem<br />
(xi) Pressure from peer group / family or society<br />
(xii) Excessive bureaucracy<br />
(xiii) Habitual practice<br />
(xiv) Lack of respect for God and man<br />
(xv) Cultivation of the get-rich-quick attitude<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
b) Reasons why it is wrong to give bribe.<br />

(i) It is a sin against God<br />
(ii) It is an offence against the state<br />
(iii) It can lead to ones arrest and imprisonment<br />
(iv) It lowers ones reputation / dignity<br />
(v) It creates injustice in the society<br />
(vi) It gives one an undue advantage in a situation<br />
(vii) It promotes partiality<br />
(viii) It can lead to shame and disgrace when caught<br />
(ix) It reduces ones self worth<br />
(x) It creates conflicts and instability in our institutions<br />
(xi) It leads to lower productivity<br />
(xii) It cultivates an attitude of laziness in people<br />
(xiii) It can promote the misuse of state resources<br />
(xiv) It creates inefficiencies within our systems<br />
(xv) It denies justice to those whose rights have been abused<br />
(xvi) It creates opportunities for the perpetuation of social vices
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 

8.
(a) Mention four reasons why money should be kept out of children’s reach<br /><br /><br />

(b) In what four ways do people misuse money in your community?


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
(a) Reasons why money should be kept out of children’s reach<br />

(i) They can destroy it (currency notes)<br />
(ii) They can misplace it<br />
(iii) They can put it in their mouth / swallow the money, which can be very dangerous<br />
(iv) They can deface the currency notes<br />
(v) To avoid early familiarity with money. This can make them greedy or lovers of money<br />
(vi) To prevent the cultivation of the habit of picking money without asking (pilfering /stealing)<br />
(vii) To prevent the attack of diseases and infections on children<br /><br /><br />

DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
(b) Ways in which do people misuse money in your community<br />

(i) Gambling – lotteries, raffles, betting, etc<br />
(ii) Over spending on certain social ceremonies, such as funerals, weddings, naming ceremonies, birthday parties<br />
(iii) Impulse buying – of thing they may not really need or have not budgeted for<br />
(iv) Buying expensive things in order to show off<br />
(v) Starting projects which never gets completed, thereby wasting the money<br />
(vi) Giving bribes in order to corrupt the system and gain some favour<br />
(vii) Paying huge sums of monies to so-called „visa contractors?, many of whom end up
defrauding them.<br />
(viii) Burying dead people with money, based on the belief that they might need it on their journey to the world of the dead.<br />
(ix) Spending huge amounts of money on expensive entertainment shows and other social activities which do not profit much.<br />

 
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
