---
title: "Détection de panneaux de signalisation avec YOLOv8"
date: "15/01/2026"
author: "Louise CABROLIER"
tags: ["Python", "Deep Learning", "Vision par ordinateur", "YOLOv8"]
excerpt: "Système de détection et classification de panneaux de signalisation en temps réel à partir d'un flux vidéo, utilisant le modèle YOLOv8."
---

## Contexte

Ce projet a été réalisé dans le cadre de mes cours d'intelligence artificielle à l'ESIEE Paris. L'objectif était de concevoir un système capable de détecter et classifier des panneaux de signalisation routière en temps réel.

## Approche

J'ai utilisé YOLOv8 (You Only Look Once), un modèle de détection d'objets état de l'art, que j'ai fine-tuné sur un dataset de panneaux de signalisation. Le modèle a été entraîné sur Google Colab avec un GPU pour accélérer l'apprentissage.

### Étapes du projet

1. **Collecte et préparation des données** — annotation du dataset avec Roboflow
2. **Fine-tuning de YOLOv8** — entraînement sur le dataset annoté
3. **Évaluation** — calcul des métriques mAP, précision et rappel
4. **Déploiement** — intégration sur flux vidéo en temps réel

## Technologies utilisées

- Python
- YOLOv8 (Ultralytics)
- Google Colab
- OpenCV pour le traitement vidéo
- Roboflow pour l'annotation

## Résultats

Le modèle obtient un mAP@0.5 satisfaisant sur le jeu de test, avec une inférence suffisamment rapide pour fonctionner en temps réel sur flux vidéo.
