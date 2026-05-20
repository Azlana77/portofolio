# PRD Web Portofolio React

## 1. Ringkasan Produk

Web portofolio ini adalah situs personal untuk menampilkan profil profesional, keahlian, proyek, pengalaman, dan kontak dalam satu pengalaman yang cepat, responsif, mudah dirawat, dan siap dipublikasikan ke platform seperti Vercel.

Produk ditujukan untuk membantu pemilik portofolio terlihat kredibel di mata recruiter, calon klien, collaborator, atau komunitas teknologi.

## 2. Tujuan

- Menampilkan identitas profesional secara jelas dalam 5 detik pertama.
- Memudahkan pengunjung memahami skill, pengalaman, dan kualitas proyek.
- Menyediakan CTA yang jelas untuk menghubungi pemilik portofolio.
- Membuat fondasi React yang modular agar konten mudah diperbarui.
- Mendukung performa, SEO, accessibility, dan tampilan mobile-first.

## 3. Target Pengguna

- Recruiter yang ingin menilai profil dan pengalaman secara cepat.
- Calon klien yang ingin melihat kualitas pekerjaan dan cara menghubungi.
- Hiring manager atau technical lead yang ingin melihat proyek, stack, dan keputusan teknis.
- Rekan developer yang ingin mengenal karya dan gaya teknis pemilik portofolio.

## 4. Problem Statement

Banyak portofolio hanya berupa daftar proyek tanpa konteks, sulit dipindai, tidak ramah mobile, dan tidak punya CTA yang kuat. Web ini harus menjadi representasi profesional yang ringkas, tajam, dan mudah dievaluasi.

## 5. Scope MVP

### In Scope

- Halaman utama portofolio satu halaman.
- Section hero dengan nama, role, value proposition, dan CTA.
- Section about singkat.
- Section skills atau tech stack.
- Section featured projects.
- Section experience atau education.
- Section contact.
- Responsive layout untuk mobile, tablet, dan desktop.
- Data konten dipisahkan dari komponen UI.
- SEO dasar: title, meta description, Open Graph.
- Accessibility dasar: semantic HTML, keyboard navigation, alt text, contrast yang layak.

### Out of Scope

- Dashboard admin untuk mengubah konten.
- Blog atau CMS.
- Login/authentication.
- Sistem komentar.
- Multi-language.
- Backend custom.

## 6. User Journey

1. Pengunjung membuka situs dan langsung melihat nama, role, dan spesialisasi.
2. Pengunjung memindai ringkasan profil dan skill.
3. Pengunjung membuka detail proyek yang relevan melalui kartu proyek.
4. Pengunjung melihat pengalaman atau latar belakang.
5. Pengunjung menekan CTA untuk email, WhatsApp, LinkedIn, GitHub, atau download CV.

## 7. Struktur Halaman

### 7.1 Header

Requirements:
- Berisi logo/nama singkat.
- Navigasi anchor ke `About`, `Projects`, `Experience`, dan `Contact`.
- Sticky atau fixed saat scroll pada desktop dan mobile.
- Mobile menu tersedia jika navigasi tidak muat.

Acceptance Criteria:
- Link navigasi mengarah ke section yang benar.
- Header tidak menutupi konten saat anchor navigation.
- Menu mobile bisa dibuka dan ditutup via klik dan keyboard.

### 7.2 Hero

Requirements:
- Menampilkan nama lengkap.
- Menampilkan role utama, contoh: `Frontend Developer`, `React Developer`, atau `Full Stack Developer`.
- Menampilkan value proposition dalam 1-2 kalimat.
- CTA utama: `Lihat Proyek`.
- CTA sekunder: `Hubungi Saya` atau `Download CV`.
- Menampilkan foto/avatar atau visual personal jika tersedia.

Acceptance Criteria:
- Pengunjung memahami siapa pemilik portofolio dan bidangnya tanpa scroll.
- CTA terlihat jelas di desktop dan mobile.
- Visual tidak memperlambat LCP secara signifikan.

### 7.3 About

Requirements:
- Ringkasan profil 2-4 paragraf pendek.
- Menjelaskan fokus, pengalaman, minat teknis, dan jenis masalah yang biasa diselesaikan.
- Menampilkan highlight singkat seperti jumlah proyek, tahun pengalaman, atau domain.

Acceptance Criteria:
- Teks mudah dipindai dan tidak terlalu panjang.
- Informasi tidak duplikatif dengan hero.

### 7.4 Skills

Requirements:
- Mengelompokkan skill berdasarkan kategori:
  - Frontend: React, TypeScript, JavaScript, HTML, CSS.
  - Styling: Tailwind CSS, CSS Modules, atau framework yang digunakan.
  - Tools: Git, Vite, npm, pnpm, Vercel.
  - Optional: Backend, database, testing, design tools.
- Menampilkan skill sebagai list ringkas atau badge.

Acceptance Criteria:
- Skill mudah dibaca pada layar kecil.
- Tidak terlalu banyak badge sehingga section terasa penuh.

### 7.5 Projects

Requirements:
- Menampilkan minimal 3 proyek unggulan.
- Setiap project memiliki:
  - Nama proyek.
  - Deskripsi singkat.
  - Problem yang diselesaikan.
  - Tech stack.
  - Link demo jika ada.
  - Link repository jika boleh dibuka.
  - Gambar/screenshot jika tersedia.
- Project card harus bisa dipindai cepat.

Acceptance Criteria:
- Kartu proyek konsisten ukuran dan strukturnya.
- Link eksternal dibuka dengan aman memakai `rel="noreferrer"`.
- Gambar memiliki alt text yang deskriptif.

