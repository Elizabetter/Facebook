import Header from "../components/Header"
import Navigation from "../components/Navigation"
import MainContent from "../components/MainContent"
import Complementary from "../components/Complementary"

const Home = () => {

  function UseEffectTest() {

    const [name, setName] = useState('Adam');

    useEffect(() => {
        console.log(`2, name: ${name}`);
        setName('Eva');

        return () =>  console.log(`3, name: ${name}`)
    }, [name]);

    console.log(`1, name: ${name}`);
    
    return (
        <span>
            {name}
        </span>
    )
}

  return(
    <div class="bg-light-grey min-h-screen min-w-full">
    <Header/>
    <div class="flex flex-row mt-4 
   
    ">
      <Navigation></Navigation>
      <MainContent></MainContent>
      <Complementary></Complementary>
    </div>
    {UseEffectTest()}
</div>

  )
}
// const Home: NextPage = () => {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-2">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
//         <h1 className="text-6xl font-bold">
//           Welcome to{' '}
//           <a className="text-blue-600" href="https://nextjs.org">
//             Next.js!
//           </a>
//         </h1>  
//         <nav class="flex justify-center space-x-4">
//   <a href="/dashboard" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
//   <a href="/team" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
//   <a href="/projects" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
//   <a href="/reports" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
// </nav>
//         <p className="mt-3 text-2xl">
//           Get started by editing{' '}
//           <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
//             pages/index.tsx
//           </code>
//         </p>

//         <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
//           <a
//             href="https://nextjs.org/docs"
//             className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Find in-depth information about Next.js features and its API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn"
//             className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Learn &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Learn about Next.js in an interactive course with quizzes!
//             </p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Examples &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Discover and deploy boilerplate example Next.js projects.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//           >
//             <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
//             <p className="mt-4 text-xl">
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className="flex h-24 w-full items-center justify-center border-t">
//         <a
//           className="flex items-center justify-center gap-2"
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//         </a>
//       </footer>
//     </div>
//   )
// }

export default Home
