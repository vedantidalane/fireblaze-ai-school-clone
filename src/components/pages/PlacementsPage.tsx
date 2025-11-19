import { TrendingUp, Briefcase, Award, Users, Building2, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { placements, testimonials } from '../../lib/data';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Star } from 'lucide-react';

export default function PlacementsPage() {
  return (
    <div>
      {/* Hero Stats */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="mb-4">Placement Success</h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Our proven track record speaks for itself. Join thousands of successful graduates 
              who landed their dream jobs with our comprehensive placement support.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mb-2">{placements.stats.placementRate}%</div>
              <p className="text-orange-100">Placement Rate</p>
            </div>
            <div>
              <div className="mb-2">{placements.stats.avgSalary}</div>
              <p className="text-orange-100">Average Salary</p>
            </div>
            <div>
              <div className="mb-2">{placements.stats.topSalary}</div>
              <p className="text-orange-100">Highest Salary</p>
            </div>
            <div>
              <div className="mb-2">{placements.stats.hiringPartners}+</div>
              <p className="text-orange-100">Hiring Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center">Our Placement Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Profile Building</h3>
                <p className="text-gray-600 text-sm">
                  Create an impressive resume and LinkedIn profile that highlights your skills and projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Interview Prep</h3>
                <p className="text-gray-600 text-sm">
                  Participate in mock interviews, technical assessments, and HR round simulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Company Connections</h3>
                <p className="text-gray-600 text-sm">
                  Get direct referrals to our 150+ hiring partners across various industries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Job Offers</h3>
                <p className="text-gray-600 text-sm">
                  Receive multiple job offers and guidance on negotiating the best package.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-4 text-center">Our Hiring Partners</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our graduates have been hired by leading companies across technology, finance, e-commerce, and consulting sectors.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {placements.companies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700">{company}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">And 138+ more companies...</p>
        </div>
      </section>

      {/* Job Roles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center">Common Job Roles Our Alumni Get</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-3">Data Science</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Data Scientist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Data Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Business Intelligence Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Analytics Consultant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-3">Machine Learning</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>ML Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>MLOps Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Computer Vision Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>NLP Engineer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-3">AI & Research</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>AI Researcher</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Deep Learning Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>AI Solutions Architect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Research Scientist</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 border-t pt-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-orange-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.batch} Batch</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center">What We Provide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-1">Resume Building Workshops</h3>
                <p className="text-gray-600 text-sm">Expert guidance on creating ATS-friendly resumes</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-1">Mock Interviews</h3>
                <p className="text-gray-600 text-sm">Practice with industry professionals</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-1">LinkedIn Optimization</h3>
                <p className="text-gray-600 text-sm">Make your profile stand out to recruiters</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-1">Portfolio Development</h3>
                <p className="text-gray-600 text-sm">Showcase your projects effectively</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-1">Soft Skills Training</h3>
                <p className="text-gray-600 text-sm">Communication and presentation skills</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 mb-1">Dedicated Support</h3>
                <p className="text-gray-600 text-sm">Placement team available throughout your journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
