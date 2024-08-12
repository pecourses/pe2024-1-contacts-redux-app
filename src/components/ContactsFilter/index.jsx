import { connect } from 'react-redux';
import { setFilter } from '../../store/slices/contactsSlice';
import styles from './ContactsFilter.module.css';

function ContactsFilter ({ isFavourite, fullName, setFilter }) {
  const changeFavouriteFilter = value => setFilter({ isFavourite: value });

  const changeNameFilter = ({ target: { value } }) =>
    setFilter({ fullName: value });

  return (
    <div>
      <section className={styles.singleFilter}>
        <h2>Favourite</h2>
        <label>
          <input
            type='radio'
            value={null}
            onChange={() => changeFavouriteFilter(null)}
            checked={isFavourite === null}
            name='isFavourite'
          />
          <span> All</span>
        </label>
        <label>
          <input
            type='radio'
            value={true}
            onChange={() => changeFavouriteFilter(true)}
            checked={isFavourite === true}
            name='isFavourite'
          />
          <span> Favourite</span>
        </label>
        <label>
          <input
            type='radio'
            value={false}
            onChange={() => changeFavouriteFilter(false)}
            checked={isFavourite === false}
            name='isFavourite'
          />
          <span> Not favourite</span>
        </label>
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
