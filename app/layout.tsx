import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/plugins/all.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/barfiller.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin", "latin-ext", "cyrillic"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://eduka.rs"),
    title: {
        default: "Едука | Удружење здравствених радника и сарадника Нишавског округа",
        template: "%s | Едука",
    },
    description: "Удружење Едука окупља здравствене раднике и сараднике који се континуирано усавршавају, размењују знања и унапређују здравствену заштиту кроз акредитоване програме.",
    applicationName: "Едука",
    openGraph: {
        type: "website",
        url: "https://eduka.rs",
        siteName: "Едука",
        title: "Едука | Удружење здравствених радника и сарадника Нишавског округа",
        description: "Едука окупља здравствене раднике и сараднике ради заједничког рада на квалитету, професионалном развоју и континуираној едукацији.",
        images: [
            {
                url: "/assets/img/eduka/workshop-presenter.png",
                width: 1200,
                height: 630,
                alt: "Едука – рад у учионици",
            },
        ],
        locale: "sr_RS",
    },
    twitter: {
        card: "summary_large_image",
        title: "Едука | Удружење здравствених радника и сарадника Нишавског округа",
        description: "Едукације, радионице и континуирано усавршавање здравствених радника у Нишавском округу.",
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
        icon: "/assets/img/logo/logo2.png",
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
            <body className={notoSans.className}>{children}</body>
        </html>
    );
}
