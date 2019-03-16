declare function require(path: string): string;

export const articles = [
  {
    id: 1,
    icon: '',
    title: '叮当家政（通州）开业酬宾',
    content: require('./articles/开业大吉/index.md'),
  },
  {
    id: 2,
    icon: 'help_outline',
    title: '常识：怎么做家务可以保护腰椎？',
    content: require('./articles/怎么做家务可以保护腰椎/index.md'),
  },
];
