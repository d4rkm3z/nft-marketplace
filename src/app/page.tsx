import { Banner } from '@/components/banner';

const Home = () => (
  <main className="flex justify-center sm:px-4 p-12">
    <div className="w-full minnd:w-4/5">
      <Banner
        name="Discover, collect, and sell extraordinary NFTs"
        parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        childStyles="md:text-4xl sm:textj-2xl xs=text-xl text-left"
      />
    </div>
  </main>
);

export default Home;
