# PINKPACKER - SYSTEM SPECIFICATION BLUEPRINT (AI-FIRST SPEC v5)
**Target Pipeline:** AI PM (Backlog & Roadmap) ──► AI Architect (Design) ──► AI Developer (Code Generation)
**Design Philosophy:** Product-Driven, Declarative, Contract-Driven, Polyglot Architecture Ready.

---

## SECTION 1: PROJECT CONTEXT & ARCHITECTURAL BOUNDARIES

### 1.1 VISION & EXECUTIVE SUMMARY
* **Problem Statement:** The multi-billion dollar global meat trade currently relies on highly fragmented communication channels. A single transaction involves price negotiations on WhatsApp, invoice exchanges via email, and shipment tracking elsewhere, resulting in no traceability, no single source of truth, and zero accountability when disputes occur.
* **Solution Overview:** PinkPacker TradeOS is a web-based B2B operating platform purpose-built for the cross-border meat and livestock trade. The Initial MVP combines the unified communication layer of Missive with the dedicated, frictionless deal-room structure of Joint.now. It eliminates scattered communications by bringing the exporter, importer, customs broker, and forwarder into a single, isolated "Deal Room" with an integrated Document Hub and a chat-first interface.
* **Core Strategy:** Zero-Friction Adoption & Quiet Data Accumulation. Provide instant access for aging, low-IT trade operators via a single "magic link" without sign-up, while capturing structured transaction data as a by-product of daily usage to retain 100% data sovereignty.
* **Project Vision:** To become the definitive, data-driven B2B ecosystem for the global meat industry. By establishing a stable communication and workflow foundation now, the platform will seamlessly layer advanced technologies in the future—including AI-driven buyer/seller matching, automated document verification, multi-language conversational UIs, and IoT cold-chain (PinkTag) integration.

### 1.2 BUSINESS OBJECTIVES
* **Speed to Market:** Build a lightweight, functional MVP that can be immediately field-tested with real-world transactions.
* **Zero-Friction Adoption:** Provide instant, frictionless access for aging, low-IT trade operators via a single "magic link"—requiring absolutely no account sign-up, app installation, or complex menus.
* **Streamlined Workflow:** Centralize manual deal-stage tracking and automate document extraction (invoices, B/L, health certificates) while enforcing strict per-room and role-based permissions to prevent price leaks.
* **Data Accumulation:** Quietly accumulate structured transaction data (chat, documents, deal statuses) as a by-product of daily usage, ensuring PinkPacker retains 100% data sovereignty for future business intelligence.

### 1.3 PROJECT SCOPE BOUNDARIES
* **In-Scope (Phase Current MVP):** Core web-based platform, tokenized magic link execution, multi-tenant isolation for global entities (AU, KR, VN), real-time single-room chat interface, document hub with manual file tagging, manual deal status tracker progress line, and granular role-based document shielding.
* **Out-of-Scope (Future Phases):** AI matching engine, automated OCR document verification, multi-language conversational real-time UI, and IoT cold-chain (PinkTag) hardware integration.

### 1.4 ARCHITECTURAL DECISION RECORDS (ADR)
> **Rule for AI Architect:** You must adhere strictly to these baseline technological and structural decisions. Do not improvise core infrastructure stacks.
* **ADR-001 - Architectural Style:** Modular Monolith (Clean Architecture orientation inside decoupled modules).
* **ADR-002 - Primary Database:** PostgreSQL (with Row-Level Security explicitly mapped for multi-tenant isolation).
* **ADR-003 - Object Storage Service:** AWS S3 (handling uploaded transaction documents with bucket access token restrictions).
* **ADR-004 - Real-time Communication:** WebSockets (handling the real-time chat-first streaming message frame).

---

## SECTION 2: CANONICAL GLOSSARY & ENUMERATIONS (TEXT FORMAT)

### 2.1 SYSTEM GLOSSARY (Ubiquitous Language)
* **Deal Room:** An isolated, secure digital transaction workspace dedicated to a single cross-border meat trade transaction, unifying all involved communication and documents.
* **Magic Link:** A cryptographically secure, single-click entry URL that grants immediate, role-specific access to an external actor without requiring registration or sign-in.
* **Central Dashboard:** The internal multi-tenant administration interface used by regional staff to oversee trade rooms, initialize entities, and spawn invitation pathways.
* **Document Hub:** A central shared file repository tab embedded inside each Deal Room, compiling all files extracted asynchronously from the chat stream.

