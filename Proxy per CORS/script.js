async function richiestaProxy() {
    const apiURL = "http://client.cors-api.appspot.com/client";
    
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
  
    try {
      const risposta = await fetch(proxyURL + apiURL);
  
      if (!risposta.ok) {
        throw new Error(`Attenzione! Errore nella richiesta: ${risposta.status} ${risposta.statusText}`);
      }

      const dati = await risposta.text();

      console.log(`Di seguito i dati ricevuti tramite proxy:`, dati);
    } catch (errore) {
      console.error(`Errore durante la richiesta:`, errore.message);
    }
  };
  
  richiestaProxy();