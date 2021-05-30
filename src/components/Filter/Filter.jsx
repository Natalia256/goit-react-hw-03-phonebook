import styles from './Filter.module.css'
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <label className={styles.filterLabel}>Find contacts by name
    <input className={styles.input} type="text" value={value} onChange={onChange}/>
  </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;