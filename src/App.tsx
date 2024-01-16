import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import Layout from "./layouts/default";
import DetailStay from "./views/DetailStay";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Alias Token
            colorBgContainer: "#fff",
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            {/* PUBLIC ACCESS */}
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Layout />}>
              {
                <>
                  <Route
                    path="/"
                    element={
                      <Navigate
                        to="/stay/the-langham-jakarta-9001948244/?guest_per_room=2&number_of_room=1&checkin=2024-06-25&checkout=2024-06-26"
                        replace
                      />
                    }
                  />
                  <Route path="/stay/:slug" element={<DetailStay />} />
                </>
              }
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

function PageNotFound() {
  return (
    <div>
      <h2 className="mt-20 w-100 text-center font-thin">
        404 | Page not found
      </h2>
      <div className="mt-5 text-center hover:text-monochrome-300">
        <a href="/">Click here to continue.</a>
      </div>
    </div>
  );
}

export default App;
