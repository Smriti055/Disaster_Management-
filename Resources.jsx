import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: 'Emergency Kit Checklist',
    description: 'Ensure you have all the essential items in your emergency kit. Here’s a detailed checklist to help you prepare.',
    imgSrc: 'https://th.bing.com/th/id/OIP.3p2EGsuWouDzOhrZrih1ngHaE8?rs=1&pid=ImgDetMain',
    link: 'https://www.ready.gov/kit'
  },
  {
    title: 'First Aid Guide',
    description: 'Learn basic first aid skills and how to handle common injuries and medical emergencies.',
    imgSrc: 'https://th.bing.com/th/id/OIP.xZ55sStT-n9W5Cjx2VAVLwAAAA?rs=1&pid=ImgDetMain',
    link: 'https://sheriff.deschutes.org/divisions/special-services/emergency-management/before-a-disaster-emergency-preparedness/#:~:text=Having%20sufficient%20supplies%20such%20as%20food%2C%20water%2C,help%20in%20hours%20or%20it%20might%20take'
  },
  {
    title: 'Emergency Contacts',
    description: 'Keep a list of important contacts, including emergency services and family members, easily accessible.',
    imgSrc: 'https://th.bing.com/th/id/OIP.BBnmal8q2NjmkOKcvCwbiAHaHa?rs=1&pid=ImgDetMain',
    link: 'https://www.indiatoday.in/information/story/national-emergency-helpline-list-of-numbers-to-contact-during-emergency-1665873-2020-04-11'
  },
  {
    title: 'Home Evacuation Plan',
    description: 'Create a detailed evacuation plan for your home. Include escape routes, meeting points, and essential items to take.',
    imgSrc: 'https://th.bing.com/th/id/OIP.xNqIzE-YqWFWSVzlarkImwHaE8?rs=1&pid=ImgDetMain',
    link: 'https://staysafe.org/home-safety/home-emergency-evacuation-plan/'
  },
  {
    title: 'Shelter Information',
    description: 'Find information on local shelters and how to access them during emergencies. Ensure you know the nearest locations.',
    imgSrc: 'https://th.bing.com/th/id/OIP.kub8EIVZSrFH9W2OZVnTOAAAAA?w=294&h=170&rs=1&pid=ImgDetMain',
    link: 'https://isankalpa.org/'
  },
  {
    title: 'Family Emergency Plan',
    description: 'Develop a family emergency plan with communication strategies, meeting points, and roles for each family member.',
    imgSrc: 'https://info.southernoak.com/hs-fs/hubfs/Content_Piece_Images/Family_Emergency_Plan_-_cover.jpg?width=391&name=Family_Emergency_Plan_-_cover.jpg',
    link: 'https://www.preparednessguy.com/blog/family-emergency-plan'
  },
  // Add more resources as needed
];

function Resources() {
  return (
    <div className="bg-gray-800 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Disaster Preparation Resources</h1>

        <div className="flex flex-wrap justify-center gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#cbd685] rounded-lg shadow-lg overflow-hidden w-full md:w-1/3"
            >
              <img
                src={resource.imgSrc}
                alt={resource.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{resource.title}</h2>
                <p className="mb-4 text-gray-700">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
