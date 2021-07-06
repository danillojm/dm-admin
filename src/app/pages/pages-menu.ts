import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Compras',
    icon: 'shopping-bag',
    link: 'compras',
    home: true,
  },
  {
    title: 'Vendas',
    icon: 'shopping-cart',
    link: 'vendas',
    home: true,
  },

  {
    title: 'FEATURES',
    group: true,
  },

  {
    title: 'Clientes',
    icon: 'person-add',
    link: 'clientes',
  },


  {
    title: 'Produtos',
    icon: 'smartphone',
    link: 'produtos',
  },

  {
    title: 'Caixa',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },

  {
    title: 'Usuários',
    icon: 'people',
    link: '/pages/iot-dashboard',
  },

];
