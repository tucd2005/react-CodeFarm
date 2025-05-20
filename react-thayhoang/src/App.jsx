import "./App.css";
import LifeCycleExample from "./LifeCycleExample";
import ProductList from "./ProductList";
import SearchStudent from "./SearchStudent";
import SortArr from "./SortArr";

function App() {
	return (
		<>
			{/* <SortArr /> */}
			{/* <SearchStudent /> */}
			{/* <LifeCycleExample /> */}
            {/* <Router>
                <Routes>

                </Routes>
            </Router> */}
            <ProductList/>
		</>
	);
}

export default App;

// import React from 'react'

// function App () {
//   return (
//     <>

//         {Component1()}
//         <Component3/>
//     </>
//   )
// }

// function Component1(name) {
//     return <h1> trong component luôn phải viết hoa chữ cái đầu  {name} </h1>
// }
// function Component3({name}) {
// return <h1 style={{color: "red"}}> muốn truyền dữ liệu vào trong component cần bọc lại thành 1 OBJ (properties) {name}</h1>
// }

// export default App

// // JSX là gì : JavaScript XML 

// // trong component luôn phải viết hoa chữ cái đầu 
// // muốn truyền dữ liệu vào trong component cần bọc lại thành 1 OBJ (properties)


// import Button from "./components/Button"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import "./index.css"
// import React from 'react'
// import StudentList from './components/StudentList';

// function App() {
//     const students = [
//         { id: 1, name: "Nguyen Minh Hoang", email: "hoang@gmail.com", gender: "male" },
//         { id: 2, name: "Tran Duy Dong", email: "dong@gmail.com", gender: "male" },
//         { id: 3, name: "Nguyen Hong Nhung", email: "hongnhung@gmail.com", gender: "female" },
//     ]
//     return (
//         <>
            
//             <StudentList students={students}/>

//         </>
//     )
// }


// export default App
// {/* <Header />
            // <banner style={{}}>
            //     <div style={{ background: "orange", margin: "60px", textAlign: "center" }}>
            //         <img src="https://nqs.1cdn.vn/2024/03/12/i.ex-cdn.com-chatluongvacuocsong.vn-files-content-2024-03-12-_57171eabf850760300594163-bfa6e850-06db-11e6-a661-050901070303-compressed-0703.jpg" alt="" width={"100%"} />
            //     </div>
            // </banner>
            // <div style={{ display: "flex", flexDirection: "row", margin: "60px" }}>
            //     <sidebar style={{ background: "red", width: "30%" }}>
                    
            //         <h1>em đang làm tượng</h1>
            //     </sidebar>

            //     <outlet style={{ background: "green", width: "70%" }}>
            //         dsfdsf
            //     </outlet>

            // </div>
            // <div style={{margin: "8px"}}>

            // <Button size="small"  conten="dn"> secondary </Button>
            // <Button size="lager" color="green" conten="dk"> primary </Button>
            // <Button size="big" color="red" conten="dn"> warning</Button>
            // <Button size="big" color="red" conten="dn">error </Button>
            // <Button size="big" color="red" conten="dn">info </Button>
            // <Button size="big" color="red" conten="dn"> </Button>
            // </div>
            // <Footer /> */}