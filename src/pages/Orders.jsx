import React, { useState } from 'react';
import { Truck, Clock, CheckCircle } from 'lucide-react';

function Orders() {
  const [orders] = useState([
    {
      id: 'ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      date: '2024-03-10',
      status: 'delivered',
      total: 299.00,
      items: [
        { name: 'Premium Watch', quantity: 1, price: 299.00 }
      ],
      address: '123 Main St, City, Country',
      tracking: 'TRK123456789'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      date: '2024-03-09',
      status: 'processing',
      total: 398.00,
      items: [
        { name: 'Wireless Headphones', quantity: 2, price: 199.00 }
      ],
      address: '456 Oak St, City, Country',
      tracking: ''
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Clock className="w-12 h-12 text-yellow-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Processing</h2>
              <p className="text-2xl font-semibold text-gray-800">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Truck className="w-12 h-12 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Shipped</h2>
              <p className="text-2xl font-semibold text-gray-800">5</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Delivered</h2>
              <p className="text-2xl font-semibold text-gray-800">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                    <div className="text-sm text-gray-500">{order.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">${order.total.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        const details = `
Order ID: ${order.id}
Customer: ${order.customer}
Email: ${order.email}
Address: ${order.address}
Items:
${order.items.map(item => `- ${item.name} (${item.quantity}x) @ $${item.price}`).join('\n')}
Total: $${order.total}
${order.tracking ? `Tracking Number: ${order.tracking}` : ''}
                        `;
                        navigator.clipboard.writeText(details);
                        alert('Order details copied to clipboard!');
                      }}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      Copy Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;