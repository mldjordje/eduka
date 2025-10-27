import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/plugins/all.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/barfiller.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://eduka.rs"),
    title: {
        default: "Eduka | Udruženje zdravstvenih radnika i saradnika Nišavskog okruga",
        template: "%s | Eduka",
    },
    description:
        "Eduka okuplja medicinske radnike i zdravstvene saradnike sa ciljem unapređenja struke, razmene znanja i podizanja kvaliteta zdravstvene zaštite kroz kontinuiranu edukaciju.",
    applicationName: "Eduka",
    openGraph: {
        type: "website",
        url: "https://eduka.rs",
        siteName: "Eduka",
        title: "Eduka | Udruženje zdravstvenih radnika i saradnika Nišavskog okruga",
        description:
            "Eduka okuplja medicinske radnike i zdravstvene saradnike sa ciljem unapređenja struke, razmene znanja i podizanja kvaliteta zdravstvene zaštite.",
        images: [
            {
                url: "/assets/img/eduka/workshop-presenter.png",
                width: 1200,
                height: 630,
                alt: "Eduka radionice i edukacije",
            },
        ],
        locale: "sr_RS",
    },
    twitter: {
        card: "summary_large_image",
        title: "Eduka | Udruženje zdravstvenih radnika i saradnika Nišavskog okruga",
        description:
            "Edukacije, radionice i kontinuirano usavršavanje zdravstvenih radnika u Nišavskom okrugu.",
        images: ["/assets/img/eduka/workshop-presenter.png"],
    },
    alternates: {
        canonical: "https://eduka.rs",
    },
    robots: {
        index: true,
        follow: true,
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sr">
            <head>
                <base href="/" />
            </head>
            <body className={`${figtree.className}`}>{children}</body>
        </html>
    );
}
