const languages = {
  az: {
    choose_language: "Dil seçin",
    start: "Başla",
    your_result: "Nəticəniz",
    restart: "Təkrar oyna",
    questions: [
      { q: "Sən özünü necə hiss edirsən?", answers: ["Enerjili", "Sakit", "Qeyri-sabit"] },
      { q: "Ən çox nəyə vaxt ayırırsan?", answers: ["Oxumağa", "İdman etməyə", "Dostlarla vaxt keçirməyə"] },
      { q: "Yeni insanlarla tanış olmağın necədir?", answers: ["Asandır", "Nadir hallarda", "Çətin"] },
      { q: "Stresslə necə mübarizə aparırsan?", answers: ["Musiqi dinləyərək", "Dərin nəfəs alaraq", "Yalnız qalaraq"] },
      { q: "Hansı növ filmləri sevirsən?", answers: ["Komediya", "Drama", "Macəra"] },
      { q: "Boş vaxtını necə keçirirsən?", answers: ["Rəsm çəkirəm", "Kitab oxuyuram", "Yürüşə çıxıram"] },
      { q: "Sənin üçün ən vacib nədir?", answers: ["Ailə", "Karyera", "Azadlıq"] },
      { q: "Yeni fikirlərə açıqsan?", answers: ["Bəli, həmişə", "Bəzən", "Çox nadir"] },
      { q: "Dostların səni necə təsvir edir?", answers: ["Gülərüz", "Səbirli", "Əyləncəli"] },
      { q: "Səncə, həyatda ən önəmli şey nədir?", answers: ["Sevgi", "Hüzur", "Macəra"] },
    ],
    results: [
      { min: 10, max: 15, text: "Sən ruhən çox gənc və enerjilisin! 🎉" },
      { min: 16, max: 22, text: "Sən balanslı, sakit və düşüncəlisən. 😊" },
      { min: 23, max: 30, text: "Sən macərapərəst və ruhən yaşlı bir insansan! 🚀" },
    ],
  },

  en: {
    choose_language: "Choose Language",
    start: "Start",
    your_result: "Your Result",
    restart: "Restart",
    questions: [
      { q: "How do you feel?", answers: ["Energetic", "Calm", "Unstable"] },
      { q: "What do you spend most of your time on?", answers: ["Reading", "Exercising", "Spending time with friends"] },
      { q: "How easy is it for you to meet new people?", answers: ["Easy", "Rarely", "Difficult"] },
      { q: "How do you handle stress?", answers: ["Listening to music", "Deep breathing", "Being alone"] },
      { q: "What type of movies do you like?", answers: ["Comedy", "Drama", "Adventure"] },
      { q: "How do you spend your free time?", answers: ["Drawing", "Reading books", "Going for a walk"] },
      { q: "What is most important to you?", answers: ["Family", "Career", "Freedom"] },
      { q: "Are you open to new ideas?", answers: ["Yes, always", "Sometimes", "Very rarely"] },
      { q: "How would your friends describe you?", answers: ["Cheerful", "Patient", "Fun"] },
      { q: "What do you think is most important in life?", answers: ["Love", "Peace", "Adventure"] },
    ],
    results: [
      { min: 10, max: 15, text: "You are very young and energetic at heart! 🎉" },
      { min: 16, max: 22, text: "You are balanced, calm, and thoughtful. 😊" },
      { min: 23, max: 30, text: "You are adventurous and spiritually an older soul! 🚀" },
    ],
  },

  // Burada digər dillər (fr, es, tr, ru) üçün eyni formatda əlavə et
  fr: {
    choose_language: "Choisissez la langue",
    start: "Commencer",
    your_result: "Votre résultat",
    restart: "Recommencer",
    questions: [
      { q: "Comment vous sentez-vous ?", answers: ["Énergique", "Calme", "Instable"] },
      { q: "À quoi passez-vous le plus de temps ?", answers: ["Lecture", "Exercice", "Passer du temps avec des amis"] },
      { q: "Comment est-il facile pour vous de rencontrer de nouvelles personnes ?", answers: ["Facile", "Rarement", "Difficile"] },
      { q: "Comment gérez-vous le stress ?", answers: ["Écouter de la musique", "Respiration profonde", "Être seul"] },
      { q: "Quel type de films aimez-vous ?", answers: ["Comédie", "Drame", "Aventure"] },
      { q: "Comment passez-vous votre temps libre ?", answers: ["Dessiner", "Lire des livres", "Faire une promenade"] },
      { q: "Qu'est-ce qui est le plus important pour vous ?", answers: ["Famille", "Carrière", "Liberté"] },
      { q: "Êtes-vous ouvert aux nouvelles idées ?", answers: ["Oui, toujours", "Parfois", "Très rarement"] },
      { q: "Comment vos amis vous décriraient-ils ?", answers: ["Joyeux", "Patient", "Amusant"] },
      { q: "Qu'est-ce que vous pensez être le plus important dans la vie ?", answers: ["Amour", "Paix", "Aventure"] },
    ],
    results: [
      { min: 10, max: 15, text: "Vous êtes très jeune et énergique dans l'âme! 🎉" },
      { min: 16, max: 22, text: "Vous êtes équilibré, calme et réfléchi. 😊" },
      { min: 23, max: 30, text: "Vous êtes aventureux et spirituellement une âme plus âgée! 🚀" },
    ],
  },

  es: {
    choose_language: "Elige idioma",
    start: "Comenzar",
    your_result: "Tu resultado",
    restart: "Reiniciar",
    questions: [
      { q: "¿Cómo te sientes?", answers: ["Enérgico", "Calmado", "Inestable"] },
      { q: "¿En qué pasas la mayor parte del tiempo?", answers: ["Leyendo", "Haciendo ejercicio", "Pasando tiempo con amigos"] },
      { q: "¿Qué tan fácil es para ti conocer gente nueva?", answers: ["Fácil", "Raramente", "Difícil"] },
      { q: "¿Cómo manejas el estrés?", answers: ["Escuchando música", "Respiración profunda", "Estando solo"] },
      { q: "¿Qué tipo de películas te gustan?", answers: ["Comedia", "Drama", "Aventura"] },
      { q: "¿Cómo pasas tu tiempo libre?", answers: ["Dibujando", "Leyendo libros", "Saliendo a caminar"] },
      { q: "¿Qué es lo más importante para ti?", answers: ["Familia", "Carrera", "Libertad"] },
      { q: "¿Estás abierto a nuevas ideas?", answers: ["Sí, siempre", "A veces", "Muy raramente"] },
      { q: "¿Cómo te describirían tus amigos?", answers: ["Alegre", "Paciente", "Divertido"] },
      { q: "¿Qué crees que es lo más importante en la vida?", answers: ["Amor", "Paz", "Aventura"] },
    ],
    results: [
      { min: 10, max: 15, text: "¡Eres muy joven y enérgico de corazón! 🎉" },
      { min: 16, max: 22, text: "Eres equilibrado, tranquilo y reflexivo. 😊" },
      { min: 23, max: 30, text: "¡Eres aventurero y espiritualmente un alma mayor! 🚀" },
    ],
  },

  tr: {
    choose_language: "Dil seçin",
    start: "Başla",
    your_result: "Sonucun",
    restart: "Tekrar oyna",
    questions: [
      { q: "Kendini nasıl hissediyorsun?", answers: ["Enerjik", "Sakin", "Dengesiz"] },
      { q: "Zamanının çoğunu neye harcıyorsun?", answers: ["Okumaya", "Spor yapmaya", "Arkadaşlarla vakit geçirmeye"] },
      { q: "Yeni insanlarla tanışmak senin için nasıl?", answers: ["Kolay", "Nadiren", "Zor"] },
      { q: "Stresle nasıl başa çıkıyorsun?", answers: ["Müzik dinleyerek", "Derin nefes alarak", "Yalnız kalarak"] },
      { q: "Hangi tür filmleri seversin?", answers: ["Komedi", "Drama", "Macera"] },
      { q: "Boş zamanlarını nasıl geçiriyorsun?", answers: ["Resim yapıyorum", "Kitap okuyorum", "Yürüyüşe çıkıyorum"] },
      { q: "Senin için en önemli şey nedir?", answers: ["Aile", "Kariyer", "Özgürlük"] },
      { q: "Yeni fikirlere açık mısın?", answers: ["Evet, her zaman", "Bazen", "Çok nadiren"] },
      { q: "Arkadaşların seni nasıl tanımlar?", answers: ["Neşeli", "Sabırlı", "Eğlenceli"] },
      { q: "Sence hayatta en önemli şey nedir?", answers: ["Aşk", "Huzur", "Macera"] },
    ],
    results: [
      { min: 10, max: 15, text: "Ruhun çok genç ve enerjik! 🎉" },
      { min: 16, max: 22, text: "Dengeli, sakin ve düşüncelisin. 😊" },
      { min: 23, max: 30, text: "Macera düşkünü ve ruhen yaşlısın! 🚀" },
    ],
  },

  ru: {
    choose_language: "Выберите язык",
    start: "Начать",
    your_result: "Ваш результат",
    restart: "Повторить",
    questions: [
      { q: "Как вы себя чувствуете?", answers: ["Энергичный", "Спокойный", "Неустойчивый"] },
      { q: "На что вы тратите большую часть времени?", answers: ["Чтение", "Спорт", "Время с друзьями"] },
      { q: "Насколько легко вам знакомиться с новыми людьми?", answers: ["Легко", "Редко", "Трудно"] },
      { q: "Как вы справляетесь со стрессом?", answers: ["Слушая музыку", "Глубокое дыхание", "Оставаясь один"] },
      { q: "Какой жанр фильмов вы предпочитаете?", answers: ["Комедия", "Драма", "Приключения"] },
      { q: "Как вы проводите свободное время?", answers: ["Рисование", "Чтение книг", "Прогулки"] },
      { q: "Что для вас самое важное?", answers: ["Семья", "Карьера", "Свобода"] },
      { q: "Вы открыты для новых идей?", answers: ["Да, всегда", "Иногда", "Очень редко"] },
      { q: "Как ваши друзья вас описывают?", answers: ["Весёлый", "Терпеливый", "Весёлый"] },
      { q: "Что, по вашему мнению, самое важное в жизни?", answers: ["Любовь", "Покой", "Приключения"] },
    ],
    results: [
      { min: 10, max: 15, text: "Вы молоды и энергичны душой! 🎉" },
      { min: 16, max: 22, text: "Вы уравновешены, спокойны и задумчивы. 😊" },
      { min: 23, max: 30, text: "Вы любите приключения и духовно — старая душа! 🚀" },
    ],
  },
};

