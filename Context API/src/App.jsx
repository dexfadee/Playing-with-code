import { useEffect, useState } from "react"
import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
    document.querySelector("body").classList.remove('bg-gray-700')
  }

  const darkTheme = () => {
    setThemeMode('dark')
    document.querySelector("body").classList.add('bg-gray-700')
  }

  useEffect(() => {
    document.querySelector("html").classList.remove('light', 'dark')
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
