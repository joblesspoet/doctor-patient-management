import Header from "@components/header/Header";
import SpecialityMenu from "@components/home/SpecialityMenu";
import TopDoctors from "@components/doctors/TopDoctors";
import BannerHome from "@components/banner/BannerHome";
import Footer from "@components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <BannerHome />
    </div>
  );
}
