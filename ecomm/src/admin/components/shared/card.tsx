import { Text, clx } from "@medusajs/ui"

type CardProps = {
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

const Card = ({
  icon,
  children,
  className
}: CardProps) => {
  return (
    <div className={clx(
      "p-4 rounded-lg gap-3",
      "flex items-start shadow-elevation-card-rest",
      "bg-ui-bg-subtle",
      className
    )}>
      {icon}
      <Text size="base" className="text-ui-fg-subtle">{children}</Text>
    </div>
  )
}

export default Card