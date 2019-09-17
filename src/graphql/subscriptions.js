/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateMarket = `subscription OnCreateMarket {
  onCreateMarket {
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
export const onUpdateMarket = `subscription OnUpdateMarket {
  onUpdateMarket {
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
export const onDeleteMarket = `subscription OnDeleteMarket {
  onDeleteMarket {
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
export const onCreateProduct = `subscription OnCreateProduct($owner: String!) {
  onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = `subscription OnUpdateProduct($owner: String!) {
  onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = `subscription OnDeleteProduct($owner: String!) {
  onDeleteProduct(owner: $owner) {
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
