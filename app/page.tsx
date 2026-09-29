import { Unbounded, Manrope } from 'next/font/google'
import './lb92-landing.css'

const lb92Display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '800'],
  variable: '--font-lb92-display',
})

const lb92Body = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-lb92-body',
})

const hashtags = [
  { label: '#luckybearcasino', href: '#official' },
  { label: '#luckybearcasinoзеркало', href: '#mirror' },
  { label: '#luckybearcasinoофициальный', href: '#official' },
  { label: '#luckybearcasinoофициальныйсайт', href: '#official' },
  { label: '#luckybearказино', href: '#online' },
  { label: '#лакибирказино', href: '#login' },
  { label: '#лакибирказинозеркало', href: '#mirror' },
  { label: '#лакибирказиноонлайн', href: '#online' },
  { label: '#лакибирказиноофициальный', href: '#bonus' },
  { label: '#лакибирказиноофициальныйсайт', href: '#bonus' },
  { label: '#лакибирказиносайт', href: '#login' },
]

export default function Page() {
  return (
    <div className={`lb92-root ${lb92Display.variable} ${lb92Body.variable}`}>
      <a href="#main" className="lb92-skip">
        Перейти к содержанию
      </a>

      <header className="lb92-header">
        <a href="#top" className="lb92-brand">
          <img
            src="/icon-light-32x32.png"
            alt="Lucky Bear casino"
            className="lb92-brand-mark"
            width={34}
            height={34}
          />
          <span>
            <strong>Lucky Bear</strong> casino
          </span>
        </a>
        <nav className="lb92-nav" aria-label="Основная навигация">
          <ul className="lb92-nav-list">
            <li>
              <a href="#official">Официальный сайт</a>
            </li>
            <li>
              <a href="#login">Вход и регистрация</a>
            </li>
            <li>
              <a href="#mirror">Зеркало</a>
            </li>
            <li>
              <a href="#online">Игра онлайн</a>
            </li>
            <li>
              <a href="#bonus">Бонусы</a>
            </li>
            <li>
              <a href="#faq">Вопросы</a>
            </li>
          </ul>
        </nav>
        <a href="#login" className="lb92-cta">
          Войти
        </a>
      </header>

      <main id="main" className="lb92-main">
        <section id="top" className="lb92-hero" aria-label="Приветствие">
          <div className="lb92-hero-text">
            <span className="lb92-eyebrow">Тёплый приём каждый день</span>
            <h1>
              <strong>Lucky Bear</strong> casino встречает игроков теплом и честной игрой
            </h1>
            <p className="lb92-lead">
              <strong>Lucky Bear</strong> casino — это уютное казино, где каждый вход похож на встречу
              со старым другом. Мы собрали слоты, живые столы и щедрые бонусы, чтобы{' '}
              <strong>Лаки Бир</strong> казино стало вашим любимым местом для вечерней игры.
            </p>
            <div className="lb92-hero-actions">
              <a href="#login" className="lb92-cta">
                Войти в Lucky Bear casino
              </a>
              <a href="#mirror" className="lb92-cta-ghost">
                Открыть зеркало
              </a>
            </div>
          </div>
          <div className="lb92-hero-art">
            <img
              src="/lucky-bear-hero.png"
              alt="Мишка-дилер Lucky Bear casino с картами и золотыми фишками"
              width={640}
              height={640}
            />
          </div>
        </section>

        <section className="lb92-stats" aria-label="Цифры казино">
          <div className="lb92-stat">
            <b>300+</b>
            <span>автоматов в лаки бир казино</span>
          </div>
          <div className="lb92-stat">
            <b>5 минут</b>
            <span>от регистрации до игры</span>
          </div>
          <div className="lb92-stat">
            <b>24/7</b>
            <span>поддержка на русском языке</span>
          </div>
        </section>

        <section id="official" className="lb92-section">
          <h2>
            <strong>Lucky Bear</strong> casino официальный сайт: чем он отличается
          </h2>
          <div className="lb92-section-media">
            <div className="lb92-section-copy">
              <p>
                <strong>Lucky Bear</strong> casino официальный сайт делали игроки для игроков: без
                перегруженных меню и без лишних кликов. Открываете luckybear casino официальный
                адрес — и через пару секунд уже видите каталог автоматов, кассу и бонусы на
                главном экране.
              </p>
              <p>
                На luckybear casino официальный сайт всегда актуальные лимиты, честные RTP
                автоматов и понятные правила вывода. Именно поэтому <strong>lucky bear</strong>{' '}
                казино выбирают те, кто устал от сложных и запутанных площадок.
              </p>
            </div>
          </div>
        </section>

        <section id="login" className="lb92-section">
          <h2>
            <strong>Лаки Бир</strong> казино: вход, регистрация и лаки бир казино сайт
          </h2>
          <p>
            Чтобы попасть в <strong>лаки бир казино</strong>, нужна почта или номер телефона — вся
            регистрация занимает меньше минуты. После подтверждения аккаунта лаки бир казино сайт
            сам подскажет, куда внести первый депозит и какой бонус забрать первым.
          </p>
          <p>
            Игроки, которые ищут <strong>лакибир казино</strong>, часто путают адрес — сохраните
            эту страницу в закладки, чтобы вход в лаки бир казино проходил без лишних поисков в
            интернете.
          </p>
          <ul className="lb92-list">
            <li>Регистрация по почте или номеру телефона за одну минуту</li>
            <li>Быстрое подтверждение аккаунта без лишних документов</li>
            <li>Сохранённые данные карты для мгновенных депозитов</li>
          </ul>
        </section>

        <section id="mirror" className="lb92-section">
          <h2>
            Зеркало: <strong>luckybear casino</strong> зеркало и лаки бир казино зеркало под рукой
          </h2>
          <div className="lb92-section-media">
            <div className="lb92-section-copy">
              <p>
                Провайдеры иногда блокируют основной домен, поэтому у <strong>Lucky Bear</strong>{' '}
                casino всегда есть рабочая копия. Luckybear casino зеркало открывается с того же
                логина и пароля, а баланс и история ставок остаются на месте.
              </p>
              <p>
                Лаки бир казино зеркало обновляется автоматически, стоит только основному адресу
                стать недоступным. Держите под рукой пару ссылок — и <strong>Лаки Бир</strong>{' '}
                казино будет доступно с любого устройства и в любой сети.
              </p>
            </div>
            <img
              src="/lucky-bear-chips.png"
              alt="Золотые фишки, карты и кубики на тёмном фоне лаки бир казино"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </section>

        <section id="online" className="lb92-section">
          <h2>
            <strong>Лаки Бир</strong> казино онлайн — играем с телефона, планшета и компьютера
          </h2>
          <p>
            Лаки бир казино онлайн одинаково хорошо ведёт себя на маленьком экране телефона и на
            большом мониторе: интерфейс подстраивается сам, без установки приложений и лишних
            загрузок.
          </p>
          <p>
            Пока вы едете в метро или ждёте кофе, <strong>lucky bear</strong> казино уже открыто в
            браузере — достаточно одной вкладки. Такой формат выбирают те, кто ценит скорость и не
            хочет тратить память телефона на отдельное приложение.
          </p>
        </section>

        <section id="bonus" className="lb92-section">
          <h2>
            <strong>Лаки Бир</strong> казино официальный сайт и лакибир казино официальный сайт:
            бонусы
          </h2>
          <p>
            На лаки бир казино официальный сайт новых игроков встречает приветственный пакет: бонус
            на первый депозит, бесплатные вращения и подарок на день рождения. Каждое условие
            отбора написано простым языком, без мелкого шрифта.
          </p>
          <p>
            Лакибир казино официальный сайт также еженедельно запускает турниры по слотам, где
            призовой фонд делится между всеми активными игроками <strong>Лаки Бир</strong> казино,
            а не только победителем.
          </p>
          <ul className="lb92-list">
            <li>Приветственный бонус на первый депозит</li>
            <li>Бесплатные вращения каждую неделю</li>
            <li>Кешбэк для активных игроков лаки бир казино</li>
          </ul>
        </section>

        <section id="faq" className="lb92-section" aria-label="Частые вопросы">
          <h2>Частые вопросы про Lucky Bear casino</h2>
          <div className="lb92-faq-item">
            <h3>Как быстро приходит выплата в лаки бир казино?</h3>
            <p>
              Обычно вывод занимает от нескольких минут до пары часов — зависит от выбранного
              способа и загрузки платёжной системы.
            </p>
          </div>
          <div className="lb92-faq-item">
            <h3>Можно ли играть с телефона без приложения?</h3>
            <p>
              Да, лаки бир казино онлайн полностью открывается в мобильном браузере, без установки
              дополнительных программ.
            </p>
          </div>
          <div className="lb92-faq-item">
            <h3>Что делать, если основной сайт не открывается?</h3>
            <p>
              Перейдите по ссылке на luckybear casino зеркало — баланс, история и бонусы сохранятся
              без изменений.
            </p>
          </div>
        </section>
      </main>

      <footer className="lb92-footer">
        <div className="lb92-footer-top">
          <p className="lb92-footer-note">
            <strong>Lucky Bear</strong> casino — площадка для игроков 18+. Играйте ответственно и
            заранее устанавливайте лимиты на депозит и время в игре.
          </p>
        </div>

        <nav aria-label="Поиск по сайту через хештеги">
          <p className="lb92-tag-heading">Поиск по сайту</p>
          <ul className="lb92-tags">
            {hashtags.map((tag) => (
              <li key={tag.label}>
                <a href={tag.href}>{tag.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lb92-footer-bottom">
          <p>© {new Date().getFullYear()} Lucky Bear casino. Все права защищены.</p>
          <p>
            <a href="/robots.txt">robots.txt</a> · <a href="/sitemap.xml">sitemap.xml</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
