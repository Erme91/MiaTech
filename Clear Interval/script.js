let timer = setInterval(() => console.log('Vi preghiamo di attendere, grazie'), 1000);

setTimeout(() => { clearInterval(timer); console.log('Vi ringraziamo per la vostra cortese attesa'); }, 5000);
