import Auth from '@/components/auth/Auth'

interface UserProps {
  params: {
    user: string
  }
}

export default function UserPage({ params: { user } }: UserProps) {
  return <Auth />
}
