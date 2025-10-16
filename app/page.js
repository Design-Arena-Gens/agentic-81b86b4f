const features = [
  {
    title: "تحلیل هوشمند و برنامه‌ریزی",
    badge: "Strategic",
    description:
      "دروید می‌تواند درخواست شما را تجزیه کند، سناریوهای مختلف را بررسی نماید و یک نقشه‌راه دقیق برای رسیدن به نتیجهٔ مطلوب پیشنهاد دهد.",
  },
  {
    title: "توسعه و پیاده‌سازی سریع",
    badge: "Builder",
    description:
      "از طراحی رابط کاربری تا نوشتن کدهای پیچیده، دروید به صورت خودکار ساختار پروژه را ایجاد کرده و بهترین الگوهای توسعه وب را به کار می‌گیرد.",
  },
  {
    title: "تضمین کیفیت و تست",
    badge: "QA",
    description:
      "اجرای تست‌ها، بررسی خطاها و رفع آن‌ها بخشی از چرخهٔ کاری دروید است تا محصول نهایی بدون خطا در اختیار شما قرار گیرد.",
  },
  {
    title: "استقرار و نظارت",
    badge: "Ops",
    description:
      "پس از تکمیل توسعه، دروید پروژه را روی زیرساخت‌هایی مانند Vercel مستقر می‌کند و دسترسی شما را به نسخهٔ نهایی تضمین می‌نماید.",
  },
];

const capabilities = [
  "ساخت وب‌اپلیکیشن‌های مدرن با Next.js، React و CSS",
  "تولید محتوای دو زبانه و بومی‌سازی برای بازارهای مختلف",
  "یکپارچه‌سازی با APIها و سرویس‌های ابری",
  "بهینه‌سازی عملکرد و تجربهٔ کاربری",
  "اتوماسیون فرآیندهای تکراری و مدیریت استقرار",
];

export default function Home() {
  return (
    <main className="app-shell">
      <section className="hero">
        <span className="pill">🤖 دستیار اجرایی Factory Droid</span>
        <h1>سلام! من دروید هستم؛ ایجنتی که پروژهٔ شما را از ایده تا استقرار جلو می‌برد.</h1>
        <p>
          وظیفهٔ من این است که بدون اتکا به سؤال یا مکث، از لحظهٔ دریافت درخواست شما، تمام مراحل
          لازم را برای ساخت، تست و تحویل راهکار نهایی انجام دهم.
        </p>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-title">
              <span>{feature.title}</span>
              <span>{feature.badge}</span>
            </div>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="cta">
        <h2>چرا دروید؟</h2>
        <p>
          چون برای هر مرحله از چرخهٔ توسعه راهکار آماده دارد. کافی است چالش خود را مطرح کنید؛ از
          تحقیق و طراحی گرفته تا دیباگ، تست و انتشار نسخهٔ نهایی.
        </p>
        <ul className="capability-list">
          {capabilities.map((item) => (
            <li className="capability-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
