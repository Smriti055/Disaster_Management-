import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Emergency Alerts',
    description: 'Stay updated with real-time emergency alerts and warnings.',
    imgSrc: 'https://via.placeholder.com/300x200.png?text=Alerts',
    button: "Read More",
    route: "/alerts"  // Add route information for potential future expansion
  },
  {
    title: 'Safety Tips',
    description: 'Learn essential safety tips to protect yourself and your family during disasters.',
    imgSrc: 'https://th.bing.com/th/id/OIP.6quRkWcUeLYxKr8ZNnjSPAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain',
    button: "Read More",
    route: "/safety"  // The route for the Safety page
  },
  {
    title: 'Resource Center',
    description: 'Access resources for disaster preparation, including checklists and contact information.',
    imgSrc: 'https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/02/03142159/Resources.jpg',
    button: "Read More",
    route: "/resources"  // Add route information for potential future expansion
  },
];

function DisasterCardsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleButtonClick = (route) => {
    navigate(route); // Use navigate function to route to the specified path
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Disaster Preparedness</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotateY: 10, zIndex: 10 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
              className="bg-white font-semibold text-xl rounded-lg shadow-lg overflow-hidden cursor-pointer w-full max-w-xs"
            >
              <img src={card.imgSrc} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
                <button
                  className='bg-yellow-200 px-2 py-2 mt-3 text-black rounded-xl'
                  onClick={() => handleButtonClick(card.route)}
                >
                  {card.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default DisasterCardsSection;
