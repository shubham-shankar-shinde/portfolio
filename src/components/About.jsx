const About = () => {
  const certificates = [
    {
      title: "React Certification",
      organization: "KG CODING",
      date: "JULY 2024",
      url: "https://drive.google.com/file/d/1MtDRo_UNoDzicLBmFs4kq5fOCgT-o9dj/view?usp=drivesdk",
    },
    {
      title: "SQL Certification",
      organization: "SIMPLILEARN",
      date: "OCTOBER 2024",
      url: "https://drive.google.com/file/d/1B3eWxO-FDcDvxwNATuTAamIPjRKaHuYT/view?usp=drivesdk",
    },
    {
      title: "Multidisciplinary National Conference On AI",
      date: "SEPTEMBER 2024",
      url: "https://drive.google.com/file/d/1N-2M_WV9wcssRdVdVUn-7lNQLLgBZzGU/view?usp=drivesdk",
    },
  ];

  return (
    <div
      name="About"
      className="bg-white shadow-lg rounded-xl max-w-screen-2xl container mx-auto px-6 md:px-20 my-16 py-12"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-4">
        About Me
      </h1>

      <div className="space-y-12">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello,I'm Shubham, a passionate MERN stack developer skilled in
            building dynamic web applications using MongoDB, Express.js, React,
            and Node.js. My portfolio showcases projects that reflect my
            commitment to scalable, responsive, and efficient software
            solutions.
          </p>
        </div>

       
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Education</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl text-gray-800">
              Bachelor of Science (B.Sc.) in Computer Science
            </h3>
            <p className="text-gray-600 mt-2">
              Padm Bhushan Dr. Vasantraodada Patil Mahavidyalaya, Tasgaon
            </p>
            <div className="mt-3 flex items-center text-gray-700">
              <span className="font-medium">CGPA: 8.8</span>
              <span className="mx-2">|</span>
              <span>Graduation Year: 2025</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-gray-800">
                Technical Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>React & Node.js Development</li>
                <li>MySQL & Express.js</li>
                <li>RESTful APIs</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-gray-800">
                Professional Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Effective Communication</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                {cert.organization && (
                  <p className="text-gray-600 text-sm">{cert.organization}</p>
                )}
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300 inline-flex items-center"
                >
                  View Certificate
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Mission Statement
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed italic">
              My mission is to leverage my skills and creativity to deliver
              innovative web development solutions that exceed client
              expectations and contribute positively to the digital landscape. I
              am committed to continuous learning and growth, always seeking new
              challenges and opportunities to expand my horizons.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
