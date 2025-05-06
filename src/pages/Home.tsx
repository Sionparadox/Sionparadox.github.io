import RecentPost from '@/components/organisms/RecentPost';

const Home = () => {
  return (
    <div >
      <h2 className="text-3xl font-black text-title mb-7 border-b-2 border-strokeMain pb-7 pt-2">Recent Posts</h2>
      <RecentPost />
    </div>
  );
};

export default Home;