### 2.2 CANONICAL ENUMERATIONS
> **Rule for AI Engine:** AI bắt buộc phải ánh xạ các danh mục phân loại dạng văn bản này thành các cấu trúc Mã phân loại (Enum) tương ứng trong Cơ sở dữ liệu và Mã nguồn.

* **Danh mục các vai trò hệ thống (RoleType):** Quản trị viên hệ thống (Super Admin), Nhân viên vận hành pháp nhân (Entity Operator), Người xuất khẩu (Exporter), Người nhập khẩu (Importer), Nhân viên hải quan (Customs Broker), Đơn vị vận chuyển (Forwarder).
* **Danh mục trạng thái của luồng công việc chính (DealStatus):** Đang đàm phán (Negotiating), Đang làm hợp đồng (Contract), Đã xuất hàng (Shipped), Đã đến nơi (Arrived).
* **Danh mục phân loại bảo mật tài liệu (DataClassification):** Công khai trong phòng (Public), Hạn chế truy cập thương mại (Restricted).
* **Danh mục phân loại loại tài liệu (DocumentTag):** Hóa đơn thương mại (Commercial Invoice), Phiếu đóng gói (Packing List), Vận đơn đường biển (Bill of Lading), Chứng nhận kiểm dịch (Health Certificate), Chưa phân loại (Untagged).
* **Danh mục trạng thái tin nhắn (MessageStatus):** Hoạt động (Active), Đã chỉnh sửa (Edited), Đã xóa mềm (Deleted).

---

## SECTION 3: ACTORS & INTERFACE BOUNDARIES

### 3.1 SYSTEM ACTORS
* **Admin (Super Admin):** Quản trị viên hệ thống nội bộ toàn cầu. Quyền hạn tối cao trên mọi cấu phần hạ tầng, cấu hình pháp nhân và giám sát dữ liệu kiểm toán. Xác thực qua Email, Mật khẩu kèm mã bảo mật đa lớp.
* **Thành viên (Entity Operator / PinkPacker Operator):** Nhân viên thuộc một pháp nhân khu vực cụ thể (Úc, Hàn, VN). Quản lý, theo dõi các phòng thuộc phạm vi đơn vị mình, khởi tạo phòng giao dịch mới và sinh mã liên kết mời khách hàng. Xác thực qua Email và Mật khẩu trên Dashboard nội bộ.
* **Khách vãng lai (External Actors - Exporter, Importer, Customs, Forwarder):** Người dùng bên ngoài hệ thống. Được mời và tham gia trực tiếp vào Deal Room cụ thể trên trình duyệt Web/Mobile qua cơ chế Magic Link mã hóa bảo mật (No-Auth), không cần đăng ký tài khoản hay cài đặt phần mềm.

### 3.2 SYSTEM INTERFACES & BOUNDARY CATALOG
* **Identity & Authentication Provider:** Internal JWT Engine backing secure sessions for internal operators, combined with stateless cryptographic verification cookies for temporary external guests.
* **Notification System Bridge:** SendGrid Email Service & WhatsApp Communication Hooks for dispatching spawned invitation URL routes.
* **External Core Integrations:** Cloud Object Storage (S3 API compliance interface) for physical multi-format file management.

---

## SECTION 4: BUSINESS CAPABILITY MAP & FEATURE HIERARCHY (AI PM CORE)

### 4.1 BUSINESS CAPABILITY MAP (Bản đồ năng lực kinh doanh)
> **Rule for AI PM:** Đây là bộ khung năng lực cốt lõi của sản phẩm. Tất cả các Epic và Feature được sinh ra sau này bắt buộc phải thuộc vào một trong các năng lực cấu phần dưới đây.

* **Capability 1: Architecture & No-Auth Access**
    * Sub-capabilities: Quản trị đa tổ chức cô lập (Multi-Entity Isolation), Sinh mã liên kết bảo mật (Magic Link Generation), Xác thực phiên không tài khoản (No-Auth Session Binding).
