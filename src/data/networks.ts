import Discord from "../components/Icons/Discord.astro"
import Patreon from "../components/Icons/Patreon.astro"
import YouTube from "../components/Icons/YouTube.astro"
import Modrinth from "../components/Icons/Modrinth.astro"
import GitHub from "../components/Icons/GitHub.astro"
import Mail from "../components/Icons/Mail.astro"
import X from "../components/Icons/X.astro"

export const networks = [
    {
        alt: 'X',
        href: 'https://x.com/BanGameStudios',
        icon: X
    },
    {
        alt: 'Patreon',
        href: 'https://patreon.com/c/BanGameStudios',
        icon: Patreon
    },
    {
        alt: 'YouTube',
        href: 'https://youtube.com/@BanGameStudios',
        icon: YouTube
    },
    {
        alt: 'Modrinth',
        href: 'https://modrinth.com/organization/bangamestudios',
        icon: Modrinth
    },
    {
        alt: 'GitHub',
        href: 'https://github.com/bangamestudios',
        icon: GitHub
    },
    {
        alt: "Mail",
        href: 'mailto:contacto@bangame.tech',
        icon: Mail
    }
]