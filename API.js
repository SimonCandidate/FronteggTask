export async function Vendor_Auth() {

const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({
      clientId: 'f64e989e-ba21-4ade-be0a-222eb4f27217',
      secret: '3aeebf6c-c337-41be-b129-e15a93f246c8'
    })
  };
//   const bearer = await fetch('https://api.frontegg.com/auth/vendor/', options)
//     .then(token => token.json())
//     .then(token => console.log(token))
//     .catch(err => console.error(err));
//     console.log('bearer',bearer);
  const bearer = await fetch('https://api.frontegg.com/auth/vendor/', options)
  .then((token) => {return token.json();})  
  
return bearer
;
}

export async function Get_Tenants (token){

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${token}`
        }
      };
      
      const tenants = await fetch('https://api.frontegg.com/tenants/resources/tenants/v1', options)
        // .then(tenants => tenants.json())
        // .then(tenants => console.log(tenants))
        .then((token) => {return token.json();})  
        .catch(err => console.error(err));
  
return tenants

}

