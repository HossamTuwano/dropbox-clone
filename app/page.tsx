import Header from '@/components/Header'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <div className='flex lg:flex lg:flex-row  bg-[#1e1919]'>
        <div className='p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5'>
          <div>
            <h1 className='text-5xl font-bold'>
              Welcome to Dropbox
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              qui!
            </h1>
            <p className='pb-20'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae maiores soluta, voluptates commodi autem animi eaque
              sint voluptatem repellendus, nostrum praesentium vitae eveniet
              accusantium! Architecto laudantium laboriosam voluptate. Aliquid
              reprehenderit voluptate placeat doloribus quos quisquam, maiores
              voluptas facere sint dignissimos!
            </p>
            <Link
              href={'/dashboard'}
              className='flex items-center bg-blue-500 self-start p-5 w-fit'
            >
              {' '}
              Try it for free!
              <ArrowRight className='ml-10' />
            </Link>
          </div>
        </div>
        <div className='bg-[#1e1919] dark:bg-slate-800 h-full p-10'>
          <video autoPlay loop muted className='rounded-lg'>
            <source
              src='https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4'
              type='video/mp4'
            />
            Your browser does not support video tag.
          </video>
        </div>
      </div>
      <p>Disclaimer</p>
      <p className='text-center  font-light p-2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        repellendus iste optio voluptate, numquam beatae ab! Necessitatibus
        explicabo voluptatibus veniam voluptates, laudantium nam omnis odio
        molestias autem labore. Ut, quo? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aspernatur aliquid similique quod vitae corporis totam
        nemo dolores ad amet atque velit, deserunt delectus dignissimos
        recusandae ratione vel. Delectus, error quos!
      </p>
    </main>
  )
}
