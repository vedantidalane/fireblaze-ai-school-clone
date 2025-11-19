import { Search } from 'lucide-react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = {
    admissions: [
      {
        question: 'What are the eligibility criteria for enrolling in courses?',
        answer: 'Most of our courses require basic programming knowledge and mathematics understanding (algebra, calculus). For beginner courses like "Python for Data Science," no prior experience is required. Advanced courses may have specific prerequisites listed on the course detail page.'
      },
      {
        question: 'How do I apply for admission?',
        answer: 'Fill out the application form on our Admissions page. Our counselor will contact you within 24 hours to discuss your goals, evaluate your background, and recommend the best course. Some courses may require a basic aptitude test.'
      },
      {
        question: 'What payment options are available?',
        answer: 'We offer multiple payment options: (1) One-time payment with 10% discount, (2) EMI plans for 3, 6, or 12 months, (3) Scholarships for meritorious students, (4) Early bird discounts for advance enrollment.'
      },
      {
        question: 'Is there a refund policy?',
        answer: 'Yes, we offer a 7-day money-back guarantee. If you are not satisfied with the course within the first week, we will provide a full refund, no questions asked. After 7 days, refunds are prorated based on course completion.'
      }
    ],
    courses: [
      {
        question: 'Are the courses live or recorded?',
        answer: 'Our courses feature live, instructor-led sessions. All sessions are recorded and available for lifetime access, so you can revisit topics anytime. Live sessions allow real-time interaction with instructors and peers.'
      },
      {
        question: 'How long does it take to complete a course?',
        answer: 'Course duration varies from 2 months (Python Basics) to 7 months (AI Professional). Most popular courses like Data Science and ML are 5-6 months long. You can check specific durations on each course page.'
      },
      {
        question: 'Do I get a certificate upon completion?',
        answer: 'Yes, you receive an industry-recognized certificate upon successful completion of the course, including all assignments and projects. The certificate is valued by top employers and can be added to your LinkedIn profile.'
      },
      {
        question: 'Can I switch to a different batch if I miss classes?',
        answer: 'Yes, we offer batch flexibility. If you miss classes, you can access recordings or attend the same session in a parallel batch (subject to availability). Contact your coordinator for assistance.'
      },
      {
        question: 'What if I have doubts outside class hours?',
        answer: 'We have a dedicated support system including discussion forums, TA (Teaching Assistant) support during weekdays, and instructor office hours. You can also schedule one-on-one mentor sessions.'
      }
    ],
    placements: [
      {
        question: 'What is the placement rate?',
        answer: 'Our overall placement rate is 94%. This includes graduates who secured jobs within 6 months of course completion. We work with 150+ hiring partners across technology, finance, e-commerce, and consulting sectors.'
      },
      {
        question: 'What kind of placement support do you provide?',
        answer: 'We offer comprehensive support including resume building, LinkedIn optimization, mock interviews (technical & HR), soft skills training, direct referrals to hiring partners, and ongoing career guidance.'
      },
      {
        question: 'What is the average salary after placement?',
        answer: 'The average starting salary is 8.5 LPA (Lakhs Per Annum). Salaries vary based on your background, location, and role. Our highest placement has been 24 LPA. We also track and share detailed salary reports by course and location.'
      },
      {
        question: 'Do you guarantee job placement?',
        answer: 'While we cannot guarantee placement (as hiring depends on multiple factors including market conditions and individual performance), we guarantee interview opportunities with our hiring partners for eligible students who complete the course successfully.'
      },
      {
        question: 'How long does the placement process take?',
        answer: 'The timeline varies. Some students receive offers within 2-4 weeks, while others may take 3-6 months. Our placement team supports you throughout the process with ongoing opportunities.'
      }
    ],
    technical: [
      {
        question: 'What software or tools do I need?',
        answer: 'You will need a laptop/desktop with at least 8GB RAM (16GB recommended), internet connection, and basic software like Python, Jupyter Notebook, and VS Code. We provide detailed setup guides and cloud-based alternatives for resource-intensive tasks.'
      },
      {
        question: 'Can I access courses on mobile devices?',
        answer: 'Yes, recorded sessions and materials are accessible on mobile via our learning platform. However, for coding assignments and projects, we recommend using a laptop or desktop for the best experience.'
      },
      {
        question: 'What happens if I face technical issues during live sessions?',
        answer: 'We have a dedicated technical support team available during all live sessions. You can also access session recordings if you experience connectivity issues. Contact support at support@fireblaze.ai.'
      }
    ],
    general: [
      {
        question: 'Are the courses suitable for working professionals?',
        answer: 'Absolutely! We offer evening and weekend batches specifically designed for working professionals. The flexible schedule allows you to upskill without disrupting your current job.'
      },
      {
        question: 'Can I attend classes offline?',
        answer: 'Select courses offer offline/hybrid options at our Nagpur campus. Check the "Mode" on course detail pages. All courses are available online to students across India and globally.'
      },
      {
        question: 'Do you provide career counseling before enrollment?',
        answer: 'Yes, our admissions counselors provide free career guidance to help you choose the right course based on your background, goals, and market trends. Book a free consultation on our Admissions page.'
      },
      {
        question: 'What is the instructor-to-student ratio?',
        answer: 'We maintain small batch sizes (15-25 students) to ensure personalized attention. Each batch has one lead instructor and Teaching Assistants for additional support.'
      }
    ]
  };

  const filterFAQs = (category: any[]) => {
    if (!searchQuery) return category;
    return category.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about our courses, admissions, placements, and more. 
            Can't find what you're looking for? Contact us!
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="admissions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="placements">Placements</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>

            <TabsContent value="admissions">
              <Accordion type="single" collapsible className="space-y-2">
                {filterFAQs(faqs.admissions).map((faq, index) => (
                  <AccordionItem key={index} value={`admissions-${index}`} className="bg-white border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline text-left">
                      <span className="text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="courses">
              <Accordion type="single" collapsible className="space-y-2">
                {filterFAQs(faqs.courses).map((faq, index) => (
                  <AccordionItem key={index} value={`courses-${index}`} className="bg-white border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline text-left">
                      <span className="text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="placements">
              <Accordion type="single" collapsible className="space-y-2">
                {filterFAQs(faqs.placements).map((faq, index) => (
                  <AccordionItem key={index} value={`placements-${index}`} className="bg-white border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline text-left">
                      <span className="text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="technical">
              <Accordion type="single" collapsible className="space-y-2">
                {filterFAQs(faqs.technical).map((faq, index) => (
                  <AccordionItem key={index} value={`technical-${index}`} className="bg-white border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline text-left">
                      <span className="text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="general">
              <Accordion type="single" collapsible className="space-y-2">
                {filterFAQs(faqs.general).map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`} className="bg-white border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline text-left">
                      <span className="text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Our admissions team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              Contact Us
            </a>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
              Call +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
