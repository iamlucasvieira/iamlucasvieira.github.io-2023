---
layout: "post"
title: "Parachute and Wind Tunnel Simulator"
date: "2021-07-01 12:00:00"
categories: project
---

At [Delft Aerospace Rocket Engineering (DARE)](https://dare.tudelft.nl/), I was part of the simulation team where we tackled the complexities of parachute aerodynamics. There, I created a wind tunnel simulator that simulates and generates data on how a parachute interacts with airflow during deployment.

{% include hero.html url="/assets/images/2021-07-01-flow.gif" background-color="white" width="70%" caption="Aerodynamics simulation of flow around a 2D section of a parachute." color="black" %}

## The Challenge
Designing rocket recovery parachutes is a complex task, especially when starting from scratch, like the parachute research group at DARE. The wind tunnels, the facilities used for testing such designs, are in high demand, and the time slots are scarce. This makes each wind tunnel session extremely valuable. Therefore, there is a need for a tool that can help engineers pre-test design modifications before committing to full-scale wind tunnel testing.

## The Solution
I collaborated with a team member to create a software tool that simulates the airflow dynamics around a parachute. The tool allows users to input various parameters to define the shape of the parachute and then run a simulation. We implemented numerical methods to simulate airflow and algorithms to manage collisions between the parachute cloth and ropes. This tool enabled the engineers at DARE to quickly evaluate design modifications and provided valuable experience to the simulation team in building such software from scratch.

{% include hero.html url="/assets/images/2021-07-01-cloth.gif,/assets/images/2021-07-01-parachute.gif" caption="Simulation of cloth material collision.,Simulation of the parachute's cloth and ropes interaction." %}

## Technology Stack
- **Python**: Used as the main programming language of the project
- **C++**: Used for computationally intensive simulation aspects.
- **TKinter**: The library behind the interface for setting up parachute and simulation properties.
- **Cython**: Used to allow Python to communicate with C++ code.
