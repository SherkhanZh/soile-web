// 1) Your translations object
const translations = {
  en: {
    nav: {
      about:       "About Us",
      tariffs:     "Tariffs and limits for Subscribers",
      limits:      "User Limits",
      instructions:"Instructions",
      payment:     "Payment Links"
    },
    about: {
      title: "The SOILEPHONE video call service is aimed at providing video communication to closed user groups",
      desc:  "Terminals for video calls have been installed in the institutions of the Committee of the Penitentiary System of the Ministry of Internal Affairs of the Republic of Kazakhstan and military units of the National Guard of the Republic of Kazakhstan.",
      desc2: "Users are given free ID cards for registration and making video calls",
      desc3: "To receive video calls, the subscriber needs to download the SOILEPHONE app from the AppStore or PlayMarket."
    },
    tariff: {
        tariff: "Tariff",
        price: "Price, tenge",
        incoming: "Incoming video calls, minutes",
        incomingMessage: "Incoming video messages, units",
        incomingVoice: "Incoming voice messages, units",
        incomingText: "Outgoing text messages, units",
        outgoing: "Outgoing video messages, units\n*The number of characters in one message is no more than 1000",
        outgoingImage: "Sending photos, units\n*The duration of one video message is no more than two minutes.",
        basic: "Basic",
        optimal: "Optimal",
        advanced: "Advanced",
        ultra: "Ultra",
        description: "The validity period of any tariff is 30 calendar days from the date of payment.\nAfter the expiration of this period, all resources are reset to zero – you must re-pay the Tariff.\nEach User is allowed to make 120 minutes of video calls per month. Therefore, we recommend that you choose a tariff based on the number of Subscribers that the User will call.\nIf the User will only call you, then choose the 'Extended' tariff for 120 minutes.\nIf the User has several Subscribers saved, then choose the 'Basic' or 'Optimal' Tariff"
    },
    user: {
        description: "Each User is allowed to make 120 minutes of video calls per month. \nBased on an appeal from the administration of an institution or military unit, this limit may be increased.\nIn addition to making a video call, the User can send the Subscriber a voice message lasting no more than 5 minutes, or a video message lasting no more than 2 minutes.\nThe number of messages sent by the User depends on the tariff paid by the Subscriber."
    },
    instructions: {
        videoInstructionSubscriber: "Video instructions (Subscriber) ",
        instructionSubscriber: "Instructions (Subscriber)",
        videoInstructionUser: "Video instructions (User)",
        instructionUser: "Instructions (User)",
    },
    payment: {
        description: "You can pay for the tariff using the following methods:",
        payment1: "In the SOILEPHONE application using the Tarlan Payments payment system (instructions) ",
        payment2: "Through the Kaspi app (instructions)",
        payment3: "Through the call center operator (write to the operator)"
    },
    footer: {
      offer:     "Public Offer",
      agreement: "User Agreement",
      contacts:  "Contacts"
    }
  },





  ru: {
    nav: {
      about:       "О нас",
      tariffs:     "Тарифы и лимиты для Абонента",
      limits:      "Лимиты для Пользователя",
      instructions:"Инструкция",
      payment:     "Ссылки на оплату"
    },
    about: {
      title: "Сервис видео-звонков SOILEPHONE направлен на обеспечение видео-связью закрытых групп пользователей.",
      desc:  "В учреждениях КУИС и воинских частях Национальной Гвардии Республики Казахстан установлены терминалы для видео-звонков.",
      desc2: "Пользователям бесплатно выдаются ID-карты для регистрации и осуществления видео-звонков.",
      desc3: "Абоненту, для приема видео-звонков, необходимо скачать приложение SOILEPHONE из AppStore или PlayMarket."
    },
    tariff: {
        tariff: "Тариф",
        price: "Цена, тенге",
        incoming: "Входящие видео-звонки, минут",
        incomingMessage: "Входящие видео-сообщения, штук",
        incomingVoice: "Входящие голосовые сообщения, штук",
        incomingText: "Исходящие текстовые сообщения, штук\n*Количество символов в одном сообщении – не более 1000",
        outgoing: "Исходящие видео- сообщения, штук\n*Продолжительность одного видео-сообщения - не более двух минут",
        outgoingImage: "Отправка фото, штук",
        basic: "Базовый",
        optimal: "Оптимальный",
        advanced: "Расширенный",
        ultra: "Ультра",
        description: "Срок действия любого тарифа – 30 календарных дней с момента оплаты.\nПосле истечения данного периода, все ресурсы обнуляются – необходимо повторно оплатить Тариф.\nКаждому Пользователю разрешается осуществлять 120 минут видео-звонков в месяц. Поэтому рекомендуем Вам выбирать тариф с учетом количества Абонентов, которым будет звонить Пользователь.\nЕсли Пользователь будет звонить только Вам, то выбирайте тариф «Расширенный» на 120 минут.\nЕсли у Пользователя будет сохранено несколько Абонентов, то выбирайте Тариф «Базовый» или Тариф «Оптимальный»"
    },
    user: {
        description: "Каждому Пользователю разрешается осуществлять 120 минут видео-звонков в месяц. \nНа основании обращения администрации учреждения или воинской части данный лимит может быть увеличен.\nКроме осуществления видео-звонка, Пользователь может отправить Абоненту голосовое сообщение, продолжительностью не более 5ти минут, или видео-сообщение, продолжительностью не более 2х минут.\nКоличество сообщений, отправляемых Пользователем, зависит от тарифа, оплаченного Абонентом."
    },
    instructions: {
        videoInstructionSubscriber: "Видео-инструкция (Абонент)",
        instructionSubscriber: "Инструкция (Абонент)",
        videoInstructionUser: "Видео-инструкция (Пользователь)",
        instructionUser: "Инструкция (Пользователь)",
    },
    payment: {
        description: "Оплатить тариф Вы можете следующими способами:",
        payment1: "В приложении SOILEPHONE с использованием платежной системы Tarlan Payments (инструкция)",
        payment2: "Через приложение Kaspi (инструкция)",
        payment3: "Через оператора колл-центра (написать оператору)"
    },
    footer: {
      offer:     "Публичная оферта",
      agreement: "Пользовательское соглашение",
      contacts:  "Контакты"
    }
  },





  kz: {
    nav: {
      about:       "Біз туралы",
      tariffs:     "Абонент үшін тарифтер мен лимиттер",
      limits:      "Пайдаланушы үшін шектеулер",
      instructions:"Нұсқаулар",
      payment:     "Төлем сілтемелері"
    },
    about: {
      title: "SOILEPHONE бейне қоңырау қызметі пайдаланушылардың жабық топтарын бейне байланыспен қамтамасыз етуге бағытталған.",
      desc:  "ҚАЖК мекемелерінде және Қазақстан Республикасы Ұлттық ұланының әскери бөлімдерінде бейне-қоңырауларға арналған терминалдар орнатылған.",
      desc2: "Пайдаланушыларға бейне қоңырауларды тіркеу және жүзеге асыру үшін тегін ID-карталар беріледі.",
      desc3: "Абонент бейне қоңырауларды қабылдау үшін AppStore немесе PlayMarket-тен SOILEPHONE қосымшасын жүктеп алуы керек."
    },
    tariff: {
        tariff: "Тариф",
        price: "Бағасы, теңге",
        incoming: "Кіріс бейне қоңыраулар, минут",
        incomingMessage: "Кіріс бейне хабарламалар, дана",
        incomingVoice: "Кіріс дауыстық хабарламалар, дана",
        incomingText: "Шығыс мәтіндік хабарламалар, дана",
        outgoing: "Шығыс бейне хабарламалар, дана\n*Бір хабарламадағы таңбалар саны - 1000-нан аспайды",
        outgoingImage: "Фото жіберу, дана\n*Бір бейне хабарламаның ұзақтығы - екі минуттан аспайды",
        basic: "Негізгі",
        optimal: "Оңтайлы",
        advanced: "Кеңейтілген",
        ultra: "Ультра",
        description: "Кез келген тарифтің қолданылу мерзімі – төлем жасалған сәттен бастап 30 күнтізбелік күн.\nОсы кезең аяқталғаннан кейін барлық ресурстар нөлге айналады – тарифті қайта төлеу қажет.\nӘр пайдаланушыға айына 120 минуттық бейне қоңыраулар шалуға рұқсат етіледі. Сондықтан пайдаланушы қоңырау шалатын абоненттердің санын ескере отырып, тарифті таңдауды ұсынамыз.\nЕгер пайдаланушы сізге ғана қоңырау шалса, онда 120 минутқа 'Kеңейтілген' тарифті таңдаңыз.\nЕгер пайдаланушыда бірнеше абонент сақталса, онда 'Hегізгi' тарифті немесе 'Oңтайлы' тарифті таңдаңыз"
    },
    user: {
        description: "Әр пайдаланушыға айына 120 минуттық бейне қоңыраулар шалуға рұқсат етіледі.\nМекеме әкімшілігінің немесе әскери бөлімнің өтініші негізінде бұл лимит ұлғайтылуы мүмкін.\nБейне-қоңырау шалудан басқа, Пайдаланушы абонентке ұзақтығы 5 минуттан аспайтын дауыстық хабарлама немесе ұзақтығы 2 минуттан аспайтын бейне-хабарлама жібере алады.\nПайдаланушы жіберген хабарламалардың саны абонент Төлеген тарифке байланысты."
    },
    instructions: {
        videoInstructionSubscriber: "Бейне нұсқаулық  (Абонент)",
        instructionSubscriber: "Нұсқаулық (Абонент)",
        videoInstructionUser: "Бейне нұсқаулық  (Пайдаланушы)",
        instructionUser: "Нұсқаулық (Пайдаланушы) ",
    },
    payment: {
        description: "Сіз тарифті келесі жолдармен төлей аласыз:",
        payment1: "Tarlan Payments төлем жүйесін қолданатын SOILEPHONE қосымшасында (Нұсқаулық)",
        payment2: "Kaspi қосымшасы арқылы (Нұсқаулық)",
        payment3: "Байланыс орталығының операторы арқылы (операторға жазыңыз)"
    },
    footer: {
      offer:     "Қоғамдық ұсыныс",
      agreement: "Қолданушы келісімі",
      contacts:  "Байланыс"
    }
  }
};

// 2) Helpers
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const parts = key.split(".");
    let txt = translations[lang];
    parts.forEach(p => { if (txt) txt = txt[p]; });
    if (txt) el.textContent = txt;
  });
}

function updateLangSwitcher(lang) {
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

// 3) Init on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // a) Restore or default language
  const savedLang = localStorage.getItem('lang') || 'en';
  applyTranslations(savedLang);
  updateLangSwitcher(savedLang);

  // b) Wire up the three language spans
  document.querySelectorAll('.lang-option').forEach(el => {
    el.addEventListener('click', () => {
      const lang = el.dataset.lang;
      if (!translations[lang]) return;
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
      updateLangSwitcher(lang);
    });
  });
});



