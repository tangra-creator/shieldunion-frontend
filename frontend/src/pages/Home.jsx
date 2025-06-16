const Home = () => {
  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Welcome to ShieldUnion</h1>
      <p className="text-lg max-w-xl text-gray-700 mb-6">
        ShieldUnion is the world's first decentralized protection platform defending people from injustice, corruption, and danger. 
        Anonymous reporting. DAO voting. CivGuard response.
      </p>
      <a
        href="/register"
        className="inline-block bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition"
      >
        Join Now
      </a>
    </div>
  );
};

export default Home;
