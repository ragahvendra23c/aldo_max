import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"

function EmpForm(){
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
   const navigate=useNavigate()

   const handleSubmit=(e)=>{
    e.preventDefault()
    const data={id,name,email}
    fetch("https://web-servics-leve1.onrender.com/users",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(data)
    })
    .then(()=>{
        alert("Succesfuly saved")
     navigate("/")
    })
    .catch((err)=>{
console.log(err.message)
    })
}

    return(
        <div className="container">
            <div className="row">
            <div className="offsetlg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-title">
                            <h3 style={{textAlign:"center"}}>Create User</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" onChange={e=>setId(e.target.value)} className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={name} onChange={e=>setName(e.target.value)} className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"/>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-success">Save</button>
                                    <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        </div>
    )
}


export default EmpForm;