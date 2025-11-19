import { Linkedin, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { faculty } from '../../lib/data';

export default function FacultyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Meet Our Faculty</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts with real-world experience at top tech companies. 
            Our instructors bring cutting-edge knowledge and practical insights to every class.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faculty.map((instructor, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 flex-shrink-0">
                  <ImageWithFallback
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <CardContent className="flex-1 pt-6">
                  <h3 className="text-gray-900 mb-1">{instructor.name}</h3>
                  <p className="text-orange-600 text-sm mb-3">{instructor.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{instructor.bio}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Teaches:</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.courses.map((course, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <a href={instructor.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Faculty CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <BookOpen className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-gray-900 mb-4">Want to Join Our Faculty?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for experienced professionals passionate about teaching and 
            mentoring the next generation of data scientists and AI experts.
          </p>
          <Button size="lg">Apply to Teach</Button>
        </div>
      </div>
    </div>
  );
}
