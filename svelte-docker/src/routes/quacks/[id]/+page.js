//Necessary for the google sign-in button
//Alternative is with onMount in js, see: https://stackoverflow.com/questions/75343388/new-google-sign-in-disappears-after-refreshing-page
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        post: {
            id: `${params.id}`
        }
    };
}