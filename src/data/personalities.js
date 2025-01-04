const personalities = [
  {
    id: 1,
    name: "Paul Graham",
    born: "November 13, 1964",
    description: "Co-founder of Y Combinator, investor, and essayist.",
    course:
      "Computer Science at Harvard and Rhode Island School of Design (RISD).",
    courseLink: "https://www.harvard.edu/",
    story: `
      Paul Graham is a renowned entrepreneur, venture capitalist, and programmer. He co-founded Y Combinator in 2005, which is one of the most prominent startup accelerators globally and has funded companies like Dropbox, Airbnb, and Reddit.

      Early Life: Graham was born in Weymouth, England, and moved to the United States with his family. He developed an early interest in programming and attended Harvard University to study Computer Science. He also attended the Rhode Island School of Design, making him one of the few entrepreneurs with cross-disciplinary expertise in both technology and design.

      Professional Achievements: After college, Graham worked at various software companies. He later co-founded Viaweb, an online shopping cart software that was acquired by Yahoo! in 1998 for $49 million, marking one of the first successful startups in the Internet era. With his Y Combinator accelerator, he helped launch several successful companies in various industries. Graham is also famous for his insightful essays on programming and startups, which have been collected in his book, "Hackers and Painters."

      Social Impact and Legacy: Through his work with Y Combinator, Graham has fostered an entrepreneurial ecosystem that has produced some of Silicon Valley's top companies. His contributions to programming languages and technology culture continue to influence aspiring entrepreneurs.

      Controversies and Criticisms: Paul Graham has occasionally attracted controversy, notably regarding his stances on immigration policy and technology ethics, which have sparked debates within the tech community.

      Awards and Recognition: Paul Graham has been recognized as a visionary entrepreneur and thinker. His work in tech and entrepreneurship was acknowledged by both mainstream media and academia.
    `,
    img: "https://via.placeholder.com/150",
    socialLinks: {
      twitter: "https://twitter.com/paulg",
      linkedin: "https://www.linkedin.com/in/paulgraham",
      website: "http://www.paulgraham.com/",
    },
  },
  {
    id: 2,
    name: "Elon Musk",
    born: "June 28, 1971",
    description: "CEO of SpaceX, Tesla, and several other companies.",
    course: "Physics and Economics at the University of Pennsylvania.",
    courseLink: "https://www.upenn.edu/",
    story: `
      Elon Musk is a South African-born entrepreneur and industrial designer known for creating groundbreaking innovations in aerospace, electric vehicles, and technology. Musk is the CEO and lead designer of SpaceX, CEO and product architect of Tesla, Inc., co-founder of Neuralink, co-founder of OpenAI, and founder of The Boring Company.

      Early Life and Education: Musk was born in Pretoria, South Africa. A curious child, Musk taught himself computer programming at the age of 12. After moving to Canada, he attended Queen's University for two years before transferring to the University of Pennsylvania, where he earned degrees in physics and economics.

      Professional Achievements: Musk is a visionary behind some of the most important developments in recent times, particularly in electric vehicles with Tesla, space exploration with SpaceX, and solar energy. SpaceX aims to make space travel more affordable and sustainable with reusable rockets, while Tesla has been central in revolutionizing the electric car industry.

      Philanthropy and Controversy: In addition to his business ventures, Musk is an advocate for sustainability and climate change awareness. However, Musk has been subject to public scrutiny due to his provocative tweets and remarks that have sparked debates over his leadership style and business practices.

      Legacy: Elon Musk's ambition to transform multiple industries has made him one of the most influential technology figures of the 21st century. His pursuit of space exploration, self-driving cars, and his stance on environmental issues have earned him both admirers and detractors across the world.
    `,
    img: "https://via.placeholder.com/150",
    socialLinks: {
      twitter: "https://twitter.com/elonmusk",
      linkedin: "",
      website: "https://www.tesla.com",
    },
  },
  {
    id: 3,
    name: "Bill Gates",
    born: "October 28, 1955",
    description:
      "Co-founder of Microsoft, billionaire philanthropist, and investor.",
    course: "Computer Science at Harvard University (dropped out).",
    courseLink: "https://www.harvard.edu/",
    story: `
      Bill Gates is a technology entrepreneur and philanthropist best known as the co-founder of Microsoft, the world's largest personal-computer software company. After stepping down from his role at Microsoft, Gates has dedicated his life to global health issues and climate change.

      Early Life: Bill Gates was born in Seattle, Washington. Interested in computers from an early age, he began programming at the age of 13. Gates attended Harvard University but dropped out to pursue his passion for software development, co-founding Microsoft in 1975.

      Microsoft and Wealth: Gates led Microsoft to immense success by creating the Windows operating system, which became the standard for personal computers worldwide. He amassed a fortune and topped the lists of the richest individuals for many years.

      Philanthropy: Since leaving his CEO position at Microsoft in 2000, Gates has dedicated his time and wealth to philanthropic causes. Together with his wife, Melinda, he founded the Bill & Melinda Gates Foundation, which focuses on global health initiatives, poverty alleviation, and education. Gates has donated over $50 billion to global charitable causes.

      Controversies: Despite his philanthropic endeavors, Gates has faced criticism regarding his role in Microsoft's monopoly during the 1990s, which led to antitrust lawsuits. Gates' involvement in healthcare and technology policy has also drawn scrutiny, with some questioning the transparency and influence of his philanthropy.

      Recognition: Gates has received multiple honors throughout his career, including the Presidential Medal of Freedom. Despite retiring from day-to-day operations at Microsoft, he continues to be a significant figure in the technology and philanthropy sectors.
    `,
    img: "https://via.placeholder.com/150",
    socialLinks: {
      twitter: "https://twitter.com/BillGates",
      linkedin: "https://www.linkedin.com/in/billgates",
      website: "https://www.gatesfoundation.org/",
    },
  },
  {
    id: 4,
    name: "Mark Zuckerberg",
    born: "May 14, 1984",
    description:
      "Founder and CEO of Facebook (Meta), leading technology innovator.",
    course: "Computer Science at Harvard University (dropped out).",
    courseLink: "https://www.harvard.edu/",
    story: `
      Mark Zuckerberg is a business executive and computer programmer best known for creating Facebook, the largest social networking platform. Facebook, founded in 2004, redefined the way people communicate online.

      Early Life and College: Born in White Plains, New York, Zuckerberg showed an early interest in computers. He enrolled at Harvard University but dropped out after a semester to focus on Facebook.

      Facebook and Its Growth: Facebook started as a social platform for Harvard students before expanding across U.S. universities and eventually the world. Facebook (now Meta Platforms, Inc.) became a global platform, attracting billions of users worldwide.

      Visionary Work and Challenges: Beyond Facebook, Zuckerberg has ventured into VR technologies (via Oculus) and artificial intelligence. He faced legal challenges, particularly regarding the company's handling of user data, notably the Cambridge Analytica scandal.

      Personal Life: Zuckerberg is known for his commitment to philanthropy through the Chan Zuckerberg Initiative, which he co-founded with his wife, Priscilla Chan. They aim to advance science, education, and issues related to social justice.

      Awards and Recognition: Zuckerberg is a member of the “Forbes 400” and holds a position as one of the richest individuals in the world. His work continues to impact global culture, from how we connect socially to advancing digital technologies.
    `,
    img: "https://via.placeholder.com/150",
    socialLinks: {
      twitter: "https://twitter.com/finkd",
      linkedin: "https://www.linkedin.com/in/zuck/",
      website: "https://about.fb.com/",
    },
  },
  {
    id: 5,
    name: "Jeff Bezos",
    born: "January 12, 1964",
    description: "Founder of Amazon, billionaire entrepreneur.",
    course:
      "Electrical Engineering and Computer Science at Princeton University.",
    courseLink: "https://www.princeton.edu/",
    story: `
      Jeff Bezos is the founder of Amazon, the largest online retailer in the world. Bezos built Amazon from a small startup in his garage to an e-commerce empire that has reshaped the entire retail industry.

      Early Life and Education: Bezos was born in Albuquerque, New Mexico. He graduated from Princeton University with a degree in Electrical Engineering and Computer Science.

      Amazon and Innovation: Bezos founded Amazon in 1994, initially as an online bookstore. Amazon soon expanded into other categories like electronics, clothing, and cloud computing, dominating the retail market and growing into one of the biggest tech companies in the world.

      Blue Origin: In addition to Amazon, Bezos founded Blue Origin, a company focused on developing technologies for human spaceflight.

      Legacy: Bezos stepped down from his role as Amazon's CEO in 2021, but continues to influence various industries, from e-commerce to space travel and media.
    `,
    img: "https://via.placeholder.com/150",
    socialLinks: {
      twitter: "https://twitter.com/jeffbezos",
      linkedin: "",
      website: "https://www.amazon.com/",
    },
  },
  {
    id: 6,
    name: "Steve Jobs",
    born: "February 24, 1955",
    description: "Co-founder of Apple Inc., inventor and tech visionary.",
    course: "Reed College (dropped out).",
    courseLink: "https://www.reed.edu/",
    story: `
      Steve Jobs was a charismatic and controversial figure who co-founded Apple Inc., one of the most successful and influential tech companies in history.

      Early Life: Jobs was born in San Francisco, California. He enrolled at Reed College but dropped out after a semester. He pursued various interests before founding Apple.

      Professional Achievements: Jobs co-founded Apple with Steve Wozniak and Ronald Wayne in 1976. Apple created groundbreaking products, including the iPod, iPhone, iPad, and MacBook, reshaping the tech industry.

      Legacy: Steve Jobs' emphasis on design, user experience, and innovation revolutionized consumer electronics, and his vision continues to influence technology to this day. He passed away in 2011 due to pancreatic cancer.
    `,
    img: "https://via.placeholder.com/150",
    socialLinks: {
      twitter: "",
      linkedin: "",
      website: "https://www.apple.com/",
    },
  },
{
  id: 7,
  name: "Linus Torvalds",
  born: "December 28, 1969",
  description: "Creator of the Linux operating system, influential programmer.",
  course: "Computer Science at the University of Helsinki.",
  courseLink: "https://www.helsinki.fi/en",
  story: `
    Linus Torvalds is best known for creating Linux, the kernel that would become the foundation for numerous open-source operating systems. Born in Finland, Linus began programming at an early age. At the University of Helsinki, he developed the Linux kernel in 1991, which was intended to be a free, open-source operating system. Over the years, Linux has grown to dominate servers and embedded systems and serves as the backbone of many Android devices.
    Linus remains active in overseeing the development of Linux and has been praised for his innovation and open-source advocacy.
  `,
  img: "https://via.placeholder.com/150",
  socialLinks: {
    twitter: "https://twitter.com/linus__torvalds",
    linkedin: "",
    website: "https://www.kernel.org/",
  },
},
{
  id: 8,
  name: "Grace Hopper",
  born: "December 9, 1906",
  description: "Pioneer of computer programming and a rear admiral in the U.S. Navy.",
  course: "Mathematics at Yale University.",
  courseLink: "https://www.yale.edu/",
  story: `
    Grace Hopper is one of the most influential figures in computer science. Known as "the mother of COBOL," she played a key role in developing the COBOL programming language, which revolutionized business computing. Hopper also invented the first compiler, a program that translates code into machine language. In addition to her technical accomplishments, Hopper served as a Rear Admiral in the U.S. Navy and was a tireless advocate for women in technology.
    Hopper’s legacy continues to influence computing today, especially her role in helping make computing languages more accessible and universal.
  `,
  img: "https://via.placeholder.com/150",
  socialLinks: {
    twitter: "https://twitter.com/GRACE_HOPPER",
    linkedin: "https://www.linkedin.com/in/gracehopper/",
    website: "",
  },
},
{
  id: 9,
  name: "Donald Knuth",
  born: "January 10, 1938",
  description: "Renowned computer scientist, father of algorithmic analysis, and creator of 'The Art of Computer Programming.'",
  course: "Mathematics at the California Institute of Technology.",
  courseLink: "https://www.caltech.edu/",
  story: `
    Donald Knuth is widely considered the "father" of algorithm analysis. Knuth's book, "The Art of Computer Programming," has influenced generations of computer scientists. He introduced the concept of algorithmic efficiency and contributed significantly to the study of compilers, algorithms, and computer graphics. His algorithms, including the Knuth-Morris-Pratt string searching algorithm, are widely used in programming today. Knuth also created the TeX typesetting system, which became the standard for academic papers and publications.
  `,
  img: "https://via.placeholder.com/150",
  socialLinks: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/donaldknuth/",
    website: "http://www-cs-faculty.stanford.edu/~knuth/",
  },
},
{
  id: 10,
  name: "Bjarne Stroustrup",
  born: "December 30, 1950",
  description: "Creator of the C++ programming language.",
  course: "Computer Science at Aarhus University.",
  courseLink: "https://www.au.dk/en",
  story: `
    Bjarne Stroustrup is a Danish computer scientist known as the creator of the C++ programming language. Stroustrup developed C++ as an extension of the C language to include object-oriented features and other enhancements. Released in 1983, C++ became one of the most widely used programming languages in history, especially in systems programming, game development, and performance-critical applications. Stroustrup has been an advocate for proper software design and has written extensively about programming paradigms.
  `,
  img: "https://via.placeholder.com/150",
  socialLinks: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/bjarnestroustrup/",
    website: "http://www.stroustrup.com/",
  },
},
];

export default personalities;
