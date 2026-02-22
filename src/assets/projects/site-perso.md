---
title: "J'ai créé mon site personnel"
date: "21/02/2026"
author: "Louise CABROLIER"
tags: ["Angular", "TypeScript", "Web"]
excerpt: "Développement de mon site personnel pour regrouper mes projets, mes compétences et mon parcours — forké depuis le projet open source de Kylian Julia et adapté à mes besoins."
---

**Lien GitHub :** https://github.com/louisecabrolier/site

## Pourquoi ce site ?

J'avais besoin d'un endroit centralisé pour présenter mon parcours, mes projets et mes compétences, au-delà de ce qu'un CV classique peut contenir. Ce site me permet de partager mes aventures techniques, mes expériences à l'international (échange à Bologne, programme d'été à Xi'an) et mes projets d'ingénierie.

## Comment c'est fait ?

Le site est développé en **Angular** (TypeScript), forké depuis le projet de Kylian Julia que j'ai adapté à mon profil. Il s'agit d'un frontend pur, sans backend.

### Système de posts sans backend

Les articles et projets sont rédigés en **Markdown** et convertis automatiquement en JSON via un script Node.js. Un système de CI/CD rebuild et redéploie le site automatiquement à chaque modification sur la branche principale.

### Design

Le design reprend une esthétique sombre avec des accents violets. J'ai personnalisé les sections pour correspondre à mon parcours : formations, expériences, compétences techniques, et CV téléchargeable en français et en anglais.

## Technologies utilisées

- Angular 20
- TypeScript
- Node.js pour les scripts de génération d'index
- CI/CD pour le déploiement automatique
