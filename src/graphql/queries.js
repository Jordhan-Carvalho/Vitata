// eslint-disable
// this is an auto generated file. This will be overwritten

export const getComment = `query GetComment($id: ID!) {
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
    }
    createdAt
  }
}
`;
export const listComments = `query ListComments(
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
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getMarket = `query GetMarket($id: ID!) {
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
export const listMarkets = `query ListMarkets(
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
export const getProduct = `query GetProduct($id: ID!) {
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
  }
}
`;
export const listProducts = `query ListProducts(
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
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
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
export const searchMarkets = `query SearchMarkets(
  $filter: SearchableMarketFilterInput
  $sort: SearchableMarketSortInput
  $limit: Int
  $nextToken: Int
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
export const searchProducts = `query SearchProducts(
  $filter: SearchableProductFilterInput
  $sort: SearchableProductSortInput
  $limit: Int
  $nextToken: Int
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
    }
    nextToken
  }
}
`;
