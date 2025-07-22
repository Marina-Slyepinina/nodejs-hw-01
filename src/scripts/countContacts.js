import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contactsArr = await readContacts();
        return contactsArr.length;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
