import { filter } from "json-server-auth"
import { useEffect, useState } from "react"
import api from "../api"

/**
 *  +input : keyword
 *  +output : danh sach san pham tim duoc
 */
const useSearch = (keyword, url, path) => {
    const [list,setList] = useState([])
    const [loading, setLoading] = useState([])
    const [error, setError] = useState([])

    const fetchSearch = async() => {
        const search  = await api.get(`$`) 

    }
    useEffect(()=>{
        fetchSearch()
    }, )

    return [list]
}

export default useSearch