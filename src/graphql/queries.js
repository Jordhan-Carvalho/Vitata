/* eslint-disable */
// this is an auto generated file. This will be overwritten

import gql from "graphql-tag";

export const getComment = gql`
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      owner
      product {
        id
        title
        condition
        description
        district
        category
        quantity
        market {
          id
          name
          banner
          displayImage
          description
          category
          owner
          createdAt
        }
        files {
          bucket
          region
          key
        }
        price
        shipped
        owner
        comments {
          nextToken
        }
        createdAt
        queryName
      }
      createdAt
    }
  }
`;
export const listComments = gql`
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        owner
        product {
          id
          title
          condition
          description
          district
          category
          quantity
          price
          shipped
          owner
          createdAt
          queryName
        }
        createdAt
      }
      nextToken
    }
  }
`;
export const getMarket = gql`
  query GetMarket($id: ID!) {
    getMarket(id: $id) {
      id
      name
      banner
      displayImage
      products {
        items {
          id
          title
          condition
          description
          district
          category
          quantity
          price
          shipped
          owner
          createdAt
          queryName
        }
        nextToken
      }
      description
      category
      owner
      createdAt
    }
  }
`;
export const listMarkets = gql`
  query ListMarkets(
    $filter: ModelMarketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        banner
        displayImage
        products {
          nextToken
        }
        description
        category
        owner
        createdAt
      }
      nextToken
    }
  }
`;
export const getProduct = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      condition
      description
      district
      category
      quantity
      market {
        id
        name
        banner
        displayImage
        products {
          nextToken
        }
        description
        category
        owner
        createdAt
      }
      files {
        bucket
        region
        key
      }
      price
      shipped
      owner
      comments {
        items {
          id
          content
          owner
          createdAt
        }
        nextToken
      }
      createdAt
      queryName
    }
  }
`;
export const listProducts = gql`
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        condition
        description
        district
        category
        quantity
        market {
          id
          name
          banner
          displayImage
          description
          category
          owner
          createdAt
        }
        files {
          bucket
          region
          key
        }
        price
        shipped
        owner
        comments {
          nextToken
        }
        createdAt
        queryName
      }
      nextToken
    }
  }
`;
export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone
      registered
      orders {
        items {
          id
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const productsByDate = gql`
  query ProductsByDate(
    $queryName: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByDate(
      queryName: $queryName
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        condition
        description
        district
        category
        quantity
        market {
          id
          name
          banner
          displayImage
          description
          category
          owner
          createdAt
        }
        files {
          bucket
          region
          key
        }
        price
        shipped
        owner
        comments {
          nextToken
        }
        createdAt
        queryName
      }
      nextToken
    }
  }
`;
export const searchMarkets = gql`
  query SearchMarkets(
    $filter: SearchableMarketFilterInput
    $sort: SearchableMarketSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchMarkets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        banner
        displayImage
        products {
          nextToken
        }
        description
        category
        owner
        createdAt
      }
      nextToken
    }
  }
`;
export const searchProducts = gql`
  query SearchProducts(
    $filter: SearchableProductFilterInput
    $sort: SearchableProductSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchProducts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        condition
        description
        district
        category
        quantity
        market {
          id
          name
          banner
          displayImage
          description
          category
          owner
          createdAt
        }
        files {
          bucket
          region
          key
        }
        price
        shipped
        owner
        comments {
          nextToken
        }
        createdAt
        queryName
      }
      nextToken
    }
  }
`;
