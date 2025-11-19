import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { courses } from '../../lib/data';

export default function CoursesPage() {
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [modeFilter, setModeFilter] = useState<string>('all');

  const filteredCourses = courses.filter((course) => {
    const matchesLevel = levelFilter === 'all' || course.level.toLowerCase().includes(levelFilter.toLowerCase());
    const matchesMode = modeFilter === 'all' || course.mode.toLowerCase().includes(modeFilter.toLowerCase());
    return matchesLevel && matchesMode;
  });

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Our Programs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of data science, machine learning, and AI courses designed to make you industry-ready.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">Filter Courses</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={modeFilter} onValueChange={setModeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Modes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modes</SelectItem>
                <SelectItem value="online">Live Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setLevelFilter('all');
                setModeFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Course List */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No courses match your filters. Try expanding duration or mode.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="flex-1 flex flex-col pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                      {course.level}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      {course.mode}
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{course.summary}</p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Batch:</span>
                      <span className="text-gray-900">
                        {new Date(course.nextBatch).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="text-orange-600">{course.price}</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/courses/${course.id}`}>
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
