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
        bottom: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark."
    },
    ko: {
        top: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark.",
        bottom: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark."
    },
    ja: {
        top: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark.",
        bottom: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark."
    },
    fr: {
        top: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark.",
        bottom: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark."
    },
    es: {
        top: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark.",
        bottom: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark."
    },
    zh: {
        top: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark.",
        bottom: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark."
    },
    ar: {
        top: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark.",
        bottom: "We don't reject the network. We refuse its terms.This is not about perfect escape. There is no such thing. This is about tactical disappearance. Not through complexity but through inversion. We cache our words in the gap and going off the grid will reveal itself. Disconnect . the become invisible and read in the dark."
    }
};

// 언어 코드 매핑 (브라우저가 반환하는 형식 처리)
function getLanguageCode(lang) {
    const code = lang.toLowerCase().split('-')[0];
    const supportedLangs = ['ko', 'ja', 'fr', 'es', 'zh', 'ar'];
    return supportedLangs.includes(code) ? code : 'en';
}

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