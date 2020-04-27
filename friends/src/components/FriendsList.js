import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
        this.setState({ ...this.state, friends: response.data });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <h1>Friends</h1>
        <div>
          {this.state.friends.map((friends) => (
            <div>
              <p>{friends.id}</p>
              <p>{friends.name}</p>
              <p>{friends.age}</p>
              <p>{friends.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FriendList;
