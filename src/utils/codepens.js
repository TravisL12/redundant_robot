export function getCodePenUrl(id) {
  return `https://codepen.io/TravisL12/embed/${id}?height=265&theme-id=dark&default-tab=result`;
}

export function getCodePens() {
  return pens.map(pen => ({ name: pen.name, url: getCodePenUrl(pen.id) }));
}

const pens = [
  { name: "Analog Clock", id: "MWwZBgP" },
  { name: "Bada-Boom", id: "RKOexP" },
  {
    name: "Ball bouncing canvas",
    id: "PJLVMp",
  },
  { name: "Ball move", id: "dxGMRw" },
  {
    name: "Baseball Standings",
    id: "rNaKaqK",
  },
  { name: "Block loaders", id: "qpPeLQ" },
  { name: "Blogger 5000", id: "LWrENq" },
  { name: "calculate", id: "ewKxVg" },
  { name: "Card Board", id: "rodLgL" },
  { name: "Carousel", id: "RwWpWMj" },
  { name: "Cat carousel", id: "ZEQoXZb" },
  { name: "Centering nav", id: "bYXOpO" },
  {
    name: "Change colors on scroll",
    id: "jObWvme",
  },
  {
    name: "Change colors on scroll",
    id: "jObWvme",
  },
  { name: "cities", id: "omRKgy" },
  { name: "Clocks!", id: "zjVZOM" },
  { name: "Coin toss", id: "LwRVPb" },
  { name: "Color compare", id: "mgvqyL" },
  { name: "Connect 4!", id: "bGdrOxq" },
  { name: "Create form", id: "NBbwGR" },
  {
    name: "CSS Digital Hex Clock",
    id: "VpdYjO",
  },
  { name: "CSS is Awesome", id: "jOPBoNR" },
  {
    name: "CSS Social Card Hover Effect",
    id: "YzKdjbV",
  },
  { name: "d3 stuff", id: "wEvywB" },
  { name: "date ranges", id: "QWyWXxE" },
  { name: "Dice game", id: "abvWYEo" },
  { name: "Drop7", id: "zYGRWMO" },
  { name: "Ellipse animate", id: "MaWmbo" },
  { name: "Etch a sketch", id: "QWjOEGy" },
  { name: "Faded border", id: "ybOjNb" },
  { name: "Fast ToDo", id: "zmVNZY" },
  {
    name: "FCC: Tribute Page",
    id: "JEVadJ",
  },
  { name: "Flatty Shapes", id: "xXmXrK" },
  {
    name: "Flexbox education",
    id: "rmmwgo",
  },
  { name: "Forrest!", id: "mxrooE" },
  {
    name: "Four Word Phrase Generator",
    id: "eRVOwZ",
  },
  { name: "guitar fret", id: "gVxvYE" },
  { name: "Hover to Spin", id: "WgpXoX" },
  {
    name: "Line up with Flex",
    id: "WBLxYJ",
  },
  { name: "List layout", id: "eYmjEZB" },
  { name: "Loading border", id: "eweEPK" },
  { name: "Memory game", id: "KKdpyer" },
  { name: "Menu thing", id: "gOYLwbX" },
  { name: "New Loader", id: "xegmRY" },
  { name: "NWWYjLa", id: "NWWYjLa" },
  {
    name: "Overflow example",
    id: "XWrQgpV",
  },
  { name: "pEkkOr", id: "pEkkOr" },
  { name: "Pick a dog!", id: "rNVZMbP" },
  {
    name: "Random Number plot",
    id: "gOpGmwV",
  },
  {
    name: "React Leaderboard",
    id: "MWKWyVa",
  },
  {
    name: "Redundant Robot Cube",
    id: "qRRXLL",
  },
  {
    id: "qRRXLL",
    name: "Redundant Robot Cube",
  },
  { name: "Robot Head", id: "oLpQXW" },
  { name: "Rocket!", id: "yMoqbr" },
  { name: "rotate circle", id: "LOPmEv" },
  { name: "Row layout", id: "QaeyXm" },
  {
    name: "Simply image upload",
    id: "PoqNadJ",
  },
  {
    name: "Spell it out for me",
    id: "RwrLrNM",
  },
  {
    name: "square switchy thingy",
    id: "xgBozg",
  },
  { name: "Stars", id: "NjVLLO" },
  { name: "Stopwatch", id: "KrGBdJ" },
  {
    name: "Temperature converter",
    id: "bygWeO",
  },
  { name: "Text Mask", id: "arYrMw" },
  { name: "The Moon", id: "zwXjaB" },
  { name: "The Sun", id: "BRbZQd" },
  { name: "Top Secret info", id: "JjjvGVL" },
  { name: "Tripshit", id: "GPBEPr" },
  { name: "URL qs", id: "PoPJxpo" },
  {
    name: "Visualize Longest Palindromic Sequence",
    id: "pogvweg",
  },
  { name: "vpoLdE", id: "vpoLdE" },
  { name: "Walking Man", id: "XWrNyKB" },
  { name: "Words disappear", id: "PeQVXz" },
  { name: "WqomvM", id: "WqomvM" },
  { name: "WVyvZX", id: "WVyvZX" },
];
