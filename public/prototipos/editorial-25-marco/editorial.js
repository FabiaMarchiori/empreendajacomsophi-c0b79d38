const tabs = document.querySelector('.screen-tabs');
const panel = document.querySelector('#screen-panel');
const controls = screens.map((screen,index) => {
  const button = document.createElement('button');
  Object.assign(button,{type:'button',id:'screen-'+index,textContent:screen.label});
  button.setAttribute('role','tab');
  button.setAttribute('aria-controls',panel.id);
  button.addEventListener('click',()=>choose(index));
  tabs.append(button);
  return button;
});
function choose(index, focus = false) {
  const screen=screens[index];
  controls.forEach((button,i)=>{
    button.setAttribute('aria-selected',String(i===index));
    button.tabIndex=i===index?0:-1;
  });
  panel.setAttribute('aria-labelledby',controls[index].id);
  panel.innerHTML=`<div class="screen-copy"><h3>${screen.title}</h3><p>${screen.copy}</p></div><div class="screen-display"><img src="assets/tour-tablet-${screen.file}.png" alt="Tablet com a tela de ${screen.label}" width="1122" height="1402" decoding="async"></div>`;
  if(focus) controls[index].focus();
}
tabs.addEventListener('keydown',e=>{
  const i=controls.indexOf(e.target);
  if(i<0) return;
  const next={ArrowRight:(i+1)%controls.length,ArrowLeft:(i+controls.length-1)%controls.length,Home:0,End:controls.length-1}[e.key];
  if(next===undefined)return;
  e.preventDefault();
  choose(next,true);
});
choose(1);

const currency=formatCampaignPrice;
const monthly='https://pay.kiwify.com.br/gNROnVP';
const date=BLACK_NOVEMBER.validUntil.split('-').reverse().join('/');
document.querySelector('#price-plans').innerHTML=`
<article class="plan monthly"><h3>Plano Mensal</h3><p>Para quem prefere começar mês a mês.</p>
<div class="price"><strong>R$ 47</strong><span>/mês</span></div>
<p>Pagamento mensal</p><p>Soph Gestão exclusivo do Plano Anual.</p>
<a class="buy secondary" href="${monthly}" target="_blank" rel="noopener noreferrer">Assinar Mensal</a></article>
<article class="plan annual"><div class="plan-line"><h3>Plano Anual</h3><span class="sale">Black Friday</span></div><p>Para quem quer mais economia no acesso.</p>
<div class="price prior"><span>De <s>${currency(BLACK_NOVEMBER.originalPrice)}</s></span></div>
<div class="price"><strong>${currency(BLACK_NOVEMBER.price)}</strong><span>/ano</span></div>
<p class="saving">Economize ${currency(BLACK_NOVEMBER.savings)} · ${BLACK_NOVEMBER.discountPercent}% de desconto</p>
<p>Pagamento anual · ${BLACK_NOVEMBER.accessMonths} meses de acesso.</p>
<p>Inclui Soph Gestão — sistema de gestão do negócio.</p>
<a class="buy primary" href="${BLACK_NOVEMBER.checkout}" target="_blank" rel="noopener noreferrer">Assinar Plano Anual</a>
<small>Oferta válida até ${date}.</small></article>`;

document.querySelector('#common-benefits').innerHTML=features.map(value=>`<li>${value}</li>`).join('');
const faqOrder=[3,4,0,1,2,8,9,10,5,6,7,11,12];
document.querySelector('#faq-items').innerHTML=faqOrder.map(index=>`<details><summary>${faqs[index].q}</summary><p>${faqs[index].a}</p></details>`).join('');
