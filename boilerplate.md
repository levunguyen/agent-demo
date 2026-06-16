# [PROJECT NAME] - SYSTEM SPECIFICATION BLUEPRINT (AI-FIRST SPEC v5)
**Target Pipeline:** AI PM (Backlog & Roadmap) ──► AI Architect (Design) ──► AI Developer (Code Generation)
**Design Philosophy:** Product-Driven, Declarative, Contract-Driven, Polyglot Architecture Ready.

---

## SECTION 1: PROJECT CONTEXT & ARCHITECTURAL BOUNDARIES

### 1.1 VISION & EXECUTIVE SUMMARY
* **Problem Statement:** [Mô tả nỗi đau thị trường, trạng thái phân mảnh hoặc các vấn đề nghiêm trọng của quy trình cũ]
* **Solution Overview:** [Hệ thống này là gì? Giải quyết vấn đề bằng cách nào? Định hướng giải pháp tổng thể]
* **Core Strategy:** [Yếu tố cốt lõi để hệ thống thành công, ví dụ: Tiếp cận không ma sát (Zero-Friction), Tự động cấu trúc hóa dữ liệu phục vụ AI...]

### 1.2 BUSINESS OBJECTIVES
* **Objective 1:** [Mục tiêu định lượng hoặc định tính của doanh nghiệp - ví dụ: Tốc độ ra mắt thị trường]
* **Objective 2:** [Mục tiêu về chiến lược tích lũy dữ liệu, chiếm lĩnh thị trường hoặc tối ưu vận hành]

### 1.3 PROJECT SCOPE BOUNDARIES
* **In-Scope (Phase Current MVP):** [Khai báo rõ ràng những tính năng/cấu phần PHẢI LÀM trong giai đoạn này]
* **Out-of-Scope (Future Phases):** [Khai báo rõ ràng những gì KHÔNG LÀM để tránh AI tự suy diễn và sinh code thừa]

### 1.4 ARCHITECTURAL DECISION RECORDS (ADR)
> **Rule for AI Architect:** You must adhere strictly to these baseline technological and structural decisions. Do not improvise core infrastructure stacks.
* **ADR-001 - Architectural Style:** [e.g., Modular Monolith / Microservices / Clean Architecture / Event-Driven]
* **ADR-002 - Primary Database:** [e.g., PostgreSQL / MongoDB / MySQL / DynamoDB]
* **ADR-003 - Object Storage Service:** [e.g., AWS S3 / Google Cloud Storage / MinIO]
* **ADR-004 - Real-time Communication:** [e.g., WebSockets / Server-Sent Events (SSE) / gRPC Streaming]

---

## SECTION 2: CANONICAL GLOSSARY & ENUMERATIONS (TEXT FORMAT)

### 2.1 SYSTEM GLOSSARY (Định nghĩa ngôn ngữ chung - Ubiquitous Language)
* **[Term 1]:** [Định nghĩa chuẩn xác duy nhất. Toàn bộ tài liệu chỉ sử dụng đúng thuật ngữ này]
* **[Term 2]:** [Định nghĩa chuẩn xác duy nhất. Tránh việc một khái niệm nhưng dùng nhiều từ đồng nghĩa gây nhiễu AI]

### 2.2 CANONICAL ENUMERATIONS (Danh mục mã phân loại chuẩn hóa)
> **Rule for AI Engine:** AI bắt buộc phải ánh xạ các danh mục phân loại dạng văn bản này thành các cấu trúc Mã phân loại (Enum) tương ứng trong Cơ sở dữ liệu và Mã nguồn.

* **Danh mục các vai trò hệ thống:** [Khai báo các giá trị cụ thể, ví dụ: Người xuất khẩu, Người nhập khẩu, Nhân viên hải quan, Đơn vị vận chuyển, Quản trị viên hệ thống]
* **Danh mục trạng thái của luồng công việc chính:** [Khai báo các trạng thái, ví dụ: Đang đàm phán, Đang làm hợp đồng, Đã xuất hàng, Đã đến nơi, Đã đóng giao dịch]
* **Danh mục phân loại bảo mật dữ liệu:** [Khai báo các cấp độ bảo mật, ví dụ: Công khai, Hạn chế truy cập, Hoàn toàn bảo mật]

