function palindrome(s) {
    
    const limpaString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    
    return limpaString === limpaString.split('').reverse().join('');
}

function verificar() {
    
    const palavra = document.getElementById('palavra').value;
    
    const palindromo = palindrome(palavra);
    
    if (palindromo) {
        alert(`"${palavra}" é um palíndromo!`) ;
    } else {
        alert(`"${palavra}" não é um palíndromo!`);
    }
}
