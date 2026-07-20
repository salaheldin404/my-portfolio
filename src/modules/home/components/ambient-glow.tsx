
const AmbientGlow = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </div>
  )
}

export default AmbientGlow
