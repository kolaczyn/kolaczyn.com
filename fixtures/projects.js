export const categories = ['All', 'React', 'Vue', 'Full Stack', 'Vanilla']

const projects = {
  byId: {
    'track-fit': {
      name: 'Track Fit',
      url: 'https://track-fit.me/food',
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
      about:
        'An app allowing user to track his progress trying to get /fit/. It includes a calculators for measuring your fitness',
      postMortem:
        "It's my biggest project yet. It puts together most of what I've learned. There's a lot of features missing, but I decided halt the development for now and return to the project later."
    },
    'tech-blog': {
      name: 'Tech Blog',
      url: 'https://tech-blog.kolaczyn.com',
      categories: ['React'],
      imgName: 'tech-blog.png',
      repo: 'https://github.com/kolaczyn/tech-blog',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      about:
        "It's a fairly minimalistic blog with flat design. The blogger can add posts and other pages by updating the repository with new .md posts.",
      postMortem:
        'I really like how the design turned out. This was my first project using Tailwind, and I instantly fell in love with its approach to writing styles. It made styling components a breeze.'
    },
    'typing-test': {
      name: 'Typing Test',
      url: 'https://typing-test.kolaczyn.com',
      categories: ['React'],
      imgName: 'typing-test.png',
      repo: 'https://github.com/kolaczyn/typing-test',
      techStack: [
        'React',
        'Styled Components',
        'Context + Reducer + immer',
        'TypeScript',
        'Firebase'
      ],

      about:
        'Test your typing speed. Your typing stats gets updated on each keystroke. Is it distracting? Yup.',
      postMortem:
        "My first real React project. Previously, I've been using React to split my HTML into mutiple files. This project made me realize that I don't know anything about React. But then, after weeks of banging my head against the wall, it all clicked."
    },
    reddit: {
      name: 'Reddit Clone',
      url: 'https://reddit.kolaczyn.com',
      categories: ['Vue'],
      imgName: 'reddit.png',
      repo: 'https://github.com/kolaczyn/reddit-clone',
      techStack: ['Vue', 'Nuxt.js', 'Tailwind CSS'],
      about: 'A Reddit clone.',
      postMortem:
        'I wanted to write backend and connect frontend to it, but I scratched that idea. But the project was a great way to learn more about Tailwind and how to write responsives layouts'
    },
    '4chan': {
      name: '4chan Clone',
      url: 'https://4chan.kolaczyn.com',
      categories: ['React', 'Full Stack'],
      imgName: '4chan.png',
      repo: 'https://github.com/kolaczyn/4chan-fullstack',
      techStack: [
        'React',
        'Bootstrap',
        'Styled Components',
        'Express',
        'MongoDB',
        'TypeScript (backend only)'
      ],
      about:
        "A 4chan clone. Your can create threads and add replies. You can't add pictures, but at least there's greentext",
      postMortem:
        'My first project with self written backend. And by far, the toughest one. Partly because it was also one of the first times I used TypeScript. But forcing myself to finish the project made me get a better understanding of how backend and interacting with the Databases works.'
    },
    'learn-japanese': {
      name: 'Learn Japanese',
      url: 'https://learn-japanese.kolaczyn.com',
      categories: ['Vue'],
      imgName: 'learn-japanese.png',
      repo: 'https://github.com/kolaczyn/learn-japanese',
      techStack: ['Vue'],
      about: 'A page for an imaginary website helping people to learn Japanese',
      postMortem:
        "Now I know that I don't like writing CSS by hand, I prefer Tailwind. But at least I fell in love with Vue, so there's that"
    },
    'luke-smith': {
      name: 'Luke Smith',
      url: 'https://luke-smith.kolaczyn.com',
      categories: ['Vanilla'],
      imgName: 'luke-smith.png',
      repo: 'https://github.com/kolaczyn/lukesmithxyz',
      techStack: ['Plain HTML', 'Vanilla JS', 'SCSS', 'BEM Methodology'],
      about:
        "It's Luke Smith's website, but with different layout and styles. I made only home, donate and 404 page.",
      postMortem: `Its my first ever self-written page. I configured webpack, designed and implemented the layout and wrote few lines of JS.
    I'm satisfied with the results, even though the site looks pretty bad on mobile.
    And it's the last time I ever wrote all the HTML by hand. Yuck.`
    },
    chess: {
      name: 'Chess',
      url: 'https://chess.kolaczyn.com',
      categories: ['Vanilla'],
      imgName: 'chess.png',
      repo: 'https://github.com/kolaczyn/chess-js',
      techStack: ['Plain HTML', 'Vanilla JS', 'SCSS', 'BEM Methodology'],
      about:
        'My implementation of the classic Chess game. It has all the rules expect Castling and En Passant. It also shows the most recent moves, whose turn is it and available moves.',
      postMortem:
        "This is my first ever web project. And it might've been a little too ambitious. I've rewritten everything around 3 times, because kept trying to perfect the code."
    },
    portfolio: {
      name: 'My Website',
      url: 'https://kolaczyn.com',
      categories: ['Vue'],
      imgName: 'portfolio.png',
      repo: 'https://github.com/kolaczyn/portfolio-website',
      techStack: ['Vue', 'iFrames to show my other websites'],
      about:
        'Quite minimal portfolio website, I designed it and implemented the majority of it in two days.',
      postMortem:
        'I kept postponing the day I finally make my website. But I decided to settle on something simple. I will definitely improve this site as I improve my skills. But for now this simple website will do fine.'
    },
    'anime-reviews': {
      name: 'Anime Reviews',
      url: 'https://anime-reviews.vercel.app/',
      categories: ['React'],
      imgName: 'anime-reviews.png',
      repo: 'https://github.com/kolaczyn/anime-reviews',
      techStack: ['Gatsby', 'Strapi', 'Tailwind', 'TypeScript'],
      about:
        'A place for my anime reviews and articles about Japan. The design is minimal and modern.',
      postMortem:
        'I really like how Article and Review pages turned out with that nice glass effect. I used Strapi as CMS, and my feelings towards it are mixed. Also, it took me a lot of time to get automatic deployment with GitHub action onto my VPS working. I much more prefer something like Contentful'
    },
    architecture: {
      name: "Architect's Website",
      url: 'https://architect-portfolio.vercel.app/',
      categories: ['React'],
      imgName: 'architektura.png',
      repo: 'https://github.com/kolaczyn/architect-portfolio',
      techStack: ['Gatsby', 'Contentful', 'Tailwind'],
      about:
        'A portfolio for an architect who wants to display their work. The user can easily edit the site in Contentful. The editing triggers redeploy, so the site is easy to use for not tech savy people',
      postMortem:
        "Creating this website made me realize that I'm capable of creating a websites to a client from design, to coding and hand over."
    }
  },
  allIds: [
    'track-fit',
    'anime-reviews',
    'architecture',
    'typing-test',
    'tech-blog',
    'reddit',
    '4chan',
    'chess',
    // 'learn-japanese',
    'luke-smith'
  ]
}
export default projects
