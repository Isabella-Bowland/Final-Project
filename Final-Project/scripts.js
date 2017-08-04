function navigationbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function save() {
  var myvar1checked = document.querySelector('input[name = "q1"]:checked').value;
  var myvar2checked = document.querySelector('input[name = "q2"]:checked').value;
  var myvar3checked = document.querySelector('input[name = "q3"]:checked').value;
  var myvar4checked = document.querySelector('input[name = "q4"]:checked').value;

  var a = parseInt(myvar1checked)
  var b = parseInt(myvar2checked)
  var c = parseInt(myvar3checked)
  var d = parseInt(myvar4checked)

  var score = a + b + c + d
  var finalscore = score / 4 * 100 + '%'

  document.getElementById("demo").innerHTML = `<div class='box'>YOUR SCORE IS: ${finalscore} </div>`;
  window.scrollTo(0, 0);

  feedbackA(a)
  feedbackB(b)
  feedbackC(c)
  feedbackD(d)
}

function feedbackA(a) {
if( a === 1) {
  debugger
    document.getElementById("answer1").innerHTML = (
      `<div class='answerbox1'>
      <h1>  CORRECT!</h1>
        According to the ACLU, undocumented presence alone is not a violation of federal criminal law.
        <ul>
          <li>
          'Illegal alien' is a misnomer becuase undocumented aliens have not committed any federal crimes associated with their immigration status
          </li>
          <li>
          Approximately 45% of undocumented immigrants entered the US legally; thus the generalization that majority of immigrants are 'criminals' is not true
          </li>
          <li>
          If an immigrant does, however, enter the US without the approval of an immigration officer, it is a misdemeanor. For context, other misdemeanors include vandalism and traffic violations
          </li>
        </ul>
        Therefore, criminalizing all immigrants is an over-generalization and over-exaggeration!
<iframe width="560" height="315" src="https://www.youtube.com/embed/eQ2NLRKAIcQ" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="https://www.aclu.org/files/assets/FINAL_criminalizing_undocumented_immigrants_issue_brief_PUBLIC_VERSION.pdf" class="icons"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/American_Civil_Liberties_Union_logo.svg/1280px-American_Civil_Liberties_Union_logo.svg.png" style="width:100px;height:50px;"></a>
  <a href="http://www.cnn.com/2017/02/24/politics/undocumented-immigrants-not-necessarily-criminal/index.html" class="icons"><img src="http://i2.cdn.turner.com/cnn/2015/images/08/24/t1cnnpolitics.jpg" style="width:100px;height:50px;"></a>
<a href="https://www.law.cornell.edu/uscode/text/8/1326" class="icons"><img src="http://www.freelogovectors.net/wp-content/uploads/2012/04/cornell-university-logo.jpg" style="width:150px;height:50px;"></a>
</h3>
      </div>`
    )

  } else {
    document.getElementById("answer1").innerHTML = (
      `<div class='answerbox2'>
      <h1>  INCORRECT</h1>
        According to the ACLU, undocumented presence alone is not a violation of federal criminal law.
        <ul>
          <li>
          'Illegal alien' is a misnomer becuase undocumented aliens have not committed any federal crimes associated with their immigration status
          </li>
          <li>
          Approximately 45% of undocumented immigrants entered the US legally; thus the generalization that majority of immigrants are 'criminals' is not true
          </li>
          <li>
          If an immigrant does, however, enter the US without the approval of an immigration officer, it is a misdemeanor. For context, other misdemeanors include vandalism and traffic violations
          </li>
        </ul>
        Therefore, criminalizing all immigrants is an over-generalization and over-exaggeration!
<iframe width="560" height="315" src="https://www.youtube.com/embed/eQ2NLRKAIcQ" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="https://www.aclu.org/files/assets/FINAL_criminalizing_undocumented_immigrants_issue_brief_PUBLIC_VERSION.pdf" class="icons"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/American_Civil_Liberties_Union_logo.svg/1280px-American_Civil_Liberties_Union_logo.svg.png" style="width:100px;height:50px;"></a>
  <a href="http://www.cnn.com/2017/02/24/politics/undocumented-immigrants-not-necessarily-criminal/index.html" class="icons"><img src="http://i2.cdn.turner.com/cnn/2015/images/08/24/t1cnnpolitics.jpg" style="width:100px;height:50px;"></a>
<a href="https://www.law.cornell.edu/uscode/text/8/1326" class="icons"><img src="http://www.freelogovectors.net/wp-content/uploads/2012/04/cornell-university-logo.jpg" style="width:150px;height:50px;"></a>
</h3>
      </div>`
    )
  }
}

