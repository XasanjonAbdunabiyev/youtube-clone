import { Route, Routes } from "react-router-dom";

import { routes } from "@/routes/Routes";

import { PrivateRoute } from "@/routes/private-route"

export function App() {
  return (
    <Routes>
      {routes?.map((page) => {
        return (
          <Route
            key={page.path}
            element={
              page.private === true ?
                <PrivateRoute>
                  <page.element />
                </PrivateRoute> : <page.element />
            }
            path={page.path}
          />
        )
      })}
    </Routes>
  )
}