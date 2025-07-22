import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const newContact = createFakeContact();
        await writeContacts(newContact);
    } catch (error) {
        console.log(error);
    }
};

addOneContact();
