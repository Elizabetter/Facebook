import React from 'react';
import Post from './Post';

const postConfig = [
  {
    title: "Work in Lithuania",
    author: "Реклама",
    description: " Ready to level up your tech career? Lithuania has the opportunities you’re looking for", 
    imageSrc: "https://scontent-fra5-2.xx.fbcdn.net/v/t45.1600-4/304943413_23852216338630070_585852726833181013_n.png?stp=cp0_dst-jpg_p526x296_q90_spS444&_nc_cat=101&ccb=1-7&_nc_sid=67cdda&_nc_ohc=Z6yNcz0qiXYAX_ERFpo&tn=H1FrH4z4YeM_p53L&_nc_ht=scontent-fra5-2.xx&oh=00_AfC9Z21P-tO5P4aSAzpMCOC6n1E8ONjRXBFiyuiHH_JE-A&oe=63EE100D", 
    imageAlt: "Build your dream tech career",
    icon: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-1/305494930_1961970017335069_2837634313542442930_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=shyWfBAZ0LQAX8drJtP&_nc_ht=scontent-fra5-2.xx&oh=00_AfDdBNpajHmC60otifdZ_NuJbGDDRnENuhJ4tbXopKtHyw&oe=63EF8E26"
  },
  {
    title: "Природа",
    author: "Галина. Сидорович Галина",
    description: "ЗАВОРАЖИВАЕТ", 
    imageSrc: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/330849426_1165911457462502_2277910176320608742_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=zExS6FDwn6sAX8r6faV&tn=H1FrH4z4YeM_p53L&_nc_ht=scontent-fra5-2.xx&oh=00_AfBET_6tOBIwJe9XMlrK6EIE6xUfc8NlKpnGEoLVZuWB1A&oe=63EF7DAE", 
    imageAlt: "Водопад и природа",
    icon: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/275556123_673495543844141_6910253607087426818_n.jpg?stp=c0.5.64.64a_cp0_dst-jpg_p64x64&_nc_cat=105&ccb=1-7&_nc_sid=70495d&_nc_ohc=pRcui-sf-lcAX9draeC&_nc_ht=scontent-fra5-2.xx&oh=00_AfCZWZDG67bNZghvrIqP65rt_iDqhLfkFgDfWorYR1gR6g&oe=63EF7AB6"
  },
  {
    title: "BarefeetintheKitchen.com",
    author: "Реклама",
    description: "No-Bake Blueberry Cheesecake Squares with a graham cracker crust are an easy dessert recipe.", 
    imageSrc: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/328633884_1848140525571983_2787740039710460318_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=b1OKqcb0G9oAX_em9rZ&tn=H1FrH4z4YeM_p53L&_nc_ht=scontent-fra5-2.xx&oh=00_AfBbxH5Cb_t8wRUDom2afpNA3UzcSwdrC_uPhHyGi_9NXg&oe=63F0C7B2", 
    imageAlt: "Пирог",
    icon: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-1/236275659_383326569818441_4027079316998973661_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=9DYHwsM2QpkAX82GxXk&_nc_ht=scontent-fra5-2.xx&oh=00_AfC9nYiJsceyhvDFMBrfIkuiSaIC9B6L1rJHffMnqtgmZA&oe=63EFBA4B"
  },
  // {
  //   title: "",
  //   author: "",
  //   description: "", 
  //   imageSrc: "", 
  //   imageAlt: "",
  // },
  // {
  //   title: "",
  //   author: "",
  //   description: "", 
  //   imageSrc: "", 
  //   imageAlt: "",
  // },
]
const MainContent = () => {
  return(
    <div
      class="flex flex-col justify-center basis-186 small:w-[71%] max-[898px]:mx-auto"
    >
      {postConfig.map(
        ({title, author, description, imageSrc, imageAlt, icon}) => 
        <Post title={title} author={author} description={description} imageSrc={imageSrc} imageAlt={imageAlt} icon={icon}/>
        )}
    </div>
    )
  }

  export default MainContent;