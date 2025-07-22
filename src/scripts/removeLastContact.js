import fs from "node:fs/promises";
import { readContacts } from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const contactsArr = await readContacts();
        if (contactsArr.length > 0) {
            contactsArr.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contactsArr, null, 2), "utf-8");
        }
    } catch (error) {
        console.log(error);
    }
};

removeLastContact();

