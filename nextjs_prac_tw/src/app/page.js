import Image from 'next/image'
import AleartTest from '@/components/AlertTest'
import EmailWithIconTest from '@/components/EmailWithIconTest'
import TabTest from '@/components/TabTest'

export default function Home() {
  return (
    <>
      <TabTest />
      <h1 className="text-xl font-bold text-green-400">Hello World</h1>
      <AleartTest />
      <EmailWithIconTest />
    </>
  )
}
