function largest(num){
    let factor = 2;
    while(factor < num){
      if(num % factor ==0){
        num = num / factor
      }
      else{
        factor++
      }
    }
    console.log(factor)
  }
  largest(600851475143)

//