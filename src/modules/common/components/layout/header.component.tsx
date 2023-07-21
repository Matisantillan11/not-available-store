
import { CartIcon } from "../icons/cart-icon.component"
import { Hamburguer } from "./hamburguer.component"
export const Header = () => {
  return (
    <div className="pl-[15px] pr-[15px] w-full flex justify-between items-center h-[45px] bg-primary-white lg:justify-center">
      <Hamburguer />
      <p className=" text-[18px] font-bold">Not available</p>
      <CartIcon className="lg:absolute right-5" width={25} height={25}/>
    </div>
  )
}