
import {env} from '../env'

console.log(process.env)
console.log(env)
const getApiUrl = () => {
  return env.REACT_APP_API_URL;
};

const getGraphqlUrl = () => {
  return env.REACT_APP_API_GRAPHQL_URL;
};

const getImageUrl = (path) => {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }
    path = path.trim();
    return `${process.env.REACT_APP_API_URL}/${path}`;
  };

export { getApiUrl, getGraphqlUrl, getImageUrl };