let currentLang = "az";
let currentQuestionIndex = 0;
let score = 0;

const langSelect = document.getElementById("language");
const startBtn = document.getElementById("start-btn");
const quizDiv = document.getElementById("quiz");
const languageDiv = document.getElementById("language-select");
const questionNumberDiv = document.getElementById("question-number");
const questionTextDiv = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const resultDiv = document.getElementById("result");
const resultTextDiv = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (languages[currentLang][key]) {
      el.textContent = languages[currentLang][key];
    }
  });
}

function startQuiz() {
  currentLang = langSelect.value;
  currentQuestionIndex = 0;
  score = 0;
  languageDiv.classList.add("hidden");
  quizDiv.classList.remove("hidden");
  resultDiv.classList.add("hidden");
  translatePage();
  showQuestion();
}

function showQuestion() {
  const q = languages[currentLang].questions[currentQuestionIndex];
  questionNumberDiv.textContent = `${currentQuestionIndex + 1}. ${currentLang === 'az' ? "Sual" : languages[currentLang].choose_language === "Choose Language" ? "Question" : "Question"}`;
  questionTextDiv.textContent = q.q;
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = answer;
    btn.onclick = () => {
      score += index + 1;  // A=1, B=2, C=3
      currentQuestionIndex++;
      if (currentQuestionIndex < languages[currentLang].questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersDiv.appendChild(btn);
  });
}

function showResult() {
  quizDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const result = languages[currentLang].results.find(
    r => score >= r.min && score <= r.max
  );
  resultTextDiv.textContent = result ? result.text : "";
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", () => {
  languageDiv.classList.remove("hidden");
  quizDiv.classList.add("hidden");
  resultDiv.classList.add("hidden");
});
