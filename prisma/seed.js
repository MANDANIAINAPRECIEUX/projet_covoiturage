import db from "../backend/config/db.js";

const data = [
  {
    nom_conducteur: "Aurore",
    prenom_conducteur: "Maëlys",
    email_conducteur: "acathee0@redcross.org",
    telephone_conducteur: "+351 (856) 154-7894",
  },
  {
    nom_conducteur: "Andreas",
    prenom_conducteur: "Vénus",
    email_conducteur: "ahamp1@google.com.br",
    telephone_conducteur: "+33 (295) 747-6108",
  },
  {
    nom_conducteur: "Gail",
    prenom_conducteur: "Bécassine",
    email_conducteur: "gbarthrup2@goodreads.com",
    telephone_conducteur: "+46 (167) 610-5541",
  },
  {
    nom_conducteur: "Kalli",
    prenom_conducteur: "Bérangère",
    email_conducteur: "kbadini3@nasa.gov",
    telephone_conducteur: "+355 (928) 246-7821",
  },
  {
    nom_conducteur: "Cynde",
    prenom_conducteur: "Mén",
    email_conducteur: "cstarkey4@ning.com",
    telephone_conducteur: "+7 (943) 229-6045",
  },
  {
    nom_conducteur: "Rudie",
    prenom_conducteur: "Bénédicte",
    email_conducteur: "rreast5@usda.gov",
    telephone_conducteur: "+7 (590) 449-7336",
  },
  {
    nom_conducteur: "Sofie",
    prenom_conducteur: "Görel",
    email_conducteur: "sghelardoni6@vistaprint.com",
    telephone_conducteur: "+1 (977) 475-9525",
  },
  {
    nom_conducteur: "Mano",
    prenom_conducteur: "Léa",
    email_conducteur: "mwayt7@examiner.com",
    telephone_conducteur: "+63 (905) 886-0514",
  },
  {
    nom_conducteur: "Pamelina",
    prenom_conducteur: "Östen",
    email_conducteur: "pmacieiczyk8@gov.uk",
    telephone_conducteur: "+62 (799) 387-9035",
  },
  {
    nom_conducteur: "Seka",
    prenom_conducteur: "Yénora",
    email_conducteur: "sferroni9@nature.com",
    telephone_conducteur: "+86 (948) 470-0063",
  },
  {
    nom_conducteur: "Tally",
    prenom_conducteur: "Dafnée",
    email_conducteur: "tliella@networkadvertising.org",
    telephone_conducteur: "+52 (217) 248-9754",
  },
  {
    nom_conducteur: "Ephraim",
    prenom_conducteur: "Pò",
    email_conducteur: "eattenbarrowb@51.la",
    telephone_conducteur: "+357 (867) 843-6081",
  },
  {
    nom_conducteur: "Shanan",
    prenom_conducteur: "Björn",
    email_conducteur: "slebrunc@aboutads.info",
    telephone_conducteur: "+506 (675) 137-0888",
  },
  {
    nom_conducteur: "Burnard",
    prenom_conducteur: "Bénédicte",
    email_conducteur: "btubridyd@shop-pro.jp",
    telephone_conducteur: "+245 (740) 275-4590",
  },
  {
    nom_conducteur: "Jan",
    prenom_conducteur: "Méryl",
    email_conducteur: "jclothiere@angelfire.com",
    telephone_conducteur: "+507 (176) 526-6084",
  },
  {
    nom_conducteur: "Wheeler",
    prenom_conducteur: "Cléopatre",
    email_conducteur: "wbrislenf@latimes.com",
    telephone_conducteur: "+55 (615) 347-2813",
  },
  {
    nom_conducteur: "Doro",
    prenom_conducteur: "Médiamass",
    email_conducteur: "dbernardg@gizmodo.com",
    telephone_conducteur: "+62 (500) 643-9927",
  },
  {
    nom_conducteur: "Allianora",
    prenom_conducteur: "Médiamass",
    email_conducteur: "adewesh@google.com.br",
    telephone_conducteur: "+82 (195) 363-4645",
  },
  {
    nom_conducteur: "Sibeal",
    prenom_conducteur: "Méline",
    email_conducteur: "strousdalei@feedburner.com",
    telephone_conducteur: "+51 (157) 632-7364",
  },
  {
    nom_conducteur: "Cori",
    prenom_conducteur: "Intéressant",
    email_conducteur: "cpoyserj@themeforest.net",
    telephone_conducteur: "+351 (403) 448-1893",
  },
];

const seed = async () => {
  const res = await db.conducteur.createMany({
    data: [...data],
  });
  console.log(res);
};

seed();
