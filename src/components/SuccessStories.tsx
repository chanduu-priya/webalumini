import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { mockSuccessStories, mockAlumni } from '../data/mockData';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspiring journeys of our alumni who are making a difference in their fields
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockSuccessStories.map((story) => {
            const alumni = mockAlumni.find(a => a.id === story.alumniId);
            return (
              <div key={story.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
                  <Award className="h-20 w-20 text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      story.category === 'Entrepreneurship' ? 'bg-green-100 text-green-800' :
                      story.category === 'Corporate' ? 'bg-blue-100 text-blue-800' :
                      story.category === 'Research' ? 'bg-purple-100 text-purple-800' :
                      story.category === 'Social Impact' ? 'bg-pink-100 text-pink-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {story.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(story.publishedDate).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  
                  {alumni && (
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {alumni.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{alumni.name}</p>
                        <p className="text-sm text-gray-600">{alumni.currentPosition} at {alumni.company}</p>
                      </div>
                    </div>
                  )}

                  <p className="text-gray-700 mb-4">{story.summary}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {story.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <span className="mr-2">Read Full Story</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Your Story CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Success Story</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Inspire fellow alumni and current students by sharing your journey, achievements, and lessons learned.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;