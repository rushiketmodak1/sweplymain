export const getHeaders = () => {
    let auth0 = null;
    if (typeof window !== "undefined") {
      // do localStorage stuff here
      let user = JSON.parse(localStorage.getItem("user"));
      auth0 = localStorage.getItem("auth0Token");
    }
    return auth0;
    // return user.token
  };
  export const getZohoInvoiceHeaders = () => {
    let zohoUser =
      "Zoho-oauthtoken " + localStorage.getItem("zoho-refresh-token");
    return zohoUser;
  };
  