---

## SECTION 3: ACTORS & INTERFACE BOUNDARIES

### 3.1 SYSTEM ACTORS
* **Internal Actor:** [Tên vai trò nội bộ] - [Mô tả phạm vi hoạt động, quyền hạn nghiệp vụ và cơ chế xác thực bắt buộc như Email/Password + MFA]
* **External Actor:** [Tên vai trò bên ngoài] - [Mô tả phạm vi hoạt động và cơ chế truy cập không mật khẩu hoặc Token-based Magic Link]

### 3.2 SYSTEM INTERFACES & BOUNDARY CATALOG
* **Identity & Authentication Provider:** [e.g., Internal JWT / Auth0 / Keycloak / Firebase Auth]
* **Notification System Bridge:** [e.g., Twilio SMS / SendGrid Email / Firebase Cloud Messaging (FCM)]
* **External Core Integrations:** [e.g., ERP System API / Customs Legal Gateway Webhook / Payment Gateway]

---

## SECTION 4: BUSINESS CAPABILITY MAP & FEATURE HIERARCHY (AI PM CORE)

### 4.1 BUSINESS CAPABILITY MAP (Bản đồ năng lực kinh doanh)
> **Rule for AI PM:** Đây là bộ khung năng lực cốt lõi của sản phẩm. Tất cả các Epic và Feature được sinh ra sau này bắt buộc phải thuộc vào một trong các năng lực cấu phần dưới đây.

* **Capability 1: [Tên Năng lực lớn - Ví dụ: Quản lý giao dịch (Deal Management)]**
    * Sub-capabilities: [Ví dụ: Khởi tạo phòng giao dịch (Create Deal Room)]
    * Sub-capabilities: [Ví dụ: Cập nhật tiến trình giao dịch (Update Deal Status)]
    * Sub-capabilities: [Ví dụ: Mời thành viên tham gia (Invite Participant)]
* **Capability 2: [Tên Năng lực lớn - Ví dụ: Quản lý tài liệu (Document Management)]**
    * Sub-capabilities: [Ví dụ: Tải lên tài liệu (Upload Document)]
    * Sub-capabilities: [Ví dụ: Phân loại tài liệu (Tag Document)]
    * Sub-capabilities: [Ví dụ: Tìm kiếm tài liệu (Search Document)]

### 4.2 FEATURE HIERARCHY (Epic & Capability Mapping)
* **[EPIC-01]: [Tên Epic lớn]**
    * Map to Capability: [Điền tên Năng lực lớn tương ứng ở mục 4.1]
    * Objective: [Tóm tắt mục đích tối thượng và giá trị nghiệp vụ của Epic này]
* **[EPIC-02]: [Tên Epic lớn]**
    * Map to Capability: [...]

---

## SECTION 5: FUNCTIONAL ARCHITECTURE, PRIORITIZATION & DEPENDENCIES

### 5.1 CORE USE CASES
* **Kịch bản [UC-001]: [Tên Luồng Nghiệp Vụ]**
    * Map to [EPIC-XX]
    * *Primary Actor:* [Ai là người chủ động thực hiện luồng này]
    * *Pre-conditions:* [Điều kiện bắt buộc hệ thống phải thỏa mãn để có thể kích hoạt use case]
    * *Main Execution Flow:* [Các bước tương tác tuần tự, tuyến tính giữa Người dùng và Hệ thống]
    * *Post-conditions:* [Trạng thái thay đổi bất biến của hệ thống sau khi use case hoàn thành]

### 5.2 REQUIREMENTS, PRIORITIZATION (MoSCoW) & DEPENDENCY MATRIX
> **Rule for AI PM:** Hãy sử dụng bảng này để thiết lập thứ tự ưu tiên theo phương pháp MoSCoW và xác định mối quan hệ phụ thuộc để tự động lập kế hoạch Sprint (Sprint Planning).

