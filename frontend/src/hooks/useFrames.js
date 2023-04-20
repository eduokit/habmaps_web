// useFrames.js
import { useQuery, gql } from '@apollo/client';

const FRAMES_QUERY = gql`
  query {
    frames(sort: "publishedAt:desc", pagination: { limit: -1 }) {
      data {
        attributes {
          publishedAt
          frame {
            hab {
              hid
              pos {
                lat
                lon
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
    }
  }
`;

export const useFrames = () => {
  const { data, error, loading } = useQuery(FRAMES_QUERY);

  return { data: data?.frames, error, loading };
};
