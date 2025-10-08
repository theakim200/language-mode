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

// 언어 코드 매핑 (브라우저가 반환하는 형식 처리)
function getLanguageCode(lang) {
    const code = lang.toLowerCase().split('-')[0];
    const supportedLangs = ['ko', 'ja', 'fr', 'es', 'zh', 'ar'];
    return supportedLangs.includes(code) ? code : 'en';
}

// 현재 디바이스 언어 감지
const currentLang = getLanguageCode(navigator.language || navigator.userLanguage);

console.log('=== Language Detection ===');
console.log('Raw navigator.language:', navigator.language);
console.log('Detected language code:', currentLang);

// LocalStorage에서 데이터 가져오기 (BEFORE 처리)
const hasVisitedBefore = localStorage.getItem('hasVisited');
const lastNonEnglishLanguageBefore = localStorage.getItem('lastNonEnglishLanguage');

console.log('=== Storage Data BEFORE ===');
console.log('Has visited before:', hasVisitedBefore);
console.log('Last non-English language before:', lastNonEnglishLanguageBefore);

// DOM 요소
const phraseDiv = document.querySelector('.phrase');
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

console.log('=== Phrase Selection ===');

if (currentLang === 'en') {
    // 영어인 경우
    if (!hasVisitedBefore) {
        // 첫 방문
        displayPhrase = phrases.en.first;
        localStorage.setItem('hasVisited', 'true');
        console.log('First visit in English - saving hasVisited');
    } else if (lastNonEnglishLanguageBefore) {
        // 다른 언어를 거쳐서 돌아온 경우
        const key = `from${lastNonEnglishLanguageBefore.charAt(0).toUpperCase() + lastNonEnglishLanguageBefore.slice(1)}`;
        displayPhrase = phrases.en[key];
        console.log('Returning to English from:', lastNonEnglishLanguageBefore);
        console.log('Using key:', key);
    } else {
        // 영어만 계속 사용한 경우
        displayPhrase = phrases.en.first;
        console.log('English only, no other languages visited');
    }
} else {
    // 비영어 언어인 경우
    displayPhrase = phrases[currentLang];
    localStorage.setItem('hasVisited', 'true');
    localStorage.setItem('lastNonEnglishLanguage', currentLang);
    console.log('Non-English language detected:', currentLang);
    console.log('Saving to localStorage...');
}

console.log('Selected phrase:', displayPhrase);

// LocalStorage에서 데이터 가져오기 (AFTER 처리)
const hasVisitedAfter = localStorage.getItem('hasVisited');
const lastNonEnglishLanguageAfter = localStorage.getItem('lastNonEnglishLanguage');

console.log('=== Storage Data AFTER ===');
console.log('Has visited after:', hasVisitedAfter);
console.log('Last non-English language after:', lastNonEnglishLanguageAfter);
console.log('========================');

// 문장 표시
phraseDiv.textContent = displayPhrase;

// 디버그 정보를 화면에 표시
const debugDiv = document.createElement('div');
debugDiv.style.cssText = `
    position: fixed;
    top: 30px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #0f0;
    padding: 10px;
    font-family: monospace;
    font-size: 12px;
    max-width: 90%;
    z-index: 1000;
    line-height: 1.5;
`;

// localStorage 실시간 확인 함수
function getStorageInfo() {
    return `
        hasVisited: ${localStorage.getItem('hasVisited')}<br>
        lastNonEnglishLanguage: ${localStorage.getItem('lastNonEnglishLanguage')}
    `;
}

debugDiv.innerHTML = `
    <strong>DEBUG INFO:</strong><br>
    Raw lang: ${navigator.language}<br>
    Detected: ${currentLang}<br>
    <br>
    <strong>BEFORE:</strong><br>
    Has visited: ${hasVisitedBefore}<br>
    Last non-EN: ${lastNonEnglishLanguageBefore}<br>
    <br>
    <strong>AFTER:</strong><br>
    Has visited: ${hasVisitedAfter}<br>
    Last non-EN: ${lastNonEnglishLanguageAfter}<br>
    <br>
    Phrase: ${displayPhrase.substring(0, 30)}...<br>
    <br>
    <strong>LOCALSTORAGE NOW:</strong><br>
    ${getStorageInfo()}
`;

document.body.appendChild(debugDiv);

// Erase Memory 버튼 생성
const eraseButton = document.createElement('button');
eraseButton.textContent = 'Erase Memory';
eraseButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    font-family: 'myFont', sans-serif;
    font-size: 14px;
`;

eraseButton.addEventListener('click', () => {
    console.log('Memory erased - clearing localStorage');
    localStorage.clear();
    location.reload();
});

document.body.appendChild(eraseButton);