import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { AuthProvider } from "@/redux/provider";
import Header from "@/components/headers/Header";
import ToasterProvider from "@/providers/ToasterProvider";
import getServerUser from "@/actions/getServerUser";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import ModalProvider from "@/providers/ModalProvider";
import FloatAction from "@/components/FloatAction";
import Footer from "@/components/footers/Footer";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Chành Xe Miền Tây - Vận chuyển siêu nhanh, Giá siêu tốt",
    template: `%s | Chành Xe Miền Tây - Vận chuyển siêu nhanh, Giá siêu tốt`,
  },
  description:
    "Chành xe miền tây là hệ thống kết nối, vận chuyển hàng hóa thông qua hệ thống kết nối nhà chành mà vị trí chính là thành phố Hồ Chí Minh và các tỉnh miền tây.",
  generator: "Next.js",
  applicationName: "Chành Xe Miền Tây - Vận chuyển siêu nhanh, Giá siêu tốt",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Đặt vé chành xe Miền Tây",
    "Vận chuyển hàng hóa Miền Tây",
    "Chành xe Miền Tây giá rẻ",
    "Dịch vụ vận chuyển hàng Miền Tây",
    "Bảng giá chành xe Miền Tây",
    "Đơn vị chành xe uy tín Miền Tây",
    "Vận chuyển hàng hóa từ Miền Tây đi các tỉnh",
    "Chành xe Miền Tây nhanh chóng",
    "Tổng đài đặt vé chành xe Miền Tây",
    "Chành xe Miền Tây giao hàng tận nơi",
    "Công ty vận chuyển hàng hóa Miền Tây",
    "Đối tác chành xe Miền Tây",
    "Vé chành xe Miền Tây online",
    "Chành xe Miền Tây đảm bảo an toàn hàng hóa",
    "Chành xe Miền Tây chất lượng cao",
    "Tìm xe chở hàng từ Sài Gòn đến Miền Tây",
    "Chuyến xe chở hàng Sài Gòn Miền Tây",
    "Đặt chỗ xe chở hàng Sài Gòn - Miền Tây",
    "Dịch vụ chở hàng Sài Gòn Miền Tây uy tín",
    "Xe chở hàng TP. Hồ Chí Minh đến Miền Tây",
    "Tìm chỗ xe chở hàng từ TP. Hồ Chí Minh đến Miền Tây",
    "Chuyến xe chở hàng Sài Gòn nhanh chóng",
    "Đặt xe chở hàng từ Sài Gòn đi các tỉnh Miền Tây",
    "Tìm xe chờ hàng Sài Gòn Miền Tây",
    "Dịch vụ vận tải hàng hóa TP. Hồ Chí Minh - Miền Tây"
  ],
  authors: [
    { name: "Chành xe miền tây" },
    { name: "Chành xe" },
    { name: "Nguyen Trung Hieu", url: "https://github.com/nthieu1332002" },
  ],
  creator: "Chành xe miền tây",
  publisher: "Chành xe miền tây",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Chành Xe Miền Tây - Vận chuyển siêu nhanh, Giá siêu tốt",
    description: "Chành xe miền tây là hệ thống kết nối, vận chuyển hàng hóa thông qua hệ thống kết nối nhà chành mà vị trí chính là thành phố Hồ Chí Minh và các tỉnh miền tây.",
    images: [
      {
        url: "/open_image.png",
        width: 400,
        height: 300,
      },
    ],
  },
  verification: {
    google: "Q6IrZ6WdultCzfn7p0wuDtiaHfqW21m_2aVGHethVOg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getServerUser();
  return (
    <html lang="en" suppressHydrationWarning>
      {/* background color here if using color theme*/}
      <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
        <StyledComponentsRegistry>
          <ToasterProvider />
          <ModalProvider />
          <AuthProvider>
            <ConfigProvider theme={theme}>
              <FloatAction />
              <Header currentUser={currentUser} />
              {children}
              <Footer />
            </ConfigProvider>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
export const dynamic = "force-dynamic";
