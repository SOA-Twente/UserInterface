//Necessary for the google sign-in button
//Alternative is with onMount in js, see: https://stackoverflow.com/questions/75343388/new-google-sign-in-disappears-after-refreshing-page
//export const ssr = false;

import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(302, '/home');
}