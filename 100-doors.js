function getFinalOpenedDoors(numDoors = 100) {
  // A number always have an even pair of factors unless
  // its square-root produces an integer.
  // Hence, all numbers without integer square-roots
  // will be visited in multiples of 2 times.
  // Since doors are initial closed, visiting it in even numbers
  // of times will close it, visiting it in odd number of times
  // will open it.

  // get the number array of doors starting from 1, including the last door (+1)
  let doors = Array.from(Array(numDoors + 1).keys()).slice(1, numDoors + 1)
  let open_doors = doors.filter(num => {
    let sqrt = Math.sqrt(num);
    // check for integer square-root
    return sqrt == Math.floor(sqrt);
  })
  console.log(`The open doors are: ${open_doors}`);
  return open_doors;
}

function timeIt(func) {
  let start = performance.now();
  func();
  console.log(`Time to run ${func.name} is ${performance.now() - start} milliseconds`);
}

timeIt(getFinalOpenedDoors);
