import { setGlobalState, useGlobalState } from '../store';
import backgroundImage from './image.jpg';

const Hero = () => {
  const [stats] = useGlobalState('stats');

  return (
    <div
      className="text-center bg-white text-gray-800 py-24 px-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        <span className="capitalize">Bring creative projects to life on</span>
        <br />
        <span className="uppercase text-green-600">CryptoX.</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-green-700"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600
          text-white font-medium text-xs leading-tight uppercase
          rounded-full shadow-md hover:bg-green-700"
        >
          Donate Projects
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span className="text-lg font-bold text-white
            leading-5">PROJECTS</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span className="text-lg font-bold text-white
            leading-5">DONATORS</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white 
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span className="text-lg font-bold text-white
            leading-5">DONATED</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
