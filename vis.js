let w = 10;
let h = 300;
let dist = 50;
let arr = [];

function setup() {
  for(let i = 0 ; i < 50 ; i++){
      arr.push(Math.random()*100+20) ; 
  }  
   
  createCanvas(600, 600);
  quickSort(arr, 0,arr.length-1) ;
}

function draw() {

  background(250, 104, 100);

  console.log(arr) ;

  for (let i = 0; i < arr.length; i++) {
    noStroke(0);
    fill(255);
    rect(dist + i * w, h - arr[i], w, arr[i]);
  }
  console.log(arr);
}


async function quickSort(arr, low, high) {
  //check for empty or null array

  /*if (arr == null || arr.length == 0){
      return;
  }*/
  /*if (low >= high){
      return;
  }*/
  //Get the pivot element from the middle of the list

  let middle = Math.floor(low + (high - low) / 2);
  let pivot = arr[middle];

  // make left < pivot and right > pivot
  let i = low,
    j = high;
  while (i <= j) {
    //Check until all values on left side array are lower than pivot
    while (arr[i] < pivot) {
      i++;
    }
    //Check until all values on left side array are greater than pivot
    while (arr[j] > pivot) {
      j--;
    }
    //Now compare values from both side of lists to see if they need swapping
    //After swapping move the iterator on both lists
    if (i <= j) {
      await swap(arr, i, j);
      i++;
      j--;
    }
  }
  //Do same operation as above recursively to sort two sub arrays

  if (high > i) {
    quickSort(arr, i, high);
  }

  if (low < j) {
    quickSort(arr, low, j);
  }


}

async function swap(arr, x, y) {
  await sleep(200);
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
