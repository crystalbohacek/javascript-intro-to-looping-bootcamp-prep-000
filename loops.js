function doWhileLoop(array){
  while(incrementVariable() && array.length > 0){
      array.length = (array.length-1)
  }
  return array;
}
