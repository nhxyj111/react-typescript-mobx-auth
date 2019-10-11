import { useState, useEffect } from 'react'
import axios from 'axios'
import { axiosInstance } from '../axios'

export const useFetchCancel = <T>(
  url: string,
  defaultData: T,
  params?: Record<string, any>
) => {
  const [data, setData] = useState(defaultData)

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
      } catch (error) {
        if (axios.isCancel(error)) {
          // do nothing
        } else {
          throw error
        }
      }
    }

    loadData()
    return () => {
      source.cancel()
    }
  }, [])

  return data
}
