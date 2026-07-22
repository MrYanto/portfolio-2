type aboutMe = {
  number: number;
  aspect: string;
  variant?: 'black';
};

export type career = {
  title: string;
  company: string;
  entryTime: string;
  myWork: Array<string>;
};

export const AboutMe: aboutMe[] = [
  {
    number: 6,
    aspect: 'Months of experience',
  },
  { number: 30, aspect: 'Projects', variant: 'black' },
  { number: 90, aspect: 'Student' },
  { number: 20, aspect: 'Happy Clients', variant: 'black' },
];

export const careerInfo: career[] = [
  {
    title: 'Frontend Developer',
    company: 'Google',
    entryTime: 'Jul 2024 - Present',
    myWork: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Slack',
    entryTime: 'Jul 2023 - Jul 2024',
    myWork: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Skype',
    entryTime: 'Nov 2021 - Jul 2023',
    myWork: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
];
