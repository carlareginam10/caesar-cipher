
//let key = " ";
//let text = " ";

// tem que tirar text e key dos paramentros da função
document.write("CHAMADA MANUAL TEXTO CIFRADO: <br> ")
function encode(text, key) {
  //text = document.getElementById('textUser').value;
  //key = document.getElementById('keyUser').value;
  let codUpper = "A";
  let codLow = 'a';
  let codFirtPositionUpper = codUpper.charCodeAt(0)
  let codFirtPositionLow = codLow.charCodeAt(0);
  let codFullPosition;
  let codAsc;
 
 for (let i = 0; i < text.length; i++) {
    codAsc = text.charCodeAt(i);
    if(codAsc >=65 && codAsc <= 90){
      codFullPosition = ((codAsc - codFirtPositionUpper + key)%26)+ codFirtPositionUpper; 
    } else if(codAsc >=97 && codAsc <= 122){
      codFullPosition = ((codAsc - codFirtPositionLow + key)%26)+ codFirtPositionLow; 
    }
    //text.innerHTML = String.fromCharCode(codFullPosition)
    console.log(String.fromCharCode(codFullPosition))
    document.write(String.fromCharCode(codFullPosition))
  }

}; encode ('Zebra Casaco Abobora',1 )
document.write(" <br> ")
encode('ParalelePipedo', 450)
document.write(" <br> ")
encode('Anticonstitucionalissimamente', 17)
document.write(" <br> ")
encode('contrarrevolucionario', 3)
//RETIRAR DEPOIS:
console.log('----------------')
document.write(" <br> <br>CHAMADA MANUAL TEXTO DECIFRADO:<br>  ")


function decode(text, key) {
  //text = document.getElementById('textUser').value;
  //key = document.getElementById('keyUser').value;
  let codUpper = "Z";
  let codLow = 'z';
  let codFirtPositionUpper = codUpper.charCodeAt(0)
  let codFirtPositionLow = codLow.charCodeAt(0);
  let codFullPosition;
  let codAsc;
 
 for (let i = 0; i < text.length; i++) {
    codAsc = text.charCodeAt(i);
    if(codAsc >=65 && codAsc <= 90){
      codFullPosition = ((codAsc - codFirtPositionUpper - key)%26)+codFirtPositionUpper; 
    } else if(codAsc >=97 && codAsc <= 122){
      codFullPosition = ((codAsc - codFirtPositionLow - key)%26)+ codFirtPositionLow; 
    }
    //text.innerHTML = String.fromCharCode(codFullPosition)
    console.log(String.fromCharCode(codFullPosition))
    document.write(String.fromCharCode(codFullPosition))
    
   }
  
  
}; decode('AfcsbbDbtbdppBcpcpsb', 1 )
document.write(" <br> ")
decode('XizitmtmXqxmlw', 450 )
document.write(" <br> ")
decode('Rekztfejkzkltzferczjjzdrdvekv', 17 )
document.write(" <br> ")
decode('frqwuduuhyroxflrqdulr', 3 )
//RETIRAR DEPOIS
console.log('----------------')