import React from 'react'
// import StudentList from './StudentList';

const StudentList = ({students}) => {
    console.log(students);

    return (
        <div>
            <h1>danh sach sinh vien</h1>
            <select name="gender" onChange={handleChange} id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>ten</th>
                        <th>gmail</th>
                        <th>gender</th>
                    </tr>
                </thead>

                <tbody>
           
{students.map((item)=>(
    <tr>
        
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
    </tr>
    
))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList