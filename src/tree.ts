export type TreeNode<T> = T & {
  children?: T[]
}

export function arrayToTree<T extends Record<string, never>>(
  data: T[],
  parentId: string | number | null = null,
  parentIdField = 'parentId',
  idField = 'id'
): TreeNode<T>[] {
  const nodes: TreeNode<T>[] = []
  data.forEach((item) => {
    if (item[parentIdField] === parentId) {
      const node: TreeNode<T> = { ...item }
      const children = arrayToTree(data, item[idField], parentIdField, idField)
      if (children.length > 0) node.children = children
      nodes.push(node)
    }
  })
  return nodes
}

export function arrayToTreeReduce<T extends Record<string, never>>(
  data: T[],
  parentId: string | number | null = null,
  parentIdField = 'parentId',
  idField = 'id'
): TreeNode<T>[] {
  return data.reduce<TreeNode<T>[]>(
    (pv, cv) =>
      cv[parentIdField] === parentId
        ? [
          ...pv,
          {
            ...cv,
            children: arrayToTreeReduce(
              data,
              cv[idField],
              parentIdField,
              idField
            ),
          },
        ]
        : pv,
    []
  )
}