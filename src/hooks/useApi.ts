import { useMutation, useQuery, MutateOptions } from '@tanstack/react-query'
import { api } from '@lib/api'
import { getToken } from '@lib/cookies'
import { useMemo } from 'react'
import { ApiError } from '@lib/api/error'
import { convertModelToFormData } from '@lib/form'

type useGetApiProps<Params, Response = any, BaseResponse = 'any'> = {
  method: 'list' | 'save' | 'login' | 'signup' | 'create' | 'update' | 'cancel'
  model:
    | 'sessions'
    | 'Accounts'
    | 'users'
    | 'login'
    | 'databoards'
    | 'subscriptions'
    | 'organisations'
    | 'region_databoards'
    | 'regions'
    | 'vw_region_databoards'
    | 'user_subscriptions'
    | 'reregion_databoards'
    | 'vw_subscriptions'
    | 'Subscriptions'
    | 'Users'
    | 'user_databoards'
    | 'blobs'
    | 'Subscription'
    | 'License'
  params?: Params
  enabled?: boolean
  dto?: (Response: BaseResponse) => Response
}

export const useGetApi = <BaseResponse = any, Params = any, Payload = any>({
  model,
  method,
  params,
  dto,
  enabled = true
}: useGetApiProps<Params, Payload, BaseResponse>) => {
  const { data, ...rest } = useQuery({
    queryKey: [method, model, params],
    enabled: enabled ?? true,
    queryFn: () => {
      return api.get<BaseResponse>('', {
        params: {
          f: `${model}:${method}`,
          token: getToken(),
          ...params
        }
      })
    }
  })

  const payload = useMemo(() => {
    return data && dto && dto(data)
  }, [data])

  return {
    ...rest,
    payload,
    data
  }
}

export type useMutatorProps<Params, Response> = useGetApiProps<Params> & {
  onSuccess?: MutateOptions<Response, any, any>['onSuccess']
  onError?: (message?: string) => void
  useFormData?: boolean
}
export const useMutator = <Body = any, Params = any, Response = any>({
  model,
  method,
  onSuccess,
  onError,
  useFormData,
  params
}: useMutatorProps<Params, Response>) => {
  return useMutation<Response, any, { body: Body; id?: string }>({
    onSuccess: (...arg) => {
      onSuccess?.(...arg)
    },
    onError: (error) => {
      onError?.(error?.message ?? 'Something went wrong')
    },
    mutationFn: (payload: { body: Body; id?: string }) => {
      const formattedPayload = useFormData
        ? convertModelToFormData({
            ...payload.body,
            ...(payload.id && { id: payload.id })
          })
        : { ...payload.body, ...(payload.id && { id: payload.id }) }

      return new Promise((resolve, reject) => {
        api
          .post('', formattedPayload, {
            params: {
              f: `${model}:${method}`,
              token: getToken(),
              ...params
            }
          })
          .then((res) => {
            if ((res as any).ERR) {
              reject(new ApiError((res as any).CODE, (res as any).ERR))
              return
            }
            resolve(res)
          })
          .catch(reject)
      })
    }
  })
}
