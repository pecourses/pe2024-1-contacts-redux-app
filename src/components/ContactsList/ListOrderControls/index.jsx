import classNames from 'classnames';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import styles from './ListOrderControls.module.css';
import { connect } from 'react-redux';
import { setOrder } from '../../../store/slices/contactsSlice';
import CONSTANTS from '../../../constants';

const { ASC, DESC } = CONSTANTS.ORDER;

function ListOrderControls ({ byName, changeOrder }) {
  const caclClassNames = order =>
    classNames(styles.btn, { [styles.activeBtn]: order === byName });

  return (
    <div className={styles.orderControlsContainer}>
      <button
        className={caclClassNames(ASC)}
        onClick={() => changeOrder({ byName: ASC })}
      >
        <FaSortAlphaDown />
      </button>
      <button
        className={caclClassNames(DESC)}
        onClick={() => changeOrder({ byName: DESC })}
      >
        <FaSortAlphaDownAlt />
      </button>
    </div>
  );
}

const mapStateToProps = ({ contactsList: { order } }) => order;

const mapDispatchToProps = dispatch => ({
  changeOrder: order => dispatch(setOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOrderControls);
