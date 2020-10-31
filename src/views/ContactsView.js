import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import ContactList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/ContactFilter';
import contactOperations from '../redux/contacts/contactOperations';

import styles from './viewsStyles.module.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.listContainer}>
          <Layout title={'Phonebook'}>
            <ContactForm />
          </Layout>
          <Layout title={'Contacts'}>
            <Filter />
            <ContactList />
          </Layout>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  onFetchContacts: contactOperations.fetchContact,
})(ContactsView);
