declare function require(path: string): string;

export const articles = [
  {
    id: 1,
    content: require('./articles/开业大吉/index.md'),
  },
];
