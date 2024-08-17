import Background from "@/app/components/useless/Background";
import Header, { HeaderTop } from "@/app/components/useless/Header";
import BookmarksButton from "@/app/components/BookmarksButton";
import SearchForm from "@/app/components/SearchForm";
import Container from "@/app/components/useless/Container";
import Sidebar, { SidebarTop } from "@/app/components/useless/Sidebar";
import Footer from "@/app/components/useless/Footer";
import ResultsCount from "@/app/components/ResultsCount";
import { Toaster } from "react-hot-toast";

// Background, Header, HeaderTop, Container, Sidebar, Footer are useless (only for styling)
export default function Home() {
  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          rmt_dev
          <BookmarksButton />
        </HeaderTop>
        <SearchForm />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
          </SidebarTop>
        </Sidebar>
      </Container>

      <Footer />
      <Toaster position="top-right" />
    </>
  );
}
