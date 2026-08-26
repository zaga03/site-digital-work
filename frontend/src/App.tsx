import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Realisations from "./pages/Realisations";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProtectedRoute from "./pages/admin/AdminProtectedRoute";
import ProjectForm from "./pages/admin/ProjectForm";

/* =========================================================
   PROJECT EDIT ROUTE
========================================================= */

function ProjectEditRoute() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className="min-h-screen bg-dw-background p-10 text-dw-text">
        Identifiant du projet invalide.
      </div>
    );
  }

  return <ProjectForm projectId={id} />;
}

/* =========================================================
   APP
========================================================= */

function App() {
  const location = useLocation();

  /*
   * Toutes les routes commençant par /admin
   * sont considérées comme des routes administrateur.
   */
  const isAdminRoute =
    location.pathname.startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col bg-dw-background text-dw-text">

      {/* ===================================================
          PUBLIC NAVBAR
      ==================================================== */}

      {!isAdminRoute && <Navbar />}

      {/* ===================================================
          MAIN CONTENT
      ==================================================== */}

      <main className="flex-1">
        <Routes>

          {/* =================================================
              PUBLIC
          ================================================== */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/solutions"
            element={<Solutions />}
          />

          <Route
            path="/realisations"
            element={<Realisations />}
          />

          <Route
            path="/a-propos"
            element={<APropos />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =================================================
              ADMIN LOGIN
          ================================================== */}

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          {/* =================================================
              ADMIN DASHBOARD
          ================================================== */}

          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

          {/* =================================================
              CREATE PROJECT
          ================================================== */}

          <Route
            path="/admin/projects/new"
            element={
              <AdminProtectedRoute>
                <ProjectForm />
              </AdminProtectedRoute>
            }
          />

          {/* =================================================
              EDIT PROJECT
          ================================================== */}

          <Route
            path="/admin/projects/:id/edit"
            element={
              <AdminProtectedRoute>
                <ProjectEditRoute />
              </AdminProtectedRoute>
            }
          />

          {/* =================================================
              FALLBACK
          ================================================== */}

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>
      </main>

      {/* ===================================================
          PUBLIC FOOTER
      ==================================================== */}

      {!isAdminRoute && <Footer />}

    </div>
  );
}

export default App;