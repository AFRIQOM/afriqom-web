import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory'
const users = createQueryKeys('users', {
  all: null
})

export const queries = mergeQueryKeys(users)
