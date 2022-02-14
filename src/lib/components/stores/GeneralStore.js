import { writable } from "svelte/store";

const createLoggedUser = () => {
    const { subscribe, set, update } = writable(null);
    return {
        subscribe,
        signin: (data) => set(data),
    };
}

export const loggedUser = createLoggedUser();