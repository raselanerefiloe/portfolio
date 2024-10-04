export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Agronomist AI mobile app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AgonoAI Mobile App",
    des: "A mobile app designed to improve precision agriculture through an Agronomist Assistant Chatbot, pest and disease detection model integration, tailored crop guidelines, and crop monitoring using drone technology.",
    img: "/p1.svg", // Update with the appropriate image path
    iconLists: ["/re.svg", "/tail.svg", "/ai.svg"], // Add relevant icons
    link: "/ui.agonoai.com", // Update with the appropriate link
  },
  {
    id: 2,
    title: "K-means Model for Forex Broker Analysis",
    des: "A K-means model that provides insights on whether a forex broker is high or low risk based on broker rating and regulation details.",
    img: "/p2.svg", // Update with the appropriate image path
    iconLists: ["/data.svg", "/analysis.svg"], // Add relevant icons
    link: "/ui.forexmodel.com", // Update with the appropriate link
  },
  {
    id: 3,
    title: "Africa Code Academy Enrollment App",
    des: "Developed using Next.js, Express.js, and MongoDB with AWS S3 for storage. The app enhances user experience and application reliability.",
    img: "/p3.svg", // Update with the appropriate image path
    iconLists: ["/next.svg", "/express.svg", "/mongodb.svg"], // Add relevant icons
    link: "/ui.africacodeacademy.com", // Update with the appropriate link
  },
  {
    id: 4,
    title: "Lifeline Pharmaceuticals eCommerce Website",
    des: "An eCommerce website developed using Laravel and Tailwind CSS, focusing on user-friendly design and efficient product management.",
    img: "/p4.svg", // Update with the appropriate image path
    iconLists: ["/laravel.svg", "/tailwind.svg"], // Add relevant icons
    link: "/ui.lifelinepharma.com", // Update with the appropriate link
  },
];

export const testimonials = [
  {
    quote:
      "Refiloe's expertise and dedication made a significant impact on our projects. His ability to integrate technology with practical solutions is commendable. I highly recommend him for any IT-related endeavors.",
    name: "Realeboha Mphatsoane",
    title: "IT Administrator, Lifeline Pharmaceuticals",
  },
  {
    quote:
      "Working with Refiloe on the K-means model was a fantastic experience. His analytical skills and attention to detail provided valuable insights into forex broker risk assessment.",
    name: "Kelebohile Bam",
    title: "Data Analyst",
  },
  {
    quote:
      "Collaborating with Refiloe on the Africa Code Academy EnrollApp was a pleasure. His technical knowledge and teamwork skills greatly contributed to the app's success.",
    name: "Katleho",
    title: "Colleague at Africa Code Academy",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IT Technician",
    desc: "Oversaw the company's network infrastructure, ensuring optimal performance and reliability. Managed cloud infrastructure for clients using Microsoft Azure and enhanced cybersecurity measures utilizing Zscaler and CrowdStrike.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg", // Update with an appropriate image
  },
  {
    id: 2,
    title: "Software Engineer Intern - Africa Code Academy",
    desc: "Developed an enrollment application using React JS, Next JS, MongoDB, and AWS S3. Collaborated to enhance user experience and application reliability, gaining hands-on experience with modern development tools.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg", // Update with an appropriate image
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
