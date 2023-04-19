import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { env } from "../env";
const { io } = require("socket.io-client");
const socket = io(env.REACT_APP_API_URL);

const GET_LAST_SEENS = gql`
  query {
    lastSeens(sort: "publishedAt:desc") {
      data {
        attributes {
          nameId
          lastSeen
          pos {
            lat
            lon
          }
          type
          counter
          payload
        }
      }
    }
  }
`;

const convertToDataArray = (jsonData) => {
  const dataArray = jsonData.lastSeens.data.map((item) => {
    const { attributes } = item;
    return {
      nameId: attributes.nameId,
      lastSeen: attributes.lastSeen,
      pos: attributes.pos,
      type: attributes.type,
      counter: attributes.counter,
      payload: attributes.payload,
    };
  });
  return dataArray;
};

const useLastSeens = () => {
    const { loading, error, data, refetch } = useQuery(GET_LAST_SEENS);
  
    useEffect(() => {
      const socket = io(env.REACT_APP_API_URL);
  
      socket.on("connect", () => {
        socket.on("last-seen:update", (data) => {
          refetch();
        });
      });
  
      return () => {
        socket.disconnect();
      };
    }, [refetch]);
  
    const lastSeens = data ? convertToDataArray(data) : [];
  
    return { loading, error, lastSeens };
  };

export default useLastSeens;
