import ContactsFilter from '../../components/ContactsFilter';
import ContactsForm from '../../components/ContactsForm';
import ContactsList from '../../components/ContactsList';
import styles from './ContactsPage.module.css';

function ContactsPage () {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.filterContainer}>
        <ContactsFilter />
      </div>
      <div className={styles.listContainer}>
        <h1>Contacts</h1>
        <ContactsForm />
        <ContactsList />
      </div>
    </div>
  );
}

export default ContactsPage;
