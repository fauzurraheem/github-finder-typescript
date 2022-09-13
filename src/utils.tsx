import { DataP } from "./components/context/github/GithubActions";

export interface Users {
  users: [];
  user:DataP;
  repos:RepoItem[];
  loading: boolean;
}

export interface getUser {
    id: number;
    login: string;
    avatar_url: string;
}

export interface RepoItem {
  id:number;
  name:string;
  description:string;
  html_url:string;
  forks:number;
  open_issues:number;
  watchers_count:number;
  stargazers_count:number;
}
