import ContactsForm from '../../components/ContactsForm';
import ContactsList from '../../components/ContactsList';

function ContactsPage () {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactsForm />
      <ContactsList />
    </div>
  );
}

export default ContactsPage;
