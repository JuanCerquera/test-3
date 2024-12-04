export function StatisticCard({Icon, title, value}) {
  return (
    <div className="bg-slate-50 rounded-xl shadow-md p-4 w-full flex flex-row gap-2 items-center border border-gray-200">
      <div className="bg-gray-200 rounded-full p-3">
        <Icon className="size-8 text-primary"/>
      </div>
      <div>
        <span className="block text-gray-400 text-sm">{ title }</span>
        <span className="font-semibold">{value}</span>
      </div>
    </div>
  )
}