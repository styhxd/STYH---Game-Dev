import { PartnerConfig } from './types';

// O site principal da Holding
export const holdingData: PartnerConfig = {
  id: 'cria-prod',
  name: 'CRIA PRODUTORA',
  description: 'Holding & Produção Executiva',
  url: 'https://criaprod.com.br',
  logoPath: '/logo-cria-prod.svg',
  isMain: true,
};

// Os parceiros do ecossistema
export const partnersData: PartnerConfig[] = [
  {
    id: 'estudio-cria',
    name: 'ESTÚDIO CRIA',
    description: 'Produção audiovisual, animação e storytelling.',
    url: 'https://criaestudio.com.br',
    logoPath: '/logo-estudio-cria.svg',
  },
  {
    id: 'pinus',
    name: 'PINUS DEV',
    description: 'Engenharia de software e aplicativos de alta performance.',
    url: 'https://pinusdev.com.br',
    logoPath: '/logo-pinus.svg',
  },
  {
    id: 'ilustre',
    name: 'ILUSTRE DESIGN',
    description: 'Design estratégico, identidade visual e comunicação.',
    url: 'https://ilustredesign.com.br',
    logoPath: '/logo-ilustre.svg',
  }
];
