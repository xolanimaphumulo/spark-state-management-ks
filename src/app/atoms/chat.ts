import { atom } from "jotai";

export const messagesAtom = atom<string[]>([]);
export const newMessageAtom = atom<string>("");
export const isTypingAtom = atom<boolean>(false);
