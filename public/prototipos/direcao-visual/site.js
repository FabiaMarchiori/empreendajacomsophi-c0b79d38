const assets = 'assets/';
const checkoutAnnual = 'https://pay.kiwify.com.br/cYf0nTs';
const checkoutMonthly = 'https://pay.kiwify.com.br/gNROnVP';
const support = 'https://wa.me/5511983348749?text=Pagina%20de%20vendas';
const arrow = '<span aria-hidden="true">↗</span>';
const next = '<span aria-hidden="true">→</span>';
const intro = 'Encontre importadoras e fornecedores da 25 de Março de forma mais rápida, organizada e segura.';
const heading = 'Seu próximo <em>fornecedor</em> pode estar aqui.';
const trust = ['Fornecedores verificados', 'Acesso imediato', '7 dias de garantia'];
const screens = [
  {label:'Central de Fornecedores', title:'Encontre fornecedores com mais facilidade.', copy:'Explore diferentes segmentos, descubra oportunidades de compra e encontre fornecedores em um só lugar.', file:'fornecedores'},
  {label:'Importadoras 25 de Março', title:'Oportunidades da 25 de Março, mais perto de você.', copy:'Explore importadoras, encontre contatos e organize seus fornecedores favoritos sem precisar pesquisar em vários lugares.', file:'importadoras'},
  {label:'Categorias', title:'Escolha seu nicho. Descubra novas possibilidades.', copy:'De bolsas e acessórios a papelaria, cosméticos e eletrônicos. Navegue pelas categorias e encontre fornecedores para o seu negócio.', file:'categorias'},
  {label:'Home', title:'Muito além dos fornecedores.', copy:'Tenha acesso a ferramentas para estruturar seu negócio, organizar sua gestão, calcular preços e contar com o apoio da Soph.', file:'home'},
];
const benefits = () => '<ul class="benefits">'+trust.map(text=>'<li><span aria-hidden="true">✓</span>'+text+'</li>').join('')+'</ul>';
const link = (url, label, kind='primary', external=false) => `<a class="button ${kind}" href="${url}" ${external?'target="_blank" rel="noopener noreferrer"':''}>${label} ${external?arrow:next}</a>`;
const heroCta = () => link('#planos','Quero acessar os fornecedores');
const photo = (name,alt,w,h,className='') => `<img class="${className}" src="${assets+name}.png" alt="${alt}" width="${w}" height="${h}" decoding="async">`;
const heroPhoto = () => photo('hero-tablet-home','Tablet mostrando a página inicial do EmpreendaJá com Soph',2172,724,'hero-art');
const screen = item => photo('tour-tablet-'+item.file,'Tela de '+item.label,1122,1402,'screen-art');
const nav = () => `<header class="site-header"><div class="wrap nav"><a class="brand" href="#inicio" aria-label="EmpreendaJá com Soph — início">${photo('logo','EmpreendaJá com Soph',300,140)}</a><nav aria-label="Navegação principal"><a href="#ecossistema">Plataforma</a><a href="#planos">Planos</a><a class="support" href="${support}" target="_blank" rel="noopener noreferrer">Suporte ${arrow}</a></nav></div></header>`;
const footer = () => `<footer class="wrap footer"><a href="#inicio">EmpreendaJá com Soph</a><a href="${support}" target="_blank" rel="noopener noreferrer">Falar com o suporte ${arrow}</a></footer>`;
const frame = (type, body) => `<div class="site ${type}">${nav()}<main>${body}</main>${footer()}</div>`;
const tourTitle = () => '<h2>Conheça a plataforma por dentro</h2>';
const offer = () => `<section class="offer" aria-labelledby="offer-title"><div class="wrap offer-grid">
  <div class="offer-copy"><p class="kicker">Black Friday</p><h2 id="offer-title">Seu ano de oportunidades <em>começa agora.</em></h2>
  <p class="offer-desc"><span class="only-desktop">Entre na plataforma com a oferta de Black Friday e tenha acesso a fornecedores, categorias e ferramentas para comprar melhor.</span><span class="only-mobile">Acesse fornecedores da 25 de Março com uma condição especial.</span></p></div>
  ${photo('black-friday-sacolas','Sacolas Fornecedores da 25 de Março e etiqueta Black Friday',2172,724,'offer-art')}
  <div class="offer-action"><div class="plan-label">Plano anual <span>31% OFF</span></div><div class="offer-price"><s>R$ 97,00</s><strong>R$ 67,00</strong></div>
  <p>12 meses de acesso. Economize R$ 30,00.</p>${link(checkoutAnnual,'Garantir minha vaga','primary',true)}
  <small>Oferta válida até 30/11/2026.</small></div>
  </div></section>`;
