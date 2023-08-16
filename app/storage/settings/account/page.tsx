import Input from '@/ui/Input/Input'

export default function AccountPage() {
  return (
    <div className="flex flex-col ml-4 space-y-3 w-full">
      <div className="flex justify-between border rounded-lg p-4">
        <div className="flex space-x-4">
          <div className="flex w-24 h-24 rounded-full bg-main">
            <span className="m-auto text-xl">LK</span>
          </div>
          <div className="flex flex-col justify-center">
            <h5>Lev Kazalov Huila</h5>
            <span>test@gmail.com</span>
          </div>
        </div>
        <div className="border rounded-lg w-16 h-8 self-center text-center pt-1 cursor-pointer">
          Edit
        </div>
      </div>
      <div className="p-5 border rounded-lg">
        <div className="flex justify-between">
          <h5 className="text-xl font-semibold">Personal Information</h5>
          <div className="border rounded-lg w-16 h-8 self-center text-center pt-1 cursor-pointer">
            Edit
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/3">
            <Input label="First Name" name="firstName" />
            <Input label="Last Name" name="lastName" />
          </div>
          <div className="w-1/3">
            <Input label="Phone" name="phone" />
            <Input label="Bio" name="bio" />
          </div>
        </div>
      </div>
    </div>
  )
}
