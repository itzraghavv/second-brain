import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { FileTextIcon, TagIcon, TwitterIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/sign-in");
    console.log("cl");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <section className="px-6 sm:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Second Brain
            </h1>
            <p className="text-xl text-gray-800 mb-4">
              Capture Everything. Find Anything. Never Lose an Idea Again.
            </p>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Turn information overload into organized knowledge with Second
              Brain, the all-in-one platform that helps you collect, organize,
              and connect your digital life.
            </p>
            <div className="flex justify-center">
              <Button
                variant="primary"
                text="Get Started"
                size="lg"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 sm:px-8 lg:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Organize Your Digital Life
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FileTextIcon className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Notes & Documents
                </h3>
                <p className="text-gray-600">
                  Capture and organize all your ideas, notes, and documents in
                  one place.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <TagIcon className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Tagging</h3>
                <p className="text-gray-600">
                  Organize content with tags and categories for easy retrieval.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <TwitterIcon className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Social Integration
                </h3>
                <p className="text-gray-600">
                  Save tweets, videos, and web content directly to your Second
                  Brain.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-8 lg:px-12 py-16 bg-indigo-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to build your Second Brain?
            </h2>
            <p className="text-gray-700 mb-8">
              Join thousands of users who have transformed how they manage
              information.
            </p>
            <div className="flex justify-center">
              <Button
                variant="primary"
                text="Get Started For Free"
                size="lg"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
