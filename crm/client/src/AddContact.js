import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { contactsListQuery } from './Contacts';

const CREATE_CONTACT = gql`
    mutation createContact($firstName: String!, $lastName: String!) {
        createContact(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }`;

const AddContact = () => {
    let firstName;
    let lastName;
    return (
        <Mutation 
            mutation={CREATE_CONTACT}
            update={(cache, { data: { createContact } }) => {
                const { contacts } = cache.readQuery({ query: contactsListQuery });
                cache.writeQuery({
                  query: contactsListQuery,
                  data: { contacts: contacts.concat([createContact]) }
                });
            }}
            >
            {(createContact, { loading, error }) => (
                <div>
                    <form
                        onSubmit={ e => {
                            e.preventDefault();
                            createContact({ variables: { firstName: firstName.value, lastName: lastName.value } }); 
                            firstName.value = "";
                            lastName.value = "";
                            }
                        }
                    >
                        <input ref={node => { firstName = node }}/>
                        <input ref={node => { lastName = node }}/>
                        <button type="submit">Add contact</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again</p>}
                </div>
            )}
        </Mutation>
    );
}


export default AddContact;