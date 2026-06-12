# TÊN DỰ ÁN / TÍNH NĂNG LỚN (EPIC)
*Tên dự án: Pinkpacker
# GIỚI THIỆU VỀ DỰ ÁN  
Problem Statement The multi-billion dollar global meat trade currently relies on highly fragmented communication channels. A single transaction involves price negotiations on WhatsApp, invoice exchanges via email, and shipment tracking elsewhere, resulting in no traceability, no single source of truth, and zero accountability when disputes occur.
Project Overview PinkPacker TradeOS is a web-based B2B operating platform purpose-built for the cross-border meat and livestock trade. The Initial MVP combines the unified communication layer of Missive with the dedicated, frictionless deal-room structure of Joint.now. It eliminates scattered communications by bringing the exporter, importer, customs broker, and forwarder into a single, isolated "Deal Room" with an integrated Document Hub and a chat-first interface.
# Project Objectives
Speed to Market: Build a lightweight, functional MVP that can be immediately field-tested with real-world transactions.
Zero-Friction Adoption: Provide instant, frictionless access for aging, low-IT trade operators via a single "magic link"—requiring absolutely no account sign-up, app installation, or complex menus.
Streamlined Workflow: Centralize manual deal-stage tracking and automate document extraction (invoices, B/L, health certificates) while enforcing strict per-room and role-based permissions to prevent price leaks.
Data Accumulation: Quietly accumulate structured transaction data (chat, documents, deal statuses) as a by-product of daily usage, ensuring PinkPacker retains 100% data sovereignty for future business intelligence.Project Vision To become the definitive, data-driven B2B ecosystem for the global meat industry. By establishing a stable communication and workflow foundation now, the platform will seamlessly layer advanced technologies in the future—including AI-driven buyer/seller matching, automated document verification, multi-language conversational UIs, and IoT cold-chain (PinkTag) integration.List Epic:
Data Accumulation Engine Lưu trữ toàn bộ dữ liệu giao dịch làm "sản phẩm phụ" phục vụ phân tích dữ liệu ở các Phase sau
Architecture & No-Auth Access: Cơ chế nền tảng, sinh link truy cập, bảo mật không cần đăng nhập (no-login) và cách ly dữ liệu giữa các tổ chức
Unified Deal Workspace: Không gian làm việc tập trung (1 room/deal) thay thế sự phân mảnh của WhatsApp, lấy khung chat làm trung tâm
 Automated Document Hub: Trung tâm quản lý chứng từ (Invoice, B/L, Health Certs) giúp tiết kiệm thời gian tìm kiếm
Deal Workflow & Stage Tracking: Quản lý vòng đời của giao dịch thịt đi qua các giai đoạn một cách minh bạch
Permissions & Multi-Entity: Kiến trúc bảo mật đa lớp, phân định ranh giới dữ liệu cho các pháp nhân và các vai trò*

## 1. ĐỐI TƯỢNG SỬ DỤNG (ACTORS / ROLES)
- **Khách vãng lai:** Người chưa đăng nhập.
- **Thành viên:** Người đã có tài khoản.
- **Admin:** Quản trị viên hệ thống.

## 2. CÁC YÊU CẦU NGHIỆP VỤ (BUSINESS REQUIREMENTS)

- [REQ-001] : Zero Friction Access
Là người dùng được mời, tôi muốn bấm vào link là truy cập thẳng vào Deal Room trên trình duyệt Web/Mobile mà không cần tải App hay đăng nhập"

- [REQ-002] : Link-based Invitation (Magic Link)
Là PinkPacker/Exporter, tôi muốn tạo một đường link độc nhất và copy gửi qua WhatsApp/Email để mời đối tác tham gia phòng"

- [REQ-003] : "Internal Admin Auth & Central Dashboard
Là PinkPacker Operator, tôi muốn đăng nhập bằng Email/Password vào một Admin Dashboard nội bộ để có thể nhìn thấy toàn bộ Deal Room của Úc, Hàn, VN, từ đó tạo phòng mới và sinh link mời khách"

- [REQ-004] : "Deal Room Initialization
Là Exporter/PinkPacker, tôi muốn tạo một phòng làm việc duy nhất cho một giao dịch cụ thể để gom nhóm Buyer, Customs, Forwarder"

- [REQ-005] : Chat-First Interface
Là người dùng trong phòng, tôi muốn bắt đầu công việc bằng việc nhắn tin ngay trong giao diện chat chính mà không cần qua các menu phức tạp"

- [REQ-006] :"Chat-Stream File Extraction
Là người dùng, khi tôi gửi file (PDF, ảnh) vào luồng chat, hệ thống tự động bóc tách file đó ra và lưu trữ"

- [REQ-007] : "Centralized Repository & Tagging
Là người dùng, tôi muốn xem tất cả các file trong một Tab chung (Document Hub) để dễ dàng đối chiếu"

- [REQ-008] : "Manual Deal Status Tracker
Là người tham gia, tôi muốn thấy thanh trạng thái hiển thị giao dịch đang ở bước nào (Negotiating > Contract > Shipped > Arrived) và cập nhật thủ công khi cần"

- [REQ-009] : "Multi-Entity Isolation
Là PinkPacker HQ, tôi muốn hệ thống phân tách độc lập các phòng của pháp nhân Úc, Hàn, VN nhưng tôi (HQ) có thể quản lý tất cả"

- [REQ-010] : "Role-Based Room Permissions
Là Exporter/Importer, tôi muốn phân định rõ ai là Customs, ai là Forwarder, và giới hạn quyền xem file/chat đối với họ"

## 3. CÁC RÀNG BUỘC & LUỒNG NGOẠI LỆ (CONSTRAINTS & EXCEPTIONS)
- Nếu email đã tồn tại trong hệ thống, hiển thị thông báo lỗi: "Email đã được sử dụng".
- Link xác thực trong email chỉ có hiệu lực trong vòng 15 phút.
