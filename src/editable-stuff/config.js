// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sergio",
  middleName: "M.",
  lastName: "Latorre",
  message: " Population geneticist working in plant-fungal interactions ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/smlatorreo",
    },
    {
      image: "ai ai-google-scholar",
      url : "https://scholar.google.com/citations?user=Mt0b754AAAAJ&hl",
    },
    {
      image: "fab fa-twitter",
      url: "https://www.twitter.com/smlatorreo/",
    },
    {
      image: "fab fa-bluesky",
      url: "https://bsky.app/profile/smlatorreo.bsky.social"
    },
    {
      image: "fas fa-globe",
      url: "http://profiles.ucl.ac.uk/82058-sergio-m-latorre",
    },
  ],
};

// ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.png"),
  imageSize: 350,
  message:
    "As a population geneticist, I work across diverse model systems, leveraging modern and historical genomic data with cutting-edge computational methods to study: 1) Population histories 2) Local adaptation dynamics 3) Natural selection patterns 4) Temporal allele frequency changes",
  resume: "https://github.com/smlatorreo/smlatorreo.github.io/blob/main/_data/resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "smlatorreo",
  reposLength: 0,
  specificRepos: ["mChr_Moryzae", "Plant-aDNA-pipeline", "wheat-clonal-linage", "modules_python"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  compSkills: [
    { name: "Python", value: 90 },
    { name: "NumPy, pandas, scikit-learn", value: 90},
    { name: "Bash", value: 90 },
    { name: "R", value: 80 },
    { name: "Git", value: 90 },
    { name: "nextflow", value: 70 }
  ],
  labSkills: [
    { name: "Clean Room facilities", value: 80 },
    { name: "Ancient DNA extraction", value: 90 },
    { name: "Ancient DNA library construction", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "",
  email: "s.latorre[at]ucl.ac.uk.co",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'XXX',// Here Add Company Name
      companylogo: require('../assets/img/XX.png'),
      date: 'XX – XX',
    },
    {
      role: 'XX',
      companylogo: require('../assets/img/XX.png'),
      date: 'XX – XX',
    },
  ]
}

// Blog SECTION
//const blog = {
//  show: false,
//};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
