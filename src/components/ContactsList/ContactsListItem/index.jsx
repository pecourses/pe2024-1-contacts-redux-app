import { FaStar } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import styles from "./ContactsListItem.module.css";

function ContactsListItem({
  contact: { id, fullName, phoneNumber, isFavourite },
  remove,
}) {
  //! inline styles to classNames
  return (
    <li className={styles.contactItem}>
      <h3>{fullName}</h3>
      <p>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </p>
      <button className={styles.favouriteBtn}>
        <FaStar style={{ color: isFavourite ? "yellow" : "grey" }} />
      </button>
      <button onClick={() => remove(id)}>
        <IoTrashOutline />
      </button>
    </li>
  );
}

export default ContactsListItem;
