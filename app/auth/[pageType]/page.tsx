import Auth from '@/components/auth/Auth'
import {AuthPageEnum} from '@/components/types/auth'

interface UserProps {
  params: {
    pageType: AuthPageEnum
  }
}

export default function AuthPage({ params: { pageType } }: UserProps) {
  return <Auth page={pageType} />
}
