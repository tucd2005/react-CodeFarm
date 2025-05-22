import React from 'react'
import { useSearchParams } from 'react-router-dom';
const useQueryParam = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const getParam = (key,defaultValue = "") => {
        return searchParams.get(key) || String(defaultValue)
    }

    const setParam = (key,value) => {
        const newParams = new URLSearchParams(searchParams);
        if(value) newParams.set(key,value);
        else newParams.delete(key)
        setSearchParams(newParams)
    }
  return { getParam , setParam, searchParams}
}

export default useQueryParam