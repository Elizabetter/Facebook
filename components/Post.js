import { validateConfig } from "next/dist/server/config-shared";
import homeIcon from "../public/icons/home.svg";
import watchIcon from "../public/icons/watch.svg";
import friendIcon from "../public/icons/friend.svg";
import marketplaceIcon from "../public/icons/marketplace.svg";

const config = [homeIcon, friendIcon, watchIcon, marketplaceIcon];

const Post = ({title, author, description, imageSrc, imageAlt, icon}) => {
    return(
    <div class="mb-4 bg-white relative flex flex-col py-4 w-[526px] mx-auto rounded-[10px]">

        <div class="pt-3 mb-3 px-4 flex">

          <div class="mr-2 w-11 h-11">
            <img class="rounded-full" alt="icon" src={icon} />
          </div>

          <div class='w-[100%] max-h-[40px] '>
            <div class="max-h-[20px]">
              <h4 class="font-semibold">
                {title}
              </h4>
            </div>
            <div class="max-h-[20px] text-[13px] leading-[1.2308] font-normal text-[#65676B]">
                {author}
            </div>
          </div>
{/* onclick rgba(0, 0, 0, 0.05) */}
          <div class="h-5 p-[8px] text-[#65676B]">
          <svg 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          width="1.5em" 
          height="1.35em" 
          ><g fill-rule="evenodd" transform="translate(-446 -350)">
            <path 
            d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
            ></path></g>
            </svg>
          </div>

        </div>

        <div  class=" mb-3 px-4 flex">
          {description}
        </div>

        <div class="m-h-62">
          <img
          height="526" 
          width="526" 
          alt={imageAlt} 
          src={imageSrc}
          />
        </div>
    </div>
    )
  }

  export default Post;