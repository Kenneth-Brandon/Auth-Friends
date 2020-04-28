import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendsForm from './AddFriendsForm';

class FriendsList extends React.Component {
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
        <div>
          <AddFriendsForm />
        </div>

        <div className="friend-card">
          {this.state.friends.map((friends) => (
            <div key={friends.id} className="friend">
              <p>Name: {friends.name}</p>
              <p>Age: {friends.age}</p>
              <p>Email: {friends.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FriendsList;
