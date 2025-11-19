import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Award, BookOpen, Target, CheckCircle, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { courses, faculty } from '../../lib/data';

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-gray-900 mb-4">Course Not Found</h1>
          <Button asChild>
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const courseInstructors = faculty.filter((f) => f.courses.some(c => c.toLowerCase().includes(course.title.split(' ')[0].toLowerCase())));

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded">
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                  {course.mode}
                </span>
              </div>
              <h1 className="text-gray-900 mb-4">{course.title}</h1>
              <p className="text-gray-700 mb-6">{course.summary}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">
                    Next batch: {new Date(course.nextBatch).toLocaleDateString('en-IN', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-orange-600">{course.price}</span>
                <span className="text-gray-600 text-sm">EMI options available</span>
              </div>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/admissions">Enroll Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/admissions">Schedule Demo</Link>
                </Button>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-8">Course Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="w-6 h-6 text-orange-600" />
              <h2 className="text-gray-900">Detailed Curriculum</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {course.modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="bg-white border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-900">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11">
                    <p className="text-gray-600">{module.topics.join(' • ')}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Target className="w-6 h-6 text-orange-600" />
              <h2 className="text-gray-900">What You'll Learn</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Award className="w-6 h-6 text-orange-600" />
              <h2 className="text-gray-900">Projects You'll Build</h2>
            </div>
            <div className="space-y-3">
              {course.projects.map((project, index) => (
                <Card key={index}>
                  <CardContent className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-900">{project}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-gray-900 mb-6">Prerequisites</h2>
            <div className="space-y-2">
              {course.prerequisites.map((prereq, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{prereq}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      {courseInstructors.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Users className="w-6 h-6 text-orange-600" />
                <h2 className="text-gray-900">Your Instructors</h2>
              </div>
              <div className="space-y-6">
                {courseInstructors.map((instructor, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <ImageWithFallback
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                        />
                        <div>
                          <h3 className="text-gray-900 mb-1">{instructor.name}</h3>
                          <p className="text-sm text-orange-600 mb-2">{instructor.title}</p>
                          <p className="text-sm text-gray-600 mb-2">{instructor.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {instructor.expertise.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link to="/faculty">
                    View All Faculty <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-orange-100 max-w-2xl mx-auto">
            Join thousands of successful graduates who transformed their careers with Fireblaze AI School.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
