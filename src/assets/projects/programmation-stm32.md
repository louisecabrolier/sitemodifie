---
title: "Programmation embarquée sur STM32"
date: "20/11/2025"
author: "Louise CABROLIER"
tags: ["C", "STM32", "Systèmes embarqués", "RTOS"]
excerpt: "Développement d'une application temps réel sur microcontrôleur STM32, avec gestion des interruptions, des périphériques et d'un système d'exploitation temps réel."
---

## Contexte

Dans le cadre de ma spécialisation en systèmes embarqués à l'ESIEE Paris, j'ai réalisé plusieurs projets de programmation sur microcontrôleur STM32 en langage C.

## Ce que j'ai développé

### Gestion des périphériques

J'ai programmé la communication avec différents périphériques via les protocoles standard des systèmes embarqués : UART pour la communication série, I2C et SPI pour les capteurs, et GPIO pour les entrées/sorties numériques.

### Système temps réel avec RTAI

J'ai utilisé RTAI (Real-Time Application Interface) pour implémenter des tâches temps réel avec des contraintes strictes de latence. Cela implique la gestion de tâches périodiques, la synchronisation par sémaphores et la communication inter-tâches.

### Gestion des interruptions

Implémentation de routines d'interruption (ISR) pour répondre à des événements externes avec des temps de réponse garantis.

## Technologies utilisées

- Langage C
- STM32 (STM32CubeIDE, HAL)
- RTAI pour le temps réel
- Protocoles UART, I2C, SPI
- Debugging avec GDB et ST-Link

## Compétences acquises

Ce projet m'a permis de comprendre les contraintes spécifiques du développement embarqué : gestion de la mémoire limitée, optimisation du code pour des processeurs peu puissants, et respect de contraintes temporelles strictes.
