---
layout: "post"
title: "Safe Autopilot with Machine Learning"
date: "2023-09-07 11:45:10"
categories: project
---

## Introduction
**[Source code](https://github.com/iamlucasvieira/HybridRL-FlightControl) | [Paper](https://repository.tudelft.nl/islandora/object/uuid%3A10f5fa68-f934-414a-9067-988f51f098cb?collection=education) | [Demo](https://youtu.be/7ZOf5KNVHAk)**

The project, part of my Master's thesis, aims to redefine aviation safety by employing a Reinforcement Learning (RL)-based autopilot system capable of adapting to unexpected aircraft failures.

![Sperry](/assets/images/sperry.jpeg){: .align-center;}
*In 1914, Lawrence Sperry takes to the skies for the world's first autopilot flight [^1]*

## Issue at Hand
Air travel is among the safest modes of transportation, but traditional autopilot systems are often not prepared for unexpected malfunctions or structural failures. Those systems are optimized for well-defined conditions and known variables. While reliable under normal circumstances, they tend to struggle with unexpected system or structural failures.  My  project creates an autopilot that can adapt to unforseen conditions.



## Solution
The core of this project is a novel algorithm that combines Soft Actor-Critic (SAC)[^2] and Incremental Dual Heuristic Programming (IDHP)[^3]. SAC excels in offline learning, using precomputed knowledge for quick decisions. On the other hand, IDHP adapts in real-time, known as online learning. By bringing the two together, the resulting hybrid algorithm allows the autopilot system to adapt in real-time to adverse conditions, enhancing both its immediate and future response capabilities.

In my experiments I demonstrated how this autopilot can retain control under sensor noise, variations in flight conditions and failure cases, such as partial loss of rudder and aileron.

![Controller](/assets/images/controller-1.png){: style="width: 44%; height: auto; align: left;"} ![Controller](/assets/images/hybrid-actor-1.png){: style="width: 55%; height: auto; align: left;"}

## Technology Stack
The machine learning model was built using PyTorch, a popular open-source machine learning library. Gymnasium was used to build the reinforcement learning environment. And to make sure everything ran smoothly, Weights & Biases (W&B) was used for project tracking and MLOps.

---
[^1]: https://www.historynet.com/lawrence-sperry-autopilot-inventor-and-aviation-innovator/
[^2]: https://arxiv.org/abs/1801.01290
[^3]: https://doi.org/10.1016/j.ifacol.2019.12.613
