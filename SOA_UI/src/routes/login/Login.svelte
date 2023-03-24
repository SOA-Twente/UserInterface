
<svelte:head>
    <meta name="referrer" content="no-referrer-when-downgrade">
    <script src="https://accounts.google.com/gsi/client" async defer referrerpolicy="no-referrer-when-downgrade"></script>
</svelte:head>



<h1>Welcome to the login page.</h1>
<div id="g_id_onload"
     data-client_id="815626204427-r35898kea6mamgit0strk4j83l22kqo6.apps.googleusercontent.com"
     data-context="signup"
     data-ux_mode="popup"
     data-callback="handleCredentialResponse"
     data-auto_prompt="false">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="rectangular"
     data-theme="outline"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
</div>

<button on:click={getLogin}>Click me</button>
<button on:click={getUsers}>Fetch users</button>



<script src="https://accounts.google.com/gsi/client" async defer>

    //handleCredentialResponse from google oauth service
    // import {method} from "svelte-check";

    function getLogin(){
        fetch('http://localhost:8080/',{
            method: 'GET',
            credentials: 'include',
        }).then(response => {
            console.log(response)
        })
    }
    function getUsers() {
        fetch('http://localhost:8080/users', {
            method: 'GET',
            credentials: 'include',
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post)
        })
    }



    // function decodeJwtResponse(token) {
    //     let base64Url = token.split('.')[1]
    //     let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //     let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //     }).join(''));
    //     return JSON.parse(jsonPayload)
    // }

    let responsePayload;
    globalThis.handleCredentialResponse = async (response) => {
        // decodeJwtResponse() is a custom function defined by you
        // to decode the credential response.
        // console.log(response)
        // responsePayload = decodeJwtResponse(response.credential);
        //
        // console.log(responsePayload)
        // console.log("ID: " + responsePayload.sub);
        // console.log('Full Name: ' + responsePayload.name);
        // console.log('Given Name: ' + responsePayload.given_name);
        // console.log('Family Name: ' + responsePayload.family_name);
        // console.log("Image URL: " + responsePayload.picture);
        // console.log("Email: " + responsePayload.email);
        //store jwt cookie
        document.cookie = "credentials=" + response.credential + "; path=/; max-age=3600";
    }
</script>