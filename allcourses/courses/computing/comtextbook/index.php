 <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Bernard Dwamena, Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <title> Computing TextBook · Eduqii v2.0</title>
    <link rel="shortcut icon" href="../../../images/favicon.ico">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/cheatsheet/">

    

    <!-- Bootstrap core CSS -->
<link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">

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
      .mark1 {
        background: yellow;
        color: black;
      }
      #figure1{
        float: left;
        padding: 5px;
      }
      #figure2{
        float: left;
        padding: 5px;
      }
      .column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
    </style>

    
    <!-- Custom styles for this template -->
    <link href="cheatsheet.css" rel="stylesheet">
  </head>
  <body class="bg-light">
    
<header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
  <div class="container-fluid d-flex align-items-center">
    <h1 class="d-flex align-items-center fs-4 text-white mb-0">
      <img src="assets/brand/maths-logo.jpg" width="38" height="30" class="me-3" alt="Bootstrap">
      Computing 
    </h1>
    <a href="../compastquestions/years/index.php" class="ms-auto link-light" hreflang="ar"><span style="font-variant: small-caps; text-decoration: none; ">Past Questions</span></a>
  </div>
</header>
<aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
  <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
   <h2 class="h6 pt-4 pb-3 mb-4"><a href="">Calculator</a></h2>
  <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">Table of Contents</h2>
  <nav class="small" id="toc">
    <ul class="list-unstyled">
      <li class="my-2">
        <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#overview-collapse" aria-controls="overview-collapse"><span style="color: #FF5733;">Overview</span></button>
        <ul class="list-unstyled ps-3 collapse" id="overview-collapse">
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#intro-collapse" aria-controls="intro-collapse">Introduction to Computing</button>
          <ul class="list-unstyled ps-3 collapse" id="intro-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Components of Computers and Computer Systems</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Technology in the Community</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Health and Safety in Using ICT Tools</a></li>
          </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#productivity-collapse" aria-controls="productivity-collapse">Productivity Software</button>
          <ul class="list-unstyled ps-3 collapse" id="productivity-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Introduction to Word Processing</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Introduction to Presentation</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Introduction to Desktop Publishing</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Introduction to Electronic Spreadsheet</a></li>
          </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#communicationNetwork-collapse" aria-controls="communicationNetwork-collapse">Communication Networks</button>
          <ul class="list-unstyled ps-3 collapse" id="communicationNetwork-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Computer Networks</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Internet and Social Media</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Information Security</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Web Technologies</a></li>
          </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#computation-collapse" aria-controls="computation-collapse">Computational Thinking</button>
          <ul class="list-unstyled ps-3 collapse" id="computation-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Introduction to Programming</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Algorithm</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Robotics</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Artificial Intelligence</a></li>
          </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#nature-collapse" aria-controls="nature-collapse">What is the nature of ICT</button>
          <ul class="list-unstyled ps-3 collapse" id="nature-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#nature">Science, Technology and Society</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#disabled-forms">Ethics of Technology</a></li>
          </ul>    
          </li>
          <li><a class="d-inline-flex align-items-center rounded" href="#tables">Data representation and processing</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#figures">Communication with graphics</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#figures">Audio visual communication</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#figures">Educational application for learning your subjects</a></li>
        </ul>
    <ul class="list-unstyled">
      <li class="my-2">
        <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse"><span style="color: #FF5733;">Level 1</span></button>
        <ul class="list-unstyled ps-3 collapse" id="contents-collapse">
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level1nature-collapse" aria-controls="level1nature-collapse"><span style="color: #FF5733;">What is the nature of ICT level 1</button>
            <ul class="list-unstyled ps-3 collapse" id="level1nature-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">How is a computer different from a fridge</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">What at all can a computer do.</a></li>
        </ul>
          </li>
          <li>
            <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level1data-collapse" aria-controls="level1data-collapse"><span style="color: #FF5733;">Data representation and processing level 1</button>
            <ul class="list-unstyled ps-3 collapse" id="level1data-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Data can tell stories</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">How to make data meaningful</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">A concept map of my data</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Making a text document</a></li>
        </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level1com-collapse" aria-controls="level1com-collapse"><span style="color: #FF5733;">Communication with graphics level 1</button>
            <ul class="list-unstyled ps-3 collapse" id="level1com-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Photo and image essays</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Tell a story</a></li>
        </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level4-collapse" aria-controls="level4-collapse"><span style="color: #FF5733;">Educational applications</button>
            <ul class="list-unstyled ps-3 collapse" id="level4-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Help build your vocabulary with Kanagram</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Explore maths with Geogebra Level 1</a></li>
        </ul>
          </li>
        </ul>
      </li>
      <li class="my-2">
        <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse"><span style="color: #FF5733;">Level 2</span></button>
        <ul class="list-unstyled ps-3 collapse" id="forms-collapse">
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level2nature-collapse" aria-controls="level2nature-collapse"><span style="color: #FF5733;">What is the nature of ICT level 2</button>
            <ul class="list-unstyled ps-3 collapse" id="level2nature-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">When did it all begin</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">The human story behind the computer</a></li>
        </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level2data-collapse" aria-controls="level2data-collapse"><span style="color: #FF5733;">Data representation and processing level 2</button>
            <ul class="list-unstyled ps-3 collapse" id="level2data-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Columns and rows</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Numbers and patterns</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Text document with data analysis.</a></li>
        </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level2comm-collapse" aria-controls="level2comm-collapse"><span style="color: #FF5733;">Communication with graphics level 2</button>
            <ul class="list-unstyled ps-3 collapse" id="level2comm-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Stories come alive with pictures</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Songs come alive with pictures</a></li>
        </ul>
          </li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level2audio-collapse" aria-controls="level2audio-collapse"><span style="color: #FF5733;">Audio visual communication level 2</button>
            <ul class="list-unstyled ps-3 collapse" id="level2audio-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Audio story telling</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Words and sounds to tell a story</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Make an audio book</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Make a read aloud audio visual book</a></li>
        </ul></li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level2edu-collapse" aria-controls="level2edu-collapse"><span style="color: #FF5733;">Educational applications</button>
            <ul class="list-unstyled ps-3 collapse" id="level2edu-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Explore maths with Geogebra Level 2</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Your desktop atlas with KGeography</a></li>
        </ul></li>
        </ul>
      </li>
      <li class="my-2">
        <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#components-collapse" aria-controls="components-collapse"><span style="color: #FF5733;">Level 3</span></button>
        <ul class="list-unstyled ps-3 collapse" id="components-collapse">
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level3nature-collapse" aria-controls="level3nature-collapse"><span style="color: #FF5733;">What is the nature of ICT level 3</button>
            <ul class="list-unstyled ps-3 collapse" id="level3nature-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">The machine is using us</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">The global digital library</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">I have a new address</a></li>
        </ul></li>
          <li><button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#level2edu-collapse" aria-controls="level2edu-collapse"><span style="color: #FF5733;">Data representation and processing level 3</button>
            <ul class="list-unstyled ps-3 collapse" id="level2edu-collapse">
          <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Spreadsheet for data analysis</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Multi page text document</a></li>
        </ul></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#badge">Badge</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#breadcrumb">Breadcrumb</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#buttons">Buttons</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#button-group">Button group</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#card">Card</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#carousel">Carousel</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#dropdowns">Dropdowns</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#list-group">List group</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#modal">Modal</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#navs">Navs</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#navbar">Navbar</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#pagination">Pagination</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#popovers">Popovers</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#progress">Progress</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#scrollspy">Scrollspy</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#spinners">Spinners</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#toasts">Toasts</a></li>
          <li><a class="d-inline-flex align-items-center rounded" href="#tooltips">Tooltips</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>
