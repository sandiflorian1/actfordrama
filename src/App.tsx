import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'

const StudioPage = lazy(() => import('@/pages/StudioPage'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/studio/*"
          element={
            <Suspense
              fallback={
                <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
                  Se încarcă studio…
                </div>
              }
            >
              <StudioPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
