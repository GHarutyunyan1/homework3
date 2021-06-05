/*--------1----------*/
function f (num){
  if(num%2 === 0 ){
    return false;
  }
  return num < 10? true : f( (num-num%10)/10 );
 /* if(num < 10 ){
    return true;
  }
  return f((num-num%10)/10);*/
}

console.log(f(7913));

/*----------2---------------*/
function minPositiveEl (arr, n = -1){
  if(arr[arr.length-1] >= 0){
    if(n !== -1){
      if(arr[arr.length-1] < n){
        n = arr[arr.length-1];
      }
    }else{
      n = arr[arr.length-1];
    }
  }
  if(arr.length === 0){
    return n;
  }
  arr.pop()
 return  minPositiveEl(arr, n);

}

console.log(minPositiveEl([-105,7]));
/*----------3------------*/
function almostSorted (arr, i=1){
  if( i === arr.length){
    return-1
  }
  if(arr[i] < arr[i-1]){
    return i;
  }
  return almostSorted(arr, i+1);
}

console.log(almostSorted ([78,79,-5]));

/*--------4--------*/
function removeFirstElem (arr, i=0){
  if(arr.length === 0){
    return arr;
  }
  if(i === arr.length-1){
    arr.pop()
    return arr;
  }
  arr[i] = arr[i+1];
  return removeFirstElem(arr, i+1);
  
}

console.log(removeFirstElem ([1,57,8,9]));

/*-------------5----------*/
function removeFirstElem (arr,count, i =0){
  if (count < 0 && i ===0){
    count = arr.length+ count;
  }
  let carent = arr[i];
  arr[i] = arr[i+1];
  arr[i+1]= carent;
  i=i+1;
  if(i === arr.length-1){
    count--;
    if(count === 0){
      return arr
    }
    
    i=0;
    return removeFirstElem(arr, count, i);
  }
  return removeFirstElem(arr,count, i);
  
}

console.log(removeFirstElem (["a","b","c","d","e","f","g","h"],3));