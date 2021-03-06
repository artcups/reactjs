var _ = require("lodash");
var people = [{
  "id": 1,
  "gender": "Male",
  "first_name": "Joshua",
  "last_name": "Murphy",
  "email": "jmurphy0@sakura.ne.jp",
  "ip_address": "93.47.159.45"
}, {
  "id": 2,
  "gender": "Female",
  "first_name": "Norma",
  "last_name": "Ryan",
  "email": "nryan1@google.nl",
  "ip_address": "206.214.161.55"
}, {
  "id": 3,
  "gender": "Female",
  "first_name": "Deborah",
  "last_name": "Williams",
  "email": "dwilliams2@slideshare.net",
  "ip_address": "71.94.225.172"
}, {
  "id": 4,
  "gender": "Female",
  "first_name": "Maria",
  "last_name": "Lawson",
  "email": "mlawson3@linkedin.com",
  "ip_address": "46.97.197.101"
}, {
  "id": 5,
  "gender": "Female",
  "first_name": "Kathy",
  "last_name": "Webb",
  "email": "kwebb4@census.gov",
  "ip_address": "178.196.35.216"
}, {
  "id": 6,
  "gender": "Female",
  "first_name": "Cynthia",
  "last_name": "Nelson",
  "email": "cnelson5@slideshare.net",
  "ip_address": "118.65.38.54"
}, {
  "id": 7,
  "gender": "Male",
  "first_name": "Jeffrey",
  "last_name": "Black",
  "email": "jblack6@vinaora.com",
  "ip_address": "6.103.17.4"
}, {
  "id": 8,
  "gender": "Male",
  "first_name": "Ronald",
  "last_name": "Gardner",
  "email": "rgardner7@diigo.com",
  "ip_address": "86.135.51.208"
}, {
  "id": 9,
  "gender": "Female",
  "first_name": "Karen",
  "last_name": "Banks",
  "email": "kbanks8@twitter.com",
  "ip_address": "177.169.198.242"
}, {
  "id": 10,
  "gender": "Male",
  "first_name": "Victor",
  "last_name": "Black",
  "email": "vblack9@sourceforge.net",
  "ip_address": "205.122.104.32"
}, {
  "id": 11,
  "gender": "Male",
  "first_name": "Peter",
  "last_name": "Carroll",
  "email": "pcarrolla@boston.com",
  "ip_address": "91.69.42.91"
}, {
  "id": 12,
  "gender": "Female",
  "first_name": "Gloria",
  "last_name": "Fields",
  "email": "gfieldsb@scientificamerican.com",
  "ip_address": "143.235.224.172"
}, {
  "id": 13,
  "gender": "Female",
  "first_name": "Rachel",
  "last_name": "Montgomery",
  "email": "rmontgomeryc@google.it",
  "ip_address": "106.110.65.153"
}, {
  "id": 14,
  "gender": "Male",
  "first_name": "Timothy",
  "last_name": "Berry",
  "email": "tberryd@artisteer.com",
  "ip_address": "165.39.29.16"
}, {
  "id": 15,
  "gender": "Male",
  "first_name": "Anthony",
  "last_name": "Montgomery",
  "email": "amontgomerye@dropbox.com",
  "ip_address": "142.75.148.39"
}, {
  "id": 16,
  "gender": "Male",
  "first_name": "Steven",
  "last_name": "Kelly",
  "email": "skellyf@reference.com",
  "ip_address": "191.253.13.149"
}, {
  "id": 17,
  "gender": "Male",
  "first_name": "Mark",
  "last_name": "Rivera",
  "email": "mriverag@hexun.com",
  "ip_address": "105.147.199.89"
}, {
  "id": 18,
  "gender": "Female",
  "first_name": "Judith",
  "last_name": "Nichols",
  "email": "jnicholsh@acquirethisname.com",
  "ip_address": "175.222.64.117"
}, {
  "id": 19,
  "gender": "Female",
  "first_name": "Heather",
  "last_name": "Kennedy",
  "email": "hkennedyi@google.co.uk",
  "ip_address": "69.214.129.9"
}, {
  "id": 20,
  "gender": "Male",
  "first_name": "Benjamin",
  "last_name": "Elliott",
  "email": "belliottj@acquirethisname.com",
  "ip_address": "226.91.91.17"
}];

femaleCount = _.filter(people, {"gender": "Female"}).length;

alert(femaleCount + " females");
