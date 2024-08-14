function calc_fatorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * calc_fatorial(n - 1);
    }
}

function fatorial() {
    var num = parseInt(prompt("Digite um número: "));
    alert("O fatorial de " + num + " é " + calc_fatorial(num));
}

fatorial();