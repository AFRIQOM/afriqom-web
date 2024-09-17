import { useGetApi } from '@hooks/useApi'
import { BaseDataboard, Databoard } from '@features/databoard/lib/types'
import { getCountryLabel } from '@lib/utils'
import { useMemo } from 'react'

export const useGetDataboards = () => {
  const { payload, data, ...rest } = useGetApi<
    BaseDataboard[],
    any,
    Databoard[]
  >({
    model: 'databoards',
    method: 'list',
    dto: (res) => {
      return res.map((el) => ({
        ...el,
        country_name: getCountryLabel(el.country)
      }))
    }
  })
  const databoardOptions = useMemo(() => {
    return payload
      ? payload.map((el) => ({
          label: el.country_name,
          value: el.id
        }))
      : []
  }, [payload])

  return {
    databoards: payload,
    databoardOptions,
    ...rest
  }
}
