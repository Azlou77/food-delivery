import { useState } from "react";

/* friend = {
    firstname: string
    lastname: string
    phoneNumber: string
} */

const FriendList = () => {
  /* 
    This is correct
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
*/

  // This is better

  const [friend, setFriend] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });

  const [friendList, setFriendList] = useState([]);

  const handleFriend = (e, key) => {
    // for the first input key = "firstname"
    // Make a new object with a copy of the state so we
    // dont change the state directly
    // use the spread operator inside an object to achieve this

    // change the current key of the object by using [] with the variable
    // that is holding the key name inside
    const newFriend = { ...friend, [key]: e.target.value };
    setFriend(newFriend);
  };

  const addFriend = () => {
    const newFriendList = [...friendList, friend];
    setFriendList(newFriendList);
  };

  const deleteFriend = (index) => {
    console.log("deleting", index);
    // I want to remove the index that I receive
    // In other words I want to keep everything except the index I receive
    // when receiving parameters, if you dont need one of them
    // it is a good practice to put a "_" in its place
    const filteredFriendlist = friendList.filter((_, i) => {
      return i !== index;
    });
    setFriendList(filteredFriendlist);
  };

  return (
    <section>
      <h2>Friend List</h2>
      <div>
        <div>
          <label>Firstname </label>
          <input
            value={friend.firstname}
            onChange={(e) => handleFriend(e, "firstname")}
          />
        </div>
        <div>
          <label>Lastname </label>
          <input
            value={friend.lastname}
            onChange={(e) => handleFriend(e, "lastname")}
          />
        </div>
        <div>
          <label>Phone number </label>
          <input
            value={friend.phoneNumber}
            onChange={(e) => handleFriend(e, "phoneNumber")}
          />
        </div>
        <button onClick={addFriend}>Add friend to list</button>
      </div>
      <ul>
        {friendList.map((friend, index) => {
          return (
            <li key={index}>
              <div>
                <h3>
                  {friend.firstname} {friend.lastname}
                </h3>
                {friend.phoneNumber && <p>{friend.phoneNumber}</p>}
              </div>

              <button onClick={() => deleteFriend(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FriendList;
