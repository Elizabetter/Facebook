import { validateConfig } from "next/dist/server/config-shared";
import homeIcon from "../public/icons/home.svg";
import watchIcon from "../public/icons/watch.svg";
import friendIcon from "../public/icons/friend.svg";
import marketplaceIcon from "../public/icons/marketplace.svg";
import Image from 'next/image'
import Button from "../components/Button"

const config = [homeIcon, friendIcon, watchIcon, marketplaceIcon, homeIcon];

const Header = () => {
    return(
    <div class="flex top-0 right-0 left-0 z-1 h-14 bg-white">
        <div 
        // class="w-1/4"
        >
        
        </div>
        <div class="justify-center flex grow px-27.5"
        // class="w-1/2"
        >
            <ul class="justify-center flex grow px-27.5 list-none ">
                {config.map( i => 
                  <li 
                  // class="w-1/4"
                  >
                    <Button>
                      <Image class="max-h-7" src={i} alt={i}/>
                    </Button>
                  </li>
                )}
            </ul>
        </div>
        <div 
        // class=" w-1/4"
        >
          
        </div>
    </div>
    )
  }

  export default Header;