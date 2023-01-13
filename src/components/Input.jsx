import React, { useContext } from 'react'
import { MainContext } from '../context/Context'

const Input = () => {
    const { search } = useContext(MainContext);
    const { APIData } = useContext(MainContext);
    const {  setFilteredResults } = useContext(MainContext);
    


    const searchItems = (searchValue) => {
        search(searchValue)
        if (search !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    return (
        <div>
            <input type="text"
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default Input