const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">Profile Details</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-32 h-32 rounded-full overflow-hidden text-white flex items-center justify-center text-4xl font-bold shadow-md">
          <img src="https://i.pinimg.com/736x/3a/de/ee/3adeeee1b2b2a7cd543a4187f9661f47.jpg" className="h-full w-full object-cover"/>
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">John Doe</h2>
            <p className="text-slate-500">Senior Crypto Analyst</p>
          </div>
          <p className="text-slate-600">
            Passionate about blockchain technology and decentralized finance. Trading since 2017 with a focus on altcoins and DeFi protocols.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;