function feedbackB(b) {
if( b === 1) {
  debugger
    document.getElementById("answer2").innerHTML = (
      `<div class='answerbox1'>
      <h1>  CORRECT!</h1>
      Immigrants actually give a slight boost to the average wages of Americans by increasing their productivity
and stimulating investment.
        <ul>
          <li>
          Immigrants and natives tend to differ in the skill sets they posess and thus the jobs they do. This interdependency in employment increases the productivity of natives, increasing wages
          </li>
          <li>
          The addition of immigrants to the workforce also stimulates new investment in the economy which increases demand for labor and wages
          </li>
          <li>
          A 2010 report from the Economic Policy Institute estimated that, from 1994 to 2007, immigration increased the wages of native-born workers by an average of 0.4 percent
          </li>
          <li>
          A study of more than 100 cities by economist David Card found that the wages of natives tend to be higher in cities with large immigrant populations
          </li>
        </ul>
        Therefore, criminalizing all immigrants is an over-generalization and over-exaggeration!
<img src="https://www.brookings.edu/wp-content/uploads/2012/05/2329B96B6FD34287B9D01568FBC3B6B8-2.png?w=585&crop=0%2C0px%2C100%2C467px" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="https://www.uschamber.com/sites/default/files/documents/files/022851_mythsfacts_2016_report_final.pdf" class="icons"><img src="https://chambermaster.blob.core.windows.net/userfiles/UserFiles/chambers/711/CMS/convert/www.breachamber.com/files/1109.jpg" style="width:200px;height:50px;"></a>
  <a href="https://www.forbes.com/sites/artcarden/2015/08/28/how-do-illegal-immigrants-affect-american-workers-the-answer-might-surprise-you/#204fc01f771a" class="icons"><img src="https://cdn.worldvectorlogo.com/logos/forbes-2.svg" style="width:100px;height:50px;"></a>
<a href="https://www.brookings.edu/blog/jobs/2012/05/04/what-immigration-means-for-u-s-employment-and-wages/" class="icons"><img src="https://www.brookings.edu/wp-content/themes/brookings/static/images/brookings-wordmark-fb.gif" style="width:100px;height:50px;"></a>
</h3>
      </div>`
    )

  } else {
    document.getElementById("answer2").innerHTML = (
      `<div class='answerbox2'>
      <h1>  INCORRECT</h1>
      Immigrants actually give a slight boost to the average wages of Americans by increasing their productivity
and stimulating investment.
        <ul>
          <li>
          Immigrants and natives tend to differ in the skill sets they posess and thus the jobs they do. This interdependency in employment increases the productivity of natives, increasing wages
          </li>
          <li>
          The addition of immigrants to the workforce also stimulates new investment in the economy which increases demand for labor and wages
          </li>
          <li>
          A 2010 report from the Economic Policy Institute estimated that, from 1994 to 2007, immigration increased the wages of native-born workers by an average of 0.4 percent
          </li>
          <li>
          A study of more than 100 cities by economist David Card found that the wages of natives tend to be higher in cities with large immigrant populations
          </li>
        </ul>
        Immigrants are not a drain on our economy. In fact, they have a positive effect!
<img src="https://www.brookings.edu/wp-content/uploads/2012/05/2329B96B6FD34287B9D01568FBC3B6B8-2.png?w=585&crop=0%2C0px%2C100%2C467px" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="https://www.uschamber.com/sites/default/files/documents/files/022851_mythsfacts_2016_report_final.pdf" class="icons"><img src="https://chambermaster.blob.core.windows.net/userfiles/UserFiles/chambers/711/CMS/convert/www.breachamber.com/files/1109.jpg" style="width:200px;height:50px;"></a>
  <a href="https://www.forbes.com/sites/artcarden/2015/08/28/how-do-illegal-immigrants-affect-american-workers-the-answer-might-surprise-you/#204fc01f771a" class="icons"><img src="https://cdn.worldvectorlogo.com/logos/forbes-2.svg" style="width:100px;height:50px;"></a>
<a href="https://www.brookings.edu/blog/jobs/2012/05/04/what-immigration-means-for-u-s-employment-and-wages/" class="icons"><img src="https://www.brookings.edu/wp-content/themes/brookings/static/images/brookings-wordmark-fb.gif" style="width:100px;height:50px;"></a>
</h3>
      </div>`
    )
  }
}

