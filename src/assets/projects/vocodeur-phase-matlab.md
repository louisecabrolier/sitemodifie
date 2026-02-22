---
title: "Vocodeur de phase en MATLAB"
date: "10/12/2025"
author: "Louise CABROLIER"
tags: ["MATLAB", "Traitement du signal", "Audio"]
excerpt: "Implémentation d'un vocodeur de phase avec interface graphique permettant de modifier la hauteur et la vitesse d'un signal audio de façon indépendante."
---

## Contexte

Dans le cadre de mes cours de traitement du signal à l'ESIEE Paris, j'ai implémenté un vocodeur de phase en MATLAB. Le vocodeur de phase est un outil de traitement audio permettant de modifier la vitesse de lecture d'un son sans changer sa hauteur, et inversement.

## Principe

Le vocodeur de phase repose sur l'analyse STFT (Short-Time Fourier Transform) du signal audio. En manipulant les phases des composantes fréquentielles entre chaque trame, il est possible de :

- **Modifier le tempo** sans changer la hauteur (time-stretching)
- **Modifier la hauteur** sans changer le tempo (pitch-shifting)
- Combiner les deux effets indépendamment

## Fonctionnalités implémentées

- Analyse et synthèse par STFT
- Time-stretching avec correction de phase
- Pitch-shifting par combinaison de time-stretching et rééchantillonnage
- Plusieurs effets audio supplémentaires (robotisation, chorus)
- Interface graphique (GUI) sous MATLAB App Designer

## Technologies utilisées

- MATLAB
- MATLAB App Designer pour la GUI
- Traitement du signal numérique (FFT, STFT, fenêtrage)

## Résultats

L'interface permet de charger un fichier audio, d'ajuster les paramètres en temps réel et d'écouter le résultat transformé directement depuis l'application.
