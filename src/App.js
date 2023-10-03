import css from "./App.module.css";
import { FriendList } from "./components/FriendList/FriendList";
import { Profile } from "./components/Profile";
import user from "./data/user.json";
import { Statistic } from "./components/Statistics";
import data from "./data/data.json";

import { TransactionHistory } from "./components/TransactionHistory";
import transactions from "./data/transactions.json";

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
      <FriendList />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
