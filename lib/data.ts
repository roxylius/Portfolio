import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'anandabhijeet.work@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Abhijeet, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/roxylius' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/abhijeet-anand-' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Electron.js',
            icon: '/logo/electronjs.svg'
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Expo [RN Framework]',
            icon: '/logo/expo.png'
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Azure',
            icon: '/logo/azure.svg'
        },
        {
            name: 'Selenium',
            icon: '/logo/selenium.png'
        }

    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'ChatGPT API using web scraper',
        slug: 'unofficial-chatgpt-api',
        liveUrl: 'https://github.com/roxylius/ChatGPT_unofficial_API_Node ',
        year: 2025,
        description: `
    A Node.js + Express backend that automates ChatGPT via Puppeteer to expose an unofficial API for local development and testing.<br/><br/>
    Key Features:<br/>
    <ul>
      <li>🤖 Automated Login: Stealth plugin & headful Chrome with persistent user data</li>
      <li>💬 Prompt Proxy: Send prompts and receive streamed responses by polling the ChatGPT UI</li>
      <li>🔗 Thread Continuity: Reuse conversation threadIds to maintain context</li>
      <li>⚙️ Error Handling: Auth checks via /api/auth/session and UI redirects</li>
      <li>🔒 Session Persistence: user-data-dir to avoid incognito resets</li>
    </ul><br/>
    Technical Highlights:<br/>
    <ul>
      <li>📦 Express routes for /api/login and /api/prompt</li>
      <li>🐒 Puppeteer-extra with stealth to mimic human browsing</li>
      <li>⏳ Polling logic to detect streaming completion in ChatGPT’s DOM</li>
      <li>🔍 JSDoc & helper utilities for robust auth & parsing</li>
    </ul>
  `,
        role: `
     Full-Stack Developer<br/>
    Responsibilities:<ul>
      <li>🛠️ Built the Express API with login and prompt endpoints</li>
      <li>🕵️ Automated ChatGPT UI flows using Puppeteer & stealth evasion</li>
      <li>🔄 Implemented session reuse and thread management</li>
      <li>🔧 Developed polling mechanism for streaming LLM output</li>
      <li>📦 Packaged and documented the tool for local developer use only</li>
    </ul>
      `,
        techStack: [
            'Node.js',
            'Express',
            'Puppeteer',
            'puppeteer-extra',
            'puppeteer-extra-plugin-stealth',
            'dotenv',
            'JavaScript'
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        "title": "Admin Control RBAC",
        "slug": "admin-rbac",
        "techStack": [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Chakra UI",
            "Passport.js",
            "TanStack Table",
            "Framer Motion"
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        "liveUrl": "https://rbac-frontend-dhbufmcwdbhgagbm.southindia-01.azurewebsites.net",
        "year": 2024,
        description: `
        A full-stack MERN application implementing robust Role-Based Access Control (RBAC) with a responsive Chakra UI frontend, designed for effective user and permissions management.<br/><br/>
        Key Features:<br/>
        <ul>
          <li>👤 User, Role & Permission Management: Admins can perform comprehensive CRUD operations on user accounts, define system roles (e.g., Admin, Dev, Viewer), and assign specific capabilities for granular access control.</li>
          <li>🔑 Secure Authentication: Supports local (email/password) and social logins (Google, GitHub) via Passport.js for verified user access.</li>
          <li>🛡️ Session Management: Secure handling of user sessions using <code>express-session</code> with MongoDB as the session store.</li>
          <li>📜 Activity Logging: Tracks significant user actions and system events for auditing and accountability purposes.</li>
          <li>📊 Dashboard Overview: Provides a central dashboard presenting key system statistics like user and role counts.</li>
          <li>📱 Responsive Interface: Built with Chakra UI to ensure a seamless and adaptive user experience across various devices.</li>
        </ul><br/>
        Technical Highlights:<br/>
        <ul>
          <li>⚛️ Frontend: React, Chakra UI (styling & components), React Router (navigation), TanStack Table (data display), Framer Motion (animations).</li>
          <li>🟢 Backend: Node.js and Express.js for a robust and scalable server-side application.</li>
          <li>💾 Database: MongoDB with Mongoose ODM for flexible data modeling and persistence.</li>
          <li>🛂 Authentication & Authorization: Passport.js (local, Google OAuth 2.0, GitHub OAuth) integrated with custom RBAC logic for precise access control.</li>
        </ul>`,
        "role": `
             Full-Stack Developer<br/>
    Responsibilities:<ul>
      <li>🏗️ Led end-to-end development of the RBAC system.</li>
      <li>🎨 Built responsive frontend for managing users, roles, permissions, and logs.</li>
      <li>⚙️ Developed secure backend APIs (Node.js, Express.js) for all CRUD operations.</li>
      <li>🔒 Implemented multi-strategy authentication (Passport.js) & RBAC logic.</li>
      <li>💾 Designed MongoDB schemas and managed data persistence.</li>
    </ul>
        `
    },
    
];

export const MY_EXPERIENCE = [
    {
        title: 'Shopify Developer',
        company: 'Freelance',
        desc: 'Worked on building E-commerce solutions',
        duration: 'Dec 2024 - Apr 2025',
    },
    {
        title: 'Product Engineering Intern',
        company: 'HighRadius',
        desc: 'Worked mainly as Java Backend Engineer',
        duration: 'May 2024 - Aug 2024',
    },
    {
        title: 'Software Developer Intern',
        company: 'Reliance Industries',
        desc: "Worked mainly with the Node.js and SQL backend with React as Frontend",
        duration: 'Oct 2023 - Nov 2024',
    },
];
