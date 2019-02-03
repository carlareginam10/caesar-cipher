
let text = '';
let key = '';

function btnEncode() {
  text = document.getElementById("textUser").value;
  key = parseInt(document.getElementById("keyUser").value); 
  if (key <=0 || key >50000  || isNaN(key)) {
    alert("Digite um número inteiro positivo entre 1 e 50.000")
    return;
  } 
  if( text ==="" || text===null  ){
    alert("Digite o texto que deseja codificar ou descodificar")
    return;
  }
  else {
    document.getElementById("textEncode").innerHTML = encode(text, key);
  } 
}

function btnDecode() {
  text = document.getElementById("textUser").value;
  key = parseInt(document.getElementById("keyUser").value);
  if (key <=0 || key >50000 || isNaN(key)) {
    alert("Digite um número inteiro positivo entre 1 e 50.000") 
    return;
  }
  if( text ===""|| text===null  ){
    alert("Digite o texto que deseja codificar ou descodificar")  
    return;   
  } else {
    document.getElementById("textDecode").innerHTML = decode(text, key);
  }
}

function showEncode () {
  document.getElementById("resultDecode").className="hide";
  document.getElementById("resultEncode").className="show";  
}

function showDecode () {
  document.getElementById("resultEncode").className="hide";
  document.getElementById("resultDecode").className="show";
}

function encode(text, key) {
  let codUpper = "A";
  let codLow = "a";
  let codFirtPositionUpper = codUpper.charCodeAt(0);
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
  }
  return auxArray.join('');
}; 

function decode(text, key) {
  let codUpper = "Z";
  let codLow = "z";
  let codFirtPositionUpper = codUpper.charCodeAt(0);
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
  } 
  return auxArray.join('');
}; 