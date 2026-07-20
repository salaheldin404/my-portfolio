
const TabSection = ({
  title,
  description,
  maxWidth = "max-w-full",
  children,
}: {
  title: string
  description: string
  maxWidth?: string
  children: React.ReactNode
}) => (
  <div className={`space-y-6 ${maxWidth}`}>
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {children}
  </div>
)

export default TabSection