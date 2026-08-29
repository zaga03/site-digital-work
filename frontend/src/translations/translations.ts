
// src/translations/translations.ts

export type Language = "fr" | "mg" | "en";

export const translations = {
  // =========================================================
  // FRANÇAIS
  // =========================================================
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      solutions: "Solutions",
      projects: "Réalisations",
      about: "À propos",
      contact: "Contact",
      quote: "Demander un devis",
    },  
      common: {
      language: "Langue",
      changeLanguage: "Changer de langue",
      appearance: "Apparence",
      close: "Fermer",
    },

    // =======================================================
    // HERO
    // =======================================================
    hero: {
      badge: "Solutions digitales sur mesure",
      title: "Transformez votre activité avec le digital.",
      description:
        "Digital Work conçoit des sites web, applications et solutions digitales modernes pour aider les entreprises à gagner en visibilité, automatiser leurs activités et développer leur présence en ligne.",
      primary: "Démarrer un projet",
      secondary: "Voir nos réalisations",
      discover: "Découvrir",
    },

    // =======================================================
    // PILIERS
    // =======================================================
    pillars: {
      eyebrow: "Nos piliers",
      title: "Une approche construite pour créer",
      highlight: "de la valeur",
      description:
        "Digital Work combine expertise technique, compréhension métier et vision produit pour transformer vos idées en solutions numériques concrètes.",

      items: {
        technical: {
          number: "01",
          title: "Expertise technique",
          description:
            "Des solutions développées avec des technologies modernes, une architecture propre et un code pensé pour évoluer.",
          highlights: [
            "React & React Native",
            "Node.js & API",
            "Architecture moderne",
          ],
        },

        custom: {
          number: "02",
          title: "Solutions sur mesure",
          description:
            "Chaque projet est conçu autour de vos objectifs métier, de vos utilisateurs et de vos contraintes réelles.",
          highlights: [
            "Analyse du besoin",
            "UX/UI adaptée",
            "Fonctionnalités personnalisées",
          ],
        },

        performance: {
          number: "03",
          title: "Performance & évolution",
          description:
            "Nous construisons des produits rapides, maintenables et capables d'accompagner la croissance de votre activité.",
          highlights: [
            "Performance optimisée",
            "Scalabilité",
            "Évolutions facilitées",
          ],
        },

        reliability: {
          number: "04",
          title: "Fiabilité & accompagnement",
          description:
            "Un accompagnement structuré de la conception jusqu'à la mise en production et aux évolutions futures.",
          highlights: [
            "Suivi du projet",
            "Qualité & sécurité",
            "Support technique",
          ],
        },
        nav: {
          home: "Accueil",
          services: "Services",
          solutions: "Solutions",
          projects: "Réalisations",
          about: "À propos",
          contact: "Nous contacter",
        },

         footer: {
            services: "Services",
            navigation: "Navigation",
            contact: "Contact",
            followUs: "Suivez-nous",
            startProject: "Démarrer un projet",
            legal: "Mentions légales",
            privacy: "Confidentialité",
            copyright: "Tous droits réservés.",
            country: "Madagascar",
          },
      },
    },

    // =======================================================
    // PROBLÈMES
    // =======================================================
    problems: {
      eyebrow: "Vos défis",
      title: "Les défis qui ralentissent",
      highlight: "votre activité",
      description:
        "Nous identifions les difficultés qui freinent votre entreprise afin de construire des solutions digitales réellement adaptées.",

      items: {
        time: {
          title: "Perte de temps",
          description:
            "Les tâches répétitives prennent du temps et limitent la productivité de vos équipes.",
        },

        technology: {
          title: "Outils inadaptés",
          description:
            "Des outils vieillissants ou mal adaptés rendent vos opérations plus complexes.",
        },

        visibility: {
          title: "Manque de visibilité",
          description:
            "Votre entreprise mérite une présence digitale claire, moderne et accessible.",
        },

        systems: {
          title: "Processus dispersés",
          description:
            "Des informations réparties entre plusieurs outils compliquent le suivi de votre activité.",
        },

        profitability: {
          title: "Rentabilité limitée",
          description:
            "Les processus manuels et les inefficacités peuvent réduire la rentabilité de votre activité.",
        },

        scalability: {
          title: "Difficulté à évoluer",
          description:
            "Une solution mal conçue peut rapidement devenir un frein à la croissance.",
        },
      },

      closing: {
        before: "Le digital ne doit pas",
        strong: "compliquer",
        middle: "votre activité.",
        value: "Il doit créer de la valeur.",
      },
    },

    // =======================================================
    // SERVICES
    // =======================================================
    services: {
      eyebrow: "Nos expertises",
      title: "Des solutions digitales pensées pour votre activité.",
      description:
        "Du site vitrine à l'application métier, nous construisons des solutions qui répondent à de vrais objectifs business.",

      web: {
        title: "Création web",
        description:
          "Des sites professionnels rapides, modernes et optimisés pour convertir vos visiteurs en clients.",
      },

      application: {
        title: "Applications web",
        description:
          "Des plateformes métier et applications web sur mesure adaptées à vos processus.",
      },

      mobile: {
        title: "Applications mobiles",
        description:
          "Des applications mobiles modernes pour Android et iOS avec une expérience utilisateur fluide.",
      },

      digital: {
        title: "Digitalisation",
        description:
          "Nous transformons vos processus manuels en solutions digitales simples et efficaces.",
      },
    },

    // =======================================================
    // POSITIONING
    // =======================================================
    positioning: {
      badge: "Plus qu'un site web",
      title: "Nous construisons des outils qui font avancer votre entreprise.",
      description:
        "Votre présence digitale doit être un véritable levier commercial. Digital Work combine design, développement et compréhension métier pour créer des solutions utiles, performantes et évolutives.",
      button: "Découvrir nos solutions",

      visibility: {
        title: "Visibilité",
        text: "Soyez trouvé plus facilement par vos clients.",
      },

      performance: {
        title: "Performance",
        text: "Des outils rapides et conçus pour vos objectifs.",
      },

      automation: {
        title: "Automatisation",
        text: "Réduisez les tâches répétitives et gagnez du temps.",
      },

      evolution: {
        title: "Évolution",
        text: "Des solutions capables d'accompagner votre croissance.",
      },
    },

    // =======================================================
    // RÉSULTATS
    // =======================================================
    results: {
      eyebrow: "Des résultats concrets",
      title: "La technologie au service de",
      titleHighlight: "vos résultats",
      description:
        "Nous ne créons pas simplement des sites et des applications. Nous concevons des solutions digitales capables de générer un véritable impact sur votre activité.",

      performance: {
        value: "+40%",
        label: "Performance",
        description:
          "Des interfaces et applications optimisées pour améliorer les performances et l'expérience utilisateur.",
      },

      productivity: {
        value: "2×",
        label: "Productivité",
        description:
          "Des outils digitaux pensés pour automatiser les tâches et accélérer les opérations quotidiennes.",
      },

      engagement: {
        value: "+60%",
        label: "Engagement",
        description:
          "Des expériences utilisateur modernes conçues pour renforcer l'engagement et la conversion.",
      },

      custom: {
        value: "100%",
        label: "Sur mesure",
        description:
          "Chaque solution est développée selon les objectifs, contraintes et besoins spécifiques du projet.",
      },

      impact: {
        title: "Une approche orientée impact",
        description:
          "Chaque décision technique doit servir un objectif métier. Notre approche combine design, développement et stratégie pour construire des produits digitaux utiles, performants et durables.",
      },

      benefits: [
        "Une architecture technique évolutive",
        "Une expérience utilisateur cohérente",
        "Des performances optimisées",
        "Un accompagnement de la conception au déploiement",
      ],

      visual: {
        performance: "Performance digitale",
        before: "Avant",
        after: "Après",
        optimized: "Projet optimisé",
        goals: "Objectifs atteints",
      },
    },

    // =======================================================
    // MÉTHODE
    // =======================================================
    method: {
      eyebrow: "Notre méthode",
      title: "Une méthode simple.",
      titleHighlight: "Des solutions concrètes.",
      description:
        "Nous avançons étape par étape afin de transformer un besoin métier en une solution digitale réellement utile à votre entreprise.",

      steps: {
        analysis: {
          title: "Analyse",
          description:
            "Nous comprenons votre activité, vos objectifs, vos utilisateurs et vos contraintes.",
        },

        design: {
          title: "Conception",
          description:
            "Nous définissons l'expérience utilisateur, l'architecture et les fonctionnalités adaptées.",
        },

        development: {
          title: "Développement",
          description:
            "Nous construisons la solution avec des technologies modernes, fiables et évolutives.",
        },

        deployment: {
          title: "Déploiement",
          description:
            "Nous mettons la solution en production et vous accompagnons dans sa prise en main.",
        },
      },

      reassurance: {
        title: "Pas de solution standard imposée",
        description:
          "Chaque projet est construit selon votre activité, vos objectifs et les contraintes réelles de votre organisation.",
      },

      cta: "Parlons de votre projet",
    },

    // =======================================================
    // RÉALISATIONS
    // =======================================================
    realisations: {
      eyebrow: "Nos réalisations",
      title: "Des projets conçus pour",
      titleHighlight: "créer de la valeur",
      description:
        "Découvrez quelques exemples de solutions digitales développées avec une approche orientée performance, simplicité et évolutivité.",

      featured: "Projet phare",

      categories: {
        platform: "Plateforme digitale",
        network: "Solution réseau",
        mobile: "Mobile",
      },

      projects: {
        digitalWork: {
          title: "Digital Work",
          description:
            "Une plateforme moderne pensée pour présenter les services, les réalisations et l'expertise de Digital Work.",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },

        hotspot: {
          title: "Hotspot Management",
          description:
            "Une solution de gestion de hotspots permettant d'administrer les utilisateurs, sessions, vouchers, routeurs et statistiques.",
          technologies: [
            "React",
            "Node.js",
            "PostgreSQL",
            "MikroTik",
          ],
        },

        mobile: {
          title: "Applications mobiles",
          description:
            "Des applications mobiles conçues pour offrir une expérience rapide, intuitive et adaptée aux besoins métier.",
          technologies: [
            "React Native",
            "Expo",
            "Firebase",
          ],
        },
      },

      projectInDevelopment: "Projet en développement",
      viewProject: "Voir le projet",

      bottomText:
        "Vous avez un projet similaire ou une idée à concrétiser ?",

      bottomLink: "Parlons de votre projet",
    },

    // =======================================================
    // CTA
    // =======================================================
    cta: {
      title: "Un projet digital en tête ?",
      description:
        "Présentez-nous votre besoin. Nous vous aiderons à définir une solution adaptée à votre activité.",
      button: "Parlons de votre projet",
    },

    // =======================================================
    // FOOTER
    // =======================================================
    footer: {
      description:
        "Solutions digitales modernes pour entreprises ambitieuses.",
      navigation: "Navigation",
      services: "Services",
      company: "Entreprise",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
  },

  // =========================================================
  // MALAGASY
  // =========================================================
  mg: {
    nav: {
      home: "Fandraisana",
      services: "Tolotra",
      solutions: "Vahaolana",
      projects: "Tetikasa",
      about: "Momba anay",
      contact: "Fifandraisana",
      quote: "Mangataka devis",
    },

     footer: {
      services: "Tolotra",
      solutions: "Vahaolana",
      navigation: "Fikarohana",
      contact: "Fifandraisana",
      followUs: "Araho izahay",
      startProject: "Hanomboka tetikasa",
      legal: "Fepetra ara-dalàna",
      privacy: "Tsiambaratelo",
      copyright: "Zo rehetra voatokana.",
      description:
        "Vahaolana nomerika maoderina ho an'ny orinasa te-handroso.",
      country: "Madagasikara",
    },

    hero: {
      badge: "Vahaolana nomerika mifanaraka amin'ny filàna",
      title: "Ampitomboy ny asanao amin'ny alalan'ny digital.",
      description:
        "Digital Work dia mamorona tranonkala, application ary vahaolana nomerika maoderina hanampiana ny orinasa hampitombo ny fahitana azy, hanamora ny asa ary hampivelatra ny fisiany amin'ny Internet.",
      primary: "Hanomboka tetikasa",
      secondary: "Hijery ny tetikasanay",
      discover: "Hijery bebe kokoa",
      services:"",
    },

    pillars: {
      eyebrow: "Ireo andry iorenanay",
      title: "Fomba fiasa natao hamoronana",
      highlight: "tombontsoa",
      description:
        "Digital Work dia mampifandray ny fahaiza-manao ara-teknika, ny fahatakarana ny filan'ny orinasa ary ny fahitana lavitra mba hanovana ny hevitrao ho vahaolana nomerika azo ampiharina.",

      items: {
        technical: {
          number: "01",
          title: "Fahaiza-manao ara-teknika",
          description:
            "Vahaolana novolavolaina amin'ny teknolojia maoderina, architecture madio ary code afaka mivoatra.",
          highlights: [
            "React & React Native",
            "Node.js & API",
            "Architecture maoderina",
          ],
        },

        custom: {
          number: "02",
          title: "Vahaolana mifanaraka aminao",
          description:
            "Ny tetikasa tsirairay dia amboarina araka ny tanjon'ny orinasanao, ny mpampiasa ary ny fepetra misy.",
          highlights: [
            "Famakafakana ny filàna",
            "UX/UI mifanaraka",
            "Fonctionnalités manokana",
          ],
        },

        performance: {
          number: "03",
          title: "Fahombiazana sy fivoarana",
          description:
            "Mamorona vokatra haingana, mora tazomina ary afaka mitombo miaraka amin'ny orinasanao izahay.",
          highlights: [
            "Performance nohatsaraina",
            "Scalabilité",
            "Fanavaozana mora",
          ],
        },

        reliability: {
          number: "04",
          title: "Azo itokisana sy fanohanana",
          description:
            "Fanohanana voalamina manomboka amin'ny famolavolana ka hatramin'ny fametrahana sy ny fanatsarana manaraka.",
          highlights: [
            "Fanaraha-maso ny tetikasa",
            "Kalitao sy fiarovana",
            "Fanohanana ara-teknika",
          ],
        },
      },
    },

    problems: {
      eyebrow: "Ireo olana sedrainao",
      title: "Ireo olana manakana",
      highlight: "ny fivoaran'ny asanao",
      description:
        "Fantatray ireo olana mety hampiadana ny orinasanao mba hamoronana vahaolana nomerika tena mifanaraka amin'ny filànao.",

      items: {
        time: {
          title: "Fandaniana fotoana",
          description:
            "Mandany fotoana ny asa miverimberina ary mampihena ny vokatra azon'ny ekipanao.",
        },

        technology: {
          title: "Fitaovana tsy mifanaraka",
          description:
            "Ny fitaovana tranainy na tsy mifanaraka dia mampitombo ny fahasarotan'ny asa.",
        },

        visibility: {
          title: "Tsy ampy fahitana",
          description:
            "Mendrika fisiana nomerika mazava, maoderina ary mora idirana ny orinasanao.",
        },

        systems: {
          title: "Processus miparitaka",
          description:
            "Ny fampahalalana miparitaka amin'ny fitaovana maro dia manasarotra ny fanaraha-maso.",
        },

        profitability: {
          title: "Tombombarotra voafetra",
          description:
            "Ny asa atao tanana sy ny tsy fahombiazan'ny processus dia mety hampihena ny tombombarotra.",
        },

        scalability: {
          title: "Sarotra ny mivelatra",
          description:
            "Ny vahaolana tsy voaomana tsara dia mety hanakana ny fitomboan'ny orinasa.",
        },
      },

      closing: {
        before: "Ny digital dia tsy tokony",
        strong: "hanasarotra",
        middle: "ny asanao.",
        value: "Tokony hamorona tombontsoa izy.",
      },
    },

    services: {
      eyebrow: "Ny fahaiza-manaonay",
      title: "Vahaolana nomerika natao ho an'ny orinasanao.",
      description:
        "Manomboka amin'ny tranonkala ka hatramin'ny application métier, mamorona vahaolana mifanaraka amin'ny tanjonao izahay.",

      web: {
        title: "Famoronana tranonkala",
        description:
          "Tranonkala matihanina, haingana, maoderina ary natao hahazoana mpanjifa.",
      },

      application: {
        title: "Application web",
        description:
          "Application web sy plateforme métier mifanaraka amin'ny fomba fiasan'ny orinasanao.",
      },

      mobile: {
        title: "Application mobile",
        description:
          "Application Android sy iOS maoderina miaraka amin'ny expérience utilisateur tsara.",
      },

      digital: {
        title: "Digitalisation",
        description:
          "Ovay ho vahaolana nomerika tsotra sy mahomby ny asa tanana sy ny processus.",
      },
    },

    positioning: {
      badge: "Mihoatra noho ny tranonkala",
      title: "Mamorona fitaovana mampandroso ny orinasanao izahay.",
      description:
        "Ny fisianao nomerika dia tokony ho fitaovana manampy amin'ny fandrosoan'ny orinasanao. Digital Work dia mampifandray ny design, développement ary fahatakarana ny filan'ny orinasa.",
      button: "Hijery ny vahaolana",

      visibility: {
        title: "Fahitana",
        text: "Ataovy mora kokoa amin'ny mpanjifa ny mahita anao.",
      },

      performance: {
        title: "Fahombiazana",
        text: "Fitaovana haingana natao ho an'ny tanjonao.",
      },

      automation: {
        title: "Automatisation",
        text: "Ahenao ny asa miverimberina ary mitsitsia fotoana.",
      },

      evolution: {
        title: "Fivoarana",
        text: "Vahaolana afaka mitombo miaraka amin'ny orinasanao.",
      },
    },

    results: {
      eyebrow: "Vokatra azo tsapain-tanana",
      title: "Ny teknolojia ho fanatsarana",
      titleHighlight: "ny vokatrao",
      description:
        "Tsy mamorona tranonkala sy application fotsiny izahay. Mamolavola vahaolana nomerika afaka mitondra vokatra tena misy ho an'ny asanao izahay.",

      performance: {
        value: "+40%",
        label: "Fahombiazan'ny rafitra",
        description:
          "Interface sy application nohatsaraina mba hampitombo ny fahombiazan'ny rafitra sy ny traikefan'ny mpampiasa.",
      },

      productivity: {
        value: "2×",
        label: "Famokarana",
        description:
          "Fitaovana nomerika natao hanamorana ny asa miverimberina sy hanafaingana ny asa andavanandro.",
      },

      engagement: {
        value: "+60%",
        label: "Fandraisan'anjaran'ny mpampiasa",
        description:
          "Traikefa nomerika maoderina natao hampitomboana ny fandraisan'anjaran'ny mpampiasa sy ny fiovam-po.",
      },

      custom: {
        value: "100%",
        label: "Mifanaraka amin'ny filàna",
        description:
          "Ny vahaolana tsirairay dia amboarina araka ny tanjona sy ny filàna manokana amin'ny tetikasa.",
      },

      impact: {
        title: "Fomba fiasa mifantoka amin'ny vokatra",
        description:
          "Ny fanapahan-kevitra ara-teknika tsirairay dia tokony hanampy amin'ny fanatrarana tanjona ara-barotra. Atambatray ny design, développement ary paikady mba hamoronana vokatra nomerika mahasoa sy maharitra.",
      },

      benefits: [
        "Architecture teknika afaka mivoatra",
        "Traikefan'ny mpampiasa mirindra",
        "Fahombiazan'ny rafitra nohatsaraina",
        "Fanohanana manomboka amin'ny conception ka hatramin'ny déploiement",
      ],

      visual: {
        performance: "Fahombiazan'ny nomerika",
        before: "Talohan'ny",
        after: "Taorian'ny",
        optimized: "Tetikasa nohatsaraina",
        goals: "Tanjona tratra",
      },
    },

    method: {
      eyebrow: "Ny fomba fiasanay",
      title: "Fomba fiasa tsotra.",
      titleHighlight: "Vahaolana azo ampiharina.",
      description:
        "Mandroso tsikelikely izahay mba hanovana ny filàn'ny orinasa ho vahaolana nomerika tena ilaina.",

      steps: {
        analysis: {
          title: "Famakafakana",
          description:
            "Fantatray ny asanao, ny tanjonao, ny mpampiasa ary ny fepetra misy.",
        },

        design: {
          title: "Famolavolana",
          description:
            "Faritanay ny expérience utilisateur, ny architecture ary ny fonctionnalités ilaina.",
        },

        development: {
          title: "Développement",
          description:
            "Amboarinay amin'ny teknolojia maoderina, azo antoka ary afaka mivoatra ny vahaolana.",
        },

        deployment: {
          title: "Déploiement",
          description:
            "Apetraho amin'ny production ny vahaolana ary manampy anao amin'ny fampiasana azy izahay.",
        },
      },

      reassurance: {
        title: "Tsy misy vahaolana standard terena",
        description:
          "Ny tetikasa tsirairay dia amboarina araka ny asanao, ny tanjonao ary ny fepetra tena misy ao amin'ny orinasanao.",
      },

      cta: "Andao hiresaka momba ny tetikasanao",
    },

    realisations: {
      eyebrow: "Ireo tetikasanay",
      title: "Tetikasa natao hamoronana",
      titleHighlight: "tombontsoa",
      description:
        "Jereo ny ohatra amin'ny vahaolana nomerika novolavolaina tamin'ny fomba fiasa mifantoka amin'ny fahombiazana, fahatsorana ary fivoarana.",

      featured: "Tetikasa lehibe",

      categories: {
        platform: "Plateforme digitale",
        network: "Vahaolana réseau",
        mobile: "Mobile",
      },

      projects: {
        digitalWork: {
          title: "Digital Work",
          description:
            "Plateforme maoderina natao hanehoana ny tolotra, ny tetikasa ary ny fahaiza-manaon'ny Digital Work.",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },

        hotspot: {
          title: "Hotspot Management",
          description:
            "Vahaolana fitantanana hotspot ahafahana mitantana utilisateurs, sessions, vouchers, routeurs ary statistiques.",
          technologies: [
            "React",
            "Node.js",
            "PostgreSQL",
            "MikroTik",
          ],
        },

        mobile: {
          title: "Applications mobiles",
          description:
            "Applications mobiles natao hanomezana expérience haingana, mora ampiasaina ary mifanaraka amin'ny filàn'ny asa.",
          technologies: [
            "React Native",
            "Expo",
            "Firebase",
          ],
        },
      },

      projectInDevelopment: "Tetikasa mbola eo am-pamolavolana",
      viewProject: "Hijery ny tetikasa",
      bottomText:
        "Manana tetikasa mitovy amin'izany na hevitra tianao hampiharina ve ianao?",
      bottomLink: "Andao hiresaka momba ny tetikasanao",
    },

    cta: {
      title: "Manana tetikasa digital ve ianao?",
      description:
        "Lazao aminay ny zavatra ilainao ary hanampy anao hamaritra vahaolana mifanaraka amin'ny orinasanao izahay.",
      button: "Andao hiresaka momba ny tetikasanao",
    },

  },

  // =========================================================
  // ENGLISH
  // =========================================================
  en: {
    nav: {
      home: "Home",
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      quote: "Request a quote",
    },

    hero: {
      badge: "Custom digital solutions",
      title: "Transform your business with digital.",
      description:
        "Digital Work creates modern websites, applications and digital solutions that help businesses increase visibility, automate operations and grow their online presence.",
      primary: "Start a project",
      secondary: "View our projects",
      discover: "Discover",
    },

    pillars: {
      eyebrow: "Our pillars",
      title: "An approach built to create",
      highlight: "real value",
      description:
        "Digital Work combines technical expertise, business understanding and product thinking to turn your ideas into concrete digital solutions.",

      items: {
        technical: {
          number: "01",
          title: "Technical expertise",
          description:
            "Solutions built with modern technologies, clean architecture and code designed to evolve.",
          highlights: [
            "React & React Native",
            "Node.js & APIs",
            "Modern architecture",
          ],
        },

        custom: {
          number: "02",
          title: "Tailored solutions",
          description:
            "Every project is designed around your business objectives, users and real-world constraints.",
          highlights: [
            "Needs analysis",
            "Tailored UX/UI",
            "Custom functionality",
          ],
        },

        performance: {
          number: "03",
          title: "Performance & scalability",
          description:
            "We build fast, maintainable products that can support the growth of your business.",
          highlights: [
            "Optimized performance",
            "Scalability",
            "Easy evolution",
          ],
        },

        reliability: {
          number: "04",
          title: "Reliability & support",
          description:
            "Structured support from design through production and future improvements.",
          highlights: [
            "Project monitoring",
            "Quality & security",
            "Technical support",
          ],
        },
      },
    },

    problems: {
      eyebrow: "Your challenges",
      title: "Challenges that slow",
      highlight: "your business down",
      description:
        "We identify the issues holding your business back and build digital solutions that address your real needs.",

      items: {
        time: {
          title: "Time loss",
          description:
            "Repetitive tasks consume time and reduce your team's productivity.",
        },

        technology: {
          title: "Outdated tools",
          description:
            "Old or unsuitable tools make your operations more complicated.",
        },

        visibility: {
          title: "Low visibility",
          description:
            "Your business deserves a clear, modern and accessible digital presence.",
        },

        systems: {
          title: "Scattered processes",
          description:
            "Information spread across multiple tools makes business monitoring harder.",
        },

        profitability: {
          title: "Limited profitability",
          description:
            "Manual processes and inefficiencies can reduce your business profitability.",
        },

        scalability: {
          title: "Growth limitations",
          description:
            "A poorly designed solution can quickly become a barrier to growth.",
        },
      },

      closing: {
        before: "Digital should not",
        strong: "complicate",
        middle: "your business.",
        value: "It should create value.",
      },
    },

    services: {
      eyebrow: "Our expertise",
      title: "Digital solutions designed for your business.",
      description:
        "From showcase websites to business applications, we build solutions around real business objectives.",

      web: {
        title: "Web development",
        description:
          "Professional, fast and modern websites designed to convert visitors into customers.",
      },

      application: {
        title: "Web applications",
        description:
          "Custom business platforms and web applications adapted to your processes.",
      },

      mobile: {
        title: "Mobile applications",
        description:
          "Modern Android and iOS applications with a smooth user experience.",
      },

      digital: {
        title: "Digital transformation",
        description:
          "We transform manual processes into simple and efficient digital solutions.",
      },
    },

    positioning: {
      badge: "More than a website",
      title: "We build tools that move your business forward.",
      description:
        "Your digital presence should be a real business growth lever. Digital Work combines design, development and business understanding to create useful, high-performance and scalable solutions.",
      button: "Discover our solutions",

      visibility: {
        title: "Visibility",
        text: "Make it easier for your customers to find you.",
      },

      performance: {
        title: "Performance",
        text: "Fast tools designed around your objectives.",
      },

      automation: {
        title: "Automation",
        text: "Reduce repetitive tasks and save time.",
      },

      evolution: {
        title: "Scalability",
        text: "Solutions that can grow with your business.",
      },
    },

    results: {
      eyebrow: "Measurable results",
      title: "Technology focused on",
      titleHighlight: "your results",
      description:
        "We don't simply build websites and applications. We design digital solutions capable of creating a real impact on your business.",

      performance: {
        value: "+40%",
        label: "Performance",
        description:
          "Optimized interfaces and applications designed to improve performance and user experience.",
      },

       common: {
      language: "Language",
      changeLanguage: "Change language",
      appearance: "Appearance",
      close: "Close",
      },
      
      productivity: {
        value: "2×",
        label: "Productivity",
        description:
          "Digital tools designed to automate tasks and accelerate daily operations.",
      },

      engagement: {
        value: "+60%",
        label: "Engagement",
        description:
          "Modern user experiences designed to strengthen engagement and conversion.",
      },

      custom: {
        value: "100%",
        label: "Tailored",
        description:
          "Every solution is developed according to the project's objectives, constraints and specific requirements.",
      },

      impact: {
        title: "An impact-driven approach",
        description:
          "Every technical decision should serve a business objective. Our approach combines design, development and strategy to build useful, high-performing and sustainable digital products.",
      },

      benefits: [
        "Scalable technical architecture",
        "Consistent user experience",
        "Optimized performance",
        "Support from conception to deployment",
      ],

      visual: {
        performance: "Digital performance",
        before: "Before",
        after: "After",
        optimized: "Project optimized",
        goals: "Goals achieved",
      },
    },

    method: {
      eyebrow: "Our method",
      title: "A simple method.",
      titleHighlight: "Concrete solutions.",
      description:
        "We move step by step to transform a business need into a digital solution that is genuinely useful to your company.",

      steps: {
        analysis: {
          title: "Analysis",
          description:
            "We understand your business, objectives, users and real-world constraints.",
        },

        design: {
          title: "Design",
          description:
            "We define the user experience, architecture and features that fit your needs.",
        },

        development: {
          title: "Development",
          description:
            "We build the solution using modern, reliable and scalable technologies.",
        },

        deployment: {
          title: "Deployment",
          description:
            "We deploy the solution and support you during its adoption and use.",
        },
      },

      reassurance: {
        title: "No one-size-fits-all solution",
        description:
          "Every project is built around your business, objectives and the real constraints of your organization.",
      },

      cta: "Let's discuss your project",
    },

    realisations: {
      eyebrow: "Our projects",
      title: "Projects designed to",
      titleHighlight: "create value",
      description:
        "Discover examples of digital solutions developed with a focus on performance, simplicity and scalability.",

      featured: "Featured project",

      categories: {
        platform: "Digital platform",
        network: "Network solution",
        mobile: "Mobile",
      },

      projects: {
        digitalWork: {
          title: "Digital Work",
          description:
            "A modern platform designed to showcase Digital Work's services, projects and expertise.",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },

        hotspot: {
          title: "Hotspot Management",
          description:
            "A hotspot management solution for handling users, sessions, vouchers, routers and statistics.",
          technologies: [
            "React",
            "Node.js",
            "PostgreSQL",
            "MikroTik",
          ],
        },

        mobile: {
          title: "Mobile applications",
          description:
            "Mobile applications designed to provide a fast, intuitive experience adapted to business needs.",
          technologies: [
            "React Native",
            "Expo",
            "Firebase",
          ],
        },
      },

      projectInDevelopment: "Project in development",
      viewProject: "View project",

      bottomText:
        "Do you have a similar project or an idea you want to bring to life?",

      bottomLink: "Let's discuss your project",
    },

    cta: {
      title: "Have a digital project in mind?",
      description:
        "Tell us about your needs. We will help you define a solution adapted to your business.",
      button: "Let's discuss your project",
    },

    footer: {
      description:
        "Modern digital solutions for ambitious businesses.",
       services: "Services",
      navigation: "Navigation",
      contact: "Contact",
      followUs: "Follow us",
      startProject: "Start a project",
      legal: "Legal notice",
      privacy: "Privacy",
      copyright: "All rights reserved.",
      country: "Madagascar",
    },
  },
} as const;

// ===========================================================
// TYPE GLOBAL DES TRADUCTIONS
// ===========================================================

export type Translations = typeof translations[Language];

// ===========================================================
// GET TRANSLATIONS
// ===========================================================

export function getTranslations(language: Language): Translations {
  return translations[language];
}
