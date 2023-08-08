import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./pages/Links";
import Layout from "./components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import Profile from "./pages/profile";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";
import { linksActions } from "./store/links-slice";
import { profileActions } from "./store/profile-slice";
import Preview from "./pages/Preview";

function App() {
  const links = useSelector((state) => state.links);
   const profile = useSelector((state) => state.profile.profileDetails);
  const [previewLinks] = useLocalStorage("previewLinks", []);
  const [previewProfile] = useLocalStorage(
    "previewProfile",
    {}
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(linksActions.addToPreviewLinks(previewLinks));
    dispatch(profileActions.updateProfileDetails(previewProfile));
  }, [dispatch]);
  console.log(profile)
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Links previewLinks={links.previewLinks} profile={profile} />
              }
            ></Route>
            <Route
              path="/links"
              element={
                <Links previewLinks={links.previewLinks} profile={profile} />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile previewLinks={links.previewLinks} profile={profile} />
              }
            ></Route>
            <Route
              path="/preview"
              element={
                <Preview previewLinks={links.previewLinks} profile={profile} />
              }
            ></Route>
          </Routes>
        </Layout>
      </ChakraProvider>
    </Router>
  );
}

export default App;
