import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

function EmpList() {
    const [data, setData] = useState(null)
    const [sort, setSort] = useState("")
 
    const options = ["name", "email"]

    useEffect(() => {
        loadData(0, 1)

    }, [])

    const loadData = () => {
        fetch("https://web-servics-leve1.onrender.com/users")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    }
// sort by name or email
    const sortData = async (e) => {
        e.preventDefault()
        let value = e.target.value
        setSort(value)
        return await axios.get(`https://web-servics-leve1.onrender.com/users?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className="container">
            <div className="">
                <div className="card-title">
                    <h3>Users List</h3>
                    {/* <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Search</label>
                            <input type="text" value={value} onChange={SearchData} className="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary">Search</button>
                        <button onClick={reset} class="btn btn-primary">Reset</button>
                    </form> */}
                </div>
                <div className="card-body">
                    <Link to="/form" className="btn btn-success">
                        Add New User(+)
                    </Link>
                       
                        <select  style={{ float: "right", width: "150px" }} value={sort} onChange={sortData} class="form-select" aria-label="Default select example">
                        
                            <option selected>Sort By Name</option>
                            {options.map((item) => (
                                <option>{item}</option>
                            ))}
                        </select>
                 


                    <table className="table table-bordred">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    {/* <td>
                                        <a onClick={() => { onDelete(item.id) }} className="btn btn-danger">Delete</a>
                                        <a onClick={() => { onEdit(item.id) }} className="btn btn-primary">Edit</a>
                                        <a onClick={() => { onDetails(item.id) }} className="btn btn-primary">Details</a>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default EmpList;