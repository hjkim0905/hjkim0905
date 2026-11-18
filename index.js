import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

const POST_COUNT = 5;

const contact = `<a href="mailto:eax9952@gmail.com"><img src="https://img.shields.io/badge/gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
<a href="https://bbin-guuuu.tistory.com/"><img src="https://img.shields.io/badge/tistory-000000?style=for-the-badge&logo=tistory&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/hyunjoong-kim-63a11a403/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>`;

const commonProjects = `2026.04 ~ ing - [tolli](https://apps.apple.com/kr/app/tolli/id6766518023) \\
2025.06 ~ 2025.12 - [NEWSEE](https://chromewebstore.google.com/detail/newsee/kckamekolimffahghoechpaenpgidklj?hl=ko&utm_source=ext_sidebar) \\
2024.06 ~ 2025.07 - [Mumuk](https://apps.apple.com/kr/app/%EB%A8%B8%EB%A8%B9-mumuk/id6526490191) \\
2024.12 ~ 2025.03 - [Lifeword](https://walab.info/lifeword/) \\
2023.12 ~ 2024.01 - [MoneyGlove](https://precious-relationship.web.app/)`;

const commercial = `2024.10 ~ 2025.01 - NCMN Admin Web & WebApp \\
2024.07 ~ 2025.02 - SophieBook Filter & Photo Editor App \\
2025.02 - [Sinilfood Business/CustomerService Section Website](https://www.shinilfood.com/business)`;

const openSource = `[Everything Claude Code (ECC)](https://github.com/affaan-m/ECC) - frontend-a11y skill ([#2048](https://github.com/affaan-m/ECC/pull/2048)) \\
[ko.react.dev](https://github.com/reactjs/ko.react.dev) - Korean docs typo fix ([#1524](https://github.com/reactjs/ko.react.dev/pull/1524))`;

const pages = [
  {
    file: 'README.md',
    language: '**Language:** 한국어 | [English](README.en.md)',
    name: '김현중',
    awards: `2023.12 - PARD 2nd Long Hackathon **우수상** (MoneyGlove) \\
2024.06 - PARD 3rd Long Hackathon **우수상** (Mumuk) \\
2024.11 - 2024 한동대 스마트 SW 공모전 **최우수상** (Mumuk) \\
2024.11 - 2024 한동대 스마트 SW 공모전 **장려상** (청춘뽑기)`,
    dam: '[담.](https://apps.apple.com/kr/app/id6809452180)',
    blogHeading: 'Latest Blog Posts',
  },
  {
    file: 'README.en.md',
    language: '**Language:** [한국어](README.md) | English',
    name: 'Hyunjoong Kim',
    awards: `2023.12 - PARD 2nd Long Hackathon **Excellence Award** (MoneyGlove) \\
2024.06 - PARD 3rd Long Hackathon **Excellence Award** (Mumuk) \\
2024.11 - 2024 Handong Global University Smart SW Contest **Top Excellence Award** (Mumuk) \\
2024.11 - 2024 Handong Global University Smart SW Contest **Honorable Mention** (Cheongchun Ppopgi)`,
    dam: '[Dam.](https://apps.apple.com/us/app/dam-a-day-in-one-color/id6809452180)',
    blogHeading: 'Latest Blog Posts (in Korean)',
  },
];

const render = (page, posts) => `${page.language}

### ${page.name} | Software Engineer, Frontend focused

#### 🧑‍💻 Contact

${contact}

#### 🏆 Awards

${page.awards}

#### 💻 Projects

2026.08 ~ ing - ${page.dam} \\
${commonProjects}

#### 💼 Commercial

${commercial}

#### 🌐 Open Source Contributions

${openSource}

#### 📕 ${page.blogHeading}

${posts}
`;

const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
  },
});

const feed = await parser.parseURL('https://bbin-guuuu.tistory.com/rss');
const posts = feed.items
  .slice(0, POST_COUNT)
  .map(({ title, link }) => `- [${title}](${link})`)
  .join('\n');

for (const page of pages) {
  writeFileSync(page.file, render(page, posts), 'utf8');
  console.log(`${page.file} 업데이트 완료`);
}
