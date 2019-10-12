import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { axiosInstance } from '../axios'

export const useFetchCancel = <T>(
  url: string,
  defaultData: T,
  params?: Record<string, any>
) => {
  const [data, setData] = useState(defaultData)
  const [error, setError] = useState<AxiosError | null>(null)

  useEffect(() => {
    const source = axios.CancelToken.source()

    const loadData = async () => {
      try {
        const res = await axiosInstance.get(url, {
          params,
          cancelToken: source.token,
        })
        const { code } = res.data
        if (code === '1') {
          setData(res.data.data)
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          // do nothing
        } else {
          setError(err)
        }
      }
    }

    loadData()
    return () => {
      source.cancel()
    }
  }, [])

  return { data, error }
}
