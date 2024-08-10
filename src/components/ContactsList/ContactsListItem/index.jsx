import styles from "./ContactsListItem.module.css";

function ContactsListItem({ contact: { fullName, phoneNumber } }) {
  return (
    <li className={styles.contactItem}>
      <h3>{fullName}</h3>
      <p>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </p>
    </li>
  );
}

export default ContactsListItem;
