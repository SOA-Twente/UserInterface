<svelte:head>
    <meta name="referrer" content="no-referrer-when-downgrade">
    <script src="https://accounts.google.com/gsi/client" async defer referrerpolicy="no-referrer-when-downgrade" on:load={renderButton}></script>
</svelte:head>
<script >
    import 'bootstrap/dist/css/bootstrap.css';
    import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';


    import Login from './login/Login.svelte';

    import {afterUpdate, onMount, SvelteComponent} from "svelte";


    let modal
    function show(){
        modal.show();
    }

    onMount(() => {
    });


    let bsModal
    afterUpdate(() => {
        const modal = document.querySelector('.modal');
        bsModal = new bootstrap.Modal(modal);
        isLoggedIn = checkLogin();
        if(isLoggedIn == false){
            let showingLoginScreen = true;
            bsModal.show();
        }
    });


    //Check every 0.5seconds if the user is logged in
    var isLoggedIn = setInterval(showModalOnChange, 500);
    let showingLoginScreen;
    function showModalOnChange(){
        if(checkLogin() == true){
            showingLoginScreen == false
            bsModal.hide();
        }else if(checkLogin() == false){
            showingLoginScreen == true
            bsModal.show();
        }
    }
    function checkLogin(){
        // console.log("Checking login")
        const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("credentials="))
        ?.split("=")[1];
        // console.log(cookieValue)
        if(cookieValue == undefined){
            return false;
        }else{
            return true;
        }
    }




    function handleCredentialResponse(response) {
        // console.log("Encoded JWT ID token: " + response.credential);
        //Save the cookie for a little bit less than an hour (the cookie is valid for 1 hour)
        document.cookie = "credentials=" + response.credential + "; path=/; max-age=3500";
        showingLoginScreen = false;
    }
    function renderButton () {
        window.google.accounts.id.initialize({
            client_id: "815626204427-r35898kea6mamgit0strk4j83l22kqo6.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDivLogin"),
            { theme: "outline", size: "large", shape: "pill" }  // customization attributes
        );
        // window.google.accounts.id.prompt(); // also display the One Tap dialog
    }

</script>


    <div class="modal fade my-auto" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mx-auto" id="staticBackdropLabel">Login or Sign-up</h5>
<!--                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <div class="modal-body mx-auto">
                    <div id="buttonDivLogin"></div>

<!--                    <Login />-->
                </div>
<!--                <div class="modal-footer">-->
<!--                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
<!--                    <button type="button" class="btn btn-primary">Understood</button>-->
<!--                </div>-->
            </div>
        </div>
    </div>
