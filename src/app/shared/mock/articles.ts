declare function require(path: string): string;

export const articles = [
  {
    id: 1,
    title: '叮当家政（通州）开业酬宾',
    content: require('./articles/开业大吉/index.md'),
  },
];
