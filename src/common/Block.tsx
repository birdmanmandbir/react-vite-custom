interface slotProps {
  children: JSX.Element | JSX.Element[]
}

function Block(props: slotProps) {
  return <div style={{ marginBottom: 10 }}>{props.children}</div>
}

export default Block
