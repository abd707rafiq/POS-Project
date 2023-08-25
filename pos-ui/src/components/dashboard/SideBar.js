import React, { useState } from 'react'
import { BiSolidChevronLeft } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { FaAddressBook, FaArrowCircleDown, FaArrowCircleUp, FaCalendarCheck, FaChartBar, FaCheckCircle, FaCog, FaCubes, FaDatabase, FaEnvelope, FaFire, FaIndustry, FaListAlt, FaMinusCircle, FaMoneyCheckAlt, FaProjectDiagram, FaQrcode, FaTachometerAlt, FaTruck, FaUsers, FaWordpress } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const SideBar = () => {

  // const clicked = useSelector((state)=>state.sidebar.value)
    
  const [usmng, setUsmng] = useState(false)
  const [li1, setLi1] = useState(false)
  const [li2, setLi2] = useState(false)
  const [li3, setLi3] = useState(false)
  const [li4, setLi4] = useState(false)
  const [li5, setLi5] = useState(false)
  const [li6, setLi6] = useState(false)
  const [li7, setLi7] = useState(false)
  const [li8, setLi8] = useState(false)
  const [li9, setLi9] = useState(false)
  const [li10, setLi10] = useState(false)


  return (
    
    <div className={`whitespace-nowrap min-h-[558px] py-[20px] w-full flex bg-gray-100  flex-col`}>
      {/* Home button */}
      <div className='flex justify-between items-center'>
        <div className='flex mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaTachometerAlt size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Home</h1>
        </div>

      </div>
      {/* User Management */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setUsmng(!usmng) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaAddressBook size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>User Management</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {usmng && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Users</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Roles</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Sales Commision Agents</h1>
        </Link>
      </div>
      }
      {/* Contacts */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi1(!li1) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaUsers size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Contacts</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li1 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Suppliers</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Customers</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '> Customer Groups</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Import Contacts </h1>
        </Link>
      </div>
      }
      {/* Products */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi2(!li2) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaCubes size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Products</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li2 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Products</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Product</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '> Print Lables </h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Variations</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Import Products</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Import Opening Stocks</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Selling Price Group</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Units</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Categories</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Brands</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Warranties</h1>
        </Link>
      </div>
      }
      {/* Manufacturing */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaIndustry size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Manufacturing</h1>
        </Link>

      </div>
      {/* Purchase */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi3(!li3) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaArrowCircleDown size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Purchases</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li3 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Purchase Order</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Purchases</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Purchase</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Purchase Return</h1>
        </Link>
      </div>
      }
      {/* Sell */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi4(!li4) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaArrowCircleUp size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Sell</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li4 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>All Sales</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Sale</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List POS</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>POS</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Draft</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Drafts</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Quotation</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List quotation</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Sell Return</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Shipments</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Discounts</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Subscriptions</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Import Sales</h1>
        </Link>
      </div>
      }
      {/* Stock Transfer */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi5(!li5) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaTruck size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Stock Transfer</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li5 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Stock Transfer</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Stock Transfer</h1>
        </Link>
        
      </div>
      }
      {/* Stock Adjustment */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi6(!li6) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaDatabase size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Stock Adjustment</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li6 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Stock Adjustment</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Stock Adjustment</h1>
        </Link>
        
      </div>
      }
      {/* Expenses */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi7(!li7) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaMinusCircle size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Expenses</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li7 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Expenses</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Add Expenses</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Expense Categories</h1>
        </Link>
      </div>
      }
      {/* Payment Accounts */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi8(!li8) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaMoneyCheckAlt size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Payment Accounts</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li8 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>List Accounts</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Balance Sheet</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Trial Balance</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Cash Flow</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Payment Account Report</h1>
        </Link>
      </div>
      }
      {/* Reports */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi9(!li9) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaChartBar size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Reports</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li9 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Profit/Loss Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Purchase & Sale</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Tax Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-1 text-gray-500 text-xs '>Supplier & Customer Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Customer Groups Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Stock Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Lot Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Stock Adjustment Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Trending Products</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Items Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Product Purchase Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Product Sell Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Purchase Payment Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Sell Payment Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Expense Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Register Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-1 text-gray-500 text-xs '>Sales Representative Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Table Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Service Staff Report</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Activity Log</h1>
        </Link>


      </div>
      }
      {/* Booking */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaCalendarCheck size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Booking</h1>
        </Link>

      </div>
      {/* Kitchen */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaFire size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Kitchen</h1>
        </Link>

      </div>
      {/* Orders */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaListAlt size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Orders</h1>
        </Link>

      </div>
      {/* Notification Template */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaEnvelope size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Notification Template</h1>
        </Link>

      </div>
      {/* Settings */}
      <div className='flex justify-between items-center'>
        <div onClick={() => { setLi10(!li10) }} className='flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start'>
          <FaCog size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Settings</h1>
        </div>
        <BiSolidChevronLeft size={20} className='mx-1' />
      </div>
      {li10 && <div className='flex flex-col mx-4'>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Business Settings</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Business Locations</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Invoice Settings</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Barcode Settings</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Receipt Printers</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Tax Rates</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Tables</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Type of Services</h1>
        </Link>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 mx-2 text-gray-500 text-sm '>Package Subscriptions</h1>
        </Link>


      </div>
      }
      {/* Project */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaProjectDiagram size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Project</h1>
        </Link>

      </div>
      {/* HRM */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaUsers size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>HRM</h1>
        </Link>

      </div>
      {/* Essentials */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaCheckCircle size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Essentials</h1>
        </Link>

      </div>
      {/* Woocommerce */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaWordpress size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Woocommerce</h1>
        </Link>

      </div>
      {/* Catalouge QR */}
      <div className='flex justify-between items-center'>
        <Link to={"/"} className='flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start'>
          <FaQrcode size={20} />
          <h1 className=' mt-1 mx-2 text-sm '>Catalouge QR</h1>
        </Link>

      </div>




    </div>
  )
}
export default SideBar