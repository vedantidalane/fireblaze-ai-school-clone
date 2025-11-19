import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import CoursesPage from './components/pages/CoursesPage';
import CourseDetailPage from './components/pages/CourseDetailPage';
import AboutPage from './components/pages/AboutPage';
import FacultyPage from './components/pages/FacultyPage';
import BatchSchedulePage from './components/pages/BatchSchedulePage';
import AdmissionsPage from './components/pages/AdmissionsPage';
import PlacementsPage from './components/pages/PlacementsPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
import EventsPage from './components/pages/EventsPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import FAQPage from './components/pages/FAQPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/batches" element={<BatchSchedulePage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}