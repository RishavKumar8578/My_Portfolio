import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const renderContent = () => {
    switch (modalType) {
      case "privacy":
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              Your privacy is important. This portfolio does not collect personal
              information. Any data shared via forms is used only for communication
              and never shared with third parties.
            </p>
          </>
        );
      case "license":
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
              Licensing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              © 2025 Rishav Kumar. All rights reserved. The design, code, and content
              are my intellectual property. You may reference or fork for learning,
              but commercial use without permission is prohibited.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <footer className="mt-auto bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-700 dark:text-gray-300 text-sm space-y-4 md:space-y-0">

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-600 dark:text-gray-300 font-medium">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">About</a>
            <button onClick={() => openModal("privacy")} className="hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</button>
            <button onClick={() => openModal("license")} className="hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">Licensing</button>
            <a href="#contacts" className="hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Creator Info */}
          <div className="text-gray-500 dark:text-gray-400 text-center md:text-right">
            <p>
              © 2025 <span className="font-semibold text-indigo-600 dark:text-blue-400">Rishav Kumar</span> — All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 dark:bg-black/70 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-lg w-11/12 relative overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Gradient Header Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>

              <div className="mt-2">{renderContent()}</div>

              <div className="text-right mt-6">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-md shadow-md hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
