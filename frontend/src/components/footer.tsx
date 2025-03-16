export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6 sm:px-8 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600 mb-4 sm:mb-0">&copy; 2025 Second Brain. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Terms</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};
