const whatsappNumber = '5541996725546'

// Retrato usado no hero e na seção Sobre. Trocar aqui atualiza os dois.
const portrait = '/images/daniela-martins.jpg'

export const siteContent = {
  brand: {
    shortName: 'DM',
    name: 'Daniela Martins da Silva',
    role: 'Nutricionista · CRN 20539',
  },
  navigation: [
    { href: '#atuacao', label: 'Atuação' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#competencias', label: 'Competências' },
    { href: '#faq', label: 'Perguntas' },
  ],
  contact: {
    whatsappNumber,
    whatsappLabel: '(41) 99672-5546',
    whatsappUrl: `https://wa.me/${whatsappNumber}`,
    email: 'danimartinssilva697@gmail.com',
    emailUrl: 'mailto:danimartinssilva697@gmail.com',
    location: 'São José dos Pinhais e Curitiba — PR',
  },
  hero: {
    eyebrow: 'Nutricionista · CRN 20539',
    title: 'Segurança alimentar e qualidade em cada refeição servida.',
    description:
      'Nutricionista formada pela Universidade Positivo, com atuação em controle higiênico-sanitário, boas práticas de fabricação e gestão da qualidade em Unidades de Alimentação e Nutrição.',
    image: {
      src: portrait,
      alt: 'Retrato profissional de Daniela Martins da Silva',
    },
    highlights: [
      'Controle higiênico-sanitário conforme RDC e POPs',
      'Nutrição escolar e Educação Alimentar e Nutricional',
      'Produção de refeições em larga escala',
    ],
    primaryCta: 'Falar no WhatsApp',
    secondaryCta: 'Ver trajetória',
  },
  stats: [
    {
      value: 4,
      suffix: '',
      label: 'experiências em nutrição e alimentação coletiva',
    },
    {
      value: 100,
      suffix: 'h',
      label: 'de monitoria acadêmica em Técnica e Dietética e Segurança Alimentar',
    },
    {
      value: 2026,
      suffix: '',
      label: 'graduação concluída na Universidade Positivo',
      plain: true,
    },
  ],
  areas: {
    eyebrow: 'Áreas de atuação',
    title: 'O trabalho técnico que sustenta uma refeição segura',
    description:
      'Atuação construída em unidades reais de produção — universidades, indústrias e a rede escolar municipal.',
    items: [
      {
        title: 'Controle higiênico-sanitário',
        text:
          'Verificação de conformidades e garantia das boas práticas de fabricação segundo a legislação sanitária vigente (RDC e POPs).',
      },
      {
        title: 'Gestão da qualidade em UAN',
        text:
          'Monitoramento de temperaturas, padronização de processos produtivos e apoio à gestão da qualidade da unidade.',
      },
      {
        title: 'Nutrição escolar e EAN',
        text:
          'Planejamento de cardápios da alimentação escolar, relatórios técnicos de visitas e oficinas de Educação Alimentar e Nutricional.',
      },
      {
        title: 'Alimentação coletiva',
        text:
          'Acompanhamento de recebimento, armazenamento, produção e distribuição de refeições em larga escala.',
      },
    ],
  },
  about: {
    eyebrow: 'Sobre',
    title: 'Base técnica, atenção ao processo e trabalho em equipe.',
    description:
      'Sou Daniela Martins da Silva, nutricionista formada pela Universidade Positivo, com atuação em segurança alimentar, controle higiênico-sanitário e gestão da qualidade em Unidades de Alimentação e Nutrição.',
    paragraphs: [
      'Minha trajetória foi construída dentro da operação: acompanhei o recebimento, o armazenamento, a produção e a distribuição de refeições em unidades de grande porte, e conduzi oficinas de Educação Alimentar e Nutricional na rede escolar de São José dos Pinhais.',
      'Trabalho com foco na melhoria contínua dos processos, na conformidade com a legislação sanitária e na relação próxima com as equipes de produção — que são quem faz a boa prática acontecer todos os dias.',
    ],
    education: [
      {
        title: 'Bacharelado em Nutrição',
        place: 'Universidade Positivo — Campus Ecoville',
        detail: 'Concluído em Junho/2026 · Noturno / Presencial',
      },
      {
        title: 'Técnico em Administração',
        place: 'Colégio Estadual Costa Viana',
        detail: 'Integrado ao Ensino Médio · 2018 – 2021',
      },
    ],
    monitoring: [
      'Monitoria em Técnica e Dietética · 60h',
      'Monitoria em Segurança Alimentar e Nutricional · 40h',
    ],
    image: {
      src: portrait,
      alt: 'Daniela Martins da Silva, nutricionista',
      badge: 'Daniela Martins da Silva',
      caption: 'Nutricionista · CRN 20539 · São José dos Pinhais, PR',
    },
  },
  experience: {
    eyebrow: 'Trajetória',
    title: 'Experiência profissional',
    items: [
      {
        role: 'Assistente de Nutrição',
        company: "Grupo Oliveira's — Unidade PUC",
        period: 'Abril/2026 – Atual',
        current: true,
        bullets: [
          'Responsável pelo controle higiênico-sanitário da unidade, garantindo conformidade com as boas práticas de fabricação e a legislação sanitária vigente.',
          'Monitoramento de temperaturas, verificação de conformidades e apoio à gestão da qualidade dos processos produtivos.',
        ],
      },
      {
        role: 'Estágio Obrigatório em Nutrição',
        company: 'Sodexo — Unidade Electrolux Guabirotuba',
        period: '3 meses · 2025/2026',
        bullets: [
          'Vivência em alimentação coletiva de grande porte, acompanhando recebimento, armazenamento, produção e distribuição de refeições.',
          'Apoio ao controle higiênico-sanitário e à padronização de processos conforme boas práticas.',
          'Acompanhamento da rotina do nutricionista responsável técnico na gestão da UAN.',
        ],
      },
      {
        role: 'Estagiária em Nutrição · Merenda Escolar',
        company: 'Prefeitura Municipal de São José dos Pinhais',
        period: 'Fev/2025 – Dez/2025',
        bullets: [
          'Recebimento e conferência de amostras e produtos junto a empresas terceirizadas e à agricultura familiar.',
          'Planejamento de cardápios da alimentação escolar e elaboração de relatórios técnicos de visitas.',
          'Condução de oficinas de Educação Alimentar e Nutricional com alunos e de introdução alimentar com bebês.',
        ],
      },
      {
        role: 'Estagiária de Nutrição',
        company: "Risotolândia (It's Cool) — Unidade Positivo Internacional",
        period: 'Out/2023 – Out/2024',
        bullets: [
          'Supervisão da qualidade dos setores produtivos e controle de temperaturas dos equipamentos.',
          'Verificação de conformidades na abertura dos buffets e conferência de produtos para produção.',
          'Acompanhamento dos horários de funcionamento e distribuição das refeições.',
        ],
      },
      {
        role: 'Aprendiz de Logística',
        company: 'Oerlikon Balzers',
        period: 'Jan/2022 – Abr/2023',
        bullets: [
          'Controle de planilhas de rotas e transferências de notas fiscais, com acompanhamento de liberações e recebimento de pedidos.',
          'Contato com transportadoras, separação de materiais para rotas e organização de arquivos fiscais.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Competências',
    title: 'Como eu trabalho no dia a dia',
    items: [
      'Bom relacionamento interpessoal',
      'Gestão de equipe',
      'Proatividade e melhoria contínua de processos',
      'Iniciativa para propor e implementar melhorias',
      'Pontualidade e comprometimento com as entregas',
    ],
    extras: [
      { label: 'Idiomas', value: 'Português nativo · Inglês básico' },
      { label: 'Informática', value: 'Pacote Office' },
      { label: 'Mobilidade', value: 'CNH categoria AB' },
    ],
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'O que costumam me perguntar',
    items: [
      {
        question: 'Qual é a sua área de atuação?',
        answer:
          'Segurança alimentar, controle higiênico-sanitário e gestão da qualidade em Unidades de Alimentação e Nutrição, além de nutrição escolar e Educação Alimentar e Nutricional.',
      },
      {
        question: 'O que é uma UAN?',
        answer:
          'Unidade de Alimentação e Nutrição é a estrutura que produz refeições em larga escala — restaurantes corporativos, universidades, escolas e indústrias. É nesse ambiente que atuo, cuidando da conformidade sanitária e da qualidade dos processos produtivos.',
      },
      {
        question: 'Que trabalho você já desenvolveu em nutrição escolar?',
        answer:
          'Na Prefeitura de São José dos Pinhais, atuei no recebimento e conferência de amostras junto a empresas terceirizadas e à agricultura familiar, no planejamento de cardápios, na elaboração de relatórios técnicos de visitas e na condução de oficinas de EAN com alunos e de introdução alimentar com bebês.',
      },
      {
        question: 'Você atende pacientes em consultório?',
        answer:
          'Meu foco atual é a atuação técnica em segurança alimentar e alimentação coletiva. Para conversar sobre oportunidades, projetos de Educação Alimentar e Nutricional ou consultoria em boas práticas, o contato direto é pelo WhatsApp.',
      },
      {
        question: 'Onde você atua?',
        answer:
          'São José dos Pinhais e Curitiba, no Paraná. Tenho CNH categoria AB e disponibilidade para deslocamento entre unidades.',
      },
    ],
  },
  cta: {
    eyebrow: 'Contato',
    title: 'Vamos conversar sobre o seu projeto ou a sua unidade.',
    text:
      'Oportunidades profissionais, consultoria em boas práticas ou projetos de Educação Alimentar e Nutricional — o caminho mais rápido é o WhatsApp.',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Daniela Martins da Silva · Nutricionista CRN 20539`,
  },
}
