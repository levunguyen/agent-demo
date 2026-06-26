# Cấu Trúc Phân Rã Công Việc (WBS) - Dự Án Ứng Dụng Todo List

> **Mục tiêu v1.0:** Hoàn thành trong **2 tuần** (Phase 1–3 + Phase 6).
> **Công nghệ đã xác định:** React + LocalStorage (không có backend ở v1.0).

---

## 1. Khởi Tạo & Phân Tích Hệ Thống (Initiation & Analysis)
- **1.1. Xác định yêu cầu nghiệp vụ (Requirements Gathering)**
  - 1.1.1. Liệt kê các tính năng cốt lõi cho v1.0 (Tạo, đọc, sửa, xóa task). *(0.5 ngày)*
  - 1.1.2. Ghi nhận các tính năng mở rộng vào v2 Backlog (Gắn nhãn, hẹn giờ, phân loại, lọc nâng cao). *(0.5 ngày)*
  - 1.1.3. Xác định yêu cầu phi chức năng (Responsive, hiệu năng cơ bản). *(0.5 ngày)*
- **1.2. Thiết lập môi trường & Công nghệ (Tech Stack Setup)**
  - 1.2.1. Khởi tạo project với **React + Vite** (đã quyết định — không dùng Vue hay HTML/JS thuần). *(0.5 ngày)*
  - 1.2.2. Xác nhận sử dụng **LocalStorage** để lưu trữ dữ liệu (không cần backend cho v1.0). *(0.5 ngày)*
  - 1.2.3. Khởi tạo Git Repository với nhánh `main` + short-lived feature branches (không dùng Gitflow). *(0.5 ngày)*

## 2. Thiết Kế Giao Diện & Kiến Trúc (Design & Architecture)
- **2.1. Thiết kế UX/UI (UI/UX Design)**
  - 2.1.1. Vẽ Wireframe/Mockup cho màn hình chính (Danh sách Task). *(0.5 ngày)*
  - 2.1.2. Thiết kế form thêm/sửa Task (Popup hoặc Inline). *(0.5 ngày)*
  - ~~2.1.3. Dark Mode / Light Mode~~ → **Chuyển sang v2 Backlog**
- **2.2. Thiết kế cấu trúc dữ liệu (Data Model)**
  - 2.2.1. Thiết kế cấu trúc dữ liệu Task cho v1.0: **ID, Title, IsCompleted** (DueDate/Tags/Description dành cho v2). *(0.5 ngày)*

## 3. Phát Triển Tầng Khách Hàng (Frontend Development)
- **3.1. Giao diện cơ bản (Core UI Components)**
  - 3.1.1. Phát triển layout chính (Header + Main Content — không có Sidebar). *(1 ngày)*
  - 3.1.2. Phát triển Component hiển thị danh sách Task (Task List Item). *(1 ngày)*
  - 3.1.3. Phát triển Component Form nhập liệu (Task Input Form). *(1 ngày)*
- **3.2. Quản lý trạng thái & Tính năng (State Management & Features)**
  - 3.2.1. Tích hợp tính năng Thêm Task mới + lưu vào LocalStorage. *(1 ngày)*
  - 3.2.2. Tích hợp tính năng Đánh dấu hoàn thành (Toggle Complete). *(0.5 ngày)*
  - 3.2.3. Tích hợp tính năng Xóa Task và Sửa tên Task. *(0.5 ngày)*
  - 3.2.4. Cấu hình bộ lọc Task (Tất cả, Đang làm, Đã xong). *(0.5 ngày)*

> **Deploy sớm**: Sau khi Phase 3 hoàn thành, deploy ngay lên Vercel/Netlify để thu thập phản hồi người dùng thực tế trước khi bước sang kiểm thử chính thức.

## ~~4. Phát Triển Tầng Máy Chủ (Backend & Storage Development)~~ → v2 Roadmap

> Phase 4 (Backend API + MongoDB/PostgreSQL) **không nằm trong phạm vi v1.0**.
> Sẽ được lên kế hoạch trong milestone v2 sau khi có người dùng thực tế yêu cầu tính năng này.

## 5. Kiểm Thử & Tối Ưu Hóa (Testing & Optimization)
- **5.1. Kiểm thử chức năng (Functional Testing)**
  - 5.1.1. Viết Unit Test cho các hàm xử lý logic (thêm, xóa, lọc). *(1 ngày)*
  - 5.1.2. Kiểm thử thủ công (Manual Test) trên các trình duyệt khác nhau (Chrome, Safari, Firefox). *(0.5 ngày)*
  - 5.1.3. Kiểm thử độ phản hồi giao diện trên Mobile/Tablet (Responsive Test). *(0.5 ngày)*
- **5.2. Tối ưu hóa (Optimization)**
  - ~~5.2.1. Lazy loading / Virtual scrolling~~ → **Chuyển sang v2 Backlog** (tối ưu khi thực sự cần thiết)
  - ~~5.2.2. Minify CSS/JS~~ → **Vite xử lý tự động**, không cần thêm task thủ công

## 6. Triển Khai & Bàn Giao (Deployment & Handover)
- **6.1. Triển khai sản phẩm (Production Deployment)**
  - 6.1.1. Cấu hình biến môi trường (Environment Variables). *(0.5 ngày)*
  - 6.1.2. Triển khai Frontend lên **Vercel hoặc Netlify**. *(0.5 ngày)*
- **6.2. Hoàn thiện tài liệu (Documentation)**
  - 6.2.1. Viết file `README.md` hướng dẫn cài đặt và chạy ứng dụng ở môi trường local. *(0.5 ngày)*
  - 6.2.2. Đóng gói mã nguồn và nghiệm thu dự án. *(0.5 ngày)*

---

## v2 Backlog (Post-launch — sau khi có phản hồi người dùng thực tế)

- **Phase 4** — Backend API + MongoDB/PostgreSQL
- **2.1.3** — Dark Mode / Light Mode
- **5.2.1** — Lazy loading / Virtual scrolling
- **Data Model mở rộng** — DueDate, Tags, Description
- **Frontend-Backend Integration** — Axios/Fetch HTTP Client

---

**Tổng thời gian ước tính v1.0:** ~12–14 ngày ≈ **2 tuần**

| Phase | Nội dung | Ước tính |
|-------|----------|----------|
| 1 | Initiation & Analysis | 2.5 ngày |
| 2 | Design & Architecture | 2 ngày |
| 3 | Frontend Development | 5.5 ngày |
| 5 | Testing & Optimization | 2 ngày |
| 6 | Deployment & Handover | 2 ngày |
| **Tổng** | | **~14 ngày** |
