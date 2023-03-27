const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.pUL.create({
    data: {
      type: "BUTTON",
      language_1: "fr",
      voice_1: "Lea",
      language_2: "fr",
      voice_2: "Lea",
      subject: "Géographie",
      number: "1",
      introduction: "Les capitales politiques des pays du monde",
      sentence: "La capitale de QUESTION est ANSWER.",
      pul_elements: {
        create: [
          {
            question: "chine",
            answer: "pékin",
            details: {
              create: [
                {
                  description:
                    "Le palais impérial : 'Cité interdite' date du XVème siécle. Dynasties Ming et Qing.",
                },
              ],
            },
          },
          {
            question: "inde",
            answer: "new delhi",
            details: {
              create: [
                {
                  description:
                    "Ville nouvelle créée par les britanniques au XXème siècle pour déplacer la capitale qui était Calcutta.",
                },
              ],
            },
          },
          {
            question: "états-unis",
            answer: "washington",
            details: {
              create: [
                {
                  description:
                    "Elle se caractérise par ses monuments néoclassiques imposants qui abritent les trois branches du gouvernement fédéral : le Capitole, la Maison Blanche et la Cour Suprême.",
                },
              ],
            },
          },
          {
            question: "indonésie",
            answer: "jakarta",
            details: {
              create: [
                {
                  description:
                    "La ville est familièrement appelée : ' Le grand durian' du nom du fruit emblématique de l'Indonésie.",
                },
              ],
            },
          },
          {
            question: "pakistan",
            answer: "islamabad",
            details: {
              create: [
                {
                  description:
                    "L'architecture de la mosquée Faisal reprend la forme d'une tente bédouine.",
                },
              ],
            },
          },
          {
            question: "brésil",
            answer: "brasilia",
            details: {
              create: [
                {
                  description:
                    "Construite pour mettre fin à la rivalité entre Sao Paulo et Rio de Janeiro, les architectes sont des disciples de Le Corbusier. Noter l'architecture de la cathédrale.",
                },
              ],
            },
          },
          {
            question: "nigeria",
            answer: "abuja",
            details: {
              create: [
                {
                  description:
                    "C'est en 1991 que la capitale est officiellement transférée à Abuja une ville nouvelle (L'ancienne capitale était Lagos)",
                },
              ],
            },
          },
          {
            question: "bangladesh",
            answer: "dacca",
            details: {
              create: [
                {
                  description:
                    "Lorsque la partie orientale du Pakistan fait sécession en 1971, Dacca devient capitale du nouvel État.",
                },
              ],
            },
          },
          {
            question: "russie",
            answer: "moscou",
            details: {
              create: [
                {
                  description:
                    "après la révolution d'octobre 1917 en pleine guerre civile les dirigeant bolcheviks fixent la capitale à Moscou.",
                },
              ],
            },
          },
          {
            question: "japon",
            answer: "tokyo",
            details: {
              create: [
                {
                  description:
                    "Mélange de style moderne et traditionnel.Le quartier de Shibuya attire beaucoup de jeunes car c'est un centre de la mode et des nouvelles technologies. Il est bondé.",
                },
              ],
            },
          },
          {
            question: "mexique",
            answer: "mexico",
            details: {
              create: [
                {
                  description:
                    "Tenochtitlan (aujourd'hui Mexico) était la capitale des Aztèques fondée à l'endroit où ils découvrirent un aigle perché sur un figuier de barbarie.",
                },
              ],
            },
          },
          {
            question: "philippines",
            answer: "manille",
            details: {
              create: [
                {
                  description:
                    "C'est la ville la plus dense au monde avec 43 400 habitants au km2.",
                },
              ],
            },
          },
          {
            question: "éthiopie",
            answer: "addis-abeba",
            details: {
              create: [
                {
                  description:
                    "Située sur un plateau de 2300 à 2600 mètres, c'est la capitale la plus élevée d'Afrique.",
                },
              ],
            },
          },
          {
            question: "viêt nam",
            answer: "hanoï",
            details: {
              create: [
                {
                  description:
                    "Son nom signifie 'ville entre les fleuves', elle se trouve sur les rives du delta du 'fleuve rouge'.",
                },
              ],
            },
          },
          {
            question: "égypte",
            answer: "le caire",
            details: {
              create: [
                {
                  description:
                    "Son 'musée égyptien' fondé par l'égyptologue français Auguste Mariette est consacré à l'antiquité égyptienne et notamment au trésor de Toutankhamon.",
                },
              ],
            },
          },
          {
            question: "république démocratique du congo",
            answer: "kinshasa",
            details: {
              create: [
                {
                  description:
                    "Avec une population de plus de 13 millions d'habitants c'est la plus grande agglomération francophone du monde dépassant Paris depuis 2010.",
                },
              ],
            },
          },
          {
            question: "iran",
            answer: "téhéran",
            details: {
              create: [
                {
                  description:
                    "La ville est située au pied du mont Elbourz près d'une faille, le risque sismique est extrêmement élevé.",
                },
              ],
            },
          },
          {
            question: "allemagne",
            answer: "berlin",
            details: {
              create: [
                {
                  description:
                    "Pendant la période de la 'Guerre froide', le 'mur de Berlin' coupa la ville de 1961 à 1989. A la chute du mur, Berlin redevient la capitale d'une Allemagne réunifiée.",
                },
              ],
            },
          },
          {
            question: "turquie",
            answer: "ankara",
            details: {
              create: [
                {
                  description:
                    "Anitkabir est un mausolée à Ankara érigé en l'honneur d'Atatürk, fondateur et premier président de la République de Turquie, mort en 1938.",
                },
              ],
            },
          },
          {
            question: "france",
            answer: "paris",
            details: {
              create: [
                {
                  description:
                    "Point de convergence de tous les réseaux routiers et ferroviaires de France.En 2019, deuxième ville la plus visitée au monde, son patrimoine culturel est exceptionnel.",
                },
              ],
            },
          },
          {
            question: "royaume-uni",
            answer: "londres",
            details: {
              create: [
                {
                  description:
                    "Plusieurs sites sont inscrits au patrimoine mondial : le Palais de Westminster (avec la Tour horloge:Big Ben), la Tour de Londres, le tower bridge, l'abbaye de Westminster, le Palais de Buckingham.",
                },
              ],
            },
          },
          {
            question: "thaïlande",
            answer: "bangkok",
            details: {
              create: [
                {
                  description:
                    "Dans le livre guinness des records, le nom de Bangkok est le plus long nom de lieu du monde.",
                },
              ],
            },
          },
          {
            question: "italie",
            answer: "rome",
            details: {
              create: [
                {
                  description:
                    "'Ville aux sept collines'. L'état du Vatican résidence du Pape en fait la capitale des Chrétiens catholiques.",
                },
              ],
            },
          },
          {
            question: "tanzanie",
            answer: "dodoma",
            details: {
              create: [
                {
                  description:
                    "Dodoma fut fondée en 1907 à l'époque de la colonisation allemande de la Tanzanie en même temps que la construction d'une ligne de chemin de fer. ",
                },
              ],
            },
          },
          {
            question: "afrique du sud",
            answer: "le cap",
            details: {
              create: [
                {
                  description:
                    "La ville a été baptisée en référence au 'Cap de Bonne Espérance'.",
                },
              ],
            },
          },
          {
            question: "birmanie",
            answer: "naypyidaw",
            details: {
              create: [
                {
                  description:
                    "Le changement de capitale par la junte militaire, de Rangoun à Naypyidaw aurait été décidé en une nuit le 6 novembre 2005 sur les conseils d'un astrologue.Un musée de pierres précieuses abrite la plus grosse perle de culture de Birmanie.",
                },
              ],
            },
          },
          {
            question: "corée du sud",
            answer: "séoul",
            details: {
              create: [
                {
                  description:
                    "La ville compte de nombreux bâtiments à l'architecture futuriste comme le dongdaemun design plaza et c'est le berceau de la kpop et de la culture coréenne à travers le monde.",
                },
              ],
            },
          },
          {
            question: "colombie",
            answer: "bogota",
            details: {
              create: [
                {
                  description:
                    "Depuis 2012 l'interdiction des armes à feu a permis de fortement diminuer la criminalité qui était très forte.",
                },
              ],
            },
          },
          {
            question: "kenya",
            answer: "nairobi",
            details: {
              create: [
                {
                  description:
                    "La ville abrite une réserve naturelle protégée et c'est la capitale qui possède le plus d'espèces d'oiseaux au monde.",
                },
              ],
            },
          },
          {
            question: "espagne",
            answer: "madrid",
            details: {
              create: [
                {
                  description:
                    "Les oeuvres d'art du Musée du Prado réunissent des Goya des Vélasquez et d'autres maîtres espagnols.",
                },
              ],
            },
          },
          {
            question: "argentine",
            answer: "buenos aires",
            details: {
              create: [
                {
                  description:
                    "Son nom signifie ' Bon vent' et vient du sanctuaire 'Notre dame du bon vent' (Sardaigne, Italie)protectrice des navigateurs.Coupe du monde de football en 1978.",
                },
              ],
            },
          },
          {
            question: "algérie",
            answer: "alger",
            details: {
              create: [
                {
                  description:
                    "Surnommée 'La blanche' de part la couleur de ses habitations.La Casbah, quartier traditionnel, est un labyrinthe de ruelles et de maisons pittoresques.",
                },
              ],
            },
          },
          {
            question: "ukraine",
            answer: "kiev",
            details: {
              create: [
                {
                  description:
                    "La 'Laure des grottes de Kiev' est un important monastère orthodoxe.",
                },
              ],
            },
          },
          {
            question: "soudan",
            answer: "khartoum",
            details: {
              create: [
                {
                  description:
                    "Son nom signifie 'corne d'éléphant', la ville est construite au confluent du Nil Blanc et du Nil bleu.",
                },
              ],
            },
          },
          {
            question: "pologne",
            answer: "varsovie",
            details: {
              create: [
                {
                  description:
                    "Pendant la deuxième guerre mondiale les juifs de la ville ont été rassemblés dans le 'Ghetto de Varsovie' qui rassembla 431 000 personnes en juin 1941. Soulèvement du ghetto en 1943, déportation des juifs au camp d'extermination de Treblinka.",
                },
              ],
            },
          },
          {
            question: "ouganda",
            answer: "kampala",
            details: {
              create: [
                {
                  description:
                    "Célèbre pour être la ville connaissant le plus grand nombre d'orages par an.",
                },
              ],
            },
          },
          {
            question: "maroc",
            answer: "rabat",
            details: {
              create: [
                {
                  description:
                    "Séparée de la ville de Salé de l'autre côté de l'embouchure du fleuve Bouregreg, surnom de 'villes jumelles': Rabat/salé.",
                },
              ],
            },
          },
          {
            question: "irak",
            answer: "bagdad",
            details: {
              create: [
                {
                  description:
                    "Capitale de l'Empire Abbasside au VIIIème siècle. La ville est depuis 2003 : 'bataille de Bagdad' au centre du violent conflit de la 'guerre d'Irak' et c'est une ville d'enclaves fortifiées.",
                },
              ],
            },
          },
          {
            question: "canada",
            answer: "ottawa",
            details: {
              create: [
                {
                  description:
                    "Chaque année en mai s'y déroule le festival des tulipes.A la fin de la seconde guerre mondiale et de la libération des Pays Bas ce pays avait envoyé des tulipes à Ottawa.",
                },
              ],
            },
          },
          {
            question: "afghanistan",
            answer: "kaboul",
            details: {
              create: [
                {
                  description:
                    "Son musée a été saccagé et les statues martelées par la fureur iconoclaste des Talibans.",
                },
              ],
            },
          },
          {
            question: "pérou",
            answer: "lima",
            details: {
              create: [
                {
                  description:
                    "Fondée en 1535 par le conquistador Francisco Pizarro sous le nom de 'Cité des Rois'.",
                },
              ],
            },
          },
          {
            question: "ouzbékistan",
            answer: "tachkent",
            details: {
              create: [
                {
                  description:
                    "En 1867, après une conquête fulgurante des troupes russes, Tachkent devint le siège du gouvernement général du Turkestan russe. (Aujourd'hui : kazakhstan, ouzbékistan, turkménistan, tadjikistan,kirghizistan.)",
                },
              ],
            },
          },
          {
            question: "malaisie",
            answer: "kuala lumpur",
            details: {
              create: [
                {
                  description:
                    "Les tours Pedronas, magnifique gratte ciel,ont été inaugurées en 1998.Leur architecture conjugue des éléments malais, islamique et chinois.",
                },
              ],
            },
          },
          {
            question: "venezuela",
            answer: "caracas",
            details: {
              create: [
                {
                  description:
                    "Le métrocable de Caracas a permis de relier rapidement le centre ville et les régions montagneuse des alentours.",
                },
              ],
            },
          },
          {
            question: "arabie saoudite",
            answer: "riyad",
            details: {
              create: [
                {
                  description:
                    "La ville est construite sur un site de convergence de plusieurs oueds. La tour Al Faisaliah se trouve au coeur du quartier des affaires, pyramidale elle est surmontée d'un globe.",
                },
              ],
            },
          },
          {
            question: "népal",
            answer: "katmandou",
            details: {
              create: [
                {
                  description:
                    "Un grand nombre de sites historiques de la ville ont été détruits ou endommagés par le tremblement de terre de 2015.Ils sont en reconstruction actuellement. Exemple de la Tour Bhimsen après le séisme. ",
                },
              ],
            },
          },
          {
            question: "mozambique",
            answer: "maputo",
            details: {
              create: [
                {
                  description:
                    "Une incroyable 'Maison de fer' a été attribuée à Gustave Eiffel (1892).",
                },
              ],
            },
          },
          {
            question: "ghana",
            answer: "accra",
            details: {
              create: [
                {
                  description:
                    "Contruit en 1652 par les danois-norvégiens, le Fort Christiansborg est devenu le quartier général de la république du Ghana lors de l'indépendance en 1957.",
                },
              ],
            },
          },
          {
            question: "yémen",
            answer: "sanaa",
            details: {
              create: [
                {
                  description:
                    "L'architecture sabéenne antique est unique au monde. Elle est au patrimoine mondial de l'UNESCO.",
                },
              ],
            },
          },
          {
            question: "angola",
            answer: "luanda",
            details: {
              create: [
                {
                  description:
                    "Ville fondée par un navigateur portugais et centre important du trafic d'esclaves vers le Brésil de 1550 à 1850.",
                },
              ],
            },
          },
          {
            question: "corée du nord",
            answer: "pyongyang",
            details: {
              create: [
                {
                  description:
                    "La ville possède de nombreux bâtiments spectaculaires : la grande maison des études du peuple ou l'hôtel Ryugyong pyramidal de 330 mètres.",
                },
              ],
            },
          },
          {
            question: "australie",
            answer: "canberra",
            details: {
              create: [
                {
                  description:
                    "Ce nom signifie 'lieu de rassemblement' dans la langue des aborigènes. Construite en 1913, c'est une 'ville verte' avec de vastes espaces de végétation naturelle ce qui lui vaut le nom de 'capitale du bush'.",
                },
              ],
            },
          },
          {
            question: "cameroun",
            answer: "yaoundé",
            details: {
              create: [
                {
                  description:
                    "Les batiments sont construits essentiellement sur les sept collines de la ville alors que les bas fonds marécageux sont laissés aux cultures vivrières et aux cours d'eau.",
                },
              ],
            },
          },
          {
            question: "taïwan",
            answer: "taipei",
            details: {
              create: [
                {
                  description:
                    "Réputée pour ses marchés nocturnes animés,le musée national du palais et Taipei 101 un gratte ciel de 509 mètres.",
                },
              ],
            },
          },
          {
            question: "côte d'ivoire",
            answer: "yamoussoukro",
            details: {
              create: [
                {
                  description:
                    "Capitale de la Côte d'Ivoire depuis 1983 à la suite d'Abidjan. Des lacs artificiels proches du palais présidentiel sont peuplés de crocodiles du Nil et selon la rumeur des opposants y auraient disparu. Fondation Houphouët-Boigny pour la Paix.",
                },
              ],
            },
          },
          {
            question: "madagascar",
            answer: "antananarivo",
            details: {
              create: [
                {
                  description:
                    "Au XIXème siècle le français Jean Laborde a fait construire le 'Palais de la Reine' en bois et dans la pure tradition des maisons Mérina (Peuple des hauts plateaux). ",
                },
              ],
            },
          },
          {
            question: "sri lanka",
            answer: "sri jayawardenapura",
            details: {
              create: [
                {
                  description:
                    "Cette capitale administrative est située à 7km de Colombo capitale économique et véritable centre politique du pays.",
                },
              ],
            },
          },
          {
            question: "niger",
            answer: "niamey",
            details: {
              create: [
                {
                  description:
                    "Niamey héberge le musée national Boubou-Hama, contenant le Pavillon de l'uranium : un ouvrage consacré à l'activité minière d'uranium au Niger.",
                },
              ],
            },
          },
          {
            question: "roumanie",
            answer: "bucarest",
            details: {
              create: [
                {
                  description:
                    "Sous la présidence de Nicolae Ceausescu, (1965-1989) la plus grande partie du centre historique a été détruite et remplacée par des immeubles de style soviétique.Le Palais de la République témoigne de la mégalomanie du dictateur roumain.",
                },
              ],
            },
          },
          {
            question: "syrie",
            answer: "damas",
            details: {
              create: [
                {
                  description:
                    "De 661 à 750 la ville fut la capitale des califes Omeyyades avant d'être la capitale de la Syrie.",
                },
              ],
            },
          },
          {
            question: "mali",
            answer: "bamako",
            details: {
              create: [
                {
                  description:
                    "Les trois crocodiles qui symbolisent la ville représentent les trois marigots qui traversent la ville. En 2015 se déroule une prise d'otages à l'hôtel 'Radisson blu', bilan de 23 morts.",
                },
              ],
            },
          },
          {
            question: "chili",
            answer: "santiago",
            details: {
              create: [
                {
                  description:
                    "Le métro de Santiago est le plus étendu d'Amérique du sud.",
                },
              ],
            },
          },
          {
            question: "kazakhstan",
            answer: "astana",
            details: {
              create: [
                {
                  description:
                    "Le Bayterek est un monument et une tour d'observation à Noursoultan, dont il est devenu le symbole.",
                },
              ],
            },
          },
          {
            question: "burkina faso",
            answer: "ouagadougou",
            details: {
              create: [
                {
                  description:
                    "La ville a subit de nombreux attentats islamistes en 2016, 2017, 2018.",
                },
              ],
            },
          },
          {
            question: "pays-bas",
            answer: "amsterdam",
            details: {
              create: [
                {
                  description:
                    "Les coffee-shops possèdent une licence leur permettant de commercialiser le cannabis. Pendant la deuxième guerre mondiale une famille juive est restée cachée dans un appartement secret, aujourd'hui transformé en musée. Anne Frank y a tenu un journal. Dénoncée, la famille est déportée et Anne meurt à Bergen Belsen. Le 'journal d'Anne Frank' est un des livres les plus lus dans le monde.",
                },
              ],
            },
          },
          {
            question: "malawi",
            answer: "lilongwe",
            details: {
              create: [
                {
                  description:
                    "Située à l'ouest du lac Malawi. Marchés d'artisanat.",
                },
              ],
            },
          },
          {
            question: "cambodge",
            answer: "phnom penh",
            details: {
              create: [
                {
                  description:
                    "En 1975 sous les Khmers rouges la ville fut vidée de ses habitants et une école transformée en centre de torture S21 (Musée Tuol Seng).",
                },
              ],
            },
          },
          {
            question: "équateur",
            answer: "quito",
            details: {
              create: [
                {
                  description:
                    "Construite sur les fondations d'une ancienne cité inca.La capitale est située à 2800 mètres sur le flanc du volcan le Guagua Pichincha dernière éruption en 1999.",
                },
              ],
            },
          },
          {
            question: "guatemala",
            answer: "guatemala",
            details: {
              create: [
                {
                  description:
                    "Une des villes les plus dangereuses de la planète avec une forte criminalité.",
                },
              ],
            },
          },
          {
            question: "zambie",
            answer: "lusaka",
            details: {
              create: [
                {
                  description: "Le nom Lusaka vient du nom du chef de village.",
                },
              ],
            },
          },
          {
            question: "zimbabwe",
            answer: "harare",
            details: {
              create: [
                {
                  description:
                    "La galerie nationale contient une vaste collection d'art africain et objets traditionnels: paniers,vêtements, bijoux...Au sud de la ville d'étonnantes formations de granites les 'balancing rocks'.",
                },
              ],
            },
          },
          {
            question: "sénégal",
            answer: "dakar",
            details: {
              create: [
                {
                  description:
                    "Le festival mondial des arts nègres initié par Léopold Sédar Senghor relancé en 2010 est une affirmation solennelle de la 'négritude'.",
                },
              ],
            },
          },
          {
            question: "soudan du sud",
            answer: "djouba",
            details: {
              create: [
                {
                  description:
                    "Située sur la rive gauche du Nil Blanc, capitale depuis 2005 du gouvernement autonome du Soudan du sud et 2011 du Soudan du Sud indépendant.",
                },
              ],
            },
          },
          {
            question: "rwanda",
            answer: "kigali",
            details: {
              create: [
                {
                  description:
                    "L'Hôtel des Mille Collines de Kigali devient célèbre lorsque 1300 personnes s'y réfugient lors du génocide des Tutsi au Rwanda en 1994 : tuant 800 000 personnes dont 300 000 dans la capitale. (Film : Hotel Rwanda)",
                },
              ],
            },
          },
          {
            question: "somalie",
            answer: "mogadiscio",
            details: {
              create: [
                {
                  description:
                    "En 1990 des rebelles s'emparent de la ville contraignant le président Siad Barré à l'exil.En 1992 les Nations Unies expédient une force armée sous commandement américain pour assurer la sécurité des opérations humanitaires.Après de violents combats ces forces se replient dans le désordre.Film de Ridley Scoot en 2002 : ' La chute du faucon noir'.",
                },
              ],
            },
          },
          {
            question: "tunisie",
            answer: "tunis",
            details: {
              create: [
                {
                  description:
                    "Proche des ruines de la prestigieuse Carthage, la ville s'est développée à partir du XIIème siècle.Au cours de la huitième croisade le Roi de France Louis IX y trouva la mort au cours d'une épidémie en 1270 pendant le siège de la ville.",
                },
              ],
            },
          },
          {
            question: "cuba",
            answer: "la havane",
            details: {
              create: [
                {
                  description:
                    "Centre historique du XVIème siècle, centre ville à l'architecture coloniale espagnole.",
                },
              ],
            },
          },
          {
            question: "guinée",
            answer: "conakry",
            details: {
              create: [
                {
                  description:
                    "selon la légende, un paysan baga nommé 'cona' produisait un excellent vin de palme. On allait donc chez 'cona' sur l'autre rive 'nakiri'.",
                },
              ],
            },
          },
          {
            question: "tchad",
            answer: "n'djaména",
            details: {
              create: [
                {
                  description:
                    "La ville est approvisionnée en eau par le Lac Tchad ce qui contribue à l'assèchement de ce lac.",
                },
              ],
            },
          },
          {
            question: "belgique",
            answer: "bruxelles",
            details: {
              create: [
                {
                  description:
                    "Une des capitales de l'Union Européenne, siège de la Commission Européenne.",
                },
              ],
            },
          },
          {
            question: "haïti",
            answer: "port-au-prince",
            details: {
              create: [
                {
                  description:
                    "Le tremblement de terre de 2010 a dévasté la ville.",
                },
              ],
            },
          },
          {
            question: "bolivie",
            answer: "la paz",
            details: {
              create: [
                {
                  description:
                    "à 3050 mètres d'altitude c'est la plus haute capitale du monde.",
                },
              ],
            },
          },
          {
            question: "grèce",
            answer: "athènes",
            details: {
              create: [
                {
                  description:
                    "A l'origine de la 'démocratie' mot grec associant 'démos': peuple et 'kratos': pouvoir.",
                },
              ],
            },
          },
          {
            question: "république tchèque",
            answer: "prague",
            details: {
              create: [
                {
                  description:
                    "Pendant la domination de l'U.R.S.S sur les pays d'Europe de l'Est la ville a connu en 1968 un soulèvement : le 'Printemps de Prague'. ",
                },
              ],
            },
          },
          {
            question: "portugal",
            answer: "lisbonne",
            details: {
              create: [
                {
                  description:
                    "Le musée national de l'Azulejo retrace cinq siècle de céramiques décoratives.",
                },
              ],
            },
          },
          {
            question: "bénin",
            answer: "porto-novo",
            details: {
              create: [
                {
                  description:
                    "Porto-novo, 'nouveau port' en portugais, a été initialement développé comme un port pour la traite négrière dirigée par l'Empire portugais.",
                },
              ],
            },
          },
          {
            question: "suède",
            answer: "stockholm",
            details: {
              create: [
                {
                  description:
                    "Construite sur la Baltique sur plusieurs îles elle porte le nom de 'Venise du nord'.",
                },
              ],
            },
          },
          {
            question: "république dominicaine",
            answer: "saint-domingue",
            details: {
              create: [
                {
                  description:
                    "Une des plus vieilles villes des Caraïbes.Centre historique pavé et entouré de remparts.Le palais de Colomb(El alcazar de Colon)est la maison du fils de Christophe Colomb: Diego. ",
                },
              ],
            },
          },
          {
            question: "hongrie",
            answer: "budapest",
            details: {
              create: [
                {
                  description:
                    "En 1896 fut inaugurée la première ligne de métro d'Europe continentale la 'ligne du Millénium'.",
                },
              ],
            },
          },
          {
            question: "azerbaïdjan",
            answer: "bakou",
            details: {
              create: [
                {
                  description:
                    "La ville de Bakou est réputée pour ses vents violents, ce qui lui vaut le surnom de 'Cité des vents'.",
                },
              ],
            },
          },
          {
            question: "biélorussie",
            answer: "minsk",
            details: {
              create: [
                {
                  description:
                    "Ville culturelle avec un cirque permanent et un opéra, et sportive avec notamment une entreprise qui produit des motos pour le moto ball très populaire en Biélorussie.",
                },
              ],
            },
          },
          {
            question: "burundi",
            answer: "gitega",
            details: {
              create: [
                {
                  description:
                    "bujumbura est la plus grande ville et la capitale économique mais Gitega est la capitale politique depuis le 21 décembre 2018.",
                },
              ],
            },
          },
          {
            question: "émirats arabes unis",
            answer: "abou dabi",
            details: {
              create: [
                {
                  description:
                    "Son nom signifie 'père de la gazelle', de nombreuses gazelles vivant à cet endroit.En 2017 a été ouvert le 'Louvre d'Abou dabi'(architecte français Jean Nouvel)",
                },
              ],
            },
          },
          {
            question: "autriche",
            answer: "vienne",
            details: {
              create: [
                {
                  description:
                    "Cette ville est le siège de l'O.P.E.P et de l'Agence Internationale de l'énergie atomique.Depuis 1939 l'orchestre philharmonique de Vienne joue le 'concert du nouvel an'.",
                },
              ],
            },
          },
          {
            question: "honduras",
            answer: "tegucigalpa",
            details: {
              create: [
                {
                  description:
                    "L'aéroport est célèbre pour sa piste en pleine ville, la plus courte du monde.",
                },
              ],
            },
          },
          {
            question: "suisse",
            answer: "berne",
            details: {
              create: [
                {
                  description:
                    "Sur une péninsule de la rivière Aar, les origines de la ville remontent au XIIème siècle.",
                },
              ],
            },
          },
          {
            question: "tadjikistan",
            answer: "douchanbé",
            details: {
              create: [
                {
                  description:
                    "En 1990,de violentes manifestations après les plans de relocalisation de dizaines de milliers de réfugiés arméniens exacerbant un fort sentiment de nationalisme.",
                },
              ],
            },
          },
          {
            question: "israël",
            answer: "jérusalem",
            details: {
              create: [
                {
                  description:
                    "La ville tient une place centrale dans les religions juive avec le 'mur des lamentations', chrétienne avec l'église du Saint sépulcre et le tombeau du christ et musulmane avec l'esplanade des mosquées.",
                },
              ],
            },
          },
          {
            question: "togo",
            answer: "lomé",
            details: {
              create: [
                {
                  description:
                    "Dans son 'marché des fétiches' on peut trouver ce que prescrivent les sorciers.",
                },
              ],
            },
          },
          {
            question: "bulgarie",
            answer: "sofia",
            details: {
              create: [
                {
                  description:
                    "Son nom vient de la basilique Sainte Sophie, grande basilique byzantine dont les vestiges les plus anciens remontent au Vème siècle, elle fut transformée en mosquée pendant l'occupation ottomane, puis redevint une église après la libération.",
                },
              ],
            },
          },
          {
            question: "serbie",
            answer: "belgrade",
            details: {
              create: [
                {
                  description:
                    "En 1521 le Sultan Soliman le magnifique s'empara de la ville ce qui lui ouvrit les portes de l'Europe centrale.En 1945, le Maréchal Tito proclame la naissance de la République Fédérative populaire de Yougoslavie.",
                },
              ],
            },
          },
          {
            question: "laos",
            answer: "vientiane",
            details: {
              create: [
                {
                  description: "Le Pha That Luang Construit au XVIème siècle.",
                },
              ],
            },
          },
          {
            question: "jordanie",
            answer: "amman",
            details: {
              create: [
                {
                  description:
                    "Pôle journalistique important, c'est la porte d'entrée pour les journalistes qui veulent étudier la situation dans les pays du moyen orient.",
                },
              ],
            },
          },
          {
            question: "paraguay",
            answer: "asuncion",
            details: {
              create: [
                {
                  description:
                    "Asuncion fut mise à sac pendant la guerre de la Triple-Alliance (1869-1876 Brésil, Uruguay, Argentine.),la population paraguayenne a été réduite de moitié.",
                },
              ],
            },
          },
          {
            question: "papouasie-nouvelle-guinée",
            answer: "port moresby",
            details: {
              create: [
                {
                  description:
                    "Le territoire fut découvert par le capitaine britannique John Moresby en 1873. Il nomma la ville en hommage à son père, l'amiral Sir Fairfax Moresby.",
                },
              ],
            },
          },
          {
            question: "érythrée",
            answer: "asmara",
            details: {
              create: [
                {
                  description:
                    "Bâtiments de style colonial italien,des cinéma de style art-déco,une station service de 1938 'Fiat Tagliero' qui évoque un avion.",
                },
              ],
            },
          },
          {
            question: "libye",
            answer: "tripoli",
            details: {
              create: [
                {
                  description:
                    "Fondée au VIIème siècle av J.C par les Phéniciens.",
                },
              ],
            },
          },
          {
            question: "nicaragua",
            answer: "managua",
            details: {
              create: [
                {
                  description:
                    "proche d'un lac son nom signifie 'proche de l'eau'.Située sur une zone sismique les tremblements de terre sont fréquents.",
                },
              ],
            },
          },
          {
            question: "salvador",
            answer: "san salvador",
            details: {
              create: [
                {
                  description:
                    "Le monument 'au divin sauveur du monde' est un piédestal avec une statue du Christ debout sur un globe terrestre.",
                },
              ],
            },
          },
          {
            question: "kirghizistan",
            answer: "bichkek",
            details: {
              create: [
                {
                  description:
                    "L'épopée de Manas est une œuvre issue de la tradition orale du peuple kirghize, le thème central est la lutte d'indépendance des nomades kirghizes contre les Chinois, sous dynastie mongole.",
                },
              ],
            },
          },
          {
            question: "liban",
            answer: "beyrouth",
            details: {
              create: [
                {
                  description:
                    "Beyrouth a connu deux explosions accidentelles d'un stock de nitrate d'ammonium en 2020, faisant 215 morts et 6 500 blessés. ",
                },
              ],
            },
          },
          {
            question: "sierra leone",
            answer: "freetown",
            details: {
              create: [
                {
                  description:
                    "La ville a été fondée par d'anciens esclaves libérés par des abolitionnistes britanniques et des esclaves de la Nouvelle Écosse à la fin du XVIIIème siècle.",
                },
              ],
            },
          },
          {
            question: "danemark",
            answer: "copenhague",
            details: {
              create: [
                {
                  description:
                    "On y trouve la statue de la 'petite sirène' du conte d'Andersen.",
                },
              ],
            },
          },
          {
            question: "finlande",
            answer: "helsinki",
            details: {
              create: [
                {
                  description:
                    "Plus de 130 nationalités différentes à Helsinki.",
                },
              ],
            },
          },
          {
            question: "slovaquie",
            answer: "bratislava",
            details: {
              create: [
                {
                  description:
                    "En 1993, la ville devient capitale de la nouvelle république slovaque à la suite de la dissolution de la fédération tchécoslovaque appelée le 'divorce de velours'.",
                },
              ],
            },
          },
          {
            question: "singapour",
            answer: "singapour",
            details: {
              create: [
                {
                  description:
                    "Au coeur du monde malais, cette ville est peuplée en majorité de Chinois(75%).Elle est célèbre pour le gratte-ciel de 'Marina Bay' ou encore le parc de 'garden of the bay'.",
                },
              ],
            },
          },
          {
            question: "république centrafricaine",
            answer: "bangui",
            details: {
              create: [
                {
                  description:
                    "partie de l'afrique équatoriale française la ville porte le nom du fleuve oubangui qui la traverse.",
                },
              ],
            },
          },
          {
            question: "norvège",
            answer: "oslo",
            details: {
              create: [
                {
                  description:
                    "Son ancien nom 'Christiana', un surnom ' ville du tigre' une statue de tigre a été érigée près de la gare en allusion à la capacité des habitants à intégrer les migrants pakistanais, vietnamiens...",
                },
              ],
            },
          },
          {
            question: "turkménistan",
            answer: "achgabat",
            details: {
              create: [
                {
                  description:
                    "L'arche de la neutralité, monument emblématique turkmène a été reconstruite au sud de la ville.",
                },
              ],
            },
          },
          {
            question: "costa rica",
            answer: "san josé",
            details: {
              create: [
                {
                  description:
                    "On y trouve des musées de premier plan de l'art pré-colombien : le 'Musée de l'or' et le 'Musée de jade'.On peut aussi engager des groupes de musiciens les 'mariachis' pour animer des soirées ou donner la sérénade à une femme.",
                },
              ],
            },
          },
          {
            question: "irlande",
            answer: "dublin",
            details: {
              create: [
                {
                  description:
                    "Depuis 1759 la fameuse bière Guinness est produite dans la brasserie de st James's Gate.",
                },
              ],
            },
          },
          {
            question: "république du congo",
            answer: "brazzaville",
            details: {
              create: [
                {
                  description:
                    "Pendant la seconde guerre mondiale la ville a été la capitale de la 'France libre' (1940-1942)",
                },
              ],
            },
          },
          {
            question: "nouvelle-zélande",
            answer: "wellington",
            details: {
              create: [
                {
                  description:
                    "les vents violents du détroit de Cook lui donnent le surnom de 'Wellington la venteuse' (windy Wellington) Le célèbre tramway de Wellington rejoint les jardins botaniques.",
                },
              ],
            },
          },
          {
            question: "palestine",
            answer: "ramallah",
            details: {
              create: [
                {
                  description:
                    "Capitale administrative de l'autorité palestinienne.la population composée initialement de palestiniens chrétiens comprend depuis 1948 de nombreux musulmans venus de toute la Palestine.",
                },
              ],
            },
          },
          {
            question: "géorgie",
            answer: "tbilissi",
            details: {
              create: [
                {
                  description:
                    "En novembre 2003, une révolution pacifique nommée 'révolution des roses' provoque la chute du président Chevardnadze.",
                },
              ],
            },
          },
          {
            question: "croatie",
            answer: "zagreb",
            details: {
              create: [
                {
                  description:
                    "Cette ville est importante au niveau mondial pour le film d'animation via son école.le 'festival du film d'animation ' réunit des animateurs des quatre coins du monde.",
                },
              ],
            },
          },
          {
            question: "liberia",
            answer: "monrovia",
            details: {
              create: [
                {
                  description:
                    "Monrovia a été fondée en 1822 par la Société américaine de colonisation pour servir de refuge aux esclaves affranchis d'Amérique du Nord.",
                },
              ],
            },
          },
          {
            question: "bosnie-herzégovine",
            answer: "sarajevo",
            details: {
              create: [
                {
                  description:
                    "En 1914, l'assassinat de l'Archiduc d'Autriche François Ferdinand a été le point de départ de la première guerre mondiale.De 1992 à 1996, pendant la guerre de Bosnie le siège de la ville a fait plus de 11 000 morts.Le Parlement de Bosnie a été brûlé.",
                },
              ],
            },
          },
          {
            question: "oman",
            answer: "mascate",
            details: {
              create: [
                {
                  description:
                    "Moderne, revêtue de marbre la grande mosquée du Sultan Qaboos peut accueillir 20 000 personnes.",
                },
              ],
            },
          },
          {
            question: "panama",
            answer: "panama",
            details: {
              create: [
                {
                  description:
                    "Le canal de Panama commencé en 1881 par Ferdinand de Lesseps fut abandonné en 1888 après la mort de 20 000 ouvriers(fièvre jaune, glissements de terrain) Il est inauguré en 1914.",
                },
              ],
            },
          },
          {
            question: "la moldavie",
            answer: "chisinau",
            details: {
              create: [
                {
                  description:
                    "De 1940 à 1950, le régime fasciste Roumain et le régime stalinien ont par des déportations et des massacres provoqué une forte diminution de la population compensée depuis par l'arrivée de juifs,russes, ukrainiens et moldaves des campagnes.",
                },
              ],
            },
          },
          {
            question: "mauritanie",
            answer: "nouakchott",
            details: {
              create: [
                {
                  description:
                    "La ville se trouve à la frontière de deux aires culturelles : le monde arabe et l'Afrique noire.",
                },
              ],
            },
          },
          {
            question: "uruguay",
            answer: "montevideo",
            details: {
              create: [
                {
                  description:
                    "Considérée comme la ville d'Amérique Latine où la qualité de vie est la plus élevée. Elle fait partie des trente villes les plus sûres du monde.",
                },
              ],
            },
          },
          {
            question: "albanie",
            answer: "tirana",
            details: {
              create: [
                {
                  description:
                    "La ville souffre de pollution en raison des automobiles diesels et parce qu'on y utilise un carburant contenant plus de soufre et de plomb.",
                },
              ],
            },
          },
          {
            question: "arménie",
            answer: "erevan",
            details: {
              create: [
                {
                  description:
                    "Erevan connaît une histoire mouvementée faite de batailles, de pillages, d'incendies et de séismes pendant plus de 2 500 ans et recueille une partie des rescapés du génocide arménien voir le mémorial.",
                },
              ],
            },
          },
          {
            question: "mongolie",
            answer: "oulan-bator",
            details: {
              create: [
                {
                  description:
                    "La ville possède de nombreux artisans qui vendent des produits traditionnels des nomades : des vêtements de feutre ou de soie, du matériel équestre : cravaches, selles...",
                },
              ],
            },
          },
          {
            question: "lituanie",
            answer: "vilnius",
            details: {
              create: [
                {
                  description:
                    "Avant la deuxième guerre mondiale la ville était un grand centre juif et Napoléon l'appelait la ' Jérusalem du nord'.",
                },
              ],
            },
          },
          {
            question: "koweït",
            answer: "koweït",
            details: {
              create: [
                {
                  description:
                    "Les bédouins apportaient dans le port les beaux chevaux arabes vendus aux Indes britanniques.",
                },
              ],
            },
          },
          {
            question: "jamaïque",
            answer: "kingston",
            details: {
              create: [
                {
                  description:
                    "Dans le centre ville le musée Bob Marley est aménagé dans l'ancienne maison du chanteur reagge.",
                },
              ],
            },
          },
          {
            question: "qatar",
            answer: "doha",
            details: {
              create: [
                {
                  description:
                    "La ville abritera plusieurs matches de la coupe du monde de football de 2022 organisée par le Qatar.",
                },
              ],
            },
          },
          {
            question: "namibie",
            answer: "windhoek",
            details: {
              create: [
                {
                  description:
                    "Capitale depuis l'indépendance de la Namibie en 1990.Eglise luthérienne et statue du cavalier allemand.",
                },
              ],
            },
          },
          {
            question: "botswana",
            answer: "gaborone",
            details: {
              create: [
                {
                  description:
                    "Située au sud/est du Boswana près du fleuve Notwani.",
                },
              ],
            },
          },
          {
            question: "slovénie",
            answer: "ljubljana",
            details: {
              create: [
                {
                  description:
                    "Connue pour sa population étudiante et ses espaces verts (Parc Tivoli)La ville est traversée par une rivière sinueuse.",
                },
              ],
            },
          },
          {
            question: "macédoine",
            answer: "skopje",
            details: {
              create: [
                {
                  description:
                    "La ville a connu la domination romaine,byzantine et ottomane.La forteresse Kale a assuré la protection de la ville pendant des siècles.",
                },
              ],
            },
          },
          {
            question: "lettonie",
            answer: "riga",
            details: {
              create: [
                {
                  description:
                    "Centre culturel elle est réputée pour ses bâtiments en bois,son architecture art nouveau, sa vieille ville médiévale.",
                },
              ],
            },
          },
          {
            question: "lesotho",
            answer: "maseru",
            details: {
              create: [
                {
                  description:
                    "L'industrie repose sur la production de bougies et de tapis.",
                },
              ],
            },
          },
          {
            question: "gambie",
            answer: "banjul",
            details: {
              create: [
                {
                  description:
                    "Après les guerres napoléoniennes, Sir Alexander Grant fonde la ville de Banjul afin de contrôler l'entrée de l'estuaire de la Gambie (fleuve) et maîtriser la traite des esclaves dans cette région.",
                },
              ],
            },
          },
          {
            question: "timor oriental",
            answer: "dili",
            details: {
              create: [
                {
                  description:
                    "Le Timor oriental déclara son indépendance du Portugal en 1975 puis une seconde fois de l'Indonésie en 2001. Le massacre de Dili de 1991 a renforcé l'appui international pour son indépendance.",
                },
              ],
            },
          },
          {
            question: "kosovo",
            answer: "pristina",
            details: {
              create: [
                {
                  description:
                    "La ville a particulièrement souffert de la guerre de 1996 à 1999,elle peine à se relever.L'architecture de la bibliothèque nationale est très audacieuse.",
                },
              ],
            },
          },
          {
            question: "guinée-bissau",
            answer: "bissau",
            details: {
              create: [
                {
                  description:
                    "1942, la ville est capitale de la Guinée portugaise. En 1974,les portugais donnèrent l'indépendance au pays et Bissau redevint capitale.",
                },
              ],
            },
          },
          {
            question: "gabon",
            answer: "libreville",
            details: {
              create: [
                {
                  description:
                    "Son boulevard de front de mer possède des parcs et des sculptures.Le palais du Sénat est un lieu important de l'architecture moderne locale.",
                },
              ],
            },
          },
          {
            question: "eswatini",
            answer: "mbabane",
            details: {
              create: [
                {
                  description:
                    "Le roi Sobhuza II meurt en 1982 à Mbabane. Il aurait eu 70 épouses et 210 enfants dont Mswati III, le roi actuel de l'Eswatini.",
                },
              ],
            },
          },
          {
            question: "maurice",
            answer: "port-louis",
            details: {
              create: [
                {
                  description:
                    "Son nom est un hommage au roi français Louis XV.Colonie française puis anglaise avant son indépendance, de nombreux immigrés de l'Inde sont arrivés sur l'île Maurice au XIXème siècle et 70% des mauriciens sont d'origine indienne.",
                },
              ],
            },
          },
          {
            question: "estonie",
            answer: "tallinn",
            details: {
              create: [
                {
                  description:
                    "De 1944 à 1991, sous la domination de l'U.R.S.S une forte immigration de Russes explique qu'ils représentent actuellement plus de 36% de la population de la ville.",
                },
              ],
            },
          },
          {
            question: "bahreïn",
            answer: "manama",
            details: {
              create: [
                {
                  description:
                    "En 2011 dans la contexte du 'printemps arabe' plusieurs milliers de manifestants ont occupé la 'place de la perle',le mouvement a été réprimé dans le sang.",
                },
              ],
            },
          },
          {
            question: "trinité-et-tobago",
            answer: "port-d'espagne",
            details: {
              create: [
                {
                  description:
                    "Exportations de produits de l'agriculture,de la bauxite et du fer vers les Guyanes et le Vénézuela.",
                },
              ],
            },
          },
          {
            question: "guinée équatoriale",
            answer: "malabo",
            details: {
              create: [
                { description: "Cathédrale néo-gothique Santa Isabel." },
              ],
            },
          },
          {
            question: "chypre",
            answer: "nicosie",
            details: {
              create: [
                {
                  description:
                    "La ville est divisée en deux par la 'ligne verte'contrôlée par l'ONU.Le nord est sous occupation turque.",
                },
              ],
            },
          },
          {
            question: "djibouti",
            answer: "djibouti",
            details: {
              create: [
                {
                  description:
                    "Architecture du XIXème siècle , style colonial français.",
                },
              ],
            },
          },
          {
            question: "fidji",
            answer: "suva",
            details: {
              create: [{ description: "Capitale des îles Fidji depuis 1877." }],
            },
          },
          {
            question: "bhoutan",
            answer: "thimphou",
            details: {
              create: [
                {
                  description:
                    "pendant le festival les moines portent des robes de brocards et des masques de divinités ou d'animaux.",
                },
              ],
            },
          },
          {
            question: "comores",
            answer: "moroni",
            details: {
              create: [
                {
                  description:
                    "Capitale de l'Etat comorien depuis son indépendance en 1975.",
                },
              ],
            },
          },
          {
            question: "guyana",
            answer: "georgetown",
            details: {
              create: [
                {
                  description:
                    "La ville est dominée par la tour d'horloge du marché Stabroek.",
                },
              ],
            },
          },
          {
            question: "monténégro",
            answer: "podgorica",
            details: {
              create: [
                {
                  description:
                    "Ancienne 'Titograd' (Ville de Tito)de 1946 à 1992.",
                },
              ],
            },
          },
          {
            question: "îles salomon",
            answer: "honiara",
            details: {
              create: [
                {
                  description:
                    "reconstruite après la seconde guerre mondiale, au large a eu lieu la célèbre bataille de Guadalcanal.",
                },
              ],
            },
          },
          {
            question: "luxembourg",
            answer: "luxembourg",
            details: {
              create: [
                {
                  description:
                    "Une des capitales de l'Union Européenne, siège de la Cour de Justice de l'Union Européenne.",
                },
              ],
            },
          },
          {
            question: "le sahara occidental",
            answer: "laâyoune",
            details: {
              create: [
                {
                  description:
                    "Son nom signifie 'sources' en berbère,le pays est sous le contrôle du Maroc et une mission des nations unies a son quartier général à Laâyoune.",
                },
              ],
            },
          },
          {
            question: "suriname",
            answer: "paramaribo",
            details: {
              create: [
                {
                  description:
                    "Le centre ville est inscrit au patrimoine mondial de l'UNESCO en raison de la fusion d'architecture européenne avec les matériaux de l'artisanat indigène sud-américain. ",
                },
              ],
            },
          },
          {
            question: "le cap vert",
            answer: "praia",
            details: {
              create: [
                {
                  description:
                    "Sur la plus grande des îles du cap vert, la ville possède un palais présidentiel.",
                },
              ],
            },
          },
          {
            question: "malte",
            answer: "la valette",
            details: {
              create: [
                {
                  description:
                    "Porte le nom du grand maître Jean de Valette, de l'ordre hospitalier de saint Jean de Jérusalem.",
                },
              ],
            },
          },
          {
            question: "brunei",
            answer: "bandar seri begawan",
            details: {
              create: [
                {
                  description:
                    "Son nom mélange des influences malaises et hindous ( Sanskrit) et signifie ' ville bénie'.Magnifique mosquée d'Omar Ali Saifuddin.",
                },
              ],
            },
          },
          {
            question: "maldives",
            answer: "malé",
            details: {
              create: [
                {
                  description:
                    "île surpeuplée un tiers de sa surface a été gagnée sur l'océan indien.",
                },
              ],
            },
          },
          {
            question: "bahamas",
            answer: "nassau",
            details: {
              create: [
                {
                  description:
                    "Escale de bateaux de croisière, paysages vallonnés,la ville conserve des bâtiments coloniaux britanniques aux couleurs pastel comme la government house à la façade rose.",
                },
              ],
            },
          },
          {
            question: "belize",
            answer: "belmopan",
            details: {
              create: [
                {
                  description:
                    "Le Belize se nommait le Honduras britannique avant son indépendance. La dénomination actuelle provient du nom de l'ancienne capitale et du fleuve du même nom.Le bâtiment du parlement conçu pour ressembler à un temple maya.",
                },
              ],
            },
          },
          {
            question: "islande",
            answer: "reykjavik",
            details: {
              create: [
                {
                  description:
                    "Capitale la plus septentrionale d'un état souverain.",
                },
              ],
            },
          },
          {
            question: "barbade",
            answer: "bridgetown",
            details: {
              create: [
                {
                  description:
                    "Réputée pour son architecture coloniale britannique, son champ de courses hippiques. La chanteuse Rihanna a grandi à Bridgetown.",
                },
              ],
            },
          },
          {
            question: "vanuatu",
            answer: "port-vila",
            details: {
              create: [
                {
                  description:
                    "La ville sert de base pour la plongée et les excursions,le musée national expose des tamtams et des pirogues à balancier.",
                },
              ],
            },
          },
          {
            question: "abkhazie",
            answer: "soukhoumi",
            details: {
              create: [
                {
                  description:
                    "L'Abkhazie est une région séparatriste de la Géorgie, la ville a souffert de la guerre. elle possède un magnifique jardin botanique.",
                },
              ],
            },
          },
          {
            question: "tomé-et-principe",
            answer: "são tomé",
            details: {
              create: [
                {
                  description:
                    "Parfois surnommée 'île chocolat', on y récolte des fèves de cacao.Des enclos permettent de récolter et protéger les oeufs des tortues marines.",
                },
              ],
            },
          },
          {
            question: "samoa",
            answer: "apia",
            details: {
              create: [
                {
                  description:
                    "En 1889, un cyclone a détruit les navires militaires allemands, britanniques et américains qui avaient refusé de quitter le port.",
                },
              ],
            },
          },
          {
            question: "sainte-lucie",
            answer: "castries",
            details: {
              create: [
                {
                  description:
                    "Les bateaux de croisière y font escale et la cathédrale de l'immaculée conception est célèbre pour ses fresques colorées.",
                },
              ],
            },
          },
          {
            question: "kiribati",
            answer: "tarawa",
            details: {
              create: [
                {
                  description:
                    "Atoll des îles Gilbert.Une bataille célèbre en 1943 entre les américains et les japonais pour le contrôle de l'aéroport.",
                },
              ],
            },
          },
          {
            question: "saint-vincent-et-les grenadines",
            answer: "kingstown",
            details: {
              create: [
                {
                  description:
                    "Le fort Charlotte domine la ville, construit par les Anglais en 1806 pour protéger la ville des Indiens Caraïbes. ",
                },
              ],
            },
          },
          {
            question: "antigua-et-barbuda",
            answer: "saint john's",
            details: {
              create: [
                {
                  description:
                    "Son musée présente les tribus indigènes et la vie dans les plantations.",
                },
              ],
            },
          },
          {
            question: "grenade",
            answer: "saint-georges",
            details: {
              create: [
                {
                  description:
                    "Ville fondée par les français sur ordre de Richelieu en 1650.",
                },
              ],
            },
          },
          {
            question: "tonga",
            answer: "nuku'alofa",
            details: {
              create: [
                {
                  description:
                    "En 2006 la ville a connu des émeutes qui ont causé la destruction de 80% du centre ville.",
                },
              ],
            },
          },
          {
            question: "micronésie",
            answer: "palikir",
            details: {
              create: [
                { description: "Sur l'île de Pohnpei, capitale depuis 1989." },
              ],
            },
          },
          {
            question: "seychelles",
            answer: "victoria",
            details: {
              create: [
                {
                  description:
                    "Son jardin botanique contient des orchidées endémiques mais aussi des tortues géantes et des chauve souris frugivores. L'horloge de Victoria est une reproduction en miniature de la tour de l'horloge de Westminster.",
                },
              ],
            },
          },
          {
            question: "andorre",
            answer: "andorre-la-vieille",
            details: {
              create: [
                {
                  description:
                    "Son nom viendrait du basque 'ametura' qui signifie 'Dix sources'.",
                },
              ],
            },
          },
          {
            question: "dominique",
            answer: "roseau",
            details: {
              create: [
                {
                  description:
                    "Architecture créole du XVIIIème siècle,anciennement site d'enchères d'esclaves. Les perroquets Sisserou sont endémiques de l'île.",
                },
              ],
            },
          },
          {
            question: "ossétie du sud",
            answer: "tskhinvali",
            details: {
              create: [
                {
                  description:
                    "Peu de pays reconnaissent l'indépendance de l'Ossétie du sud reconnue par la Russie en 2008.",
                },
              ],
            },
          },
          {
            question: "îles marshall",
            answer: "delap-uliga-darrit",
            details: {
              create: [
                {
                  description:
                    "Elles est constituée de trois motus reliés par des digues.Le Capitole est le symbole de cette République.",
                },
              ],
            },
          },
          {
            question: "saint-christophe-et-niévès",
            answer: "basseterre",
            details: {
              create: [
                {
                  description:
                    "Fondée par des français au XVIIème siècle,la ville est souvent menacée par des cyclones et tremblements de terre.",
                },
              ],
            },
          },
          {
            question: "monaco",
            answer: "monaco",
            details: {
              create: [
                {
                  description:
                    "Célèbre pour son grand prix de formule 1 dans les rues de la ville.Depuis 2005 le Prince Albert II est le Prince souverain de Monaco.",
                },
              ],
            },
          },
          {
            question: "liechtenstein",
            answer: "vaduz",
            details: {
              create: [
                {
                  description:
                    "lieu de résidence de la famille princière qui règne depuis 1719.",
                },
              ],
            },
          },
          {
            question: "saint-marin",
            answer: "saint-marin",
            details: {
              create: [
                {
                  description:
                    "Réputée pour sa vieille ville fortifiée médiévale.Après la répression des révolutions de 1848/1849, Garibaldi y trouva refuge.",
                },
              ],
            },
          },
          {
            question: "palaos",
            answer: "melekeok",
            details: {
              create: [{ description: "Possède un imposant Capitole." }],
            },
          },
          {
            question: "Îles cook",
            answer: "avarua",
            details: {
              create: [
                {
                  description:
                    "L'archipel a été nommé en l'honneur de James Cook, un navigateur britannique, qui explora les îles en 1777. Avarua regroupe près de la moitié de la population cookienne avec environ 15 000 d'habitants.",
                },
              ],
            },
          },
          {
            question: "nauru",
            answer: "yaren",
            details: {
              create: [
                {
                  description:
                    "Altitude moyenne de 25 mètres superficie de 1,5 km2.Le puits Moqua est un petit lac souterrain d'eau douce.",
                },
              ],
            },
          },
          {
            question: "tuvalu",
            answer: "funafuti",
            details: {
              create: [
                {
                  description:
                    "Atoll de forme allongée nord/sud, le récif corallien qui entoure le lagon supporte 33 motus ( îlots de sable).",
                },
              ],
            },
          },
          {
            question: "niue",
            answer: "alofi",
            details: {
              create: [
                {
                  description:
                    "L'activité sportive traditionnelle se nomme le kilikiki, c'est une sorte de criquet.",
                },
              ],
            },
          },
          {
            question: "vatican",
            answer: "vatican",
            details: {
              create: [
                {
                  description:
                    "Le Vatican se compose de deux entités juridiques distinctes : le Saint Siège entité spirituelle et l'état de la cité du Vatican entité temporelle.Le lien entre ces deux entités est le Pape.",
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      pul_elements: true,
    },
  });

  console.log(result);
}

main().catch((e) => console.error(e));
