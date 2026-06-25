# Cấu Trúc Phân Rã Công Việc (WBS) - Dự Án Ứng Dụng Todo List

## 1. Khởi Tạo & Phân Tích Hệ Thống (Initiation & Analysis)
- **1.1. Xác định yêu cầu nghiệp vụ (Requirements Gathering)**
  - 1.1.1. Liệt kê các tính năng cốt lõi (Tạo, đọc, sửa, xóa task).
  - 1.1.2. Xác định các tính năng mở rộng (Gắn nhãn, hẹn giờ, phân loại, lọc task).
  - 1.1.3. Xác định yêu cầu phi chức năng (Hiệu năng, bảo mật, responsive).
- **1.2. Thiết lập môi trường & Công nghệ (Tech Stack Setup)**
  - 1.2.1. Lựa chọn Frontend framework (React, Vue, hoặc HTML/CSS/JS thuần).
  - 1.2.2. Lựa chọn Backend/Database (Node.js, Python, hoặc LocalStorage/IndexedDB nếu làm App offline).
  - 1.2.3. Khởi tạo Git Repository và quy trình Gitflow.

## 2. Thiết Kế Giao Diện & Kiến Trúc (Design & Architecture)
- **2.1. Thiết kế UX/UI (UI/UX Design)**
  - 2.1.1. Vẽ Wireframe/Mockup cho màn hình chính (Danh sách Task).
  - 2.1.2. Thiết kế form thêm/sửa Task (Popup hoặc Inline).
  - 2.1.3. Thiết kế trạng thái Dark Mode / Light Mode.
- **2.2. Thiết kế cơ sở dữ liệu & API (Database & API Design)**
  - 2.2.1. Thiết kế cấu trúc dữ liệu Task (ID, Title, Description, IsCompleted, CreatedAt, DueDate, Tags).
  - 2.2.2. Thiết kế đặc tả API (RESTful endpoints: GET, POST, PUT, DELETE /tasks).

## 3. Phát Triển Tầng Khách Hàng (Frontend Development)
- **3.1. Giao diện cơ bản (Core UI Components)**
  - 3.1.1. Phát triển layout chính (Header, Sidebar, Main Content).
  - 3.1.2. Phát triển Component hiển thị danh sách Task (Task List Item).
  - 3.1.3. Phát triển Component Form nhập liệu (Task Input Form).
- **3.2. Quản lý trạng thái & Tính năng (State Management & Features)**
  - 3.2.1. Tích hợp tính năng Thêm Task mới.
  - 3.2.2. Tích hợp tính năng Đánh dấu hoàn thành (Toggle Complete).
  - 3.2.3. Tích hợp tính năng Xóa Task và Sửa tên Task.
  - 3.2.4. Cấu hình bộ lọc Task (Tất cả, Đang làm, Đã xong).

## 4. Phát Triển Tầng Máy Chủ (Backend & Storage Development)** *(Bỏ qua nếu chỉ làm App Client-side)*
- **4.1. Xây dựng dịch vụ API (API Services)**
  - 4.1.1. Khởi tạo Server và cấu hình Routing `/tasks`.
  - 4.1.2. Viết logic xử lý CRUD lưu vào Database (MongoDB/PostgreSQL) hoặc File.
- **4.2. Tích hợp & Kết nối (Frontend-Backend Integration)**
  - 4.2.1. Cấu hình kết nối HTTP Client (Axios/Fetch) từ Frontend lên Backend.
  - 4.2.2. Xử lý đồng bộ dữ liệu theo thời gian thực và quản lý lỗi kết nối (Error Handling).

## 5. Kiểm Thử & Tối Ưu Hóa (Testing & Optimization)
- **5.1. Kiểm thử chức năng (Functional Testing)**
  - 5.1.1. Viết Unit Test cho các hàm xử lý logic (thêm, xóa, lọc).
  - 5.1.2. Kiểm thử thủ công (Manual Test) trên các trình duyệt khác nhau (Chrome, Safari, Firefox).
  - 5.1.3. Kiểm thử độ phản hồi giao diện trên Mobile/Tablet (Responsive Test).
- **5.2. Tối ưu hóa hiệu năng (Performance Optimization)**
  - 5.2.1. Tối ưu hóa số lần Re-render của UI khi danh sách Task quá lớn (Lazy loading / Virtual scrolling).
  - 5.2.2. Nén và tối ưu mã nguồn (Minify CSS/JS).

## 6. Triển Khai & Bàn Giao (Deployment & Handover)
- **6.1. Triển khai sản phẩm (Production Deployment)**
  - 6.1.1. Cấu hình biến môi trường (Environment Variables).
  - 6.1.2. Triển khai Frontend lên các nền tảng Host (Vercel, Netlify, GitHub Pages).
  - 6.1.3. Triển khai Backend (nếu có) lên Render, Heroku hoặc VPS.
- **6.2. Hoàn thiện tài liệu (Documentation)**
  - 6.2.1. Viết file `README.md` hướng dẫn cài đặt và chạy ứng dụng ở môi trường local.
  - 6.2.2. Đóng gói mã nguồn và nghiệm thu dự án.
