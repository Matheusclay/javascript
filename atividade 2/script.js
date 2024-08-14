function numero_primo() {
        
    var num = parseInt(prompt("Digite um número: "));
    var primo = true;

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        alert("O número é primo!");
    } else {
        alert("O número não é primo!");
    }

}

numero_primo();