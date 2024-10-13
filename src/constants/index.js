import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a computer science student focused on driving person and professional growth. My interests lie in exploring the potential of artifical intelligence and machine learning. I am constantly seeking opportunities to learn, create and contribute to the tech landscape`;

export const ABOUT_TEXT = `My journey in tech has involved hands-on experience with both front-end and back-end development. Some technologies I am currently using include React, Python, Java, ASP.NET / C#, SQL, GO, MongoDB and Node.JS. Outside of tech, I am commited to personal growth, learning about business, and staying active through lifting and martial arts `;

export const EXPERIENCES = [
  {
    year: "May 2024 - September 2024",
    role: "Software Engineer Intern",
    company: "Warehouse of Wisconsin Logisitcs",
    description: `During my internship, I developed a full-stack Tenant Management System, focusing on both front-end and back-end functionality. I also collaborated with the team on a major product release, contributing to bug fixes, feature improvements, and overall deployment.`,
    technologies: ["Blazor", "C#", "SQL", "TFS"],
  }
];

export const PROJECTS = [
  {
    title: "DVD Movie Service ",
    image: project2,
    description:
      "An application for managing dvd movies, customers can login. Create, Read, Update, Delete and Order Movies",
    technologies: ["ASP.NET", "C#", "SQL"],
  },
  {
    title: "Pizza Ordering Service",
    image: project3,
    description:
      "An application for an Admin to manage their pizza ordering website",
    technologies: ["HTML", "CSS", "Javascript", "MongoDB", "Node.JS", "Express.JS"],
  },
  {
    title: "Game Addition",
    image: project4,
    description:
      "Added addition's to a Galactic Shooter stlye game, additions include - Boss Fight & Health Bar / Status",
    technologies: ["C++"],
  },
];

export const CONTACT = {
  address: "1320 Main St, Stevens Point, WI 54481",
  phoneNo: "715 572-7137",
  email: "dawsonkbusiness@gmail.com",
};
