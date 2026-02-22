---
title: "Navigation autonome d'un robot TurtleBot3"
date: "01/02/2026"
author: "Louise CABROLIER"
tags: ["ROS", "Robotique", "Python", "C++"]
excerpt: "Programmation d'un TurtleBot3 pour naviguer de façon autonome dans un environnement inconnu, avec évitement d'obstacles et cartographie en temps réel."
---

**Lien GitHub :** https://github.com/louisecabrolier/site

## Contexte

Dans le cadre de mes cours de robotique à l'ESIEE Paris, j'ai travaillé sur la navigation autonome d'un robot mobile TurtleBot3 en utilisant le framework ROS (Robot Operating System).

## Objectifs

L'objectif était de programmer un robot capable de se déplacer de façon autonome dans un environnement inconnu, en évitant les obstacles et en construisant une carte de son environnement en temps réel.

## Ce que j'ai fait

J'ai utilisé l'algorithme SLAM (Simultaneous Localization and Mapping) pour permettre au robot de se localiser et de cartographier son environnement simultanément. La navigation autonome repose sur le package `move_base` de ROS, qui gère la planification de trajectoire globale et locale.

J'ai également implémenté des comportements d'évitement d'obstacles réactifs grâce aux données du capteur LiDAR embarqué sur le TurtleBot3.

## Technologies utilisées

- ROS Noetic
- Python et C++ pour les nodes ROS
- Algorithme SLAM (GMapping)
- Rviz pour la visualisation
- Gazebo pour la simulation

## Résultats

Le robot est capable de naviguer vers un point cible en évitant les obstacles dynamiques et statiques, tout en construisant une carte précise de l'environnement.
