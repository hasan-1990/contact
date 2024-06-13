let contacts = [
  {
    id: "1",
    name: "hasan",
    mobile: "  09151675512 ",
    email: "hasanmansouri1990@gmail.com",
  },
];

export const getcontacts = () => {
  return contacts;
};
export const getcontact = (id) => {
  return contacts.find((contact) => contact.id === id);
};
export const deletcontact = (id) => {
  contacts = contacts.filter((contact) => contact.id !== id);
};