* **Capability 2: Unified Deal Workspace**
    * Sub-capabilities: Khởi tạo phòng giao dịch tập trung (Deal Room Initialization), Giao tiếp luồng chat thời gian thực (Chat-First Engine).
* **Capability 3: Automated Document Hub**
    * Sub-capabilities: Bóc tách tệp đính kèm tự động (Chat-Stream Extraction), Phân loại nhãn tài liệu (Document Tagging), Tìm kiếm bộ lọc tài nguyên tập trung (Central Repository Search).
* **Capability 4: Deal Workflow & Stage Tracking**
    * Sub-capabilities: Quản lý vòng đời trạng thái thủ công (Manual Stage Mutation), Đẩy thông báo hệ thống tự động (Automated System Message Dispatch).
* **Capability 5: Data Accumulation Engine**
    * Sub-capabilities: Ghi vết sự kiện biến động (Historical Event Archiving), Bảo toàn dòng dữ liệu phân tích (Lineage Preservation).

### 4.2 FEATURE HIERARCHY (Epic & Capability Mapping)
* **[EPIC-01]: Zero-Friction & Multi-Entity Foundation**
    * Map to Capability: Architecture & No-Auth Access, Data Accumulation Engine
    * Objective: Thiết lập cơ chế nền tảng, quản lý tập trung đa pháp nhân (Úc, Hàn, VN), sinh mã truy cập không login bảo mật cao và tự động ghi lại dữ liệu làm sản phẩm phụ phục vụ tương lai.
* **[EPIC-02]: Interactive Workspace & File Lifecycle**
    * Map to Capability: Unified Deal Workspace, Automated Document Hub, Deal Workflow & Stage Tracking
    * Objective: Thay thế sự phân mảnh của WhatsApp bằng cách gom nhóm đối tác vào 1 Room duy nhất, lấy khung chat làm trung tâm, đồng bộ tài liệu sang Tab riêng và hiển thị thanh trạng thái minh bạch.

---

## SECTION 5: FUNCTIONAL ARCHITECTURE, PRIORITIZATION & DEPENDENCIES

### 5.1 CORE USE CASES
* **Kịch bản [UC-001]: Khởi tạo phòng giao dịch và Sinh liên kết mời**
    * Map to [EPIC-01], [EPIC-02]
    * *Primary Actor:* Entity Operator / Exporter
    * *Pre-conditions:* Operator đã đăng nhập thành công vào Central Dashboard nội bộ và chọn đúng phạm vi pháp nhân quản lý.
    * *Main Execution Flow:*
        1. Operator điền thông tin metadata cơ bản (Tên giao dịch, Tên Exporter, Tên Importer, Loại mặt hàng thịt).
        2. Hệ thống khởi tạo phòng, lưu database dạng cô lập theo mã pháp nhân, gán trạng thái mặc định ban đầu là Đang đàm phán.
        3. Operator chọn vai trò cần mời (ví dụ: Importer hoặc Customs Broker) và yêu cầu sinh mã liên kết.
        4. Hệ thống áp quy tắc entropy sinh chuỗi mã hóa bảo mật, lưu mã băm SHA-256 vào database và trả về đường dẫn liên kết dạng văn bản thô để copy.
    * *Post-conditions:* Bản ghi phòng giao dịch và bản ghi liên kết mời được tạo thành công với giới hạn số lượng và thời gian hết hạn cố định.

### 5.2 REQUIREMENTS, PRIORITIZATION (MoSCoW) & DEPENDENCY MATRIX

| Requirement ID | Requirement Name | Epic ID | Priority (MoSCoW) | Depends On |
| :--- | :--- | :--- | :---: | :--- |
| **[REQ-001]** | Zero Friction Access (No-Login Entry) | EPIC-01 | Must Have | Không có |
| **[REQ-002]** | Link-based Invitation (Magic Link Gen) | EPIC-01 | Must Have | REQ-001 |
| **[REQ-003]** | Internal Admin Auth & Central Dashboard | EPIC-01 | Must Have | Không có |
| **[REQ-004]** | Deal Room Initialization | EPIC-02 | Must Have | REQ-003 |
| **[REQ-005]** | Chat-First Interface | EPIC-02 | Must Have | REQ-001, REQ-004 |
| **[REQ-006]** | Chat-Stream File Extraction | EPIC-02 | Should Have | REQ-005 |
| **[REQ-007]** | Centralized Repository & Tagging | EPIC-02 | Should Have | REQ-006 |
| **[REQ-008]** | Manual Deal Status Tracker | EPIC-02 | Must Have | REQ-004 |
| **[REQ-009]** | Multi-Entity Data Isolation | EPIC-01 | Must Have | REQ-003 |
| **[REQ-010]** | Role-Based Room Permissions | EPIC-01 | Must Have | REQ-001, REQ-002 |

