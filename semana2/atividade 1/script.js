const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', options);
  
  document.getElementById('dataAtual').textContent = formattedDate;
  