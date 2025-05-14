import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GENERAL_INFO.email}&su=${GENERAL_INFO.emailSubject}&body=${GENERAL_INFO.emailBody}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                {/* <div className="">
                    <a
                        href="https://github.com/roxylius/Portfolio"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Created by Abhijeet Anand
                        <div className="flex items-center justify-center gap-5 pt-1">
                          
                        </div>
                    </a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
