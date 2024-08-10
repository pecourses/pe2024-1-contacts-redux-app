import { connect } from "react-redux";
import ContactsListItem from "./ContactsListItem";
import { removeContact } from "../../store/slices/contactsSlice";

function ContactsList({ contacts, remove }) {
  const mapContacts = c => (
    <ContactsListItem key={c.id} contact={c} remove={remove} />
  );

  return (
    <section>
      <h2>Contacts List</h2>
      <ul style={{ overflow: "hidden" }}>{contacts.map(mapContacts)}</ul>
    </section>
  );
}

// const mapStateToProps = state => state.constactsList;
const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeContact(id)), // id => payload
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