### 7.6 Experience / Education

Requirements:
- Menampilkan pengalaman kerja, freelance, organisasi, pendidikan, atau sertifikasi.
- Format timeline sederhana:
  - Nama posisi/program.
  - Organisasi.
  - Periode.
  - 2-3 bullet impact atau tanggung jawab.

Acceptance Criteria:
- Timeline tetap terbaca di mobile.
- Tidak ada layout shift besar saat konten dimuat.

### 7.7 Contact

Requirements:
- Menampilkan CTA akhir yang kuat.
- Menyediakan minimal email dan satu social link.
- Optional: tombol WhatsApp, LinkedIn, GitHub, dan download CV.
- Form kontak optional untuk MVP. Jika belum ada backend, gunakan link `mailto:`.

Acceptance Criteria:
- Pengunjung bisa menghubungi dalam maksimal 2 klik.
- Semua link kontak valid.

### 7.8 Footer

Requirements:
- Menampilkan nama, tahun berjalan, dan link sosial ringkas.
- Tidak perlu konten panjang.

Acceptance Criteria:
- Tahun bisa statis untuk MVP atau dinamis via JavaScript.
- Footer tidak mengambil fokus visual dari CTA utama.

## 8. Content Model

Konten sebaiknya disimpan sebagai data terpisah agar mudah diedit tanpa menyentuh banyak komponen.

```ts
type Profile = {
  name: string;
  role: string;
  headline: string;
  location?: string;
  email: string;
  cvUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
};

type Project = {
  title: string;
  description: string;
  problem?: string;
  techStack: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

type Experience = {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
};
```

## 9. Rekomendasi Tech Stack

- React dengan Vite.
- TypeScript.
- Tailwind CSS atau CSS Modules.
- React Router tidak wajib untuk MVP satu halaman.
- Framer Motion optional untuk animasi ringan.
- Lucide React untuk icon.
- Deployment: Vercel.

## 10. Non-Functional Requirements

### Performance

- Lighthouse Performance target minimal 90 pada halaman utama.
- Gambar dioptimalkan dan memakai ukuran yang sesuai.
- Hindari dependency besar untuk fitur sederhana.
- Animasi tidak boleh mengganggu interaksi.

### Accessibility

- Gunakan semantic HTML: `header`, `main`, `section`, `nav`, `footer`.
- Semua tombol dan link bisa diakses keyboard.
- Contrast teks memenuhi standar WCAG AA jika memungkinkan.
- Semua gambar informatif memiliki alt text.
- Focus state terlihat jelas.

### SEO

- Title mengandung nama dan role.
- Meta description menjelaskan spesialisasi.
- Open Graph image disiapkan jika ada.
- Struktur heading hanya memiliki satu `h1`.
- Link sosial dan project valid.

### Responsiveness

- Mobile-first.
- Breakpoint minimal:
  - Mobile: 360px-767px.
  - Tablet: 768px-1023px.
  - Desktop: 1024px ke atas.
- Tidak boleh ada horizontal scroll yang tidak disengaja.

## 11. Visual Direction

- Gaya visual: profesional, modern, bersih, dan personal.
- Layout mengutamakan keterbacaan dan pemindaian cepat.
- Hindari halaman terasa seperti landing page generik.
- Gunakan spacing konsisten, typography jelas, dan kontras yang nyaman.
- Project screenshot atau visual kerja lebih diutamakan daripada dekorasi abstrak.

## 12. Component Plan

- `App`
- `Header`
- `HeroSection`
- `AboutSection`
- `SkillsSection`
- `ProjectsSection`
- `ProjectCard`
- `ExperienceSection`
- `ContactSection`
- `Footer`
- `Container`
- `SectionHeading`

## 13. Success Metrics

- Pengunjung dapat memahami profil dalam kurang dari 5 detik.
- CTA kontak terlihat tanpa kebingungan.
- Minimal 3 proyek ditampilkan dengan konteks yang jelas.
- Skor Lighthouse minimal:
  - Performance: 90
  - Accessibility: 90
  - Best Practices: 90
  - SEO: 90
- Tampilan tidak rusak pada mobile 360px, tablet, dan desktop.

## 14. Milestone

### Milestone 1: Foundation

- Setup React + TypeScript + Vite.
- Setup styling.
- Buat struktur folder dan data konten.
- Implement layout dasar.

### Milestone 2: Core Sections

- Implement header, hero, about, skills, projects, experience, contact, dan footer.
- Tambahkan responsive behavior.
- Tambahkan link sosial dan CTA.

### Milestone 3: Polish

- Optimasi visual, spacing, typography, dan state interaksi.
- Tambahkan animasi ringan jika dibutuhkan.
- Optimasi gambar.
- Tambahkan metadata SEO.

### Milestone 4: QA & Deployment

- Test desktop dan mobile.
- Jalankan build production.
- Audit Lighthouse.
- Deploy ke Vercel.

## 15. Risks & Mitigation

- Konten belum lengkap: gunakan placeholder terstruktur dan tandai field yang perlu diganti.
- Terlalu banyak animasi: batasi animasi pada hover, reveal ringan, atau transisi section.
- Gambar proyek belum tersedia: gunakan layout yang tetap bagus tanpa gambar.
- Scope melebar ke blog/CMS: jaga MVP tetap satu halaman dulu.

## 16. Definition of Done

- Semua section MVP selesai dan responsif.
- Konten utama bisa diedit dari file data.
- Semua CTA dan link eksternal berfungsi.
- Build production berhasil tanpa error.
- Tidak ada horizontal overflow pada mobile.
- Lighthouse memenuhi target minimal.
- Situs siap deploy ke Vercel.
