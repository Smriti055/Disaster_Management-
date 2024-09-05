import React from 'react';

const safetyTips = [
  {
    title: 'Earthquake Safety',
    intro: 'Earthquakes can be sudden and devastating. Follow these tips to stay safe before, during, and after an earthquake.',
    imgSrc: 'https://wallpaperaccess.com/full/2142435.jpg',
    doTips: [
      'Drop to your hands and knees to prevent being knocked over.',
      'Cover your head and neck with your arms.',
      'Hold on to your shelter until the shaking stops.'
    ],
    dontTips: [
      'Do not run outside during shaking.',
      'Avoid doorways, as they are not safer than other parts of the building.',
      'Do not use elevators.'
    ]
  },
  {
    title: 'Flood Safety',
    intro: 'Floods can occur quickly and can be extremely dangerous. Here’s how you can stay safe during a flood.',
    imgSrc: 'https://cbsnews1.cbsistatic.com/hub/i/r/2018/08/19/3c6c4bb8-cb45-4e0e-bdbb-28d39d1470d4/thumbnail/1240x834/5d187ee49c6b73f781cedba817130848/ap-18230455383876.jpg',
    doTips: [
      'Move to higher ground immediately.',
      'Avoid walking or driving through floodwaters.',
      'Stay informed about flood alerts and warnings.'
    ],
    dontTips: [
      'Do not attempt to swim through floodwaters.',
      'Avoid using electrical appliances if you are wet or standing in water.',
      'Do not drive around barricades.'
    ]
  },

  {
    title: 'Hurricanes',
    imgSrc: 'https://th.bing.com/th/id/R.3e604ac7a3d0e4b649b474cfd7dcf561?rik=1mRinIlbZRLmrQ&riu=http%3a%2f%2fwww.theprepperdome.com%2fwp-content%2fuploads%2f2017%2f09%2fhurricane-floyd.adapt_.945.1-752x440.jpg&ehk=jlNe%2fwABoJXUoOvlst%2fy6PJ2Oz71D5%2bMp9Mtv92kMQ4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', // Replace with a relevant image URL
    intro: 'Hurricanes bring strong winds, heavy rains, and storm surges that can cause severe damage. Preparing ahead of time and knowing how to respond during a hurricane can protect you and your family.',
    doTips: [
      'Have a hurricane preparedness kit ready with essential supplies, including food, water, and medications.',
      'Follow evacuation orders and seek shelter in a safe location away from windows and doors.',
      'Secure your home by boarding up windows, reinforcing doors, and removing outdoor objects that could become projectiles.'
    ],
    dontTips: [
      'Don’t stay in an unsafe location during the hurricane; follow evacuation orders promptly.',
      'Avoid going outside during the storm and immediately after, as there may be hazardous conditions.',
      'Don’t ignore evacuation orders or warnings from authorities.'
    ]
    },

    {
        title: 'Wildfires',
        imgSrc: 'https://assets.skiesmag.com/wp-content/uploads/2018/08/coldstream.jpg', // Replace with a relevant image URL
        intro: 'Wildfires can spread quickly and unpredictably, consuming large areas and putting lives at risk. Understanding how to prepare for and respond to wildfires is essential for safety.',
        doTips: [
          'Create a defensible space around your home by clearing flammable vegetation and materials.',
          'Evacuate as soon as you are told to do so and follow designated evacuation routes.',
          'Keep emergency supplies and important documents ready for quick access in case of evacuation.'
        ],
        dontTips: [
          'Don’t attempt to fight a wildfire yourself; it is dangerous and should be left to trained professionals.',
          'Avoid breathing in smoke; use a mask if necessary or stay indoors with air conditioning.',
          'Don’t wait until the last minute to evacuate; it is crucial to leave early to avoid road congestion and other hazards.'
        ]
      }
  // Add more safety tips as needed
];

function Safety() {
  return (
    <div className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center mt-8">Safety Tips for Disasters</h1>
        
        {safetyTips.map((disaster, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:w-1/2">
              <img 
                src={disaster.imgSrc} 
                alt={disaster.title} 
                className="w-full h-full object-cover" // Adjust the height as needed
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-semibold mb-4">{disaster.title}</h2>
              <p className="mb-4 text-gray-700">{disaster.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do's</h3>
                  <ul className="list-disc pl-5 mb-4">
                    {disaster.doTips.map((tip, idx) => (
                      <li key={idx} className="mb-2">{tip}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Don'ts</h3>
                  <ul className="list-disc pl-5 mb-4">
                    {disaster.dontTips.map((tip, idx) => (
                      <li key={idx} className="mb-2">{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Safety;
