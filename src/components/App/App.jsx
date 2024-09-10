// src/App.jsx


import Profile from '../Profile/Profile';
import userData from "../../userData.json"; 
import FriendList from '../FriendList/FriendList';
import friends from "../../friends.json"; 
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from "../../transactions.json";

export default function App({ children }) {
  return (
    <div>
      <h3>Завдання 1. Профіль соціальної мережі</h3>
      
      <Profile
      name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
      {children}
      
      <h3>Завдання 2. Список друзів</h3>
      <FriendList friends={friends} />
      
      <h3>Завдання 3. Історія транзакцій</h3>
      <TransactionHistory items={transactions} />

    </div>
  );
}

