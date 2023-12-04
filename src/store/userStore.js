// userStore.js
import { writable } from 'svelte/store';

export const user = writable(null); // 初始状态，用户未登录
export function login(username,password){
    user.set({username,password});
}
export function logout(){
    user.set(null);
}