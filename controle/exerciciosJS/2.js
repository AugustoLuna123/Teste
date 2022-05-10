function triangulo(lado1, lado2,lado3){
    if(lado1 == lado2 && lado2 == lado3){
        console.log('É um triangulo equilatero')
    }
   else if (lado1 != lado2 && lado2 != lado3){
       console.log('É um triangulo escaleno')
   }
    else console.log('É um triangulo isoceles')
    
}

triangulo(12.5, 24, 24.3)