### 5.3 SYSTEM BUSINESS RULES (Ràng buộc logic bất biến toàn hệ thống)
* **[BR-001] Quy tắc giới hạn dung lượng truy cập liên kết:** Mỗi liên kết mời (Magic Link) sinh ra cho một vai trò cụ thể phải bị giới hạn số lượng người kích hoạt tối đa (Exporter Team = 3, Importer Team = 10, Customs Broker = 5, Forwarder = 5). Khi chạm ngưỡng giới hạn, liên kết dừng hoạt động ngay lập tức.
* **[BR-002] Quy tắc khóa chỉnh sửa tiến trình:** Khi trạng thái phòng giao dịch được chuyển sang nấc cuối cùng (Đã đến nơi), toàn bộ quyền chỉnh sửa dữ liệu, đăng tải tài liệu hoặc sửa đổi trạng thái của các vai trò ngoài Super Admin đều bị hệ thống khóa chặn.
* **[BR-003] Quy tắc bảo toàn dữ liệu kiểm toán:** Không một tác nhân hay dòng mã nào trong hệ thống được quyền thực hiện câu lệnh xóa vật lý hoặc chỉnh sửa dữ liệu lịch sử lưu trong kho lưu trữ kiểm toán.

---

## SECTION 6: USER STORIES, ACCEPTANCE CRITERIA & DEFINITION OF DONE (DoD)

### 6.1 USER STORIES & ACCEPTANCE CRITERIA

#### Câu chuyện [US-001] (Ánh xạ từ [REQ-001], [REQ-002]) - Thực thi Magic Link không mật khẩu
* *User Story:* Là một người dùng bên ngoài được đối tác mời, tôi muốn bấm trực tiếp vào đường dẫn liên kết nhận được để truy cập thẳng vào phòng làm việc trên trình duyệt thiết bị mà không cần đăng ký tài khoản hay cài đặt phần mềm phức tạp.
* *Acceptance Criteria (AC):*
    1. Khi người dùng click vào liên kết `/join?token=chuỗi_mã_thô`, hệ thống phải băm chuỗi thô này bằng thuật toán SHA-256 và đối chiếu bản ghi trong cơ sở dữ liệu. Thao tác kiểm tra phải đảm bảo: thời gian hiện tại nằm trong hạn mức hiệu lực và liên kết chưa bị hủy bỏ thủ công bởi điều phối viên.
    2. Nếu liên kết hợp lệ lần đầu, hệ thống yêu cầu người dùng nhập tên hiển thị đại diện, thực hiện tăng bộ đếm số lượng thành viên đã tham gia, tạo bản ghi định danh cấu trúc và sinh mã phiên lưu cookie trình duyệt ở dạng HttpOnly bảo mật cao.
    3. Trình duyệt tải lại trang (Tab Refresh) phải giữ nguyên ngữ cảnh hoạt động của thành viên, sử dụng phiên cookie hiện có để định tuyến, không được phép sinh mới định danh thành viên hoặc tiêu tốn lượt sử dụng của liên kết mời ban đầu.
* *Error Handling & Exception Rules:*
    * Nếu đường dẫn liên kết đã hết hạn sử dụng (quá 15 ngày kể từ ngày tạo) hoặc bộ đếm số lượng người tham gia đã đạt tối đa, hệ thống phải chặn đứng truy cập, điều hướng sang màn hình thông báo lỗi thân thiện: *"Liên kết truy cập giao dịch này đã hết hạn hoặc bị thu hồi. Vui lòng liên hệ đại diện PinkPacker để nhận thư mời mới."* Đồng thời ghi vết cảnh báo xâm nhập vào log hệ thống.

