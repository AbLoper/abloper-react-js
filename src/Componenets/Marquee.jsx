import Marquee from "react-fast-marquee";
import "../styles/Marquee.css";

import {
    GithubIcon,
    LinkedinIcon,
    NotionIcon,
    SlackIcon,
    BehanceIcon,
} from "../data/Icons.jsx";

const SOCIAL_LINKS = [
    { name: "Github", href: "https://github.com", Icon: GithubIcon },
    { name: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
    { name: "Notion", href: "https://notion.so", Icon: NotionIcon },
    { name: "Slack", href: "https://slack.com", Icon: SlackIcon },
    { name: "Behance", href: "https://behance.net", Icon: BehanceIcon },
];

export default function MarqueeComp() {

    const isMobile = window.innerWidth < 768;

    return (
        <Marquee
            speed={isMobile ? 40 : 80}
            pauseOnHover={!isMobile}
            // gradient={!isMobile}
            className="footer-marquee"
        >
            <ul className="d-flex align-items-center gap-5 py-3 list-unstyled ms-5">

                {!isMobile && (
                    <li className="text-light opacity-75 text-nowrap">
                        Let's build together, find us on:
                    </li>
                )}

                {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                    <li key={name}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="footer-link d-flex align-items-center gap-2 text-light text-decoration-none"
                        >
                            <Icon size={isMobile ? "1.25em" : "1.5em"} />
                            {/* {!isMobile && <span>{name}</span>} */}
                            <span>{name}</span>
                        </a>
                    </li>
                ))}

            </ul>
        </Marquee>
    );
}
