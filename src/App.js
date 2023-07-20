import css from "./App.module.css";
import { FriendList } from "./components/FriendList/FriendList";
import { Profile } from "./components/Profile";
import user from "./components/Profile/user.json";
import { Statistic } from "./components/Statistics";
import data from "./components/Statistics/data.json";
import friends from "./components/FriendList/friends.json";
import { TransactionHistory } from "./components/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
