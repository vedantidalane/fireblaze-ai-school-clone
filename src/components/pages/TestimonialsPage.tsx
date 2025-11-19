import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { testimonials } from '../../lib/data';

export default function TestimonialsPage() {
  // Extended testimonials for this page
  const allTestimonials = [
    ...testimonials,
    {
      name: 'Sanjay Rao',
      role: 'Senior Data Analyst at HCL',
      company: 'HCL',
      batch: 'Aug 2024',
      rating: 5,
      quote: "The course content is exactly what the industry needs. I got 3 job offers within a month of completing the program!",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
    },
    {
      name: 'Pooja Reddy',
      role: 'AI Engineer at Cognizant',
      company: 'Cognizant',
      batch: 'May 2024',
      rating: 5,
      quote: "Fireblaze not only taught me technical skills but also prepared me for interviews. The mock sessions were invaluable.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
    },
    {
      name: 'Karthik Nair',
      role: 'Data Scientist at Capgemini',
      company: 'Capgemini',
      batch: 'Feb 2024',
      rating: 5,
      quote: "From zero coding knowledge to becoming a data scientist - this journey was incredible. Thank you Fireblaze!",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Student Success Stories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our successful graduates who transformed their careers with Fireblaze AI School. 
            These are real stories from real students.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allTestimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-orange-100 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 border-t pt-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
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

        {/* Video Testimonials Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-12 text-center">
          <h2 className="text-gray-900 mb-4">Video Testimonials</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Watch video interviews with our alumni sharing their learning experience and career transformation journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <span className="text-gray-500">Video Coming Soon</span>
              </div>
              <p className="text-gray-900">From Fresher to Data Scientist</p>
              <p className="text-sm text-gray-600">Rahul's Journey</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <span className="text-gray-500">Video Coming Soon</span>
              </div>
              <p className="text-gray-900">Career Switch Success Story</p>
              <p className="text-sm text-gray-600">Anjali's Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
