import Link from 'next/link'
import { AuthPageEnum } from '@/components/types/auth'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`auth/${AuthPageEnum.LOGIN_FORM}`}>Auth</Link>
    </main>
  )
}
