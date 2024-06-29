import React from 'react';

interface CardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, items, icon }) => {
  return (
    <div className="bg-gray-900 text-white w-auto h-auto p-6 rounded-md ">
      <div className="flex items-center  mb-4">
        <div className="text-2xl mr-2">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <ul className="list-outside list-disc pl-3 ">
        {items.map((item, index) => (
          <li key={index} className="text-gray-400">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const AppCards: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: 'Design services',
      icon: '🛠️', // Replace with an appropriate icon
      items: [
        'Interior design',
        'Interface design',
        'Design of residential villas',
        'Administrative office design',
        'Shop design',
        'Design of restaurants and cafes',
        'Design of outdoor sessions and gardens',
      ],
    },
    {
      title: 'Furnishing services',
      icon: '🛋️', // Replace with an appropriate icon
      items: [
        'Design and distribution of furniture for apartments and residential villas',
        'Design and distribution of office furniture',
        'Lighting design and distribution',
        'Establishment and design of smart home systems',
        'Establishing and designing security systems',
      ],
    },
    {
      title: 'Restoration ',
      icon: '🏠', // Replace with an appropriate icon
      items: [
        'Restoration and development of residential villas',
        'Restoration and development of residential buildings',
        'Real estate value raising studies',
        'Studies to raise the investment return for commercial buildings',
      ],
    },
    {
      title: 'zahw Lab',
      icon: '🧪', // Replace with an appropriate icon
      items: [
        'Virtual reality and augmented reality services',
        '3D printing services',
        'Development services and raising the efficiency of implementation teams',
        'Unique decorative element design services',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default AppCards;
