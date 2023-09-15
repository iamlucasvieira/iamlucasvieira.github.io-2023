---
layout: "post"
title: "Automated Tests Framework"
date: "2023-09-12 11:45:10"
categories: project
---

## Introduction
Streamlining the drone-testing game was the aim during my internship. I developed a framework and command-line tool that changed how drone sensors and software are evaluated, saying goodbye to time-consuming manual checks.

With [Avy](https://avy.eu/) selling more and more drones, the production phase showed to be a big barrier between purchase and delivery. My work tackled the challenge of using automation to enhance the speed of the testing process. I  creating an Automated Tests Framework, a toolkit designed to simplify and speed up the drone testing process.

## Issue at Hand
The old way of testing drones involved painstaking manual effort. Engineers would individually communicate with each drone to test its sensors and software, a process as tedious as it sounds. This manual approach was not just time-consuming; it also introduced the risk of human error.

##  Solution
I developed a flexible framework that allows engineers to pre-program a communication sequences with drones and automatically evaluate their responses. To make things even smoother, we've also created a command-line tool that can execute these tests quickly. Now, instead of slogging through manual checks, the production team can instantly assess different drone properties at the click of a button.

![Sperry](/assets/images/aat.png)
*CLI interface of the automated testing tool.*

## Technology Stack
I used Python as the core programming language for this project, and for the command-line application, I employed [Typer](https://typer.tiangolo.com/), a modern library that simplifies CLI development. I also used the [MAVLink](https://mavlink.io/en/) protocol to ensure seamless communication between the testing framework and the drones.

## Impact
This framework didn't just cut down on testing time; it brought a new level of efficiency and reliability to the entire production process. With the capability to execute rapid and accurate tests, the production team can now focus on more complex tasks, leaving the mundane checks to the Automated Tests Framework.
