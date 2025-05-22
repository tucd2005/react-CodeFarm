import React, { useEffect, useState } from 'react' // Import các hook cần thiết từ React

// Custom hook có tên là useFetchListWithParams
// Nhận vào object gồm các giá trị page, limit, search, sort
const useFetchListWithParams = ({ page, limit, search, sort }) => {
    // Khởi tạo state `data` để lưu danh sách sản phẩm và tổng số sản phẩm
    // Khởi tạo state `data` bằng useState
    
// `data` là một object có 2 thuộc tính:
// - `products`: mảng chứa danh sách các sản phẩm (ban đầu là mảng rỗng)
// - `total`: tổng số sản phẩm sau khi lọc/tìm kiếm (ban đầu là 0)
const [data, setData] = useState({ products: [], total: 0 })

// Giải thích cụ thể:
// - useState(...) là một hook của React dùng để tạo state trong function component.
// - `data` là biến state hiện tại, dùng để lưu trữ dữ liệu sản phẩm.
// - `setData` là hàm dùng để cập nhật giá trị của `data`.
// - useState({ products: [], total: 0 }) nghĩa là state ban đầu là một object:
//     {
//         products: [],   // Danh sách sản phẩm, rỗng ban đầu
//         total: 0        // Tổng số sản phẩm (sau khi lọc), ban đầu là 0
//     }


    // Khởi tạo state `loading` để quản lý trạng thái đang tải dữ liệu
    const [loading, setLoading] = useState(true)

    // useEffect sẽ chạy mỗi khi `page`, `limit`, `search` hoặc `sort` thay đổi
    useEffect(() => {
        // Hàm async để fetch dữ liệu
        const fetchData = async () => {
            setLoading(true) // Đặt trạng thái loading là true trước khi bắt đầu fetch

            // Tính toán số lượng sản phẩm cần bỏ qua dựa theo trang hiện tại (pagination)
            const skip = (page - 1) * limit

            // Tạo URL API, sử dụng `search` làm từ khóa tìm kiếm
            let url = `https://dummyjson.com/products/search?q=${search}`

            // Gửi request tới API và chờ phản hồi
            const res = await fetch(url)

            // Chuyển response thành object JSON
            const result = await res.json()

            // In kết quả response ra console để kiểm tra
            console.log(result)

            // Lấy danh sách sản phẩm từ kết quả trả về
            let products = result.products

            // Xử lý sắp xếp sản phẩm theo điều kiện `sort` được truyền vào
            switch (sort) {
                case "price-asc": // Giá tăng dần
                    products.sort((a, b) => a.price - b.price)
                    break

                case "price-desc": // Giá giảm dần
                    products.sort((a, b) => b.price - a.price)
                    break

                case "name-asc": // Tên A-Z
                    products.sort((a, b) => a.title.localeCompare(b.title))
                    break

                case "name-desc": // Tên Z-A
                    products.sort((a, b) => b.title.localeCompare(a.title))
                    break

                default:
                    // Nếu không có điều kiện sắp xếp nào được chọn, giữ nguyên thứ tự
                    break
            }

            // Cắt (slice) danh sách sản phẩm theo số lượng `limit` và vị trí `skip`
            // Đây là xử lý phân trang thủ công (vì API không hỗ trợ limit & skip)
            const paginated = products.slice(skip, skip + limit)

            // In ra danh sách sau khi phân trang để kiểm tra
            console.log(paginated)

            // Cập nhật state với danh sách sản phẩm đã phân trang và tổng số sản phẩm
            setData({ products: paginated, total: products.length })

            // Kết thúc tải dữ liệu, đặt loading về false
            setLoading(false)
        }

        // Gọi hàm fetchData
        fetchData()

        // Mỗi khi page, limit, search hoặc sort thay đổi, effect sẽ chạy lại
    }, [page, limit, search, sort])

    // In ra giá trị `page` để kiểm tra (chỉ để debug, có thể xóa sau này)
    console.log(page)

    // Trả về object gồm `data` và `loading` để component sử dụng hook này có thể dùng
    return { data, loading }
}

export default useFetchListWithParams // Export custom hook để dùng ở các component khác
