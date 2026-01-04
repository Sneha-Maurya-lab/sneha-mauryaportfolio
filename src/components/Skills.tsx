
const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-pastel-mint' },
    { name: 'CSS', level: 85, color: 'bg-pastel-blue' },
    { name: 'JavaScript', level: 88, color: 'bg-pastel-peach' },
    { name: 'React.js', level: 85, color: 'bg-pastel-lavender' },
    { name: 'Node.js', level: 80, color: 'bg-pastel-pink' },
    { name: 'PHP', level: 75, color: 'bg-pastel-mint' },
    { name: 'MongoDB', level: 80, color: 'bg-pastel-blue' },
    { name: 'WordPress', level: 70, color: 'bg-pastel-peach' },
  ];

  const categories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      icon: '🎨'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'PHP', 'MongoDB'],
      icon: '⚙️'
    },
    {
      title: 'Tools & Platforms',
      skills: ['WordPress', 'Streamlit', 'Git'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pastel-cream to-pastel-lavender/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
              Skills & Expertise
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-pastel-pink mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8">Technical Proficiency</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-poppins font-medium text-gray-900 text-sm sm:text-base">{skill.name}</span>
                    <span className="font-poppins text-xs sm:text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div
                      className={`h-2 sm:h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8">Specializations</h3>
              {categories.map((category, index) => (
                <div key={category.title} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{category.icon}</span>
                    <h4 className="text-lg sm:text-xl font-poppins font-semibold text-gray-900">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 bg-pastel-mint/30 text-gray-700 rounded-full text-xs sm:text-sm font-poppins"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
