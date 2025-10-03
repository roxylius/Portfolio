import { IProject } from '@/types';
import awsLogo from '@/public/logo/aws.png';
import azureLogo from '@/public/logo/azure.svg?url';
import bootstrapLogo from '@/public/logo/bootstrap.svg?url';
import dockerLogo from '@/public/logo/docker.svg?url';
import electronLogo from '@/public/logo/electronjs.svg?url';
import expoLogo from '@/public/logo/expo.png';
import expressLogo from '@/public/logo/express.png';
import framerMotionLogo from '@/public/logo/framer-motion.png';
import gitLogo from '@/public/logo/git.png';
import jsLogo from '@/public/logo/js.png';
import mongodbLogo from '@/public/logo/mongodb.png';
import mysqlLogo from '@/public/logo/mysql.svg?url';
import nextLogo from '@/public/logo/next.png';
import nodeLogo from '@/public/logo/node.png';
import postgreLogo from '@/public/logo/postgreSQL.png';
import reactLogo from '@/public/logo/react.png';
import reduxLogo from '@/public/logo/redux.png';
import seleniumLogo from '@/public/logo/selenium.png';
import tailwindLogo from '@/public/logo/tailwind.png';
import tsLogo from '@/public/logo/ts.png';
import unofficialGptThumb from '@/public/projects/thumbnail/unofficialGPT.png';
import rbacThumb from '@/public/projects/thumbnail/rbac.jpeg';
import rbacLong from '@/public/projects/long/rbac-long.jpeg';
import rbacImage1 from '@/public/projects/images/rbac-1.jpeg';
import rbacImage2 from '@/public/projects/images/rbac-2.jpeg';
import rbacImage3 from '@/public/projects/images/rbac-3.jpeg';
import rbacImage4 from '@/public/projects/images/rbac-4.jpeg';
import rbacImage5 from '@/public/projects/images/rbac-5.jpeg';
import clipsyncThumb from '@/public/projects/thumbnail/clipsync.png';
import clipsyncImage1 from '@/public/projects/images/clipsync-desk-1.png';
import clipsyncImage2 from '@/public/projects/images/clipsync-desk-2.png';
import clipsyncImage3 from '@/public/projects/images/clipsync-and-1.png';
import clipsyncImage4 from '@/public/projects/images/clipsync-and-2.png';
import regainThumb from '@/public/projects/thumbnail/regain.png';
import regainImage1 from '@/public/projects/images/regain-1.png';
import regainImage2 from '@/public/projects/images/regain-2.png';
import regainImage3 from '@/public/projects/images/regain-3.png';

