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
  var myvar5checked = document.querySelector('input[name = "q5"]:checked').value;
  var a = parseInt(myvar1checked)
  var b = parseInt(myvar2checked)
  var c = parseInt(myvar3checked)
  var d = parseInt(myvar4checked)
  var e = parseInt(myvar5checked)
  var score = a + b + c + d + e
  var finalscore = score / 5 * 100 + '%'

  document.getElementById("demo").innerHTML = `<div class='box'>YOUR SCORE IS: ${finalscore} </div>`;
  window.scrollTo(0, 0);

  feedbackA(a)
  feedbackB(b)
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
          A study of more than 100 citiesby economist David Card found that the wages of natives tend to be higher in cities with large immigrant populations
          </li>
        </ul>
        Therefore, criminalizing all immigrants is an over-generalization and over-exaggeration!
<iframe width="560" height="315" src="https://www.youtube.com/embed/eQ2NLRKAIcQ" frameborder="0" allowfullscreen></iframe>
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
  }
}
