/**
 * Central site configuration.
 * Edit this one file to update your name, bio, navigation, and social links
 * everywhere on the site.
 */

export const site = {
  name: 'Su Wai Myo',
  role: 'NLP Researcher',
  tagline: 'Quietly observant, quickly adaptive.',
  // Short bio used on the home page hero. Edit freely.
  bio: 'I bring the intensity of the badminton court to my research. I love the thrill of solving complex problems and the strategic thinking that defines both my wins and my losses. I value precision, focus, and a deep respect for time — yours and mine.',
  email: 'suwai2196@gmail.com',
  // Used for SEO/meta. Keep in sync with `site` in astro.config.mjs.
  url: 'https://suwaimyo.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Blog', href: '/blog' },
  { label: 'CV', href: '/cv' },
];

// Ordered by importance for a researcher. Set `href` to '' to hide a link.
// `icon` uses iconify simple-icons names.
export const socials = [
  { label: 'Email', href: 'mailto:suwai2196@gmail.com', icon: 'lucide:mail' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=pK8PkSYAAAAJ', icon: 'simple-icons:googlescholar' },
  { label: 'GitHub', href: 'https://github.com/suwai2196', icon: 'simple-icons:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suwaimyo', icon: 'simple-icons:linkedin' },
];

// Research interests shown on the home page.
export const skills = [
  'NLP',
  'Semantic Web',
  'Data Analysis',
  'Software Design and Development',
];
