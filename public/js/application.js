var squareGrid = document.getElementById('square-grid'),
    width      = window.innerWidth+200,
    height     = window.innerHeight+200,
    cellDimension = 35,
    rowCount   = Math.floor(height / cellDimension),
    colCount   = Math.floor(width  / cellDimension),
    animations = ['rotate-30',
                  'rotate-40',
                  'rotate-50',
                  'rotate-60',
                  'rotate-70',
                  'rotate-80',
                  'rotate-90'],
    intervalDelay = 3000;

function randomChoice (collection) {
  var index = Math.floor(Math.random() * collection.length);
  return collection[index];
}

for (var i = 1; i < colCount; i++) {
  if (lists !== undefined) {
    lists += "<div class='column'><div class='inner-col'></div></div>";
  } else {
    var lists = "<div class='column'><div class='inner-col'></div></div>";
  }
}

for (var i = 1; i < rowCount; i++) {
  if (columns !== undefined) {
    columns += "<div class='row'>" + lists + "</div>";
  } else {
    var columns = "<div class='row'>" + lists + "</div>";
  }
}

squareGrid.innerHTML = columns;
var rows = squareGrid.children;

function timeRows () {
  var row = randomChoice(rows);
  var animationClass = randomChoice(animations);
  timeCols(row, animationClass);
}

function timeCols (row, animation) {
  var column = randomChoice(row.children);
  column.children[0].classList.add(animation);
}

timeRows();
setInterval(function () {
  timeRows();
}, intervalDelay);
