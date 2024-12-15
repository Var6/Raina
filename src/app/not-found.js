import Link from 'next/link'
import { headers } from 'next/headers'

async function getSiteData(domain) {
    // Simulating an API call to fetch site data
    return {
      name: 'My Awesome Site',
      description: 'A fantastic site built with Next.js',
      domain: domain,
    }
  }
 
export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Wait, What??</h1>
          <h2 className="text-2xl font-bold mb-8">
            You&apos;re searching for <span className="text-red-500">{data.domain}</span>? Eeuuu...
          </h2>
          <p className="text-lg mb-8">
            That page doesn`&apos;t exist, but don`&apos;t worry, we`&apos;ve got you covered!
          </p>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Click me to go back home!
          </Link>
        </div>
      </div>
    </div>
  )
}