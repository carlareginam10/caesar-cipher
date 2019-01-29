
function testCipher(calculado, esperado) {
  if (calculado === esperado) {
    console.log("Passou!");
    return true;
  }else {
    console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
    return false;
  }


}

 //Testes Criptografar:
testCipher(encode("ABC", 1), "BCD");
testCipher(encode('Z', 1), "A");
testCipher(encode("123%#$@é*()_+-?/\|0õ~êÀ", 100), "123%#$@é*()_+-?/\|0õ~êÀ");
testCipher(encode("Canção!", 1), "Dboçãp!");
testCipher(encode("abcdefghijklmnopqrstuvwxyz", 3), "defghijklmnopqrstuvwxyzabc");


//Testes Descriptografor:
testCipher(decode("BCD", 1), "ABC");
testCipher(decode('A', 1), "Z");
testCipher(decode("123%#$@é*()_+-?/\|0õ~êÀ", 100), "123%#$@é*()_+-?/\|0õ~êÀ");
testCipher(decode("defghijklmnopqrstuvwxyzabc", 3), "abcdefghijklmnopqrstuvwxyz");
testCipher(decode("Dboçãp!", 1), "Canção!");
















