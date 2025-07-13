export const authors: IAuthor[] = [
  {
    id: 1,
    name: '🏆 Piyush Suthar',
    url: 'https://piyushsuthar.github.io/',
    github: 'https://github.com/PiyushSuthar',
    acknowledgement:
      'and his great 🚀 Windows 11 Web project 🚀 that inspired me to build this app. Thanks!',
  },
  {
    id: 2,
    name: '🏆 Om Singh',
    url: 'https://om-singh.github.io/',
    github: 'https://github.com/Jayom5797',
    acknowledgement:
      'U can find me on LinkedIn and Github',
  },
];
interface IAuthor {
  id: number;
  name: string;
  url: string;
  github: string | null;
  acknowledgement: string;
}
