import Favourites from '@/components/dashboard/Favourites/Favourites'
import Folders from '@/components/dashboard/Folders/Folders'
import Recent from '@/components/dashboard/Recent/Recent'
import Table from '@/components/dashboard/Table/Table'
import Total from '@/components/dashboard/Total/Total'

export default function DashboardPage() {
  return (
    <div className="w-full m-8 flex space-x-4">
      <Total />
      <Folders />
      <Table />
      <div className="flex flex-col w-1/5">
        <Recent />
        <Favourites />
      </div>
    </div>
  )
}