| Requirement ID | Requirement Name | Epic ID | Priority (MoSCoW) | Depends On |
| :--- | :--- | :--- | :---: | :--- |
| **[REQ-001]** | Khởi tạo phòng giao dịch | EPIC-01 | Must Have | Không có |
| **[REQ-002]** | Sinh liên kết mời Magic Link | EPIC-01 | Must Have | REQ-001 |
| **[REQ-003]** | Tải lên tài liệu trong phòng | EPIC-02 | Should Have | REQ-001, REQ-002 |
| **[REQ-004]** | Tìm kiếm tài liệu nâng cao | EPIC-02 | Could Have | REQ-003 |

### 5.3 SYSTEM BUSINESS RULES (Ràng buộc logic bất biến toàn hệ thống)
* **[BR-001]:** [Ví dụ: Liên kết mời Magic Link chỉ được phép sử dụng tối đa N lần theo cấu hình của loại liên kết]
* **[BR-002]:** [Ví dụ: Khi trạng thái giao dịch đã chuyển sang ĐÓNG, toàn bộ quyền chỉnh sửa dữ liệu bị khóa hoàn toàn]

---

## SECTION 6: USER STORIES, ACCEPTANCE CRITERIA & DEFINITION OF DONE (DoD)

### 6.1 USER STORIES & ACCEPTANCE CRITERIA
* **Câu chuyện [US-001] (Ánh xạ từ [REQ-001]): [Tên Câu Chuyện]**
    * *User Story:* As a [Actor], I want to [Action] so that [Benefit].
    * *Acceptance Criteria (AC):*
        1. [Tiêu chí nghiệm thu định lượng số 1, bắt buộc phải viết rõ ràng, không dùng tính từ cảm tính]
        2. [Tiêu chí nghiệm thu định lượng số 2...]
    * *Error Handling & Exception Rules:*
        * [Nếu điều kiện kiểm tra nghiệp vụ thất bại] ──► [Hệ thống phải từ chối hành động và trả về Mã lỗi X]

### 6.2 DEFINITION OF DONE (DoD - Tiêu chuẩn hoàn thành tổng thể)
> **Rule for AI PM & AI Developer:** Một Task vụ hoặc User Story chỉ được tính là hoàn thành 100% và sẵn sàng bàn giao khi và chỉ khi vượt qua đầy đủ các bộ lọc kiểm soát dưới đây:

1. **Code Completed:** Toàn bộ mã nguồn đã được viết, tối ưu hóa cấu trúc và không có lỗi biên dịch.
2. **Unit Test Passed:** Đạt tỷ lệ bao phủ mã nguồn tối thiểu theo quy định tại Mục 9.4 và tất cả các ca kiểm thử đều vượt qua thành công.
3. **Integration Test Passed:** Các module tương tác với nhau chính xác, không gây lỗi dây chuyền cho các tính năng cũ.
4. **Security Validation Passed:** Kiểm tra các lỗ hổng bảo mật cơ bản, mã hóa dữ liệu nhạy cảm và ma trận phân quyền hoạt động đúng thiết kế.
5. **Acceptance Criteria Passed:** Tính năng chạy đúng theo 100% các tiêu chí AC đã được định nghĩa tại Mục 6.1 dưới sự kiểm tra của AI PM.

---

## SECTION 7: DATA DESIGN, CONCURRENCY & DOMAIN WORKFLOWS (AI ARCHITECT CORE)

### 7.1 AGGREGATE DESIGN STRATEGY (DDD Boundaries)
> **Rule for AI Architect:** Project-specific boundary allocation. You must explicitly model and isolate domain data manipulation mutations based on the boundaries declared below.
* **Aggregate Root(s):** [e.g., DealRoom, Organization, Order, Billing]
* **Child Entities:** [Danh sách các thực thể con phụ thuộc trực tiếp vào vòng đời của Aggregate Root tương ứng]
* **Mutation Boundaries:** [Quy tắc ràng buộc ghi dữ liệu - ví dụ: Mọi lệnh ghi vào Thực thể con bắt buộc phải đi qua Aggregate Root Repository, nghiêm cấm ghi trực tiếp]

