import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Welcome To 
        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent"> Inma Maldives!</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">We are Inma Maldives, the sole distributor of MJ's brand in the Maldives. Our carefully curated collection of premium products from MJ's embodies excellence, quality, and innovation. We take pride in providing our customers with the best selection of products, always keeping up with the latest trends and innovations. Explore our website to discover the full range of products we offer and experience the excellence of MJ's brand firsthand.</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Our Products</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-orange-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-red-600 via-red-600 to-red-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}
