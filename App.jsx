import './App.css';
import { useEffect } from 'react';
import { AdminPortal } from "@frontegg/react";
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import { Vendor_Auth } from './API';
import { Get_Tenants } from './API';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const handleClick = () => {

    AdminPortal.show();

  };


  let Tenants; 

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
    // else {
    //   console.log ('else')
    //   Tenants = Get_Tenants();
    // }
  }, [isAuthenticated, loginWithRedirect]);

// Get_Tenants();  

//   async function Get_Tenants () {
//     const token = await Vendor_Auth ();
//     const tenants = await Get_Tenants (token.token);
//     console.log(tenants);
//     return tenants ;
//   }


  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  console.log ('Tenants', Tenants)

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
          <button onClick={handleClick}>Settings</button>
          </div>
          <div>
            <select >              
              <option value="Tenant1">Tenant1</option>
              <option value="Tenant2">Tenant2</option>
              {/* {
              Tenants.map((Tenant) => {return <option value="Tenant1">{Tenant.tenantid}</option> })
              } */}
            </select>

          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;