import ContactItem from '../ContactItem'
import PropTypes from "prop-types";

const ContactList = ({ list, onClick }) => {
  return ((list.length ?
    (
    <ul>
      {list.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          onClick={onClick}
          name={item.name}
          number={item.number} />
      ))
      }
    </ul>
  ):(<p>No matches found</p>)))
}
ContactList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;