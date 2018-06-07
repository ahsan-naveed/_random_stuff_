import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

export default () => {
  return (
 
            
            <Query
                    query={gql`
                            {
                         contacts {
                            id
                            firstName
                            lastName
                        }
                    }
                    `}
                >
                    {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>{error.message}</p>;

                    return <ul>{data.contacts.map(({ id, firstName, lastName }) => (
                        <li key={id}>{`${firstName} ${lastName}`}</li>
                    ))}</ul>
                }}
            </Query>
  )
}
