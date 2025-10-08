// 언어별 문장 정의
const phrases = {
    en: {
        first: "Everything makes sense until it doesn't",
        fromKo: "It all makes sense, but it doesn't.",
        fromJa: "Everything has meaning, but then it doesn't.",
        fromFr: "Everything has meaning until it no longer has any.",
        fromEs: "Everything makes sense until it stops making sense.",
        fromZh: "Everything has meaning until it loses its meaning.",
        fromAr: "Everything seems logical until it stops being so."
    },
    ko: "모든 것이 이해가 되지만 그렇지 않습니다.",
    ja: "すべては意味があるが、そうではない。",
    fr: "Tout a du sens jusqu'à ce que ça n'en ait plus.",
    es: "Todo tiene sentido hasta que no lo tiene.",
    zh: "一切都有意义，直到它不再有意义。",
    ar: "كل شيء منطقي حتى لا يكون كذلك."
};

// 언어별 manifesto 정의
const manifestos = {
    en: {
        top: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark.",
        bottom: "'Everything makes sense until it doesn't' looks simple, but it's a linguistic trap. The sentence is paradoxical—things make sense, then suddenly they don't—forcing translators to handle contradiction and context shift simultaneously. As it gets translated repeatedly, it becomes what it describes: something that stops making sense. A self-fulfilling prophecy. When users switch languages, machines process the grammar but stumble on the logic. Each translation warps it further. The sentence falls apart and reassembles wrong, over and over."
    },
    ko: {
        top: "The translation sounds grammatically correct but semantically broken. The paradox becomes simple contradiction, and the temporal shift—something once clear becoming unclear—is lost. The translation sounds grammatically correct but semantically broken. The paradox becomes simple contradiction, and the temporal shift—something once clear becoming unclear—is lost.",
        bottom: "'Everything makes sense until it doesn't' looks simple, but it's a linguistic trap. The sentence is paradoxical—things make sense, then suddenly they don't—forcing translators to handle contradiction and context shift simultaneously. As it gets translated repeatedly, it becomes what it describes: something that stops making sense. A self-fulfilling prophecy. When users switch languages, machines process the grammar but stumble on the logic. Each translation warps it further. The sentence falls apart and reassembles wrong, over and over."
    },
    ja: {
        top: "The structure repeats too literally. The rhythm and tension disappear, and the phrase feels mechanical. It communicates both sides of the statement but not the transformation between them. The structure repeats too literally. The rhythm and tension disappear, and the phrase feels mechanical. It communicates both sides of the statement but not the transformation between them.",
        bottom: "'Everything makes sense until it doesn't' looks simple, but it's a linguistic trap. The sentence is paradoxical—things make sense, then suddenly they don't—forcing translators to handle contradiction and context shift simultaneously. As it gets translated repeatedly, it becomes what it describes: something that stops making sense. A self-fulfilling prophecy. When users switch languages, machines process the grammar but stumble on the logic. Each translation warps it further. The sentence falls apart and reassembles wrong, over and over."
    },
    fr: {
        top: "The sentence becomes calm and philosophical. “Make sense” turns into “have meaning,” shifting from practical understanding to abstract significance. The paradox softens into a reflection on meaning itself rather than a moment of confusion.",
        bottom: "'Everything makes sense until it doesn't' looks simple, but it's a linguistic trap. The sentence is paradoxical—things make sense, then suddenly they don't—forcing translators to handle contradiction and context shift simultaneously. As it gets translated repeatedly, it becomes what it describes: something that stops making sense. A self-fulfilling prophecy. When users switch languages, machines process the grammar but stumble on the logic. Each translation warps it further. The sentence falls apart and reassembles wrong, over and over."
    },
    es: {
        top: "The structure stays natural, but the emotional break disappears. “Until it stops making sense” reads as a gradual change instead of a sudden loss of coherence. The sentence feels descriptive, not experiential.",
        bottom: "'Everything makes sense until it doesn't' looks simple, but it's a linguistic trap. The sentence is paradoxical—things make sense, then suddenly they don't—forcing translators to handle contradiction and context shift simultaneously. As it gets translated repeatedly, it becomes what it describes: something that stops making sense. A self-fulfilling prophecy. When users switch languages, machines process the grammar but stumble on the logic. Each translation warps it further. The sentence falls apart and reassembles wrong, over and over."
    },
    zh: {
        top: "The translation sounds poetic and balanced. “Meaning” becomes a moral or existential concept, losing the feeling of something that suddenly ceases to make sense. It reads like a proverb rather than a reaction.",
        bottom: "'Everything makes sense until it doesn't' looks simple, but it's a linguistic trap. The sentence is paradoxical—things make sense, then suddenly they don't—forcing translators to handle contradiction and context shift simultaneously. As it gets translated repeatedly, it becomes what it describes: something that stops making sense. A self-fulfilling prophecy. When users switch languages, machines process the grammar but stumble on the logic. Each translation warps it further. The sentence falls apart and reassembles wrong, over and over."
    },
    ar: {
        top: "The tone becomes logical and detached. “Make sense” is interpreted as “be logical,” removing the human sense of realization. The focus shifts from internal understanding to external reasoning. The tone becomes logical and detached. “Make sense” is interpreted as “be logical,” removing the human sense of realization. The focus shifts from internal understanding to external reasoning.",
        bottom: "'Everything makes sense until it doesn't' looks simple, but it's a linguistic trap. The sentence is paradoxical—things make sense, then suddenly they don't—forcing translators to handle contradiction and context shift simultaneously. As it gets translated repeatedly, it becomes what it describes: something that stops making sense. A self-fulfilling prophecy. When users switch languages, machines process the grammar but stumble on the logic. Each translation warps it further. The sentence falls apart and reassembles wrong, over and over."
    }
};

