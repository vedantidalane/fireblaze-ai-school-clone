import { Calendar, Clock, MapPin, Users, Video } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Introduction to Machine Learning',
      date: '2025-11-25',
      time: '6:00 PM - 7:30 PM IST',
      duration: '90 mins',
      format: 'Live Online',
      speaker: 'Dr. Rajesh Kumar',
      description: 'Free webinar covering ML fundamentals, career opportunities, and hands-on demo of building your first ML model.',
      seats: 100,
      registered: 67
    },
    {
      title: 'Career in Data Science: Panel Discussion',
      date: '2025-11-28',
      time: '5:00 PM - 6:30 PM IST',
      duration: '90 mins',
      format: 'Live Online',
      speaker: 'Industry Experts Panel',
      description: 'Join industry leaders from top companies to discuss career paths, required skills, and tips for breaking into data science.',
      seats: 150,
      registered: 112
    },
    {
      title: 'Hands-on: Build Your First AI Chatbot',
      date: '2025-12-02',
      time: '2:00 PM - 4:00 PM IST',
      duration: '2 hours',
      format: 'Live Workshop',
      speaker: 'Amit Patel',
      description: 'Interactive workshop where you will build a functional chatbot using NLP techniques. Laptop required.',
      seats: 50,
      registered: 38
    },
    {
      title: 'Deep Learning for Computer Vision',
      date: '2025-12-06',
      time: '7:00 PM - 8:30 PM IST',
      duration: '90 mins',
      format: 'Live Online',
      speaker: 'Priya Sharma',
      description: 'Explore how deep learning is revolutionizing computer vision with real-world applications and demonstrations.',
      seats: 100,
      registered: 45
    }
  ];

  const pastEvents = [
    {
      title: 'Data Science Bootcamp',
      date: '2025-11-15',
      format: 'Offline',
      attendees: 85,
      recording: true
    },
    {
      title: 'MLOps Best Practices',
      date: '2025-11-10',
      format: 'Live Online',
      attendees: 150,
      recording: true
    },
    {
      title: 'AI Ethics and Responsible AI',
      date: '2025-11-05',
      format: 'Live Online',
      attendees: 120,
      recording: true
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Events & Workshops</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our free webinars, workshops, and panel discussions to learn from industry experts 
            and stay updated with the latest in data science and AI.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-gray-900 mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-6 p-6">
                    {/* Date Badge */}
                    <div className="md:col-span-2">
                      <div className="bg-orange-50 rounded-lg p-4 text-center">
                        <div className="text-orange-600 mb-1">
                          {new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}
                        </div>
                        <div className="text-gray-900">
                          {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric' })}
                        </div>
                        <div className="text-xs text-gray-600">
                          {new Date(event.date).toLocaleDateString('en-IN', { year: 'numeric' })}
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="md:col-span-7">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          {event.format}
                        </Badge>
                        <Badge variant="outline">{event.duration}</Badge>
                      </div>
                      <h3 className="text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-orange-600" />
                          <span>Speaker: {event.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-600" />
                          <span>{event.registered}/{event.seats} registered</span>
                        </div>
                      </div>
                    </div>

                    {/* Registration */}
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <div className="mb-3">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full bg-orange-500 rounded-full"
                            style={{ width: `${(event.registered / event.seats) * 100}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-600 text-center">
                          {event.seats - event.registered} seats left
                        </p>
                      </div>
                      <Button className="w-full">Register Free</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-gray-900 mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {new Date(event.date).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attended</span>
                    </div>
                    <Badge variant="outline" className="text-xs">{event.format}</Badge>
                  </div>
                  {event.recording && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Video className="w-4 h-4 mr-2" />
                      Watch Recording
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscribe */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center">
          <h2 className="text-gray-900 mb-4">Never Miss an Event</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming webinars, workshops, and exclusive learning opportunities.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
