import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions';
import Profile from '../components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionList from './Transaction/TransactionList';

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <FriendList arr={friends} />
      <TransactionList arr={transactions} />
    </div>
  );
};
