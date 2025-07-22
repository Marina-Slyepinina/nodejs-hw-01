import fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const parsedData = data ? JSON.parse(data) : [];

        parsedData.push(updatedContacts);

        await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), "utf-8");

    } catch (error) {
        console.log(error);
    }
};
