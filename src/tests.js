
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
testCipher(encode("123%#$@é*()_+-?/\|0õ~êÀ", 185), "123%#$@é*()_+-?/\|0õ~êÀ");
testCipher(encode("Canção!", 1), "Dboçãp!");
testCipher(encode("abcdefghijklmnopqrstuvwxyz", 3), "defghijklmnopqrstuvwxyzabc");
testCipher(encode("abcdefghijklmnopqrstuvwxyz", 27), "bcdefghijklmnopqrstuvwxyza");
testCipher(encode("abcdefghijklmnopqrstuvwxyz", 8), "ijklmnopqrstuvwxyzabcdefgh");
testCipher(encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 37000), "CDEFGHIJKLMNOPQRSTUVWXYZAB");
testCipher(encode("abcdefghijklmnopqrstuvwxyz", 57000), "ijklmnopqrstuvwxyzabcdefgh");
testCipher(encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 43987), "VWXYZABCDEFGHIJKLMNOPQRSTU");
testCipher(encode("AbcdefghijklMnopqrstuvwxyZ", 389), "ZabcdefghijkLmnopqrstuvwxY");
testCipher(encode("tá rodando lindão! =)", 471), "wá urgdqgr olqgãr! =)");


//Testes Descriptografar:
testCipher(decode("BCD", 1), "ABC");
testCipher(decode('A', 1), "Z");
testCipher(decode("123%#$@é*()_+-?/\|0õ~êÀ", 185), "123%#$@é*()_+-?/\|0õ~êÀ");
testCipher(decode("defghijklmnopqrstuvwxyzabc", 3), "abcdefghijklmnopqrstuvwxyz");
testCipher(decode("bcdefghijklmnopqrstuvwxyza", 27), "abcdefghijklmnopqrstuvwxyz")
testCipher(decode("Dboçãp!", 1), "Canção!");
testCipher(decode("ijklmnopqrstuvwxyzabcdefgh", 8), "abcdefghijklmnopqrstuvwxyz");
testCipher(decode("CDEFGHIJKLMNOPQRSTUVWXYZAB", 37000), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
testCipher(decode("ijklmnopqrstuvwxyzabcdefgh", 57000), "abcdefghijklmnopqrstuvwxyz");
testCipher(decode("VWXYZABCDEFGHIJKLMNOPQRSTU", 43987), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
testCipher(decode("ZabcdefghijkLmnopqrstuvwxY 12345678910 =)", 389), "AbcdefghijklMnopqrstuvwxyZ 12345678910 =)");
testCipher(decode("wá urgdqgr olqgãr! =)", 471), "tá rodando lindão! =)");















