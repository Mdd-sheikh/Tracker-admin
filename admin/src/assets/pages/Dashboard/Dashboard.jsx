import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const Dashboard = () => {
    const [cusdata, setCusData] = useState([])

    const [customerData, setCustomerData] = useState({
        sl_no: "",
        product_name: "",
        size: "",
        stock_quantity: "",


    })


    const [processinput, setProcessInput] = useState({});
    


    const processhandler = (id, value) => {
        setProcessInput((prev) => ({
            ...prev,
            [id]: value,   // store selected process for this user
        }));
    };

    // for input data receiver function

    const inputhandler = (e) => {
        setCustomerData({ ...customerData, [e.target.name]: e.target.value })

    }

    //for data post and check if string is available or not

    const submithandler = async (req, res) => {

        setCustomerData({
            sl_no: "",
            product_name: "",
            size: "",
            stock_quantity: ""



        })

        if (customerData.product_name.length && customerData.size.length && customerData.sl_no.length && customerData.stock_quantity.length) {
            toast.success("customer data add successfully")
            setTimeout(() => {
                try {
                    const postdata = axios.post("https://parcel-zjj0.onrender.com/adminorder", customerData)

                    console.log("send data succesfully");
                    res.json({ sucess: true, messege: "send successfull" })

                } catch (error) {
                    console.log("error", error);
                    res.json({ success: false, messege: "error something went wrong" })
                }


            }, 3000);

            // post data


            return



        }
        else {
            toast.error("All fields are compulsory")

        }

    }

    // for delete data from database

    const deletehandler = (id) => {
        try {
            axios.delete(`https://parcel-zjj0.onrender.com/adminorderdata/${id}`,)
            setCusData(cusdata.filter((users) => users._id !== id))
            return toast.success("deleted successfully")
        } catch (error) {
            console.error("deleted")
            toast.error("not deleted")
        }

    }


    // get data and show to adminusers


    const gethandler = async () => {
        const getdata = await axios.get("https://parcel-zjj0.onrender.com/adminorderdata")
        setCusData(getdata.data)
    }



    // put data or updtae the data 

    const updatehandler = (id, value) => {
        try {
            axios.put(`https://parcel-zjj0.onrender.com/${id}`, { process: value })

            console.log("updted sucessfully")
            toast.success("updated process")


        } catch (error) {
            console.error("error or updated")
            toast.error("not updated")
        }
    }
    useEffect(() => {
        gethandler()
    }, [])


    return (
        <>

            <div className='Dashboard'>
                <div className="mobile">
                    <ul>
                        <NavLink to="/"> <li>Dashboard</li></NavLink>
                        <NavLink to="/Orders"><li>Orders</li></NavLink>
                        <li>Customers</li>
                        <li>Category</li>
                    </ul>
                </div>
                <div className="dashboard-container">

                    <div className="table-menu">
                        <div className="sn-no">SL.NO</div>

                        <div className="product-name">
                            Product Name
                        </div>
                        <div className="size">
                            Size
                        </div>
                        <div className="stock-quality">
                            Stock Quality
                        </div>
                        <div className="action">
                            Action
                        </div>
                    </div>

                </div>
            </div>
            <div className="new">
                <div className="product-details">
                    <div className="sl-input">
                        Sl.No <input type="text"
                            placeholder='sl.no/order No'
                            name='sl_no'
                            value={customerData.sl_no}
                            onChange={inputhandler} />
                    </div>
                    <div className="produc-name-input">
                        Product Name <input type="text" placeholder='product name'
                            name='product_name'
                            value={customerData.product_name}
                            onChange={inputhandler} />
                    </div>
                    <div className="size-input">
                        Size<input type="text" placeholder='size'
                            name='size'
                            value={customerData.size}
                            onChange={inputhandler} />
                    </div>
                    <div className="stock-quantity-input">
                        Stock Qantity <input type="text" placeholder='stock quantity'
                            name='stock_quantity'
                            value={customerData.stock_quantity}
                            onChange={inputhandler} />
                    </div>
                </div>
                <div className="action-buttons">
                    <div className="edit-button">
                        <button onClick={submithandler}>add</button>
                    </div>

                </div>

            </div>

            <div className="customers-data-lists">
                {cusdata.map((users, index) => {
                    return (
                        <>
                            <div key={index} className="users-data">
                                <p>{users.sl_no}</p>
                                <p>{users.product_name}</p>
                                <p>{users.size}</p>
                                <p>{users.stock_quantity}</p>
                                <button className='delete-btn' onClick={() => deletehandler(users._id)}>Delete</button>
                                <button className='select-btn'><select name="process" value={processinput[users._id] || users.process || ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        processhandler(users._id, value);
                                        updatehandler(users._id, value)
                                    }} id="">
                                    <option value="">Process</option>
                                    <option value="Design Approved" >Design Approved</option>
                                    <option value="Dice Making" >Dice Making</option>
                                    <option value="collect material" >collect material</option>
                                    <option value="Printing" >Printing</option>
                                    <option value="Assembling">Assembling</option>
                                    <option value="Delivered" >Delivered</option>
                                </select></button>
                            </div>

                        </>
                    )
                })}
            </div>

        </>
    )
}

export default Dashboard;
