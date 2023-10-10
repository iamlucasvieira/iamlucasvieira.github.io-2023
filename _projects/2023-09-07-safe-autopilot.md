---
layout: "post"
title: "Safe Autopilot with Machine Learning"
date: "2023-09-07 11:45:10"
categories: project
---



I developed a machine-learning autopilot as part of my Master's thesis. The autopilot can control an aircraft even when unexpected failures occur, such as a plane losing part of its wing. By adapting the control strategy, the autopilot ensures the aircraft can still fly safely. If you are interested in the technical details, check:

[Code](https://github.com/iamlucasvieira/HybridRL-FlightControl) / [Paper](https://repository.tudelft.nl/islandora/object/uuid%3A10f5fa68-f934-414a-9067-988f51f098cb?collection=education) / [Demo](https://youtu.be/7ZOf5KNVHAk)

## The problem

While air travel is among the safest modes of transportation, traditional autopilot systems can struggle with unexpected malfunctions or structural failures. These systems are designed for operation under specific ranges and conditions, making them less effective when facing unexpected scenarios. 

{% include image.html url="/assets/images/sperry.jpeg" caption="In 1914, [Lawrence Sperry](https://www.historynet.com/lawrence-sperry-autopilot-inventor-and-aviation-innovator/) takes to the skies for the world's first autopilot flight" width="70%" %}

## The solution 
My project addresses this issue by developing an autopilot that can adapt to unforeseen conditions. To achieve this, I created a novel algorithm that combines Distributional Soft Actor-Critic (DSAC)[ˆ1] and Incremental Dual Heuristic Programming (IDHP)[ˆ2]. DSAC excels in offline learning by using precomputed knowledge to make quick decisions. In contrast, IDHP adapts in real-time, known as online learning. By bringing the two together, the resulting hybrid algorithm allows the autopilot system to adjust in real-time to adverse conditions, enhancing its immediate and future response capabilities. 
{% include hero.html url="/assets/images/controller-1.png,/assets/images/hybrid-actor-1.png" caption="Architecture of agents and environment.,Topology of hybrid actor network." %}


## Experiments 
In my experiments, I demonstrated how this autopilot can retain control under sensor noise, variations in flight conditions, and failure cases, such as partial loss of rudder and aileron. 


## Technology Stack
- **PyTorch**: Used to develop and train the autopilot model. 
- **Gymnasium** Used to build the reinforcement learning environment. 
- **Weights & Biases (W&B)** Used for project tracking and MLOps.

---
[^2]: https://arxiv.org/abs/1801.01290
[^3]: https://doi.org/10.1016/j.ifacol.2019.12.613





