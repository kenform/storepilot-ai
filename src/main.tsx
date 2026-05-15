import React,{useMemo,useState}from'react';import{createRoot}from'react-dom/client';import'./index.css';

const products=[['Urban Runner','кроссовки для города','12 900 ₽','Hot match'],['SoftShell Jacket','лёгкая куртка','18 400 ₽','AI pick'],['Daily Backpack','рюкзак 22L','8 700 ₽','Best value'],['Studio Hoodie','плотное худи','6 900 ₽','New']];
const filters=['Все','Город','Путешествия','Спорт','Минимализм'];
const stats=[['84%','AI match rate'],['12','товаров в подборке'],['3m','средний путь до корзины']];

function App(){
 const[active,setActive]=useState('Все');const[cart,setCart]=useState(2);
 const brief=useMemo(()=>`Здравствуйте! Хочу подобрать товары в StorePilot AI. Стиль: ${active}. В корзине: ${cart} товара. Нужна короткая рекомендация и финальная подборка.`,[active,cart]);
 const copy=async()=>{try{await navigator.clipboard.writeText(brief)}catch{}};
 return <main className="px-4 py-4 sm:px-6 lg:px-8">
  <header className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.6rem] border border-line bg-white/80 p-3 shadow-card backdrop-blur">
   <a href="#" className="flex items-center gap-3 no-underline"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-lg font-black text-lime">SP</span><span><b className="block tracking-[.28em]">STOREPILOT</b><small className="font-bold text-muted">AI commerce assistant</small></span></a>
   <nav className="hidden gap-6 text-sm font-black text-muted md:flex"><a href="#catalog">Каталог</a><a href="#assistant">AI-подбор</a><a href="#flow">Order flow</a></nav>
   <a href="#" onClick={(e)=>e.preventDefault()} className="rounded-2xl bg-ink px-5 py-3 text-sm font-black text-lime no-underline">Demo CTA</a>
  </header>

  <section className="mx-auto grid max-w-7xl gap-6 py-10 lg:grid-cols-[1fr_.8fr] lg:py-16">
   <div className="rounded-[2rem] border border-line bg-white p-5 shadow-soft sm:p-8">
    <p className="text-xs font-black uppercase tracking-[.42em] text-lime">E-commerce · AI assistant · cart flow</p>
    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[.96] tracking-tight sm:text-6xl lg:text-7xl">Магазин, который помогает выбрать товар, а не просто показывает каталог.</h1>
    <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">StorePilot AI — демонстрационный e-commerce кейс: карточки товаров, фильтры, AI-подбор, корзина, подготовленный order brief и лёгкий frontend без тяжёлых библиотек.</p>
    <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="#catalog" className="rounded-2xl bg-lime px-6 py-4 text-center font-black text-ink no-underline">Смотреть каталог</a><a href="#assistant" className="rounded-2xl border border-line bg-cream px-6 py-4 text-center font-black text-ink no-underline">AI-помощник</a></div>
    <div className="mt-8 grid gap-3 sm:grid-cols-3">{stats.map(([a,b])=><div className="rounded-3xl border border-line bg-cream p-5" key={a}><b className="text-3xl font-black">{a}</b><p className="mt-1 text-sm font-bold text-muted">{b}</p></div>)}</div>
   </div>
   <aside id="assistant" className="rounded-[2rem] bg-ink p-5 text-white shadow-soft sm:p-7">
    <div className="flex items-center justify-between"><p className="text-xs font-black uppercase tracking-[.36em] text-lime">AI shopper</p><span className="rounded-full bg-lime/15 px-3 py-1 text-xs font-black text-lime">online</span></div>
    <div className="mt-6 space-y-4 text-sm font-bold leading-7"><div className="rounded-3xl bg-white/10 p-4">Я помогу выбрать товар под задачу, бюджет, стиль и сценарий использования.</div><div className="ml-auto max-w-[85%] rounded-3xl bg-lime p-4 text-ink">Нужен городской набор: кроссовки, рюкзак и худи.</div><div className="rounded-3xl bg-white/10 p-4">Собрал подборку и подготовил brief для менеджера/корзины.</div></div>
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-black uppercase tracking-[.28em] text-lime">Prepared order</p><p className="mt-3 text-sm leading-7 text-white/80">{brief}</p></div>
   </aside>
  </section>

  <section id="catalog" className="mx-auto max-w-7xl py-8">
   <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.42em] text-lime">Smart catalog</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Подборка товаров с быстрым AI-контекстом.</h2></div><div className="flex flex-wrap gap-2">{filters.map(f=><button key={f} onClick={()=>setActive(f)} className={`rounded-full border px-4 py-2 text-sm font-black ${active===f?'border-ink bg-ink text-lime':'border-line bg-white text-muted'}`}>{f}</button>)}</div></div>
   <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map((p,i)=><article className="card rounded-[1.7rem] border border-line bg-white p-4 shadow-card" key={p[0]}><div className="relative h-56 overflow-hidden rounded-[1.3rem] bg-cream"><div className="absolute left-5 top-5 rounded-full bg-ink px-3 py-1 text-xs font-black text-lime">{p[3]}</div><div className="absolute inset-x-10 bottom-8 h-24 rounded-[2rem] border border-ink/10 bg-white shadow-card"/><div className="absolute left-1/2 top-16 h-24 w-24 -translate-x-1/2 rounded-full bg-lime"/><div className="absolute inset-x-16 bottom-16 h-5 rounded-full bg-ink/80"/></div><h3 className="mt-5 text-xl font-black">{p[0]}</h3><p className="mt-2 text-sm font-bold text-muted">{p[1]}</p><div className="mt-5 flex items-center justify-between"><b className="text-lg">{p[2]}</b><button onClick={()=>setCart(cart+1)} className="rounded-2xl bg-ink px-4 py-2 text-sm font-black text-lime">В корзину</button></div></article>)}</div>
  </section>

  <section id="flow" className="mx-auto grid max-w-7xl gap-5 py-12 lg:grid-cols-[.85fr_1fr]">
   <div><p className="text-xs font-black uppercase tracking-[.42em] text-lime">Order flow</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Путь от интереса до заявки понятен менеджеру.</h2><p className="mt-5 text-base leading-8 text-muted">Проект показывает не только витрину, но и коммерческую механику: товарный интерес превращается в структурированный заказ.</p></div>
   <div className="grid gap-3 sm:grid-cols-2">{['AI уточняет задачу','Каталог фильтруется под сценарий','Корзина собирает намерение','Brief готов к CRM/Telegram'].map((x,i)=><div className="rounded-3xl border border-line bg-white p-5 shadow-card" key={x}><span className="text-xs font-black text-lime">0{i+1}</span><h3 className="mt-5 text-xl font-black">{x}</h3><p className="mt-3 text-sm leading-7 text-muted">Frontend-demo логика, которую позже можно подключить к API, CRM или backend.</p></div>)}</div>
  </section>

  <section className="mx-auto max-w-7xl pb-16"><div className="rounded-[2rem] bg-ink p-6 text-center text-white shadow-soft sm:p-10"><p className="text-xs font-black uppercase tracking-[.42em] text-lime">Contact placeholder</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Готовы собрать AI-commerce сценарий?</h2><p className="mx-auto mt-4 max-w-2xl text-white/70">Кнопка ниже пока заглушка: реальные Telegram-ссылки не используются.</p><a href="#" onClick={(e)=>{e.preventDefault();copy()}} className="mt-7 inline-flex rounded-2xl bg-lime px-7 py-4 font-black text-ink no-underline">Скопировать brief</a></div></section>
 </main>
}
createRoot(document.getElementById('root')!).render(<App/>);
