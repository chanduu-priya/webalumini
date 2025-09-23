import React, { useState } from 'react';
import { Heart, Target, Award, Building, Users, CheckCircle } from 'lucide-react';
import { mockDonations } from '../data/mockData';

const DonationPortal: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const predefinedAmounts = [1000, 5000, 10000, 25000, 50000, 100000];
  const purposes = [
    { id: 'infrastructure', label: 'Infrastructure Development', icon: Building },
    { id: 'scholarships', label: 'Student Scholarships', icon: Award },
    { id: 'research', label: 'Research & Development', icon: Target },
    { id: 'general', label: 'General Fund', icon: Heart },
  ];

  const totalRaised = mockDonations.reduce((sum, donation) => sum + donation.amount, 0);
  const recentDonations = mockDonations.slice(0, 5);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your generous contribution will make a significant impact on the lives of current and future students.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setShowThankYou(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Make Another Donation
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Share on Social Media
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Your Alma Mater</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build a better future for engineering education and student opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Make a Donation</h3>
              
              <form onSubmit={handleDonate}>
                {/* Donation Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`px-4 py-3 rounded-lg border-2 text-center font-medium transition-colors ${
                          selectedAmount === amount
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                  />
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Purpose</label>
                  <div className="space-y-3">
                    {purposes.map((purpose) => {
                      const IconComponent = purpose.icon;
                      return (
                        <label key={purpose.id} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="purpose"
                            value={purpose.id}
                            checked={selectedPurpose === purpose.id}
                            onChange={(e) => setSelectedPurpose(e.target.value)}
                            className="sr-only"
                          />
                          <div className={`flex items-center w-full p-4 rounded-lg border-2 transition-colors ${
                            selectedPurpose === purpose.id
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-300 hover:border-blue-300'
                          }`}>
                            <IconComponent className="h-5 w-5 mr-3 text-blue-600" />
                            <span className="font-medium">{purpose.label}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="anonymous"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                    Make this donation anonymous
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  Donate Now
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Raised</span>
                  <span className="font-bold text-green-600">₹{totalRaised.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Donors</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Scholarships</span>
                  <span className="font-bold">56</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Projects</span>
                  <span className="font-bold">12</span>
                </div>
              </div>
            </div>

            {/* Recent Donations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Donations</h3>
              <div className="space-y-3">
                {recentDonations.map((donation) => (
                  <div key={donation.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{donation.donor}</p>
                      <p className="text-sm text-gray-600">{donation.purpose}</p>
                    </div>
                    <span className="font-bold text-green-600">₹{donation.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Recognition</h3>
              </div>
              <p className="text-gray-700 text-sm">
                All donors will be recognized on our website and annual report. Major donors will have naming opportunities for facilities and programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationPortal;