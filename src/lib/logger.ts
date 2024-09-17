import { appConfig } from '@lib/appConfig'

export function logger(...args: any) {
  if (appConfig.isDevelopment) {
    console.log(...args)
  }
}
