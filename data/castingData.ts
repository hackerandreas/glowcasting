import { CastingDTO } from "../types";

export let castingData: CastingDTO[] = [
    {
      id: 1,
      tags: ["Magazin", "Reality TV"],
      title: "TV Beitrag - Luftfilter Test",
      text: "Wir suchen für einen Magazin TV Betrag zwei sympatische junge Protagonist:innen. (Am liebsten einen männlichen und eine weibliche.) Wichtig ist uns Zuverlässigkeit. Ihr solltet authentisch und echt sein. Am liebsten zwischen 20 und 35 Jahre. Kenntnisse über Luftreiniger sind nicht notwendig. Gage: 150 EUR pro Person. Wir freuen uns auf Deine Bewerbung!",
      type: "Protagonist:innen",
      location: "53111 Bonn",
      country: "Deutschland",
      dateFrom:"2022-02-18", 
      dateTo:"2022-02-18",
      deadline: "2022-02-18",
      days: 1,
      payed: true,
      budget: 150,
      insured: true,
      numberOfRoles: 2,
      gender: ["m", "f", "d"],
      ageFrom: 18, 
      ageTo: 45,
      carRequired: true,
      languages: ["German"],
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/0bcd7301-15c8-4cb0-8666-231c44b6df15.jpeg",
    },
    {
      id: 2,
      tags: ["Kurzfilm"],
      title: "Hauptrolle in No-Budget Kurzfilm",
      text: `Gesucht wird eine Hauptrolle für meinen ersten Kurzfilm "2026 (AT)".

      Die Rolle ist männlich und hat das Spielalter 22 - 29.
      
      "Noah" spielt einen jungen Mann im Mittelalter, der nach einer kurzen Verfolgungsjagd mit seiner jungen Liebe "Maria", unabsichtig ein tiefes Geheimnis lüftet, dass die Zukunft der beiden für immer verändern wird.`,
      type: "Schauspieler:innen",
      location: "33813 Oerlinghausen",
      country: "Deutschland",
      deadline: "2022-10-22",
      dateFrom:"2022-10-22", 
      dateTo:"2022-10-23",
      days: 2,
      payed: false,
      insured: false,
      numberOfRoles: 1,
      gender: ["m"],
      ageFrom: 18, 
      ageTo: 45,
      carRequired: true,
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/ca295367-6735-47d7-b90b-5b3b4789d72d.jpeg"
    },
    {
      id: 3,
      tags: ["Reality TV"],
      title: `Familien gesucht! Für die VOX Sendung "Mein Kind Dein Kind"`,
      text: `Wir sind eine Film- und TV-Produktionsfirma aus Berlin und produzieren seit 2015 für den Sender VOX die erfolgreiche Doku-Reihe „Mein Kind, dein Kind“, die sich bereits in der 10. Staffel befindet und für den Grimme-Preis nominiert wurde.

      „Mein Kind, dein Kind“ ist ein dokumentarisches Format. In jeder Folge tauschen sich bei wechselseitigen Besuchen zwei Mütter oder Väter über ihren Alltag mit den eigenen Kindern aus – Themen wie: Wie erziehe ich mein Kind, wie ernähre ich mein Kind, wie viel Medienkonsum ist okay etc. Die Dreharbeiten dauern 2,5 Tage und werden mit 600 Euro vergütet.
      
      Mamas und/oder Papas mit Kind/ern im Alter von 7 Monaten - 17 Jahren.
      
      Selbstverständlich kann ich Ihnen bei Interesse auch einen Link zu einer Beispiel-Folge oder einen Aushang von uns zukommen lassen.`,
      type: "Kandidat:innen",
      location: "10589 Berlin",
      country: "Deutschland",
      deadline: "2022-03-01",
      dateFrom:"2022-03-02",
      dateTo:"2022-12-12",
      days: 3,
      payed: true,
      insured: false,
      budget: 600,
      numberOfRoles: 1,
      gender: ["m", "f", "d"],
      carRequired: false,
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/4f2f0fea-fe95-4b3c-8ebb-1411b097f159.jpeg"
    },
    {
      id: 4,
      tags: ["Magazin", "Reality TV"],
      title: "TV Beitrag - Luftfilter Test",
      text: "Wir suchen für einen Magazin TV Betrag zwei sympatische junge Protagonist:innen. (Am liebsten einen männlichen und eine weibliche.) Wichtig ist uns Zuverlässigkeit. Ihr solltet authentisch und echt sein. Am liebsten zwischen 20 und 35 Jahre. Kenntnisse über Luftreiniger sind nicht notwendig. Gage: 150 EUR pro Person. Wir freuen uns auf Deine Bewerbung!",
      type: "Protagonist:innen",
      location: "53111 Bonn",
      country: "Deutschland",
      dateFrom:"2022-02-18", 
      dateTo:"2022-02-18",
      days: 1,
      payed: true,
      budget: 150,
      insured: true,
      numberOfRoles: 2,
      gender: ["m", "f", "d"],
      ageFrom: 18, 
      ageTo: 45,
      carRequired: true,
      languages: ["German"],
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/0bcd7301-15c8-4cb0-8666-231c44b6df15.jpeg",
    },
    {
      id: 5,
      tags: ["Kurzfilm"],
      title: "Hauptrolle in No-Budget Kurzfilm",
      text: `Gesucht wird eine Hauptrolle für meinen ersten Kurzfilm "2026 (AT)".

      Die Rolle ist männlich und hat das Spielalter 22 - 29.
      
      "Noah" spielt einen jungen Mann im Mittelalter, der nach einer kurzen Verfolgungsjagd mit seiner jungen Liebe "Maria", unabsichtig ein tiefes Geheimnis lüftet, dass die Zukunft der beiden für immer verändern wird.`,
      type: "Schauspieler:innen",
      location: "33813 Oerlinghausen",
      country: "Deutschland",
      dateFrom:"2022-10-22", 
      dateTo:"2022-10-23",
      days: 2,
      payed: false,
      insured: false,
      numberOfRoles: 1,
      gender: ["m"],
      ageFrom: 18, 
      ageTo: 45,
      carRequired: true,
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/ca295367-6735-47d7-b90b-5b3b4789d72d.jpeg"
    },
    {
      id: 6,
      tags: ["Reality TV"],
      title: `Familien gesucht! Für die VOX Sendung "Mein Kind Dein Kind"`,
      text: `Wir sind eine Film- und TV-Produktionsfirma aus Berlin und produzieren seit 2015 für den Sender VOX die erfolgreiche Doku-Reihe „Mein Kind, dein Kind“, die sich bereits in der 10. Staffel befindet und für den Grimme-Preis nominiert wurde.

      „Mein Kind, dein Kind“ ist ein dokumentarisches Format. In jeder Folge tauschen sich bei wechselseitigen Besuchen zwei Mütter oder Väter über ihren Alltag mit den eigenen Kindern aus – Themen wie: Wie erziehe ich mein Kind, wie ernähre ich mein Kind, wie viel Medienkonsum ist okay etc. Die Dreharbeiten dauern 2,5 Tage und werden mit 600 Euro vergütet.
      
      Mamas und/oder Papas mit Kind/ern im Alter von 7 Monaten - 17 Jahren.
      
      Selbstverständlich kann ich Ihnen bei Interesse auch einen Link zu einer Beispiel-Folge oder einen Aushang von uns zukommen lassen.`,
      type: "Kandidat:innen",
      location: "10589 Berlin",
      country: "Deutschland",
      deadline: "2022-03-01",
      dateFrom:"2022-03-02",
      dateTo:"2022-12-12",
      days: 3,
      payed: true,
      insured: false,
      budget: 600,
      numberOfRoles: 1,
      gender: ["m", "f", "d"],
      carRequired: false,
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/4f2f0fea-fe95-4b3c-8ebb-1411b097f159.jpeg"
    },
    {
      id: 7,
      tags: ["Magazin", "Reality TV"],
      title: "TV Beitrag - Luftfilter Test",
      text: "Wir suchen für einen Magazin TV Betrag zwei sympatische junge Protagonist:innen. (Am liebsten einen männlichen und eine weibliche.) Wichtig ist uns Zuverlässigkeit. Ihr solltet authentisch und echt sein. Am liebsten zwischen 20 und 35 Jahre. Kenntnisse über Luftreiniger sind nicht notwendig. Gage: 150 EUR pro Person. Wir freuen uns auf Deine Bewerbung!",
      type: "Protagonist:innen",
      location: "53111 Bonn",
      country: "Deutschland",
      dateFrom:"2022-02-18", 
      dateTo:"2022-02-18",
      days: 1,
      payed: true,
      budget: 150,
      insured: true,
      numberOfRoles: 2,
      gender: ["m", "f", "d"],
      ageFrom: 18, 
      ageTo: 45,
      carRequired: true,
      languages: ["German"],
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/0bcd7301-15c8-4cb0-8666-231c44b6df15.jpeg",
    },
    {
      id: 8,
      tags: ["Kurzfilm"],
      title: "Hauptrolle in No-Budget Kurzfilm",
      text: `Gesucht wird eine Hauptrolle für meinen ersten Kurzfilm "2026 (AT)".

      Die Rolle ist männlich und hat das Spielalter 22 - 29.
      
      "Noah" spielt einen jungen Mann im Mittelalter, der nach einer kurzen Verfolgungsjagd mit seiner jungen Liebe "Maria", unabsichtig ein tiefes Geheimnis lüftet, dass die Zukunft der beiden für immer verändern wird.`,
      type: "Schauspieler:innen",
      location: "33813 Oerlinghausen",
      country: "Deutschland",
      dateFrom:"2022-10-22", 
      dateTo:"2022-10-23",
      days: 2,
      payed: false,
      insured: false,
      numberOfRoles: 1,
      gender: ["m"],
      ageFrom: 18, 
      ageTo: 45,
      carRequired: true,
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/ca295367-6735-47d7-b90b-5b3b4789d72d.jpeg"
    },
    {
      id: 9,
      tags: ["Reality TV"],
      title: `Familien gesucht! Für die VOX Sendung "Mein Kind Dein Kind"`,
      text: `Wir sind eine Film- und TV-Produktionsfirma aus Berlin und produzieren seit 2015 für den Sender VOX die erfolgreiche Doku-Reihe „Mein Kind, dein Kind“, die sich bereits in der 10. Staffel befindet und für den Grimme-Preis nominiert wurde.

      „Mein Kind, dein Kind“ ist ein dokumentarisches Format. In jeder Folge tauschen sich bei wechselseitigen Besuchen zwei Mütter oder Väter über ihren Alltag mit den eigenen Kindern aus – Themen wie: Wie erziehe ich mein Kind, wie ernähre ich mein Kind, wie viel Medienkonsum ist okay etc. Die Dreharbeiten dauern 2,5 Tage und werden mit 600 Euro vergütet.
      
      Mamas und/oder Papas mit Kind/ern im Alter von 7 Monaten - 17 Jahren.
      
      Selbstverständlich kann ich Ihnen bei Interesse auch einen Link zu einer Beispiel-Folge oder einen Aushang von uns zukommen lassen.`,
      type: "Kandidat:innen",
      location: "10589 Berlin",
      country: "Deutschland",
      deadline: "2022-03-01",
      dateFrom:"2022-03-02",
      dateTo:"2022-12-12",
      days: 3,
      payed: true,
      insured: false,
      budget: 600,
      numberOfRoles: 1,
      gender: ["m", "f", "d"],
      carRequired: false,
      picture: "https://d26y8omwwkfdba.cloudfront.net/images/4f2f0fea-fe95-4b3c-8ebb-1411b097f159.jpeg"
    },
  ];