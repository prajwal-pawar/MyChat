import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
