import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { response } from 'express';

const initialItem = {
  name: '',
  age: '',
  email: '',
};

const AddFriendForm = (props) => {
  const [item, setItem] = useState(initialItem);

  const changeHandler = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    axiosWithAuth()
      .post('/friends', item)
      .then((response) => {
        console.log(response);
        props.history.push('/friends');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={changeHandler}
          value={item.name}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={changeHandler}
          value={item.age}
        />

        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={changeHandler}
          value={item.email}
        />

        <button>Add New Friend</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
