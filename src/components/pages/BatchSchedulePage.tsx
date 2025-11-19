import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { batches } from '../../lib/data';

export default function BatchSchedulePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Upcoming Batches</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our upcoming batch schedules. We offer flexible timings for working 
            professionals and students. Limited seats available!
          </p>
        </div>

        {/* Batch Table */}
        <div className="space-y-4">
          {batches.map((batch, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-12 gap-4 p-6">
                  {/* Course Name */}
                  <div className="md:col-span-3">
                    <p className="text-sm text-gray-500 mb-1">Course</p>
                    <p className="text-gray-900">{batch.course}</p>
                  </div>

                  {/* Mode */}
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">Mode</p>
                    <Badge variant="outline" className="mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {batch.mode.includes('Online') ? 'Online' : 'Offline'}
                    </Badge>
                  </div>

                  {/* Start Date */}
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">Start Date</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-900 text-sm">
                        {new Date(batch.startDate).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">Timings</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-900 text-sm">{batch.timings}</span>
                    </div>
                  </div>

                  {/* Seats */}
                  <div className="md:col-span-1">
                    <p className="text-sm text-gray-500 mb-1">Seats</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span className={`text-sm ${batch.seatsLeft <= 5 ? 'text-red-600' : 'text-gray-900'}`}>
                        {batch.seatsLeft}
                      </span>
                    </div>
                    {batch.seatsLeft <= 5 && (
                      <Badge variant="destructive" className="mt-1 text-xs">Filling Fast</Badge>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="md:col-span-2 flex flex-col justify-center items-end gap-2">
                    <p className="text-orange-600">{batch.price}</p>
                    <Button size="sm" asChild>
                      <Link to="/admissions">
                        Enroll <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-gray-900 mb-2">Flexible Schedules</h3>
              <p className="text-gray-600 text-sm">
                We offer weekday evening and weekend batches to accommodate working professionals and students.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-gray-900 mb-2">Small Batch Sizes</h3>
              <p className="text-gray-600 text-sm">
                Limited seats per batch ensure personalized attention and better interaction with instructors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-gray-900 mb-2">Hybrid Learning</h3>
              <p className="text-gray-600 text-sm">
                Choose between live online or offline classroom learning based on your preference and location.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Can't Find Batch CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center">
          <h2 className="text-gray-900 mb-4">Can't Find a Suitable Batch?</h2>
          <p className="text-gray-600 mb-6">
            Contact our admissions team to discuss custom batch timings or get notified when new batches are announced.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Admissions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
