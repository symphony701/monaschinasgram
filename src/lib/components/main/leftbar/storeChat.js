import { writable } from 'svelte/store';

const createFriendChat = () => {
    const { subscribe, set, update } = writable(null);

    return {
        subscribe,
        select: (data) => set(data),
        unselect : () => set(null)
    };
}

export const friendChat = createFriendChat();
