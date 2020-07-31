import { IFRAME_TYPE } from "../components/windowContents";

export function getCodePenUrl(id) {
  return `https://codepen.io/TravisL12/embed/${id}?height=265&theme-id=dark&default-tab=result`;
}

export function getCodePens() {
  return pens.map(pen => ({ name: pen.name, url: getCodePenUrl(pen.id) }));
}

export function getCodePenWindows() {
  return pens
    .filter(({ show }) => show)
    .map(pen => ({
      title: pen.name,
      type: IFRAME_TYPE,
      content: {
        name: pen.name,
        url: getCodePenUrl(pen.id),
        size: { width: "800px", height: "600px" },
      },
    }));
}

const pens = [
  { name: "Analog Clock", id: "MWwZBgP", show: true },
  { name: "Bada-Boom", id: "RKOexP", show: false },
  {
    name: "Ball bouncing canvas",
    id: "PJLVMp",
    show: true,
  },
  { name: "Ball move", id: "dxGMRw", show: false },
  {
    name: "Baseball Standings",
    id: "rNaKaqK",
    show: false,
  },
  { name: "Block loaders", id: "qpPeLQ", show: false },
  { name: "Blogger 5000", id: "LWrENq", show: true },
  { name: "calculate", id: "ewKxVg", show: true },
  { name: "Card Board", id: "rodLgL", show: false },
  { name: "Carousel", id: "RwWpWMj", show: false },
  { name: "Cat carousel", id: "ZEQoXZb", show: false },
  { name: "Centering nav", id: "bYXOpO", show: false },
  {
    name: "Change colors on scroll",
    id: "jObWvme",
    show: true,
  },

  { name: "cities", id: "omRKgy", show: false },
  { name: "Clocks!", id: "zjVZOM", show: true },
  { name: "Coin toss", id: "LwRVPb", show: false },
  { name: "Color compare", id: "mgvqyL", show: true },
  { name: "Connect 4!", id: "bGdrOxq", show: true },
  { name: "Create form", id: "NBbwGR", show: false },
  {
    name: "CSS Digital Hex Clock",
    id: "VpdYjO",
    show: false,
  },
  { name: "CSS is Awesome", id: "jOPBoNR", show: true },
  {
    name: "CSS Social Card Hover Effect",
    id: "YzKdjbV",
    show: false,
  },
  { name: "d3 stuff", id: "wEvywB", show: false },
  { name: "date ranges", id: "QWyWXxE", show: false },
  { name: "Dice game", id: "abvWYEo", show: false },
  { name: "Drop7", id: "zYGRWMO", show: true },
  { name: "Ellipse animate", id: "MaWmbo", show: false },
  { name: "Etch a sketch", id: "QWjOEGy", show: false },
  { name: "Faded border", id: "ybOjNb", show: false },
  { name: "Fast ToDo", id: "zmVNZY", show: false },
  {
    name: "FCC: Tribute Page",
    id: "JEVadJ",
    show: false,
  },
  { name: "Flatty Shapes", id: "xXmXrK", show: false },
  {
    name: "Flexbox education",
    id: "rmmwgo",
    show: false,
  },
  { name: "Forrest!", id: "mxrooE", show: true },
  {
    name: "Four Word Phrase Generator",
    id: "eRVOwZ",
    show: true,
  },
  { name: "guitar fret", id: "gVxvYE", show: false },
  { name: "Hover to Spin", id: "WgpXoX", show: false },
  {
    name: "Line up with Flex",
    id: "WBLxYJ",
    show: false,
  },
  { name: "List layout", id: "eYmjEZB", show: false },
  { name: "Loading border", id: "eweEPK", show: false },
  { name: "Memory game", id: "KKdpyer", show: true },
  { name: "Menu thing", id: "gOYLwbX", show: false },
  { name: "New Loader", id: "xegmRY", show: true },
  { name: "NWWYjLa", id: "NWWYjLa", show: false },
  {
    name: "Overflow example",
    id: "XWrQgpV",
    show: false,
  },
  { name: "pEkkOr", id: "pEkkOr", show: false },
  { name: "Pick a dog!", id: "rNVZMbP", show: false },
  {
    name: "Random Number plot",
    id: "gOpGmwV",
    show: false,
  },
  {
    name: "React Leaderboard",
    id: "MWKWyVa",
    show: true,
  },
  {
    name: "Redundant Robot Cube",
    id: "qRRXLL",
    show: false,
  },
  { name: "Robot Head", id: "oLpQXW", show: true },
  { name: "Rocket!", id: "yMoqbr", show: false },
  { name: "rotate circle", id: "LOPmEv", show: false },
  { name: "Row layout", id: "QaeyXm", show: false },
  {
    name: "Simply image upload",
    id: "PoqNadJ",
    show: false,
  },
  {
    name: "Spell it out for me",
    id: "RwrLrNM",
    show: true,
  },
  {
    name: "square switchy thingy",
    id: "xgBozg",
    show: false,
  },
  { name: "Stars", id: "NjVLLO", show: true },
  { name: "Stopwatch", id: "KrGBdJ", show: true },
  {
    name: "Temperature converter",
    id: "bygWeO",
    show: true,
  },
  { name: "Text Mask", id: "arYrMw", show: false },
  { name: "The Moon", id: "zwXjaB", show: true },
  { name: "The Sun", id: "BRbZQd", show: true },
  { name: "Top Secret info", id: "JjjvGVL", show: false },
  { name: "Tripshit", id: "GPBEPr", show: false },
  { name: "URL qs", id: "PoPJxpo", show: false },
  {
    name: "Visualize Longest Palindromic Sequence",
    id: "pogvweg",
    show: false,
  },
  { name: "vpoLdE", id: "vpoLdE", show: false },
  { name: "Walking Man", id: "XWrNyKB", show: true },
  { name: "Words disappear", id: "PeQVXz", show: true },
  { name: "WqomvM", id: "WqomvM", show: true },
];