export const GENERAL_INFO = {
    email: 'anandabhijeet.work@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Abhijeet, I am reaching out to you because...',

    upworkProfile: '#',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/roxylius' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/abhijeet-anand-' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: jsLogo,
        },
        {
            name: 'Typescript',
            icon: tsLogo,
        },
        {
            name: 'React',
            icon: reactLogo,
        },
        {
            name: 'Next.js',
            icon: nextLogo,
        },
        {
            name: 'Redux',
            icon: reduxLogo,
        },
        {
            name: 'Tailwind CSS',
            icon: tailwindLogo,
        },
        {
            name: 'Frammer Motion',
            icon: framerMotionLogo,
        },
        {
            name: 'Electron.js',
            icon: electronLogo,
        },
        {
            name: 'Bootstrap',
            icon: bootstrapLogo,
        },
        {
            name: 'Expo [RN Framework]',
            icon: expoLogo,
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: nodeLogo,
        },
        {
            name: 'Express.js',
            icon: expressLogo,
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: mysqlLogo,
        },
        {
            name: 'PostgreSQL',
            icon: postgreLogo,
        },
        {
            name: 'MongoDB',
            icon: mongodbLogo,
        },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: gitLogo,
        },
        {
            name: 'Docker',
            icon: dockerLogo,
        },
        {
            name: 'AWS',
            icon: awsLogo,
        },
        {
            name: 'Azure',
            icon: azureLogo,
        },
        {
            name: 'Selenium',
            icon: seleniumLogo,
        }

    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Unofficial ChatGPT API',
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
        thumbnail: unofficialGptThumb,
        longThumbnail: unofficialGptThumb,
        images: [unofficialGptThumb],
    },
    {
        "title": "Admin Control RBAC",
        "slug": "admin-rbac",
        "techStack": [
            "React",
            "Node.js",
            "Framer Motion",
            "Express.js",
            "MongoDB",
            "Chakra UI",
            "Passport.js",
            "TanStack Table",
        ],
        thumbnail: rbacThumb,
        longThumbnail: rbacLong,
        images: [
            rbacImage1,
            rbacImage2,
            rbacImage3,
            rbacImage4,
            rbacImage5,
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
    {
        title: 'Clipboard Sync',
        slug: 'clipboard-sync',
        liveUrl: 'https://github.com/roxylius/ClipSync-Desktop', // Or your primary repo for this
        year: 2024, // Based on Aug 2023 – Dec 2023
        description: `
        A full-stack application enabling real-time clipboard synchronization across multiple desktop and mobile devices linked to a single user account.<br/><br/>
        Key Features:<br/>
        <ul>
          <li>🔄 Real-Time Sync: Instantly shares clipboard content (text, links) across all connected devices using WebSockets.</li>
          <li>🖥️ Desktop Application: Built with Electron.js (wrapping React.js) for Windows, macOS, and Linux compatibility.</li>
          <li>📱 Mobile Application: Developed with React Native for a native Android experience (and extendable to iOS).</li>
          <li>🔑 Secure Authentication: Features user login, including Google OAuth, to securely link devices to an account.</li>
          <li>☁️ Cloud-Powered Communication: Leverages a cloud-based backend to facilitate the real-time data exchange between devices.</li>
          <li>🔗 Single Account, Multiple Devices: Users can seamlessly copy on one device and paste on another registered under their account.</li>
        </ul><br/>
        Technical Highlights:<br/>
        <ul>
          <li>⚛️ Frontend: React.js (for Electron desktop app), React Native (for Android mobile app).</li>
          <li>🟢 Backend: Node.js and Express.js serving as the application backbone and API layer.</li>
          <li>⚡ Real-Time Communication: Socket.io and WebSockets for persistent, bidirectional data flow.</li>
          <li>🔩 Desktop Wrapper: Electron.js for packaging the web application into a native desktop experience.</li>
          <li>🛂 Authentication: Passport.js (likely, for Google Auth) integrated for secure user login.</li>
          <li>💾 Database: MongoDB for storing user accounts, device linking, and potentially session data.</li>
        </ul>
  `,
        role: `
     Full-Stack Developer<br/>
    Responsibilities:<ul>
      <li>🛠️ Engineered the core real-time synchronization mechanism using WebSockets and Node.js.</li>
      <li>📱 Developed the cross-platform client applications: Electron.js with React for desktop and React Native for Android.</li>
      <li>🔑 Implemented secure user authentication, including Google OAuth, to manage user accounts and device linking.</li>
      <li>☁️ Designed and integrated the cloud-based communication channel between devices.</li>
      <li>⚙️ Managed backend logic, API endpoints, and database interactions (MongoDB) for the system.</li>
    </ul>
      `,
        techStack: [
            'React Native',
            'Electron.js',
            'Socket.io',
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Passport.js', // Assumed for Google Auth
        ],
        thumbnail: clipsyncThumb,
        longThumbnail: clipsyncThumb,
        images: [
            clipsyncImage1,
            clipsyncImage2,
            clipsyncImage3,
            clipsyncImage4,
        ],
    },
    {
    title: 'Regain Extension',
    slug: 'regain-extension',
    liveUrl: 'https://github.com/roxylius/Regain', // Replace with your actual GitHub link
    year: 2023, // Adjust if needed
    description: `
    A Chromium browser extension enabling users to effectively manage their daily time spent on specific websites through configurable limits and persistent settings.<br/><br/>
    Key Features:<br/>
    <ul>
      <li>⏱️ Per-Site Daily Limits: Users define maximum daily browsing time for individual websites.</li>
      <li>⚙️ Session Duration Control: Set desired usage duration (e.g., 2-15 mins) for each browsing session on a site.</li>
      <li>🔔 Usage Alerts: Notifies users when their pre-set daily time allocation for a website is consumed.</li>
      <li>💾 Persistent Configuration: User-defined limits and preferences are saved locally for each website.</li>
      <li>🚫 Whitelisting Capability: Allows users to exempt specific essential websites from time tracking.</li>
    </ul><br/>
    Technical Highlights:<br/>
    <ul>
      <li>🛠️ Core Logic: Implemented in JavaScript utilizing Chromium Extension APIs for browser interaction and control.</li>
      <li>💾 Settings Persistence: Leverages browser local storage to save and retrieve user-defined website configurations.</li>
      <li>🎨 User Interface: Simple and intuitive popups built with HTML/CSS for easy setting adjustments.</li>
    </ul>
  `,
    role: `
     Extension Developer<br/>
    Responsibilities:<ul>
      <li>Designed and implemented the UI for configuring site-specific time limits.</li>
      <li>Developed the core JavaScript engine for tracking browsing time and enforcing user-defined limits.</li>
      <li>Integrated with browser APIs for persistent storage of settings and delivering notifications.</li>
      <li>Ensured the extension functions reliably across Chromium-based browsers.</li>
    </ul>
      `,
    techStack: [
        'Chromium Extension APIs',
        'JavaScript',
        'HTML',
        'CSS',
    ],
    thumbnail: regainThumb,
        longThumbnail: regainThumb,
        images: [
            regainImage1,
            regainImage2,
            regainImage3,
        ],
}

];

export const MY_EXPERIENCE = [
    {
        title: 'Web Developer (MERN Stack)',
        company: 'Ocio',
        desc: 'Worked on building dashboard and AI-powered Interview solutions',
        duration: 'Oct 2024 - Present',
    },
    {
        title: 'Shopify Developer',
        company: 'Freelance',
        desc: 'Worked on building E-commerce solutions',
        duration: 'Sep 2024 - Dec 2025',
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