const plans = () => `<section id="planos" class="purchase wrap"><h2>Escolha como você quer acessar a plataforma.</h2>
  <div class="plans"><div><h3>Plano Mensal</h3><p><strong>R$ 47</strong> /mês</p>${link(checkoutMonthly,'Assinar Mensal','outline',true)}</div>
  <div><h3>Plano Anual</h3><p><strong>R$ 67,00</strong> /ano</p><p>Inclui Soph Gestão — sistema de gestão do negócio</p>${link(checkoutAnnual,'Assinar Plano Anual','primary',true)}</div></div>
</section>`;
const editorial = () => frame('editorial',`<section id="inicio" class="wrap editorial-hero"><div class="editorial-intro"><div><h1>${heading}</h1></div><div class="hero-copy"><p>${intro}</p>${heroCta()}</div></div>${heroPhoto()}${benefits()}</section>
<section id="ecossistema" class="wrap editorial-tour"><div class="section-head">${tourTitle()}</div><div class="editorial-features">${[screens[1],screens[0]].map(item=>`<article>${screen(item)}<div><p class="kicker">${item.label}</p><h3>${item.title}</h3><p>${item.copy}</p></div></article>`).join('')}</div></section>${offer()}${plans()}`);
const tabs = () => `<div class="tabs" role="tablist" aria-label="Telas da plataforma">${screens.map((item,i)=>`<button type="button" role="tab" id="screen-tab-${i}" aria-controls="screen-panel" aria-selected="${i===1}" tabindex="${i===1?0:-1}" data-screen="${i}">${item.label}</button>`).join('')}</div>`;
const panel = item => `<div class="screen-copy"><h3>${item.title}</h3><p>${item.copy}</p></div>${screen(item)}`;
const product = () => frame('product',`<section id="inicio" class="wrap hero-grid"><div><h1>${heading}</h1><p>${intro}</p></div>${heroPhoto()}<div class="hero-action">${heroCta()}${benefits()}</div></section>
<section id="ecossistema" class="product-tour"><div class="wrap"><div class="section-head">${tourTitle()}</div>${tabs()}<div id="screen-panel" class="screen-panel" role="tabpanel" tabindex="0" aria-labelledby="screen-tab-1">${panel(screens[1])}</div></div></section>${offer()}${plans()}`);
const showcase = () => frame('showcase',`<section id="inicio" class="showcase-hero"><div class="wrap hero-grid"><div><h1>${heading}</h1><p>${intro}</p></div>${heroPhoto()}<div class="hero-action">${heroCta()}${benefits()}</div></div></section>
<section id="ecossistema" class="wrap showcase-tour"><div class="section-head">${tourTitle()}<p>${screens[0].copy}</p></div><div class="showcase-proof"><div><blockquote>“O material é excelente! Extremamente organizado e com a relação dos melhores fornecedores. Amei demais! O atendimento também é excelente.”</blockquote><p>Alik Nunes</p></div>${screen(screens[0])}</div></section>${offer()}${plans()}`);
const variants = [editorial, product, showcase];

function activateScreen(index, focus) {
  const panelNode = document.getElementById('screen-panel');
  if (!panelNode) return;
  document.querySelectorAll('[data-screen]').forEach(tab => {
    const active = Number(tab.dataset.screen) === index;
    tab.setAttribute('aria-selected', active);
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
  panelNode.innerHTML = panel(screens[index]);
  panelNode.setAttribute('aria-labelledby', 'screen-tab-'+index);
}
document.addEventListener('click', event => {
  const tab = event.target.closest('[data-screen]');
  if (tab) activateScreen(Number(tab.dataset.screen), false);
});
document.addEventListener('keydown', event => {
  const tab = event.target.closest('[data-screen]');
  if (!tab) return;
  const position = Number(tab.dataset.screen);
  const targets = {ArrowLeft:(position+screens.length-1)%screens.length,ArrowRight:(position+1)%screens.length,Home:0,End:screens.length-1};
  if (!Object.hasOwn(targets,event.key)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  activateScreen(targets[event.key], true);
});
