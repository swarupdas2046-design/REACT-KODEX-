import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';

const CryptoDashboard = () => {
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$43,219', change: '+5.2%', isUp: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,912', change: '-1.4%', isUp: false },
    { name: 'Ripple', symbol: 'XRP', price: '$0.52', change: '+0.8%', isUp: true },
    { name: 'Litecoin', symbol: 'LTC', price: '$68.50', change: '+2.1%', isUp: true },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-slate-800">Crypto Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coins.map((coin, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium">{coin.name}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{coin.price}</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className={`flex items-center mt-4 text-sm font-medium ${coin.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
              {coin.isUp ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
              <span>{coin.change}</span>
              <span className="text-slate-400 ml-2 font-normal">Since last week</span>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-3">Coin</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Volume</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">Bitcoin</td>
                <td className="px-6 py-4">Jan 01, 2024</td>
                <td className="px-6 py-4 text-emerald-600">+0.041 BTC</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs">Completed</span></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">Ethereum</td>
                <td className="px-6 py-4">Jan 02, 2024</td>
                <td className="px-6 py-4 text-rose-600">-1.200 ETH</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoDashboard;