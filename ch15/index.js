// DNS module
import dns from 'dns';

dns.lookup('google.com',(error,address,family)=>{
    if (error) throw error;
    console.log(address);
    console.log(family);
})



dns.resolve('google.com','MX', (error,records )=>{
    if (error) throw error;
    console.log(records);
})

dns.resolve('google.com','NS', (error,records )=>{
    if (error) throw error;
    console.log(records);
})