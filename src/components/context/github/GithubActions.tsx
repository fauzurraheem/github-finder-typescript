import { RepoItem } from "../../../utils";

interface Data {
  items: [];
  incomplete_results: boolean;
  total_count: number
 
}

export type DataP = {
  name: string
  type: string
  avatar_url:string
  location: string
  bio:string
  blog:string
  twitter_username:string | null
  login: string
  html_url:string
  followers:number
  following:number
  public_repos:string
  public_gists:number
  hireable:null
}



//get users
export const searchUsers = async (text:string):Promise<Data> => {
  const params = new URLSearchParams({
      q: text,
  })
  const response = await fetch(`https://api.github.com/search/users?${params}`)
  const data:Data = await response.json()
  return data
}

//Get  user
export const getUser = async (loginN:string):Promise<DataP> => {
  const response = await fetch(`https://api.github.com/users/${loginN}`)

  if (response.status === 404){
      window.location.href = '/notfound'

      let data:DataP = {name:'',
        type:'',
        avatar_url:'',
        location:'',
        bio:'',
        blog:'',
        twitter_username: null,
        login:'',
        html_url:'',
        followers:NaN,
        following:NaN,
        public_repos:'',
        public_gists: NaN,
        hireable:null};
      return data
  } else {
      const data:DataP = await response.json()
      return data
  }

}

//Get  users
export const getUserRepos = async (login:string) => {

  const response = await fetch(`https://api.github.com/users/${login}/repos`)
  const reposit:RepoItem[] = await response.json()
 return reposit
}

