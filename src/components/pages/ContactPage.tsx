import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { toast } from 'sonner@2.0.3';
import { courses } from '../../lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', courseInterest: '', message: '' });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or admissions? We're here to help! 
            Reach out to us and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="courseInterest">Course Interest</Label>
                      <Select value={formData.courseInterest} onValueChange={(value) => setFormData({ ...formData, courseInterest: value })}>
                        <SelectTrigger id="courseInterest">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600 text-sm">
                        Fireblaze AI School<br />
                        Plot No. 42, Sadar<br />
                        Nagpur, Maharashtra 440001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 mb-1">Phone</p>
                      <p className="text-gray-600 text-sm">+91 98765 43210</p>
                      <p className="text-gray-600 text-sm">+91 98765 43211 (Admissions)</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 mb-1">Email</p>
                      <p className="text-gray-600 text-sm">info@fireblaze.ai</p>
                      <p className="text-gray-600 text-sm">admissions@fireblaze.ai</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 mb-1">Working Hours</p>
                      <p className="text-gray-600 text-sm">Monday - Saturday</p>
                      <p className="text-gray-600 text-sm">10:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Sadar, Nagpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-100">
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <a href="/faq" className="block text-gray-700 hover:text-orange-600">
                    FAQs
                  </a>
                  <a href="/admissions" className="block text-gray-700 hover:text-orange-600">
                    Admissions Process
                  </a>
                  <a href="/batches" className="block text-gray-700 hover:text-orange-600">
                    Batch Schedule
                  </a>
                  <a href="/placements" className="block text-gray-700 hover:text-orange-600">
                    Placement Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visit Campus CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="mb-4">Visit Our Campus</h2>
          <p className="mb-6 max-w-2xl mx-auto text-orange-100">
            Schedule a campus visit to see our facilities, meet our faculty, and experience 
            the learning environment firsthand.
          </p>
          <Button size="lg" variant="secondary">
            Schedule Campus Visit
          </Button>
        </div>
      </div>
    </div>
  );
}
