import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendsForm from '../components/AddFriendsForm';

class FriendList extends React.Component {
  state = {
    friends: [],
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then((response) => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <h1>Friends</h1>
        <div>
          {this.state.friends.map((friends) => (
            <div key={friends.id}>
              <p>Name: {friends.name}</p>
              <p>Age: {friends.age}</p>
              <p>Email: {friends.email}</p>
            </div>
          ))}
        </div>
        <AddFriendsForm />
      </div>
    );
  }
}

export default FriendList;