### 7.2 DATA DOMAIN MODEL ENTITIES
* **Entity: [Tên Thực Thể - Ví dụ: DealRoom]**
    * `field_name`: [Kiểu dữ liệu - Thuộc tính logic, ví dụ: UUID (v4) - Primary Key]
    * `field_hash`: [Kiểu dữ liệu - Chuỗi băm bảo mật, ví dụ: String (SHA-256)]
    * `version`: [Kiểu dữ liệu - Phiên bản theo dõi trạng thái dữ liệu phục vụ xử lý đồng thời]

### 7.3 STATE MACHINE MATRIX (Máy trạng thái)
* **Allowed State Transitions:**
    * `[STATE_A]` ──► `[STATE_B]`
    * `[STATE_B]` ──► `[STATE_A]`, `[STATE_C]`
* **State Violation Invariant:** Any mutation command attempting to bypass or jump steps outside the defined allowed routes must be rejected atomically with an application error code (e.g., `ERR_INVALID_STATUS_TRANSITION`).

### 7.4 CONCURRENCY STRATEGY
* **Selected Strategy:** [Explicitly Declare: OPTIMISTIC LOCKING or PESSIMISTIC LOCKING]
* **Concurrency Invariant Rule:** [Mô tả tiêu chuẩn kiểm soát - ví dụ: Hệ thống phải kiểm tra và so khớp số phiên bản dữ liệu trước khi thực hiện lệnh cập nhật]
* **Failure Handling:** [Hành vi hệ thống khi xảy ra xung đột ghi đồng thời - ví dụ: Hủy transaction, trả về mã lỗi ERR_CONCURRENT_MODIFICATION]

---

## SECTION 8: BOUNDARY SECURITY & PERMISSIONS

### 8.1 FUNCTIONAL AUTHORIZATION MATRIX (RBAC / ABAC)
| Action / API Endpoint | Super Admin | Operator | Role A | Role B |
| :--- | :---: | :---: | :---: | :---: |
| **[Action 1 - e.g., Create Room]** | Cho phép | Cho phép | Cho phép | Từ chối |
| **[Action 2 - e.g., Delete File]** | Cho phép | Cho phép | Từ chối | Từ chối |

### 8.2 DATA VISIBILITY SHIELDING MATRIX (Bảo mật mức bản ghi/tài liệu)
| Resource Type / Tag Classification | Super Admin | Operator | Role A | Role B |
| :--- | :---: | :---: | :---: | :---: |
| **[Resource Class 1 - e.g., Invoice]** | Hiển thị | Hiển thị | Hiển thị | Ẩn |
| **[Resource Class 2 - e.g., B/L]** | Hiển thị | Hiển thị | Hiển thị | Hiển thị |

---

## SECTION 9: API, EVENT SYSTEM CONTRACTS & TESTING (AI DEV CORE)

### 9.1 RESOURCE CATALOG (REST Endpoints / Stream Channels)
* **Resource: [Tên Resource, ví dụ: DealRoom]**
    * `POST /api/v1/deal-rooms` - [Mô tả chức năng khởi tạo tài nguyên]
    * `GET /api/v1/deal-rooms/:id` - [Mô tả chức năng lấy chi tiết dữ liệu]

### 9.2 UNIFIED API RESPONSE WRAPPERS
* **Success Envelope Layout (JSON):**
```json
    {
      "success": true,
      "data": {},
      "error": null
    }
    ```
* **Exception Error Envelope Layout (JSON):**
```json
    {
      "success": false,
      "data": null,
      "error": {
        "code": "ERR_IDENTIFIER_STRING",
        "message": "Detailed context message explaining the processing failure.",
        "timestamp": "ISO8601_UTC"
      }
    }
    ```

### 9.3 EVENT-DRIVEN CATALOG (Domain Events Contract)
* **Global Event Wrapper Envelope Schema:**
```json
    {
      "event_id": "UUIDv4",
      "event_type": "ENUM_EVENT_NAME",
      "aggregate_id": "UUID",
      "actor": { "id": "UUID", "role": "RoleType" },
      "timestamp": "ISO8601_UTC_Microseconds",
      "payload": {}
    }
    ```
