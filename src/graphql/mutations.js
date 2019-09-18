/* eslint-disable */
// this is an auto generated file. This will be overwritten

import gql from "graphql-tag";

export const createComment = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
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
export const updateComment = gql`
  mutation UpdateComment($input: UpdateCommentInput!) {
    updateComment(input: $input) {
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
export const deleteComment = gql`
  mutation DeleteComment($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
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
export const createMarket = gql`
  mutation CreateMarket($input: CreateMarketInput!) {
    createMarket(input: $input) {
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
export const updateMarket = gql`
  mutation UpdateMarket($input: UpdateMarketInput!) {
    updateMarket(input: $input) {
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
export const deleteMarket = gql`
  mutation DeleteMarket($input: DeleteMarketInput!) {
    deleteMarket(input: $input) {
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
export const createProduct = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
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
export const updateProduct = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
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
export const deleteProduct = gql`
  mutation DeleteProduct($input: DeleteProductInput!) {
    deleteProduct(input: $input) {
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
export const registerUser = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    registerUser(input: $input) {
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
export const updateUser = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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
export const createOrder = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
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
      user {
        id
        username
        email
        phone
        registered
        orders {
          nextToken
        }
      }
      shippingAddress {
        district
        street
        more_info
        number
      }
      createdAt
    }
  }
`;