// 언어 코드 매핑 (브라우저가 반환하는 형식 처리)
function getLanguageCode(lang) {
    const code = lang.toLowerCase().split('-')[0];
    const supportedLangs = ['ko', 'ja', 'fr', 'es', 'zh', 'ar'];
    return supportedLangs.includes(code) ? code : 'en';
}

// 컬러 세트 정의
const colorSets = [
    {
        background: '#FDA4FB',
        manifesto: '#461006',
        phrase: '#EBE8E7'
    },
    {
        background: '#717C1C',
        manifesto: '#252904',
        phrase: '#A0FF08'
    },
    {
        background: '#90A1BF',
        manifesto: '#384D72',
        phrase: '#FFFB00'
    }
];

// 랜덤 컬러 세트 선택
const randomColorSet = colorSets[Math.floor(Math.random() * colorSets.length)];

// 컬러 적용
document.body.style.backgroundColor = randomColorSet.background;
document.querySelector('.phrase').style.color = randomColorSet.phrase;
document.querySelector('.manifesto-top').style.color = randomColorSet.manifesto;
document.querySelector('.manifesto-bottom').style.color = randomColorSet.manifesto;

// 현재 디바이스 언어 감지
const currentLang = getLanguageCode(navigator.language || navigator.userLanguage);

// LocalStorage에서 데이터 가져오기 (BEFORE 처리)
const hasVisitedBefore = localStorage.getItem('hasVisited');
const lastNonEnglishLanguageBefore = localStorage.getItem('lastNonEnglishLanguage');

// DOM 요소
const phraseDiv = document.querySelector('.phrase');
const manifestoTopDiv = document.querySelector('.manifesto-top');
const manifestoBottomDiv = document.querySelector('.manifesto-bottom');
const banner = document.querySelector('.banner p');

// 배너 업데이트
const languageNames = {
    en: 'English',
    ko: '한국어',
    ja: '日本語',
    fr: 'Français',
    es: 'Español',
    zh: '中文',
    ar: 'العربية'
};

banner.textContent = `Your language setting is ${languageNames[currentLang]}`;

// 표시할 문장 결정
let displayPhrase = '';

if (currentLang === 'en') {
    // 영어인 경우
    if (!hasVisitedBefore) {
        // 첫 방문
        displayPhrase = phrases.en.first;
        localStorage.setItem('hasVisited', 'true');
    } else if (lastNonEnglishLanguageBefore) {
        // 다른 언어를 거쳐서 돌아온 경우
        const key = `from${lastNonEnglishLanguageBefore.charAt(0).toUpperCase() + lastNonEnglishLanguageBefore.slice(1)}`;
        displayPhrase = phrases.en[key];
    } else {
        // 영어만 계속 사용한 경우
        displayPhrase = phrases.en.first;
    }
} else {
    // 비영어 언어인 경우
    displayPhrase = phrases[currentLang];
    localStorage.setItem('hasVisited', 'true');
    localStorage.setItem('lastNonEnglishLanguage', currentLang);
}

// 문장 표시
phraseDiv.textContent = displayPhrase;

// manifesto 표시
manifestoTopDiv.textContent = manifestos[currentLang].top;
manifestoBottomDiv.textContent = manifestos[currentLang].bottom;

// manifesto 스타일 적용
if (currentLang === 'en') {
    if (!hasVisitedBefore || !lastNonEnglishLanguageBefore) {
        // 최초 영어
        manifestoTopDiv.style.cssText = 'opacity: 0.31; filter: blur(6.300000190734863px);';
        manifestoBottomDiv.style.cssText = 'opacity: 0.31; filter: blur(6.300000190734863px);';
    } else {
        // 변형된 영어 (다른 언어 거쳐서 돌아옴)
        manifestoTopDiv.style.cssText = 'opacity: 1; filter: none;';
        manifestoBottomDiv.style.cssText = 'opacity: 1; filter: none;';
    }
} else {
    // 영어 외 언어
    manifestoTopDiv.style.cssText = 'opacity: 0.51; filter: blur(2px);';
    manifestoBottomDiv.style.cssText = 'opacity: 0.51; filter: blur(2px);';
}

// Erase Memory 버튼 생성
const eraseButton = document.createElement('button');
eraseButton.textContent = 'Erase Memory';
eraseButton.style.cssText = `
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 5px 5px;
    background-color: transparent;
    color: rgb(255 255 255 / 52%);
    border: none;
    cursor: pointer;
    font-family: lightFont, sans-serif;
    text-decoration: underline;
    font-size: 12px;
`;

eraseButton.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

document.body.appendChild(eraseButton);