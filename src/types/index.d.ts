export interface Category {
  _id: string;
  slug: string;
  title: string;
  img?: string;
  posts?: Post[];
}

export interface Post {
  _id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img?: string;
  views: number;
  catSlug: string;
  cat: Category[];
  userEmail: string;
  user: User;
  comments: Comment[];
}

export interface Comment {
  _id: string;
  createdAt: Date;
  desc: string;
  userEmail: string;
  user?: User;
  postSlug: string;
  post?: Post;
}

export interface User {
  id: string;
  name?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  createdAt: Date;
  updatedAt: Date;

  // Custom
  posts?: Post[];
  Comments?: Comment[];
}

export interface HomeProps {
  searchParams: Record<string, string | string[]>;
}
