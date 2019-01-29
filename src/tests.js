function testEncode(calculado, esperado) {
    if (calculado === esperado) {
      console.log("Passou!");
      return true;
    }else {
      console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
      return false;
    }
}

    //Caso 1
    testEncode(encode("A", 1), "B");
    //Caso 2
    testEncode(encode("a", 1), "b");
    //Caso 3
    testEncode(encode("Z", 1), "A");