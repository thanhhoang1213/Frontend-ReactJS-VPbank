import React from "react";
import "./CoCauToChucPage.css";

function CoCauToChucPage() {
  return (
    <main style={{ margin: "0 30px" }}>
      <div>
        <div className="diagram-header" style={{ backgroundColor: "#00b74f" }}>
          Khối quản trị và phân tích dữ liệu
        </div>
        <div className="line-horizontal" />
        <div className="diagram-row">
          <div className="diagram-block">
            <a href="#hidden-content-1">
              <h2 className="underline-on-hover-2">Trung tâm Nền tảng dữ liệu</h2>
            </a>
            <div className="diagram-sub-block">Phòng quản lý dữ liệu</div>
            <div className="diagram-sub-block">Phòng tích hợp dữ liệu</div>
            <div className="diagram-sub-block">Phòng kiến trúc dữ liệu</div>
          </div>
          <div className="diagram-block">
            <a href="#hidden-content-2">
              <h2 className="underline-on-hover-2">Phòng quản trị dữ liệu</h2>
            </a>
          </div>
          <div className="diagram-block">
            <a href="#hidden-content-3">
              <h2 className="underline-on-hover-2">Trung tâm phân tích kinh doanh</h2>
            </a>
            <div className="diagram-sub-block">Phòng báo cáo phân tích KHCN</div>
            <div className="diagram-sub-block">Phòng báo cáo phân tích KHDN</div>
            <div className="diagram-sub-block">Phòng báo cáo phân tích khối hỗ trợ</div>
            <div className="diagram-sub-block">Phòng báo cáo phân tích thu hồi nợ</div>
          </div>
          <div className="diagram-block">
            <a href="#hidden-content-4">
              <h2 className="underline-on-hover-2">Trung tâm phân tích khoa học dữ liệu</h2>
            </a>
            <div className="diagram-sub-block">Phòng khoa học dữ liệu</div>
            <div className="diagram-sub-block">Phòng tích hợp công nghệ học máy</div>
          </div>
          <div className="diagram-block">
            <a href="#hidden-content-5">
              <h2 className="underline-on-hover-2">Phòng chiến lược và sáng kiến dữ liệu</h2>
            </a>
          </div>
          <div className="diagram-block">
            <a href="#hidden-content-6">
              <h2 className="underline-on-hover-2">Trung tâm dữ liệu và hệ sinh thái</h2>
            </a>
            <div className="diagram-sub-block">Phòng Customer 360</div>
            <div className="diagram-sub-block">Phòng tích hợp báo cáo và phân tích</div>
            <div className="diagram-sub-block">Phòng tích hợp khoa học dữ liệu</div>
            <div className="diagram-sub-block">Phòng tích hợp </div>
          </div>
        </div>
      </div>

      {/* The hidden content div */}
      <div id="hidden-content-1" className="hidden-content">
        <h3 style={{ color: "#02B84D" }}>Trung tâm Nền tảng dữ liệu</h3>
        <h4>
          <strong>1) Chức năng nhiệm vụ của trung tâm Nền tảng dữ liệu</strong>
        </h4>
        <h4>
          a) Chủ trì thiết kế kiến trúc dữ liệu toàn hàng và đảm bảo tính nhất quán với khung quản
          trị trong quá trình phát triển hệ thống dữ liệu và toàn hệ sinh thái
        </h4>
        <h4>
          b) Quản lý toàn diện luồng dữ liệu từ đầu tới cuối đối với các quy trình tích hợp, lưu trữ
          và xử lý dữ liệu sát luồng của dữ liệu từ đầu đến cuối, phục vụ cho mục đích tích hợp, lưu
          trữ và xử lý dữ liệu
        </h4>
        <h4>
          c) Quản lý sẵn sàng, khả năng truy cập và phân phối dữ liệu toàn bộ hệ thống như một sản
          phẩm
        </h4>
        <h4>
          d) Thực hiện các nhiệm vụ khách theo phân công của Ban Giám đốc và Giám đốc Trung tâm từng
          thời kỳ
        </h4>
        <h4> Nhiệm vụ cụ thể của các Phòng trực thuộc Trung tâm Nền tảng dữ liệu</h4>
        <h4>
          <strong>a) Phòng quản lý dữ liệu tập chung</strong>
        </h4>
        <h4>
          i. Với vai trò chủ quản hệ thống DWH; Quản lý toàn bộ danh mục yêu cầu, phân tích yêu càu,
          mô hình hoá, thiết kế giải pháp triển khai( lập trình phát triển, kiểm thử, đưa vào sử
          dụng) luồng dữ liệu, xử lý dữ liệu trên các phân vùng toàn hàng data zone(data lake, DWH)
          để phục vụ 2 nhóm người dùng:
        </h4>
        <h4> - Đơn vị sử dụng dữ liệu cho mục đích báo cáo, phân tích, AI/ML</h4>
        <h4>
          {" "}
          - Hệ thống/ ứng dụng cần dữ liệu lịch sử và/hoặc dữ liệu được quản lý kiểm soát để đảm bảo
          tính nhất quán và khả năng tái sử dụng về mặt biến đổi dữ liệu theo nguyên tắc nghiệp vụ
          giữa các hệ thống hạ nguồn
        </h4>
        <h4>
          ii. Quản lý và phân tích toàn bộ yêu cầu nghiệp vụ, xây dựng giải pháp mô hình hoá/thiết
          kế triển khai nguồn giữ liệu trong vùng dữ liệu cấp khối sử dụng chung giữa các phòng ban
          báo cáo phân tích(và một số phân vùng tự phục vụ dữ liệu nếu có)
        </h4>
        <h4>
          iii. Vận hành, duy trì hệ thống cung cấo dữ liệu bên vững, mạnh mẽ có thể mở rộng và tối
          ưu hoá chi phí
        </h4>
        <h4>
          iv. Đảm bảo đấp ứng yêu cầu dữ liệu mới của đội ngũ phân tích dữ liệu và khoa học dữ liệu
        </h4>
        <h4>
          v. Đảm bảo các tài liệu siêu dữ liệu của các hệ thống luôn sẵn và cập nhật để người dùng
          dẽ sử dụng
        </h4>
        <h4>
          iv. Quản lý toàn bộ quá trình phân tích yêu cầu, xây dựng giải pháp thiết kế và phát triển
          luồng dữ liệu và hệ thống báo cáo phù hợp với yêu cầu và quy định pháp luật từng thời kỳ
        </h4>
        <h4>
          vii. Liên tục cập nhật công nghệ mới và ứng dụng thực tiễn để không ngừng nâng cao chất
          lượng dịch vụ cung cấp dữ liệu
        </h4>
        <h4>
          <strong>b) Phòng Quản lý tích hợp dữ liệu</strong>
        </h4>
        <h4>
          i. Có vai trò xây dựng các sản phẩm dữ liệu mang tính hướng chủ đề và yêu cầu tuỳ chỉnh
          cho các mục đích cụ thể của từng Khối/Phòng ban
        </h4>
        <h4>
          ii. Vận hàng, duy trì các hệ thống cung cấp dữ liệu bên vững, mạnh mẽ, có thể mở rộng, tối
          ưu hoá chi phí
        </h4>
        <h4>
          iii. Đảm bảo đáp ứng nhu cầu phát triển dữ liệu mới theo yêu cầu của đội ngũ phân tích một
          cách nhanh chóng và cuốn chiếu
        </h4>
        <h4>
          iv. Đảm bảo các tài liệu siêu dữ liệu của hệ thống luôn sẵn sàng và cập nhật để người dùng
          dễ sử dụng
        </h4>
        <h4>
          v. Liên tục cập nhật công nghệ mới và áp dụng thực tế để không ngừng nâng cao chất lượng
          dịch vụ cung cấp dữ liệu
        </h4>
        <h4>vi. Quản lý vận hành phát triển 1 số hệ thống báo cáo của VPBank</h4>
        <h4>
          vii. Thực hiện các nhiệm vụ khác theo phân công của Ban Giám đốc Khối và Giám đốc Trung
          tâm từng thời kỳ
        </h4>
        <h4>
          <strong>c) Phòng Kiến trúc dữ liệu</strong>
        </h4>
        <h4>
          i. Thiết kế và phát triển kiến trúc dữ liệu liên quan đến hệ thống dữ liệu tại VPBank và
          toàn hệ sinh thái
        </h4>
        <h4>
          ii. Phát triển các nguyên tắc và khái niệm làm nền tảng cho kiến trúc dữ liệu và cung cấo
          việc quản trị về thiết kế hệ thống và khả năng tương tác hệ thống
        </h4>
        <h4>
          iii. Đóng vai trò lag đại diện và các đầu mối giữa các đơn vị chức năng về dữ liệu và các
          đơn vị chức năng CNTT cung như làm việc với Kiến trúc sư CNTT trong việc cung cấp chiến
          lược dữ liệu và CNTT toàn hàng
        </h4>
        <h4>
          iv. Thực hiện các nhiệm vụ khác theo phân công của Ban Giám đốc Khối và Giám đốc Trung tâm
          từng thời kỳ
        </h4>
      </div>

      <div id="hidden-content-2" className="hidden-content">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t\t  /* ... (các định nghĩa CSS khác của bạn) ... */\n\t\t\t\t\n\t\t\t\t  .hidden-content h4 {\n\t\t\t\t\tfont-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t\t\t  }\n\t\t\t\t  .hidden-content h3, .hidden-content h4 {\n\t\t\t  margin-top: 0.4em; /* Reduces the top margin */\n\t\t\t  margin-bottom: 0.4em; /* Reduces the bottom margin */\n\t\t\t}\n\t\t  \n\t\t\t.hidden-content h4 {\n\t\t\t  font-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t\t}\n\t\t\t\t",
          }}
        />
        <h3 style={{ color: "#02B84D" }}>Phòng quản trị dữ liệu </h3>
        <h4>1. Xây dựng và duy trì khung quản trị và chính sách dữ liệu toàn hàng</h4>
        <h4>
          2. Xây dựng chính sách duy trì chất lượng dữ liệu và thúc đẩy ứng dụng tốt nhất của các
          hoạt động sử dụng dữ
        </h4>
        <h4>
          3. Xây dựng và phát triển khung quản trị và chính sách phân tích dữ liệu toàn hàng đối với
          việc ứng dụ trí tuệ nhân tạo và phân tích số liệu
        </h4>
        <h4>
          4. Hỗ trợ xây dựng chiến lược quản trị dữ liệu toàn hàng và là đơn vị điều phối các đơn vị
          kinh doanh trong việc cấu trúc yêu cầu dữ liệu và phân tích
        </h4>
        <h4>
          5. Triển khai các hoạt động kiểm tra, giám sát đảm bảo việc triển khai và tuân thủ các
          chính sách và chiến lược dữ liệu quy định tại khoản 1,2,3,4 Điều này
        </h4>
        <h4>
          6. Tham gia tổ chức và cử cán bộ đầu mối điều phối và thư ký các cuộc họp hội đồng dữ liệu
          và phân tích
        </h4>
        <h4>7. Thực hiện các nhiệm vụ khác theo phân công của Ban Giám đốc Khối từng thời kỳ</h4>
      </div>

      <div id="hidden-content-3" className="hidden-content">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t  /* ... (các định nghĩa CSS khác của bạn) ... */\n\t\t\t\n\t\t\t  .hidden-content h4 {\n\t\t\t\tfont-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t\t  }\n\t\t\t  .hidden-content h3, .hidden-content h4 {\n\t\t  margin-top: 0.4em; /* Reduces the top margin */\n\t\t  margin-bottom: 0.4em; /* Reduces the bottom margin */\n\t\t}\n\t  \n\t\t.hidden-content h4 {\n\t\t  font-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t}\n\t\t\t",
          }}
        />
        <h3 style={{ color: "#02B84D" }}>Trung tâm phân tích kinh doanh</h3>
        <h4>
          <strong>1.Chức năng nhiệm vụ của Trung tâm Phân tích kinh doanh</strong>
        </h4>
        <h4>
          a) Thiết kế và triển khai báo cáo, phân tích cho các đơn vị được hỗ trợ tương ứng, thông
          qua việc phát triển các mô hình phân tích hệ thống và các kĩ thuật xây dựng báo cáo,
          dashboard.
        </h4>
        <h4>
          b)Xây dựng và trực quan hoá báo cáo, dashboard để cung cấp các thông tin chuyên sâu cho
          các đơn vị hỗ trợ tương ứng.
        </h4>
        <h4>
          c) Là đối tác cho các khối kinh doanh và hỗ trợ tương ứng, giúp phát triển chiến lược BI
          vớimục tiêu chung là đạt được các mục tiêu kinh doanh.
        </h4>
        <h4>d) Thực hiện các nhiệm vụ khác theo phân công của Ban giám đốc Khối từng thời kỳ. </h4>
        <h4>
          <strong>
            2. Nhiệm vụ cụ thể của các Phòng trực thuộc Trung tâm Phân tích kinh doanh
          </strong>
        </h4>
        <h4>
          <strong>a) Phòng báo cáo phân tích kinh doanh cá nhân</strong>
        </h4>
        <h4>
          i. Tiếp nhận và xử lý các yêu cầu cung cấp dữ liệu/báo cáo từ Khối Khách hàng cá nhân
        </h4>
        <h4>
          ii. Thiết kế và triển khai báo cáo/phân tích tình hình hoạt động kinh doanh của Khối Khách
          hàng cá nhân
        </h4>
        <h4>iii. Theo dõi việc sử dụng sản phẩm, dịch vụ của Khối Khách hàng cá nhân</h4>
        <h4>
          iv. Tính toán KPI và lương kinh doanh cho cán bộ bán hàng của Khối Khách hàng cá nhân
        </h4>
        <h4>
          v. Tính toán chi phí dịch vụ cho công ty cung cấp dịch vụ hỗ trợ bán hàng cho Khối Khách
          hàng cá nhân
        </h4>
        <h4>
          vi. Thực hiện các nhiệm vụ khác theo phân công của Ban Giám đốc Khối và Giám đốc Trung tâm
          từng thời kỳ
        </h4>
        <h4>
          <strong>b) Phòng Báo cáo phân tích Khách hàng doanh nghiệp</strong>
        </h4>
        <h4>
          i. Tiếp nhận và xử lý các yêu cầu cung cấp dữ liệu/báo cáo từ các Khối kinh doanh phụ
          trách phân khúc Khách hàng doanh nghiệp
        </h4>
        <h4>
          ii. Thiết kế và triển khai báo cáo/phân tích tình hình hoạt độngmkinh doanh của các Khối
          kinh doanh phụ trách phân khúc khách hàng doanh nghiệp
        </h4>
        <h4>
          iii. Theo dõi việc xử dụng sản phẩm, dịch vụ của các Khối kinh doanh phụ trách phân khúc
          Khách hàng doanh nghiệp
        </h4>
        <h4>
          iv. Tính toán KPI và lương kinh doanh cho cán bộ bán hàng của các Khối kinh doanh phụ
          trách phân khúc Khách hàng doanh nghiệp{" "}
        </h4>
        <h4>
          v. Tính toán phí dịch vụ/hoa hồng môi giới với các công ty cung cấp dịch vụ hỗ trợ bán
          hàng và các đối tác của khối kinh doanh phụ trách phân khúc Khách hàng doanh nghiêp
        </h4>
        <h4>
          vi. Thực hiện các nhiệm vụ khạc theo phân công của Ban Giám đốc khối và Giám đốc Trung tâm
          từng thời kỳ
        </h4>
        <h4>
          <strong>c) Phòng báo cáo phân tích hỗ trợ</strong>
        </h4>
        <h4>i. Tiếp nhân yêu cầu cung cấp dữ liệu/báo cáo từ các phòng, ban, đơn vị Khối hỗ trợ</h4>
        <h4>
          ii. Cung cấp, xây dựng và thực hiện cấc báoa cáo/phân tích liên quan đến các chỉ số vận
          hành
        </h4>
        <h4>
          iii. Phát triển và duy trì hệ thống báo cáo tự động/phân tích đầy đủ và toàn diện cho các
          Khối hỗ trợ
        </h4>
        <h4>
          iv. Thực hiện các nhiệm vụ khác theo phân công của Ban giám đốc Khối và Giám đốc Trung tâm
          từng thời kỳ
        </h4>
        <h4>
          <strong>d) Phòng báo cáo phân tích thu hồi nợ</strong>
        </h4>
        <h4>
          i. Tiếp nhân và xử lý các yêu cầu cung cấp dữ liệu/báo cáo thu hồi nợ từ Trung tâm xử lý
          nợ pháp lý(LCC), Trung tâm thu hồi nợ KHCN- Khối Khách hàng cá nhân(RCC) và Hội đồng thu
          hồi nợ(COC)
        </h4>
        <h4>
          ii. Thiết kế và thực hiện các báo cáo/phân tích nhằm tìm ra các yếu tố, nguyên nhân và
          giải pháp cải thiện hoạt động thu hồi nợ
        </h4>
        <h4>
          iii. Tính toán KPI, lương kinh doanh, các chương trình thúc đẩy hiệu qủa thu hồi nợ cho
          các cán bộ thuộc trung tâm thu hồi nợ, đối tác cung cấp dịch vụ. pháp lý liên quan đến
          khách nợ
        </h4>
        <h4>
          iv. Thực hiện các nhiệm vụ khác theo phân công của Ban Giám đốc Khối và Giám đốc trung tâm
          từng thời lỳ
        </h4>
      </div>

      <div id="hidden-content-4" className="hidden-content">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t  /* ... (các định nghĩa CSS khác của bạn) ... */\n\t\t\t\n\t\t\t  .hidden-content h4 {\n\t\t\t\tfont-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t\t  }\n\t\t\t  .hidden-content h3, .hidden-content h4 {\n\t\t  margin-top: 0.4em; /* Reduces the top margin */\n\t\t  margin-bottom: 0.4em; /* Reduces the bottom margin */\n\t\t}\n\t  \n\t\t.hidden-content h4 {\n\t\t  font-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t}\n\t\t\t",
          }}
        />
        <h3 style={{ color: "#02B84D" }}>Trung tâm phân tích khoa học dữ liệu</h3>
        <h4>
          <strong> Chức năng nhiệm vụ của Trung tâm khoa học dữ liệu</strong>
        </h4>
        <h4>
          a) Xây dựng mô hình báo cáo và phân tích tối ưu hoá cho các đơn vị kinh doanh và vận hàng,
          thông qua việc sử dụng khoa học dữ liệu và các kĩ thuật học máy
        </h4>
        <h4>
          b)Triển khai đóng gói các mô hình, phần mềm source code, API cũng như phát triển các hệ
          thống công vụ trực quan với mục tiêu cung cấp giải pháp nâng cao cho các đơn vị
        </h4>
        <h4>
          c) Là đối tác với các đơn vị trong VPBank trong việc tư vấn phát triển ứng dụng công nghệ
          học mấy và trí tuệ nhân tạo(ML/AI) vào công tác vận hành, quản trị thúc đẩy hiệu quả kinh
          doanh
        </h4>
        <h4>d) Thực hiện các nghiệm vụ khác phân công của Ban Giám đốc Khối từng thời kỳ</h4>
        <h4>
          <strong>Nhiệm vụ cụ thể của các Phòng trưch thuộc trung tâm Khoa học dữ liệu</strong>
        </h4>
        <h4>
          <strong>a) Phòng Khoa học dữ liệu</strong>
        </h4>
        <h4>
          i. Ứng dụng kỹ thuật xử lý và phân tích dữ liệu lớn, phân tích nâng cao và học máy hỗ trợ
          tăng trưởng kinh doanh, tối ưu hoạt động cho các Khối kinh doanh và Khối hỗ trợ, tận dụng
          dữ liệu có cấu trúc để thúc đẩy bấ hà ,tiếp thị bán chéo, thu hút bán hàng, cải thiện
          chiến lược phát triển sản phẩm và vận hành hiệu quả
        </h4>
        <h4>
          ii. Là đơn vị đảm nhận vị trí chuyên gia tư vấn cho cả hệ sinh thái trong việc ứng dụng
          phân tích, tận dụng kỹ thuật phân tích phi cấu trúc( ví dụ d xử lý ngôn ngữ tự nhiên-NPL)
          để nang cao trải nhiệm khách hàng
        </h4>
        <h4>
          iii. Thúc đẩy danh mục sáng kiến/dự án khoa học dữ liệu trên toàn bộ lĩnh vực kinh doanh
          và vận hành/hỗ trợ, bao gồm các giai đđoạn chính trong hành trình khách hàng từ khi bắt
          đầu đến khi kết thúc, bao gòm tiếp thị, giới thiệu, giao dịch, bán chéo, giữ chân khách
          hàng ở cae kênh vật lý đến kênh kỹ thuật số
        </h4>
        <h4>
          iv. Thực hiện các nhiệm vụ khách theo phân công của Ban Giám đốc và Giám đốc Trung tâm
          từng thời kỳ
        </h4>
        <h4>
          <strong>b)Phòng tích hợp công nghệ máy</strong>
        </h4>
        <h4>
          i. Ứng dụng các phương pháp kỹ thuật học máy và các phương pháp tiên tiến trong việc xây
          dựng, phát triển và tích hợp các mô hình dư báo để có thể triển khai dưới dạng ứng dụng
          phần mềm hoặc API
        </h4>
        <h4>
          ii. Phát triển ứng dụng giao diện người dùng, trực quan hoá tương tác với dashboard để
          cung cấp thông tin chi tiết cho người dùng
        </h4>
        <h4>
          iii. Tận dụng Cloud services và nền tảng dữ liệu lớn để tái cấu trúc và tối ưu hoá code
          trong môi trường tích hợp production
        </h4>
        <h4>
          iv. Phát triển và giám sát kiến trúc mấy tính bao (gồm ngân hàng và hệ sinh thái) trong
          việc phân phối các kết quả/sản phẩm phân tích từ đầu đến cuối
        </h4>
        <h4>
          iv. Thực hiện các nhiệm vụ khách theo phân công của Ban Giám đốc và Giám đốc Trung tâm
          từng thời kỳ
        </h4>
      </div>

      <div id="hidden-content-5" className="hidden-content">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t  /* ... (các định nghĩa CSS khác của bạn) ... */\n\t\t\t\n\t\t\t  .hidden-content h4 {\n\t\t\t\tfont-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t\t  }\n\t\t\t  .hidden-content h3, .hidden-content h4 {\n\t\t  margin-top: 0.4em; /* Reduces the top margin */\n\t\t  margin-bottom: 0.4em; /* Reduces the bottom margin */\n\t\t}\n\t  \n\t\t.hidden-content h4 {\n\t\t  font-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t}\n\t\t\t",
          }}
        />
        <h3 style={{ color: "#02B84D" }}>Phòng chiến lược và sáng kiến dữ liệu</h3>
        <h4>
          1. Xây dựng và thúc đẩy triển khia chiến lược đổi mới Dữ liệu lớn và AI, đồng thời dẫn dắt
          các đơn vị xây dựng các phương pháp mới trong việc triển khai và sử dụng dữ liệu
        </h4>
        <h4>
          2. Đóng vai trò đầu mối triển khai hoạt động liên quan tới dữ liệu khi có yêu cầu đồng
          thời liên quan tới nhiều mảng chức năng, nhiệm vụ trong khối
        </h4>
        <h4>
          3. Thúc đẩy và phân phối việc thiết kế chương trình giảng dạy và chương trình đào tao và
          phát triển kỹ năng mềm và kỹ thuật cần thiết cho đơn vị BI,AI,ML
        </h4>
        <h4>
          4. Phát triển các sáng kiến, bao gồm việc xây dựng, triển khai và điều phối chương trình,
          hội thảo, diễn đàn, hackathon để thu hút các đơn vị hỗ trợ và kinh doanh trong toàn hệ
          sinh thái sử dụng và phân tích 1 cách hiệu quả
        </h4>
        <h4>
          5. Phát triển cộng đồng gồm các chuyên gia trong lĩnh vực dưx liệu để xây dựng văn hoá,
          chia sẻ kiến thức , kinh nghiệm và đổi mới
        </h4>
        <h4>6. Thực hiện các nhiệm vụ khác theo. phân công của Ban giám đốc Khối từng thời kì</h4>
      </div>

      <div className="row">
        <div className="col-lg-7" />
        <div id="hidden-content-6" className="hidden-content">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t  /* ... (các định nghĩa CSS khác của bạn) ... */\n\t\t\t\t\n\t\t\t\t  .hidden-content h4 {\n\t\t\t\t\tfont-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t\t\t  }\n\t\t\t\t  .hidden-content h3, .hidden-content h4 {\n\t\t\t  margin-top: 0.4em; /* Reduces the top margin */\n\t\t\t  margin-bottom: 0.4em; /* Reduces the bottom margin */\n\t\t\t}\n\t\t\t.hidden-content h4 {\n\t\t\t  font-weight: normal; /* Set the font weight to normal for <h4> tags within .hidden-content */\n\t\t\t}\n\t\t\t\t",
            }}
          />
          <h3 style={{ color: "#02B84D" }}>Trung tâm dữ liệu và hệ sinh thái</h3>
          <h4>
            {" "}
            a) (Data) Thúc đẩy thiết kế kiến trúc dữ liệu hệ sinh thái, phát triển nền tảng 360 độ
            của khách hàng, cũng như quản lý và quản trị tích hợp dữ liệu hệ sinh thái dưới dạng 1
            sản phẩm hoàn chỉnh
          </h4>
          <h4>
            b) (Analytics) Cung Cấp dữ liệu tin cậy về hệ sinh thái và tận dụng các kỹ thuật phân
            tích dữ liệu và trí tuệ nhân tạo/học máy(BI và AI/ML) để xây dựng báo cáo, phân tích sâu
            sắc về khách hàng(insights) và các ứng dụng khác nhau nhằm thúc đẩy và phát triển kinh
            doanh, gia tăng các hoạt động tương tác và tối ưu hoá hiệu quả hoạt động
          </h4>
          <h4>
            c) (Innovation) Hỗ trợ Ban Giám độc Khối trong việc giám sát các vấn đề liên quan đến
            chiến lược dữ liệu, quản lý, quản trị, phân tích dữ liệu(BI) và ( trí tuệ nhân tạo) AI
            cũng như khám phá các cách chiến lược, sáng tạo trong quy mô của cả hệ sinh thái.
          </h4>
          <h4>d) Thực hiện các nghiệm vụ khác phân công của Ban Giám đốc Khối từng kỳ </h4>
          <h4>
            <strong>Nhiệm vụ cụ thể của các phòng trực thuộc Trung tâm Dữ liệu hệ sinh thái</strong>
          </h4>
          <h4>
            <strong>a) Phòng Customer 360</strong>
          </h4>
          <h4>
            i. Là đầu mối chịu trách nhiệm thiết kế kiến trúc và tích hợp dữ liệu và tích hợp dữ
            liệu để hỗ trợ xây dựng góc nhìn toàn diện 360 độ khách hàng cho hệ sinh thái
          </h4>
          <h4>
            ii. Là đầu mối chịu trách nhiệm thúc đẩy viẹc xây dựng và quản lý kho lưu trữ trung tâm
            của cả hệ sinh thái và thúc đẩy việc cung cấp và sử dụng dữ liệu
          </h4>
          <h4>
            iii. Đóng vai trò là đơn vị điều. phối các dự án và sáng kiến của cả hệ sinh thái liên
            quan đến hệ thống và ứng dụng dữ liệu
          </h4>
          <h4>
            iv. Thực hiện các nhiệm vụ khách theo phân công của Ban Giám đốc và Giám đốc Trung tâm
            từng thời kỳ
          </h4>
          <h4>
            <strong>b) Phòng tích hợp báo cáo phân tích</strong>
          </h4>
          <h4>
            i. Chịu trách nhiệm thiết kế và tích hợp các trông tin chuyên sâu mang tính mô tả và
            chuẩn đoán về các công ty trong hệ sinh thái, sử dụng các mô hình phân tích thống kê và
            báo cáo phân tích
          </h4>
          <h4>
            ii. Xây dựng hệ thống BI, trực quan hoá tích hợp, báo cáo và thúc đẩy việc cung cấp sản
            phẩm chung về các công ty con trong hệ sinh thái
          </h4>
          <h4>
            iii. Chịu trách nhiệm trong viêc phát triển chiến lược BI tương ứng với mục tiêu chung
            là đạt được tác đông bền vững đến các công ty con trong hệ sinh thái
          </h4>
          <h4>
            iv. Thực hiện các nhiệm vụ khách theo phân công của Ban Giám đốc và Giám đốc Trung tâm
            từng thời kỳ
          </h4>
          <h4>
            <strong>Phòng tích hợp khoa học dữ liệu</strong>
          </h4>
          <h4>
            a) Chịu trách nhiệm trong việc thiết kế và tích hợp kết quả dự báo/tối ưu hoá về công ty
            con trực thuộc hệ sinh thái, sử dụng khoa học dữ liệu và kỹ thuật học máy
          </h4>
          <h4>
            b) Đóng gói các mô hình, phần mềm, API cũng như tích hợp phát triển các hệ thống
            dashboard trong việc cung cấp các giải pháp phân tích nâng cao về các công ty con trực
            thuộc hệ sinh thái dưới dạng các dự án/tiêu dự án
          </h4>
          <h4>
            c) Là đối tác của các công ty con trong hệ sinh thái trong việc phát triển chiến lược AI
            với mục tiêu chung là tạo ra được các hoạt động bền vững đến khách hàng
          </h4>
          <h4>
            d) Thực hiện các nhiệm vụ khách theo phân công của Ban Giám đốc và Giám đốc Trung tâm
            từng thời kỳ
          </h4>
          <h4>
            <strong>Phòng tích hợp quản trị dữ liệu</strong>
          </h4>
          <h4>
            a) Ban hành khung chính sách về quản trị dữ liệu, chất lương dữ liệu áp dụng toàn bộ các
            công ty con trong hệ sinh thái
          </h4>
          <h4>
            b) Thúc đẩy các phương pháp tiên tiến nhất gia tăng trách nhiệm trong việc sử dụng dữ
            liệu, phân tích và ứng dụng trí tuệ nhân tạo áp dụng toàn hệ sinh thái
          </h4>
          <h4>
            b) Hỗ trợ Ban Giám đốc Khối trong việc phát triển chiến lược dữ liệu hệ sinh thái và
            đóng vai trò là đơn vị điều phối cùng với các công ty con của hệ sinh thái trong việc
            thúc đẩy các sáng kiến phân tích dữ liệu
          </h4>
          <h4>
            d) Thực hiện các nhiệm vụ khách theo phân công của Ban Giám đốc và Giám đốc Trung tâm
            từng thời kỳ
          </h4>
        </div>
      </div>
    </main>
  );
}

export default CoCauToChucPage;
