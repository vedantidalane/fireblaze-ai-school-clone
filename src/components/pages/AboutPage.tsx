import { Target, Eye, Award, Users, TrendingUp, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 mb-4">About Fireblaze AI School</h1>
            <p className="text-gray-700">
              Empowering the next generation of data scientists and AI professionals with industry-focused, 
              practical training that delivers real career outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-orange-100">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To bridge the gap between academic learning and industry requirements by providing 
                  world-class, practical training in data science, machine learning, and artificial intelligence. 
                  We aim to create job-ready professionals who can immediately contribute to their organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To become India's most trusted institution for AI and data science education, 
                  recognized for our placement success, industry partnerships, and commitment to 
                  transforming lives through technology education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Founded in 2018 in Nagpur, Fireblaze AI School started with a simple observation: 
                there was a massive gap between what universities taught and what the industry needed. 
                Fresh graduates with degrees in computer science were struggling to find jobs because 
                they lacked practical, hands-on experience with modern data science tools and techniques.
              </p>
              <p className="text-gray-700 mb-4">
                Our founders, veterans from companies like Google, Microsoft, and Amazon, came together 
                to create a learning institution that would focus exclusively on practical, industry-relevant 
                skills. They designed a curriculum based on real job requirements, recruited instructors 
                from top tech companies, and built partnerships with hiring organizations.
              </p>
              <p className="text-gray-700">
                Today, with over 2,500 successful graduates and partnerships with 150+ companies, 
                Fireblaze AI School has become a trusted name in data science and AI education. 
                Our 94% placement rate and average salary of 8.5 LPA speak to the quality and 
                effectiveness of our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Industry Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from professionals who have built real AI systems at companies like Google, 
                  Amazon, Microsoft, and leading Indian tech firms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Project-Based Learning</h3>
                <p className="text-gray-600">
                  Work on real-world projects from day one. Build a portfolio that demonstrates 
                  your skills to potential employers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Proven Placement Success</h3>
                <p className="text-gray-600">
                  94% placement rate with an average salary of 8.5 LPA. Our dedicated career 
                  services team works tirelessly to connect you with opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600">
                  Our certifications are recognized by top companies. We maintain partnerships 
                  with 150+ hiring organizations across India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Updated Curriculum</h3>
                <p className="text-gray-600">
                  Our courses are updated every quarter to reflect the latest industry trends, 
                  tools, and best practices in data science and AI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 mb-2">Personalized Mentorship</h3>
                <p className="text-gray-600">
                  Small batch sizes ensure personalized attention. Each student gets dedicated 
                  mentor support throughout their learning journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center">Our Journey in Numbers</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-orange-600">2018</span>
                </div>
                <div className="flex-1">
                  <div className="border-l-2 border-orange-200 pl-6 pb-8">
                    <h3 className="text-gray-900 mb-2">Foundation</h3>
                    <p className="text-gray-600">
                      Fireblaze AI School founded in Nagpur with first batch of 25 students
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-orange-600">2020</span>
                </div>
                <div className="flex-1">
                  <div className="border-l-2 border-orange-200 pl-6 pb-8">
                    <h3 className="text-gray-900 mb-2">Expansion</h3>
                    <p className="text-gray-600">
                      Crossed 500 graduates and expanded to online learning during pandemic
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-orange-600">2022</span>
                </div>
                <div className="flex-1">
                  <div className="border-l-2 border-orange-200 pl-6 pb-8">
                    <h3 className="text-gray-900 mb-2">Recognition</h3>
                    <p className="text-gray-600">
                      Achieved 90%+ placement rate, partnerships with 100+ companies
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-orange-600">2024</span>
                </div>
                <div className="flex-1">
                  <div className="border-l-2 border-orange-200 pl-6">
                    <h3 className="text-gray-900 mb-2">Milestone</h3>
                    <p className="text-gray-600">
                      2,500+ graduates, 150+ hiring partners, 94% placement rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                    alt="Founder"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-gray-900 mb-1">Suresh Iyer</h3>
                    <p className="text-orange-600 text-sm mb-2">Founder & CEO</p>
                    <p className="text-gray-600 text-sm">
                      Former Engineering Director at Google. IIT Bombay alumnus with 18 years 
                      of experience building ML systems. Passionate about democratizing AI education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
                    alt="Co-founder"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-gray-900 mb-1">Meera Kulkarni</h3>
                    <p className="text-orange-600 text-sm mb-2">Co-Founder & COO</p>
                    <p className="text-gray-600 text-sm">
                      Previously led data science teams at Microsoft and Amazon. IISc Bangalore 
                      PhD. Expert in curriculum design and industry partnerships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
