import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
👋반갑습니다 저는 **개발자 꿈나무** 김현중입니다.⌨️🚀

현재 한동대학교에 재학중이며 열정적인 자세로 학습에 임하고 있습니다.🙇‍♂️📚

<h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🛠️ Tech Stacks </h2>
<div>
    <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=C&logoColor=white">
    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=C%2B%2B&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
    <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
    <br/>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
    <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white">
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white">
    <br/>
    <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=for-the-badge&logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/Swift-F05138?style=for-the-badge&logo=Swift&logoColor=white">
    <br/>
    <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white">
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
</div>

<h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🧑‍💻 Contact me </h2>
<div>
    <a href=https://bbin-guuuu.tistory.com/> <img src="https://img.shields.io/badge/Tistory-000000?style=for-the-badge&logo=Tistory&logoColor=white&link=https://bbin-guuuu.tistory.com/"> </a>
    <br/>
    <a href="mailto:eax9952@gmail.com" target="mailto:eax9952@gmail.com"><img src="https://img.shields.io/badge/eax9952@gmail.com-EA4335?style=flat-square&logo=Gmail&logoColor=white"/></a>
</div>

<h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🏆 Award History </h2>

**PARD 2nd Long Hackathon 우수상** | _MoneyGlove_ | 2023.12

**PARD 3rd Long Hackathon 우수상** | _Mumuk_ | 2024.06

**2024 한동대 스마트 SW 공모전 최우수상** | _Mumuk_ | 2024.11

**2024 한동대 스마트 SW 공모전 장려상** | _청춘뽑기_ | 2024.11

<h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 💻 Project History </h2>

### 🌟 Commercial Projects

**NCMN Admin Web & WebApp** | Frontend Developer | 2024.10 - 2025.01 | Team: Frontend(1) • Backend(1)

**Modbus AC Remote Control App** | Frontend Developer | 2024.08 - 2024.11 | Team: Frontend(2) • PM(1) • Hardware(1)

**SophieBook Filter & Photo Editor App** | Frontend Developer | 2024.07 - 2025.02 | Team: Frontend(2) • Backend(1) • PM(1) • Designer(1)

**Sinilfood Business/CustomerService Section Website** | Frontend Developer | 2025.02 | Team: Frontend(1)

### 🎨 Team Projects

**[Mumuk](https://apps.apple.com/kr/app/%EB%A8%B8%EB%A8%B9-mumuk/id6526490191)** | Frontend Developer | 2024.06 - Present | Team: Frontend(3) • Backend(1) • PM(2) • Designer(1)

**WheelBus** | Frontend Developer | 2024.06 - 2024.07 | Team: Frontend(2) • Backend(1) • PM(1) • Designer(1)

**청춘뽑기** | Frontend Developer | 2024.05 | Team: Frontend(2) • Backend(1) • PM(2) • Designer(1)

**MoneyGlove** | Frontend Developer | 2023.12 - 2024.01 | Team: Frontend(3) • Backend(1) • PM(1) • Designer(1)

**버르장례식** | Frontend Developer | 2023.11 | Team: Frontend(1) • Backend(1) • PM(1) • Designer(2)

<h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> ⚡️ Stats </h2>
<div>
    <img src="https://github-readme-stats.vercel.app/api?username=hjkim0905&bg_color=60,4c5685,693870&title_color=ffffff&text_color=ffffff&count_private=true"/>
</div>

## 📕 Latest Blog Posts
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

    text += `<ul>`;

    // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 10; i++) {
        const { title, link } = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;

    // README.md 파일 생성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e);
    });
    console.log('업데이트 완료');
})();