#### Câu chuyện [US-002] (Ánh xạ từ [REQ-006], [REQ-007]) - Bóc tách file tự động và hiển thị tập trung
* *User Story:* Là thành viên trong phòng làm việc, tôi muốn khi gửi các tệp tin đính kèm như hóa đơn, chứng từ vào luồng chat, hệ thống tự động lưu trữ gom vào một khu vực riêng để dễ dàng tìm kiếm và phân loại sau này.
* *Acceptance Criteria (AC):*
    1. Khi phát hiện một sự kiện tải tệp tin (định dạng PDF, hình ảnh) trong luồng chat, hệ thống phải kích hoạt tiến trình xử lý bất đồng bộ, sao lưu tệp tin gốc vào kho lưu trữ đám mây an toàn, tính toán chuỗi băm kiểm tra tính toàn vẹn (SHA-256 hash của file), và tự động tạo một bản ghi tham chiếu sang thư mục Document Hub của phòng.
    2. Tại giao diện Tab Document Hub, người dùng có quyền chọn file và thực hiện gán các nhãn nghiệp vụ (Hóa đơn thương mại, Phiếu đóng gói, Vận đơn đường biển, Chứng nhận kiểm dịch).
    3. Hệ thống phải thực thi bộ lọc ẩn/hiện tệp tin nghiêm ngặt: Nếu tài liệu được phân loại nhãn là Hóa đơn thương mại (Commercial Invoice), quyền hiển thị và tải xuống chỉ được cấp cho Exporter và Importer. Vai trò Nhân viên hải quan và Đơn vị vận chuyển khi gọi API hoặc tải màn hình sẽ hoàn toàn không thấy sự tồn tại của tệp tin này.

---

### 6.2 DEFINITION OF DONE (DoD - Tiêu chuẩn hoàn thành tổng thể)
> **Rule for AI PM & AI Developer:** Một Task vụ hoặc User Story chỉ được tính là hoàn thành 100% và sẵn sàng bàn giao khi và chỉ khi vượt qua đầy đủ các bộ lọc kiểm soát dưới đây:

1. **Code Completed:** Toàn bộ mã nguồn đã được viết, tối ưu hóa cấu trúc, xử lý đầy đủ các trường dữ liệu bắt buộc và không có lỗi biên dịch.
2. **Unit Test Passed:** Đạt tỷ lệ bao phủ mã nguồn tối thiểu theo quy định tại Mục 9.4 và tất cả các ca kiểm thử đều vượt qua thành công.
3. **Integration Test Passed:** Các module tương tác với nhau chính xác, luồng nghiệp vụ chạy thông suốt từ Backend, Cơ sở dữ liệu đến Frontend, không gây lỗi dây chuyền cho các tính năng cũ.
4. **Security Validation Passed:** Cơ chế cô lập đa pháp nhân hoạt động chính xác, mã hóa dữ liệu nhạy cảm được thực thi và ma trận phân quyền, ma trận bảo mật ẩn hiện tệp tin hoạt động đúng thiết kế.
5. **Acceptance Criteria Passed:** Tính năng chạy đúng theo 100% các tiêu chí AC đã được định nghĩa tại Mục 6.1 dưới sự nghiệm thu trực tiếp từ AI PM.

---

## SECTION 7: DATA DESIGN, CONCURRENCY & DOMAIN WORKFLOWS (AI ARCHITECT CORE)

### 7.1 AGGREGATE DESIGN STRATEGY (DDD Boundaries)
> **Rule for AI Architect:** Project-specific boundary allocation. You must explicitly model and isolate domain data manipulation mutations based on the boundaries declared below.
* **Aggregate Root:** `DealRoom` là thực thể gốc, quản lý và kiểm soát toàn bộ vòng đời của một phòng làm việc giao dịch thương mại cụ thể.
* **Child Entities:** Các thực thể phụ thuộc vòng đời hoàn toàn vào Root bao gồm: Thành viên phòng làm việc (`Participant`), Phiên làm việc thiết bị (`ParticipantSession`), Lời mời liên kết (`Invitation`), Tin nhắn hội thoại (`Message`), Tài liệu đính kèm (`Document`).
* **Mutation Boundaries:** Mọi thao tác ghi mới, cập nhật hoặc thay đổi trạng thái của các Thực thể con bắt buộc phải gọi thực thi thông qua Cổng lưu trữ nghiệp vụ (Repository Interface) của Aggregate Root `DealRoom`. Nghiêm cấm các service ngoài gọi trực tiếp lệnh ghi đè xuống database của Thực thể con để đảm bảo tính toàn vẹn và bất biến của logic nghiệp vụ.

