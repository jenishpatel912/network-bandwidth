import axios from "axios";

export const fetchData = async (url, payload) => {
  let error = null;
  let response = null;
  try {
    const resp = await axios.post(
      `https://developer-tester.lightningproxies.net/api/${url}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          // "api-key": "bqzncgO9k3"
        },
      }
    );

    response = resp?.data;
  } catch (err) {
    console.log(err);
    error = err;
  }

  return { error, response };
};

export const bytesToGB = (bytes) => {
  return bytes > 0 ? (bytes / 1000000000).toFixed(2) : 0;
};
export const countries = [
  {
    id: 84,
    country_name: "Brazil",
    country_code: "br",
    is_main: 1,
  },
  {
    id: 85,
    country_name: "Canada",
    country_code: "ca",
    is_main: 1,
  },
  {
    id: 3,
    country_name: "France",
    country_code: "fr",
    is_main: 1,
  },
  {
    id: 10,
    country_name: "India",
    country_code: "in",
    is_main: 1,
  },
  {
    id: 16,
    country_name: "Indonesia",
    country_code: "id",
    is_main: 1,
  },
  {
    id: 5,
    country_name: "Japan",
    country_code: "jp",
    is_main: 1,
  },
  {
    id: 95,
    country_name: "Singapore",
    country_code: "sg",
    is_main: 1,
  },
  {
    id: 2,
    country_name: "South Korea",
    country_code: "kr",
    is_main: 1,
  },
  {
    id: 4,
    country_name: "Uk",
    country_code: "gb",
    is_main: 1,
  },
  {
    id: 1,
    country_name: "USA",
    country_code: "us",
    is_main: 1,
  },
  {
    id: 39,
    country_name: "Afghanistan",
    country_code: "af",
    is_main: 0,
  },
  {
    id: 102,
    country_name: "Algeria",
    country_code: "dz",
    is_main: 0,
  },
  {
    id: 83,
    country_name: "Argentina",
    country_code: "ar",
    is_main: 0,
  },
  {
    id: 40,
    country_name: "Armenia",
    country_code: "am",
    is_main: 0,
  },
  {
    id: 96,
    country_name: "Australia",
    country_code: "au",
    is_main: 0,
  },
  {
    id: 61,
    country_name: "Austria",
    country_code: "at",
    is_main: 0,
  },
  {
    id: 41,
    country_name: "Azerbaijan",
    country_code: "az",
    is_main: 0,
  },
  {
    id: 24,
    country_name: "Bahrain",
    country_code: "bh",
    is_main: 0,
  },
  {
    id: 18,
    country_name: "Bangladesh",
    country_code: "bd",
    is_main: 0,
  },
  {
    id: 59,
    country_name: "Belarus",
    country_code: "by",
    is_main: 0,
  },
  {
    id: 60,
    country_name: "Belgium",
    country_code: "be",
    is_main: 0,
  },
  {
    id: 19,
    country_name: "Bhutan",
    country_code: "bt",
    is_main: 0,
  },
  {
    id: 87,
    country_name: "Chile",
    country_code: "cl",
    is_main: 0,
  },
  {
    id: 86,
    country_name: "Colombia",
    country_code: "co",
    is_main: 0,
  },
  {
    id: 82,
    country_name: "Croatia",
    country_code: "hr",
    is_main: 0,
  },
  {
    id: 88,
    country_name: "Cuba",
    country_code: "cu",
    is_main: 0,
  },
  {
    id: 32,
    country_name: "Cyprus",
    country_code: "cy",
    is_main: 0,
  },
  {
    id: 75,
    country_name: "Czech Republic",
    country_code: "cz",
    is_main: 0,
  },
  {
    id: 80,
    country_name: "Estonia",
    country_code: "ee",
    is_main: 0,
  },
  {
    id: 98,
    country_name: "Ethiopia",
    country_code: "et",
    is_main: 0,
  },
  {
    id: 64,
    country_name: "Finland",
    country_code: "fi",
    is_main: 0,
  },
  {
    id: 49,
    country_name: "Georgia",
    country_code: "ge",
    is_main: 0,
  },
  {
    id: 56,
    country_name: "Germany",
    country_code: "de",
    is_main: 0,
  },
  {
    id: 100,
    country_name: "Ghana",
    country_code: "gh",
    is_main: 0,
  },
  {
    id: 78,
    country_name: "Greece",
    country_code: "gr",
    is_main: 0,
  },
  {
    id: 7,
    country_name: "Hong Kong,china",
    country_code: "hk",
    is_main: 0,
  },
  {
    id: 70,
    country_name: "Hungary",
    country_code: "hu",
    is_main: 0,
  },
  {
    id: 77,
    country_name: "Iceland",
    country_code: "is",
    is_main: 0,
  },
  {
    id: 42,
    country_name: "Iran",
    country_code: "ir",
    is_main: 0,
  },
  {
    id: 33,
    country_name: "Iraq",
    country_code: "iq",
    is_main: 0,
  },
  {
    id: 63,
    country_name: "Ireland",
    country_code: "ie",
    is_main: 0,
  },
  {
    id: 34,
    country_name: "Israel",
    country_code: "il",
    is_main: 0,
  },
  {
    id: 55,
    country_name: "Italy",
    country_code: "it",
    is_main: 0,
  },
  {
    id: 90,
    country_name: "Jamaica",
    country_code: "jm",
    is_main: 0,
  },
  {
    id: 35,
    country_name: "Jordan",
    country_code: "jo",
    is_main: 0,
  },
  {
    id: 44,
    country_name: "Kazakhstan",
    country_code: "kz",
    is_main: 0,
  },
  {
    id: 99,
    country_name: "Kenya",
    country_code: "ke",
    is_main: 0,
  },
  {
    id: 25,
    country_name: "Kuwait",
    country_code: "kw",
    is_main: 0,
  },
  {
    id: 45,
    country_name: "Kyrgyzstan",
    country_code: "kg",
    is_main: 0,
  },
  {
    id: 67,
    country_name: "Latvia",
    country_code: "lv",
    is_main: 0,
  },
  {
    id: 36,
    country_name: "Lebanon",
    country_code: "lb",
    is_main: 0,
  },
  {
    id: 69,
    country_name: "Lithuania",
    country_code: "lt",
    is_main: 0,
  },
  {
    id: 57,
    country_name: "Luxembourg",
    country_code: "lu",
    is_main: 0,
  },
  {
    id: 97,
    country_name: "Macao,china",
    country_code: "mo",
    is_main: 0,
  },
  {
    id: 52,
    country_name: "Madagascar",
    country_code: "mg",
    is_main: 0,
  },
  {
    id: 13,
    country_name: "Malaysia",
    country_code: "my",
    is_main: 0,
  },
  {
    id: 20,
    country_name: "Maldives",
    country_code: "mv",
    is_main: 0,
  },
  {
    id: 79,
    country_name: "Malta",
    country_code: "mt",
    is_main: 0,
  },
  {
    id: 92,
    country_name: "Mexico",
    country_code: "mx",
    is_main: 0,
  },
  {
    id: 71,
    country_name: "Moldova",
    country_code: "md",
    is_main: 0,
  },
  {
    id: 74,
    country_name: "Monaco",
    country_code: "mc",
    is_main: 0,
  },
  {
    id: 103,
    country_name: "Morocco",
    country_code: "ma",
    is_main: 0,
  },
  {
    id: 53,
    country_name: "Mozambique",
    country_code: "mz",
    is_main: 0,
  },
  {
    id: 11,
    country_name: "Myanmar (Burma)",
    country_code: "mm",
    is_main: 0,
  },
  {
    id: 21,
    country_name: "Nepal",
    country_code: "np",
    is_main: 0,
  },
  {
    id: 72,
    country_name: "Netherlands",
    country_code: "nl",
    is_main: 0,
  },
  {
    id: 14,
    country_name: "New Zealand",
    country_code: "nz",
    is_main: 0,
  },
  {
    id: 101,
    country_name: "Nigeria",
    country_code: "ng",
    is_main: 0,
  },
  {
    id: 76,
    country_name: "Norway",
    country_code: "no",
    is_main: 0,
  },
  {
    id: 26,
    country_name: "Oman",
    country_code: "om",
    is_main: 0,
  },
  {
    id: 22,
    country_name: "Pakistan",
    country_code: "pk",
    is_main: 0,
  },
  {
    id: 51,
    country_name: "Palau",
    country_code: "pw",
    is_main: 0,
  },
  {
    id: 37,
    country_name: "Palestinian territories",
    country_code: "ps",
    is_main: 0,
  },
  {
    id: 93,
    country_name: "Panama",
    country_code: "pa",
    is_main: 0,
  },
  {
    id: 94,
    country_name: "Peru",
    country_code: "pe",
    is_main: 0,
  },
  {
    id: 68,
    country_name: "Poland",
    country_code: "pl",
    is_main: 0,
  },
  {
    id: 66,
    country_name: "Portugal",
    country_code: "pt",
    is_main: 0,
  },
  {
    id: 28,
    country_name: "Qatar",
    country_code: "qa",
    is_main: 0,
  },
  {
    id: 29,
    country_name: "Saudi Arabia",
    country_code: "sa",
    is_main: 0,
  },
  {
    id: 54,
    country_name: "South Africa",
    country_code: "za",
    is_main: 0,
  },
  {
    id: 62,
    country_name: "Spain",
    country_code: "es",
    is_main: 0,
  },
  {
    id: 23,
    country_name: "Sri Lanka",
    country_code: "lk",
    is_main: 0,
  },
  {
    id: 91,
    country_name: "St. Lucia",
    country_code: "lc",
    is_main: 0,
  },
  {
    id: 27,
    country_name: "Sweden",
    country_code: "se",
    is_main: 0,
  },
  {
    id: 73,
    country_name: "Switzerland",
    country_code: "ch",
    is_main: 0,
  },
  {
    id: 38,
    country_name: "Syria",
    country_code: "sy",
    is_main: 0,
  },
  {
    id: 15,
    country_name: "Taiwan,china",
    country_code: "tw",
    is_main: 0,
  },
  {
    id: 46,
    country_name: "Tajikistan",
    country_code: "tj",
    is_main: 0,
  },
  {
    id: 12,
    country_name: "Thailand",
    country_code: "th",
    is_main: 0,
  },
  {
    id: 8,
    country_name: "The Philippines",
    country_code: "ph",
    is_main: 0,
  },
  {
    id: 50,
    country_name: "Timor-Leste (East Timor)",
    country_code: "tl",
    is_main: 0,
  },
  {
    id: 43,
    country_name: "Turkey",
    country_code: "tr",
    is_main: 0,
  },
  {
    id: 47,
    country_name: "Turkmenistan",
    country_code: "tm",
    is_main: 0,
  },
  {
    id: 81,
    country_name: "Ukraine",
    country_code: "ua",
    is_main: 0,
  },
  {
    id: 30,
    country_name: "United Arab Emirates",
    country_code: "ae",
    is_main: 0,
  },
  {
    id: 48,
    country_name: "Uzbekistan",
    country_code: "uz",
    is_main: 0,
  },
  {
    id: 89,
    country_name: "Venezuela",
    country_code: "ve",
    is_main: 0,
  },
  {
    id: 9,
    country_name: "Vietnam",
    country_code: "vn",
    is_main: 0,
  },
  {
    id: 31,
    country_name: "Yemen",
    country_code: "ye",
    is_main: 0,
  },
];
