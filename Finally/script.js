const num= 10, num2 = 'a';

try {
     console.log(num/num2);
     console.log(a);
}
catch(error) {
    console.log('Errore!'); 
    console.log('Messaggio di errore: ' + error);  
}
finally {
     console.log('Operazione eseguita ugualmente');
}