### 7.2 DATA DOMAIN MODEL ENTITIES
* **Entity: DealRoom (Aggregate Root)**
    * `id`: Kiểu dữ liệu Chuỗi định danh chuẩn quốc tế UUID (v4) - Khóa chính.
    * `entity_id`: Kiểu dữ liệu UUID - Mã định danh pháp nhân quản lý (Dùng để phân chia Tenant).
    * `deal_name`: Kiểu dữ liệu Chuỗi ký tự văn bản thô.
    * `status`: Kiểu dữ liệu thuộc tập hợp Trạng thái luồng công việc chính.
    * `version`: Kiểu số nguyên nguyên tử (Atomic Integer) - Bộ giám sát cơ chế Khóa lạc quan.
* **Entity: Document (Thực thể con phụ thuộc)**
    * `id`: Kiểu dữ liệu UUID (v4) - Khóa chính.
    * `room_id`: Kiểu dữ liệu UUID - Khóa ngoại liên kết chặt chẽ về phòng chủ quản.
    * `file_url`: Kiểu dữ liệu Chuỗi văn bản trỏ tới đường dẫn vật lý trên S3.
    * `file_sha256`: Kiểu dữ liệu Chuỗi ký tự băm mật mã - Sử dụng kiểm tra tính toàn vẹn toàn cầu của file chống chỉnh sửa trái phép.

### 7.3 STATE MACHINE MATRIX (Máy trạng thái luồng tiến trình giao dịch)
Hệ thống quản lý trạng thái của phòng giao dịch phải thực thi nghiêm ngặt theo mô hình máy trạng thái tuyến tính và phi tuyến tính có kiểm soát dưới đây.

* **Các luồng chuyển đổi trạng thái hợp lệ:**
    * `[NEGOTIATING]` (Đang đàm phán) ──► `[CONTRACT]` (Đang làm hợp đồng)
    * `[CONTRACT]` (Đang làm hợp đồng) ──► `[NEGOTIATING]` (Quay lại đàm phán lại giá/điều khoản)
    * `[CONTRACT]` (Đang làm hợp đồng) ──► `[SHIPPED]` (Đã xuất hàng lên tàu)
    * `[SHIPPED]` (Đã xuất hàng) ──► `[CONTRACT]` (Quay lại trạng thái hợp đồng nếu lỗi chứng từ)
    * `[SHIPPED]` (Đã xuất hàng) ──► `[ARRIVED]` (Hàng đã cập cảng đến nơi)
    * `[ARRIVED]` (Đã đến nơi) ──► `[SHIPPED]` (Quay lại nếu phát sinh tranh chấp tại cảng)
* **Ràng buộc khi vi phạm trạng thái:** Mọi hành động cố tình cập nhật trạng thái nhảy cóc (ví dụ: chuyển trực tiếp từ Đang đàm phán sang Đã xuất hàng hoặc Đã đến nơi) phải bị tầng kiểm soát chặn đứng, thực hiện hủy bỏ giao dịch (Abort) và ném ra mã lỗi ứng dụng chuyên biệt: `ERR_INVALID_STATUS_TRANSITION`.

