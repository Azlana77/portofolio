export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  problem: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
};

export const profile = {
  name: 'Nama Kamu',
  role: 'React Developer',
  headline:
    'Membangun antarmuka web yang cepat, rapi, dan mudah dipakai untuk produk digital modern.',
  location: 'Indonesia',
  email: 'hello@example.com',
  cvUrl: '#',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/',
    },
    {
      label: 'Email',
      href: 'mailto:hello@example.com',
    },
  ] satisfies SocialLink[],
};

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'UI Engineering',
    items: ['Responsive UI', 'Design Systems', 'Accessibility', 'Animation'],
  },
  {
    category: 'Tools',
    items: ['Vite', 'Git', 'npm', 'Vercel', 'Lighthouse'],
  },
];

export const projects = [
  {
    title: 'Commerce Insight',
    description:
      'Dashboard penjualan untuk membaca performa produk, order, dan revenue harian.',
    problem:
      'Membantu tim operasional melihat metrik utama tanpa membuka spreadsheet manual.',
    techStack: ['React', 'TypeScript', 'Chart UI', 'CSS'],
    image: '/project-commerce.svg',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Ops Dashboard',
    description:
      'Panel monitoring pekerjaan internal dengan status task, prioritas, dan ringkasan SLA.',
    problem:
      'Mengurangi waktu koordinasi dengan tampilan prioritas yang mudah dipindai.',
    techStack: ['React', 'Vite', 'Component UI', 'Responsive'],
    image: '/project-dashboard.svg',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Learning Hub',
    description:
      'Web pembelajaran mini untuk menampilkan modul, progres belajar, dan catatan kelas.',
    problem:
      'Membuat materi belajar lebih terstruktur dan mudah diakses dari perangkat mobile.',
    techStack: ['React', 'TypeScript', 'Local Data', 'CSS Grid'],
    image: '/project-learning.svg',
    demoUrl: '#',
    repoUrl: '#',
  },
] satisfies Project[];

export const experiences = [
  {
    title: 'Frontend Developer',
    organization: 'Personal & Freelance Projects',
    period: '2024 - Sekarang',
    highlights: [
      'Membangun halaman landing, dashboard, dan komponen UI responsif.',
      'Mengubah kebutuhan produk menjadi interface yang mudah dipakai.',
      'Mengoptimasi tampilan mobile, aksesibilitas dasar, dan performa loading.',
    ],
  },
  {
    title: 'Web Development Learner',
    organization: 'Independent Study',
    period: '2023 - 2024',
    highlights: [
      'Mendalami React, TypeScript, CSS modern, dan workflow deployment.',
      'Membuat project latihan dengan data terstruktur dan komponen reusable.',
    ],
  },
] satisfies Experience[];

export const stats = [
  {
    value: '12+',
    label: 'Project UI',
  },
  {
    value: '3',
    label: 'Featured Case',
  },
  {
    value: '90+',
    label: 'Target Lighthouse',
  },
];