<div class="bd-cheatsheet container-fluid bg-white">
  <section id="content">
    <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Contents</h2>

    <article class="my-3" id="typography">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Typography</h3>
        <a class="d-flex align-items-center" href="../content/typography/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <!--<p class="display-1">Display 1</p>
        <p class="display-2">Display 2</p>
        <p class="display-3 ">Display 3</p>
        <p class="display-4">Display 4</p>
        <p class="display-5">Display 5</p>-->
        <p class="h5">What is Computing</p>
        <div class="bd-example">
        <p>
Have you ever seen anyone in your school or community or home use a phone? Have you ever withdrawn money from an ATM (Automated Teller Machines, also known as 'Any time money'), or seen someone get money from an ATM? You may have seen or helped someone book a gas cylinder refill through a phone. You may perhaps have booked a train ticket or booked Tirumala darshan on-line. You may have seen a movie on your computer or chatted with a friend or recorded a video with your phone. Have you ever wondered how these things are done? There is one thing that is common across all these things - the use of Information Communication Technologies, ICT. Before we understand what are ICT, look at the list below and identify all the words that you have heard of: As students, you may have been introduced to some or many of these terms in your school, in your family or in your neighbourhood. The cell phone tower, your nearest ATM, your mother's mobile phone, games, whatsapp chats, email, the selfie, internet, videos and songs on your computer - all these are examples of a new kind of ICT. These technologies are called digital technologies and they are changing the way we talk to each other, work with each other, and the way we do things. The computer is becoming like a television, the phone is becoming like a computer, you can use the computer to make voice calls, you can record a video with your phone, you can read your newspaper on the phone, and you can even paint with your computer! The technologies that make all these possible are collectively called ICT. <mark>Computing is any goal-oriented activity requiring, benefiting from, or creating computing machinery.</mark> It is any activity that uses computers to manage, process, and communicate information. It includes development of both hardware and software. ... Major computing disciplines include computer engineering, software engineering, computer science, information systems, and information technology.ICT refers to those set of technologies that help us create information, access information, analyze information and communicate with each other. Human beings have always accessed information and communicated, but what makes these present technologies special is their digital nature. You can read more about how ICT developed in the chapter on Science, Technology and Society.        </p>
        </div>
        
        <p class="h6">We live in an information society</p>
        <p>Look at the pictures below and discuss with your friends and teacher.</p>
        </div>

        <div id="figure1">
        <figure class="figure" id="figure1">
        <img src="../../../images/termitehunt.jpg" class="figure-img img-fluid rounded" alt="A monkey fishing for termites" width="300" height="300">
        <figcaption class="figure-caption">A monkey fishing for termites. <br />source: google.com</figcaption>
        </figure>
        <p>What is this bonobo doing - can you guess? You are correct! It is "fishing" for termites from an ant hill. Did you think only human beings can fish? When it was first discovered in the 1920s that chimpanzees can make tools, all over the scientific community, people were amazed. This was because human beings were defined as the species which makes tools for use. Dr Louis Leakey, a famous primatologist said " We have to define what is a tool, or we have to define what is a human being or we have to accept that chimpanzees are human beings!".</p>
        </div>

        <div id="figure2">
        <figure class="figure" id="figure1">
        <img src="../../../images/googlecar.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="In 2009, Google started the self-driving car project with the goal of driving autonomously over ten uninterrupted 100-mile routes. In 2016, Waymo, an autonomous driving technology company, became a subsidiary of Alphabet, and Google's self-driving project became Waymo." width="300" height="300">
        <figcaption class="figure-caption">Google driverless car. <br /> source: time.com, time magazine</figcaption>
        </figure>
        <p>What is special about this car? Did you guess? Yes, it has no driver. When you drive, you gather information about the road, other vehicles, people, animals and weather and you operate the controls. Gathering information, processing, analyzing and acting, has been a defining characteristic of the human species. If a car can now do this, does it make the car a human being? What makes a human being special</p>
        </div>
        <!--<div class="bd-example">
        <p class="h1">Heading 1</p>
        <p class="h2">Heading 2</p>
        <p class="h3">Heading 3</p>
        <p class="h4">Heading 4</p>
        <p class="h5">Heading 5</p>
        <p class="h6">Heading 6</p>
        </div>-->

        <div class="bd-example">
        <p class="lead">
          Today's society is called the information society. To see why, let us think of a small activity.
        </p>
        <p> 
          Let us say you are withdrawing money from a nearby ATM. Can you make a list of all the things you need to do for that? You need your account number, your PIN and you need to enter the amount of money. When you put your card in the machine, it verifies your PIN, collects information about your bank account, the bank and the balance amount. The ATM machine does all of this, connects with yout bank and allows you to withdraw the money. So many things we do now are based on information. Many devices - mobile phones, television, computers, tablets, cameras, scanners, collectively called ICTs, have made this possible. How we collect information, how we analyze it, how we communicate the information and how we use the information to make decisions are all very important. ICT and broadly digital technologies are changing the way we do things, thus making today's society an information society. You may be familiar with the computer but now ICT have moved far beyond the computer alone. As students you have to learn ICT to build your skills for functioning in the information society.
        </p>
        </div>

        <div class="bd-example">
        <!--<p>You can use the mark tag to <mark class="mark1">highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>-->
        <p><em>What can you expect to learn?</em></p>
        <p>ICT can help you create music, write poetry, learn mathematics or make videos. ICT can also help you in communicating with each other and learning together. This textbook has been developed to introduce you to all these possibilities. In this new subject called ICT, we can expect to learn about ICT and how to work with ICT; this will be covered over a 3 year period.</p>
        <p><strong>What is the nature of ICT</strong></p>
        <p>We saw in the previous chapter about how ICT are part of many things we do; and how they have changed the way we are working, learning and even playing. What is it about ICT that allow such changes to happen? Let us consider the following pictures</p>
        <div id="figure1">
        <figure class="figure" id="figure1">
        <img src="../../../images/vidteacher.png" class="figure-img img-fluid rounded" alt="A monkey fishing for termites" width="300" height="300">
        <figcaption class="figure-caption">Teacher and students in a video conference<br />source: lpsav.com</figcaption>
        </figure>
        <p>Look at this picture and make a list of words that come into your mind when you see the pictures. Also describe what you see in the setting. What did you come up with? Discuss these with your friends and teachers.</p>
        </div>

        <div id="figure2">
        <figure class="figure" id="figure1">
        <img src="../../../images/elearning.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="In 2009, Google started the self-driving car project with the goal of driving autonomously over ten uninterrupted 100-mile routes. In 2016, Waymo, an autonomous driving technology company, became a subsidiary of Alphabet, and Google's self-driving project became Waymo." width="300" height="300">
        <figcaption class="figure-caption">Learning to read with a tablet. <br /> source: familyminded.com</figcaption>
        </figure>
        <p>Look at this picture and make a list of words that come into your mind when you see the pictures. Also describe what you see in the setting. What did you come up with? Discuss these with your friends and teachers.</p>
        </div>
        <p>Look at these pictures and make a list of words that come into your mind when you see the pictures. Also describe what you see in the setting. What did you come up with? Discuss these with your friends and teachers.</p>

        <div class="row">
          <div class="column">
            <figure class="figure">
            <img src="../../../images/camerashoot.jpg" alt="Photojournalism" style="width:100%">
            <figcaption class="figure-caption"> Photo journalism <br />source: pinterest.com</figcaption>
          </figure>
          </div>
          <div class="column">
            <figure class="figure">
            <img src="../../../images/animationlearning.jpg" alt="Learning animation" style="width:100%">
            <figcaption class="figure-caption"> Learning animation <br /> source: google.com</figcaption>
          </figure>
          </div>
          <div class="column">
            <figure class="figure">
            <img src="../../../images/womanwithaphone.jpg" alt="Mountains" style="width:100%">
            <figcaption class="figure-caption"> Woman with a Cellphone <br /> source: BORGEN Magazine</figcaption>
          </div>
        </div>
        </div>

        <div class="bd-example">
        ICT can help you:
        <ol>
          <li>Create your own drawings</li> 
          <li> Talk to people - through audio or video </li> 
          <li> Make videos</li> 
          <li> Access information in different ways</li> 
          <li> Is there any more you can think of?</li> 
        </ol>
        </div>

        <div class="bd-example">
        <p>To do these things, you use ICT devices including a mobile phone, a computer, camera and many more. Ask your teacher or parent or other older members in your neighbourhood when was the first time they saw a computer or a phone or TV. People may tell you about how they communicated or did things in the days before the phone. It may be very hard for you to imagine but ICT (and all other technologies) were not always there - they got developed over time.</p>
        <p>As you studied ICT, you may also have guessed one more thing - they need to be connected. Internet is a set of computers connected with one another. How these help in doing the various things we will see later on in this unit. In this unit, you will learn about what is ICT, how ICT developed and how we need to work with ICT for all of us to benefit.</p>
        </div>

        <div class="bd-example">
        <h5>Information and communication technologies (ICTs)</h5>
        <p>Information is not new for human beings; communication has been known since the time human beings lived in caves. Thus ICT are as old as human beings themselves; human beings needed to communicate with one another, beginning with symbolic (non verbal) ways, before language was invented. The language we speak could be seen as first 'ICT', it enabled (oral) communication amongst human beings. Writing and script was the next technological advancement - around 5000 years ago - which enabled information could be created and communicated at different times and in a different place. Oral communication does not have this benefit, Writing also enabled easier recording of human history and thus the invention of script was a landmark in the history of ICTs. Next came printing which made it possible replicate writing. The invention of radio and television was the next advancement in ICT as it became possible for more and more people to access information.</p>
        <p>Thus, the technology for information creation and communication has been changing, connected with the advancements in scientific knowledge. Changes happened in the way computing evolved and changes happened in the way communication technology evolved, each impacting the other to produce the ICT environment we are now in; and which is still changing rapidly.</p>
        <div class="col">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>

                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Growth of ICT can be seen to be broadly in terms of 4 ages</h5>
                    <p class="card-text">
                      <ul><li><strong>Four basic periods</strong></li></ul>
                    Characterized by a principal technology used to solve the <b>input, processing, output and communication problems</b> of the time:
                      <ol>
                      <li>premechanical</li>
                      <li>mechanical</li>
                      <li>electromechanical</li>
                      <li>electronic</li>
                    </ol>
                    While technology for information creation, storage and processing has been developing continuously, one important development which changed the course of technology is the development of digital technologies in the electronic area. Whereas during the electromechanical area, information was stored largely in analog formats. During the electronic age, information was stored in analog and digital formats
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div><br />
          <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h3>A History of Information Technology and Systems.</h1> 
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <h5><ol type="A"><li>The Premechanical Age: 3000 B.C. - 1450 A.D.</li></ol></h5>
                <ol>
                <li><b>Writing and Alphabets--communication.</b>
                  <ol>
                    <li>First humans communicated only through speaking and picture drawings.</li>
                    <li>3000 B.C., the Sumerians in Mesopotamia (what is today southern Iraq) devised</li> cuniform
                    <li>Around 2000 B.C., Phoenicians created symbols</li>
                  </ol>
                </li>
                <li><b>Paper and Pens--input technologies.</b>
                  <ol>
                    <li>Sumerians' input technology was a stylus that could scratch marks in wet clay.</li>
                    <li>About 2600 B.C., the Egyptians write on the papyrus plant</li>
                    <li>around 100 A.D., the Chinese made paper from rags, on which modern-day papermaking is based.</li>
                  </ol>
                </li>
                <li><b>Books and Libraries: Permanent Storage Devices.</b>
                  <ol>
                    <li>Religious leaders in Mesopotamia kept the earliest "books"</li>
                    <li>The Egyptians kept scrolls</li>
                    <li>Around 600 B.C., the Greeks began to fold sheets of papyrus vertically into leaves and bind them together.</li>
                  </ol>
                </li>
                <li><b>The First Numbering Systems.</b>
                  <ol>
                    <li>Egyptian system:
                      <ul type="square">
                        <li>The numbers 1-9 as vertical lines, the number 10 as a U or circle, the number 100 as a coiled rope, and the number 1,000 as a lotus blossom.</li>
                      </ul>
                    </li>
                      <li>The first numbering systems similar to those in use today were invented between 100 and 200 A.D. by Hindus in India who created a nine-digit numbering system.</li>
                      <li>Around 875 A.D., the concept of zero was developed.</li>
                  </ol>
                </li>
                <li>The First Calculators: The Abacus.
                  <center>
                  <figure class="figure">
                  <img src="../../../images/abacus.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="450" height="300">
                  <figcaption class="figure-caption">One of the very first information processors. <br /> source: wikipedia.org</figcaption>
                  </figure>
                </center>
                </li>
                </ol>
                <ol type="A" start="2">
                  <h5><li><b>The Mechanical Age: 1450 - 1840</b></li></h5>
                </ol>
                <ol type="1">
                  <li><b>The First Information Explosion</b>
                    <ol type="1">
                      <li>Johann Gutenberg (Mainz, Germany)
                        <ul type="square">
                          <li>Invented the movable metal-type printing process in 1450.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li><b>The first general purpose "computers"</b>
                    <ul type="circle">
                      <li>Actually people who held the job title "computer: one who works with numbers."</li>
                    </ul>
                  </li>
                  <li><b>Slide Rules, the Pascaline and Leibniz's Machine.</b>
                    <ul type="circle">
                      <li><b>Slide Rule</b></li>
                    <center>
                  <figure class="figure">
                  <img src="../../../images/sliderule.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="300" height="300">
                  <figcaption class="figure-caption">slide rule <br /> source: wikipedia.org</figcaption>
                  </figure>
                </center>
                  </li>
                  <li><b>The Pascaline.</b> Invented by Blaise Pascal (1623-62).</li>
                  <center>
                  <figure class="figure">
                  <img src="../../../images/pascalimage.jpg" class="figure-img img-fluid rounded" alt="image of Blaise Pascal" title="" width="300" height="200">
                  <figcaption class="figure-caption">Blaise Pascal <br /> source: tcf.ua.edu</figcaption>
                  </figure>
                  <figure class="figure">
                  <img src="../../../images/pascaline.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="300" height="200">
                  <figcaption class="figure-caption">Pascaline <br /> source: wikipedia.org</figcaption>
                  </figure>
                </center>
                  </ul>
                </ol>
                <ol type="A" start="3">
                  <h5><b><li>The Electromechanical Age: 1840 - 1940.</li></b></h5>
                </ol>
                <p><b>The discovery of ways to harness electricity was the key advance made during this period. Knowledge and information could now be converted into electrical impulses.</b></p>
                <ol type="1">
                  <li><b>The Beginnings of Telecommunication.</b>
                    <ol type="1">
                      <li><b>Voltaic Battery</b>
                        <ul type="square">
                          <li>Late 18th century.</li>
                        </ul>
                      </li>
                      <li><b>Telegraph.</b>
                        <ul type="square">
                          <li>Early 1800s.</li>
                        </ul>
                        <li><b>Morse Code.</b>
                          <ul type="square">
                            <li>Developed in 1835 by Samuel Morse</li>
                            <li>Dots and Dashes</li>
                          </ul>
                        </li>
                        <li><b>Telephone and Radio.</b>
                          <ul type="square">
                            <center>
                            <figure class="figure">
                  <img src="../../../images/telephoneHistory.gif" class="figure-img img-fluid rounded" alt="Google driverless car" title="telephone and radio">
                  <figcaption class="figure-caption">Telephone and Radio  source: tcf.ua.edu</figcaption>
                  </figure>
                </center>
                            <li>1876</li>
                          </ul>
                        </li>
                      </li>
                      <li>
                      Followed by the discovery that electrical waves travel through space and can produce an effect far from the point at which they originated.</li>
                      <li>These two events led to the invention of the radio
                        <ul type="square">
                          <li>Guglielmo Marconi</li>
                          <li>1894</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li><b>Electromechanical Computing</b>
                    <ol type="1">
                      <li><b>Herman Hollerith and IBM.</b></li>
                    </ol>
                    Herman Hollerith (1860-1929) in 1880.
                  </li>
                  <center>
                  <figure class="figure">
                  <img src="../../../images/hollerithDetail.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="300" height="200">
                  <figcaption class="figure-caption">Early punch cards. <br /> source:  tcf.ua.edu</figcaption>
                  </figure>
                  <figure class="figure">
                  <img src="../../../images/hollerithDetail2.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="300" height="200">
                  <figcaption class="figure-caption">Early punch cards. <br /> source: tcf.ua.edu</figcaption>
                  </figure>
                </center>
                <center>
                <figure class="figure">
                  <img src="../../../images/punchCardWorkers.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="450" height="300">
                  <figcaption class="figure-caption">Punch card workers. <br /> source: tcf.ua.edu</figcaption>
                  </figure>
                </center>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                The First Computer Programmer
              </button>
            </h4>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <center>
                  <figure class="figure">
                  <img src="../../../images/adalovelace.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="300" height="200">
                  <figcaption class="figure-caption">Byron Ada Lovelace <br /> source: Wall Street Journal</figcaption>
                  </figure>
              </div>
            </div>
          </div>
        </div><br />
          <h5>Analog and digital technologies</h5>
          <h6>Impact on computing and development of computers</h6>
          <p>During the mechanical and electric analog phases of technology, information was created by a series of physical changes converted into electrical impulses for storing and machine, and each analog information storage required a specialized equipment to decode and read the information. A cassette player or a gramaphone disc is an example of such a device. Analog machines could be programmed for specific applications as well as for generalized computation. Representing information for computing using physical changes often meant that the results could not be accurate as the changes could not be replicated exactly.</p>
          <p>An important breakthrough came when the binary system was invented. In the binary system information can in a series of "0"s and "1"s thus allowing information to be accessed through only a combination of "1"s and "0"s. This allowed information to be communicated in discrete bits which could be combined and recombined. Such a computer which uses "0"s and "1"s to perform computations a digital computer. What makes our society now different from ever before is the presence of digital technologies. Combined with the development of new methods of designing circuits like transistors and micro chips, it became possible to design computers which performed computations using digital methods. This improved the reliability and ease of computations significantly over the analog machines. The digital electronics changed operations in many applications including manufacturing, however the impact on ICT has been almost revolutionary. This has led to the growth of computers as we know it - from large clunky computers to the computer on your desktop to the laptop and now the smart phone</p>
          <h6>Impact on communication technologies</h6>
          <p>What is the word that comes to your mind when you say communication? The phone, precisely the cell phone. We will now look at how the communication technologies evolved.</p>
          <h6>Radio communication</h6>
          <p>The earliest electronic communication devices functioned using radio technology. Many communication devices we know today also function through radio waves. Radio waves are electromagnetic waves. They carry energy through repeated propagation of electric and magnetic fields. Radio waves carry a certain amount of energy and can travel over large distances. When the wave reaches the destination, the receiver gets the amount of information. We cannot see radio waves but we can detect them by building receivers that can detect them. These are called as antennae. They scan the environment for radio signals and respond when they find a signal. They detect the radio signal by the effect of the changing electrical and magnetic fields. Frequency gives a measure of how fast the radio wave is being produced and depends on the source from where the radio waves start. Different radio waves come at different frequencies and we need to build transmitters that detect them. Sound is a pressure wave – when we produce a sound it travels by disturbing the air particles. If there is no medium, sound cannot travel. What happens when we hear something on a radio? Originally sound is produced and then it converted into radio waves. These waves are sent and received through instruments called antennae. When your radio antennae receives this radio wave, this is converted back into sound and is played.</p>
          <p><strong>Use of radio waves in astronomy : </strong>Radio waves are also produced by many celestial objects. By detecting the radio waves that travel through the atmosphere, it is possible to construct images of the astronomical objects . Radio waves can pass through dust and gas unlike light. Radio astronomy along with optical observation is allowing us to understand the universe better.
          </p>
          <p><strong>Telephone:</strong>
            Before the cell phone came, most of the long distance voice communication was through the regular telephone. This was based on the idea of travelling sound waves. They cause the mouthpiece to vibrate and this vibration is carried to the receiver at the other end. When a call came from one number, there will be an operator who sits at an office who will connect the call to another receiving number. Now this is different with automatic switches which connect the calls. The transmission of the signals has also become different now with voice being converted into electrical signals. All these transmissions used to happen through physical cables. These cables were either made of copper or optical fibres. When you make a phone call, the voice signals from your phone get transmitted through these fibres to the nearest telephone exchange and through a series of switches sent to the receiver. Usually the first few numbers in our telephone number indicates the exchange information. In the earlier days, long distance calls (outside of the local exchange) could only be made by booking a trunk call. The users had to 'book' or rent the line through which the call can be made and this used to be done manually by the telephone operators in the exchange. Now-a-days, with automatic switches, long distance calls can be made directly to any number, even outside the country
          </p>
          <p><strong>The cell phone:</strong>
            The telephone and the radio came together - And we call that the cell phone! We saw how a telephone works. We also saw what radio waves are and we have some idea of what frequencies mean. There are many frequencies available for the users to talk on. Any geographic area is divided into small plots, and in each area a fixed number of frequencies is used. Each of these areas are called cells. The cell phone is called a cell phone because it functions by dividing a geographical area into small plots or cells through which the transmission takes place. It is possible to make and receive calls when there is a cell phone tower near your area for receiving and sending that frequency. Now do you understand what we mean when we say 'my cell phone has no coverage here'? It is because of this also that cell phones sometimes do not work inside buildings when the radio signals are disturbed. Just like an exchange for regular telephone calls, there is a mobile switching that allows you to make calls even when you move from one cell to another! Can you make a list of all the things a cell phone does?
          </p>
          <p>A cell phone functions like a phone, a camera and a computer. Yet, it does all of this using a few components. If you open up a cell phone, you will see the following parts: 1. A circuit board : This is the brain of the cellphone and gives all the instructions to the phone. This contains a set of integrated circuits for giving instructions to the cell phone also. A computer has a similar circuit board also. 2. A keyboard : This is also very similar to the computer keyboard and you use the key board to operate the cell phone. 3. Display : This is similar to the computer monitor. Other parts include a microphone, antenna, speaker and a charger. One of the important parts of the cell phone is called the SIM card. The SIM card connects the phone to the network, your location. This helps the phone connect to a cell phone network and can also store phone numbers. It can be removed from one phone and put in any other cell phone.
          </p>
        </div>
      </div>
    </article>
    <article class="my-3" id="images">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Components of Computers and Computer Systems</h3>
        <a class="d-flex align-items-center" href="../content/images/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
          <h3>What is a computer?</h3>
          <figure class="figure">
        <img src="../../../images/personalcomputer.jpg" class="figure-img img-fluid rounded" alt="Google driverless car" title="" width="450" height="300">
        <figcaption class="figure-caption">A personal computer <br /> source: webopedia.com</figcaption>
        </figure>
        <p>A computer is any machine that can be programmed to carry out a set of algorithms and arithmetic instructions. </p>
        <p><mark class="mark1">A computer is an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.</mark></p>
        <p>Of course, the computers we think of today are so much more than that—and I’m talking beyond just being machines used to play games and watch videos of cats on the internet!</p>
        <p><strong>A computer system is made up of 4 main types of components:</strong></p>
        <ul>
          <li>Input Devices (keyboard, mouse etc)</li>
          <li>Output Devices (monitor, speakers etc)</li>
          <li>Secondary Storage Devices (hard disk drive, CD/DVD drive etc)</li>
          <li>Processor and Primary Storage Devices (cpu, RAM)</li>
        </ul>
        <figure class="figure">
        <img src="../../../images/computer_system.jpg" class="figure-img img-fluid rounded" width="450" height="400">
        <figcaption class="figure-caption"> main components of a computer system <br /> source: ictlounge.com</figcaption>
        </figure>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is computer full information?
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                A computer is a machine that can store and process information. Most computers rely on a binary system that uses two variables, 0 and 1, to complete tasks such as storing data, calculating algorithms, and displaying information.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What is a computer short definition
              </button>
            </h4>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                A computer is a machine that accepts data as input, processes that data using programs, and outputs the processed data as information. Many computers can store and retrieve information using hard drives.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What is the first computer
              </button>
            </h4>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Eniac Computer</strong> <br />

                The first substantial computer was the giant ENIAC machine by John W. Mauchly and J. Presper Eckert at the University of Pennsylvania. ENIAC (Electrical Numerical Integrator and Calculator) used a word of 10 decimal digits instead of binary ones like previous automated calculators/computers.
              </div>
            </div>
          </div>
        </div><br />

        <h4>System Components</h4>
        <p>A modern PC is both simple and complicated. It is simple in the sense that over the years, many of the components used to construct a system have become integrated with other components into fewer and fewer actual parts. It is complicated in the sense that each part in a modern system performs many more functions than did the same types of parts in older systems.</p>
        <p>Here are the components and peripherals necessary to assemble a basic modern PC system:</p>
        <ul>
          <li>Motherboard</li>
          <li>Processor</li>
          <li>Memory (RAM)</li>
          <li>Case/chassis</li>
          <li>Power supply</li>
          <li>Floppy drive</li>
          <li>Hard disk</li>
          <li>CD-ROM, CD-RW, or DVD-ROM drive</li>
          <li>Keyboard</li>
          <li>Mouse</li>
          <li>Video card</li>
          <li>Monitor (display)</li>
          <li>Sound card</li>
          <li>Speakers</li>
          <li>Modem</li>
        </ul>
        </div>

        <div class="bd-example">
        <table class="table table-sm table-bordered">
          <thead>
          <tr>
            <th scope="col">Component</th>
            <th scope="col"><center>Description</center></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Motherboard</td>
            <td>The motherboard is the core of the system. It really is the PC; everything else is connected to it, and it controls everything in the system.</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>The processor is often thought of as the "engine" of the computer. It's also called the CPU (central processing unit).</td>
          </tr>
          <tr>
            <td>Memory (RAM)</td>
            <td>The system memory is often called RAM (for random access memory). This is the primary memory, which holds all the programs and data the processor is using at a given time.</td>
          </tr>
          <tr>
            <td>Case/chassis</td>
            <td>The case is the frame or chassis that houses the motherboard, power supply, disk drives, adapter cards, and any other physical components in the system.</td>
          </tr>
          <tr>
            <td>Power supply</td>
            <td>The power supply is what feeds electrical power to every single part in the PC.</td>
          </tr>
          <tr>
            <td>Floppy drive</td>
            <td>The floppy drive is a simple, inexpensive, low-capacity, removable-media, magnetic storage device.</td>
          </tr>
          <tr>
            <td>Hard drive</td>
            <td>The hard disk is the primary archival storage memory for the system.</td>
          </tr>
          <tr>
            <td>CD-ROM/DVD-ROM</td>
            <td>CD-ROM (compact disc read-only) and DVD-ROM (digital versatile disc read-only) drives are relatively high-capacity, removable media, optical drives.</td>
          </tr>
          <tr>
            <td>Keyboard</td>
            <td>The keyboard is the primary device on a PC that is used by a human to communicate with and control a system.</td>
          </tr>
          <tr>
            <td>Mouse</td>
            <td>Although many types of pointing devices are on the market today, the first and most popular device for this purpose is the mouse.</td>
          </tr>
          <tr>
            <td>Video card</td>
            <td>The video card controls the information you see on the monitor.</td>
          </tr>
          <tr>
            <td>Monitor</td>
            <td>A computer monitor is an output device that displays information in pictorial form.</td>
          </tr>
          <tr>
            <td>Sound card</td>
            <td>It enables the PC to generate complex sounds.</td>
          </tr>
          <tr>
            <td>Modem</td>
            <td>Most prebuilt PCs ship with a modem (generally an internal modem). A modem modulates and demodulates electrical signals sent through phone lines, coaxial cables, or other types of wiring; in other words, it transforms digital information from your computer into analog signals that can transmit over wires, and it can translate incoming analog signals back into digital data that your computer can understand.</td>
          </tr>
          </tbody>
        </table>
        <h4>What can ICT do</h4>
        <h5>ICT have changed the society</h5>
        <p>Look around you - can you make a list of things that have digital technologies involved in them? Yes, that is right. Starting from the computer in your school, television, movies, videos and other materials for subject learning mobile communication, Aadhar card, land records, bank accounts, pension accounts and so many more things, ICT have become integrated into society in many ways. ICT can create information in so many different ways - maps, audio, video, text, numeric data. How we are able to generate information means more and more possibilities of knowledge creation and sharing. ICT have brought together people, made it possible to learn in different ways. How we learn and what is needed to be learnt have become different. For example, we no longer need to learn about a withdrawal slip, we need to know how to use the ATM. Your teacher can now take a video of a class in your school and share it. There is a great convergence of many technologies that is happening, a mobile is approaching the computer, the internet taking over. If so many things are impacted by ICT, it is important to understand how these work, and how they should be used ethically and safely. Technology should be treated like a common resource where everyone can access it, interact with it, benefit from it and contribute to it. It should be used such that more and more people can get access in society should be treated like a public information good.</p>
        </div>
      </div>
    </article>
    <article class="my-3" id="tables">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Tables</h3>
        <a class="d-flex align-items-center" href="../content/tables/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>
        </div>

        <div class="bd-example">
        <table class="table table-dark table-borderless">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>
        </div>

        <div class="bd-example">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          
          <tr class="table-primary">
            <th scope="row">Primary</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-secondary">
            <th scope="row">Secondary</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Success</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">Danger</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-warning">
            <th scope="row">Warning</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-info">
            <th scope="row">Info</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-light">
            <th scope="row">Light</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr class="table-dark">
            <th scope="row">Dark</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          </tbody>
        </table>
        </div>

        <div class="bd-example">
        <table class="table table-sm table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    </article>
    <article class="my-3" id="figures">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Figures</h3>
        <a class="d-flex align-items-center" href="../content/figures/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <figure class="figure">
          <svg class="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text></svg>

          <figcaption class="figure-caption">A caption for the above image.</figcaption>
        </figure>
        </div>
      </div>
    </article>
  </section>

  <section id="forms">
    <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Forms</h2>

    <article class="my-3" id="overview">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Overview</h3>
        <a class="d-flex align-items-center" href="../forms/overview/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <fieldset class="mb-3">
            <legend>Radios buttons</legend>
            <div class="form-check">
              <input type="radio" name="radios" class="form-check-input" id="exampleRadio1">
              <label class="form-check-label" for="exampleRadio1">Default radio</label>
            </div>
            <div class="mb-3 form-check">
              <input type="radio" name="radios" class="form-check-input" id="exampleRadio2">
              <label class="form-check-label" for="exampleRadio2">Another radio</label>
            </div>
          </fieldset>
          <div class="mb-3">
            <label class="form-label" for="customFile">Upload</label>
            <input type="file" class="form-control" id="customFile">
          </div>
          <div class="mb-3 form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
          </div>
          <div class="mb-3">
            <label for="customRange3" class="form-label">Example range</label>
            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </article>
    <article class="my-3" id="disabled-forms">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Disabled forms</h3>
        <a class="d-flex align-items-center" href="../forms/overview/#disabled-forms">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <form>
          <fieldset disabled aria-label="Disabled fieldset example">
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Disabled input</label>
              <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
            </div>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label">Disabled select menu</label>
              <select id="disabledSelect" class="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
                <label class="form-check-label" for="disabledFieldsetCheck">
                  Can't check this
                </label>
              </div>
            </div>
            <fieldset class="mb-3">
              <legend>Disabled radios buttons</legend>
              <div class="form-check">
                <input type="radio" name="radios" class="form-check-input" id="disabledRadio1" disabled>
                <label class="form-check-label" for="disabledRadio1">Disabled radio</label>
              </div>
              <div class="mb-3 form-check">
                <input type="radio" name="radios" class="form-check-input" id="disabledRadio2" disabled>
                <label class="form-check-label" for="disabledRadio2">Another radio</label>
              </div>
            </fieldset>
            <div class="mb-3">
              <label class="form-label" for="disabledCustomFile">Upload</label>
              <input type="file" class="form-control" id="disabledCustomFile" disabled>
            </div>
            <div class="mb-3 form-check form-switch">
              <input class="form-check-input" type="checkbox" id="disabledSwitchCheckChecked" checked disabled>
              <label class="form-check-label" for="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
            </div>
            <div class="mb-3">
              <label for="disabledRange" class="form-label">Disabled range</label>
              <input type="range" class="form-range" min="0" max="5" step="0.5" id="disabledRange">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </fieldset>
        </form>
        </div>
      </div>
    </article>
    <article class="my-3" id="sizing">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Sizing</h3>
        <a class="d-flex align-items-center" href="../forms/form-control/#sizing">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div class="mb-3">
          <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
        </div>
        <div class="mb-3">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3">
          <input type="file" class="form-control form-control-lg" aria-label="Large file input example">
        </div>
        </div>

        <div class="bd-example">
        <div class="mb-3">
          <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
        </div>
        <div class="mb-3">
          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3">
          <input type="file" class="form-control form-control-sm" aria-label="Small file input example">
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="input-group">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Input group</h3>
        <a class="d-flex align-items-center" href="../forms/input-group/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>
        <label for="basic-url" class="form-label">Your vanity URL</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">.00</span>
        </div>
        <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="floating-labels">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Floating labels</h3>
        <a class="d-flex align-items-center" href="../forms/floating-labels/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <form>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
        </form>
        </div>
      </div>
    </article>
    <article class="my-3" id="validation">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Validation</h3>
        <a class="d-flex align-items-center" href="../forms/validation/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <form class="row g-3">
          <div class="col-md-4">
            <label for="validationServer01" class="form-label">First name</label>
            <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationServer02" class="form-label">Last name</label>
            <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationServerUsername" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">@</span>
              <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationServer03" class="form-label">City</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationServer04" class="form-label">State</label>
            <select class="form-select is-invalid" id="validationServer04" required>
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationServer05" class="form-label">Zip</label>
            <input type="text" class="form-control is-invalid" id="validationServer05" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
              <label class="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
        </div>
      </div>
    </article>
  </section>

  <section id="components">
    <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Components</h2>

    <article class="my-3" id="accordion">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Accordion</h3>
        <a class="d-flex align-items-center" href="../components/accordion/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        
        </div>
      </div>
    </article>
    <article class="my-3" id="alerts">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Alerts</h3>
        <a class="d-flex align-items-center" href="../components/alerts/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
          A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert alert-secondary alert-dismissible fade show" role="alert">
          A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert alert-info alert-dismissible fade show" role="alert">
          A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert alert-light alert-dismissible fade show" role="alert">
          A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert alert-dark alert-dismissible fade show" role="alert">
          A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        </div>

        <div class="bd-example">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr>
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="badge">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Badge</h3>
        <a class="d-flex align-items-center" href="../components/badge/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <p class="h1">Example heading <span class="badge bg-primary">New</span></p>
        <p class="h2">Example heading <span class="badge bg-secondary">New</span></p>
        <p class="h3">Example heading <span class="badge bg-success">New</span></p>
        <p class="h4">Example heading <span class="badge bg-danger">New</span></p>
        <p class="h5">Example heading <span class="badge bg-warning text-dark">New</span></p>
        <p class="h6">Example heading <span class="badge bg-info text-dark">New</span></p>
        <p class="h6">Example heading <span class="badge bg-light text-dark">New</span></p>
        <p class="h6">Example heading <span class="badge bg-dark">New</span></p>
        </div>

        <div class="bd-example">
        
        <span class="badge rounded-pill bg-primary">Primary</span>
        <span class="badge rounded-pill bg-secondary">Secondary</span>
        <span class="badge rounded-pill bg-success">Success</span>
        <span class="badge rounded-pill bg-danger">Danger</span>
        <span class="badge rounded-pill bg-warning text-dark">Warning</span>
        <span class="badge rounded-pill bg-info text-dark">Info</span>
        <span class="badge rounded-pill bg-light text-dark">Light</span>
        <span class="badge rounded-pill bg-dark">Dark</span>
        </div>
      </div>
    </article>
    <article class="my-3" id="breadcrumb">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Breadcrumb</h3>
        <a class="d-flex align-items-center" href="../components/breadcrumb/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        </div>
      </div>
    </article>
    <article class="my-3" id="buttons">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Buttons</h3>
        <a class="d-flex align-items-center" href="../components/buttons/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <button type="button" class="btn btn-link">Link</button>
        </div>

        <div class="bd-example">
        
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>
        </div>

        <div class="bd-example">
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
        <button type="button" class="btn btn-primary">Standard button</button>
        <button type="button" class="btn btn-primary btn-lg">Large button</button>
        </div>
      </div>
    </article>
    <article class="my-3" id="button-group">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Button group</h3>
        <a class="d-flex align-items-center" href="../components/button-group/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
          </div>
          <div class="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-secondary">8</button>
          </div>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="card">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Card</h3>
        <a class="d-flex align-items-center" href="../components/card/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div class="row  row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-header">
                Featured
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>

                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="carousel">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Carousel</h3>
        <a class="d-flex align-items-center" href="../components/carousel/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>

              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"/><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>

              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"/><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="dropdowns">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Dropdowns</h3>
        <a class="d-flex align-items-center" href="../components/dropdowns/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
          <div class="dropdown">
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
              <li><h6 class="dropdown-header">Dropdown header</h6></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><h6 class="dropdown-header">Dropdown header</h6></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButtonLG" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
              <li><h6 class="dropdown-header">Dropdown header</h6></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        </div>

        <div class="bd-example">
        <div class="btn-group">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div><!-- /btn-group -->
        <div class="btn-group">
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div><!-- /btn-group -->
        <div class="btn-group">
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div><!-- /btn-group -->
        <div class="btn-group">
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div><!-- /btn-group -->
        <div class="btn-group">
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div><!-- /btn-group -->
        <div class="btn-group">
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div><!-- /btn-group -->
        </div>

        <div class="bd-example">
        <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
          <div class="dropend">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropendMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropend button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropendMenuButton">
              <li><h6 class="dropdown-header">Dropdown header</h6></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div class="dropup">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropupMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropup button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropupMenuButton">
              <li><h6 class="dropdown-header">Dropdown header</h6></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div class="dropstart">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropstartMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropstart button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropstartMenuButton">
              <li><h6 class="dropdown-header">Dropdown header</h6></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        </div>

        <div class="bd-example">
        <div class="btn-group">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownRightMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              End-aligned menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownRightMenuButton">
              <li><h6 class="dropdown-header">Dropdown header</h6></li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="list-group">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>List group</h3>
        <a class="d-flex align-items-center" href="../components/list-group/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">Cras justo odio</li>
          <li class="list-group-item disabled" aria-disabled="true">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        </div>

        <div class="bd-example">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        </div>

        <div class="bd-example">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
          
          <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="modal">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Modal</h3>
        <a class="d-flex align-items-center" href="../components/modal/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div class="d-flex justify-content-between flex-wrap">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalDefault">
            Launch demo modal
          </button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">
            Launch static backdrop modal
          </button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
            Vertically centered scrollable modal
          </button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
            Full screen
          </button>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="navs">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Navs</h3>
        <a class="d-flex align-items-center" href="../components/navs-tabs/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <nav class="nav">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
        </div>

        <div class="bd-example">
        <nav>
          <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
            <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
            <a class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <p class="px-3">Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <p class="px-3">Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.</p>
          </div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <p class="px-3">Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</p>
          </div>
        </div>
        </div>

        <div class="bd-example">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        </div>
      </div>
    </article>
    <article class="my-3" id="navbar">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Navbar</h3>
        <a class="d-flex align-items-center" href="../components/navbar/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="../assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy"
                   style="filter: invert(1) grayscale(100%) brightness(200%);">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="../assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent2">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        </div>
      </div>
    </article>
    <article class="my-3" id="pagination">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Pagination</h3>
        <a class="d-flex align-items-center" href="../components/pagination/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <nav aria-label="Pagination example">
          <ul class="pagination pagination-sm">
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
          </ul>
        </nav>
        </div>

        <div class="bd-example">
        <nav aria-label="Standard pagination example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>

        <div class="bd-example">
        <nav aria-label="Another pagination example">
          <ul class="pagination pagination-lg flex-wrap">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </article>
    <article class="my-3" id="popovers">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Popovers</h3>
        <a class="d-flex align-items-center" href="../components/popovers/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
        </div>

        <div class="bd-example">
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on top
        </button>
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on end
        </button>
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on bottom
        </button>
        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Popover on start
        </button>
        </div>
      </div>
    </article>
    <article class="my-3" id="progress">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Progress</h3>
        <a class="d-flex align-items-center" href="../components/progress/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        <div class="progress mb-3">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
        <div class="progress mb-3">
          <div class="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
        <div class="progress mb-3">
          <div class="progress-bar bg-info text-dark w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
        <div class="progress mb-3">
          <div class="progress-bar bg-warning text-dark w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-danger w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
        </div>

        <div class="bd-example">
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="scrollspy">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Scrollspy</h3>
        <a class="d-flex align-items-center" href="../components/scrollspy/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
          <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#fat">@fat</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#mdo">@mdo</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#one">one</a></li>
                  <li><a class="dropdown-item" href="#two">two</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#three">three</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example">
            <h4 id="fat">@fat</h4>
            <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            <h4 id="mdo">@mdo</h4>
            <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
            <h4 id="one">one</h4>
            <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
            <h4 id="two">two</h4>
            <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
            <h4 id="three">three</h4>
            <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.
            </p>
          </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="spinners">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Spinners</h3>
        <a class="d-flex align-items-center" href="../components/spinners/">Documentation</a>
      </div>

      <div>
        <div class="bd-example">
        
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        </div>

        <div class="bd-example">
        
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        </div>
      </div>
    </article>
    <article class="my-3" id="toasts">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Toasts</h3>
        <a class="d-flex align-items-center" href="../components/toasts/">Documentation</a>
      </div>

      <div>
        <div class="bd-example bg-dark p-5 align-items-center">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"/></svg>

            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
        </div>
      </div>
    </article>
    <article class="mt-3 mb-5 pb-5" id="tooltips">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Tooltips</h3>
        <a class="d-flex align-items-center" href="../components/tooltips/">Documentation</a>
      </div>

      <div>
        <div class="bd-example tooltip-demo">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Tooltip on top</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on end">Tooltip on end</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on start">Tooltip on start</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
        </div>
      </div>
    </article>
  </section>
</div>

<div class="modal fade" id="exampleModalDefault" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>I will not close if you click outside me. Don't even try to press escape key.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenLabel">Full screen modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



    <script src="assets/dist/js/bootstrap.bundle.min.js"></script>

      <script src="cheatsheet.js"></script>
  </body>
</html>
