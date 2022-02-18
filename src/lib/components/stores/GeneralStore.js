import { writable } from "svelte/store";
import { browser } from "$app/env";

const createLoggedUser = () => {
    const { subscribe, set, update } = writable(null);
    return {
        subscribe,
        signin: (data) => set(data),
    };
}

export const loggedUser = createLoggedUser();

export const userWrote = writable(
    browser && (localStorage.getItem("userWrote") || "")
);

export const passwordWrote = writable(
    browser && (localStorage.getItem("passwordWrote") || "")
);