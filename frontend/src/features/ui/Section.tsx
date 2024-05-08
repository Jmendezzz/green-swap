
interface Props {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

function Section({ children, className }: Props) {
  return (
    <section className={`w-screen h-screen overflow-y-auto px-10 py-10 ${className}`}>
        {children}
    </section>
  )
}

export default Section