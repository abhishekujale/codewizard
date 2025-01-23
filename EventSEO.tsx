import Head from 'next/head';
import React from 'react';

const EventSEO = ({
    eventName = "COEWIZARD",
    eventOrganizer = "ACSESKITCoEK Club",
    college = "KIT College of Engineering",
    description = "COEWIZARD is an innovative technical event showcasing cutting-edge technology and student innovation at KIT College of Engineering.",
    date = "2024-07-15", // ISO format
    location = "KIT College of Engineering",
    websiteUrl = "https://codewizard.web.app",
    socialMediaHandles = {
        twitter: '@acses.kitcoek',
        facebook: "ACSES KITCOEK",
        instagram: "@acses.kitcoek"
    },
    contactEmail = "acses.kitcoek@gmail.com",
    imageUrl = "https://codewizard.example.com/og-image.jpg"
}) => {
    const currentYear = new Date().getFullYear();
    const canonicalUrl = typeof window !== 'undefined' ? window.location.href : websiteUrl;

    return (
        <Head>
            {/* Advanced Title Tag with Keywords */}
            <title>{`${eventName} | Innovative Tech Event | ${college} | ${currentYear}`}</title>

            {/* Comprehensive Meta Description */}
            <meta
                name="description"
                content={`${eventName}: A groundbreaking technical event at ${college}. Discover innovative technology, student projects, and cutting-edge research. Join us for an extraordinary showcase of talent and innovation.`}
            />

            {/* Extended Keyword Optimization */}
            <meta
                name="keywords"
                content={`${eventName}, technical event, student innovation, ${college}, technology showcase, engineering conference, tech exhibition, student projects, ${currentYear} tech event`}
            />

            {/* Advanced Indexing Directives */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Enhanced Metadata */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="event" />
            <meta property="og:title" content={`${eventName} - Innovative Tech Showcase`} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={`${eventName} Official Event`} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter Card Enhanced */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={socialMediaHandles.twitter} />
            <meta name="twitter:creator" content={socialMediaHandles.twitter} />
            <meta name="twitter:title" content={`${eventName} - Tech Innovation Showcase`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Geotargeting and Location */}
            <meta name="geo.region" content="IN-KA" /> {/* Example: India, Karnataka */}
            <meta name="geo.placename" content={location} />
            <meta name="ICBM" content="12.9716,77.5946" /> {/* Example coordinates */}

            {/* Additional SEO Signals */}
            <meta name="author" content={eventOrganizer} />
            <meta name="copyright" content={`© ${currentYear} ${eventOrganizer}. All Rights Reserved.`} />
            <meta name="rating" content="General" />

            {/* Structured Data - Enhanced Event Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": 'codeWizard',
                    "description": "National Level Coding Event",
                    "startDate": '26th Feb',
                    "endDate": '26th Feb', // Add end date if different
                    "location": {
                        "@type": "Place",
                        "name": {college},
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": 'Gokul Shirgaon',
                            "addressLocality": "Kolhapur",
                            "addressRegion": "Maharashtra",
                            "addressCountry": "IN"
                        }
                    },
                    "organizer": {
                        "@type": "Organization",
                        "name": "Team ACSES",
                        "url": 'acses-kitcoek.web.app',
                        "email": 'acses.kitcoek@gmail.com',
                        "logo": imageUrl
                    },
                    "image": [imageUrl],
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "INR"
                    },
                    "eventStatus": "https://schema.org/EventScheduled",
                    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
                })}
            </script>

            {/* Performance and Compatibility Metas */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            {/* Alternate Language Links (if applicable) */}
            <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        </Head>
    );
};

export default EventSEO;