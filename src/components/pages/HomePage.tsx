                      import { Link } from 'react-router-dom';
import { GraduationCap, Users, TrendingUp, Award, BookOpen, Target, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { courses, testimonials, placements } from '../../lib/data';
import { useState } from 'react';
import { toast } from 'sonner'; // Corrected import (removed @2.0.3)

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Our admissions team will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', course: '' });
  };

  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Become a Job-Ready Data Scientist in 6 Months
              </h1>
              <p className="text-lg text-orange-100 leading-relaxed">
                Live projects, industry mentors, and placement assistance — practical training that employers value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300" asChild>
                  <Link to="/admissions">Book Free Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300" asChild>
                  <Link to="/courses">View Courses</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span>94% Placement Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span>150+ Hiring Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span>Industry Experts</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzNTQyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data science students learning"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Fireblaze AI School</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: BookOpen, title: 'Live Industry Projects', desc: 'Work on real-world projects from leading companies. Build a portfolio that stands out to employers.' },
              { icon: Users, title: 'Expert Mentors', desc: 'Learn from industry veterans with experience at Google, Microsoft, Amazon, and other top tech companies.' },
              { icon: TrendingUp, title: 'Placement Assistance', desc: 'Dedicated career support with resume building, mock interviews, and direct connections to hiring partners.' },
              { icon: Award, title: 'Industry-Recognized Certification', desc: 'Earn certificates valued by top employers. Showcase your skills with credible credentials.' },
              { icon: Target, title: 'Hands-On Learning', desc: 'Practice-focused curriculum with weekly assignments, coding challenges, and live coding sessions.' },
              { icon: GraduationCap, title: 'Lifetime Access', desc: 'Get lifetime access to course materials, recorded sessions, and continuous learning resources.' }
            ].map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Programs</h2>
            <p className="text-lg text-gray-600">Choose from our industry-leading courses designed for career success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
                <CardContent className="p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1">{course.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{course.price}</span>
                    <Button variant="outline" size="sm" className="hover:bg-orange-50 transition-all duration-300" asChild>
                      <Link to={`/courses/${course.id}`}>
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-orange-50 transition-all duration-300" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Apply & Get Counseling', desc: 'Submit your application and speak with our admissions counselor to find the right program for you.' },
              { step: '2', title: 'Learn & Build Projects', desc: 'Attend live classes, complete assignments, and work on industry projects with mentor guidance.' },
              { step: '3', title: 'Get Placed', desc: 'Leverage our placement support to land interviews and secure your dream job in data science or AI.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-orange-600">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { stat: '2,500+', label: 'Graduates' },
              { stat: `${placements.stats.placementRate}%`, label: 'Placement Rate' },
              { stat: placements.stats.avgSalary, label: 'Average Salary' },
              { stat: `${placements.stats.hiringPartners}+`, label: 'Hiring Partners' }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <p className="text-orange-100 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.batch}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Career?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Fill out the form below and our admissions team will contact you within 24 hours.
            </p>
            <Card className="shadow-lg rounded-xl">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                    <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                      <SelectTrigger className="rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select Course Interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 rounded-lg">
                    Book Free Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