* **Domain Event Registry List:** [Khai báo danh sách event, ví dụ: ROOM_CREATED, INVITATION_GENERATED, MESSAGE_SENT, STATUS_MUTATED]

### 9.4 TESTING CONTRACTS (Chỉ thị sinh Test Automation)
> **Rule for AI Developer:** You MUST generate automated test suites for this system. Code production without corresponding testing assertions will be rejected.
* **Target Metric:** Minimum Unit/Integration Test Coverage $\ge$ **[e.g., 80%]**
* **Critical Path Test Mandates (Phải viết bài kiểm tra bao phủ 100% các luồng sau):**
    1. [Luồng quan trọng 1: Ví dụ: Khởi tạo và mã hóa Magic Link token]
    2. [Luồng quan trọng 2: Ví dụ: Chuyển đổi trạng thái workflow và kiểm tra Optimistic Locking chống race condition]
    3. [Luồng quan trọng 3: Ví dụ: Kiểm tra ma trận ẩn/hiện tài liệu bảo mật mức dữ liệu]

---

## SECTION 10: SCREEN & UI CONTRACTS (Dành cho AI Frontend Engine)

### 10.1 SCREEN SPECIFICATION: [e.g., Deal Room Workspace]
* **Viewport UI Constraints:** [e.g., Real-time multi-panel frame, absolute layout compression responsive down to mobile viewports]
* **Interface Inputs Data:** [Dữ liệu đầu vào màn hình cần nhận, ví dụ: `room_id` parsed from URL / Active session token cookie validation]
* **Interface Outputs View:** [Dữ liệu Frontend cần hiển thị, ví dụ: Real-time message streaming, document attachment gallery nodes]
* **Authorized UI Actions:** [Các nút bấm/hành động người dùng có thể tương tác từ màn hình này để gọi API lên Backend]

---

## SECTION 11: QUALITY ATTRIBUTES & SYSTEM COMPLIANCE (NFR)

### 11.1 SYSTEM QUALITY ATTRIBUTES
* **Performance:** [e.g., Chat message propagation latency < 200ms, P95 API response times < 500ms]
* **Availability:** [e.g., Core link token exchange service targets 99.9% application uptime intervals]
* **Scalability:** [e.g., Stateless web server design to support dynamic horizontal auto-scaling nodes]
* **Observability:** [e.g., Structured logging output to stdout in standard JSON format for external log collectors]

### 11.2 IMMUTABLE SYSTEM AUDIT TRAIL
* **Audit Execution Rule:** Every single Domain Event cataloged in Section 9.3 MUST write an immutable, non-updatable audit trail trace record directly into the historical log database table.
* **Metadata Footprint Requirements:** Client IP address, User-Agent browser fingerprint, before/after state snapshot delta payload.

### 11.3 DATA RETENTION POLICY
* **System Event & Audit Logs Lifespan:** [Ví dụ: Duy trì liên tục trong cơ sở dữ liệu nóng và lạnh với thời gian tối thiểu là 7 năm phục vụ tra soát pháp lý]
* **Transactional Document Assets Lifespan:** [Ví dụ: Khóa chính sách xóa tệp tin trên kho lưu trữ đám mây với thời hạn tối thiểu là 7 năm]
* **Application Deletion Invariant (Soft-Delete only):** No hard row deletions are allowed on active primary databases. Systems must exclusively alter state tracking markers to hiding visibility frames (`is_deleted = true`).

---

## SECTION 12: FUTURE STRATEGIC AI ROADMAP (AI READINESS)
* **Data Lineage Architecture:** [Ví dụ: Bắt buộc duy trì liên kết siêu dữ liệu chronological giữa hash của file upload và bối cảnh dòng chat tại thời điểm đó, phục vụ việc xây dựng Vector Database cho mô hình RAG tìm kiếm và xử lý tranh chấp sau này]
