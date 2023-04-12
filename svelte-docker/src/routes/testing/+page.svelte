<svelte:head>

</svelte:head>
<div class="mx-auto w-50">
    <button on:click={getLogin}>Click me</button>
    <button on:click={getUsers}>Fetch users</button>
    <button on:click={doesUserExist}>Does user exist?</button>
    <button on:click={registerUser}>Register User</button>
    <button on:click={search}>Search</button>
    <button on:click={userData}>Get user data</button>
</div>


<script>





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
    function doesUserExist() {
        fetch('http://localhost:8082/doesUserExist', {
            method: 'GET',
            credentials: 'include',
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post)
        })
    }

    function registerUser() {
        fetch('http://localhost:8082/registerUser', {
            method: 'POST',
            credentials: 'include',
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post)
        })
    }

    function search() {
        fetch('http://localhost:8086/search/f', {
            method: 'GET',
            credentials: 'include',
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post)
        })
    }

    function userData() {
        fetch('http://localhost:8082/getUserData', {
            method: 'GET',
            credentials: 'include',
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post)
        })
    }    import {redirect} from "@sveltejs/kit";



</script>