import { useState } from "react";
import { Filter } from "./Filter/Filter"
import { ContactList } from "./ContactsList/ContactsList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Section } from "./Section/Section";
import { initialContacts } from "data/Contacts";
import { useLocalStorage } from "hooks/UseLocalStorage";

export const App = () => {
  
const [contacts, setConcats] = useLocalStorage('contacts', initialContacts);
const [filter, setFilter] = useState('');

const addContact = contact => {
setConcats(contacts => {
 if(contacts.find(contacts => contact.name === contacts.name)) {
  alert(`${contact.name} is alredy in contacts`);
  return contacts;
  };
  return [contact, ...contacts];
});
};

const searchContact = (e) => {
const {value} = e.currentTarget;
setFilter(value);
};

const deleteContact = contactId => {
  setConcats(contacts => contacts.filter(contact => contact.id !== contactId)
  )
};

const filteredContacts = contacts.filter(contact => 
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

return (
    <>
    <Section title="Phonebook" />
    <ContactForm onSubmit={addContact} />
    <Section title="Contacts" />
    <Filter searchContact={searchContact} />
    <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  )
};