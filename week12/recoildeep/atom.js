import { atom } from "recoil";

export const NetworkAtom = atom({
    default : 102,
    key: "NetworkAtom"
})
export const JobsAtom = atom({
    default : 0,
    key: "JobAtom"
})

export const MessagingAtom = atom({
    default : 0,
    key: "MessagingAtom"
})
export const NotificationAtom = atom({
    default : 12,
    key: "NotificationAtom"
})
