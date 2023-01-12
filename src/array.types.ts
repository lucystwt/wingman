export type TreeNode<T> = T & {
  children?: T[]
}