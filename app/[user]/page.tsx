interface UserProps {
  params: {
    user: string
  }
}

export default function UserPage({ params: { user } }: UserProps) {
  return <div>Hi,{user}!</div>
}
