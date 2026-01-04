---
layout: page
permalink: /education/
title: education
description: 
nav: true
nav_order: 5
hide_title: true
---

## Teaching Activities
I really enjoy being involved in teaching, below I listed some activities. Through a parttime appointment as an education developer for the [SUSA project](https://susacampus.eu/) I am developing course content for the [MSc Technical Medicine](https://www.tudelft.nl/onderwijs/opleidingen/masters/tm/msc-technical-medicine) and the [BSc Medicine](https://www.erasmusmc.nl/nl-nl/onderwijs/opleidingen/bachelor-geneeskunde#1d298143-9d7c-4517-a5b1-155a19a4c3e8) together with [Myrthe van Haaften](https://bigr.nl/member/myrthe/) and [Jifke Veenland](https://bigr.nl/member/jifke/). 

### Current Teaching

**Advanced Image Processing** (2024–now, MSc Technical Medicine, Erasmus MC): *Junior Teacher*
  - Lecture on "Deep Learning for Medical Image Segmentation"
  - Tutorial sessions

**Machine Learning** (2024–now, MSc Technical Medicine, Erasmus MC): *Junior Teacher*
  - Lectures on "Deep Learning" and "Convolutional Neural Networks"
  - Tutorial sessions
  - Administered the oral exam

**Technical Education Track** (2024–now, BSc Medicine, Erasmus MC): *Junior Teacher*
  - Tutorial sessions: "Evaluation of binary classifiers"
  - Tutorial sessions: "Responsible use of Large Language Models"

### Past Teaching

**Python Programming** (2024–2025, MSc Technical Medicine, Erasmus MC): *Junior Teacher*
  - Tutorial sessions
  - Administered the final assignment

<!-- **Languages and Machines** (2017–2018, BSc Computing Science, University of Groningen): *Teaching Assistant*
  - Reviewed homework assignments about automata theory, computability and formal grammars
  - Tutorial sessions

**Software Engineering** (2017–2018, BSc Computing Science, University of Groningen): *Teaching Assistant*
  - Supervised a group of students during a software engineering project
  - Students developed a medical guideline calculator

**Discrete Structures** (2015–2017, BSc Computing Science, University of Groningen): *Teaching Assistant*
  - Reviewed homework assignments about basic graph theory, mathematical proofs and set theory
  - Tutorial sessions -->

---

## Student Supervision

Below is a list of completed student theses and internships in which I was involved in some capacity. If you are a student looking for a thesis or internship project don't hesitate to contact me!

{% if site.data.students %}
  {% assign all_students = site.data.students | sort: 'completion_date' | reverse %}
  {% assign thesis_students = "" | split: "," %}
  {% assign internship_students = "" | split: "," %}
  
  {% for student in all_students %}
    {% if student.internship == true %}
      {% assign internship_students = internship_students | push: student %}
    {% else %}
      {% assign thesis_students = thesis_students | push: student %}
    {% endif %}
  {% endfor %}

  {% if thesis_students.size > 0 %}
### BSc/MSc Theses

<div class="students-list">
  {% for student in thesis_students %}
  <div class="student-item" style="margin-bottom: 1.5rem;">
    <strong>{{ student.name }}</strong>
    {% if student.degree %}({{ student.degree }}){% endif %}
    {% if student.university %}, {{ student.university }}{% endif %}
    {% if student.completion_date %}
      {% assign date_parts = student.completion_date | split: '-' %}
      <br><em>Completed: {{ date_parts[0] }}</em>
    {% endif %}
    {% if student.topic %}
      <br>Topic: 
      {% if student.link %}
        <a href="{{ student.link }}" target="_blank">{{ student.topic }}</a>
      {% else %}
        {{ student.topic }}
      {% endif %}
    {% endif %}
  </div>
  {% endfor %}
</div>
  {% endif %}

  {% if internship_students.size > 0 %}
### Internships

<div class="students-list">
  {% for student in internship_students %}
  <div class="student-item" style="margin-bottom: 1.5rem;">
    <strong>{{ student.name }}</strong>
    {% if student.degree %}({{ student.degree }}){% endif %}
    {% if student.university %}, {{ student.university }}{% endif %}
    {% if student.completion_date %}
      {% assign date_parts = student.completion_date | split: '-' %}
      <br><em>Completed: {{ date_parts[0] }}</em>
    {% endif %}
    {% if student.topic %}
      <br>Topic: 
      {% if student.link %}
        <a href="{{ student.link }}" target="_blank">{{ student.topic }}</a>
      {% else %}
        {{ student.topic }}
      {% endif %}
    {% endif %}
  </div>
  {% endfor %}
</div>
  {% endif %}

{% else %}

*No student data found. Please add students to `_data/students.yml`.*

{% endif %}
