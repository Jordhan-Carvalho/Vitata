// eslint-disable
// this is an auto generated file. This will be overwritten

export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
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
    }
    createdAt
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
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
    }
    createdAt
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
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
    }
    createdAt
  }
}
`;
export const createMarket = `mutation CreateMarket($input: CreateMarketInput!) {
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
export const updateMarket = `mutation UpdateMarket($input: UpdateMarketInput!) {
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
export const deleteMarket = `mutation DeleteMarket($input: DeleteMarketInput!) {
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
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
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
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
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
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
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
  }
}
`;
export const registerUser = `mutation RegisterUser($input: CreateUserInput!) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
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
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
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
