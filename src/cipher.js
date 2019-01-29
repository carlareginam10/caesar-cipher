
let text = '';
let key = '';

function encode() {
  text = document.getElementById('textUser').value;
  key = parseInt(document.getElementById('keyUser').value);
  let codUpper = 'A';
  let codLow = 'a';
  let codFirtPositionUpper = codUpper.charCodeAt(0)
  let codFirtPositionLow = codLow.charCodeAt(0);
  let codFullPosition;
  let codAsc;
  let auxArray = [];
 
 for (let i = 0; i < text.length; i++) {
    codAsc = text.charCodeAt(i);
    if(codAsc >=65 && codAsc <= 90){
      codFullPosition = ((codAsc - codFirtPositionUpper + key)%26)+ codFirtPositionUpper; 
    }else if(codAsc >=97 && codAsc <= 122){
      codFullPosition = ((codAsc - codFirtPositionLow + key)%26)+ codFirtPositionLow; 
    }else{
      codFullPosition = codAsc;
    }        
    auxArray.push(String.fromCharCode(codFullPosition));
    document.getElementById("textoCifrado").innerHTML = auxArray.join('');       
  }
}; 

function decode() {
  text = document.getElementById('textUser').value;
  key = parseInt(document.getElementById('keyUser').value);
  let codUpper = 'Z';
  let codLow = 'z';
  let codFirtPositionUpper = codUpper.charCodeAt(0)
  let codFirtPositionLow = codLow.charCodeAt(0);
  let codFullPosition;
  let codAsc;
  let auxArray = [];
 
 for (let i = 0; i < text.length; i++) {
    codAsc = text.charCodeAt(i);
    if(codAsc >=65 && codAsc <= 90){
      codFullPosition = ((codAsc - codFirtPositionUpper - key)%26)+codFirtPositionUpper; 
    }else if(codAsc >=97 && codAsc <= 122){
      codFullPosition = ((codAsc - codFirtPositionLow - key)%26)+ codFirtPositionLow; 
    }else{
      codFullPosition = codAsc;
    }
    auxArray.push(String.fromCharCode(codFullPosition));
    document.getElementById("textoDecifrado").innerHTML = auxArray.join('');
  }   
}; 