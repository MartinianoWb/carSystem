import { writable } from 'svelte/store';


export const userIsValid = writable(false);

// countEvents will only call its subscribers for changes that happen
// after the call to subscribe