function feedbackC(c) {
if( c === 1) {
  debugger
    document.getElementById("answer3").innerHTML = (
      `<div class='answerbox1'>
      <h1>  CORRECT!</h1>
      When undocumented immigrants are caught, they often are put through an arduous legal processing taking several months, and then many are scentenced to months in detention centers.
        <ul>
          <li>
These detention centers are privatley owned and for-profit which means private corporations such as ALEC make money off of the amount of beds in each center. The government pays for a certain amount of beds which translates to more imprisonment of immigrants by the government because they do not want to waste the funds they spent.
          </li>
          <li>
Since these centers are privately owned, they are often understaffed and their conditions are much worse than public prisons. Immigrants have been forced to sleep on the floor or in tents, have been sexually assulted by gaurds, and have gone without edible food or other basic services. Many have even died because their medical needs went ignored.         </li>
          <li>
          Immigrants are often detained for much longer than their sentencing assigned in court, putting their life on hold for 3+ months and, for some, over a year and a half! All of this time is time gone for these individuals to support their family, make a living, and contribute their thoughts/ideas/skills to society.
          </li>
        </ul>
        Thus, thousands of immigrants are locked up for large amounts of time in sub-standard conditions instead of being deported (which is what will happen to them eventually) all for the purpose of generating money for for-profit prisons.
<img src="https://i2.wp.com/thinkprogress.org/wp-content/uploads/2016/08/0_KjVkMvnUyBwLnvO-1.png?w=620&crop=0%2C0px%2C100%2C480px&ssl=1" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="http://www.latimes.com/nation/la-na-immigrant-detention-centers-civil-rights-20150917-story.html" class="icons"><img src="http://logos-download.com/wp-content/uploads/2016/05/Los_Angeles_Times_logo_black.png" style="width:200px;height:50px;"></a>
  <a href="http://www.cnn.com/2017/03/03/politics/deportations-without-court-hearings/index.html" class="icons"><img src="http://i2.cdn.turner.com/cnn/2015/images/08/24/t1cnnpolitics.jpg" style="width:100px;height:50px;"></a>
<a href="https://www.aclu.org/other/conditions-confinement-immigrant-detention-facilities" class="icons"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/American_Civil_Liberties_Union_logo.svg/1280px-American_Civil_Liberties_Union_logo.svg.png" style="width:100px;height:50px;"></a>
</h3>
      </div>`
    )

  } else {
    document.getElementById("answer3").innerHTML = (
      `<div class='answerbox2'>
      <h1>  INCORRECT</h1>
      When undocumented immigrants are caught, they often are put through an arduous legal processing taking several months, and then many are scentenced to months in detention centers.
        <ul>
          <li>
These detention centers are privatley owned and for-profit which means private corporations such as ALEC make money off of the amount of beds in each center. The government pays for a certain amount of beds which translates to more imprisonment of immigrants by the government because they do not want to waste the funds they spent.
          </li>
          <li>
Since these centers are privately owned, they are often understaffed and their conditions are much worse than public prisons. Immigrants have been forced to sleep on the floor or in tents, have been sexually assulted by gaurds, and have gone without edible food or other basic services. Many have even died because their medical needs went ignored.         </li>
          <li>
          Immigrants are often detained for much longer than their sentencing assigned in court, putting their life on hold for 3+ months and, for some, over a year and a half! All of this time is time gone for these individuals to support their family, make a living, and contribute their thoughts/ideas/skills to society.
          </li>
        </ul>
        Thus, thousands of immigrants are locked up for large amounts of time in sub-standard conditions instead of being deported (which is what will happen to them eventually) all for the purpose of generating money for for-profit prisons.
<img src="https://i2.wp.com/thinkprogress.org/wp-content/uploads/2016/08/0_KjVkMvnUyBwLnvO-1.png?w=620&crop=0%2C0px%2C100%2C480px&ssl=1" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="http://www.latimes.com/nation/la-na-immigrant-detention-centers-civil-rights-20150917-story.html" class="icons"><img src="http://logos-download.com/wp-content/uploads/2016/05/Los_Angeles_Times_logo_black.png" style="width:200px;height:50px;"></a>
  <a href="http://www.cnn.com/2017/03/03/politics/deportations-without-court-hearings/index.html" class="icons"><img src="http://i2.cdn.turner.com/cnn/2015/images/08/24/t1cnnpolitics.jpg" style="width:100px;height:50px;"></a>
<a href="https://www.aclu.org/other/conditions-confinement-immigrant-detention-facilities" class="icons"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/American_Civil_Liberties_Union_logo.svg/1280px-American_Civil_Liberties_Union_logo.svg.png" style="width:100px;height:50px;"></a>
</h3>
      </div>`
    )
  }
}

