import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { AuthProvider } from "@/redux/provider";
import Header from "@/components/headers/Header";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/actions/getCurrentUser";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import ModalProvider from "@/providers/ModalProvider";
import FloatAction from "@/components/FloatAction";
import Footer from "@/components/footers/Footer";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chành Xe Miền Tây - Vận chuyển siêu nhanh, Giá siêu tốt",
  description:
    "Chành xe Miền Tây - Công ty giao nhận đầu tiên tại Việt Nam được thành lập năm 2023, với sứ mệnh phục vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác Thương mại điện tử trên toàn quốc. GHN cam kết mang đến cho khách hàng những trải nghiệm dịch vụ giao nhận nhanh, an toàn, hiệu quả giúp người bán hàng bán được nhiều hơn, người mua hàng hài lòng hơn.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return (
    <html lang="en" translate="no">
      {/* background color here if using color theme*/}
      <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
        <StyledComponentsRegistry>
          <ToasterProvider />
          <ModalProvider />
          <AuthProvider>
            <ConfigProvider theme={theme}>
              <FloatAction/>
              <Header currentUser={currentUser} />
              {children}
              <Footer/>
            </ConfigProvider>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
