export const categories = ['All', 'React', 'Vue', 'Full Stack']

const projects = {
  byId: {
    'track-fit':
  {
    name: 'Track Fit',
    url: 'https://track-fit.me',
    categories: ['React'],
    imgName: 'track-fit.png',
    repo: 'https://github.com/kolaczyn/fit-tracker',
    techStack: [
      'React',
      'Next.js',
      'Redux',
      'TypeScript',
      'Chakra UI',
      'Formik',
      'Jest'
    ],
    about: 'An app allowing user to track his progress trying to get /fit/. It includes a calculators for measuring your fitness',
    postMortem: "It's my biggest project yet. It puts together most of what I've learned. There's a lot of features missing, but I decided halt the development for now and return to the project later."
  },
    'tech-blog':
  {
    name: 'Tech Blog',
    url: 'https://tech-blog.kolaczyn.com',
    categories: ['React'],
    imgName: 'tech-blog.png',
    repo: 'https://github.com/kolaczyn/tech-blog',
    techStack: [
      'React',
      'Next.js',
      'Tailwind CSS'
    ],
    about: "It's a fairly minimalistic blog with flat design. The blogger can add posts and other pages by updating the repository with new .md posts.",
    postMortem: 'I really like how the design turned out. This was my first project using Tailwind, and I instantly fell in love with its approach to writing styles. It made styling components a breeze.'
  },
    'typing-test':
  {
    name: 'Typing Test',
    url: 'https://typing-test.kolaczyn.com',
    categories: ['React'],
    imgName: 'typing-test.png',
    repo: 'https://github.com/kolaczyn/typing-test',
    techStack: [
      'React',
      'Styled Components',
      'Context + Reducer + immer'
    ],

    about: 'Test your typing speed. Your typing stats gets updated on each keystroke. Is it distracting? Yup.',
    postMortem: 'My first real React project. Previously, I\'ve been using React to split my HTML into mutiple files. This project made me realize that I don\'t know anything about React. But then, after weeks of banging my head against the wall, it all clicked.'
  },
    reddit:
  {
    name: 'Reddit Clone',
    url: 'https://reddit.kolaczyn.com',
    categories: ['Vue'],
    imgName: 'reddit.png',
    repo: 'https://github.com/kolaczyn/reddit-clone',
    techStack: [
      'Vue',
      'Vuex',
      'Nuxt.js',
      'Tailwind CSS'
    ],
    about: 'A Reddit clone.',
    postMortem: 'I wanted to write backend and connect frontend to it, but I scratched that idea. But the project was a great way to learn more about Tailwind and how to write responsives layouts'
  },
    '4chan':
  {
    name: '4chan Clone',
    url: 'https://4chan.kolaczyn.com',
    categories: ['React', 'Full Stack'],
    imgName: '4chan.png',
    repo: 'https://github.com/kolaczyn/reddit-clone',
    techStack: [
      'React',
      'Bootstrap',
      'Styled Components',
      'Express',
      'MongoDB',
      'TypeScript (backend only)'
    ],
    about: 'A 4chan clone. Your can create threads and add replies. You can\'t add pictures, but at least there\'s greentext',
    postMortem: 'My first project with self written backend. And by far, the toughest one. Partly because it was also one of the first times I used TypeScript. But forcing myself to finish the project made me get a better understanding of how backend and interacting with the Databases works.'
  },
    'learn-japanese':
  {
    name: 'Learn Japanese',
    url: 'https://learn-japanese.kolaczyn.com',
    categories: ['Vue'],
    imgName: 'learn-japanese.png',
    techStack: [
      'Vue'
    ],
    about: 'A page for an imaginary website helping people to learn Japanese',
    postMortem: 'Now I know that I don\'t like writing CSS by hand, I prefer Tailwind. But at least I fell in love with Vue, so there\'s that'
  }
  },
  allIds: ['track-fit', 'tech-blog', 'typing-test', 'reddit', '4chan', 'learn-japanese']
}
export default projects
