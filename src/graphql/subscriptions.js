// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
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
        tags
        owner
        createdAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      user {
        id
        username
        email
        phone
        registered
      }
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
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
        tags
        owner
        createdAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      user {
        id
        username
        email
        phone
        registered
      }
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
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
        tags
        owner
        createdAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      user {
        id
        username
        email
        phone
        registered
      }
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
export const onCreateMarket = `subscription OnCreateMarket {
  onCreateMarket {
    id
    name
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
    tags
    owner
    createdAt
  }
}
`;
export const onUpdateMarket = `subscription OnUpdateMarket {
  onUpdateMarket {
    id
    name
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
    tags
    owner
    createdAt
  }
}
`;
export const onDeleteMarket = `subscription OnDeleteMarket {
  onDeleteMarket {
    id
    name
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
    tags
    owner
    createdAt
  }
}
`;
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
      products {
        nextToken
      }
      tags
      owner
      createdAt
    }
    file {
      bucket
      region
      key
    }
    price
    shipped
    user {
      id
      username
      email
      phone
      registered
      products {
        nextToken
      }
      orders {
        nextToken
      }
    }
    owner
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
      products {
        nextToken
      }
      tags
      owner
      createdAt
    }
    file {
      bucket
      region
      key
    }
    price
    shipped
    user {
      id
      username
      email
      phone
      registered
      products {
        nextToken
      }
      orders {
        nextToken
      }
    }
    owner
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
      products {
        nextToken
      }
      tags
      owner
      createdAt
    }
    file {
      bucket
      region
      key
    }
    price
    shipped
    user {
      id
      username
      email
      phone
      registered
      products {
        nextToken
      }
      orders {
        nextToken
      }
    }
    owner
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
