interface UserProps {
  params: {
    user: string
  }
}

export default function UserPage({ params: { user } }: UserProps) {
  return <h1>You are logged as {user}</h1>
}
