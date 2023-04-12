
<svelte:head>
    <meta name="referrer" content="no-referrer-when-downgrade">
    <script src="https://accounts.google.com/gsi/client" async defer referrerpolicy="no-referrer-when-downgrade" on:load={renderButton}></script>
</svelte:head>

<div id="buttonDiv"></div>


<script>

    function handleCredentialResponse(response) {
        // console.log("Encoded JWT ID token: " + response.credential);
        //Save the cookie for a little bit less than an hour (the cookie is valid for 1 hour)
        document.cookie = "credentials=" + response.credential + "; path=/; max-age=3500";
        registerUser();
    }
    function renderButton () {
        window.google.accounts.id.initialize({
            client_id: "815626204427-r35898kea6mamgit0strk4j83l22kqo6.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large", shape: "pill" }  // customization attributes
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
    }

    function registerUser(){
        fetch('http://localhost:8082/registerUser', {
            method: 'POST',
            credentials: 'include',
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post);
        })
    }

</script>