---
layout: page
title: About me
permalink: /
---

<style>

.SocialLink a:hover,.SocialLink  a:visited,.SocialLink  a:link,.SocialLink  a:active
{
    text-decoration: none;
    color: black;
    font-weight:bold;
}

img {
  border-radius: 50%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}



/* Layout */
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* Styling */
.timeline {
  margin: 4em auto;
  position: relative;
  max-width: 46em;
}
.timeline:before {
  background-color: black;
  content: '';
  margin-left: -1px;
  position: absolute;
  top: 0;
  left: 2em;
  width: 2px;
  height: 100%;
}

.timeline-event {
  position: relative;
}
/* .timeline-event:hover .timeline-event-icon {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #a83279;
}
.timeline-event:hover .timeline-event-thumbnail {
  -moz-box-shadow: inset 40em 0 0 0 #a83279;
  -webkit-box-shadow: inset 40em 0 0 0 #a83279;
  box-shadow: inset 40em 0 0 0 #a83279;
}
*/

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 3em;
  <!-- width: 100%; -->
}
.timeline-event-copy h3 {
  font-size: 1.75em;
  margin-bottom: 0.4em;
}
.timeline-event-copy h4 {
  font-size: 1.2em;
  margin-bottom: 1.2em;
}
.timeline-event-copy strong {
  font-weight: 700;
}
.timeline-event-copy p:not(.timeline-event-thumbnail) {
  padding-bottom: 1em;
  text-align: justify;
}

.timeline-event-icon {
  -moz-transition: -moz-transform 0.2s ease-in;
  -o-transition: -o-transform 0.2s ease-in;
  -webkit-transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: black;
  outline: 10px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  -moz-transition: box-shadow 0.5s ease-in 0.1s;
  -o-transition: box-shadow 0.5s ease-in 0.1s;
  -webkit-transition: box-shadow 0.5s ease-in;
  -webkit-transition-delay: 0.1s;
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 0.88em;
  background-color: black;
  -moz-box-shadow: inset 0 0 0 0em #ef795a;
  -webkit-box-shadow: inset 0 0 0 0em #ef795a;
  box-shadow: inset 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.25em 1em;
}

ul{
    list-style: none;
}
</style>





<div class="container mb-5">
     <div class="row">
    <div class="col-12 col-lg-3 p-0 mb-3" >
    <img src="/assets/images/me.jpg" alt="" class="center"    style="width:150px;">
    </div>

    <div class="col-12 col-lg-9" style=' text-align: justify;' >
    Hello, I'm <b>Lucas Vieira dos Santos</b>, a Brazilian fascinated by any machine that flies. That's why I'm currently studying Aerospace engineering in the Netherlands. However, when I’m not watching or studying all things space, I’m very likely to be programming.<br><br>
    With Python, my go-to language, I've worked on many types of projects, such as engineering design, game development, and the creation of web applications. At the moment, I’m focusing on data science and how to use Python for Machine Learning.
    <div class='row mt-3 SocialLink'>
        <div class='col ' >
            <a  href="mailto:lucas6eng@gmail.com" target="\_blank" >Email</a>
        </div>
        <div class='col'>
            <a  href="https://github.com/iamlucassantos" target="\_blank">GitHub</a>
        </div>
        <div class='col'>
            <a  href="https://www.linkedin.com/in/lucasvsantos/" target="\_blank">LinkedIn</a>
        </div>
        <div class='col'>
            <a  href="{{ site.url }}/download/LucasSantosCV.pdf" target="\_blank">Resume</a>
        </div>
    </div>

    </div>
    </div>






</div>


<h1>Education</h1>

<div class="container">
<ul class="timeline mt-4">
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">Sep 2018 - Current</p>
      <h3>Bsc Aerospace Engineering </h3>
      <h4>Delft University of Technology</h4>
      <p><strong>Fields of study</strong><br>Aerodynamics, Propulsion & Power Systems, Engineering & Aerospace Design, Applied Numerical Analysis, Computational Modelling, Aerospace Materials &
Structures, and Aerospace Flight Dynamics</p>
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">Sep 2020 - Current</p>
      <h3>Computer Science Minor</h3>
      <h4>Delft University of Technology</h4>
      <p><strong>Fields of study</strong><br>Modern software development and Data Science</p>
    <p><strong>Main courses</strong><br>Algorithms and Data Structures, Software Engineering Methods, Data Analytics, and Visual Data Processing</p>
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">Aug 2015 - Aug 2017 (Incomplete)</p>
      <h3>Bsc Mechanical Engineering</h3>
      <h4>Universidade do Estado do Rio de Janeiro</h4>
      <p>- Studies were frozen due to emigration to the Netherlands<br>
- Average grade at the termination of 8.63 <br>
- Admitted through 'Vestibular UERJ' (full scholarship based on academic merit)</p>
    </div>
  </li>
</ul>  
</div>

<h1>Experience</h1>
<div class="container">
<ul class="timeline mt-4">
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">Jul 2016 - Aug 2016</p>
      <h3>Logistic Assistant </h3>
      <h4>OBS - Olympic Broadcasting Services</h4>
      <p>
      - Freelance paid employment during the 2016 Olympic Games in Rio de Janeiro<br>
- Responsible for the creation and distribution of logistical plans for the OBS crew, including bus and meal schedules, expense reports, inventory records, and call sheets<br></p>
    </div>
  </li>

</ul>  
</div>
