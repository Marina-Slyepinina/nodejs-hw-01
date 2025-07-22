import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {

    for (let i = 0; i < number; i++) {
        try {
            const newContact = createFakeContact();
            await writeContacts(newContact);

        } catch (error) {
            console.log(error);
        }
    }
};

generateContacts(2);

