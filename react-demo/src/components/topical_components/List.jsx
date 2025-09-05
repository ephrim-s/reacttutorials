// How to handle lists in React using map function
// list methods: map, filter, reduce, find, findIndex, etc.
// Key prop: A special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.
// List can be edited, deleted, or added dynamically using push, pop, splice, etc.  

import React from 'react';
import { info } from '../../data/custInfo';

const numbers = [1, 2, 3, 4, 5];
const customersInfo = info;
// .map(cust => cust.first_name + " " + cust.last_name);
console.log(customersInfo);

const List = () => {
  return (
    <div>
      {numbers.map(number => (
        <ul key={number}>
            <li>{number}</li>-
        </ul>
      )) }
      {customersInfo.map(cust => (
        <div key={cust.customer_id} style={{marginBottom: '20px', padding: '10px', border: '1px solid #ccc'}}>
            <h3>{cust.first_name} {cust.last_name}</h3>
            <p><strong>Email:</strong> {cust.email}</p>
            <p><strong>Phone:</strong> {cust.phone_number}</p>
            <p><strong>Address:</strong> {cust.address.street}, {cust.address.city}, {cust.address.state} {cust.address.zip_code}, {cust.address.country}</p>
            <p><strong>Registered On:</strong> {new Date(cust.registration_date).toLocaleDateString()}</p>
            <p><strong>Last Purchase:</strong> {new Date(cust.last_purchase_date).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {cust.is_active ? 'Active' : 'Inactive'}</p>
            <p><strong>Preferences:</strong></p>
            <ul>
                <li>Newsletter: {cust.preferences.newsletter_opt_in ? 'Subscribed' : 'Not Subscribed'}</li>
                <li>Marketing Emails: {cust.preferences.marketing_emails ? 'Subscribed' : 'Not Subscribed'}</li>
                <li>Favorite Categories: {cust.preferences.favorite_categories.join(', ')}</li>
            </ul>
        </div>
      )) }
    </div>
  )
}

export default List;
