import { Metadata } from "next";
import Image from "next/image";

type Props = {};

export const metadata: Metadata = {
  title: "Chính sách bồi thường",
  description:
    "Chính sách bồi thường của chành xe miền tây, chúng tôi cung cấp rõ ràng tất cả trường hợp và chi tiết giá trị bồi thường.",
  alternates: {
    canonical: "/policy",
  },
};
const Policy = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="pt-[68px] h-full max-w-screen py-8 mx-auto px-4 md:px-12 lg:px-40">
        <h1 className="py-5 text-4xl font-bold text-center bg-primary-color text-white">
          CHÍNH SÁCH BỒI THƯỜNG
        </h1>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">I. Thuật ngữ</h2>
          <div className="space-y-4">
            <p>
              <strong>“CXMT”</strong> có nghĩa là Công ty Cổ phần Dịch vụ Giao
              Hàng Nhanh.
            </p>

            <p>
              <strong>“Khách hàng”</strong> có nghĩa là cá nhân hoặc tổ chức sử
              dụng Dịch vụ của CXMT.
            </p>

            <p>
              <strong>“Bưu gửi”</strong> có nghĩa là thư, gói, kiện hàng hóa
              được GNH chấp nhận, vận chuyển và phát hợp pháp trong hệ thống bưu
              cục của CXMT.
            </p>

            <p>
              <strong>“Đơn hàng”</strong> có nghĩa là yêu cầu thực hiện Dịch vụ
              được Khách hàng thiết lập qua Hệ thống hoặc được viết tay dưới
              dạng Phiếu gửi/Phiếu yêu cầu Dịch vụ có đầy đủ thông tin về Bưu
              gửi.
            </p>

            <p>
              <strong>“Dịch vụ”</strong> có nghĩa là dịch vụ liên quan việc giao
              nhận Bưu gửi, bao gồm: chấp nhận, vận chuyển và phát Bưu gửi bằng
              các phương thức khác nhau từ địa điểm do Khách hàng chỉ định đến
              địa điểm của người nhận.
            </p>

            <p>
              <strong>“Hệ thống”</strong> có nghĩa là phần mềm ứng dụng được cài
              đặt trên thiết bị di động hoặc website mà CXMT thiết lập cho việc
              sử dụng Dịch vụ của Khách hàng, bao gồm tạo, quản lý, theo dõi
              tiến độ của Đơn hàng; thanh toán cước Dịch vụ; kiểm soát, đối
              chiếu dữ liệu về Bưu gửi và cước Dịch vụ.
            </p>
          </div>
        </section>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">
            II. KHAI BÁO GIÁ TRỊ HÀNG HÓA
          </h2>
          <div className="space-y-4">
            <p>
              Khai báo Giá trị Hàng hóa (
              <strong>“Khai báo Giá trị Hàng hóa”</strong>) được xác định theo
              quy định tại Mục II này sẽ là căn cứ để tính trách nhiệm bồi
              thường của CXMT theo quy định tại Mục III dưới đây.
            </p>
            <p>
              Cho mục đích của Chính sách bồi thường này, Giá trị Bưu gửi sẽ
              được xác định là giá trị được ghi/thể hiện trên hóa đơn có giá trị
              pháp lý mà người bán xuất cho Khách hàng cho việc mua Hàng hóa đó
              <strong> (“Hóa đơn”)(*) </strong>, với điều kiện là mô tả về Hàng
              hóa được nêu trên Hóa đơn phù hợp với mô tả mà Khách hàng tự ghi
              trên Đơn hàng.
            </p>
            <p>
              <strong>(*) Lưu ý:</strong> Hóa đơn có giá trị pháp lý là:
            </p>
            <ul className="list-disc list-outside pl-10">
              <li>
                Hóa đơn giá trị gia tăng, nếu người bán là doanh nghiệp kê khai
                thuế giá trị gia tăng (<strong>“GTGT”</strong>) theo phương pháp
                khấu trừ; hoặc
              </li>
              <li>
                Hóa đơn bán hàng, nếu người bán là doanh nghiệp kê khai thuế
                GTGT theo phương pháp trực tiếp; hoặc
              </li>
              <li>
                Bộ hồ sơ kê khai hải quan, nếu Hàng hóa được nhập khẩu từ nước
                ngoài vào Việt Nam.
              </li>
            </ul>
          </div>
        </section>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">
            III. BỒI THƯỜNG BỞI CXMT
          </h2>
          <h3 className="text-2xl font-bold mb-2">
            3.1. Trường hợp Bưu gửi bị mất, thất lạc, hư hỏng
          </h3>
          <div className="space-y-4">
            <p>
              CXMT sẽ chịu trách nhiệm bồi thường cho Khách hàng nếu Bưu gửi bị
              hư hỏng, mất mát hoặc thất lạc xảy ra trong quá trình CXMT cung
              ứng Dịch vụ gây ra do lỗi của CXMT. Trách nhiệm của CXMT chỉ giới
              hạn trong thiệt hại và tổn thất trực tiếp và thực tế gây ra cho
              hoặc liên quan đến Bưu gửi. Các loại thiệt hại hoặc tổn thất khác
              (bao gồm nhưng không hạn chế bởi tổn thất lợi nhuận, thu nhập, cơ
              hội kinh doanh) sẽ bị loại trừ.
            </p>
            <p>
              <strong>
                a. Bưu gửi là thư từ, tài liệu, ấn phẩm, giấy tờ, hóa đơn, hợp
                đồng và các loại văn bản khác:
              </strong>
            </p>
            <p>
              Trong trường hợp Bưu gửi bị hư hỏng, mất mát hoặc thất lạc, khoản
              tiền bồi thường CXMT sẽ trả cho Khách hàng sẽ bằng 04 (bốn) lần
              Cước phí của Dịch vụ đã sử dụng.
            </p>

            <p>
              <strong>
                b. Bưu gửi là vật phẩm, hàng hóa hoặc Phiếu có giá trị quy đổi:
              </strong>
            </p>
            <p>
              <strong>
                b.1. Trường hợp Bưu gửi bị mất, thất lạc toàn bộ bưu gửi
              </strong>
            </p>
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702292916/capstone/chinh-sach-boi-thuong-1.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="chinh-sach-boi-thuong"
            />
            <p>
              <strong>b.2. Trường hợp Bưu gửi bị hư hỏng:</strong>
            </p>
            <p>
              Khoản tiền bồi thường sẽ phụ thuộc vào mức độ hư hỏng của Bưu gửi,
              cụ thể được xác định như sau:
            </p>
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702292916/capstone/chinh-sach-boi-thuong-2.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="chinh-sach-boi-thuong-2"
            />
            <p>
              <strong>Khách hàng thừa nhận và đồng ý rằng:</strong>
            </p>
            <ul className="list-disc list-outside pl-10">
              <li>
                (i) CXMT sẽ bồi thường cho trường hợp Bưu gửi bị hư hỏng mà
                không có nghĩa vụ phải truy cứu nguyên nhân của các hư hỏng đó;
              </li>
              <li>
                (ii) Mức độ hư hỏng của Bưu gửi sẽ do CXMT có toàn quyền xác
                minh và quyết định; (ii) Trong trường hợp Bưu gửi bị hư hỏng
                trên 50% thì CXMT sẽ được quyền sở hữu hàng hóa trong Bưu gửi
                đó. Khách hàng cam kết sẽ, đồng ý vô điều kiện và tuân theo mọi
                yêu cầu của CXMT, để ký kết các tài liệu cần thiết cho mục đích
                chuyển quyền sở hữu đối với hàng hoá đó.
              </li>
            </ul>
            <p>
              <strong>
                b.3. Trường hợp mất, thất lạc hoặc hư hỏng một hoặc một vài sản
                phẩm không đi liền theo bộ trong cùng một Bưu gửi:
              </strong>
            </p>
            <p>
              (i) Trường hợp xảy ra mất, thất lạc một hoặc một vài sản phẩm
              không đi liền theo bộ trong cùng một Bưu gửi:
            </p>
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702292916/capstone/chinh-sach-boi-thuong-3.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="chinh-sach-boi-thuong-2"
            />
            <p>
              (ii) Trường hợp hư hỏng một hoặc một vài sản phẩm không đi liền
              theo bộ trong cùng một Bưu gửi:
            </p>
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702292916/capstone/chinh-sach-boi-thuong-4.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="chinh-sach-boi-thuong-2"
            />
          </div>
        </section>
        <section className="py-3 w-full mb-3">
          <h2 className="text-2xl font-bold uppercase mb-3">
            IV. BỒI THƯỜNG BỞI KHÁCH HÀNG
          </h2>
          <div className="space-y-4">
            <p>
              Khách hàng thừa nhận và đồng ý sẽ bồi thường, bảo vệ và giữ cho
              CXMT và cổ đông, giám đốc, người quản lý, nhân viên, nhà thầu, tư
              vấn của CXMT (các “Bên được bồi thường của CXMT”) không bị ảnh
              hưởng và tránh khỏi bất kỳ và mọi thiệt hại, tổn thất, chi phí và
              phí (bao gồm phí pháp lý), yêu cầu, trách nhiệm, khiếu kiện, lệnh,
              yêu cầu, hành động của cơ quan nhà nước có thẩm quyền, có thể được
              đưa ra chống lại hoặc phải gánh chịu bởi CXMT và các Bên được bồi
              thường của CXMT, là hậu quả của hoặc phát sinh từ hoặc có liên
              quan đến:
            </p>
            <ul className="list-disc list-outside pl-10">
              <li>
                Thiệt hại, hư hỏng, tổn thất, mất mát, hao hụt, trách nhiệm, yêu
                cầu, khiếu kiện liên quan đến Bưu gửi đó gây ra bởi hành động
                hoặc việc không thực hiện một hành động nào của Khách hàng, bao
                gồm nhưng không hạn chế bởi việc cung cấp, kê khai thông tin về
                Bưu gửi không đúng hoặc thiếu sót; đóng gói, bao bọc Bưu gửi
                không đầy đủ, không phù hợp, không cẩn thận, không tuân thủ quy
                định, hướng dẫn về đóng gói của CXMT, nhà sản xuất hay quy định
                của pháp luật; Thông tin Người Nhận không đúng hoặc thiếu sót;
                hoặc
              </li>
              <li>
                Bưu gửi thuộc trường hợp bị cấm gửi, chấp nhận, vận chuyển theo
                quy định của pháp luật; hoặc
              </li>
              <li>Khách hàng vi phạm quy định pháp luật.</li>
            </ul>
          </div>
        </section>
        <section className="py-3 w-full mb-3">
          <h2 className="text-2xl font-bold uppercase mb-3">
            V. Miễn trừ trách nhiệm
          </h2>
          <div className="space-y-4">
            <p>
              Khách hàng thừa nhận và đồng ý CXMT sẽ được miễn trừ trách nhiệm
              và sẽ vô can đối với bất kỳ và mọi thiệt hại, tổn thất, mất mát,
              hư hỏng, bồi thường, chậm trễ, yêu cầu, trách nhiệm, khiếu kiện,
              hành động của Khách hàng và/hoặc cơ quan nhà nước có thẩm quyền có
              thể được đưa ra chống lại hoặc phải gánh chịu bởi CXMT và các Bên
              được bồi thường của CXMT liên quan đến Bưu gửi được gây ra bởi,
              phát sinh từ, hoặc liên quan đến:
            </p>
            <ul className="list-disc list-outside pl-10">
              <li>
                Sự không tuân thủ bởi Khách hàng bất kỳ quy định của pháp luật
                về hàng hóa cấm hoặc hạn chế lưu thông, vận chuyển và các quy
                định khác của pháp luật (bao gồm, nhưng không hạn chế bởi trường
                hợp Bưu gửi không có hóa đơn, chứng từ nguồn gốc xuất xứ; bị
                kiểm tra, tạm giữ, tịch thu hoặc tiêu hủy (dẫn đến bị mất mát,
                giảm khối lượng, giảm chất lượng hay hư hỏng toàn bộ hoặc một
                phần) theo quyết điṇh của cơ quan có thẩm quyền hoặc an ninh sân
                bay.
              </li>
              <li>
                Sự không tuân thủ bởi Khách hàng bất kỳ thỏa thuận nào về sử
                dụng Dịch vụ của CXMT, hoặc bất kỳ quy định, chính sách nào của
                CXMT (bao gồm, nhưng không hạn chế bởi Bưu gửi nằm ngoài phạm vi
                nhận vận chuyển của CXMT, địa chỉ giao hoặc nhận Bưu gửi không
                thuộc phạm vi cung ứng Dịch vụ của CXMT, Bưu gửi thuộc danh mục
                hàng hóa không được vận chuyển qua đường hàng không; Khách hàng
                không thực hiện đúng các quy định về khiếu nại, giải quyết tranh
                chấp theo luật định hoặc theo Chính sách chăm sóc Khách hàng của
                CXMT);
              </li>
              <li>
                Hành động hoặc không thực hiện hành động nào của Khách hàng, cho
                dù là do lỗi cẩu thả, bất cẩn, cố ý làm sai, hoặc lừa dối (bao
                gồm, nhưng không hạn chế bởi trường hợp việc cung cấp, kê khai
                thông tin về Bưu gửi không đúng hoặc thiếu sót; đóng gói, bao
                bọc Bưu gửi không đầy đủ, không phù hợp, không cẩn thận, không
                tuân thủ quy định, hướng dẫn về đóng gói của CXMT, nhà sản xuất
                hay quy định của pháp luật; Thông tin Người Nhận không đúng hoặc
                thiếu sót Khách hàng không có chứng từ chứng minh Bưu gửi bị mất
                hoặc hư hỏng; Khách hàng không có chứng từ chứng minh việc sử
                dụng Dịch vụ, Khách hàng dán sai mã đơn hàng);
              </li>
              <li>
                Hành động hoặc không thực hiện hành động của một bên thứ ba, cho
                dù là do lỗi cẩu thả, bất cẩn, cố ý làm sai, hoặc lừa dối (bao
                gồm, nhưng không hạn chế bởi trường hợp hàng hóa bị cướp, giật;
                hư hỏng, mất mát gây ra bởi Người Nhận; hàng hóa không đáp ứng
                yêu cầu, tiêu chuẩn về chất lượng, quy cách, bao gồm nhưng không
                giới hạn trường hợp màu sắc, kích cỡ, chất liệu sản phẩm không
                đúng với hình ảnh, thông tin được cung cấp bởi người bán hàng
                hoặc nhà sản xuất; chuyến bay chậm trễ hoặc bị hủy; bị cơ quan
                chức năng kiểm tra trên đường vận chuyển);
              </li>
              <li>
                Đặc tính tự nhiên, khuyết tật vốn có của hàng hóa nằm trong Bưu
                gửi;
              </li>
              <li>
                Suy suyển, hao mòn, hư hỏng khách quan, tự nhiên diễn ra trong
                quá trình vận chuyển (bao gồm, nhưng không hạn chế bởi trường
                hợp hàng hóa bị thay đổi hình dáng, màu sắc khi nhiệt độ môi
                trường thay đổi, đặc điểm của hàng hóa gây ra tự cháy, biến
                chất, hao hụt, han gỉ, nứt vỡ, ẩm mốc…);
              </li>
              <li>
                Khách hàng từ chối nhận lại Bưu gửi hoặc CXMT không liên hệ được
                với Khách hàng sau khi CXMT đã thực hiện giao trả lại Bưu gửi ít
                nhất 03 (ba) lần. Trong trường hợp này, Khách hàng thừa nhận và
                đồng ý rằng Khách hàng đã từ bỏ mọi quyền và quyền yêu cầu và
                CXMT sẽ được miễn trừ khỏi mọi yêu cầu, trách nhiệm, khiếu kiện
                liên quan đến Bưu gửi. Để tránh hiểu lầm, sau 06 (sáu) tháng kể
                từ lần trả cuối cùng nêu trên, CXMT sẽ được quyền sở hữu hàng
                hoá trong Bưu gửi đó và rằng, Khách hàng cam kết không có bất kỳ
                khiếu nại, khiếu kiện nào về vấn đề này.
              </li>
              <li>
                Trong trường hợp một phần thiệt hại, tổn thất xảy ra do Khách
                hàng vi phạm, Khách hàng thừa nhận và đồng ý sẽ từ bỏ quyền yêu
                cầu đối với, và CXMT sẽ không có trách nhiệm bồi thường cho,
                phần thiệt hại, tổn thất tương ứng với mức độ thiệt hại do Khách
                hàng gây ra.
              </li>
              <li>
                Bưu gửi đã được phát và Người nhận không có ý kiến khi nhận Bưu
                gửi.
              </li>
              <li>
                Các trường hợp bất khả kháng theo quy định của Luật Việt Nam.
              </li>
            </ul>
          </div>
        </section>
        <p className="text-end mb-3">Hết.</p>
      </div>
    </div>
  );
};
export default Policy;
