import Technologies from "../components/Technologies";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/image.png";

export const ABOUT_CONTENT = `
  I am a Software Engineering student at Ontario Tech University with a passion for technology and a strong academic record, having made both the President's and Dean's Lists.
  I am proficient in languages like Dart, React, Java, C++, HTML/CSS, JavaScript, PHP, C++, and C, and I specialize in developing user-friendly and responsive web applications.
  I thrive on solving complex technical challenges and have a proven ability to create dynamic, interactive user interfaces.Beyond my technical skills, I am deeply involved in leadership and community activities. 
  As a cultural ambassador in the Nigerian Student Association, I mentor incoming students and promote cultural awareness through various events. 
  My adaptability, quick learning ability, and commitment to teamwork are qualities I bring to every project, ensuring both personal and collective success.
`;
export const HIM_CONTENT = `I am a dedicated individual with a strong background in software engineering and customer service.
 I have honed my coding, debugging, and application design skills while maintaining a solid academic record. 
 My effective communication and teamwork abilities help me thrive in fast-paced environments, where I excel in customer service and contribute to team goals.
  I'm adaptable, proactive, and always eager to take on new challenges.
`;
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Sales Coach",
    company: "H&M",
    description: `I provide personalized customer service by offering product recommendations 
    and assisting shoppers in finding items that suit their stylish needs. I develop and execute 
    comprehensive training programs to enhance sales techniques and product knowledge among sales associates. 
    Additionally, I conduct one-on-one coaching and group training sessions, focusing on customer service excellence
     and improving sales performance. I also share the responsibility of maintaining an organized and visually 
     appealing store layout, ensuring products are present and easily located.`
  }
];

export const PROJECTS = [
  {
    title: "TO-DO LIST",
    image: project1,
    description: 
    `Developed a responsive web application using HTML, CSS, and JavaScript that enables
     efficient task management with due dates, prioritization, and a user-friendly interface.`,
    technologies: ["HTML","CSS","JAVASCRIPT"],
  },
  {
    title: "EVENT PLATFORM FOR A UNIVERSITY ",
    image: project2,
    description: ` Built a web platform with a user-friendly interface for university event management,
     featuring PHP-based backend and a MySQL database for secure email storage and seamless booking. `,
    technologies: ["HTML","CSS","JAVASCRIPT","PHP","MySQL"],
  }

];

export const CONTACTS = {
  address: "1805 simcoe Street North, Oshawa, L1G 4Y2",
  number: "+1 647 774 3673",
  email: "collins.ehirim@ontariotechu.net",
}