import { useState } from 'react';
import { FileText, CreditCard, UserCheck, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { toast } from 'sonner@2.0.3';
import { courses } from '../../lib/data';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    qualification: '',
    currentRole: '',
    course: '',
    preferredBatch: '',
    linkedin: '',
    statement: '',
    referralCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully! Our team will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      dob: '',
      qualification: '',
      currentRole: '',
      course: '',
      preferredBatch: '',
      linkedin: '',
      statement: '',
      referralCode: ''
    });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Apply for Admission</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step toward your data science or AI career. Fill out the application form below 
            and our admissions counselor will guide you through the process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Personal Information</h3>
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
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Educational & Professional */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Educational & Professional Background</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="qualification">Highest Qualification *</Label>
                        <Select value={formData.qualification} onValueChange={(value) => setFormData({ ...formData, qualification: value })} required>
                          <SelectTrigger id="qualification">
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate (pursuing/completed)</SelectItem>
                            <SelectItem value="postgraduate">Postgraduate</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="currentRole">Current Role/Status</Label>
                        <Input
                          id="currentRole"
                          placeholder="e.g., Software Engineer, Student, etc."
                          value={formData.currentRole}
                          onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                        <Input
                          id="linkedin"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Course Selection</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="course">Course Interest *</Label>
                        <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })} required>
                          <SelectTrigger id="course">
                            <SelectValue placeholder="Select course" />
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
                      <div>
                        <Label htmlFor="preferredBatch">Preferred Batch *</Label>
                        <Select value={formData.preferredBatch} onValueChange={(value) => setFormData({ ...formData, preferredBatch: value })} required>
                          <SelectTrigger id="preferredBatch">
                            <SelectValue placeholder="Select batch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekday-evening">Weekday Evening (7-9 PM)</SelectItem>
                            <SelectItem value="weekend-morning">Weekend Morning (10 AM-1 PM)</SelectItem>
                            <SelectItem value="weekend-afternoon">Weekend Afternoon (2-5 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Statement of Purpose */}
                  <div>
                    <Label htmlFor="statement">Why are you interested in this course?</Label>
                    <Textarea
                      id="statement"
                      placeholder="Tell us about your goals and motivation..."
                      rows={4}
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    />
                  </div>

                  {/* Referral Code */}
                  <div>
                    <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                    <Input
                      id="referralCode"
                      placeholder="Enter referral code if you have one"
                      value={formData.referralCode}
                      onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Admission Process */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-4">Admission Process</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 text-sm">1</span>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm">Submit Application</p>
                      <p className="text-gray-600 text-xs">Fill out the form with your details</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 text-sm">2</span>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm">Counseling Session</p>
                      <p className="text-gray-600 text-xs">Speak with our admissions counselor</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 text-sm">3</span>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm">Assessment (if required)</p>
                      <p className="text-gray-600 text-xs">Basic aptitude test for some courses</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 text-sm">4</span>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm">Enrollment</p>
                      <p className="text-gray-600 text-xs">Complete payment and start learning</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-orange-600" />
                  <h3 className="text-gray-900">Payment Options</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>One-time payment with 10% discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>EMI options available (3, 6, 12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Scholarships for meritorious students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Early bird discount available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our admissions counselors are here to help you choose the right program.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">📞 +91 98765 43210</p>
                  <p className="text-gray-700">✉️ admissions@fireblaze.ai</p>
                  <p className="text-gray-600">Mon-Sat: 10 AM - 7 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
