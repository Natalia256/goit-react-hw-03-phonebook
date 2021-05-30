import Container from "./components/Container";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";


class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  componentDidMount() {
    const actualContacts = JSON.parse(localStorage.getItem("contacts"));
    if (actualContacts) {
      this.setState({ contacts: actualContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (this.state.contacts.find((el) => el.name === contact.name)) {
      alert("already add");
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    return (
      <Container>
        <Section title={"Phonebook"}>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title={"Contacts"}>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            list={this.getVisibleContacts()}
            onClick={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