function feedbackD(d) {
if( d === 1) {
  debugger
    document.getElementById("answer4").innerHTML = (
      `<div class='answerbox1'>
      <h1>  CORRECT!</h1>
      There are already 650 miles of barrier made out of a series of walls and fences at the US-Mexico border.
        <ul>
          <li>
      The construction of this wall at popular places of crossing on the border is forcing immigrants to try to cross in more dangerous and desolate places (i.e. the desert), increasing the risk of death that they face.
          </li>
          <li>
        The border wall also has proven to be a huge detriment to the environment, with its installation stopping the migration of endangered species and violating numerous laws including the National Environmental Policy Act, the Endangered Species Act and the Solid Waste Disposal Act.
         </li>
          <li>
          Even though we currently have a wall, A report in May 2008 by the Congressional Research Service found "strong indication" that illegal border-crossers had simply found new routes.
          </li>
          <li>
          Furthermore, our president's plan to increase the wall to cover 1,000 miles of terrain is projected to cost $12-15 billion dollars!
          </li>
        </ul>
The wall on the US-Mexico border has not only proven to be ineffective, but it is also detrimental to our environment and is causing the humanitarian crisis of immigrants dying while attempting to cross.
<img src="http://www.telam.com.ar/advf/imagenes/2016/11/581a7a4b80279_645x362.jpg" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="http://www.pbs.org/newshour/rundown/heres-mexico-border-wall-looks-like-now/" class="icons"><img src="http://www.pbs.org/brands/wp-content/uploads/2017/01/img_logo_incorrect06a.jpg" style="width:200px;height:50px;"></a>
  <a href="http://news.nationalgeographic.com/2016/03/160304-us-mexico-border-fence-wall-photos-immigration/" class="icons"><img src="http://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/misc/National-Geographic-Logo.ngsversion.1474040243902.adapt.1900.1.jpg" style="width:100px;height:50px;"></a>
<a href="http://www.npr.org/2017/07/25/539263390/death-at-the-southern-border-an-increasing-risk-for-migrants" class="icons"><img src="http://media.npr.org/chrome_svg/npr-logo-color.svg" style="width:100px;height:50px;"></a>
</h3>
      </div>`
    )

  } else {
    document.getElementById("answer4").innerHTML = (
      `<div class='answerbox2'>
      <h1>  INCORRECT</h1>
      When undocumented immigrants are caught, they often are put through an arduous legal processing taking several months, and then many are scentenced to months in detention centers.
        <ul>
          <li>
These detention centers are privatley owned and for-profit which means private corporations such as ALEC make money off of the amount of beds in each center. The government pays for a certain amount of beds which translates to more imprisonment of immigrants by the government because they do not want to waste the funds they spent.
          </li>
          <li>
Since these centers are privately owned, they are often understaffed and their conditions are much worse than public prisons. Immigrants have been forced to sleep on the floor or in tents, have been sexually assulted by gaurds, and have gone without edible food or other basic services. Many have even died because their medical needs went ignored.         </li>
          <li>
          Immigrants are often detained for much longer than their sentencing assigned in court, putting their life on hold for 3+ months and, for some, over a year and a half! All of this time is time gone for these individuals to support their family, make a living, and contribute their thoughts/ideas/skills to society.
          </li>
        </ul>
        Thus, thousands of immigrants are locked up for large amounts of time in sub-standard conditions instead of being deported (which is what will happen to them eventually) all for the purpose of generating money for for-profit prisons.
<img src="http://www.telam.com.ar/advf/imagenes/2016/11/581a7a4b80279_645x362.jpg" frameborder="0" allowfullscreen></iframe>
<h2>
For more information, visit the linked articles from the sources below:
</h2>
<h3>
  <a href="http://www.pbs.org/newshour/rundown/heres-mexico-border-wall-looks-like-now/" class="icons"><img src="http://www.pbs.org/brands/wp-content/uploads/2017/01/img_logo_incorrect06a.jpg" style="width:200px;height:50px;"></a>
  <a href="http://news.nationalgeographic.com/2016/03/160304-us-mexico-border-fence-wall-photos-immigration/" class="icons"><img src="http://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/misc/National-Geographic-Logo.ngsversion.1474040243902.adapt.1900.1.jpg" style="width:100px;height:50px;"></a>
<a href="http://www.npr.org/2017/07/25/539263390/death-at-the-southern-border-an-increasing-risk-for-migrants" class="icons"><img src="http://media.npr.org/chrome_svg/npr-logo-color.svg" style="width:100px;height:50px;"></a>
</h3>
      </div>`
    )
  }
}
