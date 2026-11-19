const screens = [
  {label:'Central de Fornecedores', title:'Encontre fornecedores com mais facilidade.', copy:'Explore diferentes segmentos, descubra oportunidades de compra e encontre fornecedores em um só lugar.', file:'fornecedores'},
  {label:'Importadoras 25 de Março', title:'Oportunidades da 25 de Março, mais perto de você.', copy:'Explore importadoras, encontre contatos e organize seus fornecedores favoritos sem precisar pesquisar em vários lugares.', file:'importadoras'},
  {label:'Categorias', title:'Escolha seu nicho. Descubra novas possibilidades.', copy:'De bolsas e acessórios a papelaria, cosméticos e eletrônicos. Navegue pelas categorias e encontre fornecedores para o seu negócio.', file:'categorias'},
  {label:'Home', title:'Muito além dos fornecedores.', copy:'Tenha acesso a ferramentas para estruturar seu negócio, organizar sua gestão, calcular preços e contar com o apoio da Soph.', file:'home'},
];
const faqs = [
  { q: "O que está incluso no plano mensal?", a: "O plano mensal dá acesso à Central de Fornecedores com mais de 320 opções, categorias organizadas, Precificação, Soph — sua sócia digital, além de guias e ferramentas para ajudar na organização e nas decisões do seu negócio." },
  { q: "O que está incluso no plano anual?", a: "O plano anual inclui todos os recursos do plano mensal e também o Soph Gestão, além de oferecer melhor custo para quem deseja permanecer na plataforma por mais tempo." },
  { q: "O Soph Gestão está incluso em qual plano?", a: "O Soph Gestão está incluído no Plano Anual. No Plano Mensal, esse recurso não faz parte da assinatura." },
  { q: "O acesso é imediato?", a: "Sim. Após a confirmação do pagamento, você recebe acesso aos recursos incluídos no plano contratado." },
  { q: "Vou ter acesso aos fornecedores da plataforma?", a: "Sim. Os dois planos incluem acesso à Central de Fornecedores, com mais de 320 opções organizadas por diferentes categorias para facilitar sua pesquisa e comparação." },
  { q: "Os fornecedores são atualizados?", a: "Sim. Novos fornecedores são adicionados periodicamente, e os fornecedores já cadastrados também passam por revisões para manter as informações da Central atualizadas." },
  { q: "A Soph está incluída?", a: "Sim. A Soph está disponível nos dois planos para orientar você dentro da plataforma e ajudar com dúvidas e próximos passos relacionados ao seu negócio." },
  { q: "A plataforma também ajuda com MEI, marca e marketplaces?", a: "Sim. O EmpreendaJá reúne guias e orientações práticas sobre temas importantes para quem está começando ou estruturando um negócio, incluindo MEI, marca, identidade e vendas em marketplaces." },
  { q: "Tenho garantia?", a: "Sim. Você tem 7 dias para conhecer a plataforma. Se decidir não continuar dentro desse prazo, poderá solicitar o cancelamento conforme as condições da garantia." },
  { q: "Posso cancelar o plano mensal quando quiser?", a: "Sim. O plano mensal pode ser cancelado sem fidelidade, conforme as condições da assinatura." },
  { q: "Como falar com o suporte?", a: "Se precisar de ajuda, você pode entrar em contato com nossa equipe pelo WhatsApp." },
  { q: "É só uma lista de fornecedores?", a: "Não. A Central de Fornecedores é uma das áreas do EmpreendaJá. A plataforma também reúne recursos de precificação, organização, orientação com a Soph, guias e ferramentas para apoiar diferentes etapas do seu negócio." },
  { q: "Consigo usar mesmo se estiver começando do zero?", a: "Sim. O EmpreendaJá foi pensado também para quem está começando. Os recursos são organizados para facilitar os próximos passos, e a Soph pode ajudar você a encontrar orientações dentro da plataforma." },
];
const features = [
  "Central de Fornecedores com mais de 320 opções",
  "Categorias e nichos organizados",
  "Precificação",
  "Gestão do negócio — ferramentas para organizar sua operação",
  "Soph — assistente digital que orienta você dentro da plataforma",
  "Guias e ferramentas para quem empreende",
];
const BLACK_NOVEMBER = {
  originalPrice: 97,
  price: 67,
  savings: 30,
  discountPercent: 31,
  accessMonths: 12,
  validUntil: "2026-11-30",
  checkout: "https://pay.kiwify.com.br/cYf0nTs",
};

const formatCampaignPrice = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });