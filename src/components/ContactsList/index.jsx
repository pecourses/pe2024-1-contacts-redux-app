import { connect } from "react-redux";
import ContactsListItem from "./ContactsListItem";

function ContactsList({ contacts }) {
  const mapContacts = c => <ContactsListItem key={c.id} contact={c} />;

  return (
    <section>
      <h2>Contacts List</h2>
      <ul>{contacts.map(mapContacts)}</ul>
    </section>
  );
}

// const mapStateToProps = state => state.constactsList;
const mapStateToProps = ({ contactsList }) => contactsList;

export default connect(mapStateToProps)(ContactsList);
