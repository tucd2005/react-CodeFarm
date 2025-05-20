import React, { useState } from 'react'
import { students } from '../dataStudents'

const Bai1 = () => {

    const [filterName, setFilterName] = useState("")
    const [filterHocluc, setFilterHocluc] = useState("")
    const [filterdiemTB, setFilterDiemTB] = useState("")


    const getAverage = (student) => {
        const avg = (student.math + student.literature + student.english) / 3
        return avg.toFixed(2) // toFixed là làm tròn đến ... 
    }

    const getHocluc = (student) => {
        const avg = getAverage(student)

        if (avg >= 8) return "Gioi"
        else if (avg >= 6.5) return "Kha"
        else if (avg >= 5) return "trung binh"
        else return "yeu"
    }

    const searchName = students.filter((s) =>
        s.name.toLowerCase().includes(filterName.toLowerCase())
    )

    return (
        <>
            <div>
                <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
                <button>search</button>
            </div>

            <div>
                <label htmlFor="">loc theo hoc luc</label>
                <select name="" id="">
                    <option value="yeu">yeu</option>
                    <option value="trungbinh">trungbinh</option>
                    <option value="kha">kha</option>
                    <option value="gioi">gioi</option>
                </select>
            </div>
            <div>
                <label htmlFor="">loc theo diemTB</label>
                <select name="" id="">
                    <option value="yeu">yeu</option>
                    <option value="trungbinh">trungbinh</option>
                    <option value="kha">kha</option>
                    <option value="gioi">gioi</option>
                </select>
            </div>
            <table border={1}>
                <thead>
                    <tr >
                        <th>id</th>
                        <th>name</th>
                        <th>math</th>
                        <th>literature</th>
                        <th>english</th>
                        <th>Diem trung binh</th>
                        <th>hoc luc</th>
                        <th>thao tac</th>
                    </tr>
                </thead>

                <tbody>
                    {searchName.map((s) => {
                        const avg = getAverage(s)
                        const hocluc = getHocluc(s)
                        return (

                            <tr key={s.id}>
                                <th>{s.id}</th>
                                <th>{s.name}</th>
                                <th>{s.math}</th>
                                <th>{s.literature}</th>
                                <th>{s.english}</th>
                                <th>{avg}</th>
                                <th>{hocluc}</th>
                                <th>
                                    <button>xoa</button>
                                    <button>sua</button>
                                </th>
                            </tr>
                        )

                    })}
                </tbody>
            </table></>
    )
}

export default Bai1