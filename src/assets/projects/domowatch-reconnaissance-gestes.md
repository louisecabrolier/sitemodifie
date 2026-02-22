---
title: "Domowatch — Reconnaissance de gestes pour personnes âgées"
date: "01/06/2025"
author: "Louise CABROLIER"
tags: ["Python", "TensorFlow Lite", "Arduino", "IoT", "Machine Learning"]
excerpt: "Montre connectée embarquant un modèle d'IA pour reconnaître les gestes des utilisateurs âgés, avec une précision de 99,5%."
---

## Contexte

Le projet Domowatch est une montre connectée conçue pour améliorer l'autonomie des personnes âgées à domicile. Elle permet de contrôler des équipements de la maison (lumières, volets, alertes) par simple geste du poignet.

## Mon rôle

J'ai travaillé sur la partie reconnaissance de gestes par intelligence artificielle, embarquée directement sur le microcontrôleur de la montre.

## Approche technique

### Collecte de données

Enregistrement de séquences de gestes via l'accéléromètre et le gyroscope de la montre, réalisés par différents utilisateurs pour assurer la robustesse du modèle.

### Entraînement du modèle

J'ai entraîné un réseau de neurones avec TensorFlow pour classifier les gestes. Le modèle a ensuite été converti en TensorFlow Lite pour pouvoir tourner directement sur le microcontrôleur à ressources limitées.

### Optimisation pour l'embarqué

La contrainte principale était la mémoire disponible sur le microcontrôleur. J'ai appliqué des techniques de quantification du modèle pour réduire son empreinte mémoire tout en maintenant une précision élevée.

## Résultats

- **99,5% de précision** sur le jeu de test
- Modèle fonctionnel en temps réel sur microcontrôleur
- Latence de reconnaissance inférieure à 100ms

## Technologies utilisées

- Python, TensorFlow, TensorFlow Lite
- Arduino / microcontrôleur embarqué
- Accéléromètre et gyroscope (IMU)
