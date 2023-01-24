---
layout: aboutme
title: About me
permalink: /me
---

<div class="container">
  
  <div class="row d-flex justify-content-center">
    <div class="col-12  p-0 " >
      <div class='row d-flex justify-content-center mt-2'>
        <img src="/assets/images/me.jpg" alt=""  class="profile_pic" style="width:150px;height: 150px">
      </div>
    </div>
  </div>
  
  <div class="row mt-3 d-flex justify-content-center">
    <div class="col-12 " style=' text-align: justify;' >
      Hello, I'm <b>Lucas Vieira dos Santos</b>, a Brazilian fascinated by any machine that flies. That's why I'm currently studying Aerospace engineering in the Netherlands. However, when I’m not watching or studying all things space, I’m very likely to be programming.
      <!-- With Python, my go-to language, I've worked on many types of projects, such as engineering design, game development, and the creation of web applications. At the moment, I’m focusing on data science and how to use Python for Machine Learning. -->
    </div>
  </div>
  
  <div class="row mt-3 d-flex justify-content-center">
    <div class="col-12 col-lg-6 p-0" >
      <div class='row  SocialLink d-flex justify-content-around px-5 mx-1'>
        <a  href="mailto:lucas6eng@gmail.com" title="Email" target="\_blank" ><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
        <a  href="https://www.linkedin.com/in/lucasvsantos/" title="LinkedIn" target="\_blank" ><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        <a  href="https://github.com/iamlucassantos" title="GitHub" target="\_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
        <a  href="https://lucas6eng.myportfolio.com/" title="Behance" target="\_blank"><i class="fa fa-behance fa-2x" aria-hidden="true"></i></a>
        <a  href="{{ site.url }}/download/LucasSantosCV.pdf" title="Resume" target="\_blank"><i class="fa fa-briefcase fa-2x" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</div>

<div class="container pt-4 mt-4">
<h1>Education</h1>

{% for member in site.data.cv.education %}

    <div class="col-12 p-4 mb-3 bg-light rounded">
      <div class="row d-flex justify-content-between">
        <div class="col-12 col-md-7"><h4 class="p-0 m-0">{{ member.name}}</h4></div>
        <div class="col-12 col-md-5"><span class="text-muted float-md-right">{{member.date}}</span></div>
      </div>
      <span class="text-muted mb-2">{{ member.place }}{% if member.gpa %},<em class='small'> GPA {{ member.gpa }}</em>{% endif %}
      </span>
      <ul class="mt-2">
        {% for item in member.description %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>

{% endfor %}

</div>
<div class="container mt-4">
    <h1>Experience</h1>
{% for member in site.data.cv.experience %}

    <div class="col-12 p-4 mb-3 bg-light rounded">
      <div class="row d-flex justify-content-between">
        <div class="col-12 col-md-7"><h4 class="p-0 m-0">{{ member.name}}</h4></div>
        <div class="col-12 col-md-5"><span class="text-muted float-md-right">{{member.date}}</span></div>
      </div>
      <span class="text-muted">{{ member.place }}{% if member.gpa %},<em class='small'> GPA {{ member.gpa }}</em>{% endif %}
      </span>
      <ul class="mt-2">
        {% for item in member.description %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>

{% endfor %}

</div>
