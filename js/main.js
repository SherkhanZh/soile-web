// 1) Your translations object
const translations = {
  en: {
    nav: {
      about:       "About Us",
      tariffs:     "Tariffs and limits for Subscribers",
      limits:      "User Limits",
      instructions:"Instructions",
      payment:     "Payment Links",
      main: "Soilephone - Home"
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
      contacts:  "Contacts",
      address: "Kazakhstan, North Kazakshtan Region, Petropavlovsk, Batyr Bayan str, building 11, postal code 150000"
    }
  },





  ru: {
    nav: {
      about:       "О нас",
      tariffs:     "Тарифы и лимиты для Абонента",
      limits:      "Лимиты для Пользователя",
      instructions:"Инструкция",
      payment:     "Ссылки на оплату",
      main: "Soilephone - Главная"
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
      contacts:  "Контакты",
      address: "Казахстан, Северо-Казахстанская область, город Петропавловск, улица Батыр Баян, здание 11, почтовый индекс 150000"
    }
  },





  kk: {
    nav: {
      about:       "Біз туралы",
      tariffs:     "Абонент үшін тарифтер мен лимиттер",
      limits:      "Пайдаланушы үшін шектеулер",
      instructions:"Нұсқаулар",
      payment:     "Төлем сілтемелері",
      main: "Soilephone - Басты"
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
      contacts:  "Байланыс",
      address: "Қазақстан, Солтүстік Қазақстан облысы, Петропавл қаласы, Батыр Баян көшесі, 11 ғимарат, пошта индексі 150000"
    }
  }
};


// 2) Core helpers
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

async function fetchWebviewLink(slug, lang) {
  try {
    const res  = await fetch(`http://91.147.92.65/api/webview-links/${slug}?lang=${lang}`);
    const json = await res.json();
    if (json.success && json.data && json.data.url) {
      return { url: json.data.url, name: json.data.name };
    }
  } catch (e) {
    console.error('Fetch error', slug, e);
  }
  return null;
}

async function updatePaymentLinks(lang) {
  console.log(`⚙️ updatePaymentLinks( ${lang} )`);

  const items = [
    { id: 'kaspi-payment-instructions', slug: 'kaspi_payment_instruction' },
    { id: 'tarlan-payment-instructions', slug: 'tarlan_payment_instruction' }
  ];

  for (let {id, slug} of items) {
    const el = document.getElementById(id);
    console.log(` • element #${id}:`, el);
    if (!el) {
      console.warn(`   → no element with id="${id}" found—check your HTML`);
      continue;
    }

    console.log(`   → fetching slug "${slug}"?lang=${lang}`);
    const data = await fetchWebviewLink(slug, lang);
    console.log(`   ← fetchWebviewLink returned:`, data);

    if (data && data.url) {
      console.log(`   → setting href of #${id} to`, data.url);
      el.href        = data.url;
      el.textContent = data.name;
    } else {
      console.warn(`   → no URL in response for slug "${slug}".`);
    }
  }
}


async function updateFooterLinks(lang) {
  // public offer
  const offer = await fetchWebviewLink('offer_agreement', lang);
  const offerEl = document.getElementById('offer-link');
  if (offer && offerEl) {
    offerEl.href        = offer.url;
    offerEl.textContent = offer.name;
  }

  // user agreement
  const agr = await fetchWebviewLink('user_agreement', lang);
  const agrEl = document.getElementById('agreement-link');
  if (agr && agrEl) {
    agrEl.href        = agr.url;
    agrEl.textContent = agr.name;
  }

  // user instruction (if you have this in your HTML)
  const usr = await fetchWebviewLink('user_instruction', lang);
  const usrEl = document.getElementById('user-instructions');
  if (usr && usrEl) {
    usrEl.href        = usr.url;
    usrEl.textContent = usr.name;
  }

  // subscriber instruction (note the spelling here must match your HTML!)
  const sub = await fetchWebviewLink('subscriber_instruction', lang);
  const subEl = document.getElementById('subscriber-instructions');
  if (sub && subEl) {
    subEl.href        = sub.url;
    subEl.textContent = sub.name;
  }
}

// … after your updateFooterLinks(lang) declaration …

async function updateUserInstructionVideos(lang) {
  const apiLang = lang;
//   const endpoints = [
//     `http://91.147.92.65/api/webview-links/subscriber_video_instruction?${apiLang}`,
//     `http://91.147.92.65/api/webview-links/user_video_instruction?${apiLang}`
//   ];

  const container = document.getElementById("user-instructions-videos");
  if (!container) return;
  container.innerHTML = ''; // clear old videos

    try {
      const res  = await fetch(`http://91.147.92.65/api/webview-links/user_video_instruction?${lang}`);
      const json = await res.json();
      if (json.success && json.data && json.data.url) {
        // convert normal YouTube URL to embed form
        const embedUrl = json.data.url.replace('watch?v=', 'embed/');
        const wrapper = document.createElement('div');
        wrapper.className = 'video-wrapper';
        wrapper.innerHTML = `
          <iframe
            src="${embedUrl}"
            title="${json.data.name}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>`;
        container.appendChild(wrapper);
      }
    } catch (err) {
      console.error('Instruction video fetch failed:', err);
    }
}

async function updateInstructionVideos(lang) {
  const apiLang = lang;
//   const endpoints = [
//     `http://91.147.92.65/api/webview-links/subscriber_video_instruction?${apiLang}`,
//     `http://91.147.92.65/api/webview-links/user_video_instruction?${apiLang}`
//   ];

  const container = document.getElementById("instructions-videos");
  if (!container) return;
  container.innerHTML = ''; // clear old videos

    try {
      const res  = await fetch(`http://91.147.92.65/api/webview-links/subscriber_video_instruction?${lang}`);
      const json = await res.json();
      if (json.success && json.data && json.data.url) {
        // convert normal YouTube URL to embed form
        const embedUrl = json.data.url.replace('watch?v=', 'embed/');
        const wrapper = document.createElement('div');
        wrapper.className = 'video-wrapper';
        wrapper.innerHTML = `
          <iframe
            src="${embedUrl}"
            title="${json.data.name}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>`;
        container.appendChild(wrapper);
      }
    } catch (err) {
      console.error('Instruction video fetch failed:', err);
    }
}


// 3) Kick everything off once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';

  // Initial render
  applyTranslations( savedLang );
  updateLangSwitcher( savedLang );
  updateFooterLinks( savedLang );
  updateInstructionVideos( savedLang );
  updateUserInstructionVideos( savedLang );
  updatePaymentLinks( savedLang );    // ← add this

  // When the user clicks ҚАЗ/РУС/ENG
  document.querySelectorAll('.lang-option').forEach(el => {
    el.addEventListener('click', async () => {
      const L = el.dataset.lang;
      if (!translations[L]) return;
      localStorage.setItem('lang', L);

      applyTranslations( L );
      updateLangSwitcher( L );
      await updateFooterLinks( L );
      await updateInstructionVideos( L );
      await updateUserInstructionVideos (L );
      await updatePaymentLinks( L );   // ← and add this
    });
  });
});





