const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating intuitive, dynamic user experiences. With expertise in
              both front-end and back-end development, I strive to build applications that are
              not only visually appealing but also highly functional and user-friendly.
            </p>
            <p className="text-lg text-gray-600">
              My journey in software development began [Your Story]. I've worked on various
              projects ranging from small business websites to complex web applications,
              always focusing on writing clean, maintainable code and following best practices.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in
              continuous learning and staying up-to-date with the latest technologies and
              industry trends.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 