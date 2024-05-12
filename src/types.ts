export interface Blog {
    id: string;
    title: string;
    published: boolean;
    content: string;
    author: {
      name: string;
    };
  }