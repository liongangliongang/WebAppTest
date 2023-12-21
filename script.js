function attivaAPI() {
    // Qui puoi inserire il codice per chiamare l'API
    // Ad esempio, puoi utilizzare la funzione fetch()
    fetch('https://api.example.com')
        .then(response => response.json())
        .then(data => {
            alert('API Attivata con successo!');
            console.log(data);
        })
        .catch(error => console.error('Errore nella chiamata API:', error));
}
