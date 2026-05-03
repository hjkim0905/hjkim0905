import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
### 김현중 | Frontend Developer

#### 🧑‍💻 Contact

<a href="mailto:eax9952@gmail.com"><img src="https://img.shields.io/badge/gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
<a href="https://bbin-guuuu.tistory.com/"><img src="https://img.shields.io/badge/tistory-000000?style=for-the-badge&logo=tistory&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/hyunjoong-kim-63a11a403/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>

#### 🏆 Awards

2023.12 - PARD 2nd Long Hackathon **우수상** (MoneyGlove) \\
2024.06 - PARD 3rd Long Hackathon **우수상** (Mumuk) \\
2024.11 - 2024 한동대 스마트 SW 공모전 **최우수상** (Mumuk) \\
2024.11 - 2024 한동대 스마트 SW 공모전 **장려상** (청춘뽑기)

#### 💻 Projects

2025.06 ~ ing - [NEWSEE](https://chromewebstore.google.com/detail/newsee/kckamekolimffahghoechpaenpgidklj?hl=ko&utm_source=ext_sidebar) \\
2024.06 ~ ing - [Mumuk](https://apps.apple.com/kr/app/%EB%A8%B8%EB%A8%B9-mumuk/id6526490191) \\
2024.12 ~ 2025.03 - [Lifeword](https://walab.info/lifeword/) \\
2023.12 ~ 2024.01 - [MoneyGlove](https://precious-relationship.web.app/)

#### 💼 Commercial

2024.10 ~ 2025.01 - NCMN Admin Web & WebApp \\
2024.07 ~ 2025.02 - SophieBook Filter & Photo Editor App \\
2025.02 - [Sinilfood Business/CustomerService Section Website](https://www.shinilfood.com/business)

#### 📕 Latest Blog Posts
`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
  },
});

(async () => {
  // 피드 목록
  const feed = await parser.parseURL('https://bbin-guuuu.tistory.com/rss');

  for (let i = 0; i < 5; i++) {
    const { title, link } = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `\n- [${title}](${link})`;
  }

  // README.md 파일 생성
  writeFileSync('README.md', text, 'utf8', (e) => {
    console.log(e);
  });
  console.log('업데이트 완료');
})();
