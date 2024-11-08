import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

interface AvatarCardProps {
  url: string
  name: string
  position: string
}

export default function AvatarCard({ url, name, position }: AvatarCardProps) {
  return (
    <Avatar className="text-center flex flex-col gap-4">
      <div className="rounded-full border-2 border-gray-200 p-1">
        <AvatarImage src={url} alt={name} className="rounded-full max-w-48 lg:max-w-64" />
      </div>

      <div>
        <p className="brygada text-2xl text-slate-700">{name}</p>
        <span className="text-sm text-gray-500">{position}</span>
      </div>
    </Avatar>
  )
}