### 7.4 CONCURRENCY STRATEGY
* **Chiến lược lựa chọn:** Khóa lạc quan (Optimistic Locking) dựa trên trường phiên bản dữ liệu (`version`).
* **Quy tắc kiểm soát bất biến:** Khi nhân viên hoặc đối tác gửi lệnh thay đổi trạng thái tiến trình giao dịch, hệ thống backend phải lấy số phiên bản hiện tại từ client gửi lên để thực hiện câu lệnh cập nhật có điều kiện. Số phiên bản phải khớp hoàn toàn tại thời điểm ghi dữ liệu, sau khi cập nhật thành công, số phiên bản tự động tăng lên 1 đơn vị.
* **Xử lý khi xảy ra xung đột:** Nếu hai tác nhân cùng mở màn hình và thực hiện thay đổi trạng thái phòng cùng một thời điểm, lệnh của người đến sau sẽ ghi nhận ảnh hưởng bằng 0 bản ghi do số phiên bản đã thay đổi. Hệ thống phải ngay lập tức hủy giao dịch của người đến sau và trả về mã lỗi hệ thống: `ERR_CONCURRENT_MODIFICATION`.

---

## SECTION 8: BOUNDARY SECURITY & PERMISSIONS

### 8.1 FUNCTIONAL AUTHORIZATION MATRIX (Phân quyền chức năng hệ thống)

| Hành động nghiệp vụ / API Endpoint | Super Admin | Entity Operator | Exporter | Importer | Customs Broker | Freight Forwarder |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Xem không gian phòng giao dịch** | Cho phép | Cho phép | Cho phép | Cho phép | Cho phép | Cho phép |
| **Gửi tin nhắn luồng chat chính** | Cho phép | Cho phép | Cho phép | Cho phép | Cho phép | Cho phép |
| **Tải lên chứng từ giao dịch** | Cho phép | Cho phép | Cho phép | Cho phép | Cho phép | Cho phép |
| **Cập nhật thanh trạng thái giao dịch** | Cho phép | Cho phép | Cho phép | Từ chối | Từ chối | Từ chối |
| **Sinh liên kết mời Magic Link** | Cho phép | Cho phép | Cho phép | Từ chối | Từ chối | Từ chối |
| **Hủy bỏ liên kết mời Magic Link** | Cho phép | Cho phép | Cho phép | Từ chối | Từ chối | Từ chối |
| **Xóa vĩnh viễn tệp tin khỏi hệ thống** | Cho phép | Cho phép | Từ chối | Từ chối | Từ chối | Từ chối |

### 8.2 DATA VISIBILITY SHIELDING MATRIX (Bảo mật ẩn/hiện tài liệu tại Document Hub)

| Phân loại nhãn tài liệu | Exporter (Seller) | Importer (Buyer) | Customs Broker | Freight Forwarder |
| :--- | :---: | :---: | :---: | :---: |
| **Hóa đơn thương mại (Commercial Invoice)** | Hiển thị | Hiển thị | Ẩn hoàn toàn | Ẩn hoàn toàn |
| **Phiếu đóng gói mặt hàng (Packing List)** | Hiển thị | Hiển thị | Hiển thị | Ẩn hoàn toàn |
| **Vận đơn đường biển (Bill of Lading - B/L)** | Hiển thị | Hiển thị | Hiển thị | Hiển thị |
| **Chứng nhận kiểm dịch (Health Certificate)** | Hiển thị | Hiển thị | Hiển thị | Ẩn hoàn toàn |

---

## SECTION 9: API, EVENT SYSTEM CONTRACTS & TESTING (AI DEV CORE)

### 9.1 RESOURCE CATALOG (REST Endpoints / Stream Channels)
* **Resource: DealRoom Workspace**
    * `POST /api/v1/deal-rooms` - Khởi tạo một phòng làm việc giao dịch mới cho một thực thể pháp nhân cụ thể.
    * `GET /api/v1/deal-rooms/:id` - Lấy thông tin chi tiết cấu trúc nghiệp vụ và metadata của phòng.
    * `PATCH /api/v1/deal-rooms/:id/status` - Cập nhật trạng thái tiến trình của giao dịch (Kiểm soát bằng Khóa lạc quan).
* **Resource: Room Invitations**
    * `POST /api/v1/deal-rooms/:id/invitations` - Tạo mã thông báo và sinh liên kết mời Magic Link theo từng vai trò đối tác.
    * `DELETE /api/v1/invitations/:id` - Hủy bỏ thủ công liên kết mời, vô hiệu hóa token lập tức.

### 9.2 UNIFIED API RESPONSE WRAPPERS
* **Success Envelope Layout (JSON tiêu chuẩn khi xử lý thành công):**
```json
{
  "success": true,
  "data": {},
  "error": null
}
