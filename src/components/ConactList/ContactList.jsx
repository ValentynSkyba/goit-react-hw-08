import Contact from "../Contact/Contact";
import s from "./ConactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filtersSlice";
import { selectIsError, selectIsLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/selectors";

function ContactList() {
  const searchStr = useSelector(selectFilter);
  const filteredData = useSelector(selectFilteredContacts);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  if (isLoading) {
    return <h3 className={s.header}>Loading, please wait...</h3>;
  } else if (!filteredData.length && searchStr) {
    return <h2 className={s.header}>Contact you searching doesn`t exist</h2>;
  } else if (!filteredData.length) {
    return <h2 className={s.header}>No available contacts...</h2>;
  }
  return (
    <>
      <h2>Contacts</h2>
      {!isError ? (
        <ul className={s.list}>
          {filteredData.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <h2>Something went wrong...</h2>
      )}
    </>
  );
}

export default ContactList;
