import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filter/slice";
import { selectContacts } from "./contacts/slice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, searchStr) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
);
