import { ModeToggle } from "./ModeToggle"
import ProductButton from "./ProductButton"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-10 py-3">
        <h1 className="text-3xl font-bold">App</h1>
        <div className="flex items-center gap-5">
            <ProductButton />
            <ModeToggle />
        </div>
    </nav>
  )
}

export default Navbar