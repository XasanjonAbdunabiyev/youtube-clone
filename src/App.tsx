import { Route, Routes } from "react-router-dom";

import { routes } from "@/routes/Routes";

export function App() {
  return (
    <Routes>
      {routes?.map((page) => {
        return (
          <Route
            key={page.path}
            element={<page.element />}
            path={page.path}
          />)
      })}
    </Routes>
  )
}