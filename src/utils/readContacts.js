import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    const contactStr = await fs.readFile(PATH_DB, 'utf-8');
    return contactStr ? JSON.parse(contactStr) : [];
};
