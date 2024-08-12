import { connect } from 'react-redux';
import { setFilter } from '../../store/slices/contactsSlice';
import styles from './ContactsFilter.module.css';
import CONSTANTS from './../../constants';

const { CONTACTS_FILTER_OPTIONS } = CONSTANTS;

function ContactsFilter ({ isFavourite, fullName, setFilter }) {
  const changeFavouriteFilter = value => setFilter({ isFavourite: value });

  const changeNameFilter = ({ target: { value } }) =>
    setFilter({ fullName: value });

  const mapOptions = ({ value, caption }) => (
    <label key={caption}>
      <input
        type='radio'
        value={value}
        onChange={() => changeFavouriteFilter(value)}
        checked={isFavourite === value}
        name='isFavourite'
      />
      <span> {caption}</span>
    </label>
  );

  return (
    <div>
      <section className={styles.singleFilter}>
        <h2>Favourite</h2>
        {CONTACTS_FILTER_OPTIONS.map(mapOptions)}
      </section>
      <section className={styles.singleFilter}>
        <h2>Name</h2>
        <label>
          <span>Search by name: </span>
          <input
            type='search'
            name='fullName'
            value={fullName}
            onChange={changeNameFilter}
          />
        </label>
      </section>
    </div>
  );
}

const mapStateToProps = ({ contactsList: { filter } }) => filter;

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
