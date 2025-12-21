export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-warm-white)]/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-[var(--color-accent)]">
            gotoAndPlay
          </a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#service" className="hover:text-[var(--color-accent)] transition-colors">サービス</a>
            <a href="#works" className="hover:text-[var(--color-accent)] transition-colors">実績</a>
            <a href="#profile" className="hover:text-[var(--color-accent)] transition-colors">プロフィール</a>
            <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">お問い合わせ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('images/hero-bg.jpg')" }}
        />
        {/* オーバーレイ（画像がない場合はベタ塗り） */}
        <div className="absolute inset-0 bg-[var(--color-warm-white)]/65" />

        <div className="relative max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-[var(--color-accent)]">IT</span>の知識がなくても大丈夫です！
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-light)] mb-4 leading-relaxed">
            Webサイト・アプリの制作から運用まで
            <br className="hidden sm:block" />
            ITの裏方業務を<span className="font-bold text-[var(--color-text)]">まるっとお任せ</span>ください。
          </p>
          <p className="text-sm text-[var(--color-text-light)] mb-10">
            <span className="font-bold">人間</span>×<span className="font-bold">IT</span>で、柔軟性と血の通った仕事をお届けします。
          </p>
          <a
            href="#contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-16 px-6 bg-[var(--color-warm-gray)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">サービス</h2>
          {/* <p className="text-center text-[var(--color-text-light)] mb-16">
            お客様のアイデアをカタチにします
          </p> */}

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Webサイト制作</h3>
              <p className="text-sm text-[var(--color-text-light)]">
                コーポレートサイト、LP、アプリケーションサイトなど、目的に合わせて最適なサイトを制作します。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">アプリ開発</h3>
              <p className="text-sm text-[var(--color-text-light)]">
                iOS/Androidアプリの企画から開発、リリースまで一貫してサポートします。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">運用・保守</h3>
              <p className="text-sm text-[var(--color-text-light)]">
                リリース後の更新・改善・トラブル対応まで、長期的にサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">実績</h2>
          {/* <p className="text-center text-[var(--color-text-light)] mb-16">
            これまでに制作したプロダクト
          </p> */}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Work 1: 座席予想掲示板 */}
            <a
              href="https://zasekiyosou.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[var(--color-warm-gray)] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* TODO: 画像を差し替え → publicimages/work-zaseki.jpg */}
              <div className="aspect-video bg-gradient-to-br from-rose-300 to-rose-400 relative overflow-hidden group/img">
                <img
                  src="images/zasekiyosou-img.jpg"
                  alt="座席予想掲示板"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  座席予想掲示板
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mb-3">
                  ライブのチケット番号を集計し、座席ブロックを可視化するWebサービス。多言語対応（日本語・韓国語・中国語）でPWAにも対応。
                </p>
                <span className="text-xs text-[var(--color-accent)] font-medium">
                  Webサービス →
                </span>
              </div>
            </a>

            {/* Work 2: こころのリビング */}
            <a
              href="https://apps.apple.com/jp/app/%E3%81%93%E3%81%93%E3%82%8D%E3%81%AE%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0/id6755748925"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[var(--color-warm-gray)] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* TODO: 画像を差し替え → publicimages/work-kokoro.jpg */}
              <div className="aspect-video bg-gradient-to-br from-teal-400 to-teal-500 relative overflow-hidden">
                <img
                  src="images/kokoro-living-img.jpg"
                  alt="こころのリビング"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  こころのリビング
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mb-3">
                  メンタルヘルスに特化したSNSアプリ。診断名や治療法でタグ付けし、同じ経験を持つ人と繋がれるコミュニティ。
                </p>
                <span className="text-xs text-[var(--color-accent)] font-medium">
                  iOSアプリ →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-16 px-6 bg-[var(--color-warm-gray)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">プロフィール</h2>
          {/* <p className="text-center text-[var(--color-text-light)] mb-16">
            gotoAndPlayについて
          </p> */}

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                {/* TODO: 顔写真に差し替え */}
                <img src="images/face-img.png" alt="Yuta TRM" className="rounded-full"/>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                  <h3 className="text-xl font-bold">Yuta TRM</h3>
                  <a
                    href="https://x.com/UT_TRM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded-full bg-[var(--color-text)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://note.com/murakumo/n/nd9e61617807f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded-full bg-[var(--color-text)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-colors"
                    aria-label="note"
                  >
                    <span className="text-white text-sm font-bold leading-none pb-[3px]">n</span>
                  </a>
                </div>
                <p className="text-sm text-[var(--color-accent)] mb-6">gotoAndPlay 代表</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">経歴</h4>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                    高校時代にWindowsのメモ帳でホームページを作り始め、Web制作の世界へ。新卒でIT系受託制作会社に入社し、大手通信会社のメディアサイトなどの開発・運用を経験。現在はフィンテック企業に勤務しながら、個人事業として副業も行っています。エンジニア歴は長いですが、論理よりも感情を大切に、人に寄り添ったものづくりを心がけています。
                  </p>
                </div>

                {/* スキル - TODO: 内容を更新 */}
                <div>
                  <h4 className="font-medium mb-3">スキル</h4>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {/* TODO: スキルを更新 */}
                    {["React", "Next.js", "TypeScript", "React Native", "Supabase", ,"HTML", "CSS", "UI/UX"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-[var(--color-text-light)] mb-10">
            ご相談・お見積りは無料です。
            <br />
            お気軽にお問い合わせください。
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8jaC04WoxN9VUPzwnbiH5ITDc9Lg22t7BMgF2bFt6Q3KAUQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-10 py-4 rounded-full transition-colors text-lg"
          >
            お問い合わせフォームへ
          </a>

          <p className="mt-6 text-sm text-[var(--color-text-light)]">
            {/* TODO: GoogleフォームのURLを設定後、この行を削除 */}
            ※ Googleフォームが開きます
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--color-text-light)]">
            © {new Date().getFullYear()} gotoAndPlay. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
