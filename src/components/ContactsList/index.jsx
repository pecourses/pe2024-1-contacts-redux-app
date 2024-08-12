import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';
import {
  removeContact,
  toggleFavourite,
} from '../../store/slices/contactsSlice';
import ListOrderControls from './ListOrderControls';
import CONSTANTS from '../../constants';

function ContactsList ({
  contacts,
  remove,
  toggle,
  filter: { isFavourite, fullName },
  order: { byName: orderCoef },
}) {
  const mapContacts = c => (
    <ContactsListItem key={c.id} contact={c} remove={remove} toggle={toggle} />
  );

  const filterByIsFavouriteContacts = c => {
    if (isFavourite === CONSTANTS.CONTACTS_FILTER_OPTIONS[0].value) {
      return true;
    }
    return c.isFavourite === isFavourite;
  };

  const filterByName = c =>
    c.fullName.toLowerCase().includes(fullName.toLowerCase());

  const sortByName = (a, b) => (a.fullName > b.fullName ? 1 : -1) * orderCoef;

  return (
    <section>
      <h2>Contacts List</h2>
      <ListOrderControls />
      <ul>
        {contacts
          .filter(filterByIsFavouriteContacts)
          .filter(filterByName)
          .sort(sortByName)
          .map(mapContacts)}
      </ul>
    </section>
  );
}

const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeContact(id)), // id => payload
  toggle: id => dispatch(toggleFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
