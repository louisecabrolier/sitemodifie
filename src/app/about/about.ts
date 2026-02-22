import { Component } from '@angular/core';


interface CVInfo {
  lang: string;
  file: string;
}

interface Formation {
  nom: string;
  lieu: string;
  ecole: string,
  description?: string;
  periode: string;
}

interface Experience {
  nom: string;
  lieu: string;
  details?: string[];
  periode: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  menuCV: boolean = false; 

  toggleMenuCV() {
    this.menuCV = !this.menuCV;
  }

  formation: Formation[] = [
    {
      nom: 'Diplôme d\'ingénieur de l\'ESIEE Paris',
      ecole: 'ESIEE Paris',
      lieu: 'Champs-sur-Marne, France',
      description: '2ème année d\'ingénieur. Spécialisation en systèmes embarqués.',
      periode: '09/2024 - En cours'
    },
    {
      nom: 'CPGE PTSI PT',
      ecole: 'Lycée Dhuoda',
      lieu: 'Nîmes, France',
      description: '2 années en Classe Préparatoire aux Grandes Ecoles en Physique, Technologie et Sciences de l\'Ingénieur.',
      periode: '09/2022 - 07/2024'
    },
    {
      nom: 'Baccalauréat Mathématiques et Physique-Chimie Option Internationale Chinois',
      ecole: 'Lycée Jules Guesde',
      lieu: 'Montpellier, France',
      periode: '09/2019 - 06/2022'
    }
  ]

  experience: Experience[] = [
    {
      nom: 'Membre du comité d\'intégration des nouveaux élèves de l\'ESIEE',
      lieu: 'Champs-sur-Marne, France',
      details: [
        'Organisation des activités d\'intégration',
        'Gestion des ressources nécessaires',
        'Organisation de la logistique du week-end d\'intégration'
      ],
      periode: '02/2025 - 09/2025',
    },
    {
      nom: 'Préparateur de commande',
      lieu: 'McDonald\'s | Montpellier, France',
      details: [
        'Préparation et assemblage des commandes',
        'Gestion des périodes d\'affluence et travail en équipe sous pression'
      ],
      periode: 'été 2023'
    }
  ]

  

  blocs = [
    { titre: 'Langages de programmation', skills: ['Python', 'C', 'C++', 'HTML'] },
    { titre: 'Bases de données', skills: ['MySQL'] },
    { titre: 'Outils', skills: ['Microsoft Office', 'Visual Studio', 'GIT', 'MobaXterm', 'Colab'] },
  ];

  CV: CVInfo[] = [
    {lang: 'fr', file: ''},
    {lang: 'en', file: ''}
  ]

  modalCV: boolean = false;
  langCV: string = '';

  selectCV(cv: CVInfo) {
    this.langCV = cv.lang;
    this.modalCV = true;
  }

  closeModal() {
    this.modalCV = false;
    this.langCV = '';
  }



  profil: string[] = [
    'Etudiante motivée par la robotique et l\'intelligence artificielle'
  